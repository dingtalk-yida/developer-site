---
title: 属性类型与设置器
order: 4
---
:::info
**说明：**当前文档可见范围为知识小组成员，审核通过后会进行上架，勿动。
:::
组件属性类型与设置器为使用者预设了不同的配置方案，以满足多样的使用需求。属性类型与设置器存在对应的关系，详细介绍见下表。

| **属性类型** | **设置器名称** | **说明** | **图示** |
| --- | --- | --- | --- |
| **文本** | TextSetter | 文本设置器：文本类型组件的常见样式，可进行常规的文本输入。 | ![](https://img.alicdn.com/imgextra/i1/O1CN01bRJNIG1Xx0aOZeQQm_!!6000000002989-2-tps-596-598.png_.webp) |
|  | I18nSetter | 刚拖入的组件，默认是不会开启国际化功能的，要开启国际化功能请点击位于属性设置栏上面的国际化按钮，点击国际化按钮之后将启动编辑器，可以「新建」或者「搜索」已有的国际化词条进行绑定。对于已经绑定好的国际化词条，点击国际化按钮之后可以直接编辑对应语言下的国际化文案。 | ![](https://img.alicdn.com/imgextra/i4/O1CN01X4hDKK1yFUZvpirF4_!!6000000006549-2-tps-598-600.png_.webp) |
|  | DateSetter | 提供日期选择框，并会将所选时间以时间戳的形式展示在页面上。 | ![](https://img.alicdn.com/imgextra/i3/O1CN01jbcON71gk1u2gWxLk_!!6000000004179-2-tps-598-734.png_.webp)![](https://img.alicdn.com/imgextra/i2/O1CN01K9RvuJ1Pl5LcqtYmU_!!6000000001880-2-tps-600-602.png_.webp) |
|  | ChoiceSetter | 自定义组件属性以选项的形式存在于属性栏中，当选择不同的选项时，页面的组件内容也会变为预设的选项值。 | ![](https://img.alicdn.com/imgextra/i1/O1CN01XTTGYG1itJ9yiC6tR_!!6000000004470-2-tps-596-596.png_.webp)![](https://img.alicdn.com/imgextra/i2/O1CN01VB8oo6238gm7rb1do_!!6000000007211-2-tps-598-598.png_.webp) |
|  | ImageSetter |  | ![](https://img.alicdn.com/imgextra/i4/O1CN01fDAjmO1KExU9V3XLp_!!6000000001133-2-tps-598-600.png_.webp) |
| **布尔** | BoolSetter | 自定义组件属性以开关的形式存在于表单设计页属性栏中，开启组件内容显示`true`；关闭则显示`false`。 | ![](https://img.alicdn.com/imgextra/i3/O1CN01Mv6H7o1dyHNcMDdfi_!!6000000003804-2-tps-598-598.png_.webp)![](https://img.alicdn.com/imgextra/i1/O1CN01U2wIWM1yGrlhaJRB7_!!6000000006552-2-tps-600-600.png_.webp) |
| **数字** | NumberSetter | 自定义表单变成类似于宜搭数值组件的形式，阻止了出数字以外任意数据格式内容的输入，且在属性栏输入的数值会显示在组件的内容上。 | ![](https://img.alicdn.com/imgextra/i3/O1CN01oikGdr1hjrN2LxwGc_!!6000000004314-2-tps-598-598.png_.webp)![](https://img.alicdn.com/imgextra/i1/O1CN012QPRf41tDarGWRNCR_!!6000000005868-2-tps-602-600.png_.webp) |
| **对象** | JsonSetter | 允许组件属性值以对象格式代码形式进行输入，且在组件内容中以`[object Object]`形式存在 | ![](https://img.alicdn.com/imgextra/i1/O1CN01F0fTRX1ovx8enrray_!!6000000005288-2-tps-750-376.png_.webp)![](https://img.alicdn.com/imgextra/i4/O1CN01xo1Z6S1cYLKov2s2h_!!6000000003612-2-tps-1642-600.png_.webp) |
| **数组** | OptionsSetter | 用来产生简单的数组对象，一般用在下拉选择里的选项配置 | ![](https://img.alicdn.com/imgextra/i2/O1CN01sG5Is520DJvneB1St_!!6000000006815-2-tps-1488-558.png_.webp) |
|  | ListSetter | 用来产生复杂的对象组件，配置相对复杂。![](https://img.alicdn.com/imgextra/i2/O1CN01yJrHa61CCCAfMUtaT_!!6000000000044-2-tps-712-783.png_.webp) | ![](https://img.alicdn.com/imgextra/i2/O1CN01LtzKxk1rIVski04K0_!!6000000005608-2-tps-1670-436.png_.webp) |
|  | JsonSetter | 同对象设置器 JsonSetter | 效果同对象设置器 JsonSetter |
| **函数** | ActionSetter | 用来配置回调函数，选择了 ActionSetter 在使用态时，属性会在 「高级」下变成动作设置。 | ![](https://img.alicdn.com/imgextra/i4/O1CN01GjzRS61rVKy4OGNuv_!!6000000005636-2-tps-916-702.png_.webp)![](https://img.alicdn.com/imgextra/i4/O1CN012eYrn21Lzxka8kbP6_!!6000000001371-2-tps-1166-521.png_.webp) |
|  | CodeSetter | 用来配置回调函数，和 ActionSetter 的区别是在使用态时是直接生成一个代码框。 | ![](https://img.alicdn.com/imgextra/i3/O1CN01RQoO011KBkiLJRsM0_!!6000000001126-2-tps-2186-1038.png_.webp) |
| **元素** | SlotSetter | 用来做容器型的组件，可以拖入其他组件。使用时先声明一个属性，选择 SlotSetter，然后需要先拖入「插槽占位」组件，并且绑定好声明的属性![](https://img.alicdn.com/imgextra/i4/O1CN01cmOGCH1VsJHx1eFsl_!!6000000002708-2-tps-1704-625.png_.webp) | ![](https://img.alicdn.com/imgextra/i4/O1CN01YUf0JS1OOM4mrY7IQ_!!6000000001695-2-tps-4494-506.png_.webp) |

