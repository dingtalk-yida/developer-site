---
title: 组织外用户查询免登提交数据
order: 5
---

:::warning
**特别声明：该方案存在数据安全风险，仅供 demo 演示。如果实际使用建议使用短信验证码做校验，且在服务端发送 token ！**
**使用接口均为钉钉开放平台接口：https://open.dingtalk.com/document/orgapp-server/querying-form-instance-data**
:::

## 1. 案例背景

&nbsp;&nbsp;&nbsp;&nbsp;组织外用户通过免登方式匿名提交宜搭数据后，需要查其历史提交过的免登数据。由于当前宜搭暂未提供免登数据查询能力，故出此案例。该案例适用于：「用户提交投诉后，查看投诉进展」、「匿名投票后，查看投票汇总」等场景。

现状如下图：<br />
<img src="https://img.alicdn.com/imgextra/i3/O1CN01zsSRdk1RlCgLASzx8_!!6000000002151-2-tps-1198-476.png_.webp" width="1350"/>

## 2. 实现效果

&nbsp;&nbsp;&nbsp;&nbsp;用户可以通过访问宜搭自定义页面，通过自定义页面的组件来实现一套增删改查。<br />![](https://img.alicdn.com/imgextra/i3/O1CN010DMpCB222Rlz6mZFa_!!6000000007062-2-tps-1918-758.png)

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

![](https://img.alicdn.com/imgextra/i1/O1CN01Owh1ln1M5uufL3WMy_!!6000000001384-2-tps-1125-589.png)

&nbsp;&nbsp;&nbsp;&nbsp;2. 创建服务

![](https://img.alicdn.com/imgextra/i4/O1CN01UydJNL22QilXJ7aVG_!!6000000007115-2-tps-1125-593.png)

&nbsp;&nbsp;&nbsp;&nbsp;3. 在服务中创建函数。

![](https://img.alicdn.com/imgextra/i4/O1CN01DdzwKl20CrY1K1f6Y_!!6000000006814-2-tps-1845-686.png)

&nbsp;&nbsp;&nbsp;&nbsp;4. 函数配置，定义函数触发方式（通过 HTTP 请求触发）及函数环境（此处以 node.js 举例）。

![](https://img.alicdn.com/imgextra/i2/O1CN01fsS0sc1WON1kIGshB_!!6000000002778-2-tps-1125-657.png)

&nbsp;&nbsp;&nbsp;&nbsp;5. 按需导入代码包，getToken 函数必须创建，后续其余函数调用需使用此函数（可在附录 6.1 下载）。

![](https://img.alicdn.com/imgextra/i1/O1CN01oTNV2y1zH9dnfAaFj_!!6000000006688-2-tps-1125-476.png)

&nbsp;&nbsp;&nbsp;&nbsp;6. 访问触发器管理，获取请求链接。该请求链接可以直接配置在宜搭远程数据源中请求。

![](https://img.alicdn.com/imgextra/i1/O1CN01fpgE2e1ociW5cw3YN_!!6000000005246-2-tps-1837-669.png)

### 4.2 于自定义页面配置远程数据源

&nbsp;&nbsp;&nbsp;&nbsp;1. 经过 4.1 的配置，我们已经生成了一个可以拿到宜搭指定表单数据的接口，并生成了接口地址。我们只需将该接口地址配置在远程数据源中即可免登获取数据。

![](https://img.alicdn.com/imgextra/i1/O1CN01bpB1Cj1I9nnZwHZWd_!!6000000000851-2-tps-1350-770.png_.webp)

&nbsp;&nbsp;&nbsp;&nbsp;2. 使用远程数据源请求拿到的数据对自定义页面的表格组件进行渲染，可参考文档[《自定义页面表格实现数据管理页功能》](https://www.yuque.com/yida/subject/vswqzz)

![](https://img.alicdn.com/imgextra/i4/O1CN018HQT2E1qXnUhNVBo5_!!6000000005506-2-tps-1850-699.png)

## 5.场景案例

### 5.1 场景

&nbsp;&nbsp;&nbsp;&nbsp;《自定义页面数据管理页（综合应用）》

### 5.2 场景描述

&nbsp;&nbsp;&nbsp;&nbsp;免登态的数据管理页。

### 5.3 实现方式

#### 5.3.1 新建数据表表单（用于留存数据）

1. 新建表单

![](https://img.alicdn.com/imgextra/i4/O1CN01NugevF1LhBWUIAV2C_!!6000000001330-2-tps-1397-774.png)

#### 5.3.2 参考文档 「4.1 访问云函数平台，新建函数及服务」，新建 faas 服务

1. 配置完服务后，导入附录 6.1 的代码包。

![](https://img.alicdn.com/imgextra/i4/O1CN01MREwRc264W1gOjS0B_!!6000000007608-2-tps-1125-476.png)

#### 5.3.3 新建数据操作页面，配置远程数据源

1. 该页面为自定义页面，注意要开启免登。

![](https://img.alicdn.com/imgextra/i4/O1CN01cz3Bgi1EAwKSOKI2K_!!6000000000312-2-tps-1894-866.png)

2. 配置远程数据源，均使用 get 请求，saveData、updateData、deleteData 关闭自动加载。

![](https://img.alicdn.com/imgextra/i1/O1CN01q8ZHQI1ZoQPI0PQ9Z_!!6000000003241-2-tps-1066-788.png)

注意：初次加载页面时，数据源顺序应 getToken -> getYiDaData ，故要设置自动加载且加载方式为串行。
searchQuery 可以配置一些 getYiDaData 必须的参数，如：appType，formUuid，pageSize，currentPage，并将其绑定在 getYiDaData 的请求参数中，便于后续搜索、分页的参数设置。
getToken 不允许频繁调用，建议首次调用后，存储在浏览器 cookie 中，有效期为 7200 秒。

```js
export function setCookie(name, value, time) {
  // 存储cookie
  let d = new Date();
  d.setTime(d.getTime() + time * 1000);
  let expires = 'expires=' + d.toGMTString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export function getCookie(name) {
  // 获取cookie
  let newName = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(newName) == 0) {
      return c.substring(newName.length, c.length);
    }
  }
  return '';
}
```

此例中使用方式

![](https://img.alicdn.com/imgextra/i1/O1CN01wm7sHx1yjGKsRtxFC_!!6000000006614-2-tps-1062-782.png)

```js
function didFetch(content) {
  if (content.expireIn) {
    this.setCookie('accessToken', content.accessToken, content.expireIn);
  } else {
    this.utils.toast({
      title: 'accessToken获取失败！',
      type: 'error',
    });
  }
}
```

3. 配置表格相关设置。

![](https://img.alicdn.com/imgextra/i4/O1CN01GvnZ3Z1jIUx56uA5c_!!6000000004525-2-tps-1829-737.png)

设置好顶部按钮、操作列，分别配置如下回调（新增可使用跳转方式，数据表需开启免登），此例使用弹窗方式。
弹窗配置（新增、编辑二合一）：

![](https://img.alicdn.com/imgextra/i3/O1CN012WzvtM1lLp3pfYUr7_!!6000000004803-2-tps-1806-747.png)

删除提醒：

![](https://img.alicdn.com/imgextra/i2/O1CN01rGzdED1cXswpGukjL_!!6000000003611-2-tps-1402-703.png)

```js
export function onAdd() {
  // 新增顶部操作回调
  this.$('dialog_l2sp5w6j').show(() => {
    this.$('dialog_l2sp5w6j').set('title', '新增数据');
    this.$('textField_l2sp5w6o').reset();
    this.$('textField_l2sp5w6k').reset();
    this.$('radioField_l2sp5w6m').reset();
    this.$('numberField_l2sp5w6n').reset();
  });
}

export function onEdit(rowData) {
  // 编辑操作列回调
  this.$('dialog_l2sp5w6j').show(() => {
    this.$('dialog_l2sp5w6j').set('title', '编辑数据');
    this.$('textField_l2sp5w6o').setValue(rowData.formInstanceId);
    this.$('textField_l2sp5w6k').setValue(rowData.formData.textField_l2sl88eh);
    this.$('radioField_l2sp5w6m').setValue(
      rowData.formData.radioField_l2sl88ei
    );
    this.$('numberField_l2sp5w6n').setValue(
      rowData.formData.numberField_l2sl88ej
    );
  });
}

export async function onOk() {
  // 新增、编辑弹窗确定事件
  this.$('textField_l2sp5w6k').validate();
  this.$('radioField_l2sp5w6m').validate();
  this.$('numberField_l2sp5w6n').validate();
  if (
    !this.$('textField_l2sp5w6k').getValue() ||
    !this.$('radioField_l2sp5w6m').getValue() ||
    !this.$('numberField_l2sp5w6n').getValue()
  ) {
    return;
  }
  this.$('dialog_l2sp5w6j').set('confirmState', 'LOADING');
  if (this.$('textField_l2sp5w6o').getValue()) {
    //编辑
    if (!this.getCookie('accessToken')) {
      await this.dataSourceMap.getToken.load();
    }
    this.dataSourceMap.updateData
      .load({
        accessToken: this.getCookie('accessToken'),
        formUuid: 'FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        appType: 'APP_XXXXXXXXXXXXX',
        formInstanceId: this.$('textField_l2sp5w6o').getValue(),
        updateFormDataJson: JSON.stringify({
          textField_l2sl88eh: this.$('textField_l2sp5w6k').getValue(),
          radioField_l2sl88ei: this.$('radioField_l2sp5w6m').getValue(),
          numberField_l2sl88ej: this.$('numberField_l2sp5w6n').getValue(),
        }),
      })
      .then((res) => {
        this.utils.toast({
          title: '编辑成功！',
          type: 'success',
        });
        this.$('dialog_l2sp5w6j').set('confirmState', 'NORMAL');
        this.$('dialog_l2sp5w6j').hide();
        this.dataSourceMap.getData.load();
      });
  } else {
    //新增
    if (!this.getCookie('accessToken')) {
      await this.dataSourceMap.getToken.load();
    }
    this.dataSourceMap.saveData
      .load({
        accessToken: this.getCookie('accessToken'),
        formUuid: 'FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        appType: 'APP_XXXXXXXXXXXXX',
        formDataJson: JSON.stringify({
          textField_l2sl88eh: this.$('textField_l2sp5w6k').getValue(),
          radioField_l2sl88ei: this.$('radioField_l2sp5w6m').getValue(),
          numberField_l2sl88ej: this.$('numberField_l2sp5w6n').getValue(),
        }),
      })
      .then((res) => {
        this.utils.toast({
          title: '新增成功！',
          type: 'success',
        });
        this.$('dialog_l2sp5w6j').set('confirmState', 'NORMAL');
        this.$('dialog_l2sp5w6j').hide();
        this.dataSourceMap.getData.load();
      });
  }
}

export function onDelete(rowData) {
  // 删除操作列回调
  this.$('dialog_l2sp5w6p').show(() => {
    this.$('textField_l2sp5w6q').setValue(rowData.formInstanceId);
  });
}

export async function onOk2() {
  // 删除弹窗确定事件
  if (!this.$('textField_l2sp5w6q').getValue()) {
    this.utils.toast({
      title: '系统错误',
      type: 'error',
    });
    return;
  }
  if (!this.getCookie('accessToken')) {
    await this.dataSourceMap.getToken.load();
  }
  this.dataSourceMap.deleteData
    .load({
      accessToken: this.getCookie('accessToken'),
      formUuid: 'FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      appType: 'APP_XXXXXXXXXXXXX',
      formInstanceIdList: JSON.stringify([
        this.$('textField_l2sp5w6q').getValue(),
      ]),
    })
    .then((res) => {
      this.utils.toast({
        title: '删除成功！',
        type: 'success',
      });
      this.$('dialog_l2sp5w6p').hide();
      this.dataSourceMap.getData.load();
    });
}
```

表格分页配置：

![](https://img.alicdn.com/imgextra/i3/O1CN01LA2qzu1fWuxfuOGMt_!!6000000004015-2-tps-1835-744.png)

分页回调配置：

```js
export async function onFetchData(params) {
  // 如果是搜索的话翻页重置到 1
  if (params.from === 'search') {
    params.currentPage = 1;
  }
  if (!this.getCookie('accessToken')) {
    await this.dataSourceMap.getToken.load();
  }
  const { searchQuery } = this.state;
  searchQuery.pageSize = params.pageSize;
  searchQuery.currentPage = params.currentPage;
  this.setState({
    searchQuery,
  });
  this.dataSourceMap.getData.load();
}
```

4. 查询配置。

![](https://img.alicdn.com/imgextra/i2/O1CN01cspiW51GG61FYFbqK_!!6000000000594-2-tps-1816-728.png)

查询回调配置:

```js
export async function onSubmit(values) {
  //查询
  if (JSON.stringify(values) === '{}') {
    return;
  }
  if (!this.getCookie('accessToken')) {
    await this.dataSourceMap.getToken.load();
  }
  const { searchQuery } = this.state;
  searchQuery.searchFieldJson = JSON.stringify({
    textField_l2sl88eh: values.textField_l2sldmh6 || '',
    radioField_l2sl88ei: values.selectField_l2sldmhc || '',
  });
  this.setState({
    searchQuery,
  });
  this.dataSourceMap.getData.load();
}

export async function onReset(values) {
  //初始化
  const { searchQuery } = this.state;
  if (!this.getCookie('accessToken')) {
    await this.dataSourceMap.getToken.load();
  }
  searchQuery.searchFieldJson = {};
  searchQuery.pageSize = 10;
  searchQuery.currentPage = 1;
  this.setState({
    searchQuery,
  });
  this.dataSourceMap.getData.load();
}
```

#### 5.3.4 效果验证

![](https://img.alicdn.com/imgextra/i3/O1CN010DMpCB222Rlz6mZFa_!!6000000007062-2-tps-1918-758.png)

## 6. 附录

### 6.1 代码包

注意修改除 getToken 外代码里面的 systemToken 值，调用 Api 时不会显示在 network 和 console 中，getToken 获取到的 accessToken 要用于其余四个接口。

getToken：

```js
var getRawBody = require('raw-body');
const Url = require('url');
const API_SERVER = 'https://api.dingtalk.com';
const API_VERSION = 'v1.0';

exports.handler = (req, resp, context) => {
  resp.setHeader('Content-type', 'application/json');
  getRawBody(req, function (err, body) {
    post(
      `${API_SERVER}/${API_VERSION}/oauth2/accessToken`,
      {
        appKey: req.queries.appKey,
        appSecret: req.queries.appSecret,
      },
      function (data) {
        data = JSON.parse(data);
        if (data.expireIn) {
          var respBody = new Buffer.from(JSON.stringify(data));
          resp.setStatusCode(200);
          resp.send(respBody);
        } else {
          var respBody = new Buffer.from(
            JSON.stringify({
              success: 'false',
              errMsg: '获取失败',
              errCode: '400',
            })
          );
          resp.setStatusCode(200);
          resp.send(respBody);
        }
      }
    );
  });
};

function post(url, data, fn) {
  data = data || {};
  let parse_u = Url.parse(url, true);
  let isHttp = parse_u.protocol == 'http:';
  let options;
  options = {
    host: parse_u.hostname,
    port: parse_u.port || (isHttp ? 80 : 443),
    path: parse_u.path,
    method: 'POST',
    json: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let req = require(isHttp ? 'http' : 'https').request(options, function (res) {
    let _data = '';
    res.on('data', function (chunk) {
      _data += chunk;
    });
    res.on('end', function () {
      fn != undefined && fn(_data);
    });
  });
  req.write(JSON.stringify(data));
  req.end();
}
```
getYiDaData：

```js
var getRawBody = require('raw-body');
const Url = require('url');
const API_SERVER = 'https://api.dingtalk.com';
const API_VERSION = 'v1.0';
const systemToken = 'xxxxxxxxxxx'; //应用秘钥
const userId = 'yida_pub_account'; //以宜搭平台的身份访问接口

exports.handler = (req, resp, context) => {
    resp.setHeader('Content-type', 'application/json');
    getRawBody(req, function (err, body) {
        let pageSize = req.queries.pageSize ? req.queries.pageSize : 10;
        let currentPage = req.queries.currentPage ? req.queries.currentPage : 1;
        post(
            `${API_SERVER}/${API_VERSION}/yida/forms/instances/search`,
            {
                appType: req.queries.appType,
                formUuid: req.queries.formUuid,
                searchFieldJson: req.queries.searchFieldJson,
                systemToken: systemToken,
                userId: userId,
                currentPage: currentPage,
                pageSize: pageSize
            },
            function (data) {
                data = JSON.parse(data);
                //将searchFormDatas接口的返回值直接塞到response中。
                var respBody = new Buffer.from(JSON.stringify(data));
                resp.setStatusCode(200);
                resp.send(respBody);
            },
            req.queries.accessToken
        );
    });
}

function post(url, data, fn, accessToken) {
    data = data || {};
    let parse_u = Url.parse(url, true);
    let isHttp = parse_u.protocol == 'http:';
    let options;
    options = {
        host: parse_u.hostname,
        port: parse_u.port || (isHttp ? 80 : 443),
        path: parse_u.path,
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'x-acs-dingtalk-access-token': accessToken
        },
    };
    let req = require(isHttp ? 'http' : 'https').request(options, function (res) {
        let _data = '';
        res.on('data', function (chunk) {
            _data += chunk;
        });
        res.on('end', function () {
            fn != undefined && fn(_data);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
```
saveYiDaData：

```js
var getRawBody = require('raw-body');
const Url = require('url');
const API_SERVER = 'https://api.dingtalk.com';
const API_VERSION = 'v1.0';
const systemToken = 'xxxxxxxxxxx'; //应用秘钥
const userId = 'yida_pub_account'; //以宜搭平台的身份访问接口

exports.handler = (req, resp, context) => {
    resp.setHeader('Content-type', 'application/json');
    getRawBody(req, function (err, body) {
        post(
            `${API_SERVER}/${API_VERSION}/yida/forms/instances`,
            {
                appType: req.queries.appType,
                formUuid: req.queries.formUuid,
                formDataJson: req.queries.formDataJson,
                systemToken: systemToken,
                userId: userId,
            },
            function (data) {
                data = JSON.parse(data);
                //将saveFormDatas接口的返回值直接塞到response中。
                var respBody = new Buffer.from(JSON.stringify(data));
                resp.setStatusCode(200);
                resp.send(respBody);
            },
            req.queries.accessToken
        );
    });
}

function post(url, data, fn, accessToken) {
    data = data || {};
    let parse_u = Url.parse(url, true);
    let isHttp = parse_u.protocol == 'http:';
    let options;
    options = {
        host: parse_u.hostname,
        port: parse_u.port || (isHttp ? 80 : 443),
        path: parse_u.path,
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'x-acs-dingtalk-access-token': accessToken
        },
    };
    let req = require(isHttp ? 'http' : 'https').request(options, function (res) {
        let _data = '';
        res.on('data', function (chunk) {
            _data += chunk;
        });
        res.on('end', function () {
            fn != undefined && fn(_data);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
```
updateYiDaData：

```js
var getRawBody = require('raw-body');
const Url = require('url');
const API_SERVER = 'https://api.dingtalk.com';
const API_VERSION = 'v1.0';
const systemToken = 'xxxxxxxxxxx'; //应用秘钥
const userId = 'yida_pub_account'; //以宜搭平台的身份访问接口

exports.handler = (req, resp, context) => {
    resp.setHeader('Content-type', 'application/json');
    getRawBody(req, function (err, body) {
        post(
            `${API_SERVER}/${API_VERSION}/yida/forms/instances`,
            {
                appType: req.queries.appType,
                formUuid: req.queries.formUuid,
                formInstanceId: req.queries.formInstanceId,
                updateFormDataJson: req.queries.updateFormDataJson,
                systemToken: systemToken,
                userId: userId,
            },
            function (data) {
                data = JSON.parse(data);
                //将updateFormDataJson接口的返回值直接塞到response中。
                var respBody = new Buffer.from(JSON.stringify(data));
                resp.setStatusCode(200);
                resp.send(respBody);
            },
            req.queries.accessToken
        );
    });
}

function post(url, data, fn, accessToken) {
    data = data || {};
    let parse_u = Url.parse(url, true);
    let isHttp = parse_u.protocol == 'http:';
    let options;
    options = {
        host: parse_u.hostname,
        port: parse_u.port || (isHttp ? 80 : 443),
        path: parse_u.path,
        method: 'PUT',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'x-acs-dingtalk-access-token': accessToken
        },
    };
    let req = require(isHttp ? 'http' : 'https').request(options, function (res) {
        let _data = '';
        res.on('data', function (chunk) {
            _data += chunk;
        });
        res.on('end', function () {
            fn != undefined && fn(_data);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
```
deleteYiDaData：

```js
var getRawBody = require('raw-body');
const Url = require('url');
const API_SERVER = 'https://api.dingtalk.com';
const API_VERSION = 'v1.0';
const systemToken = 'xxxxxxxxxxx'; //应用秘钥
const userId = 'yida_pub_account'; //以宜搭平台的身份访问接口

exports.handler = (req, resp, context) => {
    resp.setHeader('Content-type', 'application/json');
    getRawBody(req, function (err, body) {
        post(
            `${API_SERVER}/${API_VERSION}/yida/forms/instances/batchRemove`,
            {
                appType: req.queries.appType,
                formUuid: req.queries.formUuid,
                formInstanceIdList: JSON.parse(req.queries.formInstanceIdList),
                systemToken: systemToken,
                userId: userId,
            },
            function (data) {
                data = JSON.parse(data);
                var respBody = new Buffer.from(JSON.stringify(data));
                resp.setStatusCode(200);
                resp.send(respBody);
            },
            req.queries.accessToken
        );
    });
}

function post(url, data, fn, accessToken) {
    data = data || {};
    let parse_u = Url.parse(url, true);
    let isHttp = parse_u.protocol == 'http:';
    let options;
    options = {
        host: parse_u.hostname,
        port: parse_u.port || (isHttp ? 80 : 443),
        path: parse_u.path,
        method: 'POST',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'x-acs-dingtalk-access-token': accessToken
        },
    };
    let req = require(isHttp ? 'http' : 'https').request(options, function (res) {
        let _data = '';
        res.on('data', function (chunk) {
            _data += chunk;
        });
        res.on('end', function () {
            fn != undefined && fn(_data);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
```

### 6.2 入参格式

#### getToken

钉钉开放平台获取，详见：https://open.dingtalk.com/document/orgapp-server/obtain-the-access_token-of-an-internal-app

```js
{
  appKey: "xxxxxxx",
  appSecret: "xxxxxxxxxxxx"
}
```

#### getYiDaData

```js
{
  accessToken: "xxxx",
  formUuid: "FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appType: "APP_XXXXXXXXXXXXX",
  searchFieldJson: JSON.stringify({}),
  pageSize: 10,
  currentPage: 1,
}
```

#### saveYiDaData

```js
{
  accessToken: "xxxx",
  formUuid: "FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appType: "APP_XXXXXXXXXXXXX",
  formDataJson: JSON.stringify({})
}
```

#### updateYiDaData

```js
{
  accessToken: "xxxx",
  formUuid: "FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appType: "APP_XXXXXXXXXXXXX",
  formInstanceId: this.$('textField_l2sp5w6o').getValue(),
  updateFormDataJson: JSON.stringify({})
}
```

#### deleteYiDaData

可传多个 id，可批量删除。

```js
{
  accessToken: "xxxx",
  formUuid: "FORM-XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appType: "APP_XXXXXXXXXXXXX",
  formInstanceIdList: JSON.stringify(["xxxx","xxxx"])
}
```
