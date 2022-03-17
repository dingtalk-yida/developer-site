---
title: 提交报销单触发消息通知
order: 24
---
## 案例背景
以往想实现员工提交报销表单自动发送消息通知到当前群，需要配置消息通知，并且还需要在群内启用宜搭应用，不启用则无法通知，操作步骤复杂，还会占用群应用数量，现在通过集成自动化，就可以直接实现给指定人员和钉钉群发送消息能力。
## 实现效果
企业员工提交报销单时，自动发送消息通知主管和部门群，实现报销公开透明。
## 操作步骤
本案例需要创建 1 张**财务报销单**（普通表单），如果需要审批流程也可创建流程表单，配置一致。
### 步骤一：财务报销单-表单设计
路径：新建页面 >> 新建表单
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01KMV1nA1F76cNdn4vi_!!6000000000439-2-tps-1836-863.png)
主要信息为提交人、报销理由和报销金额，其他内容可自定义。
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01J7sSwn1BwAJHNsXuz_!!6000000000009-2-tps-1832-866.png)
提交人设置公式 USER()、字段状态为只读，防止他人代填。
![image.png](https://img.alicdn.com/imgextra/i4/O1CN0194oDJc1tUzuQgpimt_!!6000000005906-2-tps-1835-872.png)
### 步骤二：集成&自动化
通过集成自动化实现提交表单后自动发送消息通知。
1. 新建集成&自动化
因为自动化是员工提交表单触发的，所以选择表单事件触发-创建成功。
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01n8aAGE1rexHtnVUpf_!!6000000005657-2-tps-1828-864.png)
2. 添加消息通知节点
通过此节点自动发送消息通知给主管（设置需要通知的人）
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01pIda921FQneBg4lR7_!!6000000000482-2-tps-1822-879.png)
**选择通知对象**
通知类型：工作通知
通知人员：指定成员
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01CuT9Bp1g76EkUBDHy_!!6000000004094-2-tps-1810-864.png)
**设置通知内容**
标题：必填，漏填不会发送通知
内容：必填，可以选择插入表单字段
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01Wn8Df71HJ8FREPh9l_!!6000000000736-2-tps-1797-871.png)
**预览通知卡片，保存配置**
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01a49yY91r6ba7amagp_!!6000000005582-2-tps-1829-875.png)
3. 添加消息通知节点
通过此节点自动发送通知到指定群
![image.png](https://img.alicdn.com/imgextra/i3/O1CN017nFXRm28oQxD4mKmK_!!6000000007979-2-tps-1822-879.png)
选择通知对象：群通知
发送到群：指定群，可通过输入群名称搜索到群![image.png](https://img.alicdn.com/imgextra/i4/O1CN01dXCEix1gXfD2N5vXU_!!6000000004152-2-tps-1826-875.png)
**设置通知内容**
通知内容：使用通知模板；
标题：必填，漏填不会发送通知；
内容：必填，可以选择插入表单字段；
**注意：选择通知模板中有消息变量，会显示未知字段，不支持显示消息变量**
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01lEb2su1py4aedo5pF_!!6000000005428-2-tps-1812-876.png)
**预览通知卡片，保存配置**![image.png](https://img.alicdn.com/imgextra/i4/O1CN01azXy0N1kh3nb1cRPN_!!6000000004714-2-tps-1804-872.png)
## 效果展示
发起一条财务报销单后，自动推送消息通知到指定人以及指定群聊。
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01V21pAw1wxnfD7XhYP_!!6000000006375-2-tps-1129-151.png)
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01Xs1nxt1cG1UZbzr5t_!!6000000003572-2-tps-1564-975.png)




![宜搭.jpg](https://img.alicdn.com/imgextra/i3/O1CN01GbDwfO21ObIsRntFU_!!6000000006975-0-tps-1222-687.jpg)
