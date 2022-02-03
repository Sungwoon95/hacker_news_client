const path = require('path');

module.exports= {
  sassOptions:{
    includePaths: [path.resolve(__dirname, './pages')]
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
}