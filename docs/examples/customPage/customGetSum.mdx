---
title: 自定义页面选择行自动求和
order: 18
---
## 使用场景
在自定义页面展示数据时，有时会需要将选中的多行数据数值进行加法运算，那么这时我们该如何快速的计算出选中行数值的总和并展示在页面中呢？那么在这里，我们将给大家演示如何实现自定义页面选择行自动求和。
## 实现效果
![自定义页面求和5.gif](https://img.alicdn.com/imgextra/i1/O1CN01oOcIWe1v3B4sckSSs_!!6000000006116-1-tps-1380-735.gif)
## 在线试玩
在线体验请移步开发者中心 👉 [自定义页面选择行自动求和](https://www.aliwork.com/developer/custom-getSum)
**--------------------获取宜搭最新信息，欢迎关注我们--------------------**
![宜搭.jpg](https://img.alicdn.com/imgextra/i1/O1CN01Mo70qf1szqyKxRuKp_!!6000000005838-0-tps-1800-1012.jpg)

## 实现步骤
### 步骤一：创建页面
**「基础数据表」： **表单页面，存储基础数据，如标题及数值。
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01j9dlf31hkmA4JWX2h_!!6000000004316-2-tps-1364-462.png)
基础数据表
**「自定义页面求和」：**自定义页面，使用表格组件，并放入数值组件用来展示求和数据。
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01BlRTTv1mDrmTA7fHV_!!6000000004921-2-tps-2280-718.png)
自定义页面求和
### 步骤二：远程数据源获取待办展示在表格中
1. 增加远程数据源，调用「根据条件搜索表单实例详情列表」接口
参考文档：[宜搭平台接口（页面数据源可直接调用）](https://www.yuque.com/yida/support/aql605?view=doc_embed&inner=936pox)
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01L9e3gw1FquDdx0tJO_!!6000000000539-2-tps-2060-1084.png)
创建远程数据源，配置获取表单数据接口
2. 将返回数据处理成表格格式
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01Ni9AtZ23DGjORMBie_!!6000000007221-2-tps-2080-1044.png)
添加请求完成时回调函数（didFench）
:::info
在value中定义需要使用的内容，同时需要给表格的数据主键配置唯一值，因此将「formInstId」，即实例ID作为主键。
:::
参考代码如下：
```javascript
function didFetch(content) {
  // content.b = 1; 修改返回数据结构中的 b 字段为1
  const arr = [];
    const data = content.data.map((item) => {
      let value = {
        name: item.formData.textField_ktwjybnu,
        salary: item.formData.numberField_ktwjybny,
        formInstId: item.formInstId,
       }
      arr.push(value)
    })
  const result = {
    "data": arr,
    "totalCount": content.totalCount,
    "currentPage": content.currentPage,
  }
  return result; // 重要，需返回 content
}
```
3. 将处理好的数据展示在表格中
给表格绑定数据源，并配置 formInstId 为数据主键。
![自定义页面求和1.gif](https://img.alicdn.com/imgextra/i4/O1CN01Gq3UqI1SWNTHX6eTS_!!6000000002254-1-tps-1380-735.gif)
绑定数据源并配置主键
4. 配置表格分页
![自定义页面求和2.gif](https://img.alicdn.com/imgextra/i4/O1CN01wFkonf1PFU18rxzNe_!!6000000001811-1-tps-1380-735.gif)
添加分页动作
### 步骤三：开启行选择并将获取数据求和
1. 打开行选择器
![自定义页面求和3.gif](https://img.alicdn.com/imgextra/i2/O1CN01VnkC7Q1G9gSXAW3ZY_!!6000000000580-1-tps-1380-735.gif)
打开行选择器
2. 添加选择变动回调函数并求和赋值
3. 添加选择变动回调函数
![自定义页面求和4.gif](https://img.alicdn.com/imgextra/i3/O1CN01wOp0cx1a5pROBHKpK_!!6000000003279-1-tps-1380-735.gif)
添加选择变动回调函数
4. 获取行数据并求和赋值
当选中行数据时，会返回 selectedRowKeys 及 records 两个数据，其中 records 为处理后的行数据，因此需要将选中的行数据循环获取数值，并将数值依次相加。最后将相加后所得的数据赋值给数值组件。
参考代码如下：
```javascript
export function onSelectChange(selectedRowKeys, records) {
	console.log(selectedRowKeys, records);
	//存储选中行数据
  const arrData = []
  let salarySum = 0;
   records.forEach(item => {
		// 计算总金额
		salarySum = salarySum + item.salary;
  	// 存储选中行数据
  	arrData.push(item);
  });
  console.log("总数", salarySum);
  this.$('numberField_ktwk2hbu').setValue(salarySum)
}
```