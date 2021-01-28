<template>
  <div class="search">
    <h2>select what you're searching for</h2>
    <div class="search-btns">
      <div
        class="search-selection-btn"
        @click="updatePlaceholderTextDishPairing()"
        :class="{ active: activeSearch === 'DishPairing' }"
      >
        DISH PAIRING FOR WINE
      </div>
      <div class="search-selection-btn" @click="handleWinePairing()">
        WINE PAIRING
      </div>
      <div class="search-selection-btn" @click="handleWineDescription()">
        WINE DESCRIPTION
      </div>
      <div class="search-selection-btn" @click="handleWineRecommendations()">
        WINE RECOMMENDATIONS
      </div>
    </div>
    <input
      id="search-input"
      type="text"
      :placeholder="searchPlaceholder"
      v-model="searchValue"
    />
    <button @click="handleDishPairing()" class="search-btn">SEARCH</button>
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
    updatePlaceholderTextDishPairing() {
      this.searchPlaceholder = "Dish pairing for wine";
      this.activeSearch = "DishPairing";
    },

    async handleDishPairing() {
      const apiKey = `&apiKey=${process.env.VUE_APP_SPOONACULAR_API}`;
      const query = this.searchValue;
      const urlBase = "https://api.spoonacular.com/food/wine/dishes?wine=";
      const finalURL = `${urlBase}${query}${apiKey}`;
      this.axios
        .get(finalURL)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    handleWinePairing() {
      alert("this works!");
    },
    handleWineDescription() {
      alert("this works!");
    },
    handleWineRecommendations() {
      alert("this works!");
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
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-family: "Inter", sans-serif;
}

.active {
    background-color: #5d0808;
    color:#f6eee9;
}
</style>
