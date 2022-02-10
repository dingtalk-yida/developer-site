---
sidebar_position: 1
title: TodoMVC
---

# TodoMVC
## 概述
本篇教程属于宜搭的高级使用教程，我们会参考[TodoMVC](https://todomvc.com/)的功能，从0开始搭建一个简易的TodoMVC页面，最终的效果如下所示（用户也可以通过访问[开放页面](https://www.aliwork.com/APP_MX4GEM8SANEQ2MNY33AQ/custom/FORM-QQ866JB1CD8X3LHI4JB75509CRKR2PH0ZPMYK0)进行试用）：

![](../../../static/img/todoMVC.gif)

通过本篇教程你将掌握以下宜搭技能：
* 宜搭基本组件使用；
* 用户行为事件处理；
* 全局变量使用；
* 条件渲染&循环渲染使用；
* 自定义样式；
* 远程API使用；
* 宜搭OpenAPI使用；

本文不详细介绍在宜搭中创建并部署自定义页面的具体流程，如果对创建流程不了解，请移步至[快速开始](guide/start.md)文档，下面让我们一步一步来实现上面的效果吧。

:::tip
由于本示例主要以演示为主，任务列表只会返回近50条待办任务数据，另外我们会定期清除任务表单中的数据，切记使用当前示例作为日常的TodoList管理。

:::

## 基础UI——赋予TotoMVC基础的骨架
首先我们拆解一下官方TodoMVC页面的结构，大致会包含以下内容：

![](https://img.alicdn.com/imgextra/i3/O1CN01oxiQKe1opzyzIGCVN_!!6000000005275-2-tps-2084-1050.png_.webp)

根据TodoMVC的UI展示，我们可以找到宜搭中对应可以使用的组件（各组件的详细使用可以查看[组件文档](/docs/components/layout/tab)），如下所示：

* **大Logo** - 一个静态文案，可以使用 ```文本``` 组件；
* **任务输入框** - 用于输入新增任务的内容，可以使用 ```输入框``` 组件；
* **任务状态控制器** - 用于控制所属任务的完成状态，可以使用 ```单选``` 组件；
* **任务内容展示** - 用于展示所属任务的具体内容，可以使用 ```文本``` 组件；
* **任务操作项** - 用于删除所属任务，可以使用 ```按钮``` 组件（图中用的是一个Icon，为了更好的表达语义，我们选择使用按钮组件）；
* **待办任务数量展示** - 用于展示待完成的任务总数，可以使用 ```文本``` 组件；
* **任务状态筛选器** - 用于筛选不同状态的任务列表，可以使用 ```单选``` 组件；
* **清除所有完成状态的任务** - 用于清除所有已完成的任务，可以使用 ```按钮```组件；
* **工具介绍** - 介绍Todos的一些基本信息，静态展示，可以使用 ```文本``` 组件；

确定了各个部分需要使用的组件，我们就可以开始通过拖拽及基础的属性配置搭建一个简单的页面了，效果如下所示，开发者可以前往Demo示例查看详细的配置内容：

![](https://img.alicdn.com/imgextra/i4/O1CN014nEjZL1cNoDQNH4O8_!!6000000003589-2-tps-1341-358.png_.webp)


## 逻辑实现——赋予TodoMVC有趣的灵魂
上一步我们完成了TodoMVC的基本UI搭建，相当于完成了一副骨架，接下来我们就要赋予它灵魂了，这也是最重要的一步，最终效果详见[Demo示例](https://www.aliwork.com/APP_MX4GEM8SANEQ2MNY33AQ/custom/FORM-YE866VA1TE8X683D2VDQ85COMSZQ3NO8DSMYK1)，在这之前我们先分析一下TodoMVC大概有哪些功能：
* **创建待办任务** - 用户在任务输入框中填写任务内容，点击回车键，会在任务列表中创建一条待完成的任务；
* **更新状态** - 用户通过点击任务控制器，更改当前任务的完成状态（若已完成，任务文案将会被横线划掉）；
* **编辑任务内容** - 用户点击任务 ```Edit``` 按钮，唤起任务内容输入框，用户可以进行内容更改并点击回车键进行提交（官方的TodoMVC是采用双击的方式切换任务编辑状态，由于宜搭暂未开放双击事件，因此使用按钮方式进行编辑态切换）；
* **删除待办任务** - 用户点击 ```Delete``` 按钮，删除指定的待办任务；
* **统计未完成数量** - 在页面左下角显示当前未完成的待办任务的统计数量；
* **根据状态筛选** - 用户通过切换页面底部的筛选器显示不同的任务列表：
  * All - 显示所有任务列表；
  * Active - 显示待完成的任务列表；
  * Completed - 显示已完成的任务列表；
* **清空完成状态的待办任务** - 用户通过点击页面右下角的 ```Clear completed``` 按钮批量删除所有已完成的任务；

基本功能已经梳理完成，我们现在就一步一步来实现TodoMVC的基础功能，最终得到的效果如下所示：

![](../../../static/img/todoMVC1.0.gif)

### 步骤1：创建页面全局变量
宜搭的设计理念和React类似都是MVVM模式，因此我们在进行功能开发前需要先定义页面中需要使用的数据模型，即全局状态（具体使用详见[页面状态文档](guide/concept/state.md)），我们定义以下全局变量：

![](https://img.alicdn.com/imgextra/i1/O1CN01AyKG4O1RjpU3B7iD6_!!6000000002148-2-tps-3582-1904.png_.webp)
* todoList（数组类型） - 用于记录列表中的所有待办任务信息，结构如下所示：
```js
{
  todoList: [{
    id: 1, // 待办任务唯一ID
    content: 'XXXX', // 待办任务内容
    done: false // 待办任务完成状态
  }]
}
```
* editRowId（数字类型）- 用于标记当前处于编辑状态的任务ID（当处于编辑状态时，任务内容区域会变为输入框供用户进行内容修改）；
* mode（字符串类型）- 任务列表当前筛选状态值，可选值：All、Active和Completed，默认为：All；
* newId（数字类型）- 一个新ID生成标识，每当创建一个新的任务，会用这个newId作为新的任务ID，同时newId也会自动加1，保障所有任务ID的唯一性；

### 步骤2：实现创建待办任务功能
现在我们就可以开始实现第一个功能了，在这一步我们希望用户再输入框中输入任务内容，并点击回车键创建一条待办任务（事件绑定使用详见[事件处理文档](guide/concept/event.md)）。

![](https://img.alicdn.com/imgextra/i1/O1CN011Qu4iZ1Ij4Heyxf3I_!!6000000000928-2-tps-3582-1900.png_.webp)
如上图所示，我们在这一步主要做3件事情：
* 给输入框添加一个唯一标识（"input"），方便获取获取输入框输入的内容；
* 给输入框绑定一个onKeyDown的事件("onRowAdd")，当用户点击键盘时触发处理；
* 实现onRowAdd的方法，判断如果用户点击的是回车键，则在todoList的最上方插入一条新的待办任务数据；

具体实现代码如下：
```js
export function onRowAdd(e) {
  // 只处理回车键，如果不是回车键则直接返回
  if (e.keyCode !== 13) return;
  const {
    todoList,
    newId,
  } = this.state; // 从全局变量中获取当前任务列表数据及newId标识
    this.setState({
      todoList: [
        {
          id: newId,
          done: false,
          content: this.$('input').getValue(), // 获取输入框用户输入内容
        },
        ...todoList
      ], // 更新todoList数据，增加一条记录，id为newId，状态为待完成，内容为输入框的用户输入内容
      newId: newId + 1, // 更新newId供下次创建任务使用
    })
    this.$('input').setValue('') // 清空输入框中用户输入的内容
}
```

### 步骤3：实现任务列表循环展示
通过上一步，我们已经可以将用户输入的内容生成待办任务并添加到全局变量todoList中，接下来们就需要在输入框的下方展示待办列表了，这一步会用到[循环渲染](guide/concept/loop.md)的相关知识。
* 首先选中待办任务信息外层的容器组件，然后在高级属性中通过变量绑定方式将state.todoList绑定到容器的**循环数据**上；

![](https://img.alicdn.com/imgextra/i1/O1CN012tOjBa1s4941E3hIf_!!6000000005712-2-tps-3582-1908.png_.webp)

![](https://img.alicdn.com/imgextra/i4/O1CN01uhEjo81XbwMLU0AxO_!!6000000002943-2-tps-3582-1906.png_.webp)

* 其次我们需要将任务的完成状态及内容绑定到循环数据对应的数据字段上，在循环渲染中，开发者可以通过 ```item``` 拿到当前行的数据，如下所示：
  * 设置单选组件的默认值属性绑定任务状态；
![](https://img.alicdn.com/imgextra/i2/O1CN01o7uFrW29XJl6olSRa_!!6000000008077-2-tps-3580-1906.png_.webp)
![](https://img.alicdn.com/imgextra/i4/O1CN012w90mI21XIou7a6rG_!!6000000006994-2-tps-3582-1904.png_.webp)

  * 设置文本组件的内容属性绑定任务内容；
![](https://img.alicdn.com/imgextra/i4/O1CN010tAIap1pnXTCHmkjp_!!6000000005405-2-tps-3582-1910.png_.webp)
![](https://img.alicdn.com/imgextra/i4/O1CN017i9EfC1fQxn5mxCpJ_!!6000000004002-2-tps-3582-1900.png_.webp)

完成这一步之后，通过预览我们便可以得到以下效果：

![](https://img.alicdn.com/imgextra/i3/O1CN01ZJRFIE28wDgGF5oh9_!!6000000007996-2-tps-3582-1122.png_.webp)


### 步骤4：实现任务更新&删除
通过上一步，我们基本实现了todoList的添加及展示功能，接下来我们就需要操作实现任务的更新及删除功能了。
#### 实现任务内容的多态展示
通过分析TodoMVC的功能，我们发现任务列表中的任务内容有3种不同的展示形态：
![](https://img.alicdn.com/imgextra/i1/O1CN01HCBldB1M8Cs3n3lGx_!!6000000001389-2-tps-2224-1182.png_.webp)

我们决定用3个组件（2个文本组件+1个输入框组件）来实现不同展示效果，并通过[条件渲染](guide/concept/condition.md)绑定是否渲染属性来实现展示切换：

![](https://img.alicdn.com/imgextra/i2/O1CN01eH9lP31xwiKZo0Ezj_!!6000000006508-2-tps-3582-1910.png_.webp)

以下是三个组件的是否渲染变量绑定值：
* **编辑态** - 当全局变量editRowId和当前行的ID一致时显示：```state.editRowId === this.item.id``` 
* **待完成态** - 当前任务不处于编辑态且其状态为待完成时显示：```state.editRowId !== this.item.id && !this.item.done```
* **已完成态** - 当前任务不处于编辑态且其状态为已完成时显示：```state.editRowId !== this.item.id && this.item.done```

#### 实现任务内容编辑
在这一步我们希望实现的效果是，用户点击任务操作栏中的 ```Edit``` 按钮，任务切换到编辑态，同时用户可以基于现有内容进行2次编辑，并点击回车提交编辑内容，任务回归到之前的展示状态。
要实现该功能，我们需要分两步进行：
* 给Edit按钮绑定onClick事件("onEdit")，当用户点击 ```Edit``` 按钮时，我们将当前任务的id设置为全局变量RowEditId并触发重新渲染使该任务状态切换为编辑态，如下所示：
![](https://img.alicdn.com/imgextra/i4/O1CN01RBd1ci1KijDvdtpXi_!!6000000001198-2-tps-3582-1902.png_.webp)

onEdit代码如下所示：
```js
export function onEdit(){
  this.setState({
    editRowId: this.item.id
  });
}
```
* 给任务编辑态的输入框组件设置一个唯一标识("rowInput")，并参考创建任务的实现逻辑，绑定onKeyDown事件("onRowEdit")更新todoList中当前任务的内容，如下所示：
![](https://img.alicdn.com/imgextra/i4/O1CN01Lv59yh1CSE1jo9yl7_!!6000000000079-2-tps-3582-1906.png_.webp)

onRowEdit代码如下所示：
```js
export function onRowEdit(e) {
  // 只处理回车键，如果不是回车键则直接返回
  if (e.keyCode !== 13) return;
  this.setState({
    todoList: this.state.todoList.map((item) => {
      if (item.id === this.item.id) { // 从todoList找到当前编辑的任务并更新其内容
        return {
          ...item,
          content: this.$('rowInput').getValue(),
        };
      }
      return item;
    }),
    editRowId: 0, // 重置editRowId使当前任务回归到之前的展示状态
  })
}
```

PS：由于任务的内容编辑是基于已有内容的，因此需要通过变量方式设置输入框的默认值为 ```item.content```。

#### 实现任务完成状态切换
当用户点击任务最前方的单选框时，需要能够切换任务的完成状态，因此我们需要监听单选组件的onChange事件("onTodoCheck")，当单选框状态改变时实时更改todoList中任务状态：

![](https://img.alicdn.com/imgextra/i4/O1CN01Uz4FGm1eDqpyWbj8e_!!6000000003838-2-tps-3582-1906.png_.webp)

onTodoCheck的代码如下所示：
```js
export function onTodoCheck({value}){
  this.setState({
    todoList: this.state.todoList.map((item) => {
      if (item.id === this.item.id) { // 从todoList找到当前编辑的任务并更新其状态
        return {
          ...item,
          done: value === 'done'
        };
      }
      return item;
    }),
    editRowId: 0,
  })
}
```

#### 实现任务删除
当用户点击任务操作项中的 ```Delete``` 按钮时，需要能够从任务列表中将该任务删除，这一步相对简单，我们只需要绑定Delete按钮的onClicks事件("onDelete")，将该条任务从todoList中去掉：
![](https://img.alicdn.com/imgextra/i4/O1CN01ccNNAO1fvBvu5YGpz_!!6000000004068-2-tps-3582-1902.png_.webp)

onDelete代码如下所示：
```js
export function onDelete(){
  this.setState({
    todoList: this.state.todoList.filter((item) => { // 从todoList中剔除当前任务
      return item.id !== this.item.id 
      })
  });
}
```

### 步骤5：实现待办任务统计展示
在todoMVC页面中，在左下角会有一个统计信息用于统计当前任务列表中待完成的任务数量，这个功能就相对比较简单，我们只需要给文本组件绑定一个变量在每次渲染时计算并显示todoList中done状态为false的数量，如下所示：
![](https://img.alicdn.com/imgextra/i4/O1CN01BzMunG1ZIp3Oh9TX7_!!6000000003172-2-tps-3582-1906.png_.webp)

getleftCount代码如下所示：
```js
export function getleftCount() {
  const {
    todoList
  } = this.state;
  return todoList.filter(item => !item.done).length;
}
```

### 步骤6：实现待办任务按状态筛选
在这一步，我们要实现任务列表的状态筛选功能，当用户点击底部的状态筛选器时，筛选不同状态的任务列表，这个功能我们需要分2步实现：

* 监听单选组件的onChange事件("onModeChange")，当用户点击更改筛选器时更新全局变量mode的值：
![](https://img.alicdn.com/imgextra/i2/O1CN017cBdnw1hKfa6SEJTD_!!6000000004259-2-tps-3582-1900.png_.webp)

onModeChange代码如下所示：
```js
export function onModeChange({value}){
  this.setState({
    mode: value
  });
}
```

* 大家还记得我们在步骤三中给任务列表绑定的循环数据吧，在这一步我们需要重新绑定任务列表的循环数据，将之前的 ```state.todoList``` 改为 ```getShowList()``` 用于根据当前筛选值返回符合条件的任务列表：

![](https://img.alicdn.com/imgextra/i1/O1CN01xhVTEp1rQIbdLJU9i_!!6000000005625-2-tps-3582-1896.png_.webp)

getShowList代码如下所示：
```js
export function getShowList() {
  const {
    mode,
    todoList = [],
  } = this.state;
  if (mode === 'Active') { // 如果筛选项为Active，返回所有待完成的任务列表
    return todoList.filter(item => !item.done);
  } else if (mode === 'Completed') { // 如果筛选项为Completed，返回所有已完成的任务列表
    return todoList.filter(item => item.done);
  }
  return todoList; // 默认返回所有的任务列表
}
```

### 步骤7：实现清除完成状态待办任务
最后一步就比较简单了，它其实是步骤4中删除任务的批量操作，当用户点击 ```Clear Completed``` 按钮时，将任务列表中的已完成状态任务清除掉，我们只需要监听Clear Completed按钮的onClick事件("onClearCompleted")，当用户点击按钮时清除掉todoList中所有已完成的任务：

![](https://img.alicdn.com/imgextra/i1/O1CN0169m0ws1L9IC46joo4_!!6000000001256-2-tps-3582-1900.png_.webp)

onClearCompleted代码如下所示：
```js
export function onClearCompleted(){
  this.setState({
    todoList: this.state.todoList.filter(item => !item.done) // 筛选并剔除所有未完成的任务
  });
}
```

## 样式完善——赋予TodoMVC好看的皮囊
上一步我们完成的TodoMVC的基础功能实现，但是给人的第一感觉就是丑，对于一个产品好看的皮囊不是最重要的，但是如果没有一副好的皮囊，它一定不是一个好的产品，宜搭提供了自定义样式能力，详见[样式定制文档](guide/concept/style.md)，通过定制样式，我们将得到下效果，（用户也可以通过访问[开放页面](https://www.aliwork.com/APP_MX4GEM8SANEQ2MNY33AQ/custom/FORM-YE866VA1TB8XSARRZ52H92HCOZ033KZXZNMYK2)进行试用）：

![](../../../static/img/todoMVC2.0.gif)

本文不详细讲解每一个样式定制的细节点，只会列举一些有代表性的样式定制case：
* 通过样式面板定制组件样式 - 例如TodoList的大logo，我们可以通过在样式面板中配置字体样式来实现，如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN01MszNhR1KLpQ9ho3wB_!!6000000001148-2-tps-3582-1904.png_.webp)

* 通过CSS定制组件样式 - 样式面板覆盖面毕竟有限，宜搭提供了通过书写CSS来定制组件样式的能力，例如面板下方的层叠效果，我们就是通过before伪类的方式实现的：
![](https://img.alicdn.com/imgextra/i3/O1CN01eoBP0S1vzLNE9c5oE_!!6000000006243-2-tps-3582-1906.png_.webp)


## 数据源对接——赋予TodoMVC强大的装备
到上一步，官方的TodoMVC的基本能力就实现了，不过细心的开发者会发现现在这个产品状态功能可用，但是每次刷新之前提交的待办任务就会被清空，这可不是是一个可以交付的TodoList功能，宜搭除了提供基础的UI及前端逻辑定制能力，还提供了强大的数据能力，现在就让我们为TodoMVC披上强大的装备，实现数据的持久化存储吧，最终达到的效果如下所示：


### 步骤1：创建普通表单，构建任务数据存储结构
首先，我们在当前应用下创建一个普通表单用于存储待办任务的信息，具体创建普通表单的方案详见[宜搭使用文档](https://www.yuque.com/yida/support/ybuoxl)，这里不展开描述，如下所示：

![](https://img.alicdn.com/imgextra/i1/O1CN01kmmof91CgshQRc516_!!6000000000111-2-tps-3582-2042.png_.webp)

表单创建完成后，我们将得到一个FormUuid，即这个表单的唯一标识，如上图红框所示。

### 步骤2：使用远程API，实现任务的增删改查
有了存储任务数据的地方，我们就需要在TodoMVC中创建异步API用户实现任务的增删改查，宜搭设计器提供了远程API配置用于请求远程http接口（详见[远程API文档](guide/concept/datasource.md)），同时宜搭也提供了常用的OpenAPI接口来实现数据的基本操作（详见[OpenAPI文档](guide/openAPI.md)），我们在搭建页面中创建以下远程API配置：
![](https://img.alicdn.com/imgextra/i2/O1CN01Ak0sVG22zzEpdzInA_!!6000000007192-2-tps-3582-1904.png_.webp)


#### todoList
获取任务列表数据，具体配置如下所示：
![](https://img.alicdn.com/imgextra/i2/O1CN01FKiYkf1DesaKyw3lW_!!6000000000242-2-tps-3582-2016.png_.webp)
* 将自动加载开关打开，即进入页面自动加载该接口，宜搭会自动将接口返回内容挂载到 ```state.todoList``` 上；
* 按照OpenAPI文档中的格式配置请求链接及请求方法；
* 配置请求参数
  * **formUuid** - 我们用于存储任务信息的表单的唯一标识，即上一步创建的表单的formUuid；
  * **currentPage** - 当前页码，宜搭的开放接口是支持分页的，我们这里主要做示例展示就不做分页处理了，将参数固定设置为1取第一页数据；
  * **pageSize** - 每页数量，宜搭开放接口默认每页数量为10，为了更好的演示体验，我们将参数固定设置为50，取近50条数据；
* 配置didFetch处理函数，将开放接口的结构转换成我们在上面逻辑实现部分能够被识别的数据结构，具体实现如下：
```js
function didFetch(content) {
  return (content.data || []).map(item => {
    return {
      id: item.formInstId, // 表单数据的实例ID，即每一行数据的唯一标识
      content: item.formData.textField_kymq5pdi, // 任务内容信息，textField_kymq5pdi为任务表单中任务内容控件的唯一标识
      done: item.formData.radioField_kymq5pdj === '已完成' // 任务状态，新建任务默认为未完成状态，radioField_kymq5pdj任务表单中任务状态控件的唯一标识
    }
  });
}
```

#### add
用于创建待办任务，具体配置如下：
![](https://img.alicdn.com/imgextra/i2/O1CN01xQEuxH1Gt1fF8yxwO_!!6000000000679-2-tps-3582-2018.png_.webp)
* 按照OpenAPI文档中的格式配置请求链接及请求方法；
* 配置请求参数
  * **formUuid** - 同上；
  * **appType** - 当前应用的应用ID （以APP_开头，可以从当前页面URL地址上获取）；
* 配置willFetch处理函数，我们需要按照OpenAPI中的参数格式将任务信息转换成可以被宜搭识别的格式，具体实现如下：
```js
function willFetch(vars, config) {
  const {
    content
  } = vars.data; // 获取新增任务的内容信息
  vars.data.formDataJson = JSON.stringify({ // 新建表单实例需要通过stringify处理参数并放入formDataJson字段
    textField_kymq5pdi: content, // 任务内容信息，textField_kymq5pdi为任务表单中任务内容控件的唯一标识
    radioField_kymq5pdj: '未完成' // 任务状态，新建任务默认为未完成状态，radioField_kymq5pdj任务表单中任务状态控件的唯一标识
  });

}
```
* 配置didFetch处理函数，当创建接口请求成功后弹窗提醒操作成功并刷新任务列表，具体实现如下：
```js
function didFetch(content) {
  this.utils.toast({ // 提醒操作成功
    title: 'Add Success!',
  });
  this.reloadDataSource(); // 重新请求初始请求（即todoList接口），刷新任务列表
  return content; // 重要，需返回 content
}
```

#### del
用于删除待办任务，相对简单，具体配置如下：
![](https://img.alicdn.com/imgextra/i3/O1CN01vamdjV26yOK50cP9n_!!6000000007730-2-tps-3582-2016.png_.webp)

不过有两条需要注意的：
* 删除任务的任务ID不固定，因此需要再调用dataSourceMap.del.load API是进行传入具体要删除的任务ID；
* 删除任务没有实现didFetch，是因为在实现Clear Completed时需要批量调用该异步API，所以需要在手动调用异步请求的then方法中实现didFetch的逻辑；

#### update
用于更新待办任务，具体配置如下：
![](https://img.alicdn.com/imgextra/i4/O1CN01ogrBq9244Ofc0LtkK_!!6000000007337-2-tps-3582-2018.png_.webp)
* 按照OpenAPI文档中的格式配置请求链接及请求方法；
* 配置willFetch处理函数，同add配置，我们需要把任务内容转换为宜搭可以识别的数据结构，具体实现如下：
```js
function willFetch(vars, config) {
 const {
   id,
   content,
   done
 } = vars.data;
 vars.data.formInstId = id; // 任务ID，任务的唯一标识
 const data = {};
 if (content) { // 如果需要修改content信息，则拼接该参数
   data.textField_kymq5pdi = content;
 }
 if (done) { // 如果修改状态信息，则拼接该参数
   data.radioField_kymq5pdj = done ? '已完成' : '未完成';
 }
  vars.data.updateFormDataJson = JSON.stringify(data);
}
```

* 配置didFetch处理函数，逻辑与add相似成功提示+刷新列表，具体实现如下：
```js
function didFetch(content) {
  this.utils.toast({
    title: 'Update Success!',
  });
  this.reloadDataSource();
  return content; // 重要，需返回 content
}
```

:::caution
我们在增加远程API配置的同时删除了几个之前设置的全局变量：
* **todoList** - 因为现在列表都是通过远程API获取，因此state中不用再存储totoList信息；
* **newId** - 因为每次创建待办任务，宜搭都会自动生成一个唯一的formInstId，因此不需在进行任务Id生成；
:::

### 步骤3：采用远程API调用替换原有数据管理逻辑
完成了上一步的远程API设置，我们仅需要修改之前部分的逻辑实现部分，将操作全局变量的逻辑替换为远程API调用，具体改动点如下：
* 修改 **onRowAdd** 实现，调用add远程API进行任务创建，具体实现如下：
```js
export function onRowAdd(e) {
  // 只处理回车键
  if (e.keyCode !== 13) return;
  this.dataSourceMap.add.load({ // 调用远程API
    content: this.$('input').getValue()
  });
}
```

* 修改 **onDelete** 实现，调用del远程API进行任务删除，具体实现如下：
```js
export function onDelete(){
  this.dataSourceMap.del.load({ // 调用远程API
    formInstId: this.item.id // 传入动态参数
  }).then(res => { // 远程API回调处理，类似配置中的didFetch
    this.utils.toast({ // 成功提示
      title: 'Delete Success!',
    });
    this.reloadDataSource(); // 刷新任务列表
  });
}
```

* 修改 **onRuleEdit** 实现，调用update远程API更新任务内容，具体实现如下：
```js
export function onRowEdit(e) {
  // 只处理回车键
  if (e.keyCode !== 13) return;

  this.dataSourceMap.update.load({
    id: this.item.id,
    content: this.$('rowInput').getValue()
  });
  this.setState({
    editRowId: 0,
  });
}
```

* 修改 **onTodoCheck** 实现，调用update远程API更新任务状态，具体实现如下：
```js
export function onTodoCheck({value}){
  this.dataSourceMap.update.load({
    id: this.item.id,
    done: value === 'done'
  });
  this.setState({
    editRowId: 0,
  });
}
```

* 修改 **onClearCompleted** 实现，批量调用del远程API清除已完成任务，具体实现如下：
```js
export function onClearCompleted(){
  const deleteItems = this.state.todoList.filter(item => item.done); // 筛选需要被删除的任务列表
  Promise.all(deleteItems.map(item => this.dataSourceMap.del.load({ // 通过Promise.all批量调用del远程接口进行任务删除
    formInstId: item.id
  }))).then(res => { // Promise.all回调处理
    this.utils.toast({ // 成功提示
      title: 'Clear Success!',
    });
    this.reloadDataSource(); // 刷新任务列表
  });
}
```


## 结束语
本篇教程从0开始一步一步引导开发者完成一个TodoMVC自定义页面的搭建，搭建过程中几乎涉及到宜搭自定义页面的所有常用知识，希望能够通过这个例子让您的宜搭使用技能提升一个等级能够实现更加复杂的业务支撑场景，有任何问题欢迎及时反馈。