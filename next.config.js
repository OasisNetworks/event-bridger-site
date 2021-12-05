// // next.config.js
// const withPlugins = require('next-compose-plugins');
// const nextra = require('nextra')
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   reactStrictMode: true,
// }

// module.exports = withPlugins([

//   // add a plugin with specific configuration
//   [nextra, {
//     theme: 'nextra-theme-docs',
//     themeConfig: './theme.config.js',
//     // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
//   }],
// ], nextConfig);

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra()