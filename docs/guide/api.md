# 常用API
本文主要讲解宜搭平台在JS面板重用的API及其使用方法。

## 通用API
### this.$(fieldId).get(key)
获取当前组件(表单)的属性值；fieldId 为组件标识。

```js
export function getAttribute(){
  const size = this.$('textField_k1kblym2').get('size')
  this.utils.toast({
    title: size,
    type: 'success'
  })
}
```

### this.$(fieldId).set(key, data)
设置当前组件(表单)的属性值；fieldId 为组件标识，key 为组件属性。

```js
export function setAttribute(){
  this.$('textField_k1kblym8').set('label','标题');
}
```

## 表单组件API

## 表单容器组件API

## Dialog组件API

