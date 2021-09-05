<template>
  <div class="container check-out-container py-5">
    <section class="stepper-panel" id="step-control">
      <Stepper />
    </section>
    <section class="form-panel">
      <router-view
        :initial-user="user"
        @after-delivery-select="handleDeliverySelect"
      ></router-view>
    </section>
    <section class="cart-panel">
      <Cart
        :initial-products="products"
        :initial-user="user"
        @change-item-qty="handleQtyChange"
      />
    </section>
    <section class="control-panel" id="btn-control">
      <Control />
    </section>
  </div>
</template>

<script>
import Stepper from "./../components/Stepper";
import Cart from "./../components/Cart";
import Control from "./../components/Control";

export default {
  data() {
    return {
      user: {
        id: -1,
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        delivery: 0,
        cardName: "",
        cardNum: "",
        goodThur: "",
        CVC: "",
        totalCost: 0,
      },
      products: [
        {
          name: "破洞補釘牛仔褲",
          img: "product1",
          qty: 1,
          price: 3999,
          id: 1,
        },
        {
          name: "刷色直筒牛仔褲",
          img: "product2",
          qty: 1,
          price: 1299,
          id: 2,
        },
      ],
    };
  },
  components: {
    Stepper,
    Cart,
    Control,
  },
  created() {
    this.countTotal();
  },
  methods: {
    countTotal() {
      this.user.totalCost = this.user.delivery;
      this.products.forEach((product) => {
        this.user.totalCost += product.qty * product.price;
      });
    },
    handleDeliverySelect(value) {
      this.user.delivery = Number(value);
      this.countTotal();
    },
    handleQtyChange(id, isPlus) {
      const product = this.products.find((product) => product.id === id);
      if (isPlus) {
        product.qty++;
      } else if (product.qty > 0) {
        product.qty--;
      } else {
        return;
      }
      this.countTotal();
    },
  },
};
</script>

<style lang="scss" scoped></style>
