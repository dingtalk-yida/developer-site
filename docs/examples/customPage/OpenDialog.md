## 使用场景
- 通过宜搭页面直接打开钉钉对话框
- 实现点按钮组件就打开一个指定的钉钉联系人的会话框
## 操作步骤
**路径：**自定义页面 >> 表单上添加链接块、按钮组件 >> 进入到链接块组件 >> 添加外部链接 >> 保存即可
![image.png](https://img.alicdn.com/imgextra/i4/O1CN018PGMYR1N77YKZ3eS1_!!6000000001522-2-tps-1918-865.png)
自定义页面
:::danger
 //进行跳转的链接
`dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=拼接钉钉名片中的钉钉号`
:::
### 获取钉钉号
可以通过点击对方的头像，然后下拉个人信息即可查看到钉钉号。
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01ETMEqH1Ld3wi9H0TP_!!6000000001321-2-tps-418-524.png)
获取钉钉号
可以查看以下动图演示进行设置：
![组件复制.gif](https://img.alicdn.com/imgextra/i4/O1CN01VEqyPZ1SU5UmIJow2_!!6000000002249-1-tps-1877-817.gif)
动图演示
## 常见问题
### 这个是否可以实现提交人不同，跳转到不同人员的钉钉对话框呢 ?
第一个方案：暂时不能直接获取到钉钉号，创建一个存放用户对应钉钉号的中间表，通过判断登录的用户，获取到钉钉号当作链接的变量；
另一个方案：将用户的工号换成用户的钉钉号，宜搭是可以直接获取到用户的工号的
## 在线试玩
在线体验请移步开发者中心 👉 [通过链接块打开钉钉对话框](https://www.aliwork.com/developer/show-dialog)
​

**--------------------获取宜搭最新信息，欢迎关注我们--------------------**
![宜搭.jpg](https://img.alicdn.com/imgextra/i3/O1CN01QpN6071J6st3ALbK6_!!6000000000980-0-tps-1800-1012.jpg)
