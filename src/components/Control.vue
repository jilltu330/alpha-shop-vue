<template>
  <div class="btn control d-flex justify-content-between">
    <button
      :disabled="this.$route.name === 'address'"
      class="btn btn-pre"
      id="btn-pre"
      @click.stop.prevent="previousStep"
    >
      上一步
    </button>
    <button
      v-show="this.$route.name !== 'payment'"
      class="btn btn-next"
      id="btn-next"
      @click.stop.prevent="nextStep"
    >
      下一步
    </button>
    <button
      v-show="this.$route.name === 'payment'"
      class="btn btn-next"
      id="btn-next"
      @click.stop.prevent="nextStep"
    >
      確認訂單
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep() {
      if (this.$route.name === "address") {
        console.log(this.$route)
        this.$router.push({ name: "delivery" });
      } else if (this.$route.name === "delivery") {
        this.$router.push({ name: "payment" });
      } else {
        return null;
      }
    },
    previousStep() {
      if (this.$route.name === "payment") {
        this.$router.push({ name: "delivery" });
      } else if (this.$route.name === "delivery") {
        this.$router.push({ name: "address" });
      } else {
        return null;
      }
    },
    
  },
};
</script>