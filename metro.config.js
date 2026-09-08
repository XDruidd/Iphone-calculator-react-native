const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve(
    "react-native-svg-transformer/expo"
);

config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
);

config.resolver.assetExts.push("woff", "woff2");

config.resolver.sourceExts.push("svg");

module.exports = config;