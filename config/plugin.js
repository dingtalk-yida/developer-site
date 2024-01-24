const fs = require('fs');
const path = require('path');
module.exports = () => ({
  name: 'deploy',
  postBuild({ outDir }) {
    fs.writeFileSync(
      `${outDir}/cd.json`,
      JSON.stringify(
        {
          public: './',
          branch: 'site',
          cname: 'yida-developer.alibaba-inc.com',
        },
        null,
        2
      )
    );
  },
  configureWebpack(config, isServer, utils) {
    return {
      resolve: {
        alias: {
          components: path.resolve(__dirname, '../src/components'),
        },
      },
    };
  },
  injectHtmlTags({ content }) {
    return {
      headTags: [
        {
          tagName: 'script',
          attributes: {
            charset: 'utf-8',
          },
          innerHTML: `
          // 钉钉android web容器兼容问题
          if (!this.globalThis) {
            this.globalThis = this;
          }
          // 埋点逻辑
          window.AES_CONFIG = window.AES_CONFIG || {};
          window.AES_CONFIG.pid = 'yida-developer2.0';
          window.AES_CONFIG.user_type = '20';
          window.AES_CONFIG.plugin_pv = {
            autoPV: false,
            autoLeave: false
          };
          // 重定向逻辑
          if (location.host === 'yida-developer.gitee.io') {
            location.href = location.href.replace('yida-developer.gitee.io', 'developers.aliwork.com');
          }
          // 切换mode
          if (/mode=simple/.test(location.search) && document.documentElement) {
            document.documentElement.setAttribute('mode', 'simple');
          }
          `,
        },
        {
          tagName: 'script',
          attributes: {
            src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
            id: 'beacon-aplus',
            exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
          },
        },
        {
          tagName: 'script',
          attributes: {
            src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.11/index.js,tracker-plugin-perf/1.1.6/index.js,tracker-plugin-longtask/1.0.1/index.js,tracker-plugin-pv/2.4.4/index.js,tracker-plugin-event/1.2.5/index.js',
          },
        },
      ],
    };
  },
});
