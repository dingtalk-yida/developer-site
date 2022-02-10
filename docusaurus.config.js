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
  tagline: '人人都是低代码应用开发工程师',
  url: 'https://www.aliwork.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01Bqjz5u1tuBe2IKv8V_!!6000000005961-73-tps-128-128.ico',
  organizationName: 'dingTalk', // Usually your GitHub org/user name.
  projectName: 'yida', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./config/sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dingtalk-yida/developer-site/edit/feat/init/',
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
    'plugin-image-zoom',
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
