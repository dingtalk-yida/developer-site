/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getDocsFromDir = require("../scripts/getDocsFromDir");

module.exports = {
  // usage: [
  //   'usage/changeLog',
  //   'usage/dataSecurity',
  //   {
  //     type: 'category',
  //     label: '产品简介',
  //     collapsed: false,
  //     items: getDocsFromDir('usage/intro'),
  //   },
  //   {
  //     type: 'category',
  //     label: '操作指引',
  //     collapsed: false,
  //     items: [{
  //       type: 'category',
  //       label: '平台管理',
  //       collapsed: false,
  //       items: getDocsFromDir('usage/guide/platform'),
  //     }, {
  //       type: 'category',
  //       label: '应用创建',
  //       collapsed: false,
  //       items: getDocsFromDir('usage/guide/createApp'),
  //     }],
  //   },
  //   'usage/newApp',
  //   'usage/price',
  //   'usage/contactUs',
  //   'usage/keyWords',
  // ],
  guide: [
    "guide/about",
    "guide/start",
    "guide/keywords",
    "guide/designer",
    "guide/api",
    "guide/openAPI",
    {
      type: "category",
      label: "核心概念",
      collapsed: false,
      items: getDocsFromDir("guide/concept"),
    },
    {
      type: "category",
      label: "教程",
      collapsed: false,
      items: getDocsFromDir("guide/tutorial"),
    },
    {
      type: "category",
      label: "FAQ",
      collapsed: false,
      items: getDocsFromDir("guide/FAQ"),
    },
    "guide/contributing",
  ],
  tutorila: ["tutorial/todoMVC"],
  components: getDocsFromDir("components", [
    {
      label: "布局组件",
      dir: "components/layout",
    },
    {
      label: "基础组件",
      dir: "components/basic",
    },
    {
      label: "表单组件",
      dir: "components/form",
    },
    {
      label: "高级组件",
      dir: "components/advanced",
    },
  ]),
  examples: getDocsFromDir("examples", [
    {
      label: "集成&自动化（连接器）专题",
      dir: "examples/connector",
    },
    {
      label: "自定义页面专题",
      dir: "examples/customPage",
    },
  ]),
};
