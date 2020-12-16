import path from 'path'

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  proxy: {
    // string shorthand
    '/api': 'http://localhost:5000',
    // with options
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   rewrite: (path: string) => path.replace(/^\/api/, '')
    // }
  }
}