---
title: 展示抄送我的未读消息
order: 9
---

## 使用场景

在应用中可以获取到「抄送我的」信息，但是无法确认哪些是未阅读的信息，本文档通过自定义页面实现抄送信息查看的数量递减。

## 示例演示

**单流程效果演示**

<video width="100%" controls>
  <source
    src="https://cloud.video.taobao.com/play/u/1775663/p/1/d/hd/e/6/t/1/332665083092.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiNzMzMjcxY2NiMmVhMzk1MjhmZWQ4ZWI2NWFlOTJmMzYifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDcyNTE5NjM="
  ></source>
</video>

**单应用展示未读抄送信息效果演示**

<video width="100%" controls>
  <source
    src="https://cloud.video.taobao.com/play/u/1775663/p/1/d/hd/e/6/t/1/332696863587.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiZjFmMTEzZjdmYjEzMmYxNmM3ZmQ1YjBiNTEwZTZhYmYifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDYwMzU4MDc="
  ></source>
</video>

## 在线试玩

> 在线体验请移步开发者中心 👉 [展示抄送我的未读消息](https://www.aliwork.com/developer/show-unread-message)

## 操作步骤

准备 2 个页面，分别是流程页面和自定义页面。

### 步骤一：创建流程页面

**实现逻辑：**
在页面上放置一个「是否查看」的字段，隐藏起来。当抄送人点击查看这条数据的时候，判断当前登陆人是否为抄送人中的成员，再通过接口将这个是否查看的字段更新成已阅读。**创建一个流程页面** >> **完成流程审批节点设置** >> **创建数据**
:::danger

- 流程中的抄送人设置为一名成员。
- 多个抄送人不适用于下述代码，去修改页面中「是否查看」字段（操作如下图所示）。
  :::
  ![image.png](https://img.alicdn.com/imgextra/i2/O1CN01b1E85h1QIWFyu4Iz0_!!6000000001953-2-tps-1046-584.png)

**（1）设计流程页面**

在页面内放置所需组件和名为「是否查看」的单行文本组件，在属性中设置状态为隐藏，默认值为"否"（操作如下图所示）

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01zphU3J23iPfDMcVQL_!!6000000007289-2-tps-1046-423.png)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN018n0NJL1C1f3jxDcZn_!!6000000000021-2-tps-1046-442.png)

**（2）添加远程数据源**

创建两个远程数据源，分别为调用[获取审批记录](https://www.yuque.com/yida/support/aql605#g72uF)的接口和[流程实例更新](https://www.yuque.com/yida/support/aql605#h3XlF)接口，关闭自动加载并配置请求方法。(操作如下图所示)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN012GrLHk1yVypqhCV4a_!!6000000006585-2-tps-1046-587.png)

**（3）在 JS 面板内调用数据源**

**实现逻辑：**
在页面初始化时判断当前流程页面是提交页面还是详情页面，并且流程在进行中时 url 链接中的实例 ID 为 procInsId 的值，流程结束后 url 链接内实例 ID 为 formInstId 的值。获取到实例 ID 后将其用作参数，调用「获取审批记录」接口，判断如果有抄送节点并且当前登陆人为该节点的抄送人，那么调用流程实例更新接口将这条数据的「是否查看」字段数据更改为"已阅读"（操作如下图所示）。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01sE2DkZ1kPekGU5VY6_!!6000000004676-2-tps-1919-885.png)

**书写 JS 面板代码**
:::info
下述代码可直接复制在 JS 面板内
:::

```javascript
export function didMount() {
  var url = location.href; //获取url中是否有"procInsId"的参数
  //判断页面的url链接内是否存在procInsId，如果有则获取当作「获取审批记录」接口参数
  if (url.indexOf("procInsId") != -1) {
    const params = {
      processInstanceId: this.state.urlParams.procInsId,
    };
    //调用获取「获取审批记录」接口，将url上的procInsId值当作参数传入。
    this.dataSourceMap.getOperationRecords.load(params).then((response) => {
      //循环获取节点信息，如有抄送信息，和当前登陆人进行判断
      for (let i = 0; i < response.length; i++) {
        //如果action是"抄送"并且当前登陆人等于抄送人，执行流程实例更新接口，将页面内的「是否查看」字段数据更改为"已阅读"
        if (
          response[i].action == "抄送" &&
          window.loginUser.userName == content[i].operatorName
        ) {
          const updateparams = {
            processInstanceId: this.state.urlParams.procInsId,
            updateFormDataJson: JSON.stringify({
              textField_kuqay7au: "已阅读",
            }),
          };
          this.dataSourceMap.updateInstance.load(updateparams).then((res) => {
            //当抄送人等于当前登陆人时弹出提示弹窗
            this.utils.toast({
              title: `${window.loginUser.userName}已阅读`,
              type: "success",
              size: "large",
            });
          });
        }
      }
    });
  } else if (url.indexOf("formInstId") != -1) {
    const params = {
      processInstanceId: this.state.urlParams.formInstId,
    };
    this.dataSourceMap.getOperationRecords.load(params).then((response) => {
      for (let i = 0; i < response.length; i++) {
        if (
          response[i].action == "抄送" &&
          window.loginUser.userName == response[i].operatorName
        ) {
          const updateparams = {
            processInstanceId: this.state.urlParams.formInstId,
            updateFormDataJson: JSON.stringify({
              textField_kuqay7au: "已阅读",
            }),
          };
          this.dataSourceMap.updateInstance.load(updateparams).then((res) => {
            this.utils.toast({
              title: `${window.loginUser.userName}已阅读`,
              type: "success",
              size: "large",
            });
          });
        }
      }
    });
  } else {
    console.log("提交页面");
  }
}
```

