(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workpage/npc/editorNpc/editorNpc"],{"0ae0":function(t,e,a){"use strict";a.r(e);var n=a("4f7f"),o=a("2295");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("3f02");var i=a("2877"),c=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},2295:function(t,e,a){"use strict";a.r(e);var n=a("3738"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"2cc3":function(t,e,a){},3738:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("0b8d")),s=a("f8e2");function i(t){return t&&t.__esModule?t:{default:t}}var c=function(){return a.e("components/robby-image-upload/robby-image-upload").then(a.bind(null,"8b9c"))},r={components:{robbyImageUpload:c},data:function(){return{imageData:["http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png"],enableDel:!0,enableAdd:!0,limitNumber:1,postdata:{npcInstanceAttrVos:[{name:"跟随玩家",value:"",isBase:!0},{name:"可被询问",value:"",isBase:!0},{name:"所在地点",value:"",isBase:!0},{name:"能否说话",value:"",isBase:!0}],isBase:!1,id:"",name:"",intro:"",projectId:"",headImgUrl:"",mood:"",nickname:"",npcClassId:"",offline:"",voiceClass:"",voiceName:""},NPClist:[],Maplist:[],allNPClist:[],allMaplist:[],steps1:{step_1_value:"name"},inquire:[["是","否"]],inquire2:[["是","否"]],inquire3:[["能","否"]],addotherpropertylist:[],workinfo:{},operation:"push",pickerValue1:"",pickerValue2:"",updateview:!0}},methods:{deleteImage:function(){console.log(t("删除图片"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:124"))},addImage:function(e){var a=e.allImages[0],n=this;(0,s.pathToBase64)(a).then(function(e){var a=o.default.backUrl+"/upload/npc_head_img",s={data:e};n.$request.post(a,s).then(function(t){1===t.code&&(n.headImgUrl=t.data.absolutePath)}).catch(function(e){console.error(t("error:",e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:145"))})}).catch(function(e){console.error(t(e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:149"))})},submitdata:function(){var e=JSON.parse(JSON.stringify(this.postdata));if(console.log(t(this.operation,"状态"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:155")),"push"===this.operation){if(e.npcInstanceAttrVos=e.npcInstanceAttrVos.concat(this.addotherpropertylist),""!==e.npcInstanceAttrVos[0].value){console.log(t("发生了"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:159"));var a=e.npcInstanceAttrVos[0].value.data[0];"否"===a?e.npcInstanceAttrVos[0].value="否":"是"===a&&(e.npcInstanceAttrVos[0].value="是")}if(""!==e.npcInstanceAttrVos[1].value){var o=e.npcInstanceAttrVos[1].value.data[0];"否"===o?e.npcInstanceAttrVos[1].value="否":"是"===o&&(e.npcInstanceAttrVos[1].value="是")}if(""!==e.npcInstanceAttrVos[2].value){var s=e.npcInstanceAttrVos[2].value.data[0];for(var i in this.allMaplist)this.allMaplist[i].name===s&&(e.npcInstanceAttrVos[2].value=this.allMaplist[i].id)}if(""!==e.npcInstanceAttrVos[3].value){console.log(t("发生了"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:186"));var c=e.npcInstanceAttrVos[3].value.data[0];"否"===c?e.npcInstanceAttrVos[3].value="否":"能"===c&&(e.npcInstanceAttrVos[3].value="能")}return console.log(t(e,"提交的数据"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:194")),e.name?void(e.projectId=this.workinfo.id):void n.showToast({icon:"none",title:"分类名称不能为空"})}if("change"===this.operation){for(var i in console.log(t(e,"编辑提交的数据"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:255")),e.npcInstanceAttrVos)""===e.npcInstanceAttrVos[i].nickname&&(e.npcInstanceAttrVos[i].nickname=null);if(e.npcInstanceAttrVos=e.npcInstanceAttrVos.concat(this.addotherpropertylist),""!==e.npcInstanceAttrVos[0].value){var r=e.npcInstanceAttrVos[0].value.value[0];1===r?e.npcInstanceAttrVos[0].value="否":0===r&&(e.npcInstanceAttrVos[0].value="是")}if(""!==e.npcInstanceAttrVos[1].value){var p=e.npcInstanceAttrVos[1].value.data[0];for(var i in this.allNPClist)this.allNPClist[i].name===p&&(e.npcInstanceAttrVos[1].value=this.allNPClist[i].id)}if(""!==e.npcInstanceAttrVos[2].value){var l=e.npcInstanceAttrVos[2].value.data[0];for(var i in this.allMaplist)this.allMaplist[i].name===l&&(e.npcInstanceAttrVos[2].value=this.allMaplist[i].id)}if(!e.name)return void n.showToast({icon:"none",title:"分类名称不能为空"});e.projectId=this.workinfo.id;var u=this;u.$request.put("/goods/class//"+e.id+"/",e).then(function(e){console.log(t(e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:298")),1===e.code?n.showModal({title:"提示",content:"编辑类别成功",cancelText:"继续编辑",confirmText:"返回列表",success:function(e){e.confirm?(console.log(t("点击确定"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:307")),n.navigateBack({delta:1})):e.cancel}}):n.showModal({title:"提示",content:e.msg,cancelText:"继续编辑",confirmText:"返回列表",success:function(e){e.confirm?(console.log(t("点击确定"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:323")),n.navigateBack({delta:1})):e.cancel}})}).catch(function(e){console.log(t(e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:334"))})}},deleteohter:function(t){var e=this.addotherpropertylist.indexOf(t);-1!==e&&this.addotherpropertylist.splice(e,1)},addotherproperty:function(){var t={name:"",value:"",nickname:"",isBase:!0};this.addotherpropertylist.push(t)},getmaplist:function(){var e=this;e.$request.get("/place/?projectId="+e.workinfo.id).then(function(t){var a=[[]];for(var n in t.data)a[0].push(t.data[n].name);e.allMaplist=t.data,e.Maplist=a,e.setPickerDatac()}).catch(function(e){console.error(t("error:",e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:367"))})},getNPClist:function(){var e=this;e.$request.get("/npc/instance_by_project_id/"+e.workinfo.id+"/").then(function(t){var a=[[]];for(var n in t.data)a[0].push(t.data[n].name);e.allNPClist=t.data,e.NPClist=a,e.setPickerDatac()}).catch(function(e){console.error(t("error:",e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:384"))})},initialize1:function(){var e=this;e.$request.get("/npc/instance_by_project_id/"+e.workinfo.id+"/").then(function(t){var a=[[]];for(var n in t.data)a[0].push(t.data[n].name);if(e.allNPClist=t.data,e.NPClist=a,""!==e.postdata.npcInstanceAttrVos[1].value){var o=e.postdata.npcInstanceAttrVos[1].value;for(var n in e.allNPClist)e.allNPClist[n].id===parseInt(o)&&(e.postdata.npcInstanceAttrVos[1].value={data:[e.allNPClist[n].name],value:[parseInt(n)]},e.$set(e.postdata.npcInstanceAttrVos,1,e.postdata.npcInstanceAttrVos[1]))}e.initialize2()}).catch(function(e){console.error(t("error:",e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:413"))})},initialize2:function(){var e=this;e.$request.get("/place/?projectId="+e.workinfo.id).then(function(a){var n=[[]];for(var o in a.data)n[0].push(a.data[o].name);if(e.allMaplist=a.data,e.Maplist=n,""!==e.postdata.npcInstanceAttrVos[2].value){var s=e.postdata.npcInstanceAttrVos[2].value;for(var o in e.allMaplist)e.allMaplist[o].id===parseInt(s)&&(e.postdata.npcInstanceAttrVos[2].value={data:[e.allMaplist[o].name],value:[parseInt(o)]},e.$set(e.postdata.npcInstanceAttrVos,2,e.postdata.npcInstanceAttrVos[2]))}e.updateview=!0,console.log(t(e.updateview,"此时的updateview"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:441")),e.$nextTick(function(){e.setPickerDatac2()})}).catch(function(e){console.error(t("error:",e," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:447"))})},setPickerDatac:function(){this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.inquire2),this.$refs.pickerCustom3.setData(this.Maplist),this.$refs.pickerCustom4.setData(this.inquire3)},setPickerDatac2:function(){!0===this.updateview&&(this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.NPClist),this.$refs.pickerCustom3.setData(this.Maplist))}},mounted:function(){},onShow:function(){},onLoad:function(e){var a=n.getStorageSync("workinfo");if(this.workinfo=a,e.categoryinfo){this.updateview=!1,console.log(t(this.updateview,"状态1"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:474"));var o=JSON.parse(e.categoryinfo);console.log(t(o,"接收的数据"," at pages\\workpage\\npc\\editorNpc\\editorNpc.vue:476"));var s=[];for(var i in o.npcInstanceAttrVos)null===o.npcInstanceAttrVos[i].nickname&&(o.npcInstanceAttrVos[i].nickname=""),i>2&&s.push(o.npcInstanceAttrVos[i]);if(this.addotherpropertylist=s,this.postdata=o,this.initialize1(),""!==this.postdata.npcInstanceAttrVos[0].value){var c=this.postdata.npcInstanceAttrVos[0].value;"是"===c?this.postdata.npcInstanceAttrVos[0].value={data:["是"],value:[0]}:"否"===c&&(this.postdata.npcInstanceAttrVos[0].value={data:["否"],value:[1]})}this.operation="change"}else this.pickerValue1="请选择",this.pickerValue2="请选择",this.getmaplist(),this.getNPClist()}};e.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},"3f02":function(t,e,a){"use strict";var n=a("2cc3"),o=a.n(n);o.a},"4f7f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"4fda":function(t,e,a){"use strict";(function(t){a("bf90"),a("921b");n(a("66fd"));var e=n(a("0ae0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["4fda","common/runtime","common/vendor"]]]);