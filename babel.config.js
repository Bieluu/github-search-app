module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@containers': './src/containers',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@typings': './src/types',
        },
      },
    ],
  ],
};
