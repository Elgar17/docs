(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{486:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"用户鉴权-jwt-与-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户鉴权-jwt-与-session"}},[s._v("#")]),s._v(" 用户鉴权 JWT 与 Session")]),s._v(" "),a("h2",{attrs:{id:"_1-jwt-鉴权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-jwt-鉴权"}},[s._v("#")]),s._v(" 1. JWT 鉴权")]),s._v(" "),a("p",[a("img",{attrs:{src:"jwt.png",alt:"jwt教程"}})]),s._v(" "),a("p",[s._v("从名字上不难看出，就是在网络中使用 JSON 格式的令牌。")]),s._v(" "),a("p",[s._v("全称 JSON Web Token , 有以下三部分构成：")]),s._v(" "),a("ul",[a("li",[s._v("Header：头部")]),s._v(" "),a("li",[s._v("playload：数据部分")]),s._v(" "),a("li",[s._v("signature：签名")])]),s._v(" "),a("p",[s._v("JWT 可以防止 CSRF 攻击，适合移动应用，不像 session，不用在服务器端保存数据，加密传输安全性高。")]),s._v(" "),a("p",[a("a",{attrs:{href:"jwt.io"}},[s._v("jwt.io")]),s._v(" 是一个在线解析 jwt 的网站。")]),s._v(" "),a("p",[s._v("（1）header")]),s._v(" "),a("p",[s._v("header 中有两个字段")]),s._v(" "),a("p",[s._v("typ: token的类型，固定为JWT")]),s._v(" "),a("p",[s._v("alg: 使用的 hash 算法，HMAC SHA256")]),s._v(" "),a("p",[s._v("（2）playload")]),s._v(" "),a("p",[s._v("playload 中存放需要传输的信息，用户ID，用户名，过期时间等，playload可以加密。")]),s._v(" "),a("p",[s._v("（3）signature")]),s._v(" "),a("p",[s._v("签名是对header和payload部分进行签名，保证传输过程中没有被串改。")]),s._v(" "),a("p",[s._v("（4）Node 中使用JWT")]),s._v(" "),a("p",[s._v("安装 jsonwebtoken:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jsonwebtoken --save\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" jwt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jsonwebtoken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数一：需要传输的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数二：密钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tom"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hIKT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解码(base64)")]),s._v("\njwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查是否被串改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数二：密钥")]),s._v("\njwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("verify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hIKT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"_2-session-鉴权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-session-鉴权"}},[s._v("#")]),s._v(" 2. Session 鉴权")]),s._v(" "),a("p",[s._v("待更新...\n")]),s._v(" "),a("h2",{attrs:{id:"_3-比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-比较"}},[s._v("#")]),s._v(" 3. 比较")]),s._v(" "),a("p",[s._v("（1）session")]),s._v(" "),a("p",[s._v("优势：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("session 主要存放在服务器端")])]),s._v(" "),a("li",[a("p",[s._v("cookie 存放在浏览器")])])]),s._v(" "),a("p",[s._v("劣势：")]),s._v(" "),a("ol",[a("li",[s._v("跨域访问，不会携带cookie")]),s._v(" "),a("li",[s._v("分布式部署时，需要共享 session 机制")]),s._v(" "),a("li",[s._v("安全性较低 csrf(跨站请求网站)")]),s._v(" "),a("li",[s._v("每次请求认证需要查询数据库")])]),s._v(" "),a("p",[s._v("（2）JWT")]),s._v(" "),a("ul",[a("li",[s._v("可拓展性好，跟 session 相比，容易拓展")]),s._v(" "),a("li",[s._v("安全性相对高，不存在 csrf，需要防范XSS")]),s._v(" "),a("li",[s._v("性能：传输性能比session 低，到服务器是不用查询数据库")]),s._v(" "),a("li",[s._v("时效性：没有比session 好，服务器端不能清楚，只能等到过期时间")])]),s._v(" "),a("p",[s._v("参考链接：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000039303557",target:"_blank",rel:"noopener noreferrer"}},[s._v("前后端接口鉴权全解"),a("OutboundLink")],1)])]),s._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);t.default=e.exports}}]);