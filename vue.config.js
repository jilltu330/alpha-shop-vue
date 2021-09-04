module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/scss/main.scss";
           @import "@/assets/scss/reset.scss";
           @import "@/assets/scss/basicSetting.scss";
        `
      }
    }
  }
};