
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dad-code/'
    : '/',
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Dad Code',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },

  pwa: {
    name: `Daddy-O'`,
    themeColor: "#892cdc",
    msTileColor: "#892cdc",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/sw.js',
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: null,
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  },
}
