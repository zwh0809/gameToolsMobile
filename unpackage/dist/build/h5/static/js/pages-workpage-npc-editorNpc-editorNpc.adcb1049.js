(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workpage-npc-editorNpc-editorNpc"],{"0797":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("795b"));a("ac6a"),a("5df3");var s={name:"robby-image-upload",props:["value","enableDel","enableAdd","enableDrag","serverUrl","formData","header","limit","fileKeyName","showUploadProgress","serverUrlDeleteImage"],data:function(){return{imageBasePos:{x0:-1,y0:-1,w:-1,h:-1},showMoveImage:!1,moveImagePath:"",moveLeft:0,moveTop:0,deltaLeft:0,deltaTop:0,dragIndex:null,targetImageIndex:null,imageList:[],isDestroyed:!1}},mounted:function(){this.imageList=this.value,!1===this.showUploadProgress?this.showUploadProgress=!1:this.showUploadProgress=!0},destroyed:function(){this.isDestroyed=!0},computed:{imageListData:function(){if(this.value)return this.value},posMoveImageLeft:function(){return this.moveLeft+"px"},posMoveImageTop:function(){return this.moveTop+"px"},isShowDel:function(){return!1!==this.enableDel},isShowAdd:function(){return!1!==this.enableAdd&&!(this.limit&&this.imageList.length>=this.limit)},isDragable:function(){return!1!==this.enableDrag}},methods:{selectImage:function(){var t=this;t.imageList||(t.imageList=[]),uni.chooseImage({count:t.limit?t.limit-t.imageList.length:999,success:function(e){var a=e.tempFilePaths;if(t.limit){var i=t.limit-t.imageList.length;if(i<a.length)return void uni.showToast({title:"图片总数限制为"+t.limit+"张，当前还可以选"+i+"张",icon:"none",mask:!1,duration:2e3})}if(t.serverUrl){uni.showToast({title:"上传进度：0/"+a.length,icon:"none",mask:!1});for(var s=t.imageList.length-a.length,o=[],r=t.fileKeyName?t.fileKeyName:"upload-images",l=0,c=function(e){o.push(new n.default(function(i,n){var o=s+e;uni.uploadFile({url:t.serverUrl,fileType:"image",header:t.header,formData:t.formData,filePath:a[e],name:r,success:function(e){if(200===e.statusCode){if(t.isDestroyed)return;l++,t.showUploadProgress&&uni.showToast({title:"上传进度："+l+"/"+a.length,icon:"none",mask:!1,duration:500}),console.log("success to upload image: "+e.data),i(e.data)}else console.log("fail to upload image:"+e.data),n("fail to upload image:"+o)},fail:function(t){console.log("fail to upload image:"+t),n("fail to upload image:"+o)}})}))},d=0;d<a.length;d++)c(d);n.default.all(o).then(function(e){if(!t.isDestroyed){for(var i=0;i<e.length;i++)t.imageList.push(e[i]);t.$emit("add",{currentImages:a,allImages:t.imageList}),t.$emit("input",t.imageList)}})}else{for(d=0;d<a.length;d++)t.imageList.push(a[d]);t.$emit("add",{currentImages:a,allImages:t.imageList}),t.$emit("input",t.imageList)}}})},deleteImage:function(t){var e=t.currentTarget.dataset.index,a=this.imageList[e];this.imageList.splice(e,1),this.serverUrlDeleteImage&&uni.request({url:this.serverUrlDeleteImage,method:"GET",data:{imagePath:a},success:function(t){console.log(t.data)}}),this.$emit("delete",{currentImage:a,allImages:this.imageList}),this.$emit("input",this.imageList)},previewImage:function(t){var e=t.currentTarget.dataset.index;uni.previewImage({current:this.imageList[e],indicator:"number",loop:"true",urls:this.imageList})},initImageBasePos:function(){var t=.024,e=this;uni.getSystemInfo({success:function(a){var i=a.screenWidth,n=Math.ceil(t*i),s=Math.ceil((i-2*n)/4);e.imageBasePos.x0=n,e.imageBasePos.w=s,e.imageBasePos.h=s}})},findOverlapImage:function(t,e){var a=Math.floor((t-this.imageBasePos.x0)/this.imageBasePos.w),i=Math.floor((e-this.imageBasePos.y0)/this.imageBasePos.h),n=4*i+a;return n},isDragging:function(t){return this.dragIndex===t},start:function(t){if(console.log(this.isDragable),this.isDragable){if(this.dragIndex=t.currentTarget.dataset.index,this.moveImagePath=this.imageList[this.dragIndex],this.showMoveImage=!0,-1===this.imageBasePos.y0){this.initImageBasePos();var e=Math.floor(this.dragIndex/4)*this.imageBasePos.h,a=t.currentTarget.offsetTop;this.imageBasePos.y0=a-e}this.moveLeft=t.target.offsetLeft,this.moveTop=t.target.offsetTop}},move:function(t){if(this.isDragable){var e=t.touches[0];this.targetImageIndex=this.findOverlapImage(e.clientX,e.clientY),0===this.deltaLeft&&(this.deltaLeft=e.clientX-this.moveLeft,this.deltaTop=e.clientY-this.moveTop),this.moveLeft=e.clientX-this.deltaLeft,this.moveTop=e.clientY-this.deltaTop}},stop:function(t){this.isDragable&&(null!==this.dragIndex&&null!==this.targetImageIndex&&(this.targetImageIndex<0&&(this.targetImageIndex=0),this.targetImageIndex>=this.imageList.length&&(this.targetImageIndex=this.imageList.length-1),this.dragIndex!==this.targetImageIndex&&(this.imageList[this.dragIndex]=this.imageList[this.targetImageIndex],this.imageList[this.targetImageIndex]=this.moveImagePath)),this.dragIndex=null,this.targetImageIndex=null,this.deltaLeft=0,this.deltaTop=0,this.showMoveImage=!1,this.$emit("input",this.imageList))}}};e.default=s},"0ae0":function(t,e,a){"use strict";a.r(e);var i=a("7eba"),n=a("2295");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("77d5");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"141c9484",null);e["default"]=r.exports},"12ea":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"imageUploadContainer"},[a("v-uni-view",{staticClass:"imageUploadList"},[t._l(t.imageListData,function(e,i){return a("v-uni-view",{key:i,staticClass:"imageItem"},[a("v-uni-image",{class:{dragging:t.isDragging(i)},attrs:{src:e,draggable:"true","data-index":i},on:{touchstart:function(e){e=t.$handleEvent(e),t.start(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.move(e)},touchend:function(e){e=t.$handleEvent(e),t.stop(e)},click:function(e){e=t.$handleEvent(e),t.previewImage(e)}}}),t.isShowDel?a("v-uni-view",{staticClass:"imageDel",attrs:{"data-index":i},on:{click:function(e){e=t.$handleEvent(e),t.deleteImage(e)}}},[t._v("x")]):t._e()],1)}),t.isShowAdd?a("v-uni-view",{staticClass:"imageUpload",on:{click:function(e){e=t.$handleEvent(e),t.selectImage(e)}}},[t._v("+")]):t._e()],2),t.showMoveImage?a("v-uni-image",{staticClass:"moveImage",style:{left:t.posMoveImageLeft,top:t.posMoveImageTop},attrs:{src:t.moveImagePath}}):t._e()],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},2295:function(t,e,a){"use strict";a.r(e);var i=a("da40"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},2622:function(t,e,a){"use strict";var i=a("98a2"),n=a.n(i);n.a},"3cee":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".imageUploadContainer[data-v-126bc9b9]{padding:%?10?% %?5?%;margin:%?10?% %?5?%}.dragging[data-v-126bc9b9]{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}.imageUploadList[data-v-126bc9b9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.imageItem[data-v-126bc9b9],.imageUpload[data-v-126bc9b9]{width:%?160?%;height:%?160?%;margin:%?10?%}.imageDel[data-v-126bc9b9]{position:relative;left:%?120?%;bottom:%?165?%;background-color:rgba(0,0,0,.5);width:%?36?%;text-align:center;line-height:%?35?%;border-radius:%?17?%;color:#fff;font-size:%?30?%;padding-bottom:%?2?%}.imageItem uni-image[data-v-126bc9b9],.moveImage[data-v-126bc9b9]{width:%?160?%;height:%?160?%;border-radius:%?8?%}.imageUpload[data-v-126bc9b9]{line-height:%?130?%;text-align:center;font-size:%?150?%;color:#d9d9d9;border:1px solid #d9d9d9;border-radius:%?8?%}.moveImage[data-v-126bc9b9]{position:absolute}",""])},4856:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".property[data-v-141c9484]{font-size:%?32?%;color:#666;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.one_property[data-v-141c9484]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;border:1px solid #f8f8f8;margin-top:%?20?%}.one_property2[data-v-141c9484]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.title[data-v-141c9484]{margin-left:%?20?%}.uni-button[data-v-141c9484]{text-align:center;font-size:%?32?%;color:#666;height:%?60?%;line-height:%?60?%;border-radius:%?10?%;margin-top:%?20?%;margin-left:0}.other[data-v-141c9484]{padding:10px;width:30%!important}.icon[data-v-141c9484]{margin-top:%?40?%}.uni-button2[data-v-141c9484]{width:100%;margin-top:%?20?%}.childrenBOX[data-v-141c9484]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.imgbox[data-v-141c9484]{margin-top:%?20?%;font-size:%?28?%;color:#666;text-align:center}.imgbox[data-v-141c9484] .imageItem{margin:auto}.imgbox[data-v-141c9484] .imageUpload{margin:auto}.imageItem[data-v-141c9484] img{border-radius:100px!important}",""])},"600e":function(t,e,a){var i=a("4856");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("715bb6f1",i,!0,{sourceMap:!1,shadowMode:!1})},"77d5":function(t,e,a){"use strict";var i=a("600e"),n=a.n(i);n.a},"7eba":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"imgbox"},[a("v-uni-view",{staticClass:"title requried"},[t._v("角色头像")]),a("robby-image-upload",{attrs:{"enable-del":t.enableDel,"enable-add":t.enableAdd,limit:t.limitNumber},on:{delete:function(e){e=t.$handleEvent(e),t.deleteImage(e)},add:function(e){e=t.$handleEvent(e),t.addImage(e)}},model:{value:t.imageData,callback:function(e){t.imageData=e},expression:"imageData"}})],1),a("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"角色名称"},model:{value:t.postdata.name,callback:function(e){t.$set(t.postdata,"name",e)},expression:"postdata.name"}}),a("QSInput",{attrs:{variableName:"input",required:"",layout:"column",title:"角色别名"},model:{value:t.postdata.nickname,callback:function(e){t.$set(t.postdata,"nickname",e)},expression:"postdata.nickname"}}),a("v-uni-view",{staticClass:"property"},[a("v-uni-view",{staticClass:"title"},[t._v("角色属性")]),a("v-uni-view",{staticClass:"one_property"},[a("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.npcInstanceAttrVos[0].name,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[0],"name",e)},expression:"postdata.npcInstanceAttrVos[0].name"}}),a("QSPickerCustom",{ref:"pickerCustom1",attrs:{title:"请选择跟随玩家",pickerTitle:"能否跟随玩家"},model:{value:t.postdata.npcInstanceAttrVos[0].value,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[0],"value",e)},expression:"postdata.npcInstanceAttrVos[0].value"}})],1),a("v-uni-view",{staticClass:"one_property"},[a("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.npcInstanceAttrVos[1].name,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[1],"name",e)},expression:"postdata.npcInstanceAttrVos[1].name"}}),a("QSPickerCustom",{ref:"pickerCustom2",attrs:{title:"请选择可被询问",pickerTitle:"可被询问"},model:{value:t.postdata.npcInstanceAttrVos[1].value,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[1],"value",e)},expression:"postdata.npcInstanceAttrVos[1].value"}})],1),t.updateview?a("v-uni-view",{staticClass:"one_property"},[a("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.npcInstanceAttrVos[2].name,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[2],"name",e)},expression:"postdata.npcInstanceAttrVos[2].name"}}),a("QSPickerCustom",{ref:"pickerCustom3",attrs:{title:"请选择所在地点",pickerTitle:"所在地点"},model:{value:t.postdata.npcInstanceAttrVos[2].value,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[2],"value",e)},expression:"postdata.npcInstanceAttrVos[2].value"}})],1):t._e(),a("v-uni-view",{staticClass:"one_property"},[a("QSInput",{attrs:{variableName:"input",disabled:!0,required:"",layout:"row"},model:{value:t.postdata.npcInstanceAttrVos[3].name,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[3],"name",e)},expression:"postdata.npcInstanceAttrVos[3].name"}}),a("QSPickerCustom",{ref:"pickerCustom4",attrs:{title:"请选择能否说话",pickerTitle:"能否说话"},model:{value:t.postdata.npcInstanceAttrVos[3].value,callback:function(e){t.$set(t.postdata.npcInstanceAttrVos[3],"value",e)},expression:"postdata.npcInstanceAttrVos[3].value"}})],1),t._l(t.addotherpropertylist,function(e,i){return a("v-uni-view",{staticClass:"one_property2"},[a("QSInput",{staticClass:"other",attrs:{variableName:"input",required:"",placeholder:"属性名称",layout:"row"},model:{value:t.addotherpropertylist[i].name,callback:function(e){t.$set(t.addotherpropertylist[i],"name",e)},expression:"addotherpropertylist[index].name"}}),a("QSInput",{staticClass:"other",attrs:{variableName:"input",required:"",placeholder:"属性别名",layout:"row"},model:{value:t.addotherpropertylist[i].nickname,callback:function(e){t.$set(t.addotherpropertylist[i],"nickname",e)},expression:"addotherpropertylist[index].nickname"}}),a("QSInput",{staticClass:"other",attrs:{variableName:"input",required:"",placeholder:"属性值",layout:"row"},model:{value:t.addotherpropertylist[i].value,callback:function(e){t.$set(t.addotherpropertylist[i],"value",e)},expression:"addotherpropertylist[index].value"}})],1)})],2),a("QSTextarea",{attrs:{variableName:"textarea",textareaWidth:"100",layout:"column",title:"人物简介"},model:{value:t.postdata.intro,callback:function(e){t.$set(t.postdata,"intro",e)},expression:"postdata.intro"}}),a("v-uni-button",{staticClass:"uni-button2",attrs:{type:"primary",plain:"true"},on:{click:function(e){e=t.$handleEvent(e),t.submitdata(e)}}},[t._v(t._s("push"===t.operation?"确认添加":"确认编辑"))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"8b9c":function(t,e,a){"use strict";a.r(e);var i=a("12ea"),n=a("ebd5");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("2622");var o=a("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"126bc9b9",null);e["default"]=r.exports},"98a2":function(t,e,a){var i=a("3cee");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1bf14b78",i,!0,{sourceMap:!1,shadowMode:!1})},da40:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("e814"));a("7f7f");var s=i(a("f499")),o=i(a("0b8d")),r=i(a("8b9c")),l=a("f8e2"),c={components:{robbyImageUpload:r.default},data:function(){return{imageData:["http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png"],enableDel:!0,enableAdd:!0,limitNumber:1,postdata:{npcInstanceAttrVos:[{name:"跟随玩家",value:"",isBase:!0},{name:"可被询问",value:"",isBase:!0},{name:"所在地点",value:"",isBase:!0},{name:"能否说话",value:"",isBase:!0}],isBase:!1,id:"",name:"",intro:"",projectId:"",headImgUrl:"",mood:"",nickname:"",npcClassId:"",offline:"",voiceClass:"",voiceName:""},NPClist:[],Maplist:[],allNPClist:[],allMaplist:[],steps1:{step_1_value:"name"},inquire:[["是","否"]],inquire2:[["是","否"]],inquire3:[["能","否"]],addotherpropertylist:[],workinfo:{},operation:"push",pickerValue1:"",pickerValue2:"",updateview:!0}},methods:{deleteImage:function(){console.log("删除图片")},addImage:function(t){var e=t.allImages[0],a=this;(0,l.pathToBase64)(e).then(function(t){var e=o.default.backUrl+"/upload/npc_head_img",i={data:t};a.$request.post(e,i).then(function(t){1===t.code&&(a.headImgUrl=t.data.absolutePath)}).catch(function(t){console.error("error:",t)})}).catch(function(t){console.error(t)})},submitdata:function(){var t=JSON.parse((0,s.default)(this.postdata));if(console.log(this.operation,"状态"),"push"===this.operation){if(t.npcInstanceAttrVos=t.npcInstanceAttrVos.concat(this.addotherpropertylist),""!==t.npcInstanceAttrVos[0].value){console.log("发生了");var e=t.npcInstanceAttrVos[0].value.data[0];"否"===e?t.npcInstanceAttrVos[0].value="否":"是"===e&&(t.npcInstanceAttrVos[0].value="是")}if(""!==t.npcInstanceAttrVos[1].value){var a=t.npcInstanceAttrVos[1].value.data[0];"否"===a?t.npcInstanceAttrVos[1].value="否":"是"===a&&(t.npcInstanceAttrVos[1].value="是")}if(""!==t.npcInstanceAttrVos[2].value){var i=t.npcInstanceAttrVos[2].value.data[0];for(var n in this.allMaplist)this.allMaplist[n].name===i&&(t.npcInstanceAttrVos[2].value=this.allMaplist[n].id)}if(""!==t.npcInstanceAttrVos[3].value){console.log("发生了");var o=t.npcInstanceAttrVos[3].value.data[0];"否"===o?t.npcInstanceAttrVos[3].value="否":"能"===o&&(t.npcInstanceAttrVos[3].value="能")}return console.log(t,"提交的数据"),t.name?void(t.projectId=this.workinfo.id):void uni.showToast({icon:"none",title:"分类名称不能为空"})}if("change"===this.operation){for(var n in console.log(t,"编辑提交的数据"),t.npcInstanceAttrVos)""===t.npcInstanceAttrVos[n].nickname&&(t.npcInstanceAttrVos[n].nickname=null);if(t.npcInstanceAttrVos=t.npcInstanceAttrVos.concat(this.addotherpropertylist),""!==t.npcInstanceAttrVos[0].value){var r=t.npcInstanceAttrVos[0].value.value[0];1===r?t.npcInstanceAttrVos[0].value="否":0===r&&(t.npcInstanceAttrVos[0].value="是")}if(""!==t.npcInstanceAttrVos[1].value){var l=t.npcInstanceAttrVos[1].value.data[0];for(var n in this.allNPClist)this.allNPClist[n].name===l&&(t.npcInstanceAttrVos[1].value=this.allNPClist[n].id)}if(""!==t.npcInstanceAttrVos[2].value){var c=t.npcInstanceAttrVos[2].value.data[0];for(var n in this.allMaplist)this.allMaplist[n].name===c&&(t.npcInstanceAttrVos[2].value=this.allMaplist[n].id)}if(!t.name)return void uni.showToast({icon:"none",title:"分类名称不能为空"});t.projectId=this.workinfo.id;var d=this;d.$request.put("/goods/class//"+t.id+"/",t).then(function(t){console.log(t),1===t.code?uni.showModal({title:"提示",content:"编辑类别成功",cancelText:"继续编辑",confirmText:"返回列表",success:function(t){t.confirm?(console.log("点击确定"),uni.navigateBack({delta:1})):t.cancel}}):uni.showModal({title:"提示",content:t.msg,cancelText:"继续编辑",confirmText:"返回列表",success:function(t){t.confirm?(console.log("点击确定"),uni.navigateBack({delta:1})):t.cancel}})}).catch(function(t){console.log(t)})}},deleteohter:function(t){var e=this.addotherpropertylist.indexOf(t);-1!==e&&this.addotherpropertylist.splice(e,1)},addotherproperty:function(){var t={name:"",value:"",nickname:"",isBase:!0};this.addotherpropertylist.push(t)},getmaplist:function(){var t=this;t.$request.get("/place/?projectId="+t.workinfo.id).then(function(e){var a=[[]];for(var i in e.data)a[0].push(e.data[i].name);t.allMaplist=e.data,t.Maplist=a,t.setPickerDatac()}).catch(function(t){console.error("error:",t)})},getNPClist:function(){var t=this;t.$request.get("/npc/instance_by_project_id/"+t.workinfo.id+"/").then(function(e){var a=[[]];for(var i in e.data)a[0].push(e.data[i].name);t.allNPClist=e.data,t.NPClist=a,t.setPickerDatac()}).catch(function(t){console.error("error:",t)})},initialize1:function(){var t=this;t.$request.get("/npc/instance_by_project_id/"+t.workinfo.id+"/").then(function(e){var a=[[]];for(var i in e.data)a[0].push(e.data[i].name);if(t.allNPClist=e.data,t.NPClist=a,""!==t.postdata.npcInstanceAttrVos[1].value){var s=t.postdata.npcInstanceAttrVos[1].value;for(var i in t.allNPClist)t.allNPClist[i].id===(0,n.default)(s)&&(t.postdata.npcInstanceAttrVos[1].value={data:[t.allNPClist[i].name],value:[(0,n.default)(i)]},t.$set(t.postdata.npcInstanceAttrVos,1,t.postdata.npcInstanceAttrVos[1]))}t.initialize2()}).catch(function(t){console.error("error:",t)})},initialize2:function(){var t=this;t.$request.get("/place/?projectId="+t.workinfo.id).then(function(e){var a=[[]];for(var i in e.data)a[0].push(e.data[i].name);if(t.allMaplist=e.data,t.Maplist=a,""!==t.postdata.npcInstanceAttrVos[2].value){var s=t.postdata.npcInstanceAttrVos[2].value;for(var i in t.allMaplist)t.allMaplist[i].id===(0,n.default)(s)&&(t.postdata.npcInstanceAttrVos[2].value={data:[t.allMaplist[i].name],value:[(0,n.default)(i)]},t.$set(t.postdata.npcInstanceAttrVos,2,t.postdata.npcInstanceAttrVos[2]))}t.updateview=!0,console.log(t.updateview,"此时的updateview"),t.$nextTick(function(){t.setPickerDatac2()})}).catch(function(t){console.error("error:",t)})},setPickerDatac:function(){this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.inquire2),this.$refs.pickerCustom3.setData(this.Maplist),this.$refs.pickerCustom4.setData(this.inquire3)},setPickerDatac2:function(){!0===this.updateview&&(this.$refs.pickerCustom1.setData(this.inquire),this.$refs.pickerCustom2.setData(this.NPClist),this.$refs.pickerCustom3.setData(this.Maplist))}},mounted:function(){},onShow:function(){},onLoad:function(t){var e=uni.getStorageSync("workinfo");if(this.workinfo=e,t.categoryinfo){this.updateview=!1,console.log(this.updateview,"状态1");var a=JSON.parse(t.categoryinfo);console.log(a,"接收的数据");var i=[];for(var n in a.npcInstanceAttrVos)null===a.npcInstanceAttrVos[n].nickname&&(a.npcInstanceAttrVos[n].nickname=""),n>2&&i.push(a.npcInstanceAttrVos[n]);if(this.addotherpropertylist=i,this.postdata=a,this.initialize1(),""!==this.postdata.npcInstanceAttrVos[0].value){var s=this.postdata.npcInstanceAttrVos[0].value;"是"===s?this.postdata.npcInstanceAttrVos[0].value={data:["是"],value:[0]}:"否"===s&&(this.postdata.npcInstanceAttrVos[0].value={data:["否"],value:[1]})}this.operation="change"}else this.pickerValue1="请选择",this.pickerValue2="请选择",this.getmaplist(),this.getNPClist()}};e.default=c},ebd5:function(t,e,a){"use strict";a.r(e);var i=a("0797"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},f8e2:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.pathToBase64=r,e.base64ToPath=l,a("a481");var n=i(a("0a0d"));a("34ef"),a("4917"),a("28a5");var s=i(a("795b"));function o(t){if(0===t.indexOf("_www")||0===t.indexOf("_doc")||0===t.indexOf("_documents")||0===t.indexOf("_downloads"))return t;if(0===t.indexOf("file://"))return t;if(0===t.indexOf("/storage/emulated/0/"))return t;if(0===t.indexOf("/")){var e=plus.io.convertAbsoluteFileSystem(t);if(e!==t)return e;t=t.substr(1)}return"_www/"+t}function r(t){return new s.default(function(e,a){if("object"===typeof window&&"document"in window){var i=document.createElement("canvas"),n=i.getContext("2d"),s=new Image;return s.onload=function(){i.width=s.width,i.height=s.height,n.drawImage(s,0,0),e(i.toDataURL())},s.onerror=a,void(s.src=t)}"object"!==typeof plus?"object"===typeof wx&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(t){e("data:image/png;base64,"+t.data)},fail:function(t){a(t)}}):a(new Error("not support")):plus.io.resolveLocalFileSystemURL(o(t),function(t){t.file(function(t){var i=new plus.io.FileReader;i.onload=function(t){e(t.target.result)},i.onerror=function(t){a(t)},i.readAsDataURL(t)},function(t){a(t)})},function(t){a(t)})})}function l(t){return new s.default(function(e,a){if("object"===typeof window&&"document"in window){t=t.split(",");var i=t[0].match(/:(.*?);/)[1],s=atob(t[1]),o=s.length,r=new Uint8Array(o);while(o--)r[o]=s.charCodeAt(o);return e((window.URL||window.webkitURL).createObjectURL(new Blob([r],{type:i})))}var l=t.match(/data\:\S+\/(\S+);/);l?l=l[1]:a(new Error("base64 error"));var c=(0,n.default)()+"."+l;if("object"!==typeof plus)if("object"===typeof wx&&wx.canIUse("getFileSystemManager")){var d=wx.env.USER_DATA_PATH+"/"+c;wx.getFileSystemManager().writeFile({filePath:d,data:t.replace(/^data:\S+\/\S+;base64,/,""),encoding:"base64",success:function(){e(d)},fail:function(t){a(t)}})}else a(new Error("not support"));else{var u=new plus.nativeObj.Bitmap("bitmap"+(0,n.default)());u.loadBase64Data(t,function(){var t="_doc/uniapp_temp/"+c;u.save(t,{},function(){u.clear(),e(t)},function(t){u.clear(),a(t)})},function(t){u.clear(),a(t)})}})}}}]);