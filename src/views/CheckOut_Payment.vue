<template>
  <div class="container form-container">
    <form id="a-form">
      <div class="form-content">
        <div class="part part-payment">
          <h3 class="title">付款資訊</h3>
          <div class="form-row">
            <label for="">持卡姓名</label>
            <input id="card-name" type="text" placeholder="John Doe" required />
          </div>
          <div class="form-row">
            <label for="">卡號</label>
            <input
              id="card-num"
              type="number"
              min="0"
              placeholder="1111 2222 3333 4444"
              required
            />
          </div>
          <div class="form-wrapper">
            <div class="form-row">
              <label for="">有效期限</label>
              <input
                id="card-date"
                type="text"
                placeholder="MM/YY"
                maxlength="4"
                required
              />
            </div>
            <div class="form-row">
              <label for="">CVC/CCV</label>
              <input id="card-cvc" type="text" placeholder="123" required />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>