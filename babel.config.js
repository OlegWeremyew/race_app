module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          "@/api": './src/api',
          "@/app": './src/app/',
          "@/components": './src/components',
          "@/constants": './src/constants',
          "@/hooks": './src/hooks',
          "@/navigations": './src/navigations',
          "@/screens": './src/screens',
          "@/store": './src/store',
          "@/utils": './src/utils',
        },
      },
    ],
  ],
};
