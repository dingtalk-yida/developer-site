# 宜搭开发者中心

宜搭开发者中心是通过 [Docusaurus 2](https://docusaurus.io/)构建的一个开发者平台，用于沉淀宜搭面向开发者的文档及基本示例。

### 安装依赖

```
$ npm install
```

### 本地启动

```
$ npm start
```
启动后，我们便可以在本地通过[http://localhost:3000](http://localhost:3000)进行访问。

> PS: 需要注意的是本地启动情况下，全局搜索是不生效的。


### 构建
```
$ npm run build
```
构建产物将输出到build目录。

### 部署
```
$ npm run deploy
```

通过执行部署命令会自动执行文档构建，我们会将文档部分（即build文件夹下的内容）推送到gitlab的dosc分支，从而触发部署到[pages站点](https://pages.alibaba-inc.com)，接下来便可以通过[https://yida-developer.alibaba-inc.com](https://yida-developer.alibaba-inc.com)进行访问了。
