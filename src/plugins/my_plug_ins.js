const MyPlugin = {}

MyPlugin.install = function (Vue, options) {
    // 1. add global method or property
    Vue.prototype.$getUrlImage = function(fileName) {
        const patterns = [/\.jpg$/, /\.png$/, /\.jpeg$/]
        const check = patterns.some(pattern => {
          return pattern.test(fileName)
        })
        if(!check) {
          throw new Error("Invalid file name")
        } else {
          return `./images/${fileName}`
        }
      }
}

export default MyPlugin