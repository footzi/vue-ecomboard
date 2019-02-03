module.exports = {
  lintOnSave: false,

  devServer: {
    port: 3000,
    proxy: {
      '/api/': {
        target: 'http://localhost:3030',
        secure: false
      }
    }
  }
}
