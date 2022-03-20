(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{398:function(e,a,s){"use strict";s.r(a);var t=s(42),v=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"beego"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beego"}},[e._v("#")]),e._v(" Beego")]),e._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),s("p",[e._v("Beego 框架使用教程。")]),e._v(" "),s("p",[e._v("Beego 是 Go 语言 Web 框架，"),s("a",{attrs:{href:"beego.vip"}},[e._v("官网")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"安装-beego"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-beego"}},[e._v("#")]),e._v(" 安装 Beego")]),e._v(" "),s("p",[e._v("先安装 Beego 框架。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("go get github.com/astaxie/beego\n")])])]),s("p",[e._v("bee 是 Beego 工具包，用于创建 Beego 项目，热驱动项目等功能的工具。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("go get github.com/beego/bee\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),s("p",[e._v("注意，安装框架前必须设置国内代理，否则会安装失败。")])]),e._v(" "),s("h2",{attrs:{id:"安装-bee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-bee"}},[e._v("#")]),e._v(" 安装 bee")]),e._v(" "),s("p",[e._v("bee 是 Beego 框架的脚手架工具，使用 bee 工具的命令，可以快速生成 Beego 框架的项目模板。")]),e._v(" "),s("p",[e._v("bee 是一个可执行文件（exe 结尾），存放在 "),s("code",[e._v("$GOPATH/bin")]),e._v(" 目录中，需要先把 "),s("code",[e._v("$GOPATH/bin")]),e._v(" 添加到环境变量中。")]),e._v(" "),s("p",[e._v("如果遇到安装失败：")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("fatal: unable to access 'https://github.com/beego/beego/': OpenSSL SSL_read: Connection was reset, errno 10054\n")])])]),s("p",[e._v("如果有这样报错，执行以下命令")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global http.sslVerify "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),s("p",[e._v("安装完成后，使用以下命令查看是否安装成功")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("bee version\n")])])]),s("h2",{attrs:{id:"创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[e._v("#")]),e._v(" 创建项目")]),e._v(" "),s("p",[e._v("Bee 工具提供了创建项目命令，下面具体介绍。")]),e._v(" "),s("p",[e._v("（1）bee new")]),e._v(" "),s("p",[e._v("创建项目模板，带有前端代码。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("bee new demo1\n")])])]),s("p",[e._v("在当前目录下，创建了项目名为 demo1 的项目。")]),e._v(" "),s("p",[e._v("（2）bee api")]),e._v(" "),s("p",[e._v("在当前目录下，生成 RESTFUL API 形式的项目模板。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("bee api projectName\n")])])]),s("p",[e._v("（3）bee run")]),e._v(" "),s("p",[e._v("启动项目命令。")]),e._v(" "),s("p",[e._v("注意，如果启动项目失败,需要使用以下命令下载需要的安装包。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("go mod tidy\n")])])]),s("p",[e._v("（3）bee pack")]),e._v(" "),s("p",[e._v("打包项目")]),e._v(" "),s("p",[e._v("注意在 Linux 下打包需要传入参数")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("bee pack -be "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux\n")])])]),s("h2",{attrs:{id:"目录介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录介绍"}},[e._v("#")]),e._v(" 目录介绍")]),e._v(" "),s("ul",[s("li",[e._v("go.mod，存放项目依赖包的文件。")]),e._v(" "),s("li",[e._v("go.sum，项目依赖的下载地址。")])]),e._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=v.exports}}]);