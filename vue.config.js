module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/variable.scss";`
      },
  },
},
  transpileDependencies: [
    'vuetify'
  ]
}
