---
title: 删除业务规则插入目标表的数据
order: 23
---

## 案例背景

表单设置业务规则插入数据到目标表时，经常会造成录入错误，但删除录入的数据目标表数据并不会删除，会造成重复工作情况；
本案例将通过集成&自动化实现自动删除目标表数据的功能，解决以上难点。

## 实现效果

提交流程表单通过业务关联规则向目标表（普通表单）插入数据，删除流程数据的同时将插入目标表的记录一起删除。

## 操作步骤

需要 2 张表单：信息录入表(流程表单)、用户信息底表(普通表单)

### 步骤 1：表单设计

创建两张表单，提交信息录入表（流程表单）、用户信息底表（普通表单）
**路径**：进入应用后 >> 左上角新建页面 >> 新建表单/新建流程表单
![](https://img.alicdn.com/imgextra/i1/O1CN01enbLVg1QKoExsUyNT_!!6000000001958-2-tps-1821-872.png_.webp)
新建表单/流程表单

1. 用户信息底表
   
**表单用途**​
- 存储用户部分信息

**组件配置**
- 用户姓名：单行文本
- 身份证号：单行文本
- 手机号：单行文本

![](https://img.alicdn.com/imgextra/i1/O1CN01LQqh9O1Y8SUIFDNpM_!!6000000003014-2-tps-1837-873.png_.webp)
组件配置
校验提交的身份证号码、电话号码是否规范，可以开启单行文本格式校验
![](https://img.alicdn.com/imgextra/i3/O1CN01bPYGdv1a3XSgxayUJ_!!6000000003274-2-tps-1829-879.png_.webp)
格式配置 

2. 提交信息录入表
**表单用途**
- 用于提交用户的基本信息

**组件配置**
- 录入人：成员
- 用户姓名：单行文本
- 用户身份证：单行文本
- 电话：单行文本
- 性别：单行文本
- 年龄：数值
- 可以根据自己的需求增加

### ![](https://img.alicdn.com/imgextra/i4/O1CN016Q5nvG1NU1MHkPYQ2_!!6000000001572-2-tps-1829-879.png_.webp)

如果想实现通过输入的身份证号码自动获取出性别以及年龄，可以参考以下案例文档进行配置
[根据身份证号自动计算性别](https://www.yuque.com/yida/subject/mo5sop?view=doc_embed)
[根据身份证号自动计算年龄](https://www.yuque.com/yida/subject/fm0i23?view=doc_embed) 

3. 节点提交规则
对「提交信息录入表」设置节点提交规则，插入部分信息到「用户信息底表」
**路径**：点击信息录入表 >> 编辑流程表单旁倒三角符号 >> 流程设计 >> 全局设置 >> 节点提交规则 >> 新建规则![](https://img.alicdn.com/imgextra/i3/O1CN01zbsvlt1E1mOW2W0On_!!6000000000292-2-tps-1821-872.png_.webp)
![](https://img.alicdn.com/imgextra/i3/O1CN013WFN4r1zaOGcL1dA2_!!6000000006730-2-tps-1835-878.png_.webp)
![](https://img.alicdn.com/imgextra/i3/O1CN01JgPJzF1eQfw1rdfLG_!!6000000003866-2-tps-1833-872.png_.webp)
![](https://img.alicdn.com/imgextra/i3/O1CN01elaUXH1mriF4QNqVd_!!6000000005008-2-tps-1832-884.png_.webp)
设置业务关联规则
同时设置了校验规则，对身份证号校验去重，防止录入相同的用户
![](https://img.alicdn.com/imgextra/i4/O1CN01UMFMI31QmI0KUpntG_!!6000000002018-2-tps-1827-863.png_.webp)
![](https://img.alicdn.com/imgextra/i2/O1CN01ZPHNRv1CZYMv4oTbW_!!6000000000095-2-tps-1822-875.png_.webp)
校验规则配置
**扩展阅读：**
\*\* **[UPSERT - 插入或更新](https://www.yuque.com/yida/support/al3gkc?view=doc_embed)​
** \*\*[进销存系统搭建](https://www.yuque.com/yida/support/hyg0h0?view=doc_embed)

### 步骤 2：新建集成&自动化

设置集成&自动化实现删除数据的功能
**新建路径**：进入对应应用 >> 集成&自动化 >> 新建集成&自动化 >> 名称 >> 表单事件触发 >> 确定
![](https://img.alicdn.com/imgextra/i2/O1CN01RSq7qO1SdFQ10esHR_!!6000000002269-2-tps-1835-869.png_.webp)
新建集成&自动化
目的删除流程数据时触发的，所以在「提交信息录入表」新建集成&自动化选择表单事件触发-删除成功
![](https://img.alicdn.com/imgextra/i2/O1CN01CqdC4d260qqAllxGr_!!6000000007600-2-tps-1834-878.png_.webp)
选择触发事件

1. 添加获取单条数据节点
   新建获取数据节点，获取「用户信息底表」中插入的数据
   ![](https://img.alicdn.com/imgextra/i1/O1CN01oDlHxM25JLDdmhz7v_!!6000000007505-2-tps-1832-874.png_.webp)
   添加获取数据节点
   **获取方式**

- 从表单中获取，选择从用户信息底表中获取数据

![](https://img.alicdn.com/imgextra/i3/O1CN01LDVCH51FVq0OCPmfr_!!6000000000493-2-tps-1833-869.png_.webp)
获取方式选择
**数据过滤**：全部数据
**排序规则**：不排序
获取单条数据节点相关操作可以参考 [**数据节点-获取单条数据**](https://www.yuque.com/yida/support/zevvr1#sKFpp)
![](https://img.alicdn.com/imgextra/i1/O1CN01n7CGWm1JLzxUZIfGg_!!6000000001013-2-tps-1831-871.png_.webp)
配置数据过滤以及排序 2. 添加删除数据节点
添加一个删除数据节点
![](https://img.alicdn.com/imgextra/i2/O1CN01LJrnod1sZI0GBOhpd_!!6000000005780-2-tps-1835-878.png_.webp)
添加删除节点
**选择数据节点**：删除「获取单条数据」的数据
删除数据节点相关操作可以参考\*\* **[**数据节点-删除数据\*\*](https://www.yuque.com/yida/support/zevvr1#A7Lia)
![](https://img.alicdn.com/imgextra/i1/O1CN01MgxXZ01l3xbPxrMKx_!!6000000004764-2-tps-1828-872.png_.webp)
选择删除的数据节点

## 展示效果

提交了**信息录入表**数据会自动插入一条数据到**用户信息底表**，同时删除刚提交的数据，**用户信息底表**对应数据也会自动删除。
![1.gif](https://img.alicdn.com/imgextra/i1/O1CN01KsILmx1Gn4WUOaUX5_!!6000000000666-1-tps-1894-863.gif)
