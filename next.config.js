const path = require('path');
const debug = process.env.NODE_ENV !== "deploy";
let assetPrefix = [] 
  if(!debug){
    assetPrefix = {assetPrefix:  'https://kaitouneko.github.io/lottery_game'}
  }

const configOption = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve = {
      modules: [__dirname, 'node_modules'],
      alias: {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, 'src/client/components'),
        '@styles': path.resolve(__dirname, 'src/client/styles'),
        '@themes': path.resolve(__dirname, 'src/client/themes'),
        '@hooks': path.resolve(__dirname, 'src/client/hooks'),
        '@lib': path.resolve(__dirname, 'src/client/lib'),
        '@utils': path.resolve(__dirname, 'src/client/utils')
      }
    };
    return config;
  }
};


module.exports = {
  ...configOption,
  ...assetPrefix
}
