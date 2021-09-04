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
@import "assets/scss/main.scss";
</style>
