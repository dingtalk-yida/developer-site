---
title: 集成&自动化 — 与智能填表进行数据集成
order: 20
---
:::danger
注意：

- 当前仅支持获取用户创建的填表模板。
- 被查询的员工要在智能填表中
:::
## 使用场景
「智能填表」作为钉钉提供的一款基础应用，适用于问卷调查、报名统计等场景，并支持数据的统计与下载。本案例可实现在宜搭上提交表单触发连接器查询某员工在智能填表中创建的模板信息。
## 操作步骤
### 步骤一：创建「智能填表模板查询」表单
用于触发连接器进行查询。
**操作步骤：**

1. 新建表单，命名为「智能填表模板查询」。
1. 添加成员组件，命名为「模板创建人」，并设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01GaR7VN1ewjesdfexn_!!6000000003936-2-tps-1834-871.png)
​


3. 添加下拉单选组件，分别添加显示值为「通用填表」，选项值为「0」以及显示值为「教育填表」选项值为「1」的两个自定义选项。设置为必填项。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01wAFJiU27aPCq2ZWjA_!!6000000007813-2-tps-1908-893.png)
​


4. 点击页面右上角「保存」按钮，即可。
### 步骤二：创建「查询结果记录表」表单
用于接收连接器返回的结果，数据处理后进行展示。
**操作步骤：**

1. 新建表单，命名为「查询结果记录表」。
1. 添加多行文本组件，命名为「返回结果」，状态设置为「隐藏」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01xa3IcI1E8BwK7Mwax_!!6000000000306-2-tps-1830-872.png)
​


3. 添加子表单，命名为「查询结果记录」，并在子表单组件内添加10个单行文本组件，分别命名为「填表code」、「填表名称」、「填表提示」、「表单类型」、「填表周期」、「填表截止日期」、「创建时间」、「填表类型」、「填表是否终止」以及「填表创建人」。最后将每个文本组件的状态设置为「只读」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01ZaFK3B24QNgp1RnBo_!!6000000007385-2-tps-1836-871.png)
​


4. 点击页面右上角「保存」按钮，即可。
### 步骤三：新建并配置连接器
:::info
连接器整体功能介绍请参见：[集成&自动化-连接器](https://www.yuque.com/yida/support/zevvr1?view=doc_embed)
:::
**操作步骤：**

1. 进入应用后，点击上方「集成&自动化」，点击「新建集成&自动化」按钮。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN0103DOZL1lw0KkgEhsy_!!6000000004882-2-tps-1908-878.png)
​


2. 将连接器命名为「获取员工创建的智能填表模板信息」，选择「表单事件触发」并选择「只能填表模板查询」表单，点击「确定」按钮。

（操作如下图所示）
![image.png](https://img.alicdn.com/imgextra/i2/O1CN016tW8rr1sYpbdFeKaK_!!6000000005779-2-tps-1914-885.png)
​


3. 配置表单事件触发：触发事件选择「创建成功」，数据过滤选择「全部数据」，点击「保存」按钮。

（操作如下图所示）
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01kdy4121gIY8kNWxTV_!!6000000004119-2-tps-1920-951.png)
​


4. 选择连接器应用：选择「智能填表」应用，点击「下一步」。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01KyodNh1wCcrmL740S_!!6000000006272-2-tps-1920-952.png)
​


5. 选择连接器执行动作：选择「获取用户填表模板」，点击「下一步」按钮。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01HRpMvO2AC50ueTrpd_!!6000000008166-2-tps-1920-951.png)
​


6. 配置连接器执行动作，点击「保存」按钮。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01eX8NYg1k9AURfjnpX_!!6000000004640-2-tps-1920-949.png)
​


7. 添加新增数据节点：在连接器节点下方添加「新增数据」节点。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01CivfQr26Q2czQ1Jo2_!!6000000007655-2-tps-1920-951.png)
​


8. 配置新增数据节点，点击「保存」按钮。（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01b94TU326A0lIIQjf3_!!6000000007620-2-tps-1920-950.png)
​


9. 点击右上角「保存」按钮后，点击「发布」按钮，即可。
## 2.4 步骤四：配置「查询结果记录表」
通过上述步骤，已完成连接器的调用，也可以接收到连接器返回的数据。接下来，对返回数据进行数据处理，并将处理好的数据分别展示到「查询结果记录」子表单组件内的各个组件内。
**操作步骤：**
表单编辑页面，将下述代码复制到您页面左侧的「JS动作面板」中的`didMount`函数内。
（操作如下图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01TFghjK1nNJZQ6iu0o_!!6000000005077-2-tps-1911-893.png)
​

:::info
下述引入的代码可直接复制在 JS 面板内，注意：需要替换组件唯一标识。
:::
```javascript
//获取连接器传入多行文本中的数据
//将textareaField_kwcv17cj 为页面中名为"返回结果"多行文本组件的唯一编码。
let obj = this.$('textareaField_kwcv17cj').getValue();
//因为obj变量的值为字符串形式，JSON.parse()方法用于将obj变量转换为对象形式。
  let res = JSON.parse(obj);
//创建一个空数组"arr"，用于存储处理完成的数据。
  let arr = []
//对res变量进行遍历
  const data = res.map(item=>{
    let object = {};
//需要将12~21行代码中出现的"object."与"="中间代码分别替换为子表单内各组件的唯一标识。
    object.textField_kwcvykby = item.name;
    object.textField_kwcvykbz = item.memo;
    object.textField_kwcvykbx = item.form_code;
    object.textField_kwcvykc0 = item.setting.form_type === 0 ? "一次性填表" : "周期性填表";
    object.textField_kwcvykc3 = item.setting.form_type === 0 ? "非周期性填表" : item.setting.loop_days;
    object.textField_kwcvykc5 = item.setting.end_time ? item.setting.end_time : "未设置截止日期";
    object.textField_kwcvykcb = item.setting.create_time;
    object.textField_kwcvykcc = item.setting.biz_type === 0 ? "通用填表" : "教育版填表";
    object.textField_kwcvykcd = item.setting.stop === false ? "未终止" : "已终止";
    object.textField_kwcvykce = item.creator;
//将处理好的对象添加到arr数组中，一个object对象就是一条子表单数据。
    arr.push(object);
  })
//将arr数组数据赋值给子表单组件
//需要将tableField_kwd6plxz替换为您表单中子表单的唯一标识。
  this.$("tableField_kwd6plxz").setValue(arr);
```
### 步骤五：提交表单数据
填写并提交「智能填表模板查询」表单数据，触发连接器。并前往「查询结果记录表」表单的数据管理页面查看连接器返回的数据。（操作如下图所示）
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01aybbac22ev20b03hf_!!6000000007146-2-tps-1920-951.png)

## 效果展示
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01dfHegi1LM7IBn5VkB_!!6000000001284-2-tps-1920-951.png)

**--------------------获取宜搭最新信息，欢迎关注我们--------------------**
![宜搭.jpg](https://img.alicdn.com/imgextra/i2/O1CN01kzPtvK1ktstAK4wDg_!!6000000004742-0-tps-1800-1012.jpg)
