(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{380:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"博客项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博客项目"}},[t._v("#")]),t._v(" 博客项目")]),t._v(" "),a("p",[t._v("基于 Nodejs 的个人博客系统的后端。")]),t._v(" "),a("p",[a("a",{attrs:{href:""}},[t._v("点击进入github地址")])]),t._v(" "),a("h2",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能：")]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介:")]),t._v(" "),a("p",[t._v("这是一个完整的博客系统，可以做成个人或多人博客系统。")]),t._v(" "),a("p",[t._v("这里主要实现核心功能，其他功能按自己需求添加即可。")]),t._v(" "),a("p",[t._v("主页、博客详情页\n登录页\n管理中心、新建页、编辑页")]),t._v(" "),a("h3",{attrs:{id:"你将学到什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你将学到什么"}},[t._v("#")]),t._v(" 你将学到什么?")]),t._v(" "),a("p",[t._v("使用到的技术：")]),t._v(" "),a("ul",[a("li",[t._v("处理 http 接口（http,nodejs处理http,处理路由）")]),t._v(" "),a("li",[t._v("连接数据库（mysql,redis）")]),t._v(" "),a("li",[t._v("实现登录(redis,session,cookie)")]),t._v(" "),a("li",[t._v("nginx 反向代理")]),t._v(" "),a("li",[t._v("安全（防SQL注入，XSS攻击，密码加密处理）")]),t._v(" "),a("li",[t._v("日志 （stream,文件操作）")])]),t._v(" "),a("h3",{attrs:{id:"需要知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要知识"}},[t._v("#")]),t._v(" 需要知识?")]),t._v(" "),a("p",[t._v("看这篇文章之前你需要了解以下知识点:")]),t._v(" "),a("ol",[a("li",[t._v("HTML, CSS, JavaScript(ES6)")]),t._v(" "),a("li",[t._v("网络")])]),t._v(" "),a("h3",{attrs:{id:"开发步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发步骤"}},[t._v("#")]),t._v(" 开发步骤")]),t._v(" "),a("p",[t._v("这是项目的的简约树结构，有利于开发")]),t._v(" "),a("p",[t._v("这里放置了项目的文件目录, 读者应从 "),a("code",[t._v("bin/www.js")]),t._v(" 文件开始阅读")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─app.js\t\t\t// 2. 路由的分离与请求参数的处理\n├─package.json\n├─src\t\n|  ├─util\n|  |  └log.js\t\t// 记录日志的实现\n|  ├─router\n|  |   ├─blog.js\t// 3. blog路由处理\n|  |   └user.js\t\t// 3. user路由的处理\n|  ├─model\n|  |   └resModel.js\t// 包装返回的数据\n|  ├─db\n|  | ├─mysql.js\t\t// 数据库造作函数封装\n|  | └redis.js\t\t// redis造作函数封装\n|  ├─controller\n|  |     ├─blog.js\t// 4. user路由的数据请求函数\n|  |     └user.js\t// 4. user路由的数据请求函数\n|  ├─conf\n|  |  └db.js\n├─logs\t\t\t\t// 生成日志目录\n|  ├─access.log\n|  ├─error.log\n|  └event.log\n├─bin\n|  └www.js\t\t\t// 1. 项目的入口文件,服务在这里监听\n")])])]),a("h3",{attrs:{id:"技术方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[t._v("#")]),t._v(" 技术方案：")]),t._v(" "),a("h2",{attrs:{id:"数据存储-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据存储-mysql"}},[t._v("#")]),t._v(" 数据存储：mysql")]),t._v(" "),a("p",[t._v("存储博客(blog)：")]),t._v(" "),a("p",[t._v("id\ttitle\tcontent\tcreatetime\tauthor\n1\t标题\t内容\t123465464845\tTom\n存储用户(user)：")]),t._v(" "),a("p",[t._v("id\tname\tpassword\trealname\n1\tTom\t123456\t张三\n接口设计:")]),t._v(" "),a("p",[t._v("描述\t接口\t方法\t参数\t备注\n获取博客列表\t/api/blog/list\tget\tauthor 作者，keyword 关键字\t\n获取第一篇博客内容\t/api/blog/detail\tget\tid\t\n新增博客\t/api/blog/new\tpost\t\t新增数据\n更新博客\t/api/blog/update\tpost\tid\t更新内容\n删除博客\t/api/blog/del\tpost\tid\t\n登录\t/api/user/login\tpost\t\t用户名和密码")]),t._v(" "),a("h2",{attrs:{id:"不使用框架创建的项目回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不使用框架创建的项目回顾"}},[t._v("#")]),t._v(" 不使用框架创建的项目回顾")]),t._v(" "),a("p",[t._v("使用到的技术点：")]),t._v(" "),a("p",[t._v("处理 http 接口（http,nodejs处理http,处理路由）")]),t._v(" "),a("p",[t._v("连接数据库（mysql,redis）")]),t._v(" "),a("p",[t._v("实现登录(redis,session,cookie)")]),t._v(" "),a("p",[t._v("nginx 反向代理")]),t._v(" "),a("p",[t._v("安全（防SQL注入，XSS攻击，密码加密处理）")]),t._v(" "),a("p",[t._v("日志 （stream,文件操作）")])])}),[],!1,null,null,null);s.default=r.exports}}]);