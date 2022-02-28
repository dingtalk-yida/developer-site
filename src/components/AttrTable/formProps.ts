export default [
  {
    code: 'label',
    type: 'string',
    default: '-',
    desc: '表单组件标题',
  },
  {
    code: 'value',
    type: 'number',
    default: '-',
    desc: '表单组件的默认值',
  },
  {
    code: 'labelAlign',
    type: `'left' | 'top'`,
    default: `'top'`,
    desc: '表单组件标题的位置',
  },
  {
    code: 'labelColSpan',
    type: 'number',
    default: '4',
    desc: '设置标题的占位宽度，配置值为栅格值，1代表1/24',
  },
  {
    code: 'labelColOffset',
    type: 'number',
    default: '0',
    desc: '设置标题的偏移位置，配置值为栅格值，1代表1/24',
  },
  {
    code: 'wrapperColSpan',
    type: 'number',
    default: '0',
    desc: '设置表单组件的占位宽度，设置值为栅格值，1代表1/24',
  },
  {
    code: 'wrapperColOffset',
    type: 'number',
    default: '0',
    desc: '设置表单组件的偏移位置，设置值为栅格值，1代表1/24',
  },
  {
    code: 'labelTextAlign',
    type: `'left' | 'right'`,
    default: `'right'`,
    desc: '表单组件的标题对齐方式',
  },
  {
    code: 'tips',
    type: 'string',
    default: '-',
    desc: '表单组件描述信息，展示在控件下方',
  },
  {
    code: 'size',
    type: '[Size](/docs/components/interface#size)',
    default: `'medium'`,
    desc: '表单组件尺寸',
  },
  {
    code: 'behavior',
    type: '[Behavior](/docs/components/interface#behavior)',
    default: `'NORMAL'`,
    desc: '表单组件显示状态',
  },
  {
    code: 'labelTipsTypes',
    type: '[LabelTipsTypes](/docs/components/interface#labelTipsTypes)',
    default: `'none'`,
    desc: '表单组件标题提示信息类型设置'
  },
  {
    code: 'labelTipsIcon',
    type: 'string',
    default: '-',
    desc: '表单组件标题提示信息入口图标，当labelTipsTypes取值为 **text** 或 **render** 时生效'
  },
  {
    code: 'labelTipsText',
    type: 'string',
    default: '-',
    desc: '表单组件标题提示文本信息，当labelTipsTypes取值为 **text** 时生效'
  },
  {
    code: 'labelTipsRender',
    type: '(props: INumberFieldProps) => ReactNode',
    default: '-',
    desc: '表单组件标题提示信息自定义渲染方法，当labelTipsTypes取值为 **render** 时生效'
  },
    {
    code: 'validation',
    type: '[Validation](/docs/components/interface#validation)',
    default: '[]',
    desc: '表单组件校验设置，具体使用详见[表单校验文档](/docs/guide/concept/validation)',
  },
];