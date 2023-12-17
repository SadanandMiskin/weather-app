const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://weather-app-sadanandmiskin.vercel.app/', 
        changeOrigin: true,
    }));
};
