const webpackCustom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: webpackCustom.resolve,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...webpackCustom.module.rules],
      },
    };
  },
};
