(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workpage/goods/goods"],{"3f71":function(o,t,e){"use strict";(function(o,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return e.e("components/QS-tabs/QS-tabs").then(e.bind(null,"9c6b"))},s={components:{QSTabs:n},data:function(){return{tabs_1:["物品类别","所有物品"],current_1:0,pushdata:"pushdata",changedata:"changedata",empty:{},datalist:[],workinfo:{},goodslist:[]}},methods:{change:function(o,t){this["current_"+t]=o},getgoodslist:function(){var t=this;t.$request.get("/goods/instance_by_project_id/"+t.workinfo.id+"/").then(function(e){console.log(o(e,"请求的数据"," at pages\\workpage\\goods\\goods.vue:81")),t.goodslist=e.data}).catch(function(t){console.error(o("error:",t," at pages\\workpage\\goods\\goods.vue:85"))})},getdatalist:function(){var t=this;t.$request.get("/goods/class/?projectId="+t.workinfo.id).then(function(e){console.log(o(e,"请求的数据"," at pages\\workpage\\goods\\goods.vue:93")),t.datalist=e.data}).catch(function(t){console.error(o("error:",t," at pages\\workpage\\goods\\goods.vue:97"))})},deletedata_category:function(t){var e=this;a.showModal({title:"提示",content:"确定删除此条数据吗",success:function(a){a.confirm?e.$request.delete("/goods/class/"+t.id+"/").then(function(o){e.getdatalist(),e.getgoodslist()}).catch(function(t){console.error(o("error:",t," at pages\\workpage\\goods\\goods.vue:114"))}):a.cancel&&console.log(o("用户点击取消"," at pages\\workpage\\goods\\goods.vue:117"))}})},deletedata_goods:function(t){var e=this;a.showModal({title:"提示",content:"确定删除此条数据吗",success:function(a){a.confirm?e.$request.delete("/goods/instance/"+t.id+"/").then(function(o){e.getdatalist(),e.getgoodslist()}).catch(function(t){console.error(o("error:",t," at pages\\workpage\\goods\\goods.vue:136"))}):a.cancel&&console.log(o("用户点击取消"," at pages\\workpage\\goods\\goods.vue:139"))}})},goto_editor_category:function(t,e){if("pushdata"===e)a.navigateTo({url:"./editorCategory/editorCategory"});else if("changedata"===e){console.log(o(t,"data"," at pages\\workpage\\goods\\goods.vue:150"));var n=JSON.stringify(t);a.navigateTo({url:"./editorCategory/editorCategory?categoryinfo="+n})}},goto_editor_goods:function(t,e){if("pushdata"===e)a.navigateTo({url:"./categoryGoods/categoryGoods"});else if("changedata"===e){console.log(o(t,"data"," at pages\\workpage\\goods\\goods.vue:164"));var n=JSON.stringify(t);a.navigateTo({url:"./categoryGoods/categoryGoods?goodinfo="+n})}}},onShow:function(){var o=a.getStorageSync("workinfo");this.workinfo=o,this.getdatalist(),this.getgoodslist()},mounted:function(){}};t.default=s}).call(this,e("0de9")["default"],e("6e42")["default"])},4814:function(o,t,e){},"842c":function(o,t,e){"use strict";var a=e("4814"),n=e.n(a);n.a},a7dc:function(o,t,e){"use strict";var a=function(){var o=this,t=o.$createElement;o._self._c},n=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return n})},c552:function(o,t,e){"use strict";(function(o){e("bf90"),e("921b");a(e("66fd"));var t=a(e("eb07"));function a(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("6e42")["createPage"])},c88d:function(o,t,e){"use strict";e.r(t);var a=e("3f71"),n=e.n(a);for(var s in a)"default"!==s&&function(o){e.d(t,o,function(){return a[o]})}(s);t["default"]=n.a},eb07:function(o,t,e){"use strict";e.r(t);var a=e("a7dc"),n=e("c88d");for(var s in n)"default"!==s&&function(o){e.d(t,o,function(){return n[o]})}(s);e("842c");var r=e("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["c552","common/runtime","common/vendor"]]]);