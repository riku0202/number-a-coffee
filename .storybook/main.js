const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    staticDirs: ["../public"],
    webpackFinal: async (baseConfig) => {
        baseConfig.resolve.modules = [
            ...(baseConfig.resolve.modules || []),
            path.resolve(__dirname, "../"),
        ];
        return baseConfig;
    },
};
