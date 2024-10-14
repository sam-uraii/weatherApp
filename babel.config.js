module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
//for jest --> presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
