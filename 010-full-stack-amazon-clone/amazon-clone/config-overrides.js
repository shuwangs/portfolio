module.exports = function override(config) {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        path: require.resolve("path-browserify"),
        fs: false, // 禁用无法浏览器支持的 Node 模块
      },
    };
    return config;
  };
  