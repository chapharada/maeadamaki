(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(e,t,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(40).default)("6fc44e67",content,!0,{sourceMap:!1})},339:function(e,t,r){"use strict";r(332)},340:function(e,t,r){var o=r(39)(!1);o.push([e.i,'.contact[data-v-b1071620]{margin-bottom:60px}.heading[data-v-b1071620]{margin-bottom:5.4rem}.heading h1[data-v-b1071620]{font-weight:700;letter-spacing:.08em;padding-bottom:.2rem;margin-bottom:3.2rem;border-bottom:1px solid #d1d1d1;font-size:1.5rem;color:#27c4ac}.heading .caption[data-v-b1071620]{font-size:1.3rem;font-weight:500;margin-bottom:1.6rem}.explain .formbox .area[data-v-b1071620]{font-size:1.4rem}.explain .formbox .area>*[data-v-b1071620]{margin-bottom:3.2rem}.explain .formbox .area label[data-v-b1071620]{margin-bottom:.4rem;display:flex;align-items:center}.explain .formbox .area label[data-v-b1071620]:before{content:"必須";color:#fff;font-weight:500;font-size:.95rem;background:#ee5253;margin:0 .8rem 0 0;padding:.25rem .5rem;border-radius:4px}.explain .formbox .area input[data-v-b1071620],.explain .formbox .area textarea[data-v-b1071620]{width:100%;border:1px solid #d1d1d1;border-radius:8px;resize:none;padding:12px 40px 12px 14px;margin-top:.4rem;font-size:1.6rem}.explain .formbox .confirmbtn[data-v-b1071620]{margin:2.4rem 0 0;text-align:center}.explain .formbox .confirmbtn button[data-v-b1071620]{width:80%;max-width:320px;border-radius:2px;color:#454545;letter-spacing:.08em;font-size:1.35rem;letter-spacing:.1em;font-weight:700;cursor:pointer;border-radius:50px;height:60px;background:#ee5253;color:#fff}.error[data-v-b1071620]{margin-top:.8rem;font-size:1.1rem;color:red;font-weight:700}.wholeerror[data-v-b1071620]{font-size:1.2rem;background:#fbe2e2;color:red;font-weight:600;margin-bottom:4rem;padding:2.4rem 1.6rem;border-radius:8px}.wholeerror.active[data-v-b1071620]{display:none}',""]),e.exports=o},355:function(e,t,r){"use strict";r.r(t);var o=r(30),n=r(9);r(62),r(23),r(194),r(25),r(81),r(11),r(26),r(27),r(195),r(46),r(32),r(45),r(63),r(33),r(64);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={data:function(){return{form:{name:"",email:"",message:""},onError:!1,validation:{name:!1,email:!1,message:!1,confirm:!1},isVaild:!1}},transition:"expandFade",computed:{validationName:function(){return this.form.name?(this.validation.name=!0,""):(this.validation.name=!1,"名前を入力してください")},validationEmail:function(){var e=new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);return this.form.email?e.test(this.form.email)?(this.validation.email=!0,""):(this.validation.email=!1,"メールアドレスの形式で入力してください"):(this.validation.email=!1,"メールアドレスを入力してください")},validationMessage:function(){return this.form.message?(this.validation.message=!0,""):(this.validation.message=!1,"メッセージを入力してください")},confirmAll:function(){var e="";for(var t in this.validation)this.validation[t]?this.validation.confirm=!0:(e="入力内容に問題があります。確認して再度お試しください。",this.validation.confirm=!1);return e}},methods:{validateForm:function(){var e=[];for(var t in this.validation)e.push(this.validation[t]);e.every((function(e){return 1==e}))?this.submitForm():(console.log("入力内容に誤りがあります。"),this.onError=!0)},setParams:function(){var e=new URLSearchParams;return e.append("form-name","contact"),e.append("name",this.form.name),e.append("email",this.form.email),e.append("message",this.form.message),e},submitForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios({headers:{"Content-type":"application/json"},method:"post",url:"/api/sendemail",data:l({},e.form)}).then((function(){sessionStorage.setItem("formcache",!0),e.$router.push("/contact/success/")}));case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0.response),console.log("エラーです。");case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}},d=(r(339),r(12)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"contact mainconts"},[r("div",{staticClass:"inner"},[e._m(0),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.onError,expression:"onError"}],class:["wholeerror",{active:1==this.validation.confirm}]},[r("span",[e._v(e._s(e.confirmAll))])]),e._v(" "),r("div",{staticClass:"explain"},[r("div",{staticClass:"formbox"},[r("form",{attrs:{name:"contact",method:"POST",novalidate:"novalidate"},on:{submit:function(t){return t.preventDefault(),e.validateForm.apply(null,arguments)}}},[r("div",{staticClass:"area"},[r("input",{attrs:{type:"hidden",name:"contact",value:"ask-question"}}),e._v(" "),r("div",{staticClass:"name"},[r("label",[e._v("お名前")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{type:"text",name:"name",required:"required"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.onError,expression:"onError"}],staticClass:"error"},[e._v(e._s(e.validationName))])]),e._v(" "),r("div",{staticClass:"email"},[r("label",[e._v("メールアドレス")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",name:"email",required:"required"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.onError,expression:"onError"}],staticClass:"error"},[e._v(e._s(e.validationEmail))])]),e._v(" "),r("div",{staticClass:"message"},[r("label",[e._v("お問い合わせ内容")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],attrs:{type:"text",name:"message",rows:"8",required:"required"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.onError,expression:"onError"}],staticClass:"error"},[e._v(e._s(e.validationMessage))])])]),e._v(" "),e._m(1)])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"heading"},[r("h1",[e._v("お問い合わせ")]),e._v(" "),r("p",{staticClass:"caption"},[e._v("\n          各プロジェクトについてのお問い合わせ、"),r("br"),e._v("その他ご相談などお気軽にお問い合わせください。\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"confirmbtn"},[r("button",{attrs:{type:"submit"}},[e._v("送信する")])])}],!1,null,"b1071620",null);t.default=component.exports}}]);