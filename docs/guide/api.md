# 前端API
本文档主要介绍宜搭平台在JS面板或变量绑定弹框中可以直接调用的API及其使用方法，每一个API都会配备一个示例用于展示API的具体使用方式，在示例中，我们都会通过以下函数结构来进行包裹用于模拟动作面板的真实使用场景（包裹的函数名称在真实环境下用户可以自由定义）。
```js
export function xxx() {
  ... ]
}
```

## 全局变量API
宜搭的设计模式主要参考React的方案，因此我们提供全局变量来进行页面级状态管理并提供相应的API来触发页面的重新刷新（具体使用参考[全局变量文档](guide/concept/state.md)）。

### this.state.xxx
获取全局变量的值（和React的API一致）。

示例：
```js
export function getState() {
  // 获取页面全局变量的值，并通过console打印出来
  const status = this.state.status;
  console.log(`status: ${status}`)
}
```

### this.setState()
设置全局变量的值并触发页面重新渲染（和React的API一致）。

示例：
```js
export function setStateValue() {
  // 设置页面全局变量的值并触发页面重新渲染
  this.setState({
    status: 'loading'
  });
}
```

## 远程数据API
宜搭支持配置远程数据源，并提供通过js触发远程数据源调用的API（具体使用参考[远程API文档](guide/concept/datasource.md)）。

### this.dataSourceMap.xxx.load()
手动调用指定的远程API，xxx为在数据源面板设置的数据源名称，同时支持传入请求参数，API调用传入的请求参数将于数据源配置中的请求参数进行merge并发送请求，load方法返回一个Promise。

示例：
```js
export function fetchData() { 
  // 请求数据源中配置的getDataList远程API，并传入pageSize和page参数，若请求成功在console中打印结果，若请求失败，弹框提醒
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
重新请求所有自动加载设置为true的远程API，该方法也返回一个Promise。

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

## JS调用API
宜搭提供动作面板进行JS代码编写，动作面板中的函数除了变量绑定及动作绑定使用之外还支持函数间的相互调用。

### this.methodName()
我们提供动作面板中js函数的相关调用方式，用户可以使用this.xxx(),调用动作面板中的其他函数，其中xxx为其他函数的名称。

示例：
```js
export function hello(params) {
  this.utils.toast({
    title: `hello ${params}`,
    type: 'success'
  })
}

