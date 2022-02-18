---
title: 调试
order: 9
---
# 调试
在自定义页面搭建过程中调试非常重要，宜搭平台在自定义页面搭建过程中提供以下调试方式：

## debugger
我们可以在动作面板中增加```debugger```代码来设置断点，并在预览的时候通过用户操作命中断点进行单行调试：
* 增加debugger代码：
![](https://img.alicdn.com/imgextra/i2/O1CN015yriT81K85XSqkIIv_!!6000000001118-2-tps-3582-2018.png_.webp)

* 在预览页面命中断点并开始单点调试：
![](https://img.alicdn.com/imgextra/i1/O1CN01yyRtgc1FdAKbpk52T_!!6000000000509-2-tps-3582-2012.png_.webp)


## 开启schema工作台
​

在宜搭表单设计器的左下角隐藏着开启schema工作台入口的按钮，我们可以在schema工作台中通过导入schema来快速生成页面；同时也支持用户在工作台内编辑schema，通过修改schema来快速定义表单定义。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/400515/1645176809722-fc49a78f-db77-418d-9310-2d9591d54b01.png#clientId=u48812605-439c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=772&id=u8290385c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1544&originWidth=2824&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1194364&status=done&style=none&taskId=u8fc6bcad-5bac-4765-968b-0acfc9d8107&title=&width=1412)


下述内容将为大家介绍开启schema工作台入口的方法，只需简单几步即可实现。
​


1. 安装浏览器插件——tampermonkey（油猴）

安装地址：[https://www.tampermonkey.net/](https://www.tampermonkey.net/)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/400515/1645177924601-571ee97b-dcdd-4e6e-bc71-230a3c339869.png#clientId=u48812605-439c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=774&id=u52d9c171&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1548&originWidth=2824&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1408606&status=done&style=none&taskId=ude7ed9ac-dd7f-4566-a5a8-30ed2da7ea2&title=&width=1412)
​


2. 访问插件 - 实用工具 ， 导入此文件[schemaedit.txt](https://www.yuque.com/attachments/yuque/0/2022/txt/400515/1645177718265-a19c1073-c357-47ac-b1d2-e16c58b700b6.txt?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2022%2Ftxt%2F400515%2F1645177718265-a19c1073-c357-47ac-b1d2-e16c58b700b6.txt%22%2C%22name%22%3A%22schemaedit.txt%22%2C%22size%22%3A1478%2C%22type%22%3A%22text%2Fplain%22%2C%22ext%22%3A%22txt%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22u4b6791f2-cdd7-4ab8-b3f8-a75e8f8fd5d%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u04401d64%22%2C%22card%22%3A%22file%22%7D)

![image.png](https://cdn.nlark.com/yuque/0/2022/png/400515/1645176937290-a936908b-3c79-4831-83aa-80ca97cd5104.png#clientId=u48812605-439c-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ubd37a4b7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1226&originWidth=5116&originalType=url&ratio=1&rotation=0&showTitle=false&size=246308&status=done&style=none&taskId=uc759dc63-19b0-4261-83a9-be272489126&title=)


3. 安装成功后，重新访问宜搭表单设计器即可。

