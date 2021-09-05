<template>
  <div class="container cart-container">
    <h3 class="cart-title">購物籃</h3>
    <div class="cart-panel product-list">
      <div class="cart-panel product-list product">
        <img
          src="https://i.ibb.co/SsdJMh6/Block2x.png"
          alt=""
          class="product-img"
        />
        <div class="product-wrapper">
          <div class="product-name">破壞補丁修身牛仔褲</div>
          <div class="cart-btn-wrapper">
            <button class="btn-cart minus-button mr-5">-</button>
            <div class="item-num">1</div>
            <button class="btn-cart plus-button ml-5">+</button>
          </div>
          <div class="product-price">$3999</div>
        </div>
      </div>

      <div class="cart-panel product-list product">
        <img
          src="https://i.ibb.co/fnyhVZJ/Block2px.png"
          alt=""
          class="product-img"
        />
        <div class="product-wrapper">
          <div class="product-name">刷色直筒牛仔褲</div>
          <div class="cart-btn-wrapper">
            <button class="btn-cart minus-button mr-5">-</button>
            <div class="item-num">1</div>
            <button class="btn-cart plus-button ml-5">+</button>
          </div>
          <div class="product-price">$1299</div>
        </div>
      </div>
    </div>
    <div class="cart-panel amount-panel">
      <div class="cart-panel amount-container delivery">
        <p class="title delivery-title">運費</p>
        <p class="fee selected-delivery-fee">免運</p>
      </div>
      <div class="cart-panel amount-container total">
        <p class="title amount-title">小計</p>
        <p class="fee amount-total">$5298</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>