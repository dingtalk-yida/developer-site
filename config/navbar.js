module.exports = {
  title: '',
  logo: {
    alt: '钉钉宜搭',
    src: 'https://img.alicdn.com/imgextra/i4/O1CN01REB6m71rjzdfnxRzF_!!6000000005668-55-tps-298-86.svg',
    srcDark: 'https://img.alicdn.com/imgextra/i4/O1CN01Xcsimv1KYeVd2eKND_!!6000000001176-55-tps-298-86.svg'
  },
  items: [
    {
      to: '/docs/guide/about',
      position: 'left',
      label: '开发指南',
      activeBasePath: '/docs/guide/'
    },
    {
      to: '/docs/api/about',
      position: 'left',
      label: 'API',
      activeBasePath: '/docs/api/'
    },
    {
      to: '/docs/tutorial/todoMVC',
      position: 'left',
      label: '教程',
      activeBasePath: '/docs/tutorial/'
    },
    {
      to: '/docs/components/layout/tabsLayout',
      position: 'left',
      label: '组件',
      activeBasePath: '/docs/components/'
    },
    {
      to: 'https://www.aliwork.com/o/coc?from=developers_navbar',
      position: 'left',
      label: '示例体验中心',
      activeBasePath: '/'
    },
    {
      to: 'https://developer.aliyun.com/group/yida',
      position: 'left',
      label: '社区'
    },
    {
      type: 'search',
      position: 'right',
    },
  ],
};