---
title: 组织外用户查询免登提交数据
order: 4
---

:::warning
**特别声明：该方案可能存在数据安全风险，需要在云服务端做好数据查询限制及过滤 ！**
:::

## 1. 案例背景

&nbsp;&nbsp;&nbsp;&nbsp;组织外用户通过免登方式匿名提交宜搭数据后，需要查其历史提交过的免登数据。由于当前宜搭暂未提供免登数据查询能力，故出此案例。该案例适用于：「用户提交投诉后，查看投诉进展」、「匿名投票后，查看投票汇总」等场景。

现状如下图：<br />
<img src="https://img.alicdn.com/imgextra/i3/O1CN01zsSRdk1RlCgLASzx8_!!6000000002151-2-tps-1198-476.png_.webp" width="1350"/>

## 2. 实现效果

&nbsp;&nbsp;&nbsp;&nbsp;用户可以通过访问宜搭自定义页面，通过自定义页面的表格组件来查询数据。<br />![](https://img.alicdn.com/imgextra/i4/O1CN01uTpoYY1ocG6xGYVDe_!!6000000005245-2-tps-1350-490.png_.webp)

## 3. 实现原理

### 3.1 关键词

&nbsp;&nbsp;&nbsp;&nbsp;自定义页面、FAAS 服务、OPEN API

### 3.2 思考

&nbsp;&nbsp;&nbsp;&nbsp;Q：组织外用户由于不在组织架构内，无法通过访问应用内的数据管理页或报表来查询数据，该怎么办？<br />&nbsp;&nbsp;&nbsp;&nbsp;A：使用开启免登的自定义页面作为组织外用户的数据查询入口。

&nbsp;&nbsp;&nbsp;&nbsp;Q：自定义页面如何获取表单数据并渲染？<br />&nbsp;&nbsp;&nbsp;&nbsp;A：可以使用自定义页面中的远程数据源，请求宜搭数据查询接口来获取数据，并通过表格组件或其他组件渲染。

&nbsp;&nbsp;&nbsp;&nbsp;Q：可以用的接口有哪些？<br />&nbsp;&nbsp;&nbsp;&nbsp;A：当前宜搭有开放 2 套接口，分别为：《宜搭平台接口》、《OPEN API》。<br />区别在于《宜搭平台接口》在发起请求时，需要获取当前登录者的登录信息，在免登页面中无法使用；<br />&nbsp;&nbsp;&nbsp;&nbsp;而《OPEN API》是可以单独定义查询人的 userId 的，故没有登录态的问题，但调用该接口需要使用官方的；<br />&nbsp;&nbsp;&nbsp;&nbsp;sdk 进行 token 签名，无法直接在页面数据源请求，故需要启用中间服务（此处推荐“阿里云函数计算”）做转发。

### 3.3 原理脑图

![](https://img.alicdn.com/imgextra/i4/O1CN01ZPpEkE1DsA4yjuRBI_!!6000000000271-2-tps-1350-647.png_.webp)

## 4. 实现步骤

### 4.1 访问云函数平台，新建函数及服务

&nbsp;&nbsp;&nbsp;&nbsp;1. 此处以「阿里云函数计算」举例，访问云函数平台。

![](https://img.alicdn.com/imgextra/i1/O1CN01gM0lyA1qxu3nd6cGt_!!6000000005563-2-tps-1350-707.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;2. 创建服务

![](https://img.alicdn.com/imgextra/i2/O1CN01OT3KVo1cYnjUtiuUz_!!6000000003613-2-tps-1350-711.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;3. 在服务中创建函数。

![](https://img.alicdn.com/imgextra/i4/O1CN01hY8fY724eZyERctJW_!!6000000007416-2-tps-1350-659.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;4. 函数配置，定义函数触发方式（通过 HTTP 请求触发）及函数环境（此处以 node.js 举例）。

![](https://img.alicdn.com/imgextra/i2/O1CN01v5cjF025NvBFi6bjg_!!6000000007515-2-tps-1350-788.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;5. 导入代码包（可在附录 6.1 下载）。

![](https://img.alicdn.com/imgextra/i2/O1CN01dSvwn21V5IucA3U9U_!!6000000002601-2-tps-1350-708.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;6. 访问触发器管理，获取请求链接。该请求链接可以直接配置在宜搭远程数据源中请求。

![](https://img.alicdn.com/imgextra/i3/O1CN01NQjyKE1Q69ZPDgWbT_!!6000000001926-2-tps-1350-746.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;7. 验证函数，在浏览器中以 get 请求的方式调用并触发该函数，会自动下载一个 json。

![](https://img.alicdn.com/imgextra/i2/O1CN01JdgvNP1KT9lTpR5Sx_!!6000000001164-2-tps-1350-827.png_.webp)

### 4.2 于自定义页面配置远程数据源

&nbsp;&nbsp;&nbsp;&nbsp;1. 经过 4.1 的配置，我们已经生成了一个可以拿到宜搭指定表单数据的接口，并生成了接口地址。我们只需将该接口地址配置在远程数据源中即可免登获取数据。

![](https://img.alicdn.com/imgextra/i1/O1CN01bpB1Cj1I9nnZwHZWd_!!6000000000851-2-tps-1350-770.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;2. 使用远程数据源请求拿到的数据对自定义页面的表格组件进行渲染，可参考文档[《自定义页面表格实现数据管理页功能》](https://www.yuque.com/yida/subject/vswqzz)

![](https://img.alicdn.com/imgextra/i4/O1CN01Dr8j3z1SdhoOrx5I9_!!6000000002270-2-tps-1350-633.png_.webp)

## 5.场景案例
<video width="100%" controls>
  <source
    src="http://cloud.video.taobao.com/play/u/2554592263/p/1/e/6/t/1/353554115289.mp4"
    type="video/mp4"
  ></source>
</video>
### 5.1 场景

&nbsp;&nbsp;&nbsp;&nbsp;《访客申请》

### 5.2 场景描述

&nbsp;&nbsp;&nbsp;&nbsp;组织外人员在使用宜搭免登表单提交访客申请后，需要实时查询其访客申请状态

### 5.3 实现方式

#### 5.3.1 新建访客申请流程表单，并开启免登

1. 新建免登流程表单

![](https://img.alicdn.com/imgextra/i3/O1CN01aAYqaJ20x7XfRs0jW_!!6000000006915-2-tps-1350-712.png_.webp)

#### 5.3.2 参考文档 「4.1 访问云函数平台，新建函数及服务」，新建 faas 服务

1. 配置完服务后，导入附录 6.1 的代码包。

![](https://img.alicdn.com/imgextra/i3/O1CN01T3xICp1jD0Bw9gJyO_!!6000000004513-2-tps-1350-660.png_.webp)

#### 5.3.3 新建访客查询页面，配置远程数据源

1. 该页面为自定义页面，注意要开启免登。

![](https://img.alicdn.com/imgextra/i4/O1CN01AdsYRm1vCL0IiPKaW_!!6000000006136-2-tps-1350-393.png_.webp)

2. 配置远程数据源

![](https://img.alicdn.com/imgextra/i1/O1CN01mt3j801lSEasheHjn_!!6000000004817-2-tps-1350-709.png_.webp)

3. 配置搜索按钮的点击事件，触发远程数据源请求。 **注：请求过滤参数需设置必填校验，否则存在被拖库风险**

![](https://img.alicdn.com/imgextra/i1/O1CN01C3Rgol1kTJuvHbL0T_!!6000000004684-2-tps-1350-710.png_.webp)

#### 5.3.4 效果验证

![](https://img.alicdn.com/imgextra/i1/O1CN01vx22D71HP5OhwA210_!!6000000000749-2-tps-1350-490.png_.webp)
