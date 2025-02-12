---
title: 服务端开放API
order: 5
---

宜搭平台除了提供用于在 Client 端调用的开放 API，还提供了支持通过服务端进行调用的开放 API，具体详见[钉钉开放平台文档](https://open.dingtalk.com/document/orgapp-server/yida-overview)。

## 使用指南

使用宜搭平台服务端开放 API 的步骤如下所示：

![](https://img.alicdn.com/imgextra/i2/O1CN01aOd1Kv1wwssFl6tB9_!!6000000006373-2-tps-1070-124.png_.webp)

:::tip
钉钉开放平台提供多种应用类型，不同应用类型使用服务端开放API的方式有所不同，具体请查看[钉钉应用类型介绍文档](https://open.dingtalk.com/document/orgapp/untitled-document-1689231271995)。
:::

### 步骤 1：创建钉钉应用

- 创建企业内部应用，详情请参考[企业内部应用开发流程介绍](https://open.dingtalk.com/document/orgapp/overview-of-development-process)。
- 创建第三方企业应用，详情请参考[第三方企业应用说明](https://open.dingtalk.com/document/isvapp/isv-cooperation-guide#)。

### 步骤 2：添加接口调用权限

应用创建后默认只开放登录和消息通知接口的调用权限，您需要根据开发需要，添加对应的接口使用权限。

- 企业内部应用，详情请参考[添加接口调用权限](https://developers.dingtalk.com/document/app/add-api-permission?#topic-1913954)。
- 第三方企业应用，详情请参考[添加接口调用权限](https://open.dingtalk.com/document/isvapp-server/add-interface-call-permissions?#topic-2149187)。

### 步骤 3：获取应用的 access_token

access_token 相当于是身份凭证。调用接口时，通过 access_token 来鉴权调用者身份。

- 企业内部应用请参考[获取企业内部应用的 accessToken](https://open.dingtalk.com/document/orgapp-server/obtain-the-access_token-of-an-internal-app?spm=ding_open_doc.document.0.0.f90b3e8bf4XqD4#topic-2056397)。
- 第三方企业应用请参考[获取第三方应用授权企业的 accessToken](https://open.dingtalk.com/document/isvapp-server/obtain-the-access_token-of-the-authorized-enterprise?#topic-2056409)。

## API列表

### 流程
| 接口说明 | 企业内部应用 | 第三方企业应用 | 第三方个人应用 | 权限 |
| :------- | :------- | :------- | :------- | :------- |
| [发起宜搭审批流程](https://open.dingtalk.com/document/orgapp/api-startinstance-v2) | 支持 | 支持 | 暂不支持 | 宜搭流程数据写权限 | 
| [删除流程实例](https://open.dingtalk.com/document/orgapp-server/delete-process-instance) | 支持 | 支持 | 暂不支持 | 宜搭流程数据写权限 | 
| [终止流程实例](https://open.dingtalk.com/document/orgapp-server/terminate-a-process-instance) | 支持 | 支持 | 暂不支持 | 宜搭流程数据写权限 | 

### 表单
| 接口说明 | 企业内部应用 | 第三方企业应用 | 第三方个人应用 | 权限 |
| :------- | :------- | :------- | :------- | :------- |
| [查询表单实例数据](https://open.dingtalk.com/document/orgapp/api-searchformdatas-v2)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [保存表单数据](https://open.dingtalk.com/document/orgapp/api-saveformdata-v2) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 
| [更新表单数据](hhttps://open.dingtalk.com/document/orgapp/api-updateformdata-v2) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 
| [查询表单数据](https://open.dingtalk.com/document/orgapp/api-getformdatabyid-v2) | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [获取员工组件的值](https://open.dingtalk.com/document/orgapp/gets-the-value-of-the-employee-component) | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [获取表单组件定义列表](https://open.dingtalk.com/document/orgapp/get-a-list-of-form-component-definitions) | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [获取子表组件数据](https://open.dingtalk.com/document/orgapp/obtain-child-table-component-data) | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [删除表单数据](https://open.dingtalk.com/document/orgapp/delete-form-data)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 |
| [获取多个表单实例ID](https://open.dingtalk.com/document/orgapp/api-searchformdataidlist-v2)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [批量获取表单实例数据](https://open.dingtalk.com/document/orgapp/obtain-multiple-form-instance-data)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [批量删除表单实例](https://open.dingtalk.com/document/orgapp/delete-multiple-form-instances)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [批量创建表单实例](https://open.dingtalk.com/document/orgapp/create-multiple-form-instances)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [批量更新表单实例内的组件值](https://open.dingtalk.com/document/orgapp/batch-update-of-component-values-in-form-instances)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [新增或更新表单实例](https://open.dingtalk.com/document/orgapp/api-createorupdateformdata-v2)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [通过高级查询条件获取表单实例数据（包括子表单组件数据）](https://open.dingtalk.com/document/orgapp/api-searchformdatasecondgeneration-v2)  | 支持 | 支持 | 暂不支持 | 宜搭表单数据读权限 | 
| [通过高级查询条件获取表单实例数据（不包括子表单组件数据）](https://open.dingtalk.com/document/orgapp/obtain-form-instance-data-using-advanced-query-conditions-excluding-subform) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 
| [通过表单实例数据批量更新表单实例](https://open.dingtalk.com/document/orgapp/update-multiple-form-instances-with-the-form-instance-data) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 
| [查询表单的变更记录](https://open.dingtalk.com/document/orgapp/change-records-of-query-forms) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 
| [获取流程设计结构](https://open.dingtalk.com/document/orgapp/api-getprocessdesign) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 
| [获取组件别名列表](https://open.dingtalk.com/document/orgapp/api-getformcomponentaliaslist) | 支持 | 支持 | 暂不支持 | 宜搭表单数据写权限 | 

### 任务
| 接口说明 | 企业内部应用 | 第三方企业应用 | 第三方个人应用 | 权限 |
| :------- | :------- | :------- | :------- | :------- |
| [获取审批记录](https://open.dingtalk.com/document/orgapp/queries-an-approval-record)  | 支持 | 支持 | 暂不支持 | 宜搭流程数据读权限 | 
| [同意或拒绝宜搭审批任务](https://open.dingtalk.com/document/orgapp/execute-approval-tasks) | 支持 | 支持 | 暂不支持 | 宜搭流程数据写权限 | 
| [获取组织内某人提交的任务](https://open.dingtalk.com/document/orgapp/obtains-the-tasks-submitted-by-someone-in-an-organization) | 支持 | 支持 | 暂不支持 | 宜搭流程数据读权限 | 
| [获取组织内已完成的审批任务](https://open.dingtalk.com/document/orgapp/obtains-the-completed-approval-tasks-in-an-organization) | 支持 | 支持 | 暂不支持 | 宜搭任务读权限 | 
| [转交任务](https://open.dingtalk.com/document/orgapp/transfer-tasks) | 支持 | 支持 | 暂不支持 | 宜搭任务写权限 | 
| [查询流程运行任务（VPC）](https://open.dingtalk.com/document/orgapp/query-process-running-tasks-vpc) | 支持 | 支持 | 暂不支持 | 宜搭任务读权限 | 
| [获取任务列表（组织维度）](https://open.dingtalk.com/document/orgapp/query-tasks-from-the-organization-dimension)  | 支持 | 支持 | 暂不支持 | 宜搭任务读权限 |
| [获取发送给用户的通知](https://open.dingtalk.com/document/orgapp/get-notifications-sent-to-users)  | 支持 | 支持 | 暂不支持 | 宜搭任务读权限 | 
| [查询抄送我的任务列表（应用维度）](https://open.dingtalk.com/document/orgapp/query-copied-my-task-list-application-dimension)  | 支持 | 支持 | 暂不支持 | 宜搭任务读权限 | 
| [提交评论](https://open.dingtalk.com/document/orgapp/submit-comment)  | 支持 | 支持 | 暂不支持 | 宜搭评论写权限 | 
| [批量执行宜搭审批任务](https://open.dingtalk.com/document/orgapp/batch-execution-should-take-the-lead-of-approval-tasks)  | 支持 | 支持 | 暂不支持 | 宜搭评论写权限 | 
| [批量查询宜搭表单实例的评论](https://open.dingtalk.com/document/orgapp/batch-query-of-comments-appropriate-for-form-instances)  | 支持 | 支持 | 暂不支持 | 宜搭评论写权限 | 

### 附件
| 接口说明 | 企业内部应用 | 第三方企业应用 | 第三方个人应用 | 权限 |
| :------- | :------- | :------- | :------- | :------- |
| [获取宜搭附件临时免登地址](https://open.dingtalk.com/document/orgapp/obtain-the-temporary-free-access-address-of-yixian-accessories)  | 支持 | 支持 | 暂不支持 | 宜搭流程数据读权限 | 