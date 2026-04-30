module.exports = function (api) {
  api.cache(true);
  return {
  presets: [
    "babel-preset-expo",
    "nativewind/babel"
  ],
  plugins: [
    ["@babel/plugin-transform-typescript", { isTSX: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-transform-class-properties", { loose: true, legacy: true }],
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: true,
        regenerator: true
      }
    ],
    'react-native-worklets/plugin'
  ]
};
};