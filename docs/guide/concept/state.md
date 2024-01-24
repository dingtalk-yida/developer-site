---
title: 全局变量
order: 1
---
# 全局变量
全局变量类似 React 的 state 的概念，它主要用来进行页面全局状态管理，开发者也可以通过调用 API 改变全局状态并触发页面重新渲染。

## 全局变量创建
用户可以通过数据源面板中的添加变量进行全局变量创建：
![](https://img.alicdn.com/imgextra/i2/O1CN01jY7s9Q1bxFF9TwD2J_!!6000000003531-2-tps-3580-2016.png_.webp)

在创建全局变量时用户可以指定以下内容：
* **名称**- 用于声明全局变量的名字，需要遵守 JS 中变量命名规范；
* **描述**- 定义全局变量的描述信息，在变量绑定时会透出该描述信息；
* **数据**- 用于设置全局变量的初始值，支持字符串、布尔值、对象等基础 JS 类型；

:::tip
宜搭平台提供一个默认的全局变量 urlParams 用于获取当前页面 URL 的参数，我们可以通过 `this.state.urlParams.xxx` 来获取 URL 参数，其中 `xxx` 为参数名称，若未找到对应的参数则会返回 undefined。
:::
## API
宜搭平台提供两个全局变量的 API 用于进行全局变量的读写。
### 读取
在变量绑定及动作面板我们可以通过下面的 API 来获取页面的全局变量（变量绑定场景可以省略 this，直接用 state.xxx）：
```js
const name = this.state.name;
```

### 更改
我们提供 setState API 用于改变页面的全局变量同时触发页面的重新渲染 (类似 React 的 setState)，如下所示：
```js
this.setState({
  name: 'Jack'
});
```
:::caution
宜搭的setState API 和 React看似一致，但是略有差别：
* 宜搭的setState API 不提供callback 回调能力，因此不能像state那样书写setState的回调函数；
* 宜搭的setState API 采用了响应式数据解决方案，因此，在执行完setState后立马可以拿到新的state数据，如下所示：
```js
// 假设执行setState前 this.state.name 的值为 '小红'
this.setState({
  name: '小明'
});

// 打印出来的内容为：小明
console.log(this.state.name); 

```

:::

## 使用场景
定义了全局变量，在自定义页面中有两种消费场景：
### 变量绑定
用户可以设置组件属性的变量绑定进行 state 使用，用户可以通过手写或者选取选取数据源的方式绑定全局变量（在变量绑定场景，变量形式为：state.xxx）。
设置文本组件的内容属性绑定变量：
![](https://img.alicdn.com/imgextra/i2/O1CN01L3sqI91hNsLtVnIre_!!6000000004266-2-tps-3582-2018.png_.webp)

将内容数据绑定为全局变量中名为 name 的变量：
![](https://img.alicdn.com/imgextra/i3/O1CN01YeyBuQ1hNsLzlLWjp_!!6000000004266-2-tps-3580-2018.png_.webp)

通过点击右上角的预览我们便可以看到以下绑定效果：
![](https://img.alicdn.com/imgextra/i3/O1CN01Y9eIAn1tUXVM3M3HW_!!6000000005905-2-tps-3582-2016.png_.webp)

### 动作处理
在动作面板中，开发者可以通过 JS 编程方式来对全局变量进行读写，如下所示：
![](https://img.alicdn.com/imgextra/i3/O1CN01JafCG01qNilM7wQjo_!!6000000005484-2-tps-3582-2018.png_.webp)

是不是看上去和 React 的 API 一模一样？你也可以前往 [事件处理文档](/docs/guide/concept/event.md) 查看事件处理相关的使用说明。