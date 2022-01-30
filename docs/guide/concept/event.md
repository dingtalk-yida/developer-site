---
title: 事件处理
order: 4
---
# 事件处理
事件处理在系统开发中属于最常见的逻辑实现之一，宜搭提供通用的用户动作绑定功能，并提供动作面板用于书写JS处理逻辑，通常要实现事件处理功能需要以下两步：
* 给组件增加动作绑定配置（几乎每个组件都有提供相应的动作绑定选项）；
* 在动作面板实现动作处理逻辑；
![](https://img.alicdn.com/imgextra/i4/O1CN01p1gGz020pnC3EK1nn_!!6000000006899-2-tps-3578-2016.png)

:::tip
在进行动作绑定时，用户可以进行动作的参数设置，如下所示，设置的参数在处理函数中可以通过this.params.xxx进行读取，其中xxx为用户设置的参数。
![](https://img.alicdn.com/imgextra/i3/O1CN01O3TBrZ1rJt3pjTsGN_!!6000000005611-2-tps-3582-2018.png)
参数获取方式：
```js
export function onClick(){
  const { name, age } = this.params
  console.log(name,age);
}
```
:::

## 使用场景
下面介绍一个简单的使用事件处理的例子：
监听一个按钮点击事件并弹框展示相关信息，要实现一个事件处理功能，用户需要进行两部操作：
* 给组件绑定用户操作事件，如下所示，我们给按钮组件绑定一个onClick事件；
* 在动作面板中实现相关的事件处理逻辑，当用户点击按钮是，我们会弹一个框显示问候语(state.name是我们设置的一个全局变量，初始值为：“小明”)；
![](https://img.alicdn.com/imgextra/i3/O1CN01tpgkNk1Uh1uZ9HQqU_!!6000000002548-2-tps-3582-2020.png)

用户点击右上角的预览按钮，便可以看到以下预览效果，当用户点击Hello按钮，程序弹框显示“Hello 小明”。
![](https://img.alicdn.com/imgextra/i1/O1CN01OtrmJ31Y0fkLnVjjr_!!6000000002997-2-tps-3582-2164.png)