(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workpage/drama/dramaGrouping"],{"0e2a":function(t,a,e){"use strict";e.r(a);var n=e("e16a"),o=e("1109");for(var r in o)"default"!==r&&function(t){e.d(a,t,function(){return o[t]})}(r);e("1521");var u=e("2877"),i=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=i.exports},1109:function(t,a,e){"use strict";e.r(a);var n=e("2f1d"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);a["default"]=o.a},1521:function(t,a,e){"use strict";var n=e("d24c"),o=e.n(n);o.a},"2f1d":function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{datalist:[],empty:{},push:"push",change:"change",workinfo:{}}},methods:{getdatalist:function(){var a=this;a.$request.get("/plot/category/?projectId="+this.workinfo.id).then(function(e){console.log(t(e,"请求的数据"," at pages\\workpage\\drama\\dramaGrouping.vue:40")),a.datalist=e.data}).catch(function(a){console.error(t("error:",a," at pages\\workpage\\drama\\dramaGrouping.vue:44"))})},deletedata:function(a){var n=this;e.showModal({title:"提示",content:"确定删除此条数据吗",success:function(e){e.confirm?n.$request.delete("/plot/category/"+a.id+"/").then(function(t){n.getdatalist()}).catch(function(a){console.error(t("error:",a," at pages\\workpage\\drama\\dramaGrouping.vue:60"))}):e.cancel&&console.log(t("用户点击取消"," at pages\\workpage\\drama\\dramaGrouping.vue:63"))}})},operation:function(t,a){if("push"===a)e.navigateTo({url:"./EditorDramaGrouping"});else if("change"===a){var n=JSON.stringify(t);e.navigateTo({url:"./EditorDramaGrouping?DramaGrouping="+n})}}},mounted:function(){},onShow:function(){this.getdatalist()},onLoad:function(){var t=e.getStorageSync("workinfo");this.workinfo=t}};a.default=n}).call(this,e("0de9")["default"],e("6e42")["default"])},d24c:function(t,a,e){},e16a:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},e349:function(t,a,e){"use strict";(function(t){e("bf90"),e("921b");n(e("66fd"));var a=n(e("0e2a"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])}},[["e349","common/runtime","common/vendor"]]]);