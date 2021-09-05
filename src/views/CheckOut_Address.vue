<template>
  <div class="container form-container">
    <form id="a-form">
      <div class="form-content">
        <div class="part part-detail">
          <h3 class="title">寄送地址</h3>
          <div class="form-wrapper1">
            <div class="form-row">
              <label for="">稱謂</label>
              <div class="select-wrapper">
                <select name="a-type" id="gender-input" required>
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                </select>
              </div>
            </div>
            <div class="form-row" id="name-input">
              <label for="">姓名</label>
              <input id="name" type="text" placeholder="請輸入姓名" required />
            </div>
          </div>
          <div class="form-wrapper-desk">
            <div class="form-row">
              <label for="">電話</label>
              <input
                id="phone"
                type="number"
                placeholder="請輸入電話"
                required
              />
            </div>
            <div class="form-row">
              <label for="">Email</label>
              <input
                id="email"
                type="email"
                placeholder="請輸入電子郵件"
                required
              />
            </div>
          </div>
          <div class="form-wrapper-desk1">
            <div class="form-row">
              <label for="">縣市</label>
              <div class="select-wrapper">
                <select name="a-type" id="a-suburb" required>
                  <option value="" disabled selected>請選擇縣市</option>
                  <option value="">台北市</option>
                  <option value="">新北市</option>
                  <option value="">桃園市</option>
                  <option value="">新竹市</option>
                  <option value="">苗栗</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <label for="">地址</label>
              <input
                id="address"
                type="text"
                placeholder="請輸入地址"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>