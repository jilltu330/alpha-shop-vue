<template>
  <div class="container check-out-container py-5">
    <section class="stepper-panel" id="step-control">
      <Stepper />
    </section>
    <section class="form-panel">
      <router-view></router-view>
    </section>
    <section class="cart-panel">
      <Cart />
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
  components: {
    Stepper,
    Cart,
    Control,
  }
};
</script>

<style lang="scss" scoped>
</style>