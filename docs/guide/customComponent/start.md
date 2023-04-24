---
title: 快速开始
order: 1
---

本文档通过自定义组件**实现文本复制功能**的小案例，体验一下自定义组件开发调试以及安装使用的具体操作。

## 案例场景

使用自定义组件功能，对宜搭现有的文本组件进行低代码改造，实现文本复制功能。用于文本内容复制到剪切板，便于用户进行重复字段的填写。

## 实现效果

![](https://img.alicdn.com/imgextra/i4/O1CN01H9M3PF28UHWe391bD_!!6000000007935-2-tps-959-530.png_.webp)

## 操作步骤

### 步骤 1：创建自定义组件

通过对组件名称、类型、标识等属性的配置，低成本、自定义一款更贴合业务需求的组件。
**操作步骤：**

1. 宜搭应用 >> 应用设置 >> 组件管理 >> 组件中心（操作如下图所示）

![](https://img.alicdn.com/imgextra/i3/O1CN01MZ8RQY1eG8pH1qVH9_!!6000000003843-2-tps-959-531.png_.webp)

2. 新增组件 >> 填写组件名称、[组件类型](#dU0sh)、组件标识等组件属性 >> 确定（操作如下图所示）

![](https://img.alicdn.com/imgextra/i4/O1CN01YhSa3q1bt7gfYpGsY_!!6000000003522-2-tps-959-530.png_.webp)

### 步骤 2：开发调试自定义组件

对组件进行开发调试，以满足不同的业务需求。本案例中实现组件的计数功能。
**操作步骤：**

1. 组件中心 >> 我的组件 >> 找到需要调试的组件 >> 开发（操作如下图所示）

![](https://img.alicdn.com/imgextra/i3/O1CN014zyeGb1Mkg9GV32NQ_!!6000000001473-2-tps-959-530.png_.webp)

2. 前面有说道组件由视图和属性构建，当开发一个组件时需要先抽象出这个组件所需要的属性，我先来构建组件的属性，该组件只需要一个文本内容的属性，属性配置 >> 属性定义，添加一个文本内容的属性，名称为 content，属性类型选文本，设置器选 textSetter。

![](https://img.alicdn.com/imgextra/i2/O1CN01gWs6sk1LTu1dISw3r_!!6000000001301-2-tps-5114-714.png_.webp)
![](https://img.alicdn.com/imgextra/i3/O1CN01270X0S1aD9mYRwf0J_!!6000000003295-2-tps-1706-456.png_.webp)

3. 组件属性构建完成后，来构建组件的视图，添加所需的[宜搭普通组件](https://docs.aliwork.com/docs/yida_support/ui648w/zqpbaq)到画布中（本案例所需组件为两个文本组件。分别命名为「文本」及「复制」），并进行基本属性的配置，将文本组件的内容进行变量绑定，绑定为刚才构建的属性 props.content, 这样就可以在运行时显示传过来的属性值。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i3/O1CN0182x1m31JwBFTHSOP4_!!6000000001092-2-tps-1706-663.png_.webp)

4. 为按钮组件进行动作设置，以文本复制效果。选中「复制」文本 >> 新建动作 >> onCopyText 点击。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i1/O1CN01d5AIjX28gBp3Ne4aS_!!6000000007961-2-tps-959-531.png_.webp)

5. 在 JS 面板进行复制逻辑的编写。（如下图所示）

![](https://img.alicdn.com/imgextra/i3/O1CN01aibC6P1r4m071UxeZ_!!6000000005578-2-tps-959-531.png_.webp)

```javascript
export function onCopyText() {
  const input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  // 通过 this.props.xxx 获取属性
  input.setAttribute('value', this.props.content);
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 9999);
  document.execCommand('copy');
  document.body.removeChild(input);
  this.utils.toast('已成功复制到剪贴板');
}
```

6. 保存 >> 预览组件

![](https://img.alicdn.com/imgextra/i3/O1CN01NhdcnK27DxnZAPSMA_!!6000000007764-2-tps-1704-543.png_.webp1)

7. 发布 >> 填写组件发布的[版本号](/docs/guide/concept/customComponent#组件版本说明)及相关说明 >> 确定。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i3/O1CN01GYalDn1uoWPGpFgWI_!!6000000006084-2-tps-959-530.png_.webp)

8. 发布成功会看到提示。（操作如下图所示）在实际的组件开发中，保存后即可安装组件的开发版(0.1.0)进行实时调试，当组件完成了开发后才需要发布正式版本。

![](https://img.alicdn.com/imgextra/i4/O1CN0136UVji1Xnqf5Re5Ed_!!6000000002969-2-tps-959-530.png_.webp)

### 步骤 3：安装自定义组件

将开发调试完成的自定义组件，安装到页面内，即可在页面设计的过程中进行使用。[组件安装](/docs/guide/concept/customComponent#组件安装类型)需选择页面类型，选择后才会在对应的页面设计器中看到对应的自定义组件。
**操作步骤：**

1. 表单设计页 >> 组件库 >> 自定义组件 >> 组件管理。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i1/O1CN01r3hGAI20enhADo9Lf_!!6000000006875-2-tps-959-531.png_.webp)

2. 组件管理页面 >> 组件列表 >> 选择需要安装的自定义组件 >> 安装。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i4/O1CN015vfPeL1RhzuUsGbzE_!!6000000002144-2-tps-959-531.png_.webp)

3. 选择[安装版本](/docs/guide/concept/customComponent#组件版本说明)及[安装范围](/docs/guide/concept/customComponent#组件安装类型) >> 安装。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i3/O1CN01ZePgeG1JRx6kuEq0c_!!6000000001026-2-tps-959-531.png_.webp)

:::danger
1. 为保证线上使用自定义组件的稳定性，在组件版本选择时，**请务必安装 1.x.x 发布后的正式版本。**
1. 为保证自定义组件可以在页面设计器中使用，在选择安装范围时，只有选择了对应的页面类型后，才会在对应的页面设计器中则会看到对应安装的组件。
:::


### 步骤 4：使用自定义组件

通过上述步骤，自定义组件已经被安装至页面组件库的自定义组件类目中，通过下述步骤即可使用。
**操作步骤：**

1. 表单设计页 >> 组件库 >> 自定义组件 >> 选择需要的组件 >> 拖拽至画布即可。（操作如下图所示）

![](https://img.alicdn.com/imgextra/i2/O1CN01IYfbLx1XFUxWZzTVC_!!6000000002894-2-tps-959-530.png_.webp)

### 步骤 5：查看/修改组件信息

在组件使用的过程中，如需对组件的缩略图、组件的说明文档地址、组件的描述信息进行修改，可以通过以下路径进行操作。
**操作步骤**

1. 应用设置 >> 组件管理 >> 组件中心（操作如下图所示）

![](https://img.alicdn.com/imgextra/i4/O1CN0199ILCG1xeOUuAjB7y_!!6000000006468-2-tps-959-531.png_.webp)

2. 选择需要查看/修改详情的组件 >> 详情（操作如下图所示）

![](https://img.alicdn.com/imgextra/i2/O1CN01ukcLky1kungCIAxMx_!!6000000004744-2-tps-959-530.png_.webp)

:::info
**说明：**组件详情页面分为**基本信息、发布信息**及**管理员**三个模块（如下图所示），其中:

1. **基本信息**：点击「编辑」可以对自定义组件的缩略图、帮助文档地址、组件描述进行修改，其余配置为组件创建之初进行配置且不可修改的。
1. **发布信息**：可以查看自定义组件的迭代记录，包括组件版本及对应的发布说明。
1. **管理员（拥有对自定义组件进行开发调试权限，默认为组件创建者）**：可以对管理员进行添加或删除操作，用于权限的管理。
:::

![](https://img.alicdn.com/imgextra/i1/O1CN01lpaGZH1E8eKqIs1ri_!!6000000000307-2-tps-959-530.png_.webp)

## 自定义组件属性

自定义组件在支持对宜搭现有组件进行改造的同时，也支持对生成的自定义组件进行属性( propTypes )的自定义操作。使自定义组件更加贴合开发者的日常工作场景、符合开发者日常工作习惯的同时，使自定义组件拥有更高的灵活性及可定制性。

### 自定义组件属性配置入口

**路径：**低代码组件设计器 >> 选中画布中「低代码业务组件」>> 右侧属性（路径如下图所示）
![](https://img.alicdn.com/imgextra/i1/O1CN01BBSg7K26RPoSYbEOS_!!6000000007658-2-tps-959-531.png_.webp)

### 自定义组件属性配置说明

自定义组件属性分为**双端搭建、属性定义（ **`propTypes`**）、生命周期**及**唯一标识**四个模块。其中，

- **双端搭建：**双端搭建为配置开关，开启即可进行 PC 端及移动端完全分离，分别设计，以满足双端适配的个性业务需求。
- **属性定义（ propTypes ）：**可对自定义组件的**标题**、**名称**、**类型（即数据格式）**、**默认值**等基本属性进行自定义，也可对组件**是否隐藏（组件隐藏与否的状态）**、**当变化时（组件显示值的不同）**进行事件绑定，以满足多种多样的业务需求。详细介绍请参见，[组件属性配置](https://docs.aliwork.com/docs/yida_support/wtwabe/oupunp/gdi5p8/sg47d6/zyrrlb)。
- **生命周期：**自定义组件的生命周期分为**组件渲染完成（**`componentDidMount`**）**、**组件更新完成（**`componentDidUpdate`**）**、**组件捕捉错误（**`componentDidCatch`**）**、**组件销毁前（**`componentWillUnmount`**）**四个阶段，在不同的生命周期中进行不同的逻辑编写，以满足复杂的业务需求。
- **唯一标识：**同宜搭普通组件一样，自定义组件也拥有唯一标识属性，作为组件的唯一识别码，由系统自动生成，一般不需要更改。用于宜搭后台存储数据，代码绑定等。

:::danger
**特别注意：**
- 组件的**唯一标识（ fiedId ）是宜搭指向该组件的唯一标识码**，更改标识可能会影响到该组件上所使用的公式、数据存储（数据也可能会出现丢失），JS 函数侧的指向等。**我们强烈不建议你去修改组件的唯一标识属性！**
- **如果你坚持要修改该标识（目前只能通过 **schema 导入的方式**，如果你选择使用此方法来修改组件唯一标识，那么表示你已经明确这么做的后果以及表明自己会独自承担这个后果，宜搭有权不对该后果负任何责任，感谢你的理解和支持。**
:::