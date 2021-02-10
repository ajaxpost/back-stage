const CracoLessPlugin = require('craco-less')
const path = require('path')
const pathResolve = (abc) => path.join(__dirname, abc)
module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      // 此处是一个示例，实际可根据各自需求配置
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
