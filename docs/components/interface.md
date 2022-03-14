---
title: 组件通用属性类型
order: 1
---

# 组件通用属性类型
本文档主要列举宜搭组件用到的通用属性的类型说明，用户可以在动作面板中通过以下API来的读取或者设置组件的指定属性（具体详见[组件通用API](/docs/guide/api#组件通用-api)）：

```js
// 获取组件的属性值
export function getAttribute(){
  // 获取文本组件的内容（content）属性，并在 console 中打印出来
  const content = this.$('text_kyz78exo').get('content')
  console.log( `text content: ${content}` );
}

// 设置组件的属性值
export function setAttribute(){
  // 设置文本组件的最大行数（maxLine）属性
  this.$('text_kyz78exo').set('maxLine', 5);
}
```

## 基础类型

### I18n 
国际化字符串相关配置。

```ts
inerface I18n {
  zh_CN: string;
  en_US: string;
  type: 'i18n';
}
```

## 表单基础属性

### Behavior
表单控件的显示状态类型:
* NORMAL - 普通展示；
* DISABLED - 禁用；
* READONLY - 只读；
* HIDDEN - 隐藏；

```ts
type Behavior = 'NORMAL' | 'DISABLED' | 'READONLY' | 'HIDDEN';
```

### Size
表单控件的尺寸。

```ts
type Size = 'small' | 'medium' | 'large';
```

### LabelTipsTypes
表单控件标题提示信息类型。
* none - 无；
* text - 文本类型；
* render - 自定义渲染；

```ts
type LabelTipsTypes = 'none' | 'text' | 'render';
```

### Validation 
表单控件校验规则。

```ts
interface Validation {
  type: 'required' | 'minValue' | 'maxValue' | 'minLength' | 'maxLength' | 'customValidate'; //校验类型
  message: string | I18n; // 错误提示信息
  param: number | (value: any) => boolean; // 校验参数，type为customValidate时对应自定义函数
}
```


## 组件相关数据源类型
### DataSource
下拉选择、单选、复选等选择性组件的选项格式。

```ts
interface DataSource {
  text: string | I18n; // 实际展示内容
  value: string; // 实际提交数据
}
```

### CascadeDataSource
级联选择等多层嵌套结构的组件选项格式。
```ts
interface CascadeDataSource {
  label: string | I18n; // 实际展示内容
  value: string; // 实际提交数据
  chidren?: CascadeDataSource[]
}
```

### SliderDataSource
用于图片轮播组件的数据设置。

```ts
interface SliderDataSource {
  src: string; // 轮播图片URL
  title?: string | I18n; // 轮播内容标题
  link?: string; // 图片点击跳转链接
}
```

### StepsDataSource
用于步骤条组件的数据设置。

```ts
interface StepsDataSource {
  title: string;
  content: string;
  status?: '' | 'wait' | 'process' | 'finish'; // 当前步骤状态 
  customSwitcher?: boolean; // 是否开启自定义渲染
  customRender?: (item: StepsDataSource) => ReactNode; // 自定义渲染函数
  icon?: string; // 步骤图标
  percent?: number; // 当前步骤进度百分比，取1-100之间的数字
  disabled?: boolean; // 是否禁用
}
```

### TimelineDataSource
用于时间轴组件的数据设置。

```ts
interface TimelineDataSource {
  title: string | I18n; // 标题
  time: string; // 时间
  icon?: string; // 展示icon
  state?: '' | 'process' | 'success' | 'error'; // 当前节点状态 
  timeLeft?: () => ReactNode; // 左侧时间展示
  doc?: () => ReactNode; // 自定义时间轴节点，优先级大于icon图标属性
  content?: () => ReactNode; // 右侧内容自定义
}
```

### TreeDataSource
用于树形组件的数据设置。
```ts
interface TreeDataSource {
  key: string;
  label: string;
  children?: TreeDataSource[]; // 子节点
}
```

### MenuDataSource
用于菜单组件数据设置。
```ts
interface MenuDataSource {
  label: string;
  key: string;
  chidlren?: MenuDataSource[]; // 子节点
}
```

### SearchDataSource
用于搜索框数据设置。

```ts
interface SearchDataSource {
  label: string;
  value: string;
}
```

## 其他

### TabItem
标签项的配置属性。

```ts
interface TabItem {
  title: string; // 标签名称
  primaryKey: string; // 标签唯一标识
  disabled?: boolean; // 是否禁用
  customKey？: string; // 自定义Key
}
```



### TableColumn
表格组件的列配置。

```ts
interface TableColumn {
  dataKey: string; // 数据字段
  title: string | I18n; // 列头标题
  width?: string; // 列宽度可以为px或者%
  dataType: 'text' | 'link' | 'file' | 'image' | 'timestamp' | 'cascadeTimestamp' | 'employee' | 'money' | 'moneyRange' | 'enum' | 'custom'; // 数据类型
  float?: '' | 'left' | 'right'; // 图片浮动(仅移动端卡片模式生效)
  imageProps?: React.CSSProperties; // 图片样式
  imageWrapProps?: React.CSSProperties; // 图片容器样式
  imageOnClick?: (e: Event, column: number) => void; // 图片点击回调
  enumBadgeType?: '' | 'color' | 'background'; // 枚举样式
  enumData?: any; // 枚举数据
  editType?: 'text' | 'link' | 'file' | 'image' | 'timestamp' | 'cascadeTimestamp' | 'employee' | 'money' | 'moneyRange' | 'enum' | 'custom'; // 编辑格式
  timeFormatter?: 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY'; // 时间格式
  align?: 'left' | 'center' | 'right'; // 对齐方式
  lock?: 'none' | 'left' | 'right'; // 列固定
  groupName?: string; // 分组标题
  message?: string; // 用户提示
  sortable?: boolean; // 是否排序
  highlight?: boolean; // 是否突出显示，仅移动端卡片模式下有效
  hidden?: boolean; // 是否隐藏；
  resizable?: boolean; // 列宽是否可调整，必须与 宽度 重设列尺寸的时候触发的事件 搭配使用
  titleRender?: (title: string) => ReactNode; // 标题定制渲染
  render?: (value: any, index: number, rowData) => ReactNode; // 内容定制渲染
  canEdit?: boolean; // 是否可以编辑
  renderField?: (props: any, value: any, rowData: any) => ReactNode; // 定制编辑态渲染
  editProps?: any; // 编辑配置
  filters?: {
    label: string;
    value: string;
  }[];
  filterMode?: 'multiple' | 'single'; // 过滤模式
}

```



### FilterConfig
用于筛选项的配置。

```ts
interface FilterConfig {
  title: string; // 标题
  id: string; 
  fieldId: string;
  componentName: string;
  prevComponentName: string;
  colspan?: number;
  isAdvanced?: boolean;
}
```


### ScanCodeConfig
钉钉端扫码模式配置信息，钉钉端支持以下扫码模式：
* barCode - 条形码；
* qrCode - 二维码；
* all - 以上都支持；

```ts
interface ScanCodeConfig {
  enable: boolean;
  type: 'all' | 'barCode' | 'qrCode';
  editable: boolean; // 是否允许修改扫码结果
}
```

### UploadConfig
富文本组件图片上传配置。

```ts
interface UploadConfig {
  inputName?: string; // 上传的file input的name属性，默认file
  actionUrl: string; // 上传接口
  formatResult?: (response: any) => any; // 返回数据处理
  errorCallback?: () => void; // 错误回调
  progressCallback?: () => void; // 上传进度回调
  headers?: Record<string, string>; // 图片上传请求头配置
}
```

