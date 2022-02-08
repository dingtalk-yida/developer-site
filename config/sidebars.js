/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getDocsFromDir = require('../scripts/getDocsFromDir');

module.exports = {
  docs: [
    'guide/about',
    'guide/start',
    'guide/keywords',
    'guide/designer',
    'guide/api',
    'guide/openAPI',
    {
      type: 'category',
      label: '核心概念',
      collapsed: false,
      items: getDocsFromDir('guide/concept')
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsed: false,
      items: getDocsFromDir('guide/FAQ')
    },
  ],
  tutorial: [
    'tutorial/todoMVC'
  ],
  components: [
    {
      type: 'category',
      label: '布局组件',
      collapsed: false,
      items: getDocsFromDir('components/layout')
    },
    {
      type: 'category',
      label: '基础组件',
      collapsed: false,
      items: getDocsFromDir('components/basic')
    },
  ],
  examples: [
    'examples/form'
  ]
};