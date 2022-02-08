// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const navbar = require('./config/navbar');
const footer = require('./config/footer');
const plugin = require('./config/plugin');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '宜搭开发者中心',
  tagline: '人人都是应用开发工程师',
  url: 'https://www.aliwork.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01Bqjz5u1tuBe2IKv8V_!!6000000005961-73-tps-128-128.ico',
  organizationName: 'dingTalk', // Usually your GitHub org/user name.
  projectName: 'yida', // Usually your repo name.
  // scripts: [
  //   '/init.js',
  //   'https://polyfill.alicdn.com/s/polyfill.min.js?features=default,es2017,es6,fetch,RegeneratorRuntime',
  //   'https://g.alicdn.com/code/lib/react/16.13.0/umd/react.production.min.js',
  //   'https://g.alicdn.com/code/lib/react-dom/16.13.0/umd/react-dom.production.min.js',
  //   'https://g.alicdn.com/code/lib/react-router-dom/5.1.2/react-router-dom.min.js',
  //   'https://g.alicdn.com/platform/react15-polyfill/0.0.3/dist/index.js',
  //   'https://g.alicdn.com/platform/c/natty-storage/2.0.2/dist/natty-storage.min.js',
  //   'https://g.alicdn.com/platform/c/natty-fetch/2.6.0/dist/natty-fetch.pc.min.js',
  //   'https://g.alicdn.com/code/lib/moment.js/2.29.1/moment.min.js',
  //   'https://g.alicdn.com/code/lib/moment.js/2.29.1/locale/zh-cn.min.js',
  //   'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
  //   'https://g.alicdn.com/vision/render-engine/7.4.14/render-engine.min.js',
  //   {
  //     src: 'https://g.alicdn.com/deep/deep/3.1.16/deep.js',
  //     defer: true,
  //   }, {
  //     src: 'https://g.alicdn.com/code/npm/@ali/vc-deep-yida/1.5.90/web-bundle.js',
  //     defer: true,
  //   },
  // ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./config/sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar,
      footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: 
  [
    'docusaurus-plugin-sass',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'), {
      language: ['zh', 'en'],
    }],
    plugin,
  ],
  deploymentBranch: 'docs'
};

module.exports = config;
