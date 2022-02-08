module.exports = {
  title: '开发者中心',
  logo: {
    alt: '宜搭',
    src: 'https://img.alicdn.com/imgextra/i4/O1CN01REB6m71rjzdfnxRzF_!!6000000005668-55-tps-298-86.svg',
    srcDark: 'https://img.alicdn.com/imgextra/i4/O1CN01Xcsimv1KYeVd2eKND_!!6000000001176-55-tps-298-86.svg'
  },
  items: [
    {
      to: '/docs/guide/about',
      position: 'right',
      label: '指南',
    },
    {
      to: '/docs/tutorial/todoMVC',
      position: 'right',
      label: '教程',
    },
    {
      to: '/docs/components/layout/tab',
      position: 'right',
      label: '组件',
    },
    {
      to: '/docs/examples/form',
      position: 'right',
      label: '示例',
    },
    {
      type: 'search',
      position: 'right',
    },
  ],
};