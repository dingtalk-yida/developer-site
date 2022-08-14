# 贡献指南

这篇指南会指导你如何为 **宜搭开发者中心** 贡献一份自己的力量，我们提供 Issues 和 Pull Request 两种共建方案：

## Issues

我们使用 [GitHub Issues](https://github.com/dingtalk-yida/developer-site/issues) 来做开发者中心的问题追踪，如果你发现文档中存在的问题，可以通过以下模板来提交 issue，我们会定期 Review 并进行文档更正：

```
- 问题文档链接：https://yida-developer.gitee.io/docs/api/yidaAPI；
- 问题描述：this.setState() 描述有误，setState 不支持回调函数；
- 推荐修复方案：将 setState API 中的 callback 用法去除；
```

在你报告一个 issue 之前，请先确保已经搜索过已有的 issue。

## Pull Request

我们更建议你通过 Pull Request 的方式帮助我们共同完善宜搭开发者中心，用户可以直接点击每篇文档最下方的 **编辑此页** 按钮快速参与文档共建，具体步骤如下所示：

* 点击 **编辑此页** 进入github页面（如果没有github账号需要注册一个）；
![](https://img.alicdn.com/imgextra/i4/O1CN01fG5Jqu1SKTAxwXwdi_!!6000000002228-2-tps-3582-1440.png_.webp)

* fork开发者中心仓库代码到个人github空间（只需要操作一次，后续修改申请将跳过此步）：
![](https://img.alicdn.com/imgextra/i3/O1CN017Klg3o1FgN6zLYHLv_!!6000000000516-2-tps-3582-976.png_.webp)

* 进入文档修改页进行文档修正并提交修改：
![](https://img.alicdn.com/imgextra/i1/O1CN01v0zEz01aTe2FUQvXL_!!6000000003331-2-tps-3576-1752.png_.webp)

* 确定修改内容并提交Pull Request:
![](https://img.alicdn.com/imgextra/i3/O1CN01ZW5jyG1V8VgIuoSLE_!!6000000002608-2-tps-3560-1606.png_.webp)

至此，一个简单的Pull Request就提交完成了，宜搭团队会关注所有的 Pull Request，我们会 review 以及合并你的修改，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改，我们会每周从 master 发布一个 patch 版本。


:::tip
开发者也可以直接fork开发者中心的仓库代码到本地进行文档编辑并提交 Pull Request，如果你还不清楚怎么在 GitHub 上提 Pull Request，可以阅读下面这篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

我们维护的主干分支为master，因此请提交 Pull Request 到 master。
:::

:::tip
如果开发者需要提交新增文档内容，需要在 Pull Request 中简单描述背景及使用场景，以便我们进行Check及添加。
:::

## 本地开发流程

宜搭开发者中心是通过 [Docusaurus 2](https://docusaurus.io/) 构建的一个开发者平台，在你 clone 了 开发者中心 的代码并且使用 npm install 安装完依赖后，你还可以运行下面几个常用的命令：

### 本地启动

```
$ npm start
```

启动后，我们便可以在本地通过 [http://localhost:3000/](http://localhost:3000) 进行访问。

> P.S.: 本地启动情况下，全局搜索是不生效的。

### 构建

```
$ npm run build
```

构建产物将输出到 build 目录。

### 本地真实预览

```
$ npm run serve
```

必须在完成 `npm run build`之后，该命令会在本地基于build目录启动一个静态服务，通过 [http://localhost:3000/](http://localhost:3000) 进行访问，效果和线上效果完全一致并支持全局搜索功能。
