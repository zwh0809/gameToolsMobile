(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workpage-goods-categoryGoods-categoryGoods"],{1497:function(t,a,o){"use strict";o.r(a);var s=o("b780"),e=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(a,t,function(){return s[t]})}(n);a["default"]=e.a},"326f":function(t,a,o){"use strict";var s=o("9b34"),e=o.n(s);e.a},8951:function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",[t.updateview?o("QSPickerCustom",{ref:"pickerCustom4",attrs:{title:"物品类别",pickerTitle:"物品类别"},on:{change:function(a){a=t.$handleEvent(a),t.changecategory(a)}},model:{value:t.postdata.goodsClassId,callback:function(a){t.$set(t.postdata,"goodsClassId",a)},expression:"postdata.goodsClassId"}}):t._e(),o("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"物品名称"},model:{value:t.postdata.name,callback:function(a){t.$set(t.postdata,"name",a)},expression:"postdata.name"}}),o("QSInput",{attrs:{variableName:"input",layout:"column",title:"物品别名"},model:{value:t.postdata.nickname,callback:function(a){t.$set(t.postdata,"nickname",a)},expression:"postdata.nickname"}}),o("QSTextarea",{attrs:{variableName:"textarea",textareaWidth:"100",layout:"column",title:"物品简介"},model:{value:t.postdata.intro,callback:function(a){t.$set(t.postdata,"intro",a)},expression:"postdata.intro"}}),o("v-uni-view",{staticClass:"property"},[o("v-uni-view",{staticClass:"title"},[t._v("类别属性")]),t.updateview?o("v-uni-view",{staticClass:"one_property"},[o("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.goodsInstanceAttrVos[0].name,callback:function(a){t.$set(t.postdata.goodsInstanceAttrVos[0],"name",a)},expression:"postdata.goodsInstanceAttrVos[0].name"}}),o("QSPickerCustom",{ref:"pickerCustom1",attrs:{title:"请选择可被询问",pickerTitle:"可被询问"},model:{value:t.postdata.goodsInstanceAttrVos[0].value,callback:function(a){t.$set(t.postdata.goodsInstanceAttrVos[0],"value",a)},expression:"postdata.goodsInstanceAttrVos[0].value"}})],1):t._e(),t.updateview?o("v-uni-view",{staticClass:"one_property"},[o("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.goodsInstanceAttrVos[1].name,callback:function(a){t.$set(t.postdata.goodsInstanceAttrVos[1],"name",a)},expression:"postdata.goodsInstanceAttrVos[1].name"}}),o("QSPickerCustom",{ref:"pickerCustom2",attrs:{title:"请选择所属角色",pickerTitle:"所属角色"},model:{value:t.postdata.goodsInstanceAttrVos[1].value,callback:function(a){t.$set(t.postdata.goodsInstanceAttrVos[1],"value",a)},expression:"postdata.goodsInstanceAttrVos[1].value"}})],1):t._e(),t.updateview?o("v-uni-view",{staticClass:"one_property"},[o("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.goodsInstanceAttrVos[2].name,callback:function(a){t.$set(t.postdata.goodsInstanceAttrVos[2],"name",a)},expression:"postdata.goodsInstanceAttrVos[2].name"}}),o("QSPickerCustom",{ref:"pickerCustom3",attrs:{title:"请选择所在地点",pickerTitle:"所在地点"},model:{value:t.postdata.goodsInstanceAttrVos[2].value,callback:function(a){t.$set(t.postdata.goodsInstanceAttrVos[2],"value",a)},expression:"postdata.goodsInstanceAttrVos[2].value"}})],1):t._e(),t._l(t.othergoodsInstanceAttrVos,function(a,s){return o("v-uni-view",{staticClass:"one_property2"},[o("QSInput",{attrs:{variableName:"input",disabled:!0,layout:"row"},model:{value:t.othergoodsInstanceAttrVos[s].name,callback:function(a){t.$set(t.othergoodsInstanceAttrVos[s],"name",a)},expression:"othergoodsInstanceAttrVos[index].name"}}),o("QSInput",{attrs:{variableName:"input",layout:"row"},model:{value:t.othergoodsInstanceAttrVos[s].value,callback:function(a){t.$set(t.othergoodsInstanceAttrVos[s],"value",a)},expression:"othergoodsInstanceAttrVos[index].value"}})],1)}),o("v-uni-button",{staticClass:"uni-button2",attrs:{type:"primary",plain:"true"},on:{click:function(a){a=t.$handleEvent(a),t.submitdata(a)}}},[t._v(t._s("push"===t.operation?"确认添加":"确认编辑"))])],2)],1)},e=[];o.d(a,"a",function(){return s}),o.d(a,"b",function(){return e})},"89f0":function(t,a,o){"use strict";o.r(a);var s=o("8951"),e=o("1497");for(var n in e)"default"!==n&&function(t){o.d(a,t,function(){return e[t]})}(n);o("326f");var i=o("2877"),l=Object(i["a"])(e["default"],s["a"],s["b"],!1,null,"0e42e70f",null);a["default"]=l.exports},"9b34":function(t,a,o){var s=o("adff");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=o("4f06").default;e("3b3e1ef9",s,!0,{sourceMap:!1,shadowMode:!1})},adff:function(t,a,o){a=t.exports=o("2350")(!1),a.push([t.i,".property[data-v-0e42e70f]{font-size:%?32?%;color:#666;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.one_property[data-v-0e42e70f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.one_property2[data-v-0e42e70f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.title[data-v-0e42e70f]{margin-left:%?20?%}.uni-button[data-v-0e42e70f]{text-align:center;font-size:%?32?%;color:#666;height:%?60?%;line-height:%?60?%;border-radius:%?10?%;margin-top:%?20?%;margin-left:0}.other[data-v-0e42e70f]{padding:10px;width:30%!important}.icon[data-v-0e42e70f]{margin-top:%?40?%}.uni-button2[data-v-0e42e70f]{width:100%;margin-top:%?20?%}",""])},b780:function(t,a,o){"use strict";var s=o("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=s(o("e814"));o("6b54"),o("87b3"),o("7f7f");var n=s(o("f499")),i={data:function(){return{postdata:{goodsInstanceAttrVos:[{goodsClassAttrId:"",name:"可被询问",value:""},{goodsClassAttrId:"",name:"所属角色",value:""},{goodsClassAttrId:"",name:"所在地点",value:""}],othergoodsInstanceAttrVos:[],goodsClassId:"",name:"",intro:"",nickname:"",npcId:"",npcName:"",placeId:"",placeName:""},NPClist:[],Maplist:[],allNPClist:[],allMaplist:[],allCategorylist:[],Categorylist:[],inquire:[["是","否"]],workinfo:{},operation:"push",showelement:!1,updateview:!0}},methods:{changecategory:function(t){0===t.value.length&&(t.value[0]=0);var a=t.value[0];console.log(this.allCategorylist[a].goodsClassAttrVos,"看看是什么东西"),this.postdata.goodsClassId=this.allCategorylist[a].id;var o=this.allCategorylist[a].goodsClassAttrVos,s=[];if(o.length>3)for(var e in o)e>2&&s.push(o[e]);this.othergoodsInstanceAttrVos=s,this.postdata.goodsInstanceAttrVos[0].goodsClassAttrId=this.allCategorylist[a].goodsClassAttrVos[0].id,this.postdata.goodsInstanceAttrVos[1].goodsClassAttrId=this.allCategorylist[a].goodsClassAttrVos[1].id,this.postdata.goodsInstanceAttrVos[2].goodsClassAttrId=this.allCategorylist[a].goodsClassAttrVos[2].id},submitdata:function(){var t=JSON.parse((0,n.default)(this.postdata));if("push"===this.operation){if(""!==t.goodsInstanceAttrVos[0].value){var a=t.goodsInstanceAttrVos[0].value.data[0];t.goodsInstanceAttrVos[0].value="否"===a?"否":"是"===a?"是":t.goodsInstanceAttrVos[0].value.data[0]}if(""!=t.goodsInstanceAttrVos[1].value){var o=t.goodsInstanceAttrVos[1].value.data[0];for(var s in this.allNPClist)this.allNPClist[s].name===o&&(t.goodsInstanceAttrVos[1].value=this.allNPClist[s].id)}if(""!==t.goodsInstanceAttrVos[2].value){var e=t.goodsInstanceAttrVos[2].value.data[0];for(var s in this.allMaplist)this.allMaplist[s].name===e&&(t.goodsInstanceAttrVos[2].value=this.allMaplist[s].id)}if(!t.goodsClassId)return void uni.showToast({icon:"none",title:"请选择物品分类"});if(!t.name)return void uni.showToast({icon:"none",title:"物品名称不能为空"});if(!t.goodsInstanceAttrVos[0].value)return void uni.showToast({icon:"none",title:"请选择是否可被询问"});console.log(t,"提交的数据");var i=this;i.$request.post("/goods/instance/",t).then(function(t){console.log(t),1===t.code?uni.showModal({title:"提示",content:"添加类别成功",cancelText:"继续添加",confirmText:"返回列表",success:function(t){t.confirm?(console.log("点击确定"),uni.navigateBack({delta:1})):t.cancel}}):uni.showModal({title:"提示",content:t.msg,cancelText:"继续添加",confirmText:"返回列表",success:function(t){t.confirm?(console.log("点击确定"),uni.navigateBack({delta:1})):t.cancel}})}).catch(function(t){console.log(t)})}else if("change"===this.operation){for(var s in console.log(t,"编辑提交的数据"),t.goodsInstanceAttrVos)""===t.goodsInstanceAttrVos[s].nickname&&(t.goodsInstanceAttrVos[s].nickname=null);if(t.goodsInstanceAttrVos=t.goodsInstanceAttrVos.concat(this.othergoodsInstanceAttrVos),""!==t.goodsInstanceAttrVos[0].value){var l=t.goodsInstanceAttrVos[0].value.data[0];"否"===l?t.goodsInstanceAttrVos[0].value="否":"是"===l&&(t.goodsInstanceAttrVos[0].value="是")}if(""!==t.goodsInstanceAttrVos[1].value&&null!==t.goodsInstanceAttrVos[1].value){var r=t.goodsInstanceAttrVos[1].value.data[0];for(var s in this.allNPClist)this.allNPClist[s].name===r&&(t.goodsInstanceAttrVos[1].value=this.allNPClist[s].id)}if(""!==t.goodsInstanceAttrVos[2].value&&null!==t.goodsInstanceAttrVos[2].value){var c=t.goodsInstanceAttrVos[2].value.data[0];for(var s in this.allMaplist)this.allMaplist[s].name===c&&(t.goodsInstanceAttrVos[2].value=this.allMaplist[s].id)}if(""!==t.goodsClassId.value&&null!==t.goodsClassId.value&&"[object Object]"===Object.prototype.toString.call(t.goodsClassId)){var d=t.goodsClassId.data[0];for(var s in this.allCategorylist)this.allCategorylist[s].name===d&&(t.goodsClassId=this.allCategorylist[s].id)}if(!t.name)return void uni.showToast({icon:"none",title:"分类名称不能为空"});t.projectId=this.workinfo.id;var u=this;u.$request.put("/goods/instance//"+u.workinfo.id+"/",t).then(function(t){console.log(t),1===t.code?uni.showModal({title:"提示",content:"编辑物品成功",cancelText:"继续编辑",confirmText:"返回列表",success:function(t){t.confirm?(console.log("点击确定"),uni.navigateBack({delta:1})):t.cancel}}):uni.showModal({title:"提示",content:t.msg,cancelText:"继续编辑",confirmText:"返回列表",success:function(t){t.confirm?(console.log("点击确定"),uni.navigateBack({delta:1})):t.cancel}})}).catch(function(t){console.log(t)})}},getCategorylist:function(){var t=this,a=this;a.$request.get("/goods/class/?projectId="+a.workinfo.id).then(function(o){if(1===o.code){var s=[[]];for(var e in o.data)s[0].push(o.data[e].name);a.allCategorylist=o.data,a.Categorylist=s,t.setPickerDatac()}}).catch(function(t){console.error("error:",t)})},getmaplist:function(){var t=this,a=this;a.$request.get("/place/?projectId="+a.workinfo.id).then(function(o){var s=[[]];for(var e in o.data)s[0].push(o.data[e].name);a.allMaplist=o.data,a.Maplist=s,t.setPickerDatac()}).catch(function(t){console.error("error:",t)})},getNPClist:function(){var t=this,a=this;a.$request.get("/npc/instance_by_project_id/"+a.workinfo.id+"/").then(function(o){var s=[[]];for(var e in o.data)s[0].push(o.data[e].name);a.allNPClist=o.data,a.NPClist=s,t.setPickerDatac()}).catch(function(t){console.error("error:",t)})},initialize1:function(){var t=this;t.$request.get("/npc/instance_by_project_id/"+t.workinfo.id+"/").then(function(a){var o=[[]];for(var s in a.data)o[0].push(a.data[s].name);if(t.allNPClist=a.data,t.NPClist=o,""!==t.postdata.goodsInstanceAttrVos[1].value){var n=t.postdata.goodsInstanceAttrVos[1].value;for(var s in t.allNPClist)t.allNPClist[s].id===(0,e.default)(n)&&(t.postdata.goodsInstanceAttrVos[1].value={data:[t.allNPClist[s].name],value:[(0,e.default)(s)]},t.$set(t.postdata.goodsInstanceAttrVos,1,t.postdata.goodsInstanceAttrVos[1]))}t.initialize2()}).catch(function(t){console.error("error:",t)})},initialize2:function(){console.log("initialize2");var t=this;t.$request.get("/place/?projectId="+t.workinfo.id).then(function(a){var o=[[]];for(var s in a.data)o[0].push(a.data[s].name);if(t.allMaplist=a.data,t.Maplist=o,""!==t.postdata.goodsInstanceAttrVos[2].value){var n=t.postdata.goodsInstanceAttrVos[2].value;for(var s in t.allMaplist)t.allMaplist[s].id===(0,e.default)(n)&&(t.postdata.goodsInstanceAttrVos[2].value={data:[t.allMaplist[s].name],value:[(0,e.default)(s)]},t.$set(t.postdata.goodsInstanceAttrVos,2,t.postdata.goodsInstanceAttrVos[2]))}t.initialize3()}).catch(function(t){console.error("error:",t)})},initialize3:function(){console.log("initialize3");var t=this;t.$request.get("/goods/class/?projectId="+t.workinfo.id).then(function(a){if(1===a.code){var o=[[]];for(var s in a.data)o[0].push(a.data[s].name);if(t.allCategorylist=a.data,t.Categorylist=o,""!==t.postdata.goodsClassId){var n=t.postdata.goodsClassId;for(var s in t.allCategorylist)t.allCategorylist[s].id===(0,e.default)(n)&&(t.postdata.goodsClassId={data:[t.allCategorylist[s].name],value:[(0,e.default)(s)]})}t.updateview=!0,console.log(t.updateview,"此时的updateview"),t.$nextTick(function(){t.setPickerDatac2()})}}).catch(function(t){console.error("error:",t)})},setPickerDatac:function(){this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.NPClist),this.$refs.pickerCustom3.setData(this.Maplist),this.$refs.pickerCustom4.setData(this.Categorylist)},setPickerDatac2:function(){this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.NPClist),this.$refs.pickerCustom3.setData(this.Maplist),this.$refs.pickerCustom4.setData(this.Categorylist)}},mounted:function(){},onShow:function(){},onLoad:function(t){var a=uni.getStorageSync("workinfo");if(this.workinfo=a,t.goodinfo){this.updateview=!1,this.operation="change";var o=JSON.parse(t.goodinfo);console.log(o,"接收的数据");var s=[];for(var e in o.goodsInstanceAttrVos)null===o.goodsInstanceAttrVos[e].nickname&&(o.goodsInstanceAttrVos[e].nickname=""),e>2&&s.push(o.goodsInstanceAttrVos[e]);if(this.othergoodsInstanceAttrVos=s,this.postdata=o,""!==this.postdata.goodsInstanceAttrVos[0].value){var n=this.postdata.goodsInstanceAttrVos[0].value;"是"===n?this.postdata.goodsInstanceAttrVos[0].value={data:["是"],value:[0]}:"否"===n&&(this.postdata.goodsInstanceAttrVos[0].value={data:["否"],value:[1]})}console.log(this.postdata,"形成的数据"),this.initialize1()}else this.operation="push",this.getCategorylist(),this.getmaplist(),this.getNPClist()}};a.default=i}}]);