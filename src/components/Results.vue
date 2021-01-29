<template>
  <div v-if="results" class="results">
      <div class="results-text">
      {{ results.text }}</div>
  <div>
      </div>
      </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Results",
  computed: {
    ...mapGetters(["results"]),
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
</style>