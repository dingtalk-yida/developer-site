---
title: 集成&自动化 — 创建日程
order: 25
---
# 1. 使用场景
如公司每月月底都需要召开全员总结大会，需要提前进行会务准备。会务组成员需要为自己创建日程便于提醒。现在通过宜搭的表单的填写与提交，即可自动为其在钉钉上创建日程。可将待办事项写入到钉钉日历并在钉钉日历中展示。
# 2. 操作步骤
## 2.1 步骤一：表单的创建与配置
创建表单，用于录入日程相关信息，并作为触发连接器功能的数据来源。
**操作步骤：**
1. 新建表单，命名为「日程信息登记」。
1. 在表单内分别添加两个日期组件，分别命名为「日程开始时间」和「日程结束时间」，将格式设置为「年-月-日 时:分」，设置为必填项。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01ZOe3ip1pQBHJBSMc6_!!6000000005354-2-tps-1920-952.png)
:::danger
**注意：**在进行表单数据填写时，应保持**开始时间晚于结束时间**，否则连接器将不会执行。
:::
3. 添加一个成员组件，命名为「日程参与人」，开启多选模式，设置为必填项。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01jXYURN1wiEC2nnGv6_!!6000000006341-2-tps-1920-951.png)
4. 添加一个单行文本组件，命名为「日程标题」，设置为必填项。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01opsfmw28bbrRYdhQ2_!!6000000007951-2-tps-1920-949.png)
5. 一个多行文本组件，点击保存，即可。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01YSIhoD1QfQ3o04BCK_!!6000000002003-2-tps-1920-951.png)
## 2.2 步骤二：创建集成&自动化
:::info
**拓展阅读：**获取详细的连接器介绍，请移步[集成&自动化-连接器](https://www.yuque.com/yida/support/zevvr1?view=doc_embed)
:::
提交表单时，系统自动为指定人员发起日程，因此我们需要配置连接器。
### 2.2.1 新建集成&自动化
**操作步骤：**
1. 后台管理页面>>集成&自动化>>「新建集成&自动化」。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01rjHvan1pbAmed1pzt_!!6000000005378-2-tps-2878-1590.png)
2. 「新建集成&自动化」对话框>>将连接器命名为「创建日程」>>选择触发类型为「表单事件触发」并指定触发表单>>点击确认。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i2/O1CN010LpOj21o2zbcEfmMl_!!6000000005168-2-tps-2878-1592.png)
### 2.2.2 配置集成&自动化
#### （1）配置表单触发事件
**操作步骤：**
点击选中「表单事件触发」，在触发事件中选择「创建成功」， 数据过滤选择「全部数据」。最后，点击右下角保存按钮，即可。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01I2M4o925NSmAv7giK_!!6000000007514-2-tps-1920-947.png)
#### （2）配置连接器
**操作步骤：**
1. 配置「连接器」节点，在选择应用中选中「日程」，并点击下一步按钮。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i3/O1CN018y11bF1nK6nGsurm7_!!6000000005070-2-tps-1920-949.png)
2. 在选择执行动作中选中「创建日程」执行动作，点击下一步按钮。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01QqD6wy1qFw1soSvBZ_!!6000000005467-2-tps-1920-951.png)
3. 在配置执行动作中对各个配置项进行配置，点击保存。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01J0YoYU1rJt4Bou4ZY_!!6000000005611-2-tps-1920-950.png)
4. 点击页面右上角保存后，点击发布即可。
## 2.3 步骤三：配置待办任务内容
通过上述两个步骤，我们实现功能的配置工作已经完成，接下来，只需提交表单即可触发连接器，从而在指定的时间节点为指定的人员创建日程，并在指定的时间节点关闭日程。
**操作步骤：**
填写表单内容，点击提交，即可。（操作如图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01U7E2XN1TYxJqHHnXM_!!6000000002395-2-tps-1920-955.png)
# 3. 实现效果
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01Nl5iXC28fH1poZpVb_!!6000000007959-2-tps-1920-1042.png)