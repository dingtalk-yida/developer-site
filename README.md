# 宜搭开发者中心

宜搭开发者中心是通过 [Docusaurus 2](https://docusaurus.io/) 构建的一个开发者平台，用于沉淀宜搭面向开发者的使用案例和教程。

GitHub Pages: [https://dingtalk-yida.github.io/developer-site/](https://dingtalk-yida.github.io/developer-site/)

国内镜像：[https://yida-developer.alibaba-inc.com/](https://yida-developer.alibaba-inc.com/)

### 安装依赖

```
$ npm install
```

### 本地启动

```
$ npm start
```
启动后，我们便可以在本地通过 [http://localhost:3000/developer-site/](http://localhost:3000/developer-site) 进行访问。

> P.S.: 本地启动情况下，全局搜索是不生效的。


### 构建
```
$ npm run build
```
构建产物将输出到 build 目录。

### 部署
```
$ npm run deploy
```

通过执行部署命令会自动执行文档构建，我们会将文档部分（即 build 文件夹下的内容）推送到 Github 的 docs 分支，从而触发部署到 gh-pages，接下来便可以通过 [https://dingtalk-yida.github.io/developer-site/docs/guide/about](https://dingtalk-yida.github.io/developer-site/docs/guide/about) 进行访问了。

若要发布到国内gitee镜像上，需要进行以下三步操作：
1. 添加本地仓库的remote： ```git remote add gitee https://gitee.com/yida-developer/yida-developer.git```;
2. 推送静态站点代码到gitee：```npm run deploy:gitee```;
3. 前往[gitee pages管理页](https://gitee.com/yida-developer/yida-developer/pages)执行更新操作；
