<template>
  <div class="btn control d-flex justify-content-between">
    <router-link
      class="btn btn-pre"
      id="btn-pre"
      :to="{ name: previousStep() }"
      :disabled="this.$route.name === 'address'"
      >上一步
    </router-link>

    <router-link
      v-show="this.$route.name !== 'payment'"
      class="btn btn-next"
      id="btn-next"
      :to="{ name: nextStep() }"
      >下一步
    </router-link>

    <router-link
      v-show="this.$route.name === 'payment'"
      class="btn btn-next"
      id="btn-next"
      :to="{ name: nextStep() }"
      >確認訂單
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