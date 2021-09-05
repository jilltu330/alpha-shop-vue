<template>
  <nav class="navbar d-flex justify-content-center">
    <div
      class="
        container
        nav-container
        d-flex
        justify-content-center
        align-items-center
        my-4
      "
    >
      <!-- nav-tabs -->
      <ul class="nav nav-tabs d-flex">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item mr-5">
          <router-link to="#" class="nav-link">
            {{ tab.title }}
          </router-link>
        </li>
      </ul>
      <!-- nav-logos -->
      <div class="nav nav-logos d-flex justify-content-center">
        <div class="nav nav-icon mr-3">
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <div class="nav nav-title">
          <router-link to="/home">
            <h2>ALPHA Shop</h2>
          </router-link>
        </div>
      </div>
      <!-- nav-tools -->
      <div class="nav nav-tools d-flex justify-content-end">
        <div class="nav nav-search mx-4">
          <img
            class="nav nav-tool-icon"
            src="../assets/images/search.png"
            alt=""
          />
        </div>
        <div class="nav nav-cart mx-4">
          <router-link to="/checkout">
            <img
              class="nav nav-tool-icon"
              src="../assets/images/cart.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="nav nav-theme mx-4">
          <img
            class="nav nav-tool-icon"
            src="../assets/images/theme.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "男款",
          path: "",
        },
        {
          id: uuidv4(),
          title: "女款",
          path: "",
        },
        {
          id: uuidv4(),
          title: "最新消息",
          path: "",
        },
        {
          id: uuidv4(),
          title: "客製商品",
          path: "",
        },
        {
          id: uuidv4(),
          title: "聯絡我們",
          path: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  width: 1100px;
}
.nav-tabs,
.nav-logos,
.nav-tools {
  width: 400px;
}
.nav-icon {
  width: 30px;
  height: 30px;
}
.nav-tool-icon {
  width: 21px;
  height: 21px;
}
.nav-link {
  font-size: 16px;
}
a {
  font-size: 16px;
  font-weight: 500;
}
a:link {
  color: $body-color;
}
a:visited {
  color: $body-color;
}
a:hover {
  color: $body-color;
}
a:active {
  color: $dark-gray;
}
</style>