(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workpage/goods/editorCategory/editorCategory"],{"08d8":function(t,o,a){"use strict";(function(t){a("bf90"),a("921b");s(a("66fd"));var o=s(a("3842"));function s(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,a("6e42")["createPage"])},"2d6b":function(t,o,a){},3842:function(t,o,a){"use strict";a.r(o);var s=a("d680"),e=a("ad00");for(var r in e)"default"!==r&&function(t){a.d(o,t,function(){return e[t]})}(r);a("c4c9");var i=a("2877"),l=Object(i["a"])(e["default"],s["a"],s["b"],!1,null,null,null);o["default"]=l.exports},ad00:function(t,o,a){"use strict";a.r(o);var s=a("af29"),e=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(o,t,function(){return s[t]})}(r);o["default"]=e.a},af29:function(t,o,a){"use strict";(function(t,a){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s={data:function(){return{postdata:{goodsClassAttrVos:[{name:"可被询问",value:"",nickname:"",isBase:!0},{name:"所属角色",value:"",nickname:"",isBase:!0},{name:"所在地点",value:"",nickname:"",isBase:!0}],id:"",name:"",intro:"",projectId:""},NPClist:[],Maplist:[],allNPClist:[],allMaplist:[],steps1:{step_1_value:"name"},inquire:[["是","否"]],addotherpropertylist:[],workinfo:{},operation:"push",pickerValue1:"",pickerValue2:"",updateview:!0}},methods:{deepCopy:function(t){var o=Array.isArray(t)?[]:{};for(var a in t)t.hasOwnProperty(a)&&("object"===typeof t[a]&&null!==t[a]?o[a]=this.deepCopy(t[a]):o[a]=t[a]);return o},demo:function(t){},submitdata:function(){var o=JSON.parse(JSON.stringify(this.postdata));if(console.log(t(this.operation,"状态"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:124")),"push"===this.operation){for(var s in o.goodsClassAttrVos)""===o.goodsClassAttrVos[s].nickname&&(o.goodsClassAttrVos[s].nickname=null);if(o.goodsClassAttrVos=o.goodsClassAttrVos.concat(this.addotherpropertylist),""!==o.goodsClassAttrVos[0].value){console.log(t("发生了"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:133"));var e=o.goodsClassAttrVos[0].value.data[0];"否"===e?o.goodsClassAttrVos[0].value="否":"是"===e&&(o.goodsClassAttrVos[0].value="是")}if(""!==o.goodsClassAttrVos[1].value){var r=o.goodsClassAttrVos[1].value.data[0];for(var s in this.allNPClist)this.allNPClist[s].name===r&&(o.goodsClassAttrVos[1].value=this.allNPClist[s].id)}if(""!==o.goodsClassAttrVos[2].value){var i=o.goodsClassAttrVos[2].value.data[0];for(var s in this.allMaplist)this.allMaplist[s].name===i&&(o.goodsClassAttrVos[2].value=this.allMaplist[s].id)}if(!o.name)return void a.showToast({icon:"none",title:"分类名称不能为空"});o.projectId=this.workinfo.id,console.log(t(o,"提交的数据"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:165"));var l=this;l.$request.post("/goods/class/",o).then(function(o){console.log(t(o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:170")),1===o.code?a.showModal({title:"提示",content:"添加类别成功",cancelText:"继续添加",confirmText:"返回列表",success:function(o){o.confirm?(console.log(t("点击确定"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:179")),a.navigateBack({delta:1})):o.cancel}}):a.showModal({title:"提示",content:o.msg,cancelText:"继续添加",confirmText:"返回列表",success:function(o){o.confirm?(console.log(t("点击确定"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:195")),a.navigateBack({delta:1})):o.cancel}})}).catch(function(o){console.log(t(o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:206"))})}else if("change"===this.operation){for(var s in console.log(t(o,"编辑提交的数据"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:209")),o.goodsClassAttrVos)""===o.goodsClassAttrVos[s].nickname&&(o.goodsClassAttrVos[s].nickname=null);if(o.goodsClassAttrVos=o.goodsClassAttrVos.concat(this.addotherpropertylist),""!==o.goodsClassAttrVos[0].value){var n=o.goodsClassAttrVos[0].value.value[0];1===n?o.goodsClassAttrVos[0].value="否":0===n&&(o.goodsClassAttrVos[0].value="是")}if(""!==o.goodsClassAttrVos[1].value){var d=o.goodsClassAttrVos[1].value.data[0];for(var s in this.allNPClist)this.allNPClist[s].name===d&&(o.goodsClassAttrVos[1].value=this.allNPClist[s].id)}if(""!==o.goodsClassAttrVos[2].value){var c=o.goodsClassAttrVos[2].value.data[0];for(var s in this.allMaplist)this.allMaplist[s].name===c&&(o.goodsClassAttrVos[2].value=this.allMaplist[s].id)}if(!o.name)return void a.showToast({icon:"none",title:"分类名称不能为空"});o.projectId=this.workinfo.id;var g=this;g.$request.put("/goods/class//"+o.id+"/",o).then(function(o){console.log(t(o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:252")),1===o.code?a.showModal({title:"提示",content:"编辑类别成功",cancelText:"继续编辑",confirmText:"返回列表",success:function(o){o.confirm?(console.log(t("点击确定"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:261")),a.navigateBack({delta:1})):o.cancel}}):a.showModal({title:"提示",content:o.msg,cancelText:"继续编辑",confirmText:"返回列表",success:function(o){o.confirm?(console.log(t("点击确定"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:277")),a.navigateBack({delta:1})):o.cancel}})}).catch(function(o){console.log(t(o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:288"))})}},deleteohter:function(t){var o=this.addotherpropertylist.indexOf(t);-1!==o&&this.addotherpropertylist.splice(o,1)},addotherproperty:function(){var t={name:"",value:"",nickname:"",isBase:!0};this.addotherpropertylist.push(t)},getmaplist:function(){var o=this;o.$request.get("/place/?projectId="+o.workinfo.id).then(function(t){var a=[[]];for(var s in t.data)a[0].push(t.data[s].name);o.allMaplist=t.data,o.Maplist=a,o.setPickerDatac()}).catch(function(o){console.error(t("error:",o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:321"))})},getNPClist:function(){var o=this;o.$request.get("/npc/instance_by_project_id/"+o.workinfo.id+"/").then(function(t){var a=[[]];for(var s in t.data)a[0].push(t.data[s].name);o.allNPClist=t.data,o.NPClist=a,o.setPickerDatac()}).catch(function(o){console.error(t("error:",o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:338"))})},initialize1:function(){var o=this;o.$request.get("/npc/instance_by_project_id/"+o.workinfo.id+"/").then(function(t){var a=[[]];for(var s in t.data)a[0].push(t.data[s].name);if(o.allNPClist=t.data,o.NPClist=a,""!==o.postdata.goodsClassAttrVos[1].value){var e=o.postdata.goodsClassAttrVos[1].value;for(var s in o.allNPClist)o.allNPClist[s].id===parseInt(e)&&(o.postdata.goodsClassAttrVos[1].value={data:[o.allNPClist[s].name],value:[parseInt(s)]},o.$set(o.postdata.goodsClassAttrVos,1,o.postdata.goodsClassAttrVos[1]))}o.initialize2()}).catch(function(o){console.error(t("error:",o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:367"))})},initialize2:function(){var o=this;o.$request.get("/place/?projectId="+o.workinfo.id).then(function(a){var s=[[]];for(var e in a.data)s[0].push(a.data[e].name);if(o.allMaplist=a.data,o.Maplist=s,""!==o.postdata.goodsClassAttrVos[2].value){var r=o.postdata.goodsClassAttrVos[2].value;for(var e in o.allMaplist)o.allMaplist[e].id===parseInt(r)&&(o.postdata.goodsClassAttrVos[2].value={data:[o.allMaplist[e].name],value:[parseInt(e)]},o.$set(o.postdata.goodsClassAttrVos,2,o.postdata.goodsClassAttrVos[2]))}o.updateview=!0,console.log(t(o.updateview,"此时的updateview"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:395")),o.$nextTick(function(){o.setPickerDatac2()})}).catch(function(o){console.error(t("error:",o," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:401"))})},setPickerDatac:function(){this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.NPClist),this.$refs.pickerCustom3.setData(this.Maplist)},setPickerDatac2:function(){!0===this.updateview&&(this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.NPClist),this.$refs.pickerCustom3.setData(this.Maplist))}},mounted:function(){},onShow:function(){},onLoad:function(o){var s=a.getStorageSync("workinfo");if(this.workinfo=s,o.categoryinfo){this.updateview=!1,console.log(t(this.updateview,"状态1"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:427"));var e=JSON.parse(o.categoryinfo);console.log(t(e,"接收的数据"," at pages\\workpage\\goods\\editorCategory\\editorCategory.vue:429"));var r=[];for(var i in e.goodsClassAttrVos)null===e.goodsClassAttrVos[i].nickname&&(e.goodsClassAttrVos[i].nickname=""),i>2&&r.push(e.goodsClassAttrVos[i]);if(this.addotherpropertylist=r,this.postdata=e,this.initialize1(),""!==this.postdata.goodsClassAttrVos[0].value){var l=this.postdata.goodsClassAttrVos[0].value;"是"===l?this.postdata.goodsClassAttrVos[0].value={data:["是"],value:[0]}:"否"===l&&(this.postdata.goodsClassAttrVos[0].value={data:["否"],value:[1]})}this.operation="change"}else this.pickerValue1="请选择",this.pickerValue2="请选择",this.getmaplist(),this.getNPClist()}};o.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},c4c9:function(t,o,a){"use strict";var s=a("2d6b"),e=a.n(s);e.a},d680:function(t,o,a){"use strict";var s=function(){var t=this,o=t.$createElement;t._self._c},e=[];a.d(o,"a",function(){return s}),a.d(o,"b",function(){return e})}},[["08d8","common/runtime","common/vendor"]]]);