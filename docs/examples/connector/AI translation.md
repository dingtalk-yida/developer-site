---
title: 集成&自动化 — AI翻译
order: 7
---

## 示例说明

输入一段文本，得到指定语种的译文，支持**中、英、日**三种语言的互译。

## 示例演示

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01R5cAua28FAS733etW_!!6000000007902-2-tps-1920-951.png)

## 操作步骤

### 步骤一：表单设计

分别创建用于输入需要翻译文本的以及接收翻译结果的两个表单。
**(1) 创建输入表单**

1. 创建表单，命名为「翻译文档」。
2. 添加单行文本组件，命名为「需翻译文本」，设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01amQJVV1Zvkj8X8hBY_!!6000000003257-2-tps-1046-546.png)

3. 添加两个下拉单选组件，分别命名为「待翻译语种」及「目标语种」，设置为必填项。自定义选项内容，组件显示值与组件选项值对应关系如下表所示。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01PhMOlx1tIdDC6QHvd_!!6000000005879-2-tps-1046-545.png)
​
**下拉单选组件显示值与选项值对应表**

| 下拉单选组件显示值 | 下拉单选组件选项值 |
| ------------------ | ------------------ |
| 中文               | zh                 |
| 英文               | en                 |
| 日语               | ja                 |

4. 点击页面右上角「保存」按钮，即可。

**(2) 创建接收表单**

1. 创建表单，命名为「AI 翻译结果」。
2. 添加单行文本组件，命名为「翻译结果」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01CnRBIz25DqSj06JGa_!!6000000007493-2-tps-1046-546.png)

3. 点击页面右上角「保存」，即可。

### 步骤二：配置连接器

> **拓展阅读：** 获取宜搭连接器详细介绍，请移步：[集成&自动化-连接器](https://www.yuque.com/yida/support/zevvr1?view=doc_embed)

**操作步骤：**

1. 后台管理页 >>集成&自动化 >>「新建集成&自动化」>>将连接器命名为「AI 翻译」>>触发类型选择「表单事件触发」>>指定触发表单为「翻译文档」，点击「确定」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01ytH7BX1rXAYF9qWww_!!6000000005640-2-tps-1046-546.png)

2. 配置表单事件触发：触发事件为创建成功，数据过滤为全部数据，点击「保存」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN013WUcgD27Wk29NRhhY_!!6000000007805-2-tps-1046-546.png)

3. 选择连接器应用：选择「人工智能」应用，点击「下一步」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01UF5V8X1fTiAjbQRs7_!!6000000004008-2-tps-1046-545.png)

4. 选择连接器执行动作：选择「翻译」执行动作，点击「下一步」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01lEjWHN1fSKz5YOv4i_!!6000000004005-2-tps-1046-545.png)

5. 配置连接器执行动作，点击「保存」按钮。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i3/O1CN0105pmVG1gpz34j0uVj_!!6000000004192-2-tps-1046-547.png)

6. 添加并配置新增数据节点。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01cQawER1NBhW0I9hJs_!!6000000001532-2-tps-1046-543.png)

7. 点击页面右上角「保存」按钮后，点击「发布」按钮，即可。

### 步骤三：提交表单

提交「翻译文档」表单数据，触发连接器。在「AI 翻译结果」表单中可以查看翻译结果。（操作如下图所示）
![image.png](https://img.alicdn.com/imgextra/i4/O1CN010x6BvP27qtSglFsoC_!!6000000007849-2-tps-1920-951.png)
