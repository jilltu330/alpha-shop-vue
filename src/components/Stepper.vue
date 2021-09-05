<template>
  <div class="step-wrapper">
    <h3 class="stepper-panel-title ml-5">結帳</h3>
    <div class="container stepper-container">
      <div
        class="step"
        :class="{
          active: this.$route.name === 'address',
          checked: this.$route.name !== 'address',
        }"
      >
        <div class="circle-container"></div>
        <div class="label-container">寄送地址</div>
      </div>
      <div
        class="step"
        :class="{
          active: this.$route.name === 'delivery',
          checked: this.$route.name === 'payment',
        }"
      >
        <div class="circle-container"></div>
        <span class="connect-line"></span>
        <div class="label-container">運送方式</div>
      </div>
      <div class="step" :class="{ active: this.$route.name === 'payment' }">
        <div class="circle-container"></div>
        <span class="connect-line"></span>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>