---
title: 自定义组件常见问题
order: 6
---

## 1. 目前没找到删除功能

内测期间不会安排删除功能，正式上线也可能不会有删除功能。删除带来的是复杂的被依赖问题，暂时不是必须的。目前会类似 [https://www.npmjs.com/](https://www.npmjs.com/)。

### 2. 怎么理解业务组件？

可以参考这个[链接](/docs/guide/keywords)

## 3. 组件的构成

组件由视图和属性构成，在组件的消费侧可以通过改变组件的属性让组件展示出不同的视图。
视图再细分可以分为设计视图和运行时视图，一般情况下设计视图和运行时视图可以复用。
![](https://img.alicdn.com/imgextra/i4/O1CN016n4oqE1cRTOPgusdF_!!6000000003597-2-tps-1503-305.png_.webp)
在组件的生产侧，我们要分别构建组件的视图和属性。
![](https://img.alicdn.com/imgextra/i4/O1CN01nML3gh1lgtGad4MMu_!!6000000004849-2-tps-1706-481.png_.webp)

## 4. 带自定义组件的应用通过应用分发给其他组织，能正常打开吗？

可以。
带自定义组件的应用分发给其他组织后，该组织也可以正常使用该组件，但是无法更新组件。更新组件需要服务商通过远程维护的方式将分发的应用的组件重新安装新版本。如果组件抽象的好，其实可以解决一部分应用分发后无法再更新应用的诉求。

## 5. 页面中如何访问自定义组件的属性？

自定义组件和基础组件一样，使用 this.$('fieldId').get('propName') 获取对应组件的属性。

## 6. 页面中如何更新自定义组件的属性？

自定义组件和基础组件一样，使用 this.$('fieldId').set('propName', propValue) 更新对应组件的属性。
或者使用绑定数据源变量的方式。

## 7. 组件中如何获取页面的组件，和页面内的组件做联动？

可以通过给自定义组件添加一个 function 类型的属性，即事件回调。
在页面中可以通过这个事件回调和页面其他组件做联动。
在组件中可以通过 this.props.xxx() 在合适的时机，比如组件的某个事件或组件的 DidMount 来执行这个回调。
小提示： function 类型的属性可以添加默认值并且可以设置隐藏。

## 8. 自定义组件怎么删除？
暂时不支持删除组件，删除带来的是复杂的被依赖问题。目前会类似 [https://www.npmjs.com/](https://www.npmjs.com/)。

## 9. 自定义组件怎么卸载？
暂时不支持组件卸载，组件卸载后会对已有的应用造成影响。后续的迭代会考虑这个功能。

## 10. 自定义组件支持安装三方的 NPM 包吗？

暂时不支持，可以采用动态加载 CDN 的资源方式。

```javascript
function loadScript(src, callback) {
  if (!src) {
    return;
  }
  const node = document.createElement('script');
  node.src = src;
  node.addEventListener('load', callback, false);
  document.head.appendChild(node);
}
function loadCss(url) {
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = url;
  document.body.appendChild(linkElement);
}
(function loadAssets() {
  loadCss('https://dev.g.alicdn.com/yida-platform/react-cropper/1.0.0/css/react-cropper.css');
  loadScript('https://dev.g.alicdn.com/yida-platform/react-cropper/1.0.0/js/react-cropper.js', () => {
    // your code
  });
})();
```

## 11. 组件安装后，在面板里看不到？

A: 检查下安装范围
![](https://img.alicdn.com/imgextra/i2/O1CN01fiBoZR23opDLiGjR1_!!6000000007303-2-tps-1152-886.png_.webp)

## 12. 自定义组件如何在表单中提交数据？

A: 目前宜搭的自定义组件还未开放表单组件，若想要提交数据可以采用填充到已有的表单组件的方式。例如：声明一个 唯一标识 的属性，在使用时传入已有的表单唯一表单，在组件侧通过事件将需要的数据回填到已存在的表单上。

## 13. 组件版本说明

组件分 **开发版**和**正式版**。
宜搭的自定义组件版本在[语义化版本](https://semver.org/lang/zh-CN/)的基础上做了额外的约定。

1. 0.1.0 默认为开发版本，开发版可和组件设计器保持实时同步，用来调试组件。
1. 1.x.x 为发布后的正式版本，会固定当前版本的功能，保证线上使用该组件的稳定性。**所以线上的正式应用请务必安装 1.x.x 发布后的正式版本。**

## 14. 我定义了一个属性，改变这个属性，组件内如何根据这个属性来产生变化？

在组件设计器内，找到需要发生变化的组件，找到相关的属性，给该属性绑定一个变量或者自定义处理函数，通过 this.props.xxx 来判断做不同的处理。例如：
![](https://img.alicdn.com/imgextra/i1/O1CN01Ai9osB1Fj7UYHihru_!!6000000000522-2-tps-1706-599.png_.webp)或
![](https://img.alicdn.com/imgextra/i3/O1CN012UoF0o1dhn7VEYekD_!!6000000003768-2-tps-1705-507.png_.webp)

## 15. 组件中能动态设置样式吗？

可以使用容器组件，通过给容器组件添加 「自定义样式类」，绑定变量控制。
![](https://img.alicdn.com/imgextra/i2/O1CN01afzfzY1K4slyAqAdj_!!6000000001111-2-tps-926-884.png_.webp)
