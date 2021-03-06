/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getDocsFromDir = require("../scripts/getDocsFromDir");

module.exports = {
  guide: [
    "guide/about",
    "guide/start",
    "guide/keywords",
    "guide/designer",
    {
      type: "category",
      label: "核心概念",
      collapsed: false,
      items: getDocsFromDir("guide/concept"),
    },
    {
      type: 'category',
      label: '自定义组件',
      collapsed: false,
      items: getDocsFromDir('guide/customComponent')
    },
    {
      type: "category",
      label: "FAQ",
      collapsed: false,
      items: getDocsFromDir("guide/FAQ"),
    },
    "guide/contributing",
  ],
  api: getDocsFromDir('api'),
  tutorial: getDocsFromDir("tutorial"),
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
  examples: getDocsFromDir("examples",
    [
      {
        label: "集成&自动化",
        dir: "examples/connector",
        collapsed: true,
      },
      {
        label: "自定义组件",
        dir: "examples/customComponent",
        collapsed: true,
      },
      {
        label: "自定义页面",
        dir: "examples/customPage",
        collapsed: true,
      },
    ]
  ),
};
