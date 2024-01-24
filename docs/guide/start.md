# 快速开始

本篇文档将带领大家快速借助宜搭自定义页面能力搭建一个简单 Demo 并发布上线，Demo 效果如下所示：

![](https://tianshu-vpc.oss-cn-shanghai.aliyuncs.com/58f2a1bd-4ca0-4200-8e89-25fe6998f2dc.gif)

通过上面的效果我们可以看到，当用户在输入框中输入姓名并点击生成按钮，程序将自动生成问候语并打印在按钮下方，我们会尽可能详细的讲解每一个步骤，如果用户在这个过程中对于宜搭的产品功能有所疑惑，欢迎移步至 [宜搭使用手册](https://docs.aliwork.com/docs/yida_support/ytzzua) 进行查看，下面我们就从 0 开始来实现上面的 Demo 效果。

:::tip
用户可以通过访问 [Hello 示例](https://www.aliwork.com/o/demo/hello) 查看真实效果，同时用户也可以访问 [自定义组件设计器](https://www.aliwork.com/developer/designer?formUuid=hello-v2) 查看具体实现。
:::

### 步骤 1：创建宜搭应用

首先我们需要在宜搭工作台中创建一个应用 (详见 [使用手册](https://docs.aliwork.com/docs/yida_support/_1/oncnoy))，如果您已有可用的应用则可以跳过本步，如下所示，我们创建一个名为 `demo 示例` 的空白应用：

![](https://img.alicdn.com/imgextra/i3/O1CN016C26Ri1Nq0Mj6ivdu_!!6000000001620-2-tps-3582-2016.png_.webp)

### 步骤 2：创建自定义页面

接下来我们需要创建一个自定义页面来实现 Demo 的功能，如下所示，当前我们还不需要用到页面模板，因此在选择模板环节可以点击 `跳过` 按钮直接进入自定义页面设计器：
![](https://img.alicdn.com/imgextra/i1/O1CN0153CNML21k7ufobwfb_!!6000000007022-2-tps-3582-1374.png_.webp)

宜搭的自定义页面设计器如下所示，具体功能介绍详见 [设计器文档](/docs/guide/designer.md)，开发者可以在进入设计器后修改当前页面的名称：
![](https://img.alicdn.com/imgextra/i1/O1CN0157eG1X1h6TIqepd9J_!!6000000004228-2-tps-3582-2018.png_.webp)

### 步骤 3：拖入组件并配置属性

我们的 Demo 示例非常简单，总共包含三个组件，开发者可以从组件库面板中将组件先拖入画布，用户也可以前往 [组件文档](/docs/components/layout/tabsLayout.mdx) 查看更多组件配置能力：

- **输入框**- 用于输入姓名，我们将组件的 `标题` 属性设置为"姓名"；
- **按钮**- 用于获取用户输入姓名并生成问候语，我们将按钮组件的 `标题` 属性设置为"生成"；
- **文本**- 用于显示问候语，为了美观我们在样式面板中设置上边距：20px，字体大小：20px，如下所示；

![](https://img.alicdn.com/imgextra/i2/O1CN01vvvb9k1MoLJGeHACc_!!6000000001481-2-tps-3582-2018.png_.webp)

### 步骤 4：创建全局变量

从这一步我们要开始实现逻辑部分了，首先，我们需要创建一个全局变量用于存储问候语（全局变量使用详见 [全局变量文档](/docs/guide/concept/state.md)），如下所示，我们创建一个名为`helloWord`的全局变量：

![](https://img.alicdn.com/imgextra/i4/O1CN01TJtxqW1FchwARVEwE_!!6000000000508-2-tps-3582-2018.png_.webp)

### 步骤 5：绑定按钮点击事件

我们需要当用户点击按钮时获取输入框的内容，并生成问候语打印在下方，接下来我们将讲解如何绑定事件并生成问候语：

**1.**给按钮绑定点击事件，如下所示，绑定后我们会在动作面板自动生成一个 JS 函数（用户也可以自定义函数名）；
![](https://img.alicdn.com/imgextra/i4/O1CN01Ze2WLF1JzO0tSirUP_!!6000000001099-2-tps-3582-2018.png_.webp)

**2.**使用 getValue API 获取输入框的内容，宜搭提供了非常丰富的 [宜搭JSAPI](/docs/api/yidaAPI)，如下所示，我们根据输入框组件的唯一标识获取用户输入内容：
![](https://img.alicdn.com/imgextra/i1/O1CN01m69xD21CjAgJM5Tup_!!6000000000116-2-tps-3582-2018.png_.webp)

**3.**构造问候语，并使用 setState API 更新全局变量的内容触发页面重新渲染，onClick 的全部代码如下所示：

```js
export function onClick() {
  // 获取姓名输入框内容
  const name = this.$('textField_kzdxqcod').getValue();

  // 更新全局变量
  this.setState({
    helloWord: `Hello ${name} !`,
  });
}
```

### 步骤 6：文案绑定数据源变量

最后一步，我们需要将全局变量绑定到文本组件的 `内容` 属性上进行展示，如下所示：

![](https://img.alicdn.com/imgextra/i4/O1CN01doImZM1lZYvJOZfvD_!!6000000004833-2-tps-3582-2016.png_.webp)

### 步骤 7：预览&发布

到目前为止，我们的 Demo 示例就已经开发完成了，用户可以点击设计器右上角的 `预览` 按钮进行预览：

![](https://img.alicdn.com/imgextra/i3/O1CN01IJpCx81mwkaqmcHCI_!!6000000005019-2-tps-3582-856.png_.webp)

完成预览后点击 `保存` 按钮保存页面，接下来便可以通过点击应用右上角的访问按钮，访问我们搭建的 Demo 页面了：

![](https://img.alicdn.com/imgextra/i3/O1CN01wd0auW1rQl0HXLjZ3_!!6000000005626-2-tps-3582-792.png_.webp)

## 最后

到此我们已经完成了快速开始 Demo 示例的制作，用户可以通过访问 [Hello 示例](https://www.aliwork.com/o/demo/hello) 查看效果，通过本示例用户可以初步了解宜搭自定义页面的基本使用流程，如果想了解更加复杂的示例教程，可以移步到 [TodoMVC 教程](tutorial/todoMVC.md) 进行查看。
