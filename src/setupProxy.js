
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://maps.googleapis.com/maps/api/place',
      changeOrigin: true,
    })
  );
};