---
title: 集成&自动化-连接器
order: 10
---

# 集成&自动化 - 连接器

宜搭平台并不是一个封闭的系统，通过连接器宜搭天然支持与外部系统的互联互通，目前宜搭已经接入了钉钉连接器，开发者可以轻量化将钉钉官方应用、钉钉生态内应用、企业自有系统等系统接入宜搭，通过宜搭连接器我们可以实现以下功能（连接器的功能使用详见[官方使用文档](https://docs.aliwork.com/docs/yida_support/wtwabe/zevvr1)）：

- 轻松实现宜搭表单之间的数据互联互通，通过数据操作节点的配置和编排，业务人员不再需要编写高级函数和代码；
- 宜搭接入钉钉一方连接器，包括工作通知、群通知、待办任务、通讯录、日程、日历、考勤、智能人事、日清月结（制造业）等，实现任务处理、消息发送的复杂场景；
- 支持企业开发自定义连接器，实现钉钉宜搭与钉生态应用以及其他三方应用的资源整合、数据传递、业务衔接；

## 触发类型

宜搭提供的集成&自动化能力可以理解为是一个流程化的逻辑编排能力，逻辑需要由触发器触发执行，目前宜搭连接器支持以下 4 中触发类型：

- 表单事件触发 - 指定的表单或流程事件触发，例如表单数据提交、流程节点状态更新等；
- 定时触发 - 按照设定的时间周期循环触发，例如每周 2 上午 10 点等；
- 应用事件触发 - 指定的钉钉一方、生态、三方应用事件触发，例如在通讯录中添加新成员时触发；
- Webhook 触发（暂未开放） - 当收到指定 URL 请求时触发；

## 节点

![](https://img.alicdn.com/imgextra/i2/O1CN01mvhrta1pwF0Qv0MFW_!!6000000005424-2-tps-1918-835.png_.webp)
上面有提到宜搭的集成&自动化其实是逻辑编排，那么我们就需要现有逻辑节点，宜搭提供以下节点类型：

- **触发器** - 用于配置触发器的执行规则，为逻辑流程的起点，例如可配置当 XX 表单数据提交成功时触发；
- **一方连接器** - 宜搭提供了大量的一方连接器能力，通过这些连接器能够轻松与钉钉的一方能力打通，例如发送钉钉消息、创建待办等；
- **自定义连接器** - 通过宜搭连接器工厂进行自定义连接自建系统或者第三方应用系统，详情配置可以参考[新建连接器文档](https://docs.aliwork.com/docs/yida_support/wtwabe/zevvr1)
- **数据节点** - 主要用于对宜搭数据进行增删改查操作；
  - **新增数据** - 目标表新增一条/多条数据，目前新增方式有表单中新增、在子表中新增 2 种；
  - **更新数据** - 更新一条/多条目标表的数据，当未获取到数据时，可设置跳过这个节点，或者新增一条数据；
  - **获取单条数据** - 获取目标表的单条数据，然后对数据进行处理（更新、删除），通常在更新或删除节点的上游；
  - **获取多条数据** - 批量获取目标表的多条数据，然后对数据进行处理（更新、删除），通常在更新或删除节点的上游；
  - **删除数据** - 删除某个表单的数据；
- **分支节点** - 分支节点能实现不同的条件执行下面不同的规则配置、同时满足多个条件同时进行执行规则配置；
  - **条件分支** - 条件分支间有优先级，只执行优先级最高的分支；
  - **并行分支** - 并行分支间无优先级，满足条件的分支都会执行；
- **发起审批** - 用于发起一个审批流程；
- **消息节点** - 用于执行消息发送，包含消息和邮件两种形式；
  - **消息通知** - 支持指定成员或角色发送钉钉工作通知或者是发送群消息；
  - **发送邮件** - 实现发送消息到指定邮箱号上，考虑到邮箱的安全性，发件人的邮箱账号密码需设置授权码；
- **开发者节点（Groovy）** - 通过 Groovy 脚本实现一些代码逻辑编写；

## 流程编排设计器

宜搭提供了一个流程编排设计器用于进行连接器的逻辑编排，使用方式和流程设计器基本一致，如下所示：
![](https://img.alicdn.com/imgextra/i4/O1CN01hBXtYI20vHxKjTraW_!!6000000006911-2-tps-1918-968.png_.webp)

## 功能演示

<video width="100%" controls>
  <source src="https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/364735056580.mp4" type="video/mp4"></source>
</video>

## 阿里云云市场印刷文字识别-通用文字识别

[连接器配置阿里云文字识别文档.docx](https://github.com/dingtalk-yida/developer-site/files/9082422/default.docx)


阿里云云市场印刷文字识别-通用文字识别
1商品链接及参数配置
https://market.aliyun.com/products/57124001/cmapi020020.html?spm=5176.2020520132.101.9.2b6b7218D2BOtf#sku=yuncode1402000000

![image](https://user-images.githubusercontent.com/24987640/178228361-e090f1f9-255e-4f8e-ace1-96209daa1739.png)

2连接器配置
Http连接器即可
![image](https://user-images.githubusercontent.com/24987640/178228457-c63cf127-21aa-42c2-b3ee-2688244f243c.png)
![image](https://user-images.githubusercontent.com/24987640/178228468-8bcea4c0-2dde-4ad2-b618-193c67a8e5bf.png)
![image](https://user-images.githubusercontent.com/24987640/178228477-a88042ff-c82a-455c-8ecd-b63ff8ba037b.png)

请务必配置headers
![image](https://user-images.githubusercontent.com/24987640/178228500-85f1e008-2777-4e52-8dc4-28d39c1678fd.png)


选择url为图片并设置临时可访问图片链接
![image](https://user-images.githubusercontent.com/24987640/178228517-b683ed27-106a-4813-bca8-dfa61ea812a2.png)


保存后进行测试
App Code在云市场中，查找方式参照低代码高级认证课程《Faas行程卡实战》视频。
![image](https://user-images.githubusercontent.com/24987640/178228540-4dab48fc-f4ea-4b03-830a-b750755bec50.png)
 
给一个阿里云的图片链接进行测试
https://gw.alicdn.com/tfs/TB1QTk0nAPoK1RjSZKbXXX1IXXa-1160-400.jpg

![image](https://user-images.githubusercontent.com/24987640/178228585-e6020114-3a03-4e3c-adad-83d36b4c4e23.png)

然后配置表单页面连接器
![image](https://user-images.githubusercontent.com/24987640/178228599-6fbd0980-d921-4e93-a915-b9647b1338bd.png)

然后配置图片上传按钮，上传成功后的动作
 ![image](https://user-images.githubusercontent.com/24987640/178228609-34624fc6-e239-4ee6-944c-5640e5bec0ae.png)

然后书写JS，第一段定义接口参数，第二段将返回值绑定到文本当中。
![image](https://user-images.githubusercontent.com/24987640/178228621-180e3ca4-8bb5-44b9-ab7f-c72e17f33a9a.png)
 
export function onSuccess(file, value) {
  const image = file["downloadURL"]
  console.log(image)
  const inputs = JSON.stringify({
    "Headers": {
      "Content-Type": "application/json; charset=UTF-8"
    },
    "Body": {
      "image": image,
      "configure": {
        "without_predicting_direction": false,
        "output_prob": true,
        "min_size": 16,
        "language": "sx",
        "output_keypoints": false,
        "skip_detection": false
      }
    }
  })

  this.dataSourceMap.tuxiangshibieaili.load({
      "inputs":inputs
  }).then((content)=>{

    this.$('textField_l5at5w31').setValue(content.ret[0].word)
  })
} 

如果要进行所有识别到的文本都留存，可以替换第2部分绑定内容为

this.dataSourceMap.tuxiangshibieaili.load({
    "inputs":inputs
}).then((content)=>{

  var ret = content.ret,
    newStr = [];
  for (var i = 0; i < ret.length; i++) {
    newStr.push(ret[i].word);
  }

  this.$('textField_l5at5w31').setValue(newStr.join(','))
})


