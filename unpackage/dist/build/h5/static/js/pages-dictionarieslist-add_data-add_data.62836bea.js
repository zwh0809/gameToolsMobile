(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dictionarieslist-add_data-add_data"],{"30e4":function(e,t,a){"use strict";var n=a("cceb"),o=a.n(n);o.a},"4a69":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",["push"===e.type?a("v-uni-view",{},[a("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"词组名称"},model:{value:e.postdata.phraseName,callback:function(t){e.$set(e.postdata,"phraseName",t)},expression:"postdata.phraseName"}}),a("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"词组标签",placeholder:"每个词组用逗号分隔"},model:{value:e.postdata.labels,callback:function(t){e.$set(e.postdata,"labels",t)},expression:"postdata.labels"}}),a("QSTextarea",{attrs:{variableName:"textarea",textareaWidth:"100",layout:"column",title:"词组备注"},model:{value:e.postdata.phraseRemarks,callback:function(t){e.$set(e.postdata,"phraseRemarks",t)},expression:"postdata.phraseRemarks"}}),a("v-uni-button",{staticClass:"m-top",on:{click:function(t){t=e.$handleEvent(t),e.pushdata(t)}}},[e._v("确认添加")])],1):e._e(),"change"===e.type?a("v-uni-view",{},[a("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"词组名称"},model:{value:e.updatePhraseName,callback:function(t){e.updatePhraseName=t},expression:"updatePhraseName"}}),a("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"词组标签",placeholder:"每个词组用逗号分隔"},model:{value:e.oenEntry.labels,callback:function(t){e.$set(e.oenEntry,"labels",t)},expression:"oenEntry.labels"}}),a("QSTextarea",{attrs:{variableName:"textarea",textareaWidth:"100",layout:"column",title:"词组备注"},model:{value:e.oenEntry.phraseRemarks,callback:function(t){e.$set(e.oenEntry,"phraseRemarks",t)},expression:"oenEntry.phraseRemarks"}}),a("QSTextarea",{attrs:{variableName:"textarea",textareaWidth:"100",layout:"column",title:"词组内容"},model:{value:e.oenEntry.content,callback:function(t){e.$set(e.oenEntry,"content",t)},expression:"oenEntry.content"}}),a("v-uni-button",{staticClass:"m-top",on:{click:function(t){t=e.$handleEvent(t),e.changedata(t)}}},[e._v("确认修改")])],1):e._e()],1)],1)},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},8082:function(e,t,a){"use strict";a.r(t);var n=a("e66c"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},"9b62":function(e,t,a){"use strict";a.r(t);var n=a("4a69"),o=a("8082");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("30e4");var r=a("2877"),i=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"1993e392",null);t["default"]=i.exports},ab7b:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".uni-form-item .title[data-v-1993e392]{padding:%?20?% 0}",""])},cceb:function(e,t,a){var n=a("ab7b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("16d2286c",n,!0,{sourceMap:!1,shadowMode:!1})},e66c:function(e,t,a){"use strict";var n=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("f499"));a("a481");var s={data:function(){return{postdata:{phraseName:"",labels:"",phraseRemarks:""},type:"push",dictionariesinfo:{},oenEntry:{},updatePhraseName:""}},methods:{pushdata:function(){var e=this,t=e.postdata;t.labels=t.labels.replace(/,/g,","),t.labels=t.labels.replace(/，/g,","),t.labels=t.labels.replace(/^(\s|,)+|(\s|,)+$/g,""),""!==t.phraseName?e.$request.post("/authorPhrase",t).then(function(t){console.log(t,"数据"),50003!=t.code?1==t.code&&uni.showModal({title:"提示",content:"增加成功",cancelText:"继续添加",confirmText:"返回列表",success:function(t){t.confirm?uni.reLaunch({url:"/pages/dictionarieslist/dictionarieslist"}):t.cancel&&e.formReset()}}):uni.showToast({title:t.msg,icon:"none",duration:2e3})}).catch(function(e){console.error("error:",e)}):uni.showToast({title:"词组名称不能为空",icon:"none",duration:2e3})},changedata:function(){var e=this,t=e.oenEntry;t.labels=t.labels.replace(/,/g,","),t.labels=t.labels.replace(/，/g,","),t.labels=t.labels.replace(/^(\s|,)+|(\s|,)+$/g,""),t.updatePhraseName=e.updatePhraseName,""!==t.phraseName?e.$request.put("/authorPhrase",t).then(function(t){console.log(t,"数据"),50003!=t.code?1==t.code&&uni.showModal({title:"提示",content:"修改成功",cancelText:"继续修改",confirmText:"返回列表",success:function(t){t.confirm?uni.reLaunch({url:"/pages/dictionarieslist/dictionarieslist"}):t.cancel&&e.formReset()}}):uni.showToast({title:t.msg,icon:"none",duration:2e3})}).catch(function(e){console.error("error:",e)}):uni.showToast({title:"词组名称不能为空",icon:"none",duration:2e3})},getoneinfo:function(e){console.log(e,"名字");var t=this;t.$request.get("/authorPhrase/"+e).then(function(e){1===e.code&&(t.oenEntry=JSON.parse((0,o.default)(e.data)),t.updatePhraseName=t.oenEntry.phraseName,t.oenEntry.labels&&(t.oenEntry.labels=t.oenEntry.labels.join(",")))}).catch(function(e){console.log(e)})},formReset:function(e){console.log("清空数据")}},mounted:function(){},onLoad:function(e){if(e.dictionariesinfo){this.type="change";var t=JSON.parse(e.dictionariesinfo);this.oenEntry=t,null===this.oenEntry.content&&(this.oenEntry.content=""),this.getoneinfo(this.oenEntry.phraseName)}else this.type="push"}};t.default=s}}]);