export function onClickInvoke(){
  const value = this.$('textField_k1u12o6l').getValue()
  // 调用动作面板中的其他函数
  this.hello(value)
}
```

## 工具类相关API
宜搭提供了很多内置的工具类函数，帮助用户更好地实现一些常用功能。

### this.utils.toast()
信息提醒，会比Dialog对话框更加轻量，弹出后过一段时间会自动消失，效果如下图所示：

![](https://img.alicdn.com/imgextra/i4/O1CN01eU0Tni23AykRPbQ45_!!6000000007216-2-tps-1410-231.png_.webp)

参数配置：

| 参数 | 属性 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| type |'success', 'warning', 'error', 'notice', 'help', 'loading' | 'notice'| - |
| title | (String) | - | - |
| size | 'medium', 'large' | 'medium' | - |
| duration | (Number)  | - | type 为 loding 时无效 |

示例：
```js
export function poptoast(){
  this.utils.toast({
    title: 'success',
    type: 'success',
    size: 'large',
  })
}
```

### this.utils.dialog()
弹出对话框，效果如下图所示，用户需要手动关闭：

![](https://img.alicdn.com/imgextra/i1/O1CN01gPpC9627v11DxaImu_!!6000000007858-2-tps-1194-314.png_.webp)

宜搭底层采用 fusion 组件进行实现，你可以配置所有 Dialog 组件的属性
[文档地址](https://fusion.design/pc/component/dialog?themeid=2#demo-api)，以下列出了常用属性：

| 参数 | 属性 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| type |'alert', 'confirm', 'show' | 'alert'| - |
| title | (String) | - | - |
| content | (String\|ReactNode) | - | 也可传入 HTML/JSX 实现复杂布局 |
| hasMask | (Boolean)  | true | 是否有遮罩 |
| footer | (Boolean) | true | 是否有底部操作按钮 |
| footerAlign |'left', 'center', 'right' | 'right' | 底部操作对齐方向 |
| footerActions | ['cancel','ok'], ['ok','cancel'], ['ok'], ['cancel'] | - | 底部操作类型和顺序 |
| onOk | (Func) | - | 点击确定的回调函数 | 
| onCancel | (Func) | - | 点击取消的回调函数 |

示例：
```js
export function popDialog(){
  this.utils.dialog({
    type: 'confirm',
    title: 'title',
    content: 'content', // 如需换行可传入 HTML/JSX 来实现
    onOk: () => { },
    onCancel: () => { },
  });
}
```
### this.utils.formatter()
常用的formatter函数用于进行事件、金额、手机号等format。

示例：
```js
export function format() {
  // 格式化日期，输出值为：2022-01-29
  const formatDate = this.utils.formatter('date', new Date(), 'YYYY-MM-DD');

  // 格式化金额，输出值为：10 000.99
  const formatMondy = this.utils.formatter('money', '10000.99');
  
  // 格式化电话，输出值为：+86 1565 2988 282
  const formatPhone = this.utils.formatter('cnmobile', '+8615652988282');

  // 格式化银行卡好，输出值为：1565 2988 2821 2233
  const formatCard = this.utils.formatter('card', '1565298828212233');
}
```
### this.utils.getLocale()
获取当前渲染上下文的文字语言标识符。

示例：
```js
export function locale() {
  const locale = this.utils.getLocale();

  console.log(`locale: ${locale}`);
  // 输出：locale: zh_CN
}
```

### this.utils.getLoginUserId()
获取登录用户ID。

示例：
```js
export function getUserInfo() {
  const userId = this.utils.getLoginUserId();
  console.log(`userId: ${userId}`);
  // 输出：userId: 43314767738888
}
```

### this.utils.getLoginUserName()
获取登录用户名称。

示例：
```js
export function getUserInfo() {
  const userName = this.utils.getLoginUserName();
  console.log(`userName: ${userName}`);
  // 输出：userName: 韩火火
}
```

### this.utils.previewImage()
图片预览，通过这个API我们可以实现一个简洁的图片预览效果，如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN01YksnrI21hNXGdPAov_!!6000000007016-2-tps-1423-863.png_.webp)

示例：
```js
export function previewImg() {
  this.utils.previewImage({ current: 'https://img.alicdn.com/tfs/TB1JUnZ2GL7gK0jSZFBXXXZZpXa-260-192.png_.webp' });
}
```

## 路由相关API
宜搭提供获取路由信息及页面跳转相关API，底层实现主要使用[react-router](https://reactrouter.com/)，因此跳转API与react-routerAPI基本一致，另外宜搭还提供了一些路由相关的扩展API。

### this.utils.router.push()
页面跳转并且会将跳转记录push到路由堆栈中，可以通过浏览器的回退按钮进行回退，push的参数描述如下所示：

```typescript
function push(path: string, params?: object, blank?: boolean, isUrl?: boolean, type?: string) => void;
```

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| path | string | 是 | 跳转的地址，可以是完整的 url，url 片段，也可以是 pageID 构成的字符串,如果有 slug，优先使用 [slug](https://lark.alipay.com/legao/help/faq#%E9%A1%B5%E9%9D%A2-slug) 跳转。<br/> 当 `isUrl` 参数为 `true` 的时候会按照 url 的方式解析，否则会以 `pageId` 的形式解析实现内部页面之间的跳转。 |
| params | object | 否 | 跳转地址所带的查询参数 `{q: 'a', r: 'b'}` 等效于 `?q=a&r=b` |
| blank | boolean | 否 | 是否新打开页面，默认值为 `false` |
| isUrl | boolean | 否 | 是否是 url 地址，默认值为 `false` |
| type | string | 否 | 可选值为 push 或 replace，使用 push 的方式或 replace 的方式跳转 |

示例：
```js
export function pushUrl() {
  // 跳转页面，且注入fromSource参数
  this.utils.router.push('https://www.aliwork.com', {fromSource: 'customPage'});
}
```

### this.utils.router.replace()
页面替换，与router.push的区别是该 API 会替换当前页面而不是进入下一个页面，因此无法通过浏览器的会对按钮进行退回，等价于：
```js
this.utils.router.push(path, params, false, false, 'replace');
```

示例：
```js
export function replaceUrl() {
  // 跳转页面，且注入fromSource参数
  this.utils.router.replace('https://www.aliwork.com', {fromSource: 'customPage'});
}
```

### this.utils.router.getQuery()
获取页面URL参数，若传入key参数则返回定义的参数值，否则返回URL的所有参数，getQuery的参数描述如下：
```typescript
function getQuery(key?: string, queryStr?: string) => Record<string, string> | string | undefined;
```

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| key | string | 否 | 传入 key 返回对应的值，否则返回整个对象 |
| queryStr | string | 否 | 默认值：location.search + location.hash, hash 覆盖 search；支持自定义字符串解析，格式为 '?a=1&b=2' |

示例：
```js
export function getQuery() {
  // 获取URL中fromSource参数
  const fromSource = this.utils.router.getQuery('fromSource');
  console.log(`fromSource: ${fromSource}`);
}
```

### this.utils.router.stringifyQuery()
序列化URL参数，即将对象转换成URL参数形式。

示例：
```js
export function stringifyQuery() {
  // 将对象序列化为URL参数形式，并通过console打印
  const params = {
    name: 'Jack',
    isMan: true
  };
  const urlStr = this.utils.router.stringifyQuery(params);
  console.log(`urlParams: ${urlStr}`);
  // 输出结果为：urlParams: name=Jack&isMan=true
}
```

## 组件通用API
在讲解组件相关的API之前需要提前介绍几个概念：
* 组件唯一标识（fieldId）- 宜搭会为每个组件设置一个唯一标识，用于识别组件实例，组件唯一标识可以通过组件属性面板进行查看；
* 组件属性（prop）- 在宜搭中每个组件都可以通过设置组件属性来实现不同功能（类似React的props），我们可以通过hover组件属性面板查看配置项对应的属性名称；

![](https://img.alicdn.com/imgextra/i3/O1CN01YAyE9h1lWM9N1lqdo_!!6000000004826-2-tps-3582-2018.png_.webp)

组件通用API对于宜搭提供的所有组件都可以使用，主要用于读取或者设置组件的属性。
### this.$(fieldId).get(prop)
通过fieldId找到组件并获取组件的属性值，fieldId 为组件标识，prop 为组件的属性名称。

示例：
```js
export function getAttribute(){
  // 获取文本组件的内容（content）属性，并在console中打印出来
  const content = this.$('text_kyz78exo').get('content')
  console.log(`text content: ${content}`);
}
```

### this.$(fieldId).set(prop, value)
通过fieldId找到组件并设置组件的属性值，fieldId 为组件标识，prop为组件属性名称，value为要设置的属性值。

示例：
```js
export function setAttribute(){
  // 设置文本组件的最大行数（maxLine）属性
  this.$('text_kyz78exo').set('maxLine', 5);
}
```

## 表单组件API
表单组件是宜搭平台中最重要的一类组件，我们通常通过表单组件来收集数据，例如：输入框、单选、多选、下拉选择等，本部分将主要介绍表单组件相关的API：

### this.$(fieldId)
获取组件实例，fieldId为组件唯一标识，在调用组件API之前，通常我们需要通过 ```this.$(fieldId)``` 先获取组件实例再进行API调用。

### this.$(fieldId).getValue()
获取指定表单组件的输入值。

示例：
```js
export function getValue(){
  // 获取输入框组件的用户输入值，并在console中打印出来
  const value = this.$('textField_kyz78exp').getValue();
  console.log(`input value: ${value}`);
}
```

### this.$(fieldId).setValue()
设置指定表单组件的输入值，setValue的参数描述如下所示：
```typescript
interface IOptions {
  doNotValidate: boolean; // 是否阻止自动校验，默认为 false
  formatted: boolean; // 是否已经格式化 默认为 false
  triggerChange: boolean; // 是否触发组件值变化事件，默认为 true
};

