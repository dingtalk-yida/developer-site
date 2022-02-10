# 远程OpenAPI
宜搭提供远程API调用的能力可以通过HTTP请求异步接口（详细使用请参考[远程API文档](guide/concept/datasource.md)），于此同时宜搭平台还提供了一些内置的远程API用于进行宜搭数据的操作。

## API调用说明
### 请求路径
宜搭提供多种应用维度的接口，在应用内可以通过以下方式来调用远程API（支持跨应用调用），接口返回格式为：
```bash
# 通常宜搭域名为：https://www.aliwork.com
# 应用编码可以通过应用设置=》部署运维页面进行查看
# 接口路径参考下面的文档，不同API提供不同的接口路径
"${宜搭域名}/dingtalk/web/${应用编码}/${接口路径}"
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
 ### 更新表单中指定组件值
 * 接口： ```/v1/form/updateFormData.json```
 * 请求类型：```POST```
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formInstId |	要更新的表单数据ID |	是   |	FINST-NJYJZELVVYZRVGJHR7M6FJW3ESJN1P1TCNPCJ9	||
|updateFormDataJson |	要更新的表单组件值，必填 |	是 |	{"employeeField_jcpm5gy2": ["xxxxx","yyyyy"]}	|参考：附录1保存/更新 表单数、据格式说明。 参数有的组件更新，没有的组件保持不变。 明细的值只能统一更新，无法只更新子表单下某个组件的值
|useLatestVersion |	使用最新的表单版本进行更新 |	否 | y	| 参考：附录1保存/更新 表单数据格式说明【特别注意】 |
* 返回值示例：
```json
{
  "success":true
}
```
 ### 删除表单实例
 * 接口： ```/v1/form/deleteFormData.json```
 * 请求类型：```POST```
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formInstId |	要删除的表单数据ID |	是   |	FINST-NJYJZELVVYZRVGJHR7M6FJW3ESJN1P1TCNPCJ9	||
* 返回值示例：
```json
{
  "success":true
}
```
 ### 根据表单实例 ID 查询表单实例详情
 * 接口： ```/v1/form/getFormDataById.json```
 * 请求类型：```GET```
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formInstId |	要删除的表单数据ID |	是   |	FINST-NJYJZELVVYZRVGJHR7M6FJW3ESJN1P1TCNPCJ9	||
* 返回值示例：
```json
{
  "success":"请求是否成功",
  "errorMsg": "错误信息",
  "errorCode" : "错误码",
  "result":"表单实例详情。参见附录5. 表单实例详情对象格式说明"
}
```
### 根据条件搜索表单实例 ID 列表
 * 接口： ```/v1/form/searchFormDataIds.json```
 * 请求类型：```GET```
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formUuid |	表单ID |	是   |	FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3	||
|searchFieldJson |	根据表单内组件值查询 |	否   | | 格式见附录2：根据组件值进行条件搜索，组件值格式说明 |
|currentPage |	当前页 |	否   | 1 | 必须大于0默认1 |
|pageSize |	每页记录数 |	否   | 10 | 必须大于0默认10不能大于100 |
|originatorId |	根据数据提交人工号查询 |	否   | | |
|createFrom |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表 |	否   | 2018-01-01 | 字符串格式，且为yyyy-MM-DD格式 |
|createTo |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表 |	否   | 2018-01-01 | 字符串格式，且为yyyy-MM-DD格式。和createFrom一起，相当于查询在2018-01-01到2018-01-31之间(包含01和31号)创建的数据。|
|modifiedFrom |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表 |	否   | 2018-01-01 | 字符串格式，且为yyyy-MM-DD格式|
|modifiedTo |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表。 |	否   | 2018-02-01 | 字符串格式，且为yyyy-MM-DD格式。和modifiedFrom一起，相当于查询在 2018-01-01到2018-01-31之间(包含01和31号)被修改的数据。 |
|dynamicOrder |	排序 |	否   | column: '+' | column: '+' |

* 返回值示例：
```json
{
  "result":{
    "data":[
      "FINST-EF6Y93URN2F02S745LTMW2D2G4WVDS16O17ISCJ0"
    ],
	  "totalCount":1,
    "currentPage":1
  },
  "success":true
}
```

### 根据条件搜索表单实例详情列表
 * 接口： ```/v1/form/searchFormDatas.json ```
 * 请求类型：```GET```
 * 权限控制：该接口会受页面设置的权限控制（管理员除外）
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formUuid |	表单ID |	是   |	FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3	||
|searchFieldJson |	根据表单内组件值查询 |	否   | | 格式见附录2：根据组件值进行条件搜索，组件值格式说明 |
|currentPage |	当前页 |	否   | 1 | 必须大于0默认1 |
|pageSize |	每页记录数 |	否   | 10 | 必须大于0默认10不能大于100 |
|originatorId |	根据数据提交人工号查询 |	否   | | |
|createFrom |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表 |	否   | 2018-01-01 | 字符串格式，且为yyyy-MM-DD格式（或者精确到秒yyyy-MM-DD HH:mm:ss） |
|createTo |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表 |	否   | 2018-01-01 | 字符串格式，且为yyyy-MM-DD格式（或者精确到秒yyyy-MM-DD HH:mm:ss）和createFrom一起，相当于查询在2018-01-01到2018-01-31之间(包含01和31号)创建的据|
|modifiedFrom |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表 |	否   | 2018-01-01 | 字符串格式，且为yyyy-MM-DD格式（或者精确到秒yyyy-MM-DD HH:mm:ss）｜
|modifiedTo |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表。 |	否   | 2018-02-01 | 字符串格式，且为yyyy-MM-DD格式。 （或者精确到秒yyyy-MM-DD HH:mm:ss）和modifiedFrom一起，相当于查询在 2018-01-01到2018-01-31之间(包含01和31号)被修改的数据。 |
|dynamicOrder |	排序 |	否   |{"numberField_1ac":"+"} | 表示按照字段numberField_1ac升序排列 |

* 返回值示例：
```json
{
  "success":true,
  "errorCode":"",
  "errorMsg":"",
  "result":{
    "data":[
      
    ],
	  "totalCount":1,
    "currentPage":1
  },
}
```
### 获取表单定义
 * 接口： ```/v1/form/getFormComponentDefinationList.json```
 * 请求类型：```GET```
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|formUuid |	表单ID |	是   |	FORM-NJYJZELV8YZRDEI2N5IQ7L6VEDMR1VE9GMPCJB	||
|version |	表单版本 |	否   |	FINST-NJYJZELVVYZRVGJHR7M6FJW3ESJN1P1TCNPCJ9	| 可以传入formData中的version字段。
为空时返回最新的版本定义 |
 
* 返回值示例：
```json
{
    "success":true,
    "content":[
        {
            "label":"{"en_US":"CheckBox Field","zh_CN":"多选","type":"i18n"}",
            "key":"checkboxField_jiwvhkdi"
        },
        {
            "label":"{"en_US":"Textarea Field","zh_CN":"多行输入框","type":"i18n"}",
            "key":"textareaField_jiwvhkdh"
        },
        {
            "label":"{"en_US":"Select Field","zh_CN":"下拉单选","type":"i18n"}",
            "key":"selectField_jiwvhkdg"
        }
    ]
}
```

### 获取子表单数据
 * 接口： ```v1/form/listTableDataByFormInstIdAndTableId.json```
 * 请求类型：```GET```
 * 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| formUuid |	表单ID |	是   |	FORM-NJYJZELV8YZRDEI2N5IQ7L6VEDMR1VE9GMPCJB	||
| formInstanceId |	要查询的实例的实例ID |	是   |	FINST-NJYJZELVVYZRVGJHR7M6FJW3ESJN1P1TCNPCJ9	| |
| tableFieldId |	需要查找的子表单组件的唯一标识 |	是   |	tableField_ksyaujq1	| |
| currentPage |	当前页 |	否   |	10	| 必须大于0，默认1 |
| pageSize |	每页记录数 |	否   |	50	| 大于0并且小于50，默认10 |
 
* 返回值示例：
```json
{
  "result": {
    "data": [
      {
        "textField_kstqokaa": ""
      },
      {
        "textField_kstqokaa": "1"
      },
      {
        "textField_kstqokaa": "2"
      }
    ],
    "totalCount": 120,
    "currentPage": 1,
  },
  "success": true,
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
|processCode |	流程code |	是 | TPROC--EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ4 ｜	单独发起页链接上可查|
|formUuid |	表单ID |	是 |	FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3	｜ 单独发起页链接上可查|
|formDataJson |	表单数据 |	是 ||参考：附录1保存/更新 表单数据格式说明|
|deptId |	发起人所在部门号 |	否 | 18295 | 不填，默认发起人主职部门|


* 返回值示例：
```json
{
  "result": "f30233fb-72e1-4af4-8cb8-c7e0ea9ee530",
  "success": true
}
```

### 根据条件搜索流程实例 ID
* 接口路径：```/v1/process/getInstanceIds.json```
* 请求类型： ```GET``` 
* 权限说明：流程需要配置实例可查看权限（管理员除外）
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| formUuid |	表单ID |	是 | FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3 ||
| searchFieldJson |	根据表单内组件值查询 |	否 || 格式见附录2：根据组件值进行条件搜索，组件值格式说明 |
| taskId |	任务ID |	否 | 2199132092 | 一般用不到 |
| instanceStatus |	实例状态 |	否 | RUNNING | 可选值为：RUNNING,TERMINATED,COMPLETED,ERROR。分别代表：运行中，已终止，已完成，异常。|
| approvedResult |	流程审批结果 |	否 | agree | 可选值为：agree, disagree。分别表示：同意， 拒绝。 |
| currentPage |	当前页 |	否   |	1	| 必须大于0，默认1 |
| pageSize |	每页记录数 |	否   |	10	| 必须大于0默认10不能大于100 |
| originatorId |	根据流程发起人工号查询 |	否   | | |
| createFrom |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式 yyyy-MM-DD |
| createTo |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表。 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式。和createFrom一起，相当于查询在2018-01-01到2018-01-31之间(包含01和31号)创建的数据。 |
| modifiedFrom |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式 |
| modifiedTo |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表。 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式。 和modifiedFrom一起，相当于查询在 2018-01-01到2018-01-31之间(包含01和31号)被修改的数据。 |

* 返回值示例：
```json
{
  "result": {
    "data": [
      "f30233fb-72e1-4af4-8cb8-c7e0ea9ee530",
      "bc0950a3-fe1b-459c-b6ba-282be38523ab",
      "f540cbd7-43eb-40de-b915-6716578a2802"
    ],
    "totalCount": 3,
    "currentPage": 1
  },
  "success": true
}
```

### 根据搜索条件获取实例详情列表
* 接口路径：```/v1/process/getInstances.json```
* 请求类型： ```GET``` 
* 权限说明：流程需要配置实例可查看权限（管理员除外）
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| formUuid |	表单ID |	是 | FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3 ||
| searchFieldJson |	根据表单内组件值查询 |	否 || 格式见附录2：根据组件值进行条件搜索，组件值格式说明 |
| taskId |	任务ID |	否 | 2199132092 | 一般用不到 |
| instanceStatus |	实例状态 |	否 | RUNNING | 可选值为：RUNNING,TERMINATED,COMPLETED,ERROR。
分别代表：运行中，已终止，已完成，异常。|
| approvedResult |	流程审批结果 |	否 | agree | 可选值为：agree, disagree。分别表示：同意， 拒绝。 |
| currentPage |	当前页 |	否   |	1	| 必须大于0，默认1 |
| pageSize |	每页记录数 |	否   |	10	| 必须大于0默认10不能大于100 |
| originatorId |	根据流程发起人工号查询 |	否   | | |
| createFrom |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式 yyyy-MM-DD |
| createTo |	createFrom和createTo两个时间构造一个时间段。查询在该时间段创建的数据列表。 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式。和createFrom一起，相当于查询在2018-01-01到2018-01-31之间(包含01和31号)创建的数据。 |
| modifiedFrom |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式 |
| modifiedTo |	modifiedFrom和modifiedTo构成一个时间段，查询在该时间段有修改的数据列表。 |	否   | 2018-01-01 |  字符串格式，且为yyyy-MM-DD格式。 和modifiedFrom一起，相当于查询在 2018-01-01到2018-01-31之间(包含01和31号)被修改的数据。 |

* 返回值示例：
```json
{
  "success":true,
  "errorCode":"",
  "errorMsg":"",
  "result":{
    "data":[
      
    ],
	  "totalCount":1,
    "currentPage":1
  },
}
```

### 根据实例 ID 获取流程实例详情
* 接口路径：```/v1/process/getInstanceById.json```
* 请求类型： ```GET``` 
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| processInstanceId |	流程实例ID |	是 | f30233fb-72e1-4af4-8cb8-c7e0ea9ee530 ||

* 返回值示例：
```json
{
  "success":true,
  "errorCode":"",
  "errorMsg":"",
  "result":"实例详情，参见 附录 3- 流程实例详情对象格式说明"
}
```

### 删除流程实例
* 接口路径：```/v1/process/deleteInstance.json```
* 请求类型： ```POST``` 
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| processInstanceId |	流程实例ID |	是 | f30233fb-72e1-4af4-8cb8-c7e0ea9ee530 ||

* 返回值示例：
```json
{
  "success":true,
  "errorCode":"",
  "errorMsg":"",
}
```

### 终止流程实例
* 接口路径：```/v1/process/terminateInstance.json```
* 请求类型： ```POST``` 
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| processInstanceId |	流程实例ID |	是 | f30233fb-72e1-4af4-8cb8-c7e0ea9ee530 ||

* 返回值示例：
```json
{
  "success":true,
  "errorCode":"",
  "errorMsg":"",
}
```

### 执行单个任务接口
* 接口路径：```/v1/task/executeTask.json```
* 请求类型： ```POST``` 
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| taskId |	任务ID |	是 | 12002575	 ||
| procInstId |	实例ID |	是 | f30233fb-72e1-4af4-8cb8-c7e0ea9ee530	 ||
| outResult |	审批结果 |	是 | AGREE | AGREE(同意)、DISAGREE(不同意) |
| remark |	审批意见 |	是 | 确认同意 ||
| formDataJson |	审批意见 |	否 | 确认同意 | 参考：附录1保存/更新 表单数据格式说明。
参数有的组件更新，没有的组件保持不变。明细的值只能统一更新，无法只更新子表单下某个组件的值 |
| noExecuteExpressions |	是否不执行校验&关联操作 |	否 | y | 本任务节点有绑定校验规则或者关联操作时，
y -> 不执行校验规则&关联操作 n -> 执行校验规则&关联操作不传默认为n，即会执行校验规则&关联操作 |


* 返回值示例：
```json
{
  "success":"请求是否成功",
  "errorCode":"错误信息",
  "errorMsg":"错误码",
}
```

### 获取审批记录
* 接口路径：```/v1/process/getOperationRecords.json```
* 请求类型： ```GET``` 
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
| processInstanceId |	流程实例ID |	是 | f30233fb-72e1-4af4-8cb8-c7e0ea9ee530	 ||

* 返回值示例：
```json
{
  "success": true,
  "content": [
    {
      "operateTime": "2018-06-22 14:35:40",
      "remark": "",
      "taskHoldTime": 0,
      "type": "HISTORY",
      "operatorName": "宜小搭",
      "operator": "yida",
      "activityId": "sid-restartevent",
      "action": "提交申请",
      "actionExt": "submit",
      "id": 2846866118,
      "operatorPhotoUrl": "/photo/yida.128x128.jpg",
      "processInstanceId": "8c124808-82e7-473b-9a7a-43c29b310837",
      "showName": "提交申请",
      "operateType": "NEW_PROCESS",
      "domains": [],
      "operatorStatus": "A",
      "operatorAgentIds": [],
      "size": 1,
      "operatorDisplayName": "宜小搭",
      "taskId": "null"
    },
    {
      "taskHoldTime": 531398377,
      "type": "TODO",
      "operatorName": "宜小搭",
      "operator": "yida",
      "activityId": "sidJIOB2P2J1JW3RPMDOS28",
      "taskType": "COMMON_ALL_AT_ONCE",
      "actionExt": "doing",
      "operatorPhotoUrl": "/photo/yida.128x128.jpg",
      "processInstanceId": "8c124808-82e7-473b-9a7a-43c29b310837",
      "showName": "执行人",
      "activeTime": "2018-06-22 14:35:41",
      "domains": [],
      "operatorStatus": "A",
      "operatorAgentIds": [],
      "size": 1,
      "operatorDisplayName": "宜小搭",
      "taskId": "2846866145"
    }
  ]
}
```

### 流程实例更新
* 接口路径：```/v1/process/getOperationRecords.json```
* 请求类型： ```GET``` 
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|processInstanceId| 实例ID |	是 | | |
|updateFormDataJson |	更新的表单数据 |	是 ||参考：附录1保存/更新 表单数据格式说明 |

* 返回值示例：
```json
{
   "success":true
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
|pageSize |	每页记录数 |	是 |	10	| 必须大于0 默认10 最大值：100|
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

### 待办任务
* 接口路径：```/v1/task/getTodoTasksInApp.json```
* 请求类型： ```GET```
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|pageSize |	每页记录数 |	是 |	10	| 必须大于0 默认10 最大值：100|
|currentPage |	当前页 |	是 |	1	|必须大于0 默认1 |
|keyword |	关键词 |	否 | | |

* 返回值示例：
  * 成功
```json
{
  "result": {
    "data": [
      {
        "processInstanceId": "XXXXXX",
        "originatorName": "XXX",
        "title": "XXX发起的流程",
        "originatorPhoto": "http://static.dingtalk.com/media/lADPdfafafsAXXXXXX.jpg",
        "titleEn": "XXX发起的流程",
        "createTime": "2018-04-13 13:35:58",
        "appType": "APP_R8MdfadfXXXXXX",
        "originatorNameEn": "XXXXXX",
        "originatorId": "XXXXXX",
        "taskId": "XXXXXX",
        "status": "NEW"
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

### 已完成任务
* 接口路径：```/v1/task/getDoneTasksInApp.json```
* 请求类型： ```GET```
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|pageSize |	每页记录数 |	是 |	10	| 必须大于0 默认10 最大值：100|
|currentPage |	当前页 |	是 |	1	|必须大于0 默认1 |
|keyword |	关键词 |	否 | | |

* 返回值示例：
  * 成功
```json
{
  "result": {
    "data": [
      {
        "processInstanceId": "abc434rfds23XXXXXX",
        "finishTime": "2018-03-28 17:46:14",
        "originatorName": "",
        "title": "XXX发起的流程页面",
        "originatorPhoto": "//img.alicdn.com/tfs/TB1msdfsXXXXXX.jpg",
        "titleEn": "XXX发起的流程页面",
        "createTime": "2018-03-28 17:45:43",
        "appType": "XXXXXX",
        "originatorNameEn": "XXXXXX",
        "originatorId": "XXXXXX",
        "taskId": "XXXXXX",
        "status": "COMPLETED"
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

### 抄送我的任务（应用纬度）
* 接口路径：```/v1/task/getNotifyMeTasksInApp.json```
* 请求类型： ```GET```
* 参数：

| 参数名 | 描述 |	是否必填 |	示例 | 备注 |
|:--- |:--- |:--- |:--- |:--- |
|pageSize |	每页记录数 |	是 |	10	| 必须大于0 默认10 最大值：100|
|currentPage |	当前页 |	是 |	1	|必须大于0 默认1 |
|keyword |	关键词 |	否 | | |
|processCodes |	processCodes |	否 | ["xx","xxx"] | |
|instanceStatus |	实例状态 |	否 | | 枚举值 |

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

### 保存/更新 表单数据格式说明
* 表单中每个组件都有唯一 ID (在页面设计器组件右侧的高级面板可以查看唯一标识)，每个组件中填写的数据都有自己的固定格式。目前支持的表单组件有：单行，多行，数字，单选，下拉单选，多选，下拉多选，日期，日期区间，人员搜索框，地区选择，部门选择，级联选择，子表单组件。
* 保存/更新 表单数据时，用 Map<String, Object> 的 JsonString 格式来作为参数传递表单中的数据。key 为组件ID，Object 为组件的值。每个组件的值格式如下：

| 组件类型 | 数据格式 |	数据格式 |	备注 |
|:--- |:--- |:--- |:--- |
|单行输入框 |	字符串 |	"danhang" |	| 
|多行输入框 |	字符串 |	"duohang" |	| 
|数字输入框 |	数字 | 1 |	| 
|单选|	字符串 | "选项一" |	| 
|下拉单选 |	字符串 | "选项一" |	| 
|多选|	字符串数组 | ["选项一","选项二"] | |
|下拉多选|	字符串数组 | ["选项一","选项二"] | | 
|日期组件 |	时间戳 | 日期组件 |	| 
|级联日期 |	字符串数组 | ["1514736000000","1517328000000"]。 假如只有结束时间，["","1517328000000"] | 第一个为开始时间的时间戳字符串，第二给结束时间的时间戳字符串	| 
|人员搜索框|	字符串数组 | ["xxxxx","yyyyy"] | | 
|城市选择|	字符串数组 | ["110000","110100","110101"] | 第一个必须为省份ID，第二个为城市ID，第三个为区ID。| 
|部门选择|	字符串数组 | ["1123456"] | ["xxx"]里面是部门id | 
|级联选择|	字符串数组 | ["part","part_b"] | 必须按照级联顺序，依次放到数组中 | 
|附件组件|	字符串数组 | [{"downloadUrl":"文件下载地址", "name": "文件名"}]| | 
|超链接组件|	字符串数组 | [{"link":"http://www.aliwork.com","text":"宜搭"}]| | 
|子表单|	JSONARRAY | [{"textField_jcr0069m": "danhang1"},{"textField_jcr0069m": "danhang2"}] (textField_jcr0069m为子表单下单行的组件ID) | 由于子表单下有多条记录，所以用JSONARRAY。由于每条记录都是很多组件的值，因此用JSONObject来存每个组件对应的值 | 
|手写签名 |	字符串 |	"图片地址" |	| 

  * 完整的表单数据格式如下：
```json
{
  "textField_jcr0069m": "danhang",
  "textareaField_jcr0069n": "duohang",
  "numberField_jcr0069o": 1,
  "radioField_jcr0069p": "选项一",
  "selectField_jcr0069q": "选项一",
  "checkboxField_jcr0069r": [
    "选项二",
    "选项三"
  ],
  "multiSelectField_jcr0069s": [
    "选项二",
    "选项三"
  ],
  "dateField_jcr0069t": 1516636800000,
  "cascadeDate_jcr0069u": [
    "1514736000000",
    "1517328000000"
  ],
  "employeeField_jcr0069x": [
    "xxxxx"
  ],
  "citySelectField_jcr0069y": [
    "110000",
    "110100",
    "110101"
  ],
  "departmentField_jcr0069z": 1123456,
  "cascadeSelectField_jcr006a0": [
    "part",
    "part_b"
  ],
  "attachmentField_jna1lvyb": [
    {
      "downloadUrl": "https://www.aliwork.com/fileHandle?appType=default_tianshu_app&fileName=edd07ca9-1d2e-44b5-98fe-c1e16202f90d.txt&instId=&type=download",
      "name": "test.txt",
      "previewUrl": "https://www.aliwork.com/inst/preview?appType=default_tianshu_app&fileName=test.txt&fileSize=4&downloadUrl=edd07ca9-1d2e-44b5-98fe-c1e16202f90d.txt",
      "url": "https://www.aliwork.com/fileHandle?appType=default_tianshu_app&fileName=edd07ca9-1d2e-44b5-98fe-c1e16202f90d.txt&instId=&type=download",
      "ext": "txt"
    }
  ]
},  
  "tableField_jcr006a1": [
    {
      "cascadeDate_jcr006aa": [
        "1514736000000",
        "1517328000000"
      ],
      "cascadeSelectField_jcr006ae": [
        "product",
        "product_a"
      ],
      "checkboxField_jcr006a7": [
        "选项一",
        "选项二",
        "选项三"
      ],
      "citySelectField_jcr006ac": [
        "120000",
        "120100",
        "120102"
      ],
      "dateField_jcr006a9": 1517328000000,
      "departmentField_jcr006ad": ["1123456"],
      "employeeField_jcr006ab": [
        "yyyyy",
        "xxxxx"
      ],
      "multiSelectField_jcr006a8": [
        "选项一",
        "选项二",
        "选项三"
      ],
      "numberField_jcr006a4": 2,
      "radioField_jcr006a5": "选项二",
      "selectField_jcr006a6": "选项三",
      "textField_jcr006a2": "子表单下单行",
      "textareaField_jcr006a3": "子表单下多行"
    }
  ],
	"digitalSignatureField_kt3nh972": "https://tianshu-vpc.oss-cn-shanghai.aliyuncs.com/5e03f863-dd39-4f62-ba9b-497af2c9ad9f.png"
}
```

### 根据组件值进行条件搜索，组件值格式说明
* 表单中每个组件都有唯一 ID (在页面设计器组件右侧的高级面板可以查看唯一标识)，每个组件的搜索格式不一样。目前支持搜索的表单组件有：单行，多行，数字，单选，下拉单选，多选，下拉多选，日期，日期区间，人员搜索框，地区选择，部门选择，级联选择，子表单组件。
* 搜索时，用 Map<String, Object>  格式来表示每个组件的搜索条件。key 为组件 ID，Object 为组件的搜索值。各个组件的搜索类型和值格式如下

| 组件类型 | 数据格式 |	数据格式 |	备注 |
|:--- |:--- |:--- |:--- |
|单行输入框 |	字符串 |	"danhang" | 模糊搜索 | 
|多行输入框 |	字符串 |	"duohang" | 模糊搜索| 
|数字输入框 |	字符串数组 | ["1","10"] | 范围搜索。第一个为最小值，第二个为最大值 | 
|单选|	字符串 | "选项一" | 精确搜索| 
|下拉单选 |	字符串 | "选项一" |	| 
|多选|	字符串数组 | ["选项二"] | 数组搜索。搜索值必须是多选值的子集 |
|下拉多选|	字符串数组 | ["选项二"] | 数组搜索。 搜索值必须是多选值的子集 | 
|日期组件 |	字符串数组 | ["1514736000000","1517414399000"] |	范围搜索。第一个为日期开始的时间戳，第二个为日期结束的时间戳。 | 
|日期区间 |	数组 | [["1514736000000","1517414399000"],["1514736000000","1517414399000"]] |	范围搜索。第一个数组是日期区间开始的搜索范围。第二个数组是日期区间结束的搜索范围。|
|人员搜索框|	字符串数组 | ["xxxxx","yyyyy"] | ["xxxxx","yyyyyy"]	精确匹配。值必须完全匹配，工号顺序也需要一致。 | 
|城市选择|	字符串数组 | ["110000","110100","110101"] | ["110000","110100","110101"]	数组搜索。搜索值必须是城市值的子集。另外，有市ID，就必须有省ID。有区ID，就必须有省ID和市ID。| 
|部门选择|	数字 | 1123456 | 精确匹配 | 
|级联选择|	字符串数组 | ["part","part_b"] | 数组搜索。和城市选择限制条件一致。 | 
|子表单组件 |	字符串 |	"danhang" | 模糊搜索。子表单下的值为一个大text，搜索用模糊搜索	| 

  * 完整例子
```json
{
  "textField_jcr0069m": "danhang",
  "textareaField_jcr0069n": "duohang",
  "numberField_jcr0069o": [
    "1",
    "10"
  ],
  "radioField_jcr0069p": "选项一",
  "selectField_jcr0069q": "选项一",
  "checkboxField_jcr0069r": [
    "选项二"
  ],
  "multiSelectField_jcr0069s": [
    "选项二",
    "选项三"
  ],
  "dateField_jcr0069t": [
    1514736000000,
    1517414399000
  ],
  "cascadeDate_jcr0069u": [
    [
      1514736000000,
      1517414399000
    ],
    [
      1514736000000,
      1517414399000
    ]
  ],
  "employeeField_jcr0069x": [
    "xxxxx"
  ],
  "citySelectField_jcr0069y": [
    "110000",
    "110100",
    "110101"
  ],
  "departmentField_jcr0069z": ["1123456"],
  "cascadeSelectField_jcr006a0": [
    "part",
    "part_b"
  ],
  "tableField_jcr006a1": "子表单数据"
}
```

### 流程实例详情对象格式说明
* 表单中每个组件都有唯一 ID (在页面设计器组件右侧的高级面板可以查看唯一标识)，每个组件的搜索格式不一样。目前支持搜索的表单组件有：单行，多行，数字，单选，下拉单选，多选，下拉多选，日期，日期区间，人员搜索框，地区选择，部门选择，级联选择，子表单组件。
* 搜索时，用 Map<String, Object>  格式来表示每个组件的搜索条件。key 为组件 ID，Object 为组件的搜索值。各个组件的搜索类型和值格式如下

| 字段 | 描述 |	示例 |	备注 |
|:--- |:--- |:--- |:--- |
| actioners |	流程实例当前任务执行人 |[{"userId": "workno","name":{"zh_CN": "user_zh_name","type": "i18n"}}]| 如果流程已完成，没有执行人时，该字段为空 | 
|processInstanceId |	实例ID |	"f30233fb-72e1-4af4-8cb8-c7e0ea9ee530" | 唯一| 
|formUuid |	流程表单ID | FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3 |  | 
|processCode|	流程Code | TPROC--EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ4 | | 
|title |	实例标题 | xxxx 发起的流程 | 根据你的语言环境，返回对应的标题	| 
|instanceStatus|	实例状态 | RUNNING | |
|approvedResult|	流程结束时的审批结论 | agree | agree -> 通过 disagree -> 拒绝 | 
|originator |	字符串数组 | [{"name":{"zh_CN": "user_zh_name","type": "i18n"}, "userId": "workno"}] |	| 
|data |	表单数据 | | 参考附录4- 作为返回值的表单数据的格式说明	|

  * 完整的数据格式 demo
```json
{
  "result": {
    "data": {
      "actioners": [
        {
          "name": {
            "pureEn_US": "xxx",
            "en_US": "xxx",
            "zh_CN": "xxx",
            "type": "i18n"
          },
          "userId": "xxx"
        }
      ],
      "processInstanceId": "f30233fb-72e1-4af4-8cb8-c7e0ea9ee530",
      "formUuid": "FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3",
      "data": {
        "numberField_jcr0069o": 1,
        "multiSelectField_jcr0069s": [
          "选项三",
          "选项二"
        ],
        "textareaField_jcr0069n": "duohang",
        "employeeField_jcr0069x": [
          "xxxx"
        ],
        "departmentField_jcr0069z": "信息xxx平台",
        "cascadeDate_jcr0069u": [
          "1514736000000",
          "1517328000000"
        ],
        "cascadeSelectField_jcr006a0": [
          "part",
          "part_b"
        ],
        "tableField_jcr006a1": [
          {
            "departmentField_jcr006ad": "信息xxx",
            "cascadeDate_jcr006aa": [
              "1514736000000",
              "1517328000000"
            ],
            "selectField_jcr006a6": "选项三",
            "citySelectField_jcr006ac": [
              "天津",
              "天津市",
              "河东区"
            ],
            "radioField_jcr006a5": "选项二",
            "employeeField_jcr006ab": [
              "yyyyy",
              "xxxxxx"
            ],
            "dateField_jcr006a9": 1517328000000,
            "textField_jcr006a2": "子表单下单行",
            "textareaField_jcr006a3": "子表单下多行",
            "cascadeSelectField_jcr006ae": [
              "product",
              "product_a"
            ],
            "numberField_jcr006a4": 2,
            "checkboxField_jcr006a7": [
              "选项一",
              "选项三",
              "选项二"
            ],
            "multiSelectField_jcr006a8": [
              "选项一",
              "选项三",
              "选项二"
            ]
          }
        ],
        "selectField_jcr0069q": "选项一",
        "citySelectField_jcr0069y": [
          "北京",
          "北京市",
          "东城区"
        ],
        "checkboxField_jcr0069r": [
          "选项三",
          "选项二"
        ],
        "textField_jcr0069m": "danhang",
        "radioField_jcr0069p": "选项一",
        "dateField_jcr0069t": 1516636800000
      },
      "processCode": "TPROC--EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ4",
      "originator": {
        "name": {
          "pureEn_US": "xxx",
          "en_US": "xxxx",
          "zh_CN": "xxx",
          "type": "i18n"
        },
        "userId": "xxxx"
      },
      "title": "xxx发起的流程",
      "instanceStatus": "RUNNING"
    },
    "totalCount": 1,
    "currentPage": 1
  },
  "success": true
}
```
### 作为返回值的表单数据的格式说明
作为返回值的表单数据格式和 “附录 1- 保存/更新 表单数据格式说明”基本一致。区别在于：
* 录入时，地区组件值为["省份 ID ", "市 ID ", "区 ID "]。作为返回值时，是["省名称","城市名称","地区名称"]。
* 单选，下拉单选，多选，下拉多选是有国际化的。返回值时，会根据传的 language 参数，返回对应的数据值。

### 表单实例详情对象格式说明

| 字段 | 描述 |	示例 |	备注 |
|:--- |:--- |:--- |:--- |
| gmtModified |	最后修改时间 | 2018-01-24 11:22:01 | | 
| formUuid |	表单ID | FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1 | | 
| originator |	发起人详情 | [{"name":{"zh_CN": "user_zh_name","type": "i18n"}, "userId": "workno"}] |  | 
| formData|	表单数据详情 | TPROC--EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ4 | 参考附录4- 作为返回值的表单数据的格式说明 | 

 * 完整的数据格式 demo
```json
{
  "result": {
    "gmtModified": "2018-01-24 11:22:01",
    "formUuid": "FORM-EF6Y93URN24F1SCX15VA2P918LPEIJ2H3UFORCJ1",
    "formInstId": "FINST-EF6Y93URN2F02S745LTMW2D2G4WVDS16O17ISCJ0",
    "formData": {
      "numberField_jcr0069o": 1,
      "multiSelectField_jcr0069s": [
        "选项三",
        "选项二"
      ],
      "textareaField_jcr0069n": "duohang",
      "employeeField_jcr0069x": [
        "xxxx"
      ],
      "departmentField_jcr0069z": "xxxx",
      "cascadeDate_jcr0069u": [
        "1514736000000",
        "1517328000000"
      ],
      "cascadeSelectField_jcr006a0": [
        "part",
        "part_b"
      ],
      "tableField_jcr006a1": [
        {
          "departmentField_jcr006ad": "xxxx",
          "cascadeDate_jcr006aa": [
            "1514736000000",
            "1517328000000"
          ],
          "selectField_jcr006a6": "选项三",
          "citySelectField_jcr006ac": [
            "天津",
            "天津市",
            "河东区"
          ],
          "radioField_jcr006a5": "选项二",
          "employeeField_jcr006ab": [
            "xxxxxx",
            "yyyyyy"
          ],
          "dateField_jcr006a9": 1517328000000,
          "textField_jcr006a2": "子表单下单行",
          "textareaField_jcr006a3": "子表单下多行",
          "cascadeSelectField_jcr006ae": [
            "product",
            "product_a"
          ],
          "numberField_jcr006a4": 2,
          "checkboxField_jcr006a7": [
            "选项一",
            "选项三",
            "选项二"
          ],
          "multiSelectField_jcr006a8": [
            "选项一",
            "选项三",
            "选项二"
          ]
        }
      ],
      "selectField_jcr0069q": "选项一",
      "citySelectField_jcr0069y": [
        "北京",
        "北京市",
        "东城区"
      ],
      "checkboxField_jcr0069r": [
        "选项三",
        "选项二"
      ],
      "textField_jcr0069m": "danhang",
      "radioField_jcr0069p": "选项一",
      "dateField_jcr0069t": 1516636800000
    },
    "originator": {
      "name": {
        "pureEn_US": "userEnglishName",
        "en_US": "userEnglishName",
        "zh_CN": "userName",
        "type": "i18n"
      },
      "userId": "xxxx"
    }
  },
  "success": true
}
```