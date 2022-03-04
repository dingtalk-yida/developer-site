# 贡献指南

这篇指南会指导你如何为 宜搭开发者中心 贡献一份自己的力量，我们提供 Issues 和 Pull Request 两种共建方案：

## Issues

我们使用 [GitHub Issues](https://github.com/dingtalk-yida/developer-site/issues) 来做 开发者中心的 问题追踪，如果你发现文档中存在的问题，可以通过以下模板来提交 issue，我们会定期 Review 并进行文档更正：

```
- 问题文档链接：https://yida-developer.gitee.io/docs/guide/api；
- 问题描述：this.setState() 描述有误，setState 不支持回调函数；
- 推荐修复方案：将 setState API 中的 callback 用法去除；
```

在你报告一个 issue 之前，请先确保已经搜索过已有的 issue 和阅读了我们的 常见问题。

## Pull Request

我们更建议你通过 Pull Request 的方式帮助我们共同完善 宜搭开发者中心，如果你还不清楚怎么在 GitHub 上提 Pull Request，可以阅读下面这篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

宜搭团队会关注所有的 pull request，我们会 review 以及合并你的修改，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。

我们维护的主干分支为master，因此请提交 pull request 到 master，我们会每周从 master 发布一个 patch 版本。

## 开发流程

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

必须在完成 `npm run build`之后，该命令会在本地启动一个静态服务，通过 [http://localhost:3000/](http://localhost:3000) 进行访问，效果和线上效果完全一致并支持全局搜索功能。
