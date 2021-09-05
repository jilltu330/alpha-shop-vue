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
                <select
                  v-model="user.gender"
                  name="a-type"
                  id="gender-input"
                  required
                >
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                </select>
              </div>
            </div>
            <div class="form-row" id="name-input">
              <label for="">姓名</label>
              <input
                v-model="user.name"
                id="name"
                type="text"
                placeholder="請輸入姓名"
                required
              />
            </div>
          </div>
          <div class="form-wrapper-desk">
            <div class="form-row">
              <label for="">電話</label>
              <input
                v-model="user.tel"
                id="tel"
                type="number"
                placeholder="請輸入電話"
                required
              />
            </div>
            <div class="form-row">
              <label for="">Email</label>
              <input
                v-model="user.email"
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
                <select
                  v-model="user.city"
                  name="a-type"
                  id="a-suburb"
                  required
                >
                  <option value="" disabled selected>請選擇縣市</option>
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id"
                  >
                    {{ city.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <label for="">地址</label>
              <input
                v-model="user.address3"
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

<script>

const areaData = {
  cities: [
    { name: "基隆市", id: "1" },
    { name: "台北市", id: "2" },
    { name: "新北市", id: "3" },
    { name: "桃園市", id: "4" },
    { name: "新竹市", id: "5" },
    { name: "新竹縣", id: "6" },
    { name: "苗栗市", id: "7" },
    { name: "台中縣", id: "8" },
    { name: "彰化縣", id: "9" },
    { name: "南投縣", id: "10" },
    { name: "雲林縣", id: "11" },
    { name: "嘉義市", id: "12" },
    { name: "嘉義縣", id: "13" },
    { name: "台南市", id: "14" },
    { name: "高雄市", id: "15" },
    { name: "屏東縣", id: "16" },
    { name: "台東縣", id: "18" },
    { name: "花蓮縣", id: "19" },
    { name: "宜蘭縣", id: "20" },
    { name: "澎湖縣", id: "21" },
    { name: "金門縣", id: "22" },
    { name: "連江縣", id: "23" },
  ],
};

export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
      }),
    },
  },
  data() {
    return {
      user: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
      },
      cities: [],
    };
  },
  created() {
    this.fetchcities();
  },
  methods: {
    fetchcities() {
      this.cities = areaData.cities;
    },
  },
};
</script>