---
sidebar_position: 2
title: 上传文件重命名
---

# 上传文件重命名

## 需求

在文件上传时自动按照指定的格式更改文件名，方便批量下载识别。  
近期要统计疫苗接种情况，想按照“人名+日期”的格式来重命名上传的图片

## 实现思路
在附件的 `onSelect` 方法中修改选中的文件名

:::caution
目前在数据详情页下载单一文件还是原来的文件名
:::


## 实现过程

### 步骤1：创建组件

创建一个单行文本组件，设置默认值为“公式编辑”，并在公式编辑窗口输入如下公式
```json
{"text":"LOGINUSER()","marks":[],"isCmData":true}
```
> 文本组件ID：textField_l0ujih8w

创建一个日期组件，设置默认值为“公式编辑”，并在公式编辑窗口输入如下公式
```json
{"text":"TIMESTAMP(SYSTIME())","marks":[],"isCmData":true}
```
> 日期组件ID：dateField_l0ujuwur

创建一个图片组件
> 图片组件ID：imageField_l0ujuwuq
:::tip
图片组件和附件组件同理
:::


### 步骤2：在图片组件的onSelect方法中写入代码

选中图片组件，在右侧“高级”选项卡中新建动作，选择onSelect

![](../../static/img/%E6%96%B0%E5%BB%BAonselect.png)

在JS面板中输入如下代码
```js
export function onSelect(files, array) {
    // 获取人名
    const name = this.$('textField_l0ujih8w').getValue()
    // 获取日期
    const date = this.timestamp_trans(this.$('dateField_l0ujuwur').getValue())
    //匹配文件后缀
    const regex = /^.*(\.\w+)$/
    array.map((file, index) => {
        // 生成新文件名
        const filename = file.name.replace(regex, `${name}-${date}-${index + 1}$1`)
        file.name = filename
    })
}
export function timestamp_trans(timestamp) {
    // 时间戳转日期
    function num_format(num) { return num < 10 ? '0' + num : num.toString() }
    const date = new Date(timestamp);
    const y = date.getFullYear().toString()
    const M = num_format(date.getMonth() + 1)
    const d = num_format(date.getDate())
    const h = num_format(date.getHours())
    const m = num_format(date.getMinutes())
    const s = num_format(date.getSeconds())
    return `${y}-${M}-${d}`
}
```
:::tip
记得替换代码中的组件id
:::

:::caution
在示例代码中，因数据结构是对象列表`[{},{}]`所以直接修改对象的属性可以生效  
如果不是这种数据结构，需要setValue方法来设置值
:::

## 验证
![](../../static/img/%E9%AA%8C%E8%AF%81%E7%BB%93%E6%9E%9C.png)