/**
 * @param {any} value  需要设置的表单值
 * @param {IOptions} [options] 配置项，可选
 */
function setValue(value: any, options?: IOptions) => void;
```

示例：
```js
export function setValue(){
  // 将输入框组件的值设置为“hello world”
   this.$('textField_kyz78exp').setValue('hello world');
}
```

### this.$(fieldId).reset()
重置指定表单组件的输入值，reset的参数描述如下所示：
```typescript
/**
 * @param {boolean} toDefault 是否重置为表单组件的默认值，默认为 true
 */
function reset(toDefault?: boolean) => void;

```

示例：
```js
export function reset() {
  // 重置输入框组件的值
   this.$('textField_kyz78exp').reset();
}
```

### this.$(fieldId).getBehavior()
获取指定表单组件的当前状态，表单组件的状态有以下可选值：
* **NORMAL** - 正常态，即输入态；
* **READONLY** - 只读态；
* **DISABLED** - 禁用态；
* **HIDDEN** - 隐藏态；

示例：
```js
export function getBehavior() {
  // 获取输入框组件的状态，并将其打印出来
  const behavior = this.$('textField_kyz78exp').getBehavior();
  console.log(`text behavior: ${behavior}`);
}
```

### this.$(fieldId).setBehavior()
设置指定表单组件的状态，可以设置的状态可以参考getBehavior部分的描述。

示例：
```js
export function setBehavior() {
  // 将输入框组件的状态设置为禁用（DISABLED）状态
  this.$('textField_kyz78exp').setBehavior('DISABLED');
}
```

### this.$(fieldId).resetBehavior()
重置指定表单组件的状态。

示例：
```js
export function resetBehavior() {
  // 重置输入框组件的状态
  this.$('textField_kyz78exp').resetBehavior();
}
```

### this.$(fieldId).validate()
执行一次指定表单组件的校验，validate的参数描述如下所示：
```typescript
/**
 * @param {Array|null} errors 错误信息，如果没有错误则为null
 * @param {Object} values 表单组件的值
 */
