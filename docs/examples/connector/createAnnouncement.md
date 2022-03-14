---
title: 集成&自动化 — 创建企业公告
order: 8
---

## 示例说明

宜搭提供了钉钉公告连接器，可以由企业的主管理员（或是子管理员）发送给全公司（也可指定部门、指定员工）的通知性文章，可以通过公告发布公司的规章制度、放假信息等。

## 示例演示

查看路径：钉钉消息 >> 工作 >> 工作通知 >> 公告 >> 查看详情

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01nxX2ny1UulnZ6196e_!!6000000002578-2-tps-1920-1038.png)

## 操作步骤
### 步骤一：表单设计

创建表单，进行公告的相关内容填充及配置。

**操作步骤：**

1. 创建表单，命名为「创建公告」。
2. 添加成员组件，命名为「发布人」，设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN0119RcNJ24fUktwGDzs_!!6000000007418-2-tps-1046-518.png)
​
3. 添加下拉单选组件，命名为「是否DING通知」，自定义两个选项，分别为「显示值：是，选项值：true」及「显示值：否，选项值：false」。设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN015Qceht1lgtGLdLR9c_!!6000000004849-2-tps-1046-535.png)

4. 添加部门组件，命名为「接收部门」，开启多选模式，设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01BdWmV41PvA3ZeCeS0_!!6000000001902-2-tps-1046-517.png)

5. 添加成员组件，命名为「接收成员」，开启多选模式，设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01pBwnxw1aEWy0YJslE_!!6000000003298-2-tps-1046-518.png)

6. 添加单行文本组件，命名为「公告标题」，设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN014A4AwE1q6JiMes6lD_!!6000000005446-2-tps-1046-517.png)

7. 添加多行文本组件，命名为「公告内容」，设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN0160jdVf1Id78hUe30S_!!6000000000915-2-tps-1046-517.png)

8. 点击页面右上角「保存」按钮，即可。

### 步骤二：配置连接器

> 获取宜搭连接器详细介绍，请移步：[集成&自动化-连接器](https://www.yuque.com/yida/support/zevvr1?view=doc_embed)

给「创建公告」添加并配置连接器，以实现宜搭表单与钉钉公告应用进行数据集成。

**操作步骤：**

1. 后台管理页 >> 集成&自动化 >>「新建集成&自动化」>>将连接器命名为「创建企业公告」>>选择表单事件触发并指定「创建公告表单」>>点击确认。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01USP3JG1WaHJAU3ZtP_!!6000000002804-2-tps-1046-579.png)

2. 配置表单事件触发：触发事件为创建成功，数据过滤为全部数据，点击「保存」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01dmJCja24UVFhixq9F_!!6000000007394-2-tps-1920-949.png)

3. 选择连接器应用：选择「公告」应用，点击「下一步」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01FRB8iE1OrD1eD4qDu_!!6000000001758-2-tps-1046-517.png)

4. 选择连接器执行动作：选择「发布公告」执行动作，点击「下一步」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01cED0JO1jPpHFuzCyT_!!6000000004541-2-tps-1920-950.png)

5. 配置连接器执行动作，点击「保存」按钮。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01wGbdBM1t90tWR8XwI_!!6000000005858-2-tps-1920-950.png)

6. 点击页面右上角「保存」按钮后，点击「发布」按钮，即可。

### 步骤三：提交表单
提交「创建公告」表单数据，触发连接器。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01JnmVRJ1CxMxoil0vT_!!6000000000147-2-tps-1920-950.png)
