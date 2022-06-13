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

## 打开调试面板
开发者也可以在页面的URL中增加一个```__showDevtools```参数，开启调试面板，例如：[https://www.aliwork.com/bench/feedback?__showDevtools](https://www.aliwork.com/bench/feedback?__showDevtools)。

![](https://img.alicdn.com/imgextra/i4/O1CN01FeqWe01K3VaGYsziL_!!6000000001108-2-tps-1704-876.png_.webp)

通过调试面板，开发者可以进行以下操作：
* 查看数据源变量；
* 查看表单数据；
* 查看错误请求；
* 上报错误日志；

最关键的是调试面板让移动端调试变得非常方便。
<img src="https://img.alicdn.com/imgextra/i1/O1CN01AbbW3t1CHEWgEdqz1_!!6000000000055-2-tps-296-640.png_.webp" width="300"/>



## 开启 schema 工作台
在宜搭表单设计器的左下角隐藏着开启 schema 工作台入口的按钮，我们可以在 schema 工作台中通过导入 schema 来快速生成页面；同时也支持用户在工作台内编辑 schema，通过修改 schema 来快速定义表单定义。
![](https://img.alicdn.com/imgextra/i3/O1CN01hjzzpf299xYxgp7pn_!!6000000008026-2-tps-2824-1544.png_.webp)

用户可以打开设计器的控制台，执行下面代码：

```javascript
document.querySelector('.lc-left-area-bottom div:last-child').style.display = 'block';
```
![](https://img.alicdn.com/imgextra/i4/O1CN01WsI8gn1nRR8Ubes42_!!6000000005086-2-tps-1706-910.png_.webp)


如果经常需要使用schema 工作台，我们更建议使用油猴脚本来控制打开Schema工作台，只需简单几步即可实现：
​
1. 安装浏览器插件——tampermonkey（油猴）

安装地址：[https://www.tampermonkey.net/](https://www.tampermonkey.net/)
![](https://img.alicdn.com/imgextra/i3/O1CN01Xos7mS1eUnUeGNHsD_!!6000000003875-2-tps-2824-1548.png._webp)


2. 访问插件 - 实用工具 ，下载<a href="https://files.alicdn.com/tpsservice/8a115a7888ade7b9e896844bac37b5d6.zip" target="_blank">此文件</a>，解压后导入油猴，文件具体内容如下所示：
```json
{
  "created_by": "Tampermonkey", 
  "version": "1", 
  "scripts": [{
    "name": "设计器左下角 Edit", 
    "options": {
      "check_for_updates": false, 
      "comment": null, 
      "compat_foreach": false, 
      "compat_metadata": false, 
      "compat_prototypes": false, 
      "compat_wrappedjsobject": false, 
      "compatopts_for_requires": true, 
      "noframes": null, 
      "override": {
        "merge_connects": true, 
        "merge_excludes": true, 
        "merge_includes": true, 
        "merge_matches": true, 
        "orig_connects": [], 
        "orig_excludes": [], 
        "orig_includes": [], 
        "orig_matches": ["https://* **.aliwork.com/**"], 
        "orig_noframes": null, 
        "orig_run_at": "document-idle", 
        "use_blockers": [], 
        "use_connects": [], 
        "use_excludes": [], 
        "use_includes": [], 
        "use_matches": []
      }, 
      "run_at": null
    }, 
    "storage": {
      "data": {}, 
      "ts": 1630307670709
    }, 
    "enabled": true, 
    "position": 1, 
    "uuid": "a931a304-23fd-4042-a52b-e236001f91e0", 
    "source": "Ly8gPT1Vc2VyU2NyaXB0PT0KLy8gQG5hbWUgICAgICAgICDorr7orqHlmajlt6bkuIvop5IgRWRpdAovLyBAbmFtZXNwYWNlICAgIGh0dHA6Ly90YW1wZXJtb25rZXkubmV0LwovLyBAdmVyc2lvbiAgICAgIDAuMQovLyBAZGVzY3JpcHRpb24gIOiuvuiuoeWZqOW3puS4i+inkiBFZGl0Ci8vIEBhdXRob3IgICAgICAgWW91Ci8vIEBtYXRjaCAgICAgICAgaHR0cHM6Ly8qKiouYWxpd29yay5jb20vKioKLy8gQGdyYW50ICAgICAgICBub25lCi8vID09L1VzZXJTY3JpcHQ9PQoKKGZ1bmN0aW9uKCkgewogICAgJ3VzZSBzdHJpY3QnOwogICAgc2V0VGltZW91dCgoKT0+ewogICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGMtbGVmdC1hcmVhLWJvdHRvbSBkaXY6bGFzdC1jaGlsZCcpKSB7CiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYy1sZWZ0LWFyZWEtYm90dG9tIGRpdjpsYXN0LWNoaWxkJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaycKICAgICAgICB9CiAgICB9LDIwMDApCn0pKCk7"
  }]
}
```

![](https://img.alicdn.com/imgextra/i1/O1CN01UKa3MH23BR8zLZbk7_!!6000000007217-2-tps-5116-1226.png_.webp)


3. 安装成功后，重新访问宜搭表单设计器即可。

## 搜索page.js

