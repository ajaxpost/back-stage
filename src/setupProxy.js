const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/api',
    proxy({
      // 此处的端口号要与后期数据请求的数据端一致
      target: 'http://localhost:9000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
  app.use(
    '/setIn',
    proxy({
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/setIn': '',
      },
    })
  )
}
