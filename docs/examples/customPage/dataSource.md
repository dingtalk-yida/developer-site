---
title: 在自定义页面上使用表单_流程数据用作展示数据源
order: 16
---
## 使用背景
在自定义页面如何将表单/流程页面中的数据获取，并进行展示呢。可参考本文档配置获取商品信息展示在自定义页面。
## 视频教程

<video width="100%" controls>
  <source
    src="https://cloud.video.taobao.com/play/u/137701/p/1/d/hd/e/6/t/1/297651173248.mp4?auth_key=YXBwX2tleT04MDAwMDAwMTImYXV0aF9pbmZvPXsidGltZXN0YW1wRW5jcnlwdGVkIjoiNmQwNzRiMmRjMDVkOTM4NTk2MTQwOGFmNWY3ZDkwMmUifSZkdXJhdGlvbj0mdGltZXN0YW1wPTE2NDcyNTU4ODA="
  ></source>
</video>

## 操作步骤
### 步骤一：如何获取表单已经提交的数据？
查看 👉  [宜搭平台接口（前端可直接调用）](https://www.yuque.com/yida/support/aql605#936pox)
### 步骤二：添加数据源
**添加数据源 `getDatas`**
接口地址例如： `/dingtalk/web/APP_M14MKG7F402M1Q7H2MGO/v1/form/searchFormDatas.json`
![image.png](https://img.alicdn.com/imgextra/i3/O1CN012MKN7j1DiXlA8TftJ_!!6000000000250-2-tps-3582-2106.png)

**获取 formUuid 填充到请求参数上。**
![image.png](https://img.alicdn.com/imgextra/i1/O1CN01nixrU91wI7cXR5Ecu_!!6000000006284-2-tps-1908-881.png)

**formUuid 的地址**
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01dn9Pf529VwZwP3nqw_!!6000000008074-2-tps-1900-877.png)
**保存数据源，然后我们就可以在请求接口中看到对应的值了**
## 效果演示
![image.png](https://img.alicdn.com/imgextra/i3/O1CN01Y7moX51SFtDSqMtbK_!!6000000002218-2-tps-1012-458.png)

### 在线试玩
在线体验请移步开发者中心 👉[**使用表单/流程数据用作展示数据源**](https://www.aliwork.com/developer/show-data)


:::warning
宜搭为了更好的优化宜搭使用手册内容和质量，占用您3-5分钟时间，辛苦填写一下文档反馈问卷。文档反馈问卷是匿名提交，同时问卷信息仅用于宜搭文档体验反馈收集，感谢您对宜搭的支持！
[**点此填写调研问卷**](https://www.aliwork.com/o/cesqwekd?ddtab=true)
:::


**--------------------获取宜搭最新信息，欢迎关注我们--------------------**
![宜搭.jpg](https://img.alicdn.com/imgextra/i4/O1CN01HT62eC1PinMhlldmG_!!6000000001875-0-tps-1800-1012.jpg)
