module.exports = {
  publicPath: process.env.NODE_ENV = 'production' ? '/hello-world/' : '/',
  outputDir: 'docs',
  "transpileDependencies": [
    "vuetify"
  ],
}