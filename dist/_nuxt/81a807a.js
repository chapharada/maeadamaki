(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{273:function(t,e,d){var content=d(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(37).default)("3699f4de",content,!0,{sourceMap:!1})},287:function(t,e,d){"use strict";d(273)},288:function(t,e,d){var n=d(36)(!1);n.push([t.i,".top[data-v-184d1dc6]{margin-bottom:1.6rem}@media screen and (min-width:960px){.top[data-v-184d1dc6]{max-width:640px;margin-bottom:3.2rem}}.top h2[data-v-184d1dc6]{font-weight:700;font-size:1.4rem;margin-bottom:.4rem}.top img[data-v-184d1dc6]{height:auto;width:100%}.top p[data-v-184d1dc6]{font-size:1.2rem;color:#666;line-height:1.45}.middle[data-v-184d1dc6]{margin-bottom:4.8rem}.middle[data-v-184d1dc6]:not(:last-child){margin-bottom:8.4rem}.list[data-v-184d1dc6]:not(:last-child){margin-bottom:2.4rem}@media screen and (min-width:960px){.list[data-v-184d1dc6]{max-width:640px}}.list .title[data-v-184d1dc6]{font-weight:700;font-size:1.4rem;margin-bottom:.4rem}.list .caption[data-v-184d1dc6]{font-size:1.2rem;color:#666;line-height:1.45}.list img[data-v-184d1dc6]{width:100%;height:auto}.explain[data-v-184d1dc6]{max-width:760px;margin-bottom:1.2rem}.explain[data-v-184d1dc6],.locate[data-v-184d1dc6]{font-size:1.15rem;color:#444;letter-spacing:.06em}",""]),t.exports=n},300:function(t,e,d){"use strict";d.r(e);var n=d(8),r=(d(57),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var d,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=t.params,n=t.$microcms,e.prev=1,e.next=4,n.get({endpoint:"works",contentId:d.slug});case 4:return data=e.sent,e.abrupt("return",{article:data});case 8:e.prev=8,e.t0=e.catch(1),console.log("だめだ〜");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}),c=(d(287),d(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("main",{staticClass:"main"},[d("div",{staticClass:"content"},[d("div",{staticClass:"top"},[d("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.article.cover.url,alt:""+t.article.midashi}}),t._v(" "),t.article.midashi?d("h2",[t._v(t._s(t.article.midashi))]):t._e(),t._v(" "),t.article.caption?d("p",[t._v(t._s(t.article.caption))]):t._e()]),t._v(" "),d("div",{staticClass:"middle"},t._l(t.article.detail,(function(data){return d("div",{key:data.id,staticClass:"list"},[d("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":data.detail_img.url}}),t._v(" "),data.detail_title?d("div",{staticClass:"title"},[t._v("\n          "+t._s(data.detail_title)+"\n        ")]):t._e(),t._v(" "),data.detail_caption?d("div",{staticClass:"caption"},[t._v("\n          "+t._s(data.detail_caption)+"\n        ")]):t._e()])})),0),t._v(" "),t.article.detail_explain?d("div",{staticClass:"explain"},[t._v(t._s(t.article.detail_explain))]):t._e(),t._v(" "),t.article.venue?d("div",{staticClass:"locate"},[t._v(t._s(t.article.venue))]):t._e()])])}),[],!1,null,"184d1dc6",null);e.default=component.exports}}]);