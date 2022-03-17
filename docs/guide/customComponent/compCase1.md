---
title: 自定义组件案例 - 页面通底
order: 6
---
:::info
说明：

- 该组件可以参考如何配置属性、配置多端等。
- **注意：该组件仅供学习使用，并不是官方提供的标准组件。**
:::
## 使用场景
**页面通底**功能常见于各种各样的网页底部，包含一些版权信息及相关链接，便于访问者进行不同页面间的跳转交互。
## 效果演示
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01MNXqqi1DqKUdhc9jd_!!6000000000267-2-tps-1706-910.png)
## 操作步骤
### 1. 新建一个自定义组件；
### 2. 开启 schame 导入功能，和宜搭表单设计器的方式一样，具体可以参考：

- 打开组件设计器，打开控制台，执行下面代码
```javascript
document.querySelector('.lc-left-area-bottom div:last-child').style.display = 'block'
```
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01WsI8gn1nRR8Ubes42_!!6000000005086-2-tps-1706-910.png)
### 3.  下面的 schema ，粘贴到组件设计器的 schema 控制台中，点击导入 schema 
```json
{
  "schemaType": "superform",
  "schemaVersion": "5.0",
  "utils": [
    {
      "name": "fusion",
      "type": "npm",
      "content": {
        "package": "@ali/vu-fusion",
        "version": "2.0.2",
        "exportName": "fusion"
      }
    },
    {
      "name": "router",
      "type": "npm",
      "content": {
        "package": "@ali/vu-router",
        "version": "1.2.1",
        "exportName": "router"
      }
    },
    {
      "name": "routerSpa",
      "type": "npm",
      "content": {
        "package": "@ali/vu-router-spa",
        "version": "1.4.5",
        "exportName": "routerSpa"
      }
    },
    {
      "name": "spm",
      "type": "npm",
      "content": {
        "package": "@ali/vu-spm",
        "version": "1.1.11",
        "exportName": "spm"
      }
    },
    {
      "name": "switchSchema",
      "type": "npm",
      "content": {
        "package": "@ali/vu-switch-schema",
        "version": "1.0.8",
        "exportName": "switchSchema"
      }
    },
    {
      "name": "legaoBuiltin",
      "type": "npm",
      "content": {
        "package": "@ali/vu-legao-builtin",
        "version": "1.5.5",
        "exportName": "legaoBuiltin"
      }
    },
    {
      "name": "dataSource",
      "type": "npm",
      "content": {
        "package": "@ali/vu-dataSource",
        "version": "1.0.4",
        "exportName": "dataSource"
      }
    },
    {
      "name": "toolkit",
      "type": "npm",
      "content": {
        "package": "@ali/vu-toolkit",
        "version": "1.2.0",
        "exportName": "toolkit"
      }
    },
    {
      "name": "formatter",
      "type": "npm",
      "content": {
        "package": "@ali/vu-formatter",
        "version": "2.0.0",
        "exportName": "formatter"
      }
    },
    {
      "name": "logic",
      "type": "npm",
      "content": {
        "package": "@ali/vu-logic",
        "version": "1.0.1",
        "exportName": "logic"
      }
    }
  ],
  "componentsMap": [
    {
      "package": "@ali/vc-deep",
      "version": "2.15.25",
      "componentName": "Image"
    },
    {
      "package": "@ali/vc-link-block",
      "version": "5.4.0",
      "componentName": "LinkBlock"
    },
    {
      "package": "@ali/vc-div",
      "version": "1.2.0",
      "componentName": "Div"
    },
    {
      "package": "@ali/vc-deep",
      "version": "2.15.25",
      "componentName": "BalloonTrigger"
    },
    {
      "package": "@ali/vc-deep",
      "version": "2.15.25",
      "componentName": "BalloonOverlay"
    },
    {
      "package": "@ali/vc-deep",
      "version": "2.15.25",
      "componentName": "Balloon"
    },
    {
      "package": "@ali/vc-text",
      "version": "4.1.1",
      "componentName": "Text"
    },
    {
      "package": "@ali/vc-link",
      "version": "5.3.1",
      "componentName": "Link"
    },
    {
      "package": "@ali/vc-slot",
      "version": "2.0.1",
      "componentName": "Slot"
    },
    {
      "package": "@ali/vc-component",
      "version": "1.4.4",
      "componentName": "Component"
    }
  ],
  "componentsTree": [
    {
      "componentName": "Component",
      "id": "node_k8bnubvz",
      "props": {
        "mobileSlot": {
          "type": "JSBlock",
          "value": {
            "componentName": "Slot",
            "children": [
              {
                "componentName": "Div",
                "id": "node_ocky2s9cxy33",
                "props": {
                  "useFieldIdAsDomId": false,
                  "customClassName": "",
                  "className": "div_kzyzxb9o",
                  "behavior": "NORMAL",
                  "__style__": ":root {\n  background: #32313c;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n}\n\n/* @media screen and ( min-width: 480px ) {\n:root {\n  display: none;\n}\n} */",
                  "fieldId": "div_kxim0jzm"
                },
                "condition": true,
                "hidden": false,
                "isLocked": false,
                "conditionGroup": "",
                "title": "",
                "children": [
                  {
                    "componentName": "Div",
                    "id": "node_ocky2s9cxy34",
                    "props": {
                      "useFieldIdAsDomId": false,
                      "customClassName": "",
                      "className": "div_kzyzxb9j",
                      "behavior": "NORMAL",
                      "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 1120px;\n  margin: 32px auto 0 auto;\n}",
                      "fieldId": "div_ky2s9jgp"
                    },
                    "condition": true,
                    "hidden": false,
                    "isLocked": false,
                    "conditionGroup": "",
                    "title": "",
                    "children": [
                      {
                        "componentName": "Div",
                        "id": "node_ocky2s9cxy35",
                        "props": {
                          "useFieldIdAsDomId": false,
                          "customClassName": "",
                          "className": "div_kzyzxb9i",
                          "behavior": "NORMAL",
                          "__style__": ":root {\n  width: 100%;\n  display: flex;\n  margin-top: 24px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n",
                          "fieldId": "div_ky2s9jgo"
                        },
                        "condition": true,
                        "hidden": false,
                        "isLocked": false,
                        "conditionGroup": "",
                        "title": "",
                        "children": [
                          {
                            "componentName": "Div",
                            "id": "node_ocky2s9cxy36",
                            "props": {
                              "useFieldIdAsDomId": false,
                              "customClassName": "",
                              "className": "div_kzyzxb9d",
                              "behavior": "NORMAL",
                              "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n",
                              "fieldId": "div_ky2s9jgd"
                            },
                            "condition": true,
                            "hidden": false,
                            "isLocked": false,
                            "conditionGroup": "",
                            "title": "",
                            "children": [
                              {
                                "componentName": "LinkBlock",
                                "id": "node_ocky2s9cxy37",
                                "props": {
                                  "link": {
                                    "type": "url",
                                    "page": "",
                                    "url": "https://www.aliwork.com/",
                                    "isBlank": true,
                                    "router": {
                                      "type": "variable",
                                      "value": {
                                        "type": "JSExpression",
                                        "value": "this.utils.router"
                                      },
                                      "variable": "this.utils.router"
                                    },
                                    "__pageList__": {
                                      "data": [],
                                      "totalCount": 0,
                                      "currentPage": 0
                                    }
                                  },
                                  "__style__": {},
                                  "fieldId": "linkBlock_ky2s9jgc"
                                },
                                "condition": true,
                                "hidden": false,
                                "isLocked": false,
                                "conditionGroup": "",
                                "title": "",
                                "children": [
                                  {
                                    "componentName": "Image",
                                    "id": "node_ocky2s9cxy38",
                                    "props": {
                                      "preview": false,
                                      "autoHeight": false,
                                      "src": {
                                        "type": "variable",
                                        "value": "https://img.alicdn.com/imgextra/i3/O1CN01p6vGCL20UGZXuYrrg_!!6000000006852-2-tps-900-265.png",
                                        "variable": "props.logo"
                                      },
                                      "alt": "Image 404",
                                      "className": "image_kzyzxb9c",
                                      "fit": "cover",
                                      "round": "0",
                                      "width": 100,
                                      "autoWidth": true,
                                      "roundRadius": "0",
                                      "__style__": ":root {\n  cursor: pointer;\n}\n",
                                      "height": 35,
                                      "fieldId": "image_ky2s9jgb"
                                    },
                                    "condition": true,
                                    "hidden": false,
                                    "isLocked": false,
                                    "conditionGroup": "",
                                    "title": ""
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "componentName": "Div",
                            "id": "node_ocky2s9cxy39",
                            "props": {
                              "useFieldIdAsDomId": false,
                              "customClassName": "",
                              "className": "div_kzyzxb9f",
                              "behavior": "NORMAL",
                              "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 32px;\n}\n",
                              "fieldId": "div_ky2s9jgg"
                            },
                            "condition": true,
                            "hidden": false,
                            "loop": {
                              "type": "variable",
                              "value": [
                                {
                                  "logo": "",
                                  "qrImage": "",
                                  "desc": ""
                                },
                                {
                                  "logo": "",
                                  "qrImage": "",
                                  "desc": ""
                                }
                              ],
                              "variable": "props.followUs"
                            },
                            "isLocked": false,
                            "conditionGroup": "",
                            "title": "",
                            "children": [
                              {
                                "componentName": "Image",
                                "id": "node_ocky2s9cxy3a",
                                "props": {
                                  "fit": "cover",
                                  "preview": false,
                                  "autoHeight": false,
                                  "round": "0",
                                  "src": {
                                    "type": "variable",
                                    "value": "https://img.alicdn.com/imgextra/i2/O1CN01vrbcCz1J8iSVXAjT0_!!6000000000984-2-tps-720-720.png",
                                    "variable": "item.qrImage"
                                  },
                                  "width": 120,
                                  "alt": "Image 404",
                                  "autoWidth": false,
                                  "roundRadius": "0",
                                  "__style__": {},
                                  "height": 120,
                                  "fieldId": "image_ky2s9jge"
                                },
                                "condition": true,
                                "hidden": false,
                                "isLocked": false,
                                "conditionGroup": "",
                                "title": ""
                              },
                              {
                                "componentName": "Text",
                                "id": "node_ocky2s9cxy3b",
                                "props": {
                                  "maxLine": 0,
                                  "showTitle": false,
                                  "contentPaddingMobile": "0",
                                  "className": "text_kzyzxb9e",
                                  "behavior": "NORMAL",
                                  "content": {
                                    "type": "variable",
                                    "value": {
                                      "use": "zh_CN",
                                      "en_US": "Tips content",
                                      "zh_CN": "长按识别二维码，关注宜搭公众号",
                                      "type": "i18n"
                                    },
                                    "variable": "item.desc"
                                  },
                                  "__style__": ":root {\n  font-size: 15px;\n  color: white;\n  line-height: 28px;\n  margin-top: 32px;\n}\n",
                                  "fieldId": "text_ky2s9jgf"
                                },
                                "condition": true,
                                "hidden": false,
                                "isLocked": false,
                                "conditionGroup": "",
                                "title": ""
                              }
                            ]
                          },
                          {
                            "componentName": "Div",
                            "id": "node_ocky2s9cxy3g",
                            "props": {
                              "useFieldIdAsDomId": false,
                              "customClassName": "",
                              "className": "div_kzyzxb9h",
                              "behavior": "NORMAL",
                              "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n}\n",
                              "fieldId": "div_ky2s9jgn"
                            },
                            "condition": true,
                            "hidden": false,
                            "isLocked": false,
                            "conditionGroup": "",
                            "title": "",
                            "children": [
                              {
                                "componentName": "LinkBlock",
                                "id": "node_ocky2s9cxy3h",
                                "props": {
                                  "link": {
                                    "type": "url",
                                    "page": "",
                                    "url": {
                                      "type": "variable",
                                      "value": "https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9/docs/6gYG9q9BkB4qDGo9",
                                      "variable": "props.contactUs[0] ? props.contactUs[0].titleLink : ''"
                                    },
                                    "isBlank": true,
                                    "router": {
                                      "type": "variable",
                                      "value": {
                                        "type": "JSExpression",
                                        "value": "this.utils.router"
                                      },
                                      "variable": "this.utils.router"
                                    },
                                    "__pageList__": {
                                      "data": [],
                                      "currentPage": 0,
                                      "totalCount": 0
                                    }
                                  },
                                  "__style__": {},
                                  "fieldId": "linkBlock_ky2s9jgm"
                                },
                                "condition": true,
                                "hidden": false,
                                "isLocked": false,
                                "conditionGroup": "",
                                "title": "",
                                "children": [
                                  {
                                    "componentName": "Text",
                                    "id": "node_ocky2s9cxy3i",
                                    "props": {
                                      "maxLine": 0,
                                      "showTitle": false,
                                      "contentPaddingMobile": "0",
                                      "className": "text_kzyzxb9g",
                                      "behavior": "NORMAL",
                                      "content": {
                                        "type": "variable",
                                        "value": {
                                          "use": "zh_CN",
                                          "en_US": "Tips content",
                                          "zh_CN": "联系我们",
                                          "type": "i18n"
                                        },
                                        "variable": "props.contactUs[0] ? props.contactUs[0].title : ''"
                                      },
                                      "__style__": ":root {\n  font-size: 15px;\n  color: #0089ff;\n  line-height: 28px;\n}\n",
                                      "fieldId": "text_ky2s9jgl"
                                    },
                                    "condition": true,
                                    "hidden": false,
                                    "isLocked": false,
                                    "conditionGroup": "",
                                    "title": ""
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "componentName": "Div",
                    "id": "node_ocky2s9cxy3j",
                    "props": {
                      "useFieldIdAsDomId": false,
                      "customClassName": "",
                      "className": "div_kzyzxb9n",
                      "behavior": "NORMAL",
                      "__style__": ":root {\n  border-top: 1px solid hsla(0,0%,93.7%,.15);\n  padding: 40px 0 40px 0;\n  margin-top: 40px;\n  width: 93%;\n}\n",
                      "fieldId": "div_ky2s9jgr"
                    },
                    "condition": true,
                    "hidden": false,
                    "isLocked": false,
                    "conditionGroup": "",
                    "title": "",
                    "children": [
                      {
                        "componentName": "Div",
                        "id": "node_ocky2s9cxy3s",
                        "props": {
                          "useFieldIdAsDomId": false,
                          "customClassName": "",
                          "className": "div_kzyzxb9m",
                          "behavior": "NORMAL",
                          "__style__": ":root {\n  display: flex;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 14px;\n  flex-direction: column;\n  align-items: center;\n}\n",
                          "fieldId": "div_ky2s9jgz"
                        },
                        "condition": true,
                        "hidden": false,
                        "isLocked": false,
                        "conditionGroup": "",
                        "title": "",
                        "children": [
                          {
                            "componentName": "Text",
                            "id": "node_ocky2s9cxy3t",
                            "props": {
                              "maxLine": 0,
                              "showTitle": false,
                              "contentPaddingMobile": "0",
                              "behavior": "NORMAL",
                              "content": {
                                "type": "variable",
                                "value": {
                                  "use": "zh_CN",
                                  "en_US": "Tips content",
                                  "zh_CN": "Copyright © 2022",
                                  "type": "i18n"
                                },
                                "variable": "`Copyright © ${new Date().getFullYear()}`"
                              },
                              "__style__": {},
                              "fieldId": "text_ky2s9jgw"
                            },
                            "condition": true,
                            "hidden": false,
                            "isLocked": false,
                            "conditionGroup": "",
                            "title": ""
                          },
                          {
                            "componentName": "Text",
                            "id": "node_ocky2s9cxy3u",
                            "props": {
                              "maxLine": 0,
                              "showTitle": false,
                              "contentPaddingMobile": "0",
                              "className": "text_kzyzxb9k",
                              "behavior": "NORMAL",
                              "content": {
                                "type": "variable",
                                "value": {
                                  "use": "zh_CN",
                                  "en_US": "Tips content",
                                  "zh_CN": "钉钉（中国）信息技术有限公司和／或其关联公司",
                                  "type": "i18n"
                                },
                                "variable": "props.copyright"
                              },
                              "__style__": ":root {\n  margin: 4px 0;\n}\n",
                              "fieldId": "text_ky2s9jgx"
                            },
                            "condition": true,
                            "hidden": false,
                            "isLocked": false,
                            "conditionGroup": "",
                            "title": ""
                          },
                          {
                            "componentName": "Text",
                            "id": "node_ocky2s9cxy3v",
                            "props": {
                              "onClick": {
                                "type": "JSExpression",
                                "value": "this.utils.legaoBuiltin.execEventFlow.bind(this, [this.onClick])",
                                "events": [
                                  {
                                    "name": "onClick",
                                    "id": "onClick",
                                    "params": {},
                                    "type": "actionRef",
                                    "uuid": "1641465112852_0"
                                  }
                                ]
                              },
                              "maxLine": 0,
                              "showTitle": false,
                              "contentPaddingMobile": "0",
                              "className": "text_kzyzxb9l",
                              "behavior": "NORMAL",
                              "content": {
                                "type": "variable",
                                "value": {
                                  "use": "zh_CN",
                                  "en_US": "Tips content",
                                  "zh_CN": "浙ICP备18037475号-4",
                                  "type": "i18n"
                                },
                                "variable": "props.reportNo"
                              },
                              "__style__": ":root {\n  cursor: pointer;\n}\n",
                              "fieldId": "text_ky2s9jgy"
                            },
                            "condition": true,
                            "hidden": false,
                            "isLocked": false,
                            "conditionGroup": "",
                            "title": ""
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "props": {
              "slotTitle": "mobile容器",
              "slotName": "mobileSlot"
            }
          }
        },
        "className": "component_kzyzxb8p",
        "useDevice": true,
        "fieldId": "symbol_k8bnubw4"
      },
      "css": ".image_kzyzxb8q {\n  cursor: pointer;\n}\n.image_kzyzxb8r {\n  cursor: pointer;\n}\n.div_kzyzxb8s {\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  padding: 6px;\n  border: 1px solid #ccc;\n  margin-right: 12px;\n}\n.balloonoverlay_kzyzxb8t {\n  width: auto;\n  height: auto;\n}\n.div_kzyzxb8u {\n  margin-top: 20px;\n}\n.div_kzyzxb8v {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.text_kzyzxb8w {\n    font-size: 16px;\n    font-weight: 600;\n    color: #192544;\n    line-height: 28px;\n    margin-bottom: 24px;\n}\n.link_kzyzxb8x {\n    color: #39435e !important;\n}\n.div_kzyzxb8y {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n      font-size: 14px;\n    font-weight: 400;\n    line-height: 34px;\n    cursor: pointer;\n}\n.text_kzyzxb8z {\n    font-size: 16px;\n    font-weight: 600;\n    color: #192544;\n    line-height: 28px;\n    margin-bottom: 24px;\n}\n.link_kzyzxb90 {\n    color: #39435e !important;\n}\n.div_kzyzxb91 {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n      font-size: 14px;\n    font-weight: 400;\n    line-height: 34px;\n    cursor: pointer;\n}\n.text_kzyzxb92 {\n    font-size: 16px;\n    font-weight: 600;\n    color: #192544;\n    line-height: 28px;\n    margin-bottom: 24px;\n}\n.link_kzyzxb93 {\n    color: #39435e !important;\n}\n.div_kzyzxb94 {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n      font-size: 14px;\n    font-weight: 400;\n    line-height: 34px;\n    cursor: pointer;\n}\n.div_kzyzxb95 {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n.div_kzyzxb96 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 40px auto 0;\n  max-width: 1120px;\n}.text_kzyzxb97 {\n  margin: 0 4px;\n}\n.text_kzyzxb98 {\n  cursor: pointer;\n}\n.div_kzyzxb99 {\n  display: flex;\n  justify-content: center;\n  color: #8e97ae;\n  font-size: 14px;\n}\n.div_kzyzxb9a {\n  margin: 40px auto 0;\n  padding: 40px 0;\n  border-top: 1px solid#e9eff7;\n  max-width: 1120px;\n}.div_kzyzxb9b {\n  border-top: 1px solid #e9eff7;\n  background: #fff;\n  margin-top: 80px;\n}\n/* @media screen and ( max-width: 480px ) {\n.div_kzyzxb9b {\n  display: none;\n}\n} */\n.image_kzyzxb9c {\n  cursor: pointer;\n}\n.div_kzyzxb9d {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.text_kzyzxb9e {\n  font-size: 15px;\n  color: white;\n  line-height: 28px;\n  margin-top: 32px;\n}\n.div_kzyzxb9f {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 32px;\n}\n.text_kzyzxb9g {\n  font-size: 15px;\n  color: #0089ff;\n  line-height: 28px;\n}\n.div_kzyzxb9h {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n}\n.div_kzyzxb9i {\n  width: 100%;\n  display: flex;\n  margin-top: 24px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.div_kzyzxb9j {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 1120px;\n  margin: 32px auto 0 auto;\n}.text_kzyzxb9k {\n  margin: 4px 0;\n}\n.text_kzyzxb9l {\n  cursor: pointer;\n}\n.div_kzyzxb9m {\n  display: flex;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 14px;\n  flex-direction: column;\n  align-items: center;\n}\n.div_kzyzxb9n {\n  border-top: 1px solid hsla(0,0%,93.7%,.15);\n  padding: 40px 0 40px 0;\n  margin-top: 40px;\n  width: 93%;\n}\n.div_kzyzxb9o {\n  background: #32313c;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n}\n\n/* @media screen and ( min-width: 480px ) {\n.div_kzyzxb9o {\n  display: none;\n}\n} */",
      "defaultProps": {
        "copyright": "钉钉（中国）信息技术有限公司和／或其关联公司",
        "reportNo": "浙ICP备18037475号-4",
        "reportNoLink": "http://beian.miit.gov.cn/?spm=a1z332.10384403.0.0.45031b53mow1a8",
        "quickEntry": "[\n  {\n    \"title\": \"帮助中心\",\n    \"titleLink\": \"https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9\"\n  },\n  {\n    \"title\": \"版本\",\n    \"titleLink\": \"https://www.aliwork.com/price.html\"\n  },\n  {\n    \"title\": \"社区\",\n    \"titleLink\": \"https://www.yuque.com/yida/topics\"\n  },\n  {\n    \"title\": \"开发者中心\",\n    \"titleLink\": \"https://www.aliwork.com/developer/\"\n  }\n]",
        "more": "[\n  {\n    \"title\": \"关于宜搭\",\n    \"titleLink\": \"https://www.aliwork.com\"\n  },\n  {\n    \"title\": \"向团队推荐宜搭\",\n    \"titleLink\": \"\"\n  },\n  {\n    \"title\": \"更新日志\",\n    \"titleLink\": \"https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9\"\n  }\n]",
        "contactUs": "[\n  {\n    \"title\": \"售前咨询\",\n    \"titleLink\": \"https://partner.dingtalk.com/opportunity_web.html?templateId=3fe61c97b34b4fa2b1582c52690c1471&channel=%E5%94%AE%E5%89%8D%E5%92%A8%E8%AF%A2-%E5%B0%8F%E8%9C%9C#/consultingService\"\n  },\n  {\n    \"title\": \"技术支持\",\n    \"titleLink\": \"https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9/docs/6gYG9q9BkB4qDGo9\"\n  }\n]",
        "logo": "https://img.alicdn.com/imgextra/i2/O1CN01H3ajqP1bxF9chDQmu_!!6000000003531-55-tps-131-32.svg",
        "followUs": "[\n  {\n    \"logo\": \"https://img.alicdn.com/imgextra/i1/O1CN01qCuWCY1TpRZCbAvH5_!!6000000002431-2-tps-200-200.png\",\n    \"qrImage\": \"https://img.alicdn.com/imgextra/i1/O1CN01HT2SkP1dFqwbn5ouh_!!6000000003707-2-tps-310-312.png\",\n    \"desc\": \"长按识别二维码，关注宜搭公众号\"\n  },\n  {\n    \"logo\": \"https://img.alicdn.com/imgextra/i2/O1CN01SCwX3r20NOdLIfobM_!!6000000006837-2-tps-200-200.png\",\n    \"qrImage\": \"https://img.alicdn.com/imgextra/i2/O1CN01vrbcCz1J8iSVXAjT0_!!6000000000984-2-tps-720-720.png\",\n    \"desc\": \"识别二维码，关注宜搭服务窗\"\n  }\n]"
      },
      "methods": {
        "__initMethods__": {
          "type": "js",
          "source": "function (exports, module) { /*set actions code here*/ }",
          "compiled": "function (exports, module) { /*set actions code here*/ }"
        }
      },
      "loopArgs": [
        "item",
        "index"
      ],
      "lifeCycles": {
        "constructor": {
          "type": "js",
          "compiled": "function constructor() {\nvar module = { exports: {} };\nvar _this = this;\nthis.__initMethods__(module.exports, module);\nObject.keys(module.exports).forEach(function(item) {\n  if(typeof module.exports[item] === 'function'){\n    _this[item] = module.exports[item];\n  }\n});\n\n}",
          "source": "function constructor() {\nvar module = { exports: {} };\nvar _this = this;\nthis.__initMethods__(module.exports, module);\nObject.keys(module.exports).forEach(function(item) {\n  if(typeof module.exports[item] === 'function'){\n    _this[item] = module.exports[item];\n  }\n});\n\n}"
        }
      },
      "condition": true,
      "propTypes": [
        {
          "defaultValue": "钉钉（中国）信息技术有限公司和／或其关联公司",
          "display": "block",
          "name": "copyright",
          "title": "copyright",
          "type": "string",
          "setter": "TextSetter"
        },
        {
          "defaultValue": "浙ICP备18037475号-4",
          "display": "block",
          "name": "reportNo",
          "title": "报备号",
          "type": "string",
          "setter": "TextSetter"
        },
        {
          "defaultValue": "http://beian.miit.gov.cn/?spm=a1z332.10384403.0.0.45031b53mow1a8",
          "display": "block",
          "name": "reportNoLink",
          "title": "报备号链接",
          "type": "string",
          "setter": "TextSetter"
        },
        {
          "defaultValue": "[\n  {\n    \"title\": \"帮助中心\",\n    \"titleLink\": \"https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9\"\n  },\n  {\n    \"title\": \"版本\",\n    \"titleLink\": \"https://www.aliwork.com/price.html\"\n  },\n  {\n    \"title\": \"社区\",\n    \"titleLink\": \"https://www.yuque.com/yida/topics\"\n  },\n  {\n    \"title\": \"开发者中心\",\n    \"titleLink\": \"https://www.aliwork.com/developer/\"\n  }\n]",
          "display": "block",
          "name": "quickEntry",
          "setterProps": {
            "editable": true,
            "checkField": false,
            "configure": [
              {
                "name": "title",
                "title": "title",
                "setter": "TextSetter"
              },
              {
                "name": "titleLink",
                "title": "跳转地址",
                "setter": "TextSetter"
              }
            ]
          },
          "configure": [
            {
              "name": "title",
              "title": "title",
              "setter": "TextSetter"
            },
            {
              "name": "titleLink",
              "title": "跳转地址",
              "setter": "TextSetter"
            }
          ],
          "title": "快捷入口",
          "type": "array",
          "setter": "ListSetter"
        },
        {
          "defaultValue": "[\n  {\n    \"title\": \"关于宜搭\",\n    \"titleLink\": \"https://www.aliwork.com\"\n  },\n  {\n    \"title\": \"向团队推荐宜搭\",\n    \"titleLink\": \"\"\n  },\n  {\n    \"title\": \"更新日志\",\n    \"titleLink\": \"https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9\"\n  }\n]",
          "display": "block",
          "name": "more",
          "setterProps": {
            "editable": true,
            "checkField": false,
            "configure": [
              {
                "name": "title",
                "title": "title",
                "setter": "TextSetter"
              },
              {
                "name": "titleLink",
                "title": "跳转地址",
                "setter": "TextSetter"
              }
            ]
          },
          "configure": [
            {
              "name": "title",
              "title": "title",
              "setter": "TextSetter"
            },
            {
              "name": "titleLink",
              "title": "跳转地址",
              "setter": "TextSetter"
            }
          ],
          "title": "更多",
          "type": "array",
          "setter": "ListSetter"
        },
        {
          "defaultValue": "[\n  {\n    \"title\": \"售前咨询\",\n    \"titleLink\": \"https://partner.dingtalk.com/opportunity_web.html?templateId=3fe61c97b34b4fa2b1582c52690c1471&channel=%E5%94%AE%E5%89%8D%E5%92%A8%E8%AF%A2-%E5%B0%8F%E8%9C%9C#/consultingService\"\n  },\n  {\n    \"title\": \"技术支持\",\n    \"titleLink\": \"https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9/docs/6gYG9q9BkB4qDGo9\"\n  }\n]",
          "display": "block",
          "name": "contactUs",
          "setterProps": {
            "editable": true,
            "checkField": false,
            "configure": [
              {
                "name": "title",
                "title": "title",
                "setter": "TextSetter"
              },
              {
                "name": "titleLink",
                "title": "跳转链接",
                "setter": "TextSetter"
              }
            ]
          },
          "configure": [
            {
              "name": "title",
              "title": "title",
              "setter": "TextSetter"
            },
            {
              "name": "titleLink",
              "title": "跳转链接",
              "setter": "TextSetter"
            }
          ],
          "title": "联系我们",
          "type": "array",
          "setter": "ListSetter"
        },
        {
          "tipContent": "100 x 35",
          "defaultValue": "https://img.alicdn.com/imgextra/i2/O1CN01H3ajqP1bxF9chDQmu_!!6000000003531-55-tps-131-32.svg",
          "display": "block",
          "name": "logo",
          "setterProps": {},
          "title": "logo",
          "type": "string",
          "setter": "ImageSetter"
        },
        {
          "defaultValue": "[\n  {\n    \"logo\": \"https://img.alicdn.com/imgextra/i1/O1CN01qCuWCY1TpRZCbAvH5_!!6000000002431-2-tps-200-200.png\",\n    \"qrImage\": \"https://img.alicdn.com/imgextra/i1/O1CN01HT2SkP1dFqwbn5ouh_!!6000000003707-2-tps-310-312.png\",\n    \"desc\": \"长按识别二维码，关注宜搭公众号\"\n  },\n  {\n    \"logo\": \"https://img.alicdn.com/imgextra/i2/O1CN01SCwX3r20NOdLIfobM_!!6000000006837-2-tps-200-200.png\",\n    \"qrImage\": \"https://img.alicdn.com/imgextra/i2/O1CN01vrbcCz1J8iSVXAjT0_!!6000000000984-2-tps-720-720.png\",\n    \"desc\": \"识别二维码，关注宜搭服务窗\"\n  }\n]",
          "display": "block",
          "name": "followUs",
          "setterProps": {
            "editable": true,
            "checkField": false,
            "configure": [
              {
                "name": "logo",
                "title": "logo",
                "setter": "ImageSetter"
              },
              {
                "name": "qrImage",
                "title": "二维码图片",
                "setter": "ImageSetter"
              },
              {
                "name": "desc",
                "title": "描述",
                "setter": "TextSetter"
              }
            ]
          },
          "configure": [
            {
              "name": "logo",
              "title": "logo",
              "setter": "ImageSetter"
            },
            {
              "name": "qrImage",
              "title": "二维码图片",
              "setter": "ImageSetter"
            },
            {
              "name": "desc",
              "title": "描述",
              "setter": "TextSetter"
            }
          ],
          "title": "关注我们",
          "type": "array",
          "setter": "ListSetter"
        }
      ],
      "state": {},
      "dataSource": {
        "offline": [],
        "globalConfig": {},
        "online": [
          {
            "isReadonly": true,
            "formUuid": "OJYJ0B3W-2WJEBXWE4PQFV556VLL52-8RM24E8K-0",
            "name": "urlParams",
            "description": "URL 上 querystring 解析后的对象",
            "id": "3JA66RC1-DEEXINY82E6Z65RZI2X32-BQSOGFZK-5",
            "protocal": "URI"
          }
        ],
        "list": [
          {
            "isReadonly": true,
            "formUuid": "OJYJ0B3W-2WJEBXWE4PQFV556VLL52-8RM24E8K-0",
            "name": "urlParams",
            "description": "URL 上 querystring 解析后的对象",
            "id": "3JA66RC1-DEEXINY82E6Z65RZI2X32-BQSOGFZK-5",
            "protocal": "URI"
          }
        ],
        "sync": true
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Div",
          "id": "node_ocky2s9cxy1c",
          "props": {
            "useFieldIdAsDomId": false,
            "customClassName": "",
            "className": "div_kzyzxb9b",
            "behavior": "NORMAL",
            "__style__": ":root {\n  border-top: 1px solid #e9eff7;\n  background: #fff;\n  margin-top: 80px;\n}\n/* @media screen and ( max-width: 480px ) {\n:root {\n  display: none;\n}\n} */\n",
            "fieldId": "div_kxijgykx"
          },
          "condition": true,
          "hidden": false,
          "title": "",
          "isLocked": false,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Div",
              "id": "node_ocky2s9cxy1d",
              "props": {
                "useFieldIdAsDomId": false,
                "customClassName": "",
                "className": "div_kzyzxb96",
                "behavior": "NORMAL",
                "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 40px auto 0;\n  max-width: 1120px;\n}",
                "fieldId": "div_ky2s9jg8"
              },
              "condition": true,
              "hidden": false,
              "title": "",
              "isLocked": false,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Div",
                  "id": "node_ocky2s9cxy1e",
                  "props": {
                    "useFieldIdAsDomId": false,
                    "customClassName": "",
                    "className": "div_kzyzxb95",
                    "behavior": "NORMAL",
                    "__style__": ":root {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n",
                    "fieldId": "div_ky2s9jg7"
                  },
                  "condition": true,
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Div",
                      "id": "node_ocky2s9cxy1f",
                      "props": {
                        "useFieldIdAsDomId": false,
                        "customClassName": "",
                        "className": "div_kzyzxb8v",
                        "behavior": "NORMAL",
                        "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n",
                        "fieldId": "div_ky2s9jfo"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "LinkBlock",
                          "id": "node_ocky2s9cxy1g",
                          "props": {
                            "link": {
                              "type": "url",
                              "page": "",
                              "url": "https://www.aliwork.com/",
                              "isBlank": true,
                              "router": {
                                "type": "variable",
                                "value": {
                                  "type": "JSExpression",
                                  "value": "this.utils.router"
                                },
                                "variable": "this.utils.router"
                              },
                              "__pageList__": {
                                "data": [],
                                "totalCount": 0,
                                "currentPage": 0
                              }
                            },
                            "__style__": {},
                            "fieldId": "linkBlock_ky2s9jfa"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Image",
                              "id": "node_ocky2s9cxy1h",
                              "props": {
                                "preview": false,
                                "autoHeight": true,
                                "src": {
                                  "type": "variable",
                                  "value": "https://img.alicdn.com/imgextra/i2/O1CN01H3ajqP1bxF9chDQmu_!!6000000003531-55-tps-131-32.svg",
                                  "variable": "props.logo"
                                },
                                "alt": "Image 404",
                                "className": "image_kzyzxb8q",
                                "fit": "cover",
                                "round": "0",
                                "width": 100,
                                "autoWidth": true,
                                "roundRadius": "0",
                                "__style__": ":root {\n  cursor: pointer;\n}\n",
                                "height": 35,
                                "fieldId": "image_ky2s9jf9"
                              },
                              "condition": true,
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "conditionGroup": ""
                            }
                          ]
                        },
                        {
                          "componentName": "Div",
                          "id": "node_ocky2s9cxy1i",
                          "props": {
                            "useFieldIdAsDomId": false,
                            "customClassName": "",
                            "className": "div_kzyzxb8u",
                            "behavior": "NORMAL",
                            "__style__": ":root {\n  margin-top: 20px;\n}\n",
                            "fieldId": "div_ky2s9jfn"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Balloon",
                              "id": "node_ocky2s9cxy1j",
                              "props": {
                                "visible": false,
                                "closable": false,
                                "display": "inline-block",
                                "align": "b",
                                "type": "normal",
                                "content": {
                                  "use": "zh_CN",
                                  "en_US": "content",
                                  "zh_CN": "提示内容",
                                  "type": "i18n"
                                },
                                "balloonOverlayVisible": true,
                                "delay": "",
                                "needAdjust": true,
                                "defaultVisible": false,
                                "overlayMaxWidth": "1000px",
                                "triggerType": "hover",
                                "TYPE": "balloon",
                                "fieldId": "balloon_ky2s9jfe",
                                "CONTROL": false
                              },
                              "condition": true,
                              "loop": {
                                "type": "variable",
                                "value": [
                                  {
                                    "logo": "",
                                    "qrImage": "",
                                    "desc": ""
                                  },
                                  {
                                    "logo": "",
                                    "qrImage": "",
                                    "desc": ""
                                  },
                                  {
                                    "logo": "",
                                    "qrImage": "",
                                    "desc": ""
                                  }
                                ],
                                "variable": "props.followUs"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "BalloonTrigger",
                                  "id": "node_ocky2s9cxy1k",
                                  "props": {
                                    "__style__": {}
                                  },
                                  "condition": true,
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "conditionGroup": "",
                                  "children": [
                                    {
                                      "componentName": "Div",
                                      "id": "node_ocky2s9cxy1l",
                                      "props": {
                                        "useFieldIdAsDomId": false,
                                        "customClassName": "",
                                        "className": "div_kzyzxb8s",
                                        "behavior": "NORMAL",
                                        "__style__": ":root {\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  padding: 6px;\n  border: 1px solid #ccc;\n  margin-right: 12px;\n}\n",
                                        "fieldId": "div_ky2s9jfc"
                                      },
                                      "condition": true,
                                      "hidden": false,
                                      "title": "",
                                      "isLocked": false,
                                      "conditionGroup": "",
                                      "children": [
                                        {
                                          "componentName": "Image",
                                          "id": "node_ocky2s9cxy1m",
                                          "props": {
                                            "preview": false,
                                            "autoHeight": false,
                                            "src": {
                                              "type": "variable",
                                              "value": "https://img.alicdn.com/imgextra/i1/O1CN01qCuWCY1TpRZCbAvH5_!!6000000002431-2-tps-200-200.png",
                                              "variable": "item.logo"
                                            },
                                            "alt": "Image 404",
                                            "className": "image_kzyzxb8r",
                                            "fit": "cover",
                                            "round": "0",
                                            "width": 24,
                                            "autoWidth": false,
                                            "roundRadius": "0",
                                            "__style__": ":root {\n  cursor: pointer;\n}\n",
                                            "height": 24,
                                            "fieldId": "image_ky2s9jfb"
                                          },
                                          "condition": true,
                                          "hidden": false,
                                          "title": "",
                                          "isLocked": false,
                                          "conditionGroup": ""
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "componentName": "BalloonOverlay",
                                  "id": "node_ocky2s9cxy1n",
                                  "props": {
                                    "className": "balloonoverlay_kzyzxb8t",
                                    "__style__": ":root {\n  width: auto;\n  height: auto;\n}\n"
                                  },
                                  "condition": true,
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "conditionGroup": "",
                                  "children": [
                                    {
                                      "componentName": "Image",
                                      "id": "node_ocky2s9cxy1o",
                                      "props": {
                                        "fit": "cover",
                                        "preview": false,
                                        "autoHeight": false,
                                        "round": "0",
                                        "src": {
                                          "type": "variable",
                                          "value": "https://img.alicdn.com/imgextra/i1/O1CN01HT2SkP1dFqwbn5ouh_!!6000000003707-2-tps-310-312.png",
                                          "variable": "item.qrImage"
                                        },
                                        "width": 90,
                                        "alt": "Image 404",
                                        "autoWidth": false,
                                        "roundRadius": "0",
                                        "__style__": {},
                                        "height": 90,
                                        "fieldId": "image_ky2s9jfd"
                                      },
                                      "condition": true,
                                      "hidden": false,
                                      "title": "",
                                      "isLocked": false,
                                      "conditionGroup": ""
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "componentName": "Div",
                      "id": "node_ocky2s9cxy21",
                      "props": {
                        "useFieldIdAsDomId": false,
                        "customClassName": "",
                        "behavior": "NORMAL",
                        "__style__": {},
                        "fieldId": "div_ky2s9jfv"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Text",
                          "id": "node_ocky2s9cxy22",
                          "props": {
                            "maxLine": 0,
                            "showTitle": false,
                            "contentPaddingMobile": "0",
                            "className": "text_kzyzxb8w",
                            "behavior": "NORMAL",
                            "content": {
                              "use": "zh_CN",
                              "en_US": "Tips content",
                              "zh_CN": "快捷入口",
                              "type": "i18n"
                            },
                            "__style__": ":root {\n    font-size: 16px;\n    font-weight: 600;\n    color: #192544;\n    line-height: 28px;\n    margin-bottom: 24px;\n}\n",
                            "fieldId": "text_ky2s9jfp"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": ""
                        },
                        {
                          "componentName": "Div",
                          "id": "node_ocky2s9cxy23",
                          "props": {
                            "useFieldIdAsDomId": false,
                            "customClassName": "",
                            "className": "div_kzyzxb8y",
                            "behavior": "NORMAL",
                            "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n      font-size: 14px;\n    font-weight: 400;\n    line-height: 34px;\n    cursor: pointer;\n}\n",
                            "fieldId": "div_ky2s9jfu"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Link",
                              "id": "node_ocky2s9cxy24",
                              "props": {
                                "link": {
                                  "type": "url",
                                  "page": "",
                                  "url": {
                                    "type": "variable",
                                    "value": "https://alidocs.dingtalk.com/i/p/6gYG95Vo1D8nVGo9",
                                    "variable": "item.titleLink"
                                  },
                                  "isBlank": true,
                                  "router": {
                                    "type": "variable",
                                    "value": {
                                      "type": "JSExpression",
                                      "value": "this.utils.router"
                                    },
                                    "variable": "this.utils.router"
                                  },
                                  "__pageList__": {
                                    "data": [],
                                    "currentPage": 0,
                                    "totalCount": 0
                                  }
                                },
                                "className": "link_kzyzxb8x",
                                "textOverflow": false,
                                "content": {
                                  "type": "variable",
                                  "value": {
                                    "use": "zh_CN",
                                    "en_US": "link text",
                                    "zh_CN": "帮助中心",
                                    "type": "i18n"
                                  },
                                  "variable": "item.title"
                                },
                                "__style__": ":root {\n    color: #39435e !important;\n}\n",
                                "fieldId": "link_ky2s9jfq"
                              },
                              "condition": true,
                              "loop": {
                                "type": "variable",
                                "value": [
                                  {
                                    "title": "帮助中心",
                                    "titleLink": ""
                                  },
                                  {
                                    "title": "版本",
                                    "titleLink": ""
                                  },
                                  {
                                    "title": "社区",
                                    "titleLink": ""
                                  },
                                  {
                                    "title": "开发者中心",
                                    "titleLink": ""
                                  }
                                ],
                                "variable": "props.quickEntry"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "conditionGroup": ""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "componentName": "Div",
                      "id": "node_ocky2s9cxy28",
                      "props": {
                        "useFieldIdAsDomId": false,
                        "customClassName": "",
                        "behavior": "NORMAL",
                        "__style__": {},
                        "fieldId": "div_ky2s9jg1"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Text",
                          "id": "node_ocky2s9cxy29",
                          "props": {
                            "maxLine": 0,
                            "showTitle": false,
                            "contentPaddingMobile": "0",
                            "className": "text_kzyzxb8z",
                            "behavior": "NORMAL",
                            "content": {
                              "use": "zh_CN",
                              "en_US": "Tips content",
                              "zh_CN": "更多",
                              "type": "i18n"
                            },
                            "__style__": ":root {\n    font-size: 16px;\n    font-weight: 600;\n    color: #192544;\n    line-height: 28px;\n    margin-bottom: 24px;\n}\n",
                            "fieldId": "text_ky2s9jfw"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": ""
                        },
                        {
                          "componentName": "Div",
                          "id": "node_ocky2s9cxy2a",
                          "props": {
                            "useFieldIdAsDomId": false,
                            "customClassName": "",
                            "className": "div_kzyzxb91",
                            "behavior": "NORMAL",
                            "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n      font-size: 14px;\n    font-weight: 400;\n    line-height: 34px;\n    cursor: pointer;\n}\n",
                            "fieldId": "div_ky2s9jg0"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Link",
                              "id": "node_ocky2s9cxy2b",
                              "props": {
                                "link": {
                                  "type": "url",
                                  "url": {
                                    "type": "variable",
                                    "value": "https://www.aliwork.com",
                                    "variable": "item.titleLink"
                                  },
                                  "isBlank": true,
                                  "router": {
                                    "type": "variable",
                                    "value": {
                                      "type": "JSExpression",
                                      "value": "this.utils.router"
                                    },
                                    "variable": "this.utils.router"
                                  },
                                  "__pageList__": {
                                    "data": [],
                                    "totalCount": 0,
                                    "currentPage": 0
                                  }
                                },
                                "className": "link_kzyzxb90",
                                "textOverflow": false,
                                "content": {
                                  "type": "variable",
                                  "value": {
                                    "use": "zh_CN",
                                    "en_US": "link text",
                                    "zh_CN": "关于宜搭",
                                    "type": "i18n"
                                  },
                                  "variable": "item.title"
                                },
                                "__style__": ":root {\n    color: #39435e !important;\n}\n",
                                "fieldId": "link_ky2s9jfx"
                              },
                              "condition": true,
                              "loop": {
                                "type": "variable",
                                "value": [
                                  {
                                    "title": "关于宜搭",
                                    "titleLink": ""
                                  },
                                  {
                                    "title": "向团队推荐宜搭",
                                    "titleLink": ""
                                  },
                                  {
                                    "title": "更多日志",
                                    "titleLink": ""
                                  }
                                ],
                                "variable": "props.more"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "conditionGroup": ""
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "componentName": "Div",
                      "id": "node_ocky2s9cxy2e",
                      "props": {
                        "useFieldIdAsDomId": false,
                        "customClassName": "",
                        "behavior": "NORMAL",
                        "__style__": {},
                        "fieldId": "div_ky2s9jg6"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Text",
                          "id": "node_ocky2s9cxy2f",
                          "props": {
                            "maxLine": 0,
                            "showTitle": false,
                            "contentPaddingMobile": "0",
                            "className": "text_kzyzxb92",
                            "behavior": "NORMAL",
                            "content": {
                              "use": "zh_CN",
                              "en_US": "Tips content",
                              "zh_CN": "联系我们",
                              "type": "i18n"
                            },
                            "__style__": ":root {\n    font-size: 16px;\n    font-weight: 600;\n    color: #192544;\n    line-height: 28px;\n    margin-bottom: 24px;\n}\n",
                            "fieldId": "text_ky2s9jg2"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": ""
                        },
                        {
                          "componentName": "Div",
                          "id": "node_ocky2s9cxy2g",
                          "props": {
                            "useFieldIdAsDomId": false,
                            "customClassName": "",
                            "className": "div_kzyzxb94",
                            "behavior": "NORMAL",
                            "__style__": ":root {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n      font-size: 14px;\n    font-weight: 400;\n    line-height: 34px;\n    cursor: pointer;\n}\n",
                            "fieldId": "div_ky2s9jg5"
                          },
                          "condition": true,
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Link",
                              "id": "node_ocky2s9cxy2h",
                              "props": {
                                "link": {
                                  "type": "url",
                                  "page": "",
                                  "url": {
                                    "type": "variable",
                                    "value": "https://partner.dingtalk.com/opportunity_web.html?templateId=3fe61c97b34b4fa2b1582c52690c1471&channel=%E5%94%AE%E5%89%8D%E5%92%A8%E8%AF%A2-%E5%B0%8F%E8%9C%9C#/consultingService",
                                    "variable": "item.titleLink"
                                  },
                                  "isBlank": true,
                                  "router": {
                                    "type": "variable",
                                    "value": {
                                      "type": "JSExpression",
                                      "value": "this.utils.router"
                                    },
                                    "variable": "this.utils.router"
                                  },
                                  "__pageList__": {
                                    "data": [],
                                    "currentPage": 0,
                                    "totalCount": 0
                                  }
                                },
                                "className": "link_kzyzxb93",
                                "textOverflow": false,
                                "content": {
                                  "type": "variable",
                                  "value": {
                                    "use": "zh_CN",
                                    "en_US": "link text",
                                    "zh_CN": "售前咨询",
                                    "type": "i18n"
                                  },
                                  "variable": "item.title"
                                },
                                "__style__": ":root {\n    color: #39435e !important;\n}\n",
                                "fieldId": "link_ky2s9jg3"
                              },
                              "condition": true,
                              "loop": {
                                "type": "variable",
                                "value": [
                                  {
                                    "title": "售前咨询",
                                    "titleLink": ""
                                  },
                                  {
                                    "title": "技术支持",
                                    "titleLink": ""
                                  }
                                ],
                                "variable": "props.contactUs"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "conditionGroup": ""
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "componentName": "Div",
              "id": "node_ocky2s9cxy2j",
              "props": {
                "useFieldIdAsDomId": false,
                "customClassName": "",
                "className": "div_kzyzxb9a",
                "behavior": "NORMAL",
                "__style__": ":root {\n  margin: 40px auto 0;\n  padding: 40px 0;\n  border-top: 1px solid#e9eff7;\n  max-width: 1120px;\n}",
                "fieldId": "div_ky2s9jga"
              },
              "condition": true,
              "hidden": false,
              "title": "",
              "isLocked": false,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Div",
                  "id": "node_ocky2s9cxy3m",
                  "props": {
                    "useFieldIdAsDomId": false,
                    "customClassName": "",
                    "className": "div_kzyzxb99",
                    "behavior": "NORMAL",
                    "__style__": ":root {\n  display: flex;\n  justify-content: center;\n  color: #8e97ae;\n  font-size: 14px;\n}\n",
                    "fieldId": "div_ky2s9jgs"
                  },
                  "condition": true,
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Text",
                      "id": "node_ocky2s9cxy3n",
                      "props": {
                        "maxLine": 0,
                        "showTitle": false,
                        "contentPaddingMobile": "0",
                        "behavior": "NORMAL",
                        "content": {
                          "type": "variable",
                          "value": {
                            "use": "zh_CN",
                            "en_US": "Tips content",
                            "zh_CN": "Copyright © 2022",
                            "type": "i18n"
                          },
                          "variable": "`Copyright © ${new Date().getFullYear()}`"
                        },
                        "__style__": {},
                        "fieldId": "text_ky2s9jgt"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": ""
                    },
                    {
                      "componentName": "Text",
                      "id": "node_ocky2s9cxy3o",
                      "props": {
                        "maxLine": 0,
                        "showTitle": false,
                        "contentPaddingMobile": "0",
                        "className": "text_kzyzxb97",
                        "behavior": "NORMAL",
                        "content": {
                          "type": "variable",
                          "value": {
                            "use": "zh_CN",
                            "en_US": "Tips content",
                            "zh_CN": "钉钉（中国）信息技术有限公司和／或其关联公司",
                            "type": "i18n"
                          },
                          "variable": "props.copyright"
                        },
                        "__style__": ":root {\n  margin: 0 4px;\n}\n",
                        "fieldId": "text_ky2s9jgu"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": ""
                    },
                    {
                      "componentName": "Text",
                      "id": "node_ocky2s9cxy3p",
                      "props": {
                        "onClick": {
                          "type": "JSExpression",
                          "value": "this.utils.legaoBuiltin.execEventFlow.bind(this, [this.onClick])",
                          "events": [
                            {
                              "name": "onClick",
                              "id": "onClick",
                              "params": {},
                              "type": "actionRef",
                              "uuid": "1641465112852_0"
                            }
                          ]
                        },
                        "maxLine": 0,
                        "showTitle": false,
                        "contentPaddingMobile": "0",
                        "className": "text_kzyzxb98",
                        "behavior": "NORMAL",
                        "content": {
                          "type": "variable",
                          "value": {
                            "use": "zh_CN",
                            "en_US": "Tips content",
                            "zh_CN": "浙ICP备18037475号-4",
                            "type": "i18n"
                          },
                          "variable": "props.reportNo"
                        },
                        "__style__": ":root {\n  cursor: pointer;\n}\n",
                        "fieldId": "text_ky2s9jgv"
                      },
                      "condition": true,
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "conditionGroup": ""
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "actions": {
    "module": {
      "compiled": "\"use strict\";\n\nexports.__esModule = true;\nexports.onClick = onClick;\n\n/**\n* text onClick\n*/\nfunction onClick() {\n  window.open(this.props.reportNoLink);\n}",
      "source": " \n /**\n* text onClick\n*/\nexport function onClick(){\n  window.open(this.props.reportNoLink);  \n}"
    },
    "type": "FUNCTION",
    "list": [
      {
        "id": "onClick",
        "title": "onClick"
      }
    ]
  }
}
```
