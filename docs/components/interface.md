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

## I18n 
国际化字符串相关配置。

```ts
inerface I18n {
  zh_CN: string;
  en_US: string;
  type: 'i18n';
}
```

## TabItem
标签项的配置属性。

```ts
interface TabItem {
  title: string; // 标签名称
  primaryKey: string; // 标签唯一标识
  disabled?: boolean; // 是否禁用
  customKey？: string; // 自定义Key
}
```

## DataSource
下拉选择、单选、复选等选择性组件的选项格式。

```ts
interface DataSource {
  text: string | I18n; // 实际展示内容
  value: string; // 实际提交数据
}
```

## CascadeDataSource
级联选择等多层嵌套结构的组件选项格式。
```ts
interface CascadeDataSource {
  label: string | I18n; // 实际展示内容
  value: string; // 实际提交数据
  chidren?: CascadeDataSource[]
}
```

## Behavior
表单控件的显示状态类型:
* NORMAL - 普通展示；
* DISABLED - 禁用；
* READONLY - 只读；
* HIDDEN - 隐藏；

```ts
type Behavior = 'NORMAL' | 'DISABLED' | 'READONLY' | 'HIDDEN';
```

## Size
表单控件的尺寸。

```ts
type Size = 'small' | 'medium' | 'large';
```

## LabelTipsTypes
表单控件标题提示信息类型。
* none - 无；
* text - 文本类型；
* render - 自定义渲染；

```ts
type LabelTipsTypes = 'none' | 'text' | 'render';
```

## Validation 
表单控件校验规则。

```ts

```

## ScanCodeConfig
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

## UploadConfig
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

