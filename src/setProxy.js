const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://weather-9ld8awz63-sadanandmiskin.vercel.app/', 
        changeOrigin: true,
    }));
};
