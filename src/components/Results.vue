<template>
  <div v-if="results" class="results">
      <div>
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
<style scoped></style>