const webpackMerge = require("webpack-merge");

module.exports = function (gasket, webpackConfig, context) {
  // return webpackMerge.merge(webpackConfig, {
  //   resolve: {
  //     alias: { "react/jsx-runtime": require.resolve("react/jsx-runtime") },
  //   },
  // });
  // webpackConfig.resolve.alias["react/jsx-runtime"] =
  //   require.resolve("react/jsx-runtime");
  // console.info(webpackConfig);
  // return webpackConfig;
};
