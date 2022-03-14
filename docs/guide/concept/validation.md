---
title: 表单校验
order: 9
---

# 表单校验

表单场景是宜搭最为常用的场景，我们在使用表单时经常会需要进行表单项的校验工作，宜搭平台除了为不同表单项组件提供一些内置的常见校验规则还提供了自定义表单项校验的能力，帮助用户更好的管理表单数据，避免脏数据的提交。

当用户的提交的数据没有通过校验规则，则会在表单项下方展示错误信息并阻止用户提交表单数据，效果如下所示：

![](https://img.alicdn.com/imgextra/i3/O1CN01EwO6P121YDcIbIEKd_!!6000000006996-2-tps-2664-1166.png_.webp)

## 校验设置

宜搭平台提供两种表单设置方案，其设置方案分别如下所示：

### 内置校验规则

宜搭平台为每个表单组件都内置了一些常用的校验规则，用户只要通过简单的设置并启用该规则就可以了，例如上面的最小年纪设置，我们通过如下配置便可轻松实现：

![](https://img.alicdn.com/imgextra/i4/O1CN01J2hlva1VJVBbzqUk9_!!6000000002632-2-tps-3582-2016.png_.webp)

### 自定义校验规则

宜搭内置的表单项校验方法难免会有覆盖不到的情况，因此宜搭还为每个表单项组件增加了一个自定义规则设置的方案，通过函数来控制表单校验结果，自定义校验规则的函数描述如下所示：

```ts
// value 为表单项当前的值，返回boolean类型判断校验是否通过
function validateRule(value: any): boolean;
```

例如我们需要校验一个文本输入框的内容是否以 "杭州开头"，可以通过如下方式：

```js
// 是否以”杭州”开头
function validateRule(value) {
  if (/^杭州/.test(value)) {
    return true;
  }
  return false;
```

## API
表单校验除了在表单提交的时候进行校验，还能够通过[前端API](/docs/guide/api#thisfieldidvalidate)进行手动触发，如下所示：

```js
export function validate() {
  // 执行输入框组件的校验，如果校验失败则在 console 中打印 errors 和 values
  this.$('textField_kyz78exp').validate((errors, values) => {
    console.log(JSON.stringify({errors, values}, null, 2));
  });
}
```
