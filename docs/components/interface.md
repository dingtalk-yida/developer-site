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