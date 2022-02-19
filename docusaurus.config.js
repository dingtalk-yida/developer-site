// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const navbar = require('./config/navbar');
const footer = require('./config/footer');
const plugin = require('./config/plugin');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '钉钉宜搭·开发者中心',
  tagline: '人人都是低代码应用开发工程师',
  url: 'https://www.aliwork.com',
  baseUrl: '/developer-site/',
  // baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.alicdn.com/imgextra/i3/O1CN01Bqjz5u1tuBe2IKv8V_!!6000000005961-73-tps-128-128.ico',
  organizationName: 'dingTalk', // Usually your GitHub org/user name.
  projectName: 'yida', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
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
      hotjar: {
        applicationId: 2824842,
      },
      metadata: [
        { name: 'title', content: '钉钉宜搭' },
        {
          name: 'description',
          content:
            '钉钉宜搭具备页面编排(表单门户等)、业务模型编排、业务流程编排、服务编排、数据展现及分析 5 大核心能力，用户通过简单的拖拽、配置，即可完成业务应用的搭建。同时，平台还具备一次搭建双端适配、权限独立设置、定制消息提醒推送及海量信息存储等特性。旨在为广大中小企业提供一套低成本的企业应用搭建解决方案。钉钉宜搭构建的应用，天然具备 云原生 (分布式计算、弹性扩容、异地容灾、CDN加速、企业级云安全) 和 钉原生 特性 (天然和钉钉的消息，通讯录 、待办打通，应用可以一键发布到钉钉群，工作台等)。',
          keywords:
            '宜搭,钉钉宜搭,开发者中心,aPaaS,低代码,可视化搭建,SaaS,可视化搭建,表单,在线表单,流程,流程审批,报表,数据收集,工作协同,流程引擎,数据分析,可视化图表展示小应用,小程序',
        },
      ],
    }),
  plugins: [
    'plugin-image-zoom',
    'docusaurus-plugin-hotjar',
    'docusaurus-plugin-sass',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        language: ['zh', 'en'],
      },
    ],
    plugin,
  ],
  deploymentBranch: 'docs',
};

module.exports = config;
