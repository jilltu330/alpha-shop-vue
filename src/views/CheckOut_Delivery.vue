<template>
  <div class="container form-container">
    <form id="a-form">
      <div class="form-content">
        <div class="part part-delivery">
          <h3 class="title">運送方式</h3>
          <div class="form-row standard-wrapper">
            <div class="inner-wrapper">
              <input
                type="radio"
                name="delivery"
                id="standard"
                class="standard"
              />
              <label for="standard">
                <div class="method">標準運送</div>
                <div class="time">約 3~7 個工作天</div>
              </label>
            </div>
            <span class="delivery-fee">免費</span>
          </div>
          <div class="form-row dhl-wrapper">
            <div class="inner-wrapper">
              <input type="radio" name="delivery" id="dhl" class="dhl" />
              <label for="dhl">
                <div class="method">DHL 貨運</div>
                <div class="time">48 小時內送達</div>
              </label>
            </div>
            <span class="delivery-fee">$500</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>