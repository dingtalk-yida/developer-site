---
title: 调试
order: 15
---
# 调试
在自定义页面搭建过程中调试非常重要，宜搭平台在自定义页面搭建过程中提供以下调试方式：

## debugger
我们可以在动作面板中增加`debugger`代码来设置断点，并在预览的时候通过用户操作命中断点进行单行调试：
* 增加 debugger 代码：
![](https://img.alicdn.com/imgextra/i2/O1CN015yriT81K85XSqkIIv_!!6000000001118-2-tps-3582-2018.png_.webp)

* 在预览页面命中断点并开始单点调试：
![](https://img.alicdn.com/imgextra/i1/O1CN01yyRtgc1FdAKbpk52T_!!6000000000509-2-tps-3582-2012.png_.webp)


## 在浏览器控制台输入 cmd/ctrl + p，输入 page.js，直接添加断点调试
![](https://img.alicdn.com/imgextra/i3/O1CN01giXDwN1KgRGdcPB53_!!6000000001193-2-tps-5116-1040.png_.webp)

![](https://img.alicdn.com/imgextra/i1/O1CN013Xe57e1YO1yK1ZSzK_!!6000000003048-2-tps-5112-1044.png_.webp)

## 打开自助调试面板
开发者也可以在页面的URL中增加一个```__showDevtools```参数，开启调试面板（[自助拼接链接](https://demo.aliwork.com/o/debug_by_self?__showDevtools=true)），例如：[https://www.aliwork.com/bench/feedback?__showDevtools](https://www.aliwork.com/bench/feedback?__showDevtools)。

![](https://img.alicdn.com/imgextra/i4/O1CN01FeqWe01K3VaGYsziL_!!6000000001108-2-tps-1704-876.png_.webp)

通过调试面板，开发者可以进行以下操作：
* 查看数据源变量；
* 查看表单数据；
* 查看错误请求；
* 上报错误日志；

最关键的是调试面板让移动端调试变得非常方便。
<img src="https://img.alicdn.com/imgextra/i1/O1CN01AbbW3t1CHEWgEdqz1_!!6000000000055-2-tps-296-640.png_.webp" width="300"/>

## 开启 schema 工作台(schema 导入/导出)
在宜搭表单设计器的左下角隐藏着开启 schema 工作台入口的按钮，我们可以在 schema 工作台中通过导入 schema 来快速生成页面；同时也支持用户在工作台内编辑 schema，通过修改 schema 来快速定义表单定义。用户可以直接在设计的链接的URL后面拼接```__debug```参数进行开启（[自助拼接链接](https://demo.aliwork.com/o/debug_by_self?__showDevtools=true)），如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN01Zo997Z25vM6hrTuvy_!!6000000007588-2-tps-2878-1714.png_.webp)


## 移动端/端内通过 vConsole 进行调试
打开需要调试页面的动作面板，在最上方直接输入下面代码。访问进行调试。
注意调试完成后删除该代码。
```javascript
  const vConsole = 'https://g.alicdn.com/code/lib/vConsole/3.11.2/vconsole.min.js';
  const js = document.createElement('script');
  js.src = vConsole;
  document.body.append(js);
  js.onload = function() {
    window.vConsole = new window.VConsole();
  };
```
![](https://img.alicdn.com/imgextra/i2/O1CN013NSTWL1azFO3tZm8u_!!6000000003400-2-tps-1420-866.png)
![](https://img.alicdn.com/imgextra/i2/O1CN01l807TE1d6h3UsIyRr_!!6000000003687-2-tps-1676-1662.png)
