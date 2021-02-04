<template>
  <div class="search">
    <h2>select what you're searching for</h2>
    <div class="search-btns">
      <div
        class="search-selection-btn"
        @click="updateSelection('DishPairing', 'Dish pairing for wine')"
        :class="{ active: activeSearch === 'DishPairing' }"
      >
        DISH PAIRING FOR WINE
      </div>
      <div
        class="search-selection-btn"
        @click="updateSelection('WinePairing', 'Enter a food for wine pairing')"
        :class="{ active: activeSearch === 'WinePairing' }"
      >
        WINE PAIRING
      </div>
      <div
        class="search-selection-btn"
        @click="updateSelection('WineDesc', 'Wine description')"
        :class="{ active: activeSearch === 'WineDesc' }"
      >
        WINE DESCRIPTION
      </div>
    </div>
    <input
      id="search-input"
      type="text"
      :placeholder="searchPlaceholder"
      v-model="searchValue"
    />
    <button @click="handleAPICalls(activeSearch)" class="search-btn">
      SEARCH
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {
      searchPlaceholder: "",
      searchValue: "",
      activeSearch: "",
    };
  },
  methods: {
    updateSelection(name, placeholder) {
      this.activeSearch = name;
      this.searchPlaceholder = placeholder;
    },
    handleAPICalls(searchType) {
      const urlBase = this.getURLBase(searchType);
      const apiKey = `&apiKey=${process.env.VUE_APP_SPOONACULAR_API}`;
      const query = this.searchValue;
      const finalURL = `${urlBase}${query}${apiKey}`;
      console.log(finalURL);
      const getPairing = new Promise((resolve, reject) => {
        this.axios
          .get(finalURL)
          .then((res) => {
            resolve(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            reject(err);
            console.log(err);
          });
      });
      getPairing
        .then((res) => {
          console.log(res);
          if (res.message) {
            this.$store.commit("setError", res.message);
          } else {
            this.$store.commit("setError", undefined);
            this.$store.commit("setResults", res);
          }
        })
        .catch((err) => {
          console.log(err.message);
          this.$store.commit("setResults", undefined);
          this.$store.commit("setError", err.message);
        });
    },
    getURLBase(searchType) {
      switch (searchType) {
        case "DishPairing":
          return "https://api.spoonacular.com/food/wine/dishes?wine=";
        case "WinePairing":
          return "https://api.spoonacular.com/food/wine/pairing?food=";
        case "WineDesc":
          return "https://api.spoonacular.com/food/wine/description?wine=";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-family: "Source Serif Pro", serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 10px auto 20px auto;
  text-align: left;
  letter-spacing: 2px;
}

.search {
  font-size: 1rem;
  color: #5d0808;
  padding: 30px 40px;
}
.search-btns {
  display: flex;
  flex-direction: column;
}
.search-btn {
  background-color: #5d0808;
  color: #f6eee9;
  border-radius: 5px;
  border: none;
  letter-spacing: 4px;
  padding: 10px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin: 15px 0 5px 0;
}
.search-selection-btn {
  cursor: pointer;
  background-color: #f6eee9;
  border-radius: 5px;
  border: 2px solid #ddb6b6;
  letter-spacing: 2px;
  padding: 5px;
  font-family: "Inter", sans-serif;
  margin: 7px 0;
}
#search-input {
  width: 100%;
  margin-top: 10px;
  padding: 5px;
}
button {
  cursor: pointer;
}

.active {
  background-color: #5d0808;
  color: #f6eee9;
  border: 0.5px solid #5d0808;
}
</style>
