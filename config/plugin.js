const fs = require('fs');
const path = require('path');
module.exports = () => ({
  name: 'deploy',
  postBuild({outDir}) {
    fs.writeFileSync(`${outDir}/cd.json`, JSON.stringify({
      "public": "./",
      "branch": "docs",
      "cname": "yida-developer.alibaba-inc.com"
     }, null, 2));
  }, configureWebpack(config, isServer, utils) {
    return {
      resolve: {
        alias: {
          components: path.resolve(__dirname, '../src/components')
        }
      }
      
    };
  },
});