function ValidateCallback(errors: string[] | null, values: object | null) => void

/**
 * @param {Function} callback 校验的回调方法，可选
 */
function validate(callback?: ValidateCallback) => void;
```

示例：
```js
export function validate() {
  // 执行输入框组件的校验，如果校验失败则在console中打印errors和values
  this.$('textField_kyz78exp').validate((errors, values) => {
    console.log(JSON.stringify({errors, values}, null, 2));
  });
}
```
当一个输入框的校验规则为手机号时，如果校验失败，会打印出以下结构：
```json
{
  "errors": {
    "textField_kyz78exp": {
      "errors": [
        "输入框不是一个合法的手机号码格式"
      ]
    }
  },
  "values": {
    "textField_kyz78exp": "33"
  }
}
```

### this.$(fieldId).disableValid()
关掉表单组件的校验。

示例：
```js
export function disableValid() {
  this.$('textField_kyz78exp').disableValid();
}
```

### this.$(fieldId).enableValid()
开启表单组件的校验，enableValid的参数描述如下所示：
```typescript
/**
 * @param {boolean} doValidate 是否马上执行校验，可选，默认为 false
 */
function enableValid(doValidate?: boolean) => void;
```

示例：
```js
export function enableValid() {
  // 开启输入组件的校验，并立即执行
  this.$('textField_kyz78exp').enableValid(true);
}
```

### this.$(fieldId).setValidation()
设置表单组件的校验规则，setValidation的参数描述如下所示：
```typescript
interface IRule {
  type: string; // 校验类型
  param: any; // 校验类型对应的参数
  message: II18nMessage; // 错误信息，按照国际化的格式
}

interface II18nMessage {
  type: 'i18n'; // 声明国际化类型
  use: 'zh_CN' | 'en_US'; // 当前使用的 Locale
  en_US: string; // 英文文案
  zh_CN: sting; // 中文文案
}

/**
 * @param {IRule[]} rules 校验规则，必填
 * @param {boolean} [doValidate] 是否马上执行校验，可选，默认为 false
 */
function setValidation(rules: IRule[], doValidate?: boolean) => void;
```

宜搭支持的校验类型如下所示：

| 支持校验的规则 | 属性 |
| :--- | :--- |
| 必填 | `{"type": "required"}` |
| 最小长度 | `{"type": "minLength", "param": "23" }`|
| 最大长度 | `{"type": "maxLength", "param": "23" }`|
| 邮箱 | `{"type": "email"}` |
| 手机 | `{"type": "mobile"}` |
| 网址 | `{"type": "url"}`|
| 最小值 | `{"type": "minValue", "param": "3"}` |
| 最大值 | `{"type": "maxValue", "param": "3"}`|
| 自定义函数 | `{"type": "customValidate", "param": (value, rule) => { return ture; }}`|

示例：
```js
export function setValidation() {
  // 设置输入组件的校验规则，必填、最大长度为10且
  this.$('textField_kyz78exp').setValidation([{
    type: 'required'
  }, {
    type: 'maxLength',
    param: '10'
  }, {
    type: "customValidate",
    param: (value, rule) => {
      if(/^\d*$/.test(value)) {
        return true;
      }

      return rule.message;
    },
    message: {
      type: "i18n",
      use: "zh_CN",
      en_US: "only support number",
      zh_CN: "只能输入数字"
    }
  }]);
}
```

### this.$(fieldId).resetValidation()
重置表单组件的校验规则，即在setValidation后用于恢复之前的校验规则，resetValidation的参数如下所示：
```typescript
/**
 * @param {boolean} [doValidate] 是否马上执行校验，可选，默认为 false
 */
function resetValidation(doValidate?: boolean) => void;
```

示例：
```js
export function resetValiation() {
  // 重置输入框组件的校验规则，并立即校验
  this.$('textField_kyz78exp').resetValidation(true);
}
```

## Dialog组件API
宜搭提供了一个对话框组件用于展示对话框形式的内容展示，同时提供了一些API来操作对话框的行为。

### this.$(fieldId).show()
显示指定对话框，该API提供一个callback函数能够在对话框展示后回调。

示例：
```js
export function openDialog() {
  this.$('dialog_kyz78exr').show(() => {
    console.log('Dialog is open');
  });
}
```

### this.$(fieldId).hide()
关闭指定对话框。

示例：
```js
export function closeDialog() {
  this.$('dialog_kyz78exr').hide();
}
```