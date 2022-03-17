---
title: 组件属性
order: 3
---
## 组件属性简介
自定义组件支持属性定义（ propTypes ）操作，用于对组件进行属性层面的丰富，增加自定义属性可定制性的同时使其更加灵活且贴合业务需求。（如下图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01yoXUhR1HU7ktfxZUA_!!6000000000760-2-tps-750-382.png)

组件属性可以通过「添加一项」按钮来进行增加，也可通过「编辑」按钮进行自定义修改，还可通过「删除」按钮进行删减。点击「编辑」按钮可以看到组件属性的所有配置项。（如下图所示）
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01SG5SRQ1J1O8ISMOYj_!!6000000000968-2-tps-959-531.png)

所有自定义组件属性定义都可以在组件预览界面（简单类型的属性调试）或安装到应用（复杂的属性配置：包括涉及代码的调试工作）中进行查看与配置。（如下图所示）
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01KvEtGN21sN2sim8AQ_!!6000000007040-2-tps-959-530.png)

各个配置项的详细说明请参见下文。
### 属性标题
给自定义组件配置的属性名称，属性标题的默认名称为「属性标题」，一个简单易懂的标题有助于使用者更好的理解属性的含义或识别需要填报的内容。
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01741mKp1dBjOZJh7pD_!!6000000003698-2-tps-959-531.png)
在页面使用该组件时，对应的如下图：
![image.png](https://img.alicdn.com/imgextra/i4/O1CN016Eh2Bd1ZoQOROjlfc_!!6000000003241-2-tps-959-530.png)

### 属性名称
组件的属性名称是组件的属性 Key，类似组里的 props.xxx。默认值为 propName 。可以在页面设计中进行变量的绑定，从而实现对组件的控制。如自定义组件的属性值作为自定义组件内某一个组件的标题。（如下图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01VbSzl91czMhb6bGId_!!6000000003671-2-tps-959-530.png)
:::danger
**注意：组件的属性名称不可以为空，否则在进行调用或赋值操作时会报错。**
:::
### 属性类型
组件的属性类型基本类似于常见的数据类型，分别有：**文本、布尔、数字、对象、数组、函数、元素**七种类型，每个数据类型又对应若干个[设置器](#H3fbR)，以满足用户对数据不同维度的处理需求。（如下图所示）
![image.png](https://img.alicdn.com/imgextra/i4/O1CN01mCMiGB1NYbJwyCq5u_!!6000000001582-2-tps-959-531.png)
### 设置器
不同属性类型的组件拥有不同的属性设置器，实现不同的组件渲染及数据处理方式。如文本类型对应五种设置器。（如下图所示）
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01FxpCbf1uX7MAFVary_!!6000000006046-2-tps-959-530.png)
### 默认值
是指当用户访问表单时，表单内自定义组件默认显示的字段。（效果如下图所示）
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01vN7XI91DfnNu1gNmq_!!6000000000244-2-tps-959-530.png)
### 是否支持变量绑定
页面设计中的变量绑定。
### 是否隐藏
控制该属性是否隐藏，一般情况用不到。
### 当变化时
可以用来做多个属性之间的联动，一般情况用不到。
### 布局
分为**块（ block ）**与**行内（ inline ）两种**，用于设置该自定义组件在页面内的排列方式。
###0 帮助说明

- 暂时用不到。
###1 帮助连接

- 暂时用不到。
