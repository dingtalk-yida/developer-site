---
title: 循环渲染
order: 7
---
# 循环渲染
对于需要循环渲染的场景，类似 React 中的下面的写法，宜搭提供**循环数据**的配置项，通过绑定变量我们方便实现循环渲染：
```js
function NameList() {
  const names = [{
    name: 'Jack'
  }, {
    name: 'Rose'
  }];
	return (
  	<div>
    {
      names.map((item, index) => (
        <span>{ `No.${index}: ${item.name}` }</span>
      ))
    }
    </div>
  );
}
```

## 配置
循环数据要求是 数组结构，字符串数组、数字数组或者对象数组都可以，用户通过高级属性中的循环数据设置来设置循环：
![](https://img.alicdn.com/imgextra/i2/O1CN01zZOVg61iim2fEeZq7_!!6000000004447-2-tps-3582-2016.png_.webp)

用户可以通过两种方式绑定循环数据：
***静态设置**- 配置需要渲染的静态数组数据；
***变量绑定**- 用户可以绑定变量来从全局变量或者远程 API 获取循环数据；

完成循环设置后，在循环主体内部的组件可以通过以下两个注入上下问获取循环数据内部的结构：
***this.item**- 获取当前行的循环数据；
***this.index**- 获取当前行的循环索引（从 0 开始计数）；

在循环嵌套场景，我们可以自定义迭代变量名及索引变量名来指定上下文注入变量信息，避免产生冲突，如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN018ydzZM25tytcc8Gu5_!!6000000007585-2-tps-3582-2022.png_.webp)

:::tip
配置了循环数据的组件会在大纲树中展示一个循环的小 Icon 标记组件设置了循环数据：

![](https://img.alicdn.com/imgextra/i4/O1CN01NCRDAo1RxZMhgrtlV_!!6000000002178-2-tps-734-844.png_.webp)
:::

## 使用场景
下面我们用一个简单的例子来介绍如何通过循环数据来展示学生列表。

* 创建一个全局变量用于存储学生信息，如下所示：
![](https://img.alicdn.com/imgextra/i1/O1CN01RdDGNN1n4XK7jR0dQ_!!6000000005036-2-tps-3582-2018.png_.webp)

* 在页面中拖入一个容器组件用于绑定循环数据，如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN0144N24G1qrwtuervo3_!!6000000005550-2-tps-3582-2014.png_.webp)

* 在容器中放入两个文案组件用于绑定学生姓名 (name) 及学生年龄 (age)，如下所示：
![](https://img.alicdn.com/imgextra/i3/O1CN019B277E1SP384IRrjn_!!6000000002238-2-tps-3582-2016.png_.webp)
![](https://img.alicdn.com/imgextra/i1/O1CN01qT43by1UEdMCpEkc6_!!6000000002486-2-tps-3582-2018.png_.webp)

* 这时候通过点击右上角的预览按钮，我们就可以看到循环渲染的效果了，如下所示：
![](https://img.alicdn.com/imgextra/i1/O1CN019HdqaJ1LrGDX1iZzV_!!6000000001352-2-tps-3582-590.png_.webp)

* 我们发现学生的爱好 (hobby) 又是一个数组，如果需要渲染它们则需要使用循环嵌套，于是又往容器中拖入了一个文本组件用于循环渲染爱好 (为了能让文案中能够同时访问外层循环的内容，我们为文案组件设置了自定义的迭代变量名及索引变量名）：
![](https://img.alicdn.com/imgextra/i2/O1CN01Voi5E91vw8bYmn266_!!6000000006236-2-tps-3582-2014.png_.webp)

* 接下来我们就可以为文案的内容属性绑定变量同时展示两次循环的内容，如下所示：
![](https://img.alicdn.com/imgextra/i3/O1CN01Y4o6Va1rzZ6XggGyr_!!6000000005702-2-tps-3582-2020.png_.webp)

* 最终我们点击预览按钮便可以看到以下预览效果：
![](https://img.alicdn.com/imgextra/i4/O1CN01BEyiaQ1kBSSq7bJmL_!!6000000004645-2-tps-3582-774.png_.webp)