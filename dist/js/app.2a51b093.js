(function(t){function s(s){for(var e,r,o=s[0],c=s[1],l=s[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(s);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(e=!1)}e&&(n.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},i={app:0},n=[];function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0722":function(t,s,a){"use strict";a("8d6e")},"0a6d":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main",attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("div",{staticClass:"row a"},[a("div",{staticClass:"col-md-12 general-element"},[t._m(0),a("LoginForm"),t._m(1),t._m(2)],1)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"}),a("div",{staticClass:"col-md-8"},[a("b",[a("p",{staticClass:"sign-up-heading"},[t._v("Welcome to VueJs")])])]),a("div",{staticClass:"col-md-2"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row a"},[a("div",{staticClass:"icons-box"},[a("div",{staticClass:"row row-icons"},[a("div",{staticClass:"col-md-12 i-container"},[a("span",{staticClass:"icons"},[a("i",{staticClass:"main-icons fab fa-twitter"})]),a("span",{staticClass:"icons"},[a("i",{staticClass:"main-icons fab fa-facebook-f"})]),a("span",{staticClass:"icons"},[a("i",{staticClass:"main-icons fab fa-instagram"})])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row login-footer"},[a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"sign-up-heading2"},[t._v("I am already learning VueJs")])])])}],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row log"},[a("div",{staticClass:"col-md-12"},[t._m(0),a("p",{staticClass:"paragraph1"},[a("b",{staticClass:"dark"},[a("i",{staticClass:"login-btn"},[a("router-link",{attrs:{to:"/"}},[t._v("SignUp")])],1),t._v(" or "),a("i",{staticClass:"login-btn"},[t._v(" login ")]),t._v(" with ")])])])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",{staticClass:"form",attrs:{action:"",method:""}},[a("input",{staticClass:"input",attrs:{type:"email",name:"email",placeholder:"Email"}}),a("input",{staticClass:"input",attrs:{type:"password",name:"pass",placeholder:"Password",id:"password"}}),a("i",{staticClass:"main-icons password-eye far fa-eye",attrs:{id:"togglePassword"}}),a("button",{staticClass:"btn-log-in",attrs:{type:"submit"}},[t._v("Login my account")])])}],o={name:"LoginForm"};window.onload=function(){var t=document.querySelector("#togglePassword"),s=document.querySelector("#password");t.addEventListener("click",(function(){var t="password"===s.getAttribute("type")?"text":"password";s.setAttribute("type",t),this.classList.toggle("fa-eye-slash")}))};var c=o,l=(a("989a"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,"1ac4422e",null),d=u.exports,f={name:"LogIn",components:{LoginForm:d}},p=f,m=(a("0722"),Object(l["a"])(p,e,i,!1,null,"384fc807",null));s["a"]=m.exports},1474:function(t,s,a){"use strict";a("31e0")},"1e0f":function(t,s,a){"use strict";var e=a("e0cb"),i=a("1ed3"),n=(a("1474"),a("2877")),r=Object(n["a"])(i["default"],e["a"],e["b"],!1,null,"2694bd2f",null);s["default"]=r.exports},"1ed3":function(t,s,a){"use strict";var e=a("720e"),i=a.n(e);s["default"]=i.a},"31e0":function(t,s,a){},"34e8":function(t,s,a){},"3dfd":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("router-view")],1)},i=[],n={name:"App"},r=n,o=a("2877"),c=Object(o["a"])(r,e,i,!1,null,"78e35421",null);s["a"]=c.exports},"56d7":function(t,s,a){"use strict";a.r(s),function(t){a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),e=a("3dfd"),i=a("1e18"),n=(a("f9e3"),a("2dd8"),a("8c4f")),r=a("a185"),o=a("0a6d");s["default"].config.productionTip=!1,s["default"].use(i["a"]),s["default"].use(n["a"]);var c=new n["a"]({routes:[{path:"/",name:"home",component:r["a"]},{path:"/LogIn",name:"logIn",component:o["a"]},{path:"/",component:r["a"]}]});new s["default"]({el:"#app",render:function(t){return t(e["a"])},router:c}),t.exports={runtimeCompiler:!0}}.call(this,a("dd40")(t))},"59c1":function(t,s,a){"use strict";a("34e8")},"720e":function(t,s){},"8d6e":function(t,s,a){},"989a":function(t,s,a){"use strict";a("a0af")},a0af:function(t,s,a){},a185:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main",attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("div",{staticClass:"row a"},[a("div",{staticClass:"col-md-12 general-element"},[t._m(0),a("SignUpForm"),t._m(1),t._m(2)],1)])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"}),a("div",{staticClass:"col-md-8"},[a("b",[a("p",{staticClass:"sign-up-heading"},[t._v("Welcome to VueJs")])])]),a("div",{staticClass:"col-md-2"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row a"},[a("div",{staticClass:"icons-box"},[a("div",{staticClass:"row row-icons"},[a("div",{staticClass:"col-md-12 i-container"},[a("span",{staticClass:"icons"},[a("i",{staticClass:"main-icons fab fa-twitter"})]),a("span",{staticClass:"icons"},[a("i",{staticClass:"main-icons fab fa-facebook-f"})]),a("span",{staticClass:"icons"},[a("i",{staticClass:"main-icons fab fa-instagram"})])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row login-footer"},[a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"sign-up-heading2"},[t._v("I am already learning VueJs")])])])}],n=a("1e0f"),r={name:"SignIn",components:{SignUpForm:n["default"]}},o=r,c=(a("59c1"),a("2877")),l=Object(c["a"])(o,e,i,!1,null,"6696be47",null);s["a"]=l.exports},e0cb:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return i}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row log",attrs:{id:"ex1"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form",attrs:{action:"",method:""}},[a("input",{staticClass:"input",attrs:{type:"email",name:"email",placeholder:"Email",id:"mail"}}),a("input",{staticClass:"input pass",attrs:{type:"password",name:"pass",placeholder:"Password",id:"password"}}),a("input",{staticClass:"input",attrs:{type:"password",name:"repeatPass",placeholder:"Confirm Password",id:"confirmPassword"}}),a("i",{staticClass:"main-icons password-eye far fa-eye",attrs:{id:"togglePassword"}}),t._m(0),a("div",{staticClass:"example1",attrs:{id:"example"}},[a("button",{attrs:{id:"btn-sign-in"},on:{click:t.collect}},[t._v("Create an account")])])]),a("p",{staticClass:"paragraph1"},[a("b",{staticClass:"dark"},[t._v(" or "),a("i",{staticClass:"login-btn"},[a("router-link",{attrs:{to:"/Login"}},[t._v("login")])],1),t._v(" with ")])])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"inputRadioParent"},[a("p",[a("input",{staticClass:"inputRadio",attrs:{type:"radio",name:"checkAdmin",id:"Admin"}}),t._v("Admin")]),a("p",[a("input",{staticClass:"inputRadio",attrs:{type:"radio",name:"checkAdmin",id:"User"}}),t._v("User")])])}]}});
//# sourceMappingURL=app.2a51b093.js.map