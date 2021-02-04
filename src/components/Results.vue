<template>
  <div>
    <section class="results" v-if="results">
      <div v-if="results.pairingText" class="results-text">
        {{ results.pairingText }}
      </div>
      <div v-else-if="results.wineDescription" class="results-text">
        {{ results.wineDescription }}
      </div>
      <div v-else-if="results.text" class="results-text">
        {{ results.text }}
      </div>
    </section>
    <section class="errors" v-if="error">
      <p class="results-text">Hey something went wrong!</p>
      {{ error }}
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Results",
  computed: {
    ...mapGetters(["results", "error"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results-text {
  letter-spacing: 2px;
  color: #5d0808;
  padding: 10px 40px 10px 40px;
  font-family: "Inter", sans-serif;
}

.errors {
    letter-spacing: 2px;
  color: #5d0808;
  font-family: "Inter", sans-serif;
}
</style>
