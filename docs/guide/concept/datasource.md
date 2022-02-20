---
title: 远程 API
order: 2
---
# 远程 API
进行系统开发免不了要进行 HTTP 请求调用从服务端获取数据或者进行一些异步操作，宜搭提供远程 API 功能用于进行异步接口调用。

## 创建远程数据源
用户可以通过数据源面板添加远程 API 配置：
![](https://img.alicdn.com/imgextra/i4/O1CN018zynAv1jmj4isWuAf_!!6000000004591-2-tps-3582-2018.png_.webp)
远程数据源包含以下配置信息：
* **名称**- 远程 API 的唯一标识，需要遵守 JS 的变量定义规则；
* **描述**- 定义远程 API 的描述信息，在变量绑定时会透出该描述信息；
* **自动加载**- 开启了“自动加载”的数据源会在页面渲染之前请求远程接口，并将返回数据直接赋值到以远程 API 命名的全局变量上，所有自动加载的数据源加载完成之后才开始渲染页面；
* **加载方式**- 宜搭提供以下两种不同的加载方式（默认并行加载）：
  * 串行 - 所有串行数据源会从上到下执行，如果有相互依赖的，被依赖的数据源需要在前面；
  * 并行 - 所有并行数据源同时执行；
* **请求地址**- 远程 API 的访问地址，如果是宜搭提供的 openAPI 可以使用相对路径，如果是第三方服务提供的接口需要支持跨域访问；
* **请求方式**- 宜搭提供通用的异步请求方法：JSONP、GET、POST、PUT、DELETE；
* **请求参数**- 用于设置异步请求的请求参数，支持静态配置或绑定变量；
* **是否发送请求**- 支持传入一个布尔值，通过这个变量去判断这个请求是否应该发出。这个输入域也可以输入变量表达式以决定是否需要发送请求；
* **数据处理**- 宜搭提供四类数据处理函数，用于在不同阶段进行切片处理：
  * **willFetch**- 请求发送前处理函数，willFetch 允许用户在发送请求前修改请求的各种参数。示例：
  ```js
  function willFetch(vars, config) {
    // 通过 vars.data 可以更改查询参数
    // 通过 config.header 可以更改 header
    // 通过 config.url 可以更改  url
    vars.data.a = 1; // 修改发送请求参数中的 a 为 1
    config.url = 'https://www.taobao.com'; // 修改请求的 url 为淘宝
    config.header['Content-Type'] = 'application/json'; // 修改 Content-Type
    console.log(vars, config); // 可以查看还有哪些参数可以修改。
  }
  ```

  * **fit**- 请求返回时的数据适配，fit 可以修改请求的原始 Response 以适配对应的数据请求格式。示例：
  ```js
  // 宜搭默认只处理以下格式的数据返回，如果异步接口返回结构不满足要求需要通过 fit 来进行转换
  //{
  //    content: [], // content 字段用于承载数据，content 对应的数据结构不做限制。
  //    success: true, // success 用于标明这次请求是否成功
  //}
  function fit(response) {
    const content = (response.content !== undefined) ? response.content : response;
    const error = {
      message: response.errorMsg ||
        (response.errors && response.errors[0] && response.errors[0].msg) ||
        response.content || '远程数据源请求出错，success is false', 
    };
    let success = true;
    if (response.success !== undefined) {
      success = response.success;
    } else if (response.hasError !== undefined) {
      success = !response.hasError;
    }
    return {
      content, 
      success, 
      error, 
    };
  }
  ```

  * **didFetch**- 请求完成回调函数，didFetch 允许用户对接收到的数据进行修改, 和 fit 不同的是, 接口返回的 success 为 true 才会执行。示例：
  ```js
  function didFetch(content) {
      content.b = 1; // 修改返回数据结构中的 b 字段为 1
      return content; // 重要，需返回 content
  }
  ```

  * **onError**- 请求错误处理函数，onError 用于捕获远程数据源的接口异常，接口返回的 success 为 false 时会执行, 示例：
  ```js
  function onError(error) {
    console.log(error);
  }
  ```

* **默认数据**- 指定接口的默认数据，若接口未返回或者请求失败将返回默认数据；

## API
宜搭远程 API 提供以下两个 API：
### this.dataSourceMap.xxx.load()
手动调用指定的远程 API，xxx 为在数据源面板设置的数据源名称，同时支持传入请求参数，API 调用传入的请求参数将于数据源配置中的请求参数进行 merge 并发送请求，load 方法返回一个 Promise。

示例：
```js
export function fetchData() { 
  // 请求数据源中配置的 getDataList 远程 API，并传入 pageSize 和 page 参数，若请求成功在 console 中打印结果，若请求失败，弹框提醒
  this.dataSourceMap.getDataList.load({
    pageSize: 10, 
    page: this.state.currentPage
  }).then((res) => {
    if (res) {
      console.log('fetchData', res);
    }
  }).catch((err) => {
    this.utils.toast({
      type: 'error', 
      title: '请求失败！'
    })；
  });
}
```

### this.reloadDataSource()
重新请求所有自动加载设置为 true 的远程 API，该方法也返回一个 Promise。

示例：
```js
export function reload() {
  // 重新请求所有初始请求，在请求成功后弹框提醒
  this.reloadDataSource().then(res => {
    this.utils.toast({
      type: 'success', 
      title: '刷新成功！'
    })；
  });
}

```

## 使用场景
远程数据源在系统开发中非常常见，它是建立前端页面和后端服务的桥梁，在宜搭平台我们有以下最常见的两种使用远程数据源的场景：

### 自动加载数据源
有时候我们需要在用户进入页面时就自动加载数据，并将这些数据展示在页面中，例如我的待办任务列表场景。

* 我们通过配置自动加载数据源来加载待办任务 (自动加载数据源会在请求完成后自动将然后结果挂载到全局变量上，对应的变量名称为数据源的名称)，如下所示：
![](https://img.alicdn.com/imgextra/i4/O1CN01eHjVgb1vfeLXZ2WJS_!!6000000006200-2-tps-3582-2014.png_.webp)

当然我们也配置了一个 didFetch 数据处理函数来将返回数据转换成更加语义化的结构：
```js
function didFetch(content) {
  return (content.data || []).map(item => {
    return {
      id: item.formInstId, 
      content: item.formData.textField_kymq5pdi, 
      done: item.formData.radioField_kymq5pdj
    }
  });
}
```

* 然后我们需要通过一个表格组件将我们自动加载的待办数据展示出来，如下所示：
  * 设置表格的数据源变量绑定 state.todoList；
![](https://img.alicdn.com/imgextra/i4/O1CN01KNxkKG1tRKjbYgMMQ_!!6000000005898-2-tps-3582-2014.png_.webp)
  * 设置表格的字段映射字段及对应的类型；
![](https://img.alicdn.com/imgextra/i2/O1CN01ibw6MV28h6btU40z3_!!6000000007963-2-tps-3582-1938.png_.webp)

* 最后我们点击设计器的预览按钮便可以看到待办任务数据展示在了表格中了；
![](https://img.alicdn.com/imgextra/i2/O1CN012Nrzm624MiVklaUIc_!!6000000007377-2-tps-3582-884.png_.webp)


### 手动加载数据源
有时候我们需要在用户交互时通过事件处理手动调用数据源进行一些操作，例如当用户点击删除按钮时调用远程 API 删除待办任务。

* 我们先配置一个删除任务的远程 API，如下所示：
![](https://img.alicdn.com/imgextra/i4/O1CN01UN0UEZ1ZqiMqOP27M_!!6000000003246-2-tps-3582-2020.png_.webp)

同时我们也为改接口配置了一个 didFetch 数据处理函数，当接口请求成功后，我们会通过消息提醒用户删除成功，并通过 reloadDataSource API 重新请求自动加载请求刷新任务列表：
```js
function didFetch(content) {
  // 通过消息提醒用户删除成功
  this.utils.toast({
    title: 'delete Success!', 
  });
  // 重新加载自动请求刷新任务列表
  this.reloadDataSource();
  return content; // 重要，需返回 content
}
```

* 接下来我们需要给表格增加一个删除操作项，并且当用户点击删除项时通过手动调用远程 API 完成删除操作，如下所示：
  * 设置表格的操作列属性：
![](https://img.alicdn.com/imgextra/i3/O1CN01AMhDot1ymvU8MUpKe_!!6000000006622-2-tps-3582-2020.png_.webp)
  * 增加一个操作项：
![](https://img.alicdn.com/imgextra/i4/O1CN01LKM5AQ1IN5H8Ipd80_!!6000000000880-2-tps-3582-2018.png_.webp)
  * 设置操作项标题，在回调函数中为该操作项绑定一个动作：
![](https://img.alicdn.com/imgextra/i3/O1CN01znVIR51iHkfq7CKgg_!!6000000004388-2-tps-3582-2014.png_.webp)
![](https://img.alicdn.com/imgextra/i3/O1CN01FpPp2y261ld4hfvsF_!!6000000007602-2-tps-3582-2014.png_.webp)
  * 实现 onDelete 函数，手动加载数据源，实现删除操作：
![](https://img.alicdn.com/imgextra/i1/O1CN01VKU7cU244OfclaYo9_!!6000000007337-2-tps-3582-2018.png_.webp)
```js
export function onDelete(rowData) {
  this.dataSourceMap.del.load({
    formInstId: rowData.id
  });
}
```

* 最后我们点击设计器的预览按钮便可以看到表格的操作列出现了一个删除操作项，点击对应的删除按钮便会执行删除操作并刷新列表；
![](https://img.alicdn.com/imgextra/i2/O1CN01D3pi3y23c07BVq93d_!!6000000007275-2-tps-3582-1278.png_.webp)

:::tip
上面的例子中用到了几个宜搭平台提供的开放接口，用于进行数据的查询及删除操作，更多宜搭开放接口可以查看 [OpenAPI 文档](guide/openAPI.md)。

:::