### 步骤二：创建自定义页面

自定义页面用于实现，将登录人未查看过的抄送我的数据条数和详情链接展示在页面内。

**（1）添加远程数据源**

创建两个远程数据源，分别为调用[抄送我的任务](https://www.yuque.com/yida/support/aql605#Z4aet)的接口和[根据搜索条件获取实例详情列表](https://www.yuque.com/yida/support/aql605#JkT8V)接口，根据配置截图自动加载状态（操作如下图所示）。

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01pt2OuI1LHzj5nAsI7_!!6000000001275-2-tps-1912-881.png)

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01eNxuK91QCZ6rkLMaB_!!6000000001940-2-tps-1910-877.png)

**（2）添加变量数据源**

**content 变量数据源**：用于存储「抄送我的任务」和「搜索流程实例详情」接口中符合条件的数据。
**condition 变量数据源**：用于控制链接块渲染。

> 变量数据源的绑定参考链接 👉 [链接块组件](https://www.aliwork.com/developer/link-block)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN011oTxDK23opD759NUl_!!6000000007303-2-tps-1914-888.png)

![image.png](https://img.alicdn.com/imgextra/i1/O1CN013thd4u1GL8MX5L2IF_!!6000000000605-2-tps-1911-891.png)

**（3）自定义页面组件设计**

本页面共添加了四个文本组件，一个链接块组件和一个布局容器组件（操作如下图所示）。
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01kV8qdJ24zeBPshrHj_!!6000000007462-2-tps-1912-891.png)

**第一个文本组件**：用于记录未查看抄送的数据条数（操作如下图所示）。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01SqU7Ay1cnSP0iRX7b_!!6000000003645-2-tps-1046-490.png)

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01qk1ZAY1INXfw9L2WI_!!6000000000881-2-tps-1907-885.png)

:::info
下述代码可直接复制在 JS 面板内
:::

```javascript
export function onClick2() {
  this.setState({
    condition: true,
  });
}
```

**链接块组件**：在自定义页面中拖动链接块，并将对应内容绑定数据源
**配置链接块以及文字格式**：content 中有多条数据，我们需要将数据一条一条拿出来展示到对应位置，在这里我们可以使用我们的一个迭代用法，那么我们就可以使用链接块进行循环，将链接块中的内容一个一个进行循环（操作如下图所示）。
后续要实现点击链接块跳转到对应的流程详情页面，所以在属性中配置外部链接`https://www.aliwork.com/应用的APPType/processDetail?formInstId=${item.processInstanceId}`（操作如下图所示）。
:::info
链接块组件绑定了循环数据，如果没有设置迭代名变量，默认为 item ，详情参考[循环渲染](https://www.yuque.com/yida/support/zzy41p)。
:::
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01NpUDT71vUeqKraunE_!!6000000006176-2-tps-1046-749.png)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01ug4YiL1sc2NHSvjX4_!!6000000005786-2-tps-1046-487.png)

**布局容器组件**：作用是调整容器内组件样式，保证页面美观，可以根据需求自行配置样式（操作如下图所示）。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01Km1saF1jJPjNoawPX_!!6000000004527-2-tps-1918-870.png)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN017J9Erf29q60Kt0Pf9_!!6000000008118-2-tps-1910-884.png)
:::danger
第二、第三和第四个文本组件需要在链接块当中获取迭代数据，所以用 `item.xxx` 获取迭代数据。
:::
**第二个文本组件**：用于展示未查看的流程实例标题。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01fKRKH01zGhEU6SX4W_!!6000000006687-2-tps-1046-486.png)

