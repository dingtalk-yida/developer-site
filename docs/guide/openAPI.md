# 远程OpenAPI
宜搭提供远程API调用的能力可以通过HTTP请求异步接口（详细使用请参考[远程API文档](guide/concept/datasource.md)），于此同时宜搭平台还提供了一些内置的远程API用于进行宜搭数据的操作。

## API调用说明
### 请求路径
宜搭提供多种应用维度的接口，在应用内可以通过以下方式来调用远程API（支持跨应用调用），接口返回格式为：
```bash
# 通常宜搭域名为：https://www.aliwork.com
# 应用编码可以通过应用设置=》部署运维页面进行查看
# 接口路径参考下面的文档，不同API提供不同的接口路径
${宜搭域名}/dingtalk/web/${应用编码}/${接口路径}
```

:::tip
在自定义页面的数据源配置面板使用宜搭的远程OpenAPI可以直接使用相对路径，如下所示：
```bash
/dingtalk/web/APP_X1X2X3X4/v1/form/searchFormDatas.json
```
![](https://img.alicdn.com/imgextra/i2/O1CN01UOw5fH2AKK8cTHZDY_!!6000000008184-2-tps-3582-1230.png_.webp)
:::

### 接口返回结构
宜搭平台提供的远程API的返回结构如下所示：
```typescript
interface IResponse{
  success: boolean;  // 请求是否成功
  result?: object | array | string; // 请求成功的返回内容
  errorMsg?: string; // 错误信息
  errorCode?: string; // 错误码
  errorLevel?: number; // 错误级别
}

```

## 表单相关API
宜搭平台提供表单类型的页面来进行表单数据收集，表单相关API则用来对表单数据进行相应的增删改查操作，下面提到的表单实例其实就是值表单数据集中的一条数据。

### 新建表单实例
* 接口路径：```/v1/form/saveFormData.json```
* 请求类型：```POST```
* 参数：(formDataJson需要通过JSON.stringify()函数来把对象进行序列化)

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formUuid |	表单ID |	是 |	FORM-NJYJZELV8YZRDEI2N5IQ7L6VEDMR1VE9GMPCJB	||
|appType |	应用ID |	是 |	APP_DR4OK27ZKL5N22B907E8	||
|formDataJson |	表单数据 |	是 | 	{"textField_jcpm6agt": "单行","employeeField_jcos0sar": ["workno"]}	| 参考：附录1保存/更新 表单数据格式说明 |
* 返回值示例：
```json
{
  "result":"FINST-EF6Y93URN2UZ1SBPLIP9NAV6HR2GEO1Z4ZCHSCJ0",
  "success":true
}
```


## 流程相关API
流程表单也是宜搭平台提供的基础能力之一，流程相关API用于对流程进行相关操作。

### 流程发起
* 接口路径：```/v1/process/startInstance.json```
* 请求类型： ```POST```
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|processCode |	流程code |	是 | TPROC--EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ4	单独发起页链接上可查|
|formUuid |	表单ID |	是 |	FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3	单独发起页链接上可查|
|formDataJson |	表单数据 |	是 | 参考：附录1保存/更新 表单数据格式说明|
|deptId |	发起人所在部门号 |	否 | 18295	不填，默认发起人主职部门|

* 返回值示例：
```json
{
  "result": "f30233fb-72e1-4af4-8cb8-c7e0ea9ee530",
  "success": true
}
```

## 任务中心相关API
宜搭平台提供有一个任务中心用来查看当前组织下所有应用的任务列表及其状态，任务中心相关API则是用来对任务中心中的任务列表进行查询操作。

### 已提交任务
* 接口路径：```/v1/process/getMySubmitInApp.json```
* 请求类型： ```GET```
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|pageSize	每页记录数 |	是 |	10	| 必须大于0 默认10 最大值：100|
|currentPage |	当前页 |	是 |	1	|必须大于0 默认1 |
|keyword |	关键词 |	否 | | |

* 返回值示例：
  * 成功
```json
{
  "result": {
    "data": [
      {
        "modifiedTime": "2018-04-12 19:44:14",
        "formInstanceId": "FINST-AJ1L4CJVXL0UIAIPR06ZA52U9HKUXXXXXX",
        "title": "单据",
        "instValue": [
          {
            "componentId": "node_jfwgghbo",
            "componentName": "TextField",
            "fieldId": "textField_jfwggg8e",
            "label": "姓名",
            "validation": [],
            "fieldData": {
              "complexType": "custom",
              "dataType": "CHANGED",
              "pass": true,
              "value": "jack"
            },
            "errorMsg": null,
            "hasError": false
          }
        ],
        "processId": 0,
        "appType": "APP_R8MYLKYXXXXXX",
        "dataMap": {
          "textField_jfXXXXXX": "XXXXXX"
        },
        "originatorId": "XXXXXX",
        "formUuid": "FORM-0G7KPV3WZL0U3AHTOA9BFVXXXXXX",
        "dataType": "finst",
        "originatorAvatar": "http://static.dingtalk.com/media/lADPBbCc1R7VwSHNXXXXXX.jpg",
        "version": 0,
        "createTime": "2018-04-12 19:44:14"
      }
    ],
    "totalCount": 1,
    "currentPage": 1
  },
  "success": true
}
```
  * 失败
```json
{
  "errorCode": "TIANSHU_000006",
  "success": false,
  "errorMsg": "没有权限"
}
```

## 附录
