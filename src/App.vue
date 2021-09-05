<template>
  <div id="alpha-shop">
    <header><Navbar /></header>
    
    <main role="main" class="d-flex justify-content-center mt-5">
      <router-view />
    </main>

    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap");
@import "assets/scss/main.scss";
</style>
