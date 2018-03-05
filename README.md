[![Build Status](https://travis-ci.org/searchfe/underscore.svg?branch=master)](https://travis-ci.org/searchfe/underscore)
[![Coverage Status](https://coveralls.io/repos/github/searchfe/underscore/badge.svg?branch=master)](https://coveralls.io/github/searchfe/underscore?branch=master)

 JavaScript 语言工具库 (AMD)，包括字符串工具、对象工具、函数工具、语言增强等。

 ## 兼容性

 * AMD 规范
 * ES5
 * 主流移动浏览器
 
 ## 设计初衷

 0. 用于 Web 端要控制代码量（目前 gzipped 1.5k）
 1. 与 Lodash 重合的功能保持接口一致: https://github.com/exports/exports
 2. Lodash 中不包含的部分，如有需要可自行添加。文档：[/doc.md][doc]。

 ## 独立打包

 本项目发布形式为源码，建议使用时编译和打包。

 ```bash
 npm run dist
 npm run gzip
 ```

[doc]: https://github.com/searchfe/underscore/blob/master/doc.md