**第三、四个文本组件**：在页面展示提交`提交人：${item.originator.name.en_US}`和创建时间`创建时间：${this.utils.formatter('date', item.gmtCreate, 'YYYY-MM-DD HH:mm:ss')}`。

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01XX8hp61XU9d828Yde_!!6000000002926-2-tps-1046-486.png)

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01ehcOe91hs6V2K5LKE_!!6000000004332-2-tps-1046-485.png)

**（4）单流程初始化展示未读抄送信息**
首先，在自定义页面绑定初始化函数 didmount，绑定时将代码下述复制到 JS 面板中（操作如下图所示）。

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01uTa0UE1euu4QRJDzT_!!6000000003932-2-tps-1046-492.png)

:::danger
- 初始化时单流程展示抄送我的未读信息
- 单应用抄送我的未读信息参考（5）步骤
:::

:::info
- 下述代码可直接复制在 JS 面板内，注意：需要替换组件的唯一标识和 formUuid。
:::

```javascript
export function didMount() {
  //创建空数组，存储符合条件的数据。
  const contentArr = [];
  //调用「抄送我的任务」接口，将返回的data数据存储在 content 变量中。
  this.dataSourceMap.getNotifyMeTasksInApp.load().then((response) => {
    // console.log("getNotifyMeTasksInApp-response", response)
    const content = response.data;
    //循环判断，当返回的数据中，「是否查看」字段唯一标识的值为"否"时，传参调用「根据搜索条件获取实例详情列表」接口。
    for (let i = 0; i < content.length; i++) {
      if (content[i].dataMap.textField_kuqay7au == "否") {
        //传递流程页面的表单ID和「是否查看」字段的唯一标识。
        const params = {
          formUuid: "FORM-RH766AC1ZFFUR12D1E6H68DL2SGP2241YAQUK04",
          searchFieldJson: JSON.stringify({
            textField_kuqay7au: "否",
          }),
        };
        this.dataSourceMap.getInstances.load(params).then((res) => {
          const cont = res.data;
          for (var j = 0; j < cont.length; j++) {
            //当「根据搜索条件获取实例详情列表」接口返回的实例ID和「抄送我的任务」接口返回的实例ID和相同时，将数据存储。
            //并在循环结束后将全部符合条件的数据放入content变量数据源中。
            if (cont[j].processInstanceId == content[i].processInstanceId) {
              contentArr.push(cont[j]);
            }
            if (i == content.length - 1) {
              this.setState({
                content: contentArr,
              });
            }
          }
        });
      }
    }
  });
}
```

**（5）单应用展示未读抄送信息**
:::info
复制[流程页面 1](#wA0bA)中的「是否查看」组件，保证「是否查看」字段的唯一标识相同。
:::
**拖动一个下拉单选组件，配置单选的显示值和选项值为表单名称和表单 ID**（操作如下图所示）。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01n5S4ld1QlpbXHDZT2_!!6000000002017-2-tps-1046-586.png)

**下拉单选组件绑定 onchange 动作**

![image.png](https://img.alicdn.com/imgextra/i4/O1CN017DNK8i1GCQprINPHh_!!6000000000586-2-tps-1046-485.png)

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01alo9bZ1qIgPEDuNWa_!!6000000005473-2-tps-1914-881.png)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01CwOi891ybTaGCStpQ_!!6000000006597-2-tps-1911-879.png)

> 下述代码可直接复制在 JS 面板内，注意：需要替换组件的唯一标识。

```javascript
export function onChange({ value, actionType, item }) {
  this.setState({
    content: [],
    condition: false,
  });
  const contentArr = [];
  this.dataSourceMap.getNotifyMeTasksInApp.load().then((response) => {
    const content = response.data;
    for (let i = 0; i < content.length; i++) {
      //需要替换组件的唯一标识
      if (content[i].dataMap.textField_kuqay7au == "否") {
        const params = {
          //value为下拉单选的选项值，也就是对应的流程表单ID
          formUuid: value,
          searchFieldJson: JSON.stringify({
            textField_kuqay7au: "否",
          }),
        };
        this.dataSourceMap.getInstances.load(params).then((res) => {
          const cont = res.data;
          for (var j = 0; j < cont.length; j++) {
            if (cont[j].processInstanceId == content[i].processInstanceId) {
              contentArr.push(cont[j]);
            }
            if (i == content.length - 1) {
              this.setState({
                content: contentArr,
              });
            }
          }
        });
      }
    }
  });
}
```

<center><strong>--------------------获取宜搭最新信息，欢迎关注我们--------------------</strong></center>

![宜搭.jpg](https://img.alicdn.com/imgextra/i3/O1CN01lFR9Wb1cG1UPvV16o_!!6000000003572-0-tps-993-558.jpg)
