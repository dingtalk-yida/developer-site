---
title: 条件渲染
order: 6
---
# 条件渲染
有时候我们希望组件在一定条件下才进行渲染，类似React中的下面的写法，宜搭提供**是否渲染**的配置项，通过绑定变量我们方便实现组件的显隐控制：
```js
function HelloText({showName, name}) {
	return (
  	<div>
    {showName && (<span>{name}</span>)} // 通过showName判断是否展示name文本组件
    </div>
  );
}
```

## 配置
在每个组件的高级属性设置中有一个**是否渲染**属性，用于控制组件的条件渲染。
![](https://img.alicdn.com/imgextra/i2/O1CN014MZyFi1plFUURAsTC_!!6000000005400-2-tps-3582-1914.png)

默认情况下是否渲染的配置值为true，通常我们会采用变量绑定的方式来设置是否渲染属性。

:::tip
配置了是否渲染的组件会在大纲树中展示一个分支的小Icon标记组件设置了是否渲染属性：
![](https://img.alicdn.com/imgextra/i2/O1CN01rFU7tJ1LHXKIfYvbJ_!!6000000001274-2-tps-736-598.png)
:::

## 使用场景
下面我们用一个简单的例子来讲解如何使用条件渲染。

我们通过URL参数来控制一个文本组件的显隐，当URL参数中存在showName参数时则展示，否则不展示，配置如下所示：
* 通过变量绑定方式设置文本组件是否渲染属性：
![](https://img.alicdn.com/imgextra/i1/O1CN018iqVPy1WqJARoUCWE_!!6000000002839-2-tps-3582-2020.png)
* 给文本组件的是否渲染属性绑定一个全局变量```state.urlParams.showName```用于根据url参数判断实现渲染文本组件：
![](https://img.alicdn.com/imgextra/i4/O1CN013knQpd1EQ3NYxwrD3_!!6000000000345-2-tps-3582-2020.png)

最后我们可以通过在预览页面设置showName参数的方式来控制文本组件的展示如下所示(我们可以通过预览页面右上角的**在新窗口打开**来在浏览器中直接打开预览页面，从而为其设置参数)：
* URL中没有showName参数：
![](https://img.alicdn.com/imgextra/i3/O1CN01chTPAn1tHG1KW0rqc_!!6000000005876-2-tps-3582-652.png)
* URL中有showName参数：
![](https://img.alicdn.com/imgextra/i4/O1CN01g65BHa1v5vSAPer40_!!6000000006122-2-tps-3582-762.png)


