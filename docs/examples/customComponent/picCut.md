---
title: 图片裁剪上传（中阶）
order: 2
---

:::info
- 该组件可以参考如何通过普通组件做一个表单组件的能力
- **注意：该组件仅供学习使用，并不是官方提供的标准组件。**
:::

## 使用场景

- 宜搭组件发布了一个自定义组件的功能，支持用低代码的方式做一个组件，但并不支持表单组件，只能做些展示型的组件。
- 但文档上提示可以用已有的表单做存储，利用这种方式实现了个图片剪裁上传的组件，通过生成一个新的表单来存储数据，从而模拟出一个伪表单组件。

## 效果演示

<video width="100%" controls>
  <source src="https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/366306815280.mp4" type="video/mp4"></source>
</video>

## 组件Schema
开发者可以[参考导入已有组件Schema文档](/docs/guide/concept/customComponent#导入自定义组件-schema)导入以下组件Schema：

```json
{
  "schemaType": "superform",
  "schemaVersion": "5.0",
  "utils": [],
  "componentsMap": [
    {
      "package": "@ali/vc-deep-yida",
      "version": "1.5.112",
      "componentName": "ImageField"
    },
    {
      "package": "@ali/vc-deep-yida",
      "version": "1.5.112",
      "componentName": "Jsx"
    },
    {
      "package": "@ali/vc-deep-yida",
      "version": "1.5.112",
      "componentName": "Dialog"
    },
    {
      "package": "@ali/vc-deep-yida",
      "version": "1.5.112",
      "componentName": "Text"
    },
    {
      "package": "@ali/vc-deep-yida",
      "version": "1.5.112",
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
                "componentName": "Text",
                "id": "node_ockzmfyu4f2",
                "props": {
                  "maxLine": 0,
                  "showTitle": false,
                  "contentPaddingMobile": "0",
                  "behavior": "NORMAL",
                  "content": {
                    "en_US": "Title",
                    "zh_CN": "页面标题",
                    "type": "i18n"
                  },
                  "__style__": {},
                  "fieldId": "text_kzmfyv1m"
                },
                "condition": true,
                "hidden": false,
                "isLocked": false,
                "conditionGroup": "",
                "title": ""
              }
            ],
            "props": {
              "slotTitle": "mobile容器",
              "slotName": "mobileSlot"
            }
          }
        },
        "className": "component_k8e4naln",
        "useDevice": false,
        "fieldId": "symbol_k8bnubw4"
      },
      "css": ".imagefield_kzmrm1kd {\n\n}\n",
      "defaultProps": {
        "buttonTitle": {
          "en_US": "上传图片",
          "use": "zh_CN",
          "zh_CN": "上传图片",
          "type": "i18n"
        },
        "getValue": {
          "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).getValue) {\n    return this.$(fieldId).getValue();\n  }\n  return [];\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
          "source": "function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).getValue) {\n    return this.$(fieldId).getValue();\n  }\n  return [];\n}",
          "type": "js",
          "error": {}
        },
        "setValue": {
          "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function func(fieldId, value) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setValue) {\n    this.$(fieldId).setValue(value);\n  }\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
          "source": "function func(fieldId, value) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setValue) {\n    this.$(fieldId).setValue(value);\n  }\n}",
          "type": "js",
          "error": {}
        },
        "setValidation": {
          "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function func(fieldId) {\n  if (fieldId && this.$(fieldId)) {\n    this.$(fieldId).set('validation', [{\n      \"type\": \"required\"\n    }]);\n  }\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
          "source": "function func(fieldId) {\n  if (fieldId && this.$(fieldId)) {\n    this.$(fieldId).set('validation', [\n      {\n        \"type\": \"required\"\n      }\n    ]);\n  }\n}",
          "type": "js",
          "error": {}
        },
        "setBehavior": {
          "compiled": "function main(){\n    \n    'use strict';\n\nvar __compiledFunc__ = function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setBehavior) {\n    this.$(fieldId).setBehavior(this.utils.isViewPage() ? 'READONLY' : 'HIDDEN');\n  }\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
          "source": "function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setBehavior) {\n    this.$(fieldId).setBehavior(this.utils.isViewPage() ? 'READONLY' : 'HIDDEN');\n  }\n}",
          "type": "js",
          "error": {}
        }
      },
      "methods": {
        "__initMethods__": {
          "type": "js",
          "source": "function (exports, module) { /*set actions code here*/ }",
          "compiled": "function (exports, module) { /*set actions code here*/ }"
        }
      },
      "loopArgs": ["item", "index"],
      "lifeCycles": {
        "constructor": {
          "type": "js",
          "compiled": "function constructor() {\nvar module = { exports: {} };\nvar _this = this;\nthis.__initMethods__(module.exports, module);\nObject.keys(module.exports).forEach(function(item) {\n  if(typeof module.exports[item] === 'function'){\n    _this[item] = module.exports[item];\n  }\n});\n\n}",
          "source": "function constructor() {\nvar module = { exports: {} };\nvar _this = this;\nthis.__initMethods__(module.exports, module);\nObject.keys(module.exports).forEach(function(item) {\n  if(typeof module.exports[item] === 'function'){\n    _this[item] = module.exports[item];\n  }\n});\n\n}"
        },
        "componentDidMount": {
          "name": "componentDidMount",
          "id": "componentDidMount",
          "type": "actionRef",
          "params": {}
        }
      },
      "condition": true,
      "propTypes": [
        {
          "title": "按钮内容",
          "name": "buttonTitle",
          "type": "string",
          "setter": "I18nSetter",
          "defaultValue": {
            "en_US": "上传图片",
            "use": "zh_CN",
            "zh_CN": "上传图片",
            "type": "i18n"
          },
          "setterProps": {},
          "display": "block"
        },
        {
          "title": "是否必填",
          "name": "required",
          "type": "boolean",
          "setter": "BoolSetter",
          "defaultValue": false,
          "setterProps": {},
          "display": "block"
        },
        {
          "title": "associatedFieldId",
          "name": "associatedFieldId",
          "type": "string",
          "setter": "TextSetter",
          "display": "block"
        },
        {
          "title": "getValue",
          "name": "getValue",
          "type": "function",
          "setter": "CodeSetter",
          "defaultValue": {
            "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).getValue) {\n    return this.$(fieldId).getValue();\n  }\n  return [];\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).getValue) {\n    return this.$(fieldId).getValue();\n  }\n  return [];\n}",
            "type": "js",
            "error": {}
          },
          "setterProps": {},
          "hidden": {
            "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function hidden() {\n  return true;\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function hidden() {\n  return true; \n}",
            "type": "js",
            "error": {},
            "params": {}
          },
          "display": "block"
        },
        {
          "title": "setValue",
          "name": "setValue",
          "type": "function",
          "setter": "CodeSetter",
          "defaultValue": {
            "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function func(fieldId, value) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setValue) {\n    this.$(fieldId).setValue(value);\n  }\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function func(fieldId, value) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setValue) {\n    this.$(fieldId).setValue(value);\n  }\n}",
            "type": "js",
            "error": {}
          },
          "setterProps": {},
          "hidden": {
            "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function hidden() {\n  return true;\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function hidden() {\n  return true; \n}",
            "type": "js",
            "error": {},
            "params": {}
          },
          "display": "block"
        },
        {
          "title": "setValidation",
          "name": "setValidation",
          "type": "function",
          "setter": "CodeSetter",
          "defaultValue": {
            "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function func(fieldId) {\n  if (fieldId && this.$(fieldId)) {\n    this.$(fieldId).set('validation', [{\n      \"type\": \"required\"\n    }]);\n  }\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function func(fieldId) {\n  if (fieldId && this.$(fieldId)) {\n    this.$(fieldId).set('validation', [\n      {\n        \"type\": \"required\"\n      }\n    ]);\n  }\n}",
            "type": "js",
            "error": {}
          },
          "setterProps": {},
          "hidden": {
            "compiled": "function main(){\n    \"use strict\";\n\nvar __compiledFunc__ = function hidden() {\n  return true;\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function hidden() {\n  return true; \n}",
            "type": "js",
            "error": {},
            "params": {}
          },
          "display": "block"
        },
        {
          "title": "setBehavior",
          "name": "setBehavior",
          "type": "function",
          "setter": "CodeSetter",
          "defaultValue": {
            "compiled": "function main(){\n    \n    'use strict';\n\nvar __compiledFunc__ = function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setBehavior) {\n    this.$(fieldId).setBehavior(this.utils.isViewPage() ? 'READONLY' : 'HIDDEN');\n  }\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "source": "function func(fieldId) {\n  if (fieldId && this.$(fieldId) && this.$(fieldId).setBehavior) {\n    this.$(fieldId).setBehavior(this.utils.isViewPage() ? 'READONLY' : 'HIDDEN');\n  }\n}",
            "type": "js",
            "error": {}
          },
          "setterProps": {},
          "hidden": {
            "type": "js",
            "source": "function hidden() {\n  return true; \n}",
            "compiled": "function main(){\n    \n    \"use strict\";\n\nvar __compiledFunc__ = function hidden() {\n  return true;\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
            "error": {},
            "params": {}
          },
          "display": "block"
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
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-GH1T4ZZK-75",
            "protocal": "URI"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "src",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-LH1T4ZZK-85",
            "protocal": "VALUE"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "cropperrRef",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-NH1T4ZZK-95",
            "protocal": "VALUE"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "file",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-PH1T4ZZK-A5",
            "protocal": "VALUE"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "visible",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-RH1T4ZZK-B5",
            "protocal": "VALUE"
          }
        ],
        "list": [
          {
            "isReadonly": true,
            "formUuid": "OJYJ0B3W-2WJEBXWE4PQFV556VLL52-8RM24E8K-0",
            "name": "urlParams",
            "description": "URL 上 querystring 解析后的对象",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-GH1T4ZZK-75",
            "protocal": "URI"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "src",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-LH1T4ZZK-85",
            "protocal": "VALUE"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "cropperrRef",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-NH1T4ZZK-95",
            "protocal": "VALUE"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "file",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-PH1T4ZZK-A5",
            "protocal": "VALUE"
          },
          {
            "initialData": "",
            "formUuid": "LCC-6QA1-TPUXXOONWRWL53K9B2YN3-IF8WCMZK-2",
            "name": "visible",
            "description": "",
            "id": "PGA66QA1-AV0YP95IWFUQI14T1EP92-RH1T4ZZK-B5",
            "protocal": "VALUE"
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
          "componentName": "ImageField",
          "id": "node_ockzmfyu4f3",
          "props": {
            "labelTipsTypes": "none",
            "__useMediator": "value",
            "fieldName": "upload",
            "labelTipsIcon": "",
            "className": "imagefield_kzmrm1kd",
            "type": "card",
            "listType": "card",
            "buttonSize": "medium",
            "tips": {
              "en_US": "",
              "zh_CN": "",
              "type": "i18n"
            },
            "onlyCameraUpload": false,
            "autoUpload": false,
            "onSelect": {
              "type": "JSExpression",
              "value": "this.utils.legaoBuiltin.execEventFlow.bind(this, [this.onFileSelect])",
              "events": [
                {
                  "name": "onFileSelect",
                  "id": "onFileSelect",
                  "params": {},
                  "type": "actionRef",
                  "uuid": "1644828348266_0"
                }
              ]
            },
            "buttonType": "primary",
            "limit": 9,
            "labelTextAlign": "right",
            "behavior": {
              "type": "variable",
              "value": "NORMAL",
              "variable": "utils.isViewPage() ? 'HIDDEN' : 'NORMAL'"
            },
            "value": [],
            "validation": [],
            "__style__": ":root {\n\n}\n",
            "fieldId": "imageField_kzmg0dhs",
            "buttonText": {
              "type": "variable",
              "value": {
                "use": "zh_CN",
                "en_US": "Upload",
                "zh_CN": "上传图片",
                "type": "i18n"
              },
              "variable": "props.buttonTitle.zh_CN || props.buttonTitle"
            },
            "method": "post",
            "dataEntryMode": false,
            "normalListType": "image",
            "multiple": true,
            "labelColOffset": 0,
            "label": {
              "type": "variable",
              "value": {
                "use": "zh_CN",
                "en_US": "Upload image",
                "zh_CN": "上传图片",
                "type": "i18n"
              },
              "variable": "props.buttonTitle.zh_CN || props.buttonTitle"
            },
            "maxFileSize": 50,
            "__category__": "form",
            "labelColSpan": 4,
            "wrapperColSpan": 0,
            "accept": "image/*",
            "wrapperColOffset": 0,
            "cardListType": "card",
            "size": "medium",
            "labelAlign": "top",
            "withCredentials": false,
            "labelTipsText": {
              "use": "zh_CN",
              "en_US": "",
              "zh_CN": "",
              "type": "i18n"
            },
            "onSuccess": {
              "type": "JSExpression",
              "value": "this.utils.legaoBuiltin.execEventFlow.bind(this, [this.onSuccess])",
              "events": [
                {
                  "name": "onSuccess",
                  "id": "onSuccess",
                  "params": {},
                  "type": "actionRef",
                  "uuid": "1644830760389_13"
                }
              ]
            }
          },
          "condition": true,
          "loopArgs": ["", ""],
          "hidden": false,
          "title": "",
          "isLocked": false,
          "conditionGroup": ""
        },
        {
          "componentName": "Dialog",
          "id": "node_ockzmfyu4f4",
          "props": {
            "hasMask": true,
            "visible": {
              "type": "variable",
              "value": false,
              "variable": "state.visible"
            },
            "footer": true,
            "footerActions": "cancel,ok",
            "confirmStyle": "primary",
            "confirmState": "确定",
            "confirmText": {
              "use": "zh_CN",
              "en_US": "Confirm",
              "zh_CN": "确定",
              "type": "i18n"
            },
            "autoFocus": true,
            "title": {
              "use": "zh_CN",
              "en_US": "Dialog Title",
              "zh_CN": "Dialog标题",
              "type": "i18n"
            },
            "onOk": {
              "type": "JSExpression",
              "value": "this.utils.legaoBuiltin.execEventFlow.bind(this, [this.onOk])",
              "events": [
                {
                  "name": "onOk",
                  "id": "onOk",
                  "params": {},
                  "type": "actionRef",
                  "uuid": "1624614775084_4"
                }
              ]
            },
            "closeable": "esc",
            "cancelText": {
              "use": "zh_CN",
              "en_US": "Cancel",
              "zh_CN": "取消",
              "type": "i18n"
            },
            "footerAlign": "right",
            "popupOutDialog": true,
            "__style__": {},
            "fieldId": "dialog_kqby9wqe"
          },
          "condition": true,
          "loopArgs": ["", ""],
          "hidden": true,
          "title": "",
          "isLocked": false,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Jsx",
              "id": "node_ockzmfyu4f5",
              "props": {
                "render": {
                  "type": "js",
                  "compiled": "function main(){\n    \n    \"use strict\";\n\nvar __compiledFunc__ = function render() {\n  return React.createElement(window.ReactCropper, {\n    ref: this.saveCropperrRef.bind(this),\n    src: this.state.src,\n    style: { height: 300, width: 400 }\n  });\n};\n    return __compiledFunc__.apply(this, arguments);\n  }",
                  "source": "function render() {\n  return(\n    <window.ReactCropper\n      ref={this.saveCropperrRef.bind(this)}\n      src={this.state.src}\n      style={{ height: 300, width: 400 }}\n    />\n  );\n}",
                  "error": {}
                },
                "__style__": {},
                "fieldId": "JSX_kqc4v31m"
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
  ],
  "actions": {
    "module": {
      "compiled": "'use strict';\n\nexports.__esModule = true;\nexports.saveCropperrRef = saveCropperrRef;\nexports.onFileSelect = onFileSelect;\nexports.onOk = onOk;\nexports.componentDidMount = componentDidMount;\nexports.onSuccess = onSuccess;\n\n\n/**\n* 尊敬的用户，你好：页面 JS 面板是高阶用法，一般不建议普通用户使用，如需使用，请确定你具备研发背景，能够自我排查问题。当然，你也可以咨询身边的技术顾问或者联系宜搭平台的技术支持获得服务（可能收费）。\n* 我们可以用 JS 面板来开发一些定制度高功能，比如：调用阿里云接口用来做图像识别、上报用户使用数据（如加载完成打点）等等。\n* 你可以点击面板上方的 「使用帮助」了解。\n*/\n\n// 当页面渲染完毕后马上调用下面的函数，这个函数是在当前页面 - 设置 - 生命周期 - 页面加载完成时中被关联的。\nfunction saveCropperrRef(ref) {\n  // window.cropperRef = ref\n  this.setState({\n    cropperRef: ref\n  });\n}\n\nfunction onFileSelect(files) {\n  var _this = this;\n\n  var reader = new FileReader();\n  reader.onload = function () {\n    _this.setState({\n      src: reader.result,\n      visible: true,\n      file: files[0]\n    });\n    _this.$('dialog_kqby9wqe').show();\n  };\n  reader.readAsDataURL(files[0].originFileObj);\n}\n\nfunction loadScript(src, callback) {\n  if (!src) {\n    return;\n  }\n  var node = document.createElement('script');\n  // node.crossOrigin = 'crossOrigin';\n  node.src = src;\n  node.addEventListener('load', callback, false);\n  document.head.appendChild(node);\n}\n\nfunction loadCss(url) {\n  var linkElement = document.createElement('link');\n\n  linkElement.rel = 'stylesheet';\n  linkElement.href = url;\n  document.body.appendChild(linkElement);\n}\n\n(function loadAssets() {\n  loadCss('https://g.alicdn.com/yida-platform/react-cropper/1.0.0/css/react-cropper.css');\n  loadScript('https://g.alicdn.com/yida-platform/react-cropper/1.0.0/js/react-cropper.js', function () {\n    // your code \n  });\n})();\n\nfunction dataURL2Blob2File(dataURL, file) {\n  var arr = dataURL.split(\",\"),\n      mime = arr[0].match(/:(.*?);/)[1],\n      bstr = atob(arr[1]),\n      u8arr = new Uint8Array(bstr.length);\n  var n = bstr.length;\n  while (n--) {\n    u8arr[n] = bstr.charCodeAt(n);\n  }\n  var blob = new Blob([u8arr], { type: mime });\n  // Blob to File\n  // set lastModifiedDate and name\n  blob.lastModifiedDate = new Date();\n  blob.name = file.name;\n  blob.uid = file.uid;\n  return blob;\n}\n\n/**\n* dialog onOk\n*/\nfunction onOk() {\n  var data = this.state.cropperRef.cropper.getCroppedCanvas().toDataURL();\n  var file = dataURL2Blob2File(data, this.state.file);\n  console.log('file', file);\n  this.$('imageField_kzmg0dhs').uploaderRef.uploaderRef.uploaderRef.startUpload([file]);\n  this.$('dialog_kqby9wqe').hide();\n}\n\nfunction componentDidMount() {}\n\n/**\n* imageField onSuccess\n* @param file: {Object} 文件\n* @param value: {Array} 值\n*/\nfunction onSuccess(file, value) {\n  if (this.props.associatedFieldId) {\n    this.props.setValue(this.props.associatedFieldId, value);\n  }\n}",
      "source": "\n\n/**\n* 尊敬的用户，你好：页面 JS 面板是高阶用法，一般不建议普通用户使用，如需使用，请确定你具备研发背景，能够自我排查问题。当然，你也可以咨询身边的技术顾问或者联系宜搭平台的技术支持获得服务（可能收费）。\n* 我们可以用 JS 面板来开发一些定制度高功能，比如：调用阿里云接口用来做图像识别、上报用户使用数据（如加载完成打点）等等。\n* 你可以点击面板上方的 「使用帮助」了解。\n*/\n\n// 当页面渲染完毕后马上调用下面的函数，这个函数是在当前页面 - 设置 - 生命周期 - 页面加载完成时中被关联的。\nexport function saveCropperrRef(ref) {\n  // window.cropperRef = ref\n  this.setState({\n    cropperRef: ref,\n  });\n}\n\nexport function onFileSelect(files) {\n  const reader = new FileReader();\n  reader.onload = () => {\n    this.setState({\n      src: reader.result,\n      visible: true,\n      file: files[0],\n    });\n    this.$('dialog_kqby9wqe').show();\n  };\n  reader.readAsDataURL(files[0].originFileObj);\n}\n\nfunction loadScript(src, callback) {\n  if (!src) {\n    return;\n  }\n  const node = document.createElement('script');\n  // node.crossOrigin = 'crossOrigin';\n  node.src = src;\n  node.addEventListener('load', callback, false);\n  document.head.appendChild(node);\n}\n\nfunction loadCss(url) {\n  const linkElement = document.createElement('link');\n\n  linkElement.rel = 'stylesheet';\n  linkElement.href = url;\n  document.body.appendChild(linkElement);\n}\n\n(function loadAssets() {\n  loadCss('https://g.alicdn.com/yida-platform/react-cropper/1.0.0/css/react-cropper.css');\n  loadScript('https://g.alicdn.com/yida-platform/react-cropper/1.0.0/js/react-cropper.js', () => {\n    // your code \n  });\n})();\n\nfunction dataURL2Blob2File(dataURL, file) {\n  const arr = dataURL.split(\",\"),\n    mime = arr[0].match(/:(.*?);/)[1],\n    bstr = atob(arr[1]),\n    u8arr = new Uint8Array(bstr.length);\n  let n = bstr.length;\n  while (n--) {\n    u8arr[n] = bstr.charCodeAt(n);\n  }\n  const blob = new Blob([u8arr], { type: mime });\n  // Blob to File\n  // set lastModifiedDate and name\n  blob.lastModifiedDate = new Date();\n  blob.name = file.name;\n  blob.uid = file.uid;\n  return blob;\n}\n\n/**\n* dialog onOk\n*/\nexport function onOk() {\n  const data = this.state.cropperRef.cropper.getCroppedCanvas().toDataURL();\n  const file = dataURL2Blob2File(data, this.state.file);\n  console.log('file', file);\n  this.$('imageField_kzmg0dhs').uploaderRef.uploaderRef.uploaderRef.startUpload([file]);\n  this.$('dialog_kqby9wqe').hide();\n}\n\n\nexport function componentDidMount() {\n\n}\n\n/**\n* imageField onSuccess\n* @param file: {Object} 文件\n* @param value: {Array} 值\n*/\nexport function onSuccess(file, value) {\n  if (this.props.associatedFieldId) {\n    this.props.setValue(this.props.associatedFieldId, value);\n  }\n}"
    },
    "type": "FUNCTION",
    "list": [
      {
        "id": "saveCropperrRef",
        "title": "saveCropperrRef"
      },
      {
        "id": "onFileSelect",
        "title": "onFileSelect"
      },
      {
        "id": "onOk",
        "title": "onOk"
      },
      {
        "id": "componentDidMount",
        "title": "componentDidMount"
      },
      {
        "id": "onSuccess",
        "title": "onSuccess"
      }
    ]
  }
}
```

## 涉及原理

1. 主要是利用了绑定已有的表单组件做数据存储，从而实现数据提交。
1. 缺点是在使用上有些成本，需要自己控制被绑定的组件的显隐。
1. 图片裁剪使用的是开源的 react-cropper，[https://www.npmjs.com/package/react-cropper](https://www.npmjs.com/package/react-cropper) ，因为还不支持 NPM 安装依赖，所以只能采用 CDN 动态加载的方案。
