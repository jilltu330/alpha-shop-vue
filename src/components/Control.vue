<template>
  <div class="btn control d-flex justify-content-between">
      <router-link :to="{ name: previousStep() }">
        <button class="btn btn-pre" id="btn-pre">上一步</button>
      </router-link>
      <router-link :to="{ name: nextStep() }">
        <button class="btn btn-next" id="btn-next" >下一步</button>
      </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep() {
      if (this.$route.name === "address") {
        return "delivery";
      } else if (this.$route.name === "delivery") {
        return "payment";
      } else {
        return null;
      }
    },
    previousStep() {
      if (this.$route.name === "payment") {
        return "delivery";
      } else if (this.$route.name === "delivery") {
        return "address";
      } else {
        return null;
      }
    },
  },
};
</script>