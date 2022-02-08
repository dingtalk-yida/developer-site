const fs = require('fs');
module.exports = () => ({
  name: 'deploy',
  postBuild({outDir}) {
    fs.writeFileSync(`${outDir}/cd.json`, JSON.stringify({
      "public": "./",
      "branch": "docs",
      "cname": "yida-developer.alibaba-inc.com"
     }, null, 2));
  }
});