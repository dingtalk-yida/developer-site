---
title: 钉钉 JS-API
order: 4
---
钉钉提供了丰富的JSAPI能力，例如原生弹框、设备信息、扫描等能力，宜搭开发者可以利用钉钉原生提供的API能力提供更好的用户体验。

* [钉钉JSAPI功能列表](https://developers.dingtalk.com/document/app/jsapi-overview);
* [钉钉开发者必读](https://developers.dingtalk.com/document/app/read-before-development)

:::caution
调用钉钉JS-API需要注意以下事项：
* 宜搭应用中，不保证 window.dd 存在 (目前仅手机端会引入一个旧版资源)，建议用户手动引入;
* 宜搭应用中，即使不配置 dd.config 进行 JSAPI 鉴权操作，仍可调用需要鉴权后才能使用的 API。请谨慎调用;
* 调用 JSAPI 时，需要的 corpId 参数可以从 ```const { corpId } = window.pageConfig || {};``` 获取;
:::

## 使用指南

### 步骤1：异步加载钉钉JSAPI资源
由于宜搭页面中不保证 window.dd一定存在，所以保险起见，用户需要在页面的didMount生命周期中手动加载钉钉的JSAPI脚本，如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN013fGTh51sdPZRnajVr_!!6000000005789-2-tps-742-367.png_.webp)

实现代码如下所示：
```js
export function didMount() {
  const script = document.createElement('script');
  script.src = 'https://g.alicdn.com/dingding/dingtalk-jsapi/2.10.3/dingtalk.open.js';
  document.body.appendChild(script);
}
```
资源引入完成后，即可通过 window.dd 调用 JSAPI 中的相关功能。

### 步骤2：调用钉钉JSAPI
钉钉的JSAPI加载完成后，我们便可以在动作面板中通过window.dd调用钉钉的API进行相应的操作了，如下所示：
```js
export function isDingTalk() {
  return window.navigator && /dingtalk/i.test(window.navigator.userAgent)
}

export function dingAlert() {
  if (window.dd && this.isDingTalk()) {
    window.dd.device.notification.alert({
      message: "测试",
      title: "提示",//可传空
      buttonName: "收到",
      onSuccess: function () {
      },
      onFail: function (err) { }
    });
  }
}
```
钉钉端内的展示效果如下所示：
<img src="https://img.alicdn.com/imgextra/i4/O1CN01oJbcKT1i0o1uNg8kU_!!6000000004351-2-tps-592-1280.png" width="300"/>

:::caution
由于很多钉钉JSAPI要求必须端内调用，因此在调用钉钉JSAPI时，需要提前先判断一下是否在钉钉端内，判断代码如下所示：
```js
export function isDingTalk() {
  return window.navigator && /dingtalk/i.test(window.navigator.userAgent)
}
```
:::

用户可以访问官方提供的[使用钉钉JSAPI](/docs/examples/dingTalkAPI)来查看效果及具体实现。

## API列表

### 容器
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| 获取容器版本号 | dd.version | 不需要 | 支持 | 支持 | 不支持 |


### 弹框
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [alert](https://open.dingtalk.com/document/orgapp-client/alert?#topic-2025095) | device.notification.alert | 不需要 | 支持 | 支持 | 支持 |
| [confirm](https://open.dingtalk.com/document/orgapp-client/confirm?#topic-2025096) | device.notification.confirm | 不需要 | 支持 | 支持 | 支持 |
| [prompt](https://open.dingtalk.com/document/orgapp-client/prompt?#topic-2025098) | device.notification.prompt | 不需要 | 支持 | 支持 | 支持 |
| [手机震动](https://open.dingtalk.com/document/orgapp-client/mobile-phone-vibration?#topic-2025100) | device.notification.vibrate | 不需要 | 支持 | 支持 | 不支持 |
| [toast](https://open.dingtalk.com/document/orgapp-client/toast?#topic-2025105) | device.notification.toast | 不需要 | 支持 | 支持 | 支持 |
| [actionsheet](https://open.dingtalk.com/document/orgapp-client/actionsheet?#topic-2025107) | device.notification.actionSheet | 不需要 | 支持 | 支持 | 支持 |
| [显示加载](https://open.dingtalk.com/document/orgapp-client/show-load?#topic-2025102) | device.notification.showPreloader | 不需要 | 支持 | 支持 | 不支持 |
| [隐藏加载](https://open.dingtalk.com/document/orgapp-client/hide-loading?#topic-2025104) | device.notification.hidePreloader | 不需要 | 支持 | 支持 | 不支持 |
| [modal弹浮层](https://open.dingtalk.com/document/orgapp-client/modal-pop-up-layer?#topic-2025108) | device.notification.modal | 不需要 | 支持 | 支持 | 不支持 |
| [extendModal](https://open.dingtalk.com/document/orgapp-client/extendModal?#topic-2025109) | device.notification.extendModal | 不需要 | 支持 | 支持 | 不支持 |
| [多选组件](https://open.dingtalk.com/document/orgapp-client/multiple-select-components?#topic-2025110) | biz.util.multiSelect | 不需要 | 支持 | 支持 | 不支持 |

### 摇一摇
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [启动摇一摇](https://open.dingtalk.com/document/orgapp-client/start-a-shake?#topic-2025241) | device.accelerometer.watchShake | 不需要 | 支持 | 支持 | 不支持 |
| [停止摇一摇](https://open.dingtalk.com/document/orgapp-client/stop-a-shake?#topic-2025242) | device.accelerometer.clearShake | 不需要 | 支持 | 支持 | 不支持 |

### 设备
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [获取网络类型](https://open.dingtalk.com/document/orgapp-client/queries-the-network-type?#topic-2024983) | device.connection.getNetworkType | 不需要 | 支持 | 支持 | 不支持 |
| [获取wifi状态](https://open.dingtalk.com/document/orgapp-client/get-wifi-status?#topic-2024982) | device.base.getWifiStatus | 不需要 | 支持 | 支持 | 不支持 |
| [获取手机基础信息](https://open.dingtalk.com/document/orgapp-client/obtain-basic-mobile-phone-information?#topic-2024975) | device.base.getPhoneInfo | 不需要 | 支持 | 支持 | 不支持 |
| [获取uuid](https://open.dingtalk.com/document/orgapp-client/get-uuid?#topic-2024979) | device.base.getUUID | 需要 | 支持 | 支持 | 不支持 |
| [获取热点接入信息](https://open.dingtalk.com/document/orgapp-client/queries-the-hotspot-access-information?#topic-2024980) | device.base.getInterface | 需要 | 支持 | 支持 | 不支持 |
| [读取NFC芯片内容](https://open.dingtalk.com/document/orgapp-client/read-nfc-chip-content?#topic-2024984) | device.nfc.nfcRead | 不需要 | 支持 | 不支持 | 不支持 |
| [NFC数据写入](https://open.dingtalk.com/document/orgapp-client/nfc-data-write?#topic-2024986) | device.nfc.nfcWrite | 需要 | 支持 | 不支持 | 不支持 |
| [打开iOS系统设置](https://open.dingtalk.com/document/orgapp-client/open-ios-system-settings?#topic-2166096) | device.base.openSystemSetting | 不需要 | 不支持 | 支持 | 不支持 |
| [打开Android系统设置](https://open.dingtalk.com/document/orgapp-client/open-android-system-settings?#topic-2164253) | device.base.openSystemSetting | 不需要 | 支持 | 不支持 | 不支持 |


### 日期&月历
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [日期选择器](https://open.dingtalk.com/document/orgapp-client/date-selector?#topic-2024990) | biz.util.datepicker | 不需要 | 支持 | 支持 | 不支持 |
| [时间选择器](https://open.dingtalk.com/document/orgapp-client/time-picker?#topic-2024993) | biz.util.timepicker | 不需要 | 支持 | 支持 | 不支持 |
| [日期及时间选择器](https://open.dingtalk.com/document/orgapp-client/date-and-time-selector?#topic-2024994) | biz.util.datetimepicker | 不需要 | 支持 | 支持 | 不支持 |
| [月历组件：选择某天](https://open.dingtalk.com/document/orgapp-client/monthly-calendar-component-select-a-certain-day?#topic-2025017) | biz.calendar.chooseOneDay | 不需要 | 支持 | 支持 | 不支持 |
| [月历组件：选择某时间](https://open.dingtalk.com/document/orgapp-client/monthly-calendar-component-select-a-specific-time?#topic-2025010) | biz.calendar.chooseDateTime | 不需要 | 支持 | 支持 | 不支持 |
| [月历组件：选择某天](https://open.dingtalk.com/document/orgapp-client/monthly-calendar-component-select-a-certain-day?#topic-2025017) | biz.calendar.chooseHalfDay | 不需要 | 支持 | 支持 | 不支持 |
| [月历组件：选择日期区间](https://open.dingtalk.com/document/orgapp-client/monthly-calendar-component-select-a-date-range?#topic-2025025) | biz.calendar.chooseInterval | 不需要 | 支持 | 支持 | 不支持 |

### 导航栏
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [设置导航栏颜色](https://open.dingtalk.com/document/orgapp-client/set-the-navigation-bar-color?#topic-2025074) | 拼接dd_nav_bgcolor参数 | 不需要 | 支持 | 支持 | 不支持 |
| [微应用页面支持横屏](https://open.dingtalk.com/document/orgapp-client/microapplication-page-supports-horizontal-dashboard-h5?#topic-2025075) | 拼接dd_orientation参数 | 不需要 | 支持 | 支持 | 不支持 |
| [设置左侧导航按钮文本](https://open.dingtalk.com/document/orgapp-client/set-left-navigation-button-text?#topic-2025082) | biz.navigation.setLeft | 不需要 | 不支持 | 支持 | 支持 |
| [PC端左侧按钮点击事件](https://open.dingtalk.com/document/orgapp-client/set-left-navigation-button-text?#topic-2025082) | addEventListener | 不需要 | 不支持 | 不支持 | 支持 |
| [PC端左侧按钮点击事件，移除监听回调函数](https://open.dingtalk.com/document/orgapp-client/set-left-navigation-button-text?#topic-2025082) | removeEventListener | 不需要 | 不支持 | 不支持 | 支持 |
| [设置导航栏标题](https://open.dingtalk.com/document/orgapp-client/set-the-navigation-bar-title?#topic-2025079) | biz.navigation.setTitle | 不需要 | 支持 | 支持 | 支持 |
| [标题栏添加问号图标](https://open.dingtalk.com/document/orgapp-client/title-bar-add-question-mark-icon?#topic-2025081) | biz.navigation.setIcon | 不需要 | 支持 | 支持 | 不支持 |
| [返回上一级页面](https://open.dingtalk.com/document/orgapp-client/return-to-previous-page?#topic-2025088) | biz.navigation.goBack | 不需要 | 支持 | 支持 | 不支持 |
| [关闭当前页面](https://open.dingtalk.com/document/orgapp-client/close-the-current-page?#topic-2025084) | biz.navigation.close | 不需要 | 支持 | 支持 | 不支持 |
| [替换页面](https://open.dingtalk.com/document/orgapp-client/replace-page?#topic-2025093) | biz.navigation.replace | 不需要 | 支持 | 支持 | 不支持 |
| [关闭页面](https://open.dingtalk.com/document/orgapp-client/close-page?#topic-2025085) | biz.navigation.quit | 不需要 | 不支持 | 不支持 | 支持 |

### UI控件
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [输入框](https://open.dingtalk.com/document/orgapp-client/input-box?#topic-2025243) | ui.input.plain | 不需要 | 支持 | 支持 | 不支持 |
| [设置顶部进度条颜色](https://open.dingtalk.com/document/orgapp-client/set-the-color-of-the-top-progress-bar?#topic-2025246) | ui.progressBar.setColors | 不需要 | 支持 | 支持 | 不支持 |
| [启用下拉刷新](https://open.dingtalk.com/document/orgapp-client/enable-pull-down-refresh?#topic-2025247) | ui.pullTorefresh.enable | 不需要 | 支持 | 支持 | 不支持 |
| [禁用下拉刷新](https://open.dingtalk.com/document/orgapp-client/disable-pull-down-refresh?#topic-2025252) | ui.pullToRefresh.disable | 不需要 | 支持 | 支持 | 不支持 |
| [收起下拉刷新](https://open.dingtalk.com/document/orgapp-client/refresh?#topic-2025251) | ui.pullToRefresh.stop | 不需要 | 支持 | 支持 | 不支持 |
| [禁用iOS Webview弹性效果](https://open.dingtalk.com/document/orgapp-client/disable-webview-autoscaling-for-ios?#topic-2025254) | ui.webViewBounce.disable | 不需要 | 不支持 | 支持 | 不支持 |
| [启用iOS Webview弹性效果](https://open.dingtalk.com/document/orgapp-client/enable-webview-for-ios?#topic-2025253) | ui.webViewBounce.enable | 不需要 | 不支持 | 支持 | 不支持 |

### 获取免登授权码
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [获取微应用免登授权码](https://open.dingtalk.com/document/orgapp-client/obtain-the-micro-application-logon-free-authorization-code?#topic-2024939) | runtime.permission.requestAuthCode | 不需要 | 支持 | 支持 | 支持 |
| [获取微应用反馈式操作的临时授权码](https://open.dingtalk.com/document/orgapp-client/obtain-the-temporary-authorization-code-for-micro-application-feedback-operation?#topic-2024973) | runtime.permission.requestOperateAuthCode | 需要 | 支持 | 支持 | 支持 |

### 扫码
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [扫条形码、二维码](https://open.dingtalk.com/document/orgapp-client/scan-barcodes-and-qr-codes?#topic-2025276) | biz.util.scan | 不需要 | 支持 | 支持 | 不支持 |
| [扫名片](https://open.dingtalk.com/document/orgapp-client/scan-business-cards?#topic-2025281) | biz.util.scanCard | 需要 | 支持 | 支持 | 不支持 |

### 存储
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [设置存储信息](https://open.dingtalk.com/document/orgapp-client/set-storage-information?#topic-2025181) | util.domainStorage.setItem | 不需要 | 支持 | 支持 | 不支持 |
| [获取存储信息](https://open.dingtalk.com/document/orgapp-client/obtain-storage-information?#topic-2025182) | util.domainStorage.getItem | 不需要 | 支持 | 支持 | 不支持 |
| [删除存储信息](https://open.dingtalk.com/document/orgapp-client/delete-storage-information?#topic-2025184) | util.domainStorage.removeItem | 不需要 | 支持 | 支持 | 不支持 |

### 地图
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [获取当前地理位置信息（单次定位）](https://open.dingtalk.com/document/orgapp-client/obtain-current-geographic-location-information-single-positioning?#topic-2025194) | device.geolocation.get | 需要 | 支持 | 支持 | 不支持 |
| [连续获取当前地理位置信息（持续定位）](https://open.dingtalk.com/document/orgapp-client/continuous-retrieval-of-current-geographic-information-continuous-location?#topic-2025195) | device.geolocation.start | 需要 | 支持 | 支持 | 不支持 |
| [停止连续定位](https://open.dingtalk.com/document/orgapp-client/stop-continuous-positioning?#topic-2025196) | device.geolocation.stop | 需要 | 支持 | 支持 | 不支持 |
| [批量连续定位状态](https://open.dingtalk.com/document/orgapp-client/batch-continuous-positioning-status?#topic-2025201) | device.geolocation.status | 不需要 | 支持 | 支持 | 不支持 |
| [地图定位](https://open.dingtalk.com/document/orgapp-client/map-positioning?#topic-2025206) | biz.map.locate | 需要 | 支持 | 支持 | 不支持 |
| [地图页面支持搜索](https://open.dingtalk.com/document/orgapp-client/map-page-supports-search?#topic-2025208) | biz.map.search | 需要 | 支持 | 支持 | 不支持 |
| [展示位置](https://open.dingtalk.com/document/orgapp-client/display-position?#topic-2025211) | biz.map.view | 需要 | 支持 | 支持 | 不支持 |

### 业务
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [分享](https://open.dingtalk.com/document/orgapp-client/share?#topic-2025046) | biz.util.share | 不需要 | 支持 | 支持 | 不支持 |
| [下拉控件](https://open.dingtalk.com/document/orgapp-client/drop-down-control?#topic-2025051) | biz.util.chosen | 不需要 | 支持 | 支持 | 不支持 |
| [复制到粘贴板](https://open.dingtalk.com/document/orgapp-client/copy-to-clipboard?#topic-2025056) | biz.clipboardData.setData | 需要 | 支持 | 支持 | 不支持 |
| [打开应用](https://open.dingtalk.com/document/orgapp-client/open-an-application?#topic-2152181) | biz.microApp.openApp | 不需要 | 支持 | 支持 | 不支持 |

### 文件
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [批量检测本地文件是否存在](https://open.dingtalk.com/document/orgapp-client/checks-for-local-files-in-batches?#topic-2025169) | biz.util.isLocalFileExist | 不需要 | 不支持 | 不支持 | 支持 |
| [打开本地文件](https://open.dingtalk.com/document/orgapp-client/open-a-local-file?#topic-2025172) | biz.util.openLocalFile | 不需要 | 不支持 | 不支持 | 支持 |
| [下载文件](https://open.dingtalk.com/document/orgapp-client/download-objects?#topic-2025174) | biz.util.downLoadFile | 不需要 | 不支持 | 不支持 | 支持 |

### 图片
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [图片预览](https://open.dingtalk.com/document/orgapp-client/image-preview?#topic-2025193) | biz.util.previewImage | 不需要 | 支持 | 支持 | 支持 |

### 打开新页面
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [打开应用内页面](https://open.dingtalk.com/document/orgapp-client/open-the-in-application-page?#topic-2025303) | biz.util.open | 需要 | 支持 | 支持 | 支持 |
| [打开目标页面](https://open.dingtalk.com/document/orgapp-client/open-link-on-new-window?#topic-2024672) | biz.util.openLink | 不需要 | 支持 | 支持 | 支持 |
| [打开模态框](https://open.dingtalk.com/document/orgapp-client/open-modal-box?#topic-2025304) | biz.util.openModal | 不需要 | 不支持 | 不支持 | 支持 |
| [打开侧边面板](https://open.dingtalk.com/document/orgapp-client/open-side-panel?#topic-2025305) | biz.util.openSlidePanel | 不需要 | 不支持 | 不支持 | 支持 |
| [打开链接](https://open.dingtalk.com/document/orgapp-client/open-link?#topic-2101416) | 打开音视频链接 | 需要 | 支持 | 支持 | 支持 |

### 电话
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [拨打钉钉电话](https://open.dingtalk.com/document/orgapp-client/call-dingtalk-h5?#topic-2025125) | biz.telephone.call | 需要 | 支持 | 支持 | 不支持 |
| [通用电话拨打](https://open.dingtalk.com/document/orgapp-client/universal-phone-call-h5?#topic-2025128) | biz.telephone.showCallMenu | 需要 | 支持 | 支持 | 不支持 |
| [检查某企业的办公电话开通状态](https://open.dingtalk.com/document/orgapp-client/check-the-status-of-office-telephones-of-an-enterprise-h5?#topic-2025130) | biz.telephone.checkBizCall | 需要 | 支持 | 支持 | 不支持 |
| [拨打单人电话选项（可定制）](https://open.dingtalk.com/document/orgapp-client/make-a-single-call-option-customizable-h5?#topic-2025131) | biz.telephone.quickCallList | 需要 | 支持 | 支持 | 支持 |

### 发钉
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [DING 2.0 发钉](https://open.dingtalk.com/document/orgapp-client/ding-2-0-hair-pin?#topic-2025145) | biz.ding.create | 需要 | 支持 | 支持 | 支持 |
| [DING 1.0 发钉](https://open.dingtalk.com/document/orgapp-client/ding-1-0-hair-pin?#topic-2025147) | biz.ding.post | 需要 | 不支持 | 不支持 | 支持 |

### 通讯录选人
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [PC端选择企业内部的人](https://open.dingtalk.com/document/orgapp-client/on-the-pc-select-the-person-in-the-enterprise?#topic-2025042) | biz.contact.choose | 需要 | 不支持 | 不支持 | 支持 |
| [选取手机通讯录](https://open.dingtalk.com/document/orgapp-client/select-phone-address-book?#topic-2025040) | biz.contact.chooseMobileContacts | 需要 | 支持 | 支持 | 不支持 |
| [选择部门和人](https://open.dingtalk.com/document/orgapp-client/select-department-and-person?#topic-2025035) | biz.contact.complexPicker | 需要 | 支持 | 支持 | 支持 |
| [选择部门信息](https://open.dingtalk.com/document/orgapp-client/select-department-information-h5?#topic-2025036) | biz.contact.departmentsPicker | 需要 | 支持 | 支持 | 支持 |
| [创建企业群](https://open.dingtalk.com/document/orgapp-client/create-enterprise-chat?#topic-2025037) | biz.contact.createGroup | 需要 | 支持 | 支持 | 不支持 |
| [设定规则选人](https://open.dingtalk.com/document/orgapp-client/set-up-rule-selection?#topic-2025038) | biz.contact.setRule | 需要 | 支持 | 支持 | 不支持 |

### 角色
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [选择角色组或角色](https://open.dingtalk.com/document/orgapp-client/select-a-role-group-or-role?#topic-2166332) | biz.contact.rolesPicker | 需要 | 支持 | 支持 | 不支持 |

### 外部联系人
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [选择外部联系人](https://open.dingtalk.com/document/orgapp-client/select-external-contacts?#topic-2025296) | biz.contact.externalComplexPicker | 需要 | 支持 | 支持 | 不支持 |
| [编辑外部联系人](https://open.dingtalk.com/document/orgapp-client/edit-external-contacts?#topic-2025297) | biz.contact.externalEditForm | 需要 | 支持 | 支持 | 不支持 |

### 自定义联系人
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [单选自定义联系人](https://open.dingtalk.com/document/orgapp-client/custom-radio-contact?#topic-2025300) | biz.customContact.choose | 需要 | 支持 | 支持 | 支持 |
| [多选自定义联系人](https://open.dingtalk.com/document/orgapp-client/multiple-custom-contacts?#topic-2025301) | biz.customContact.multipleChoose | 需要 | 支持 | 支持 | 支持 |

### 会话
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [获取会话信息](https://open.dingtalk.com/document/orgapp-client/obtain-session-information-h5?#topic-2152182) | biz.chat.pickConversation | 需要 | 支持 | 支持 | 支持 |
| [根据corpid选择会话](https://open.dingtalk.com/document/orgapp-client/select-session-based-on-corpid?#topic-2025118) | biz.chat.chooseConversationByCorpId | 需要 | 支持 | 支持 | 支持 |
| [打开与某个用户的单聊会话](https://open.dingtalk.com/document/orgapp-client/open-a-one-on-one-chat-session-with-a-user?#topic-2025123) | biz.chat.openSingleChat | 需要 | 支持 | 支持 | 不支持 |
| [根据chatId跳转到对应会话](https://open.dingtalk.com/document/orgapp-client/redirects-to-a-specific-session-based-on-the-chatid-h5?#topic-2152183) | biz.chat.toConversation | 需要 | 支持 | 支持 | 不支持 |

### 钉盘 
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [保存文件到钉盘](https://open.dingtalk.com/document/orgapp-client/save-file-to-nail-plate?#topic-2025187) | biz.cspace.saveFile | 需要 | 支持 | 支持 | 不支持 |
| [预览钉盘文件](https://open.dingtalk.com/document/orgapp-client/preview-nail-plate-file?#topic-2152185) | biz.cspace.preview | 需要 | 支持 | 支持 | 支持 |
| [选取钉盘目录](https://open.dingtalk.com/document/orgapp-client/select-a-pin-plate-directory-h5?#topic-2025191) | biz.cspace.chooseSpaceDir | 需要 | 支持 | 支持 | 不支持 |
| [上传附件到钉盘/从钉盘选择文件](https://open.dingtalk.com/document/orgapp-client/upload-attachment-to-nail-plate-select-file-from-nail-plate-h5?#topic-2152184) | biz.util.uploadAttachment | 需要 | 支持 | 支持 | 支持 |

### 音频接口
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [开始录音](https://open.dingtalk.com/document/orgapp-client/start-recording?#topic-2025216) | device.audio.startRecord | 需要 | 支持 | 支持 | 不支持 |
| [停止录音](https://open.dingtalk.com/document/orgapp-client/stop-recording?#topic-2025218) | device.audio.stopRecord | 需要 | 支持 | 支持 | 不支持 |
| [监听录音自动停止](https://open.dingtalk.com/document/orgapp-client/automatic-stop-of-monitoring-and-recording?#topic-2025219) | device.audio.onRecordEnd | 需要 | 支持 | 支持 | 不支持 |
| [下载音频](https://open.dingtalk.com/document/orgapp-client/download-audio?#topic-2025222) | device.audio.download | 需要 | 支持 | 支持 | 不支持 |
| [播放语音](https://open.dingtalk.com/document/orgapp-client/playback-voice?#topic-2025225) | device.audio.play | 需要 | 支持 | 支持 | 不支持 |
| [暂停播放语音](https://open.dingtalk.com/document/orgapp-client/pause-playback-of-speech?#topic-2025228) | device.audio.pause | 需要 | 支持 | 支持 | 不支持 |
| [恢复暂停播放的语音](https://open.dingtalk.com/document/orgapp-client/resume-paused-voice?#topic-2025231) | device.audio.resume | 需要 | 支持 | 支持 | 不支持 |
| [停止播放音频](https://open.dingtalk.com/document/orgapp-client/stop-audio-playback?#topic-2025232) | device.audio.stop | 需要 | 支持 | 支持 | 不支持 |
| [监听播放自动停止](https://open.dingtalk.com/document/orgapp-client/automatically-stops-playback?#topic-2025233) | device.audio.onPlayEnd | 需要 | 支持 | 支持 | 不支持 |
| [语音转文字](https://open.dingtalk.com/document/orgapp-client/voice-to-text?#topic-2025235) | device.audio.translateVoice | 需要 | 支持 | 支持 | 不支持 |

### 视频会议
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [发起视频会议](https://open.dingtalk.com/document/orgapp-client/initiate-video-conference?#topic-2025310) | biz.conference.videoConfCall | 需要 | 支持 | 支持 | 支持 |

### 在线课堂
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [发起在线课堂](https://open.dingtalk.com/document/orgapp-client/online-classroom-initiation?#topic-2025312) | biz.live.startClassRoom | 需要 | 不支持 | 不支持 | 支持 |

### 支付
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [支付接口](https://open.dingtalk.com/document/orgapp-client/payment-interface?#topic-2025283) | biz.alipay.pay | 需要 | 支持 | 支持 | 不支持 |

### 数据加解密
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [数据加密](https://open.dingtalk.com/document/orgapp-client/data-encryption?#topic-2025307) | biz.util.encrypt | 需要 | 支持 | 支持 | 不支持 |
| [数据解密](https://open.dingtalk.com/document/orgapp-client/data-decryption?#topic-2025308) | biz.util.decrypt | 需要 | 支持 | 支持 | 不支持 |

### 转屏横屏
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [微应用页面支持转屏](https://open.dingtalk.com/document/orgapp-client/microapplication-page-supports-screen-rotation?#topic-2025285) | 拼接dd_orientation=auto参数 | 不需要 | 支持 | 支持 | 不支持 |
| [微应用页面支持横屏](https://open.dingtalk.com/document/orgapp-client/microapplication-page-supports-horizontal-dashboard?#topic-2025287) | 拼接dd_orientation参数 | 不需要 | 支持 | 支持 | 不支持 |
| [微应用页面全屏展示](https://open.dingtalk.com/document/orgapp-client/full-screen-display-of-microapplication-page?#topic-2025289) | 拼接dd_full_screen=true参数 | 不需要 | 支持 | 支持 | 不支持 |
| [微应用页面导航栏透明](https://open.dingtalk.com/document/orgapp-client/the-microapplication-navigation-bar-is-transparent?#topic-2025290) | 拼接dd_nav_translucent=true参数 | 不需要 | 支持 | 支持 | 不支持 |
| [旋转屏幕](https://open.dingtalk.com/document/orgapp-client/rotate-screen?#topic-2025292) | device.screen.rotateView | 不需要 | 支持 | 支持 | 不支持 |
| [重置旋转屏幕](https://open.dingtalk.com/document/orgapp-client/reset-rotation-screen?#topic-2025294) | device.screen.resetView | 不需要 | 支持 | 支持 | 不支持 |

### 授权
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [授权获取审批实例数据](https://open.dingtalk.com/document/orgapp-client/authorize-data-approval-template-data?#topic-2152186) | biz.auth.requestAuthInfo | 需要 | 支持 | 支持 | 不支持 |
| [服务窗-获取用户授权](https://open.dingtalk.com/document/orgapp-client/obtain-user-authorization?#topic-2082957) | biz.auth.requestAuthInfo | 需要 | 支持 | 支持 | 不支持 |
| [服务窗-单聊消息授权](https://open.dingtalk.com/document/orgapp-client/single-chat-message-authorization?#topic-2082967) | biz.auth.requestAuthInfo | 需要 | 支持 | 支持 | 不支持 |

### 办公电话
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [查询企业是否已开办公电话](https://open.dingtalk.com/document/orgapp-client/check-whether-the-enterprise-has-an-office-phone-number?#topic-2079561) | biz.conference.getCloudCallInfo | 需要 | 支持 | 支持 | 支持 |
| [发起办公电话呼叫](https://open.dingtalk.com/document/orgapp-client/direct-dialing?#topic-2079562) | biz.conference.createCloudCall | 需要 | 支持 | 支持 | 支持 |
| [查询话单列表](https://open.dingtalk.com/document/orgapp-client/query-the-number-list?#topic-2079564) | biz.conference.getCloudCallList | 需要 | 支持 | 支持 | 支持 |

### 专属钉钉
| 接口说明 | JSAPI名称 | 是否需要鉴权 | Android | IOS | PC |
| :------- | :------- | :------- | :------- | :------- | :------- |
| [获取钉钉客户端是否为专属钉钉](https://open.dingtalk.com/document/orgapp-client/retrieve-user-information-info?#topic-2075595) | biz.realm.getUserExclusiveInfo | 不需要 | 支持 | 支持 | 支持 |