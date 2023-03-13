const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/main.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        loader: "vue-svg-loader",
        // use: ['babel-loader', 'vue-svg-loader']
      }]
    }
  },
  publicPath: "/dist"
})
