---
title: 上传文件重命名
order: 4
---

# 上传文件重命名

## 需求

在文件上传时自动按照指定的格式更改文件名，方便批量下载识别。 例如：近期要统计疫苗接种情况，想按照“人名+日期”的格式来重命名上传的图片。

## 实现思路
在附件上传的 `onSelect` 方法中修改选中的文件名。

:::caution
目前在数据详情页下载单一文件还是原来的文件名
:::


## 实现过程

### 步骤1：创建组件

* 创建一个单行文本组件，设置默认值为“公式编辑”，并在公式编辑窗口输入如下公式。
```json
{"text":"LOGINUSER()","marks":[],"isCmData":true}
```
> 文本组件ID：textField_l0ujih8w

* 创建一个日期组件，设置默认值为“公式编辑”，并在公式编辑窗口输入如下公式。
```json
{"text":"TIMESTAMP(SYSTIME())","marks":[],"isCmData":true}
```
> 日期组件ID：dateField_l0ujuwur

* 创建一个图片上传组件（图片上传组件和附件上传组件同理）。
> 图片组件ID：imageField_l0ujuwuq


### 步骤2：在图片组件的 onSelect 方法中写入代码

选中图片组件，在右侧“高级”选项卡中新建动作，选择 onSelect

![](https://img.alicdn.com/imgextra/i3/O1CN01PToOvU1QXAwA3PqYK_!!6000000001985-2-tps-427-668.png_.webp)

在 JS 面板中输入如下代码
```js
export function onSelect(files, array) {
  // 获取人名
  const name = this.$('textField_l0ujih8w').getValue()
  // 获取日期
  const date = this.utils.formatter('date', this.$('dateField_l0ujuwur').getValue(), 'YYYY-MM-DD');

  array.map((file, index) => {
    // 生成新文件名
    file.name = file.name.replace(/^.*(\.\w+)$/, `${name}-${date}-${index + 1}$1`)
  });
}

```

:::caution
有几点需要注意：
* 记得替换代码中的组件 id；
* 在示例代码中，因数据结构是对象列表`[{},{}]`所以直接修改对象的属性可以生效，如果不是这种数据结构，需要 setValue 方法来设置值；
:::

## 验证效果
![](https://img.alicdn.com/imgextra/i2/O1CN01TwuVS829GpVgUggCh_!!6000000008041-2-tps-907-427.png_.webp)
