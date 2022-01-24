module.exports = {
  title: '首页',
  logo: {
    alt: '宜搭',
    src: 'https://img.alicdn.com/imgextra/i2/O1CN01H3ajqP1bxF9chDQmu_!!6000000003531-55-tps-131-32.svg',
    srcDark: 'https://img.alicdn.com/imgextra/i1/O1CN01tnRQfR27JuwAZRoRT_!!6000000007777-55-tps-297-85.svg'
  },
  items: [
    {
      to: '/docs/guide/about',
      position: 'left',
      label: '指南',
    },
    {
      to: '/docs/tutorial/todoList',
      position: 'left',
      label: '教程',
    },
    {
      to: '/docs/components/layout/tab',
      position: 'left',
      label: '组件',
    },
    {
      to: '/docs/examples/form',
      position: 'left',
      label: '示例',
    },
    {
      type: 'search',
      position: 'left',
    },
  ],
};