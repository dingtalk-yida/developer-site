import {BankTwoTone, MessageTwoTone, CrownTwoTone, ProfileTwoTone} from '@ant-design/icons';
export default [
  {
    title: '了解', 
    icon: BankTwoTone, 
    children: [{
      title: '产品简介', 
      children: [
        {
          title: '钉钉宜搭介绍', 
          path: 'https://www.yuque.com/yida/support/ytzzua', 
        }, 
        {
          title: '开发者中心介绍', 
          path: '/docs/guide/about', 
        }, 
        {
          title: '快速开始', 
          path: '/docs/guide/start', 
        }, 
        {
          title: '名词解释', 
          path: '/docs/guide/keywords', 
        }, 
        {
          title: '设计器功能介绍', 
          path: '/docs/guide/designer', 
        }, 
      ], 
    }]
  }, 
  {
    title: '进阶', 
    icon: CrownTwoTone, 
    children: [
      {
        title: '核心概念', 
        children: [{
          title: '全局变量', 
          path: '/docs/guide/concept/state'
        }, {
          title: '远程 API', 
          path: '/docs/guide/concept/dataSource'
        }, {
          title: '页面生命周期', 
          path: '/docs/guide/concept/lifecycle'
        }, {
          title: '事件处理', 
          path: '/docs/guide/concept/event'
        }, {
          title: '条件渲染', 
          path: '/docs/guide/concept/condition'
        }, {
          title: '循环渲染', 
          path: '/docs/guide/concept/loop'
        }, {
          title: '自定义样式', 
          path: '/docs/guide/concept/style'
        }, {
          title: '调试', 
          path: '/docs/guide/concept/debug'
        }]
      }, 
      {
        title: 'API 文档', 
        children: [{
          title: '前端 API', 
          path: '/docs/guide/api'
        }, {
          title: '远程开放 API', 
          path: '/docs/guide/openAPI'
        }]
      }, 
      {
        title: '高阶教程', 
        children: [{
          title: 'TodoMVC', 
          path: '/docs/tutorial/todoMVC', 
        }]
      }, 
    ], 
  }, 
  {
    title: '组件', 
    icon: ProfileTwoTone, 
    children: [
      {
        title: '布局组件', 
        children: [
          {
            title: '选项卡', 
            path: '/docs/components/layout/tabsLayout', 
          }, 
          {
            title: '布局容器', 
            path: '/docs/components/layout/regionalContainer', 
          }, 
        ], 
      }, 
      {
        title: '基础组件', 
        children: [
          {
            title: '图标', 
            path: '/docs/components/basic/icon', 
          }, 
          {
            title: '按钮', 
            path: '/docs/components/basic/button', 
          }, 
          {
            title: '文本', 
            path: '/docs/components/basic/text', 
          }, 
          {
            title: '图片', 
            path: '/docs/components/basic/image', 
          }, {
            title: '链接', 
            path: '/docs/components/basic/link', 
          }, 
          {
            title: '链接块', 
            path: '/docs/components/basic/linkBlock', 
          }, 
          {
            title: '对话框', 
            path: '/docs/components/basic/dialog', 
          }, 
          {
            title: '抽屉', 
            path: '/docs/components/basic/drawer', 
          }, 
          {
            title: '视频播放', 
            path: '/docs/components/basic/video', 
          }, 
        ], 
      }, 
      {
        title: '表单组件', 
        children: [
          {
            title: '数字输入框', 
            path: '/docs/components/form/numberField', 
          }, 
          {
            title: '单选', 
            path: '/docs/components/form/radioField', 
          }, 
          {
            title: '下拉选择', 
            path: '/docs/components/form/selectField', 
          }, 
          {
            title: '多选', 
            path: '/docs/components/form/checkboxField', 
          }, 
          {
            title: '下拉多选', 
            path: '/docs/components/form/multiSelectField', 
          }, 
          {
            title: '日期选择', 
            path: '/docs/components/form/dateField', 
          }, 
          {
            title: '日期区间', 
            path: '/docs/components/form/cascadeDateField', 
          }, {
            title: '上传图片', 
            path: '/docs/components/form/imageField', 
          }, 
          {
            title: '上传附件', 
            path: '/docs/components/form/attachmentField', 
          }, 
          {
            title: '输入框', 
            path: '/docs/components/form/textField', 
          }, 
          {
            title: '多行输入框', 
            path: '/docs/components/form/textareaField', 
          }, 
          {
            title: '人员搜索框', 
            path: '/docs/components/form/employeeField', 
          }, 
          {
            title: '评分', 
            path: '/docs/components/form/rateField', 
          }, 
          {
            title: '富文本编辑器', 
            path: '/docs/components/form/editorField', 
          }, 
          {
            title: '级联选择', 
            path: '/docs/components/form/cascadeSelectField', 
          }, 
          {
            title: '明细', 
            path: '/docs/components/form/tableField', 
          }, 
        ], 
      }, 
      {
        title: '高阶组件', 
        children: [
          {
            title: 'JSX', 
            path: '/docs/components/advanced/JSX', 
          }, 
          {
            title: 'HTML', 
            path: '/docs/components/advanced/HTML', 
          }, 
          {
            title: 'Iframe', 
            path: '/docs/components/advanced/Iframe', 
          }, 
          {
            title: '底部通栏', 
            path: '/docs/components/advanced/bottomBanner', 
          }, 
          {
            title: '表格', 
            path: '/docs/components/advanced/table', 
          }, 
          {
            title: '轮播图', 
            path: '/docs/components/advanced/slider', 
          }, 
          {
            title: '气泡提示', 
            path: '/docs/components/advanced/balloon', 
          }, {
            title: '查询', 
            path: '/docs/components/advanced/filter', 
          }, 
          {
            title: '翻页器', 
            path: '/docs/components/advanced/pagination', 
          }, 
          {
            title: '树形控件', 
            path: '/docs/components/advanced/tree', 
          }, 
          {
            title: '菜单', 
            path: '/docs/components/advanced/menu', 
          }, 
          {
            title: '搜索', 
            path: '/docs/components/advanced/search', 
          }, 
          {
            title: '进度条', 
            path: '/docs/components/advanced/progress', 
          }, 
          {
            title: '时间轴', 
            path: '/docs/components/advanced/timeLine', 
          }, 
          {
            title: '步骤条', 
            path: '/docs/components/advanced/steps', 
          }, 
        ], 
      }, 
    ], 
  }, 
  {
    title: '常见问题', 
    icon: MessageTwoTone, 
    level: 1, 
    children: [{
      title: '将表单数据作为数据源', 
      path: '/docs/guide/FAQ/q1', 
      width: '25%', 
    }, {
      title: '加载 Apache ECharts', 
      path: '/docs/guide/FAQ/q2', 
      width: '25%', 
    }, {
      title: '调用钉钉 JS API', 
      path: '/docs/guide/FAQ/q3', 
      width: '25%', 
    }]
  }
];