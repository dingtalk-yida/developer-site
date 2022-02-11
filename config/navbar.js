module.exports = {
  title: '开发者中心',
  logo: {
    alt: '宜搭',
    src: 'https://img.alicdn.com/imgextra/i4/O1CN01REB6m71rjzdfnxRzF_!!6000000005668-55-tps-298-86.svg',
    srcDark: 'https://img.alicdn.com/imgextra/i4/O1CN01Xcsimv1KYeVd2eKND_!!6000000001176-55-tps-298-86.svg'
  },
  items: [
    {
      to: '/docs/usage/about',
      position: 'right',
      label: '使用指南',
      activeBasePath: '/docs/usage/'
    },
    {
      to: '/docs/guide/about',
      position: 'right',
      label: '开发者文档',
      activeBasePath: '/docs/guide/'
    },
    {
      to: '/docs/components/layout/tabsLayout',
      position: 'right',
      label: '组件',
      activeBasePath: '/docs/components/'
    },
    {
      to: '/docs/examples/form',
      position: 'right',
      label: '示例',
      activeBasePath: '/docs/examples/'
    },
    {
      type: 'search',
      position: 'right',
    },
  ],
};