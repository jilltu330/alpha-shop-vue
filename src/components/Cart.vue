<template>
  <div class="container cart-container">
    <h3 class="cart-title">購物籃</h3>
    <!-- cart products -->
    <div class="cart-panel product-list">
      <div
        v-for="product in initialProducts"
        :key="product.id"
        class="cart-panel product-list product"
      >
        <img
          :src="require(`../assets/images/${product.img}.png`)"
          alt=""
          class="product-img"
        />
        <div class="product-wrapper">
          <div class="product-name">{{ product.name }}</div>
          <div class="cart-btn-wrapper">
            <button
              class="btn-cart minus-button mr-5"
              @click.stop.prevent="changeQty(product.id, false)"
            >
              -
            </button>
            <div class="item-num">{{ product.qty }}</div>
            <button
              class="btn-cart plus-button ml-5"
              @click.stop.prevent="changeQty(product.id, true)"
            >
              +
            </button>
          </div>
          <div class="product-price">${{ product.price }}</div>
        </div>
      </div>
    </div>
    <!-- cart amount -->
    <div class="cart-panel amount-panel">
      <div class="cart-panel amount-container delivery">
        <p class="title delivery-title">運費</p>
        <p class="fee selected-delivery-fee">
          ${{ initialUser.delivery === 0 ? "免運" : initialUser.delivery }}
        </p>
      </div>
      <div class="cart-panel amount-container total">
        <p class="title amount-title">小計</p>
        <p class="fee amount-total">${{ initialUser.totalCost }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProducts: {
      type: Array,
      reauired: true,
    },
    initialUser: {
      type: Object,
      default: () => ({
        delivery: 0,
        totalCost: 0,
      }),
    },
  },
  methods: {
    changeQty(id, isPlus) {
      this.$emit("change-item-qty", id, isPlus);
    },
  },
};
</script>

<style scoped>
</style>