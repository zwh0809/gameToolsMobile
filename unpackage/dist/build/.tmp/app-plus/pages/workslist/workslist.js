(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workslist/workslist"],{1085:function(e,t,s){"use strict";s.r(t);var o=s("cb61"),i=s("434a");for(var r in i)"default"!==r&&function(e){s.d(t,e,function(){return i[e]})}(r);s("45ef");var n=s("2877"),a=Object(n["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"1fbe":function(e,t,s){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(s("0b8d")),r=s("f8e2");function n(e){return e&&e.__esModule?e:{default:e}}var a=function(){return s.e("components/cat-label/cat-label").then(s.bind(null,"31ea"))},l=(s("b410"),function(){return s.e("components/uni-ui/uni-collapse/uni-collapse").then(s.bind(null,"42d6"))}),c=function(){return s.e("components/uni-ui/uni-collapse-item/uni-collapse-item").then(s.bind(null,"87e1"))},u=function(){return s.e("components/uni-ui/uni-list/uni-list").then(s.bind(null,"e148"))},h=function(){return s.e("components/uni-ui/uni-list-item/uni-list-item").then(s.bind(null,"5d5b"))},d=function(){return s.e("components/robby-image-upload/robby-image-upload").then(s.bind(null,"8b9c"))},k=function(){return s.e("components/neil-modal/neil-modal").then(s.bind(null,"4360"))},f=function(){return s.e("components/uni-ui/uni-tag/uni-tag").then(s.bind(null,"ddb0"))},w={components:{catLabel:a,uniCollapse:l,uniCollapseItem:c,uniList:u,uniListItem:h,robbyImageUpload:d,neilModal:k,uniTag:f},data:function(){return{item_NO:{},operation_editor:"编辑作品",operation_add:"新建作品",is_typeshow:!1,datalist:[],LabelList:[],userinfo:{},imageData:[],fileList:"",enableDel:!0,limitNumber:1,enableAdd:!0,img:"",bannerImgUrl:"",hadOpen:!0,worktype_initIndex:0,worktype:[],selector_worktype:[],degreeItems:[{value:"1",name:"简单"},{value:"2",name:"中等"},{value:"3",name:"困难"}],degree_current:0,editionItems:[{value:"1",name:"文字版"},{value:"2",name:"声音版"}],editionItems_current:0,freeItems:[{value:"1",name:"免费"},{value:"2",name:"付费"}],free_current:0,startItems:[{value:"1",name:"询问开始或继续"},{value:"2",name:"快速开始"},{value:"3",name:"继续"}],start_current:0,checkboxItems:[{name:"1",value:"儿童"},{name:"2",value:"学生"},{name:"3",value:"成人"}],settingworktype:[{name:"debug",value:"调试词性"},{name:"disable_time_recognition",value:"时间禁用多次识别"}],label:"",workData:{name:"",intro:"",userId:"",bannerImgUrl:"",preface:"",labels:[],difficulty:"简单",cache:!0,userNickname:"",suitCrowds:"",wordNum:"",postURL:"",configContent:"",postActive:!1,startOption:1,extraOptions:[],edition:1,workType:0,startAge:1,stopAge:100,free:0,nicknames:"",username:""},labels:[],manual_labels:"",selected:[],show_labelBOx:!1,editortitle:""}},methods:{gotoinfo:function(t){e.setStorageSync("workinfo",t),e.navigateTo({url:"../grid/grid"})},getworktype:function(){var e=this;e.$request.get(i.default.backUrl+"/workType").then(function(e){console.log(o(e," at pages\\workslist\\workslist.vue:369"))}).catch(function(e){console.error(o("error:",e," at pages\\workslist\\workslist.vue:372"))})},getworklist:function(){var e=this;e.$request.get(i.default.backUrl+"/project/by_username/?username="+this.userinfo.username).then(function(t){console.log(o(t," at pages\\workslist\\workslist.vue:381")),1===t.code&&(e.datalist=t.data)}).catch(function(e){console.error(o("error:",e," at pages\\workslist\\workslist.vue:387"))})},dec_publish:function(t){console.log(o("点击操作了"," at pages\\workslist\\workslist.vue:392"));var s=this,i=JSON.parse(JSON.stringify(t));console.log(o(i,"数据"," at pages\\workslist\\workslist.vue:395")),2===i.applyStatus?e.showModal({title:"发布作品",content:"作品需一到三天审核完毕，请耐心等待",success:function(e){e.confirm||e.cancel&&console.log(o("用户点击取消"," at pages\\workslist\\workslist.vue:403"))}}):(i.applyStatus=2,e.showModal({title:"发布作品",content:"作品需一到三天审核完毕，请耐心等待",success:function(e){e.confirm?s.$request.put("/project/"+i.id+"/apply?applyStatus=2").then(function(e){1===e.code&&god.getworklist()}).catch(function(e){console.error(o("error:",e," at pages\\workslist\\workslist.vue:423"))}):e.cancel&&console.log(o("用户点击取消"," at pages\\workslist\\workslist.vue:426"))}}))},dec_delete:function(t){var s=this,i="/work/"+t.botAccount+"?botId="+t.botId;e.showModal({title:"提示",content:"确定要删除此作品吗?",success:function(e){e.confirm?s.$request.delete(i).then(function(e){1===e.code&&s.getworklist()}).catch(function(e){console.error(o("error:",e," at pages\\workslist\\workslist.vue:450"))}):e.cancel&&console.log(o("用户点击取消"," at pages\\workslist\\workslist.vue:453"))}})},editor:function(e,t){if("新建作品"===t){this.editortitle="添加作品",console.log(o(this.editortitle,"此时的状态"," at pages\\workslist\\workslist.vue:462")),this.workData={name:"",intro:"",userId:"",bannerImgUrl:"",preface:"",labels:[],difficulty:"简单",cache:!0,userNickname:"",suitCrowds:"",wordNum:"",postURL:"",configContent:"",postActive:!1,startOption:1,extraOptions:[],edition:1,workType:0,startAge:1,stopAge:100,free:0,nicknames:"",username:""},this.workData.userNickname=this.userinfo.nickname,this.workData.username=this.userinfo.username,this.label="",this.imageData=[],this.tart_current=0,this.ditionItems_current=0,this.free_current=0,this.degree_current=0,this.selected=[];var s=!0,i=!1,r=void 0;try{for(var n,a=this.settingworktype[Symbol.iterator]();!(s=(n=a.next()).done);s=!0){var l=n.value;l["checked"]=!1}}catch(L){i=!0,r=L}finally{try{s||null==a.return||a.return()}finally{if(i)throw r}}var c=!0,u=!1,h=void 0;try{for(var d,k=this.checkboxItems[Symbol.iterator]();!(c=(d=k.next()).done);c=!0){l=d.value;l["checked"]=!1}}catch(L){u=!0,h=L}finally{try{c||null==k.return||k.return()}finally{if(u)throw h}}}else if("编辑作品"===t){this.editortitle="确认编辑",console.log(o(this.editortitle,"此时的状态"," at pages\\workslist\\workslist.vue:507"));var f=JSON.parse(JSON.stringify(e));null===f.username&&(console.log(o(this.userinfo,"缓存数据"," at pages\\workslist\\workslist.vue:511")),f.username=this.userinfo.username);var w="";for(var l in f.labels)w=w+","+f.labels[l].name;w=w.substr(1),console.log(o(this.label,"已经选择的标签"," at pages\\workslist\\workslist.vue:522")),this.label=w,this.selected=f.labels,f.bannerImgUrl&&(this.imageData=[],this.imageData.push(f.bannerImgUrl)),this.workData=f;var g=f.workType;for(var v in this.selector_worktype)this.selector_worktype[v].value===g&&(this.worktype_initIndex=v);var p=f.edition;for(var v in this.editionItems)parseInt(this.editionItems[v].value)===p&&(this.editionItems_current=parseInt(v));var m=f.free;0===m?this.free_current=0:1===m&&(this.free_current=1);var b=f.difficulty;for(var y in"简单"===b?this.degree_current=0:"中等"===b?this.degree_current=1:"困难"===b&&(this.degree_current=2),this.checkboxItems)this.checkboxItems[y]["checked"]=!1;var _=f.suitCrowds,I=_.split(",");for(var l in this.checkboxItems)for(var x in I)I[x]===this.checkboxItems[l].value&&(this.checkboxItems[l]["checked"]=!0,console.log(o(this.checkboxItems[l].value," at pages\\workslist\\workslist.vue:571")));var D=f.startOption;for(var l in console.log(o(D,"启动设置"," at pages\\workslist\\workslist.vue:577")),console.log(o(this.startItems,"列表"," at pages\\workslist\\workslist.vue:578")),this.startItems)parseInt(this.startItems[l].value)===D&&(this.start_current=parseInt(l))}console.log(o(e,"作品数据"," at pages\\workslist\\workslist.vue:585")),console.log(o(t,""," at pages\\workslist\\workslist.vue:586")),this.is_typeshow=!0},getLabelList:function(){var e=this;e.$request.get("/label/system").then(function(t){1===t.code&&(e.LabelList=t.data)}).catch(function(e){console.error(o("error:",error," at pages\\workslist\\workslist.vue:601"))})},editor_getworktype:function(){var e=this;e.$request.get(i.default.backUrl+"/workType").then(function(t){var s=[];for(var i in t.data){var r={label:"",value:"",index:"",level:""};r.label=t.data[i].name,r.value=t.data[i].id,r.index=parseInt(i),r.level=t.data[i].level,s.push(r)}e.worktype=t.data,e.selector_worktype=s,console.log(o(e.selector_worktype,"下拉框数据"," at pages\\workslist\\workslist.vue:625"))}).catch(function(e){console.error(o("error:",e," at pages\\workslist\\workslist.vue:628"))})},editionList_handSelect:function(e){console.log(o(e," at pages\\workslist\\workslist.vue:633")),this.editionList_initIndex=e.checkArr.index,console.log(o(this.editionList_initIndex,"索引"," at pages\\workslist\\workslist.vue:635")),0===this.editionList_initIndex?this.workData.edition=1:1===this.worktype_initIndex&&(this.workData.edition=2),console.log(o(this.workData.edition,"版本类型"," at pages\\workslist\\workslist.vue:641"))},worktype_handSelect:function(e){console.log(o(e," at pages\\workslist\\workslist.vue:645")),this.worktype_initIndex=e.checkArr.index,this.workData.workType=this.selector_worktype[e.checkArr.index].value,this.isshow=this.selector_worktype[e.checkArr.index].value,console.log(o(this.workData.workType,"id"," at pages\\workslist\\workslist.vue:649"))},radioChange2:function(e){for(var t=0;t<this.degreeItems.length;t++)if(this.degreeItems[t].value===e.target.value){this.degree_current=t;break}console.log(o(this.degree_current,"单选"," at pages\\workslist\\workslist.vue:659")),0===this.degree_current?this.workData.difficulty="简单":1===this.degree_current?this.workData.difficulty="中等":2===this.degree_current&&(this.workData.difficulty="困难")},radioChange:function(e){for(var t=0;t<this.editionItems.length;t++)if(this.editionItems[t].value===e.target.value){this.editionItems_current=t;break}console.log(o(this.editionItems_current,"单选"," at pages\\workslist\\workslist.vue:676")),0===this.editionItems_current?this.workData.edition=1:1===this.degree_initIndex&&(this.workData.edition=2)},radioChange3:function(e){for(var t=0;t<this.freeItems.length;t++)if(this.freeItems[t].value===e.target.value){this.free_current=t;break}0===this.free_current?this.workData.free=0:1===this.free_current&&(this.workData.free=1)},radioChange4:function(e){for(var t=0;t<this.startItems.length;t++)if(this.freeItems[t].value===e.target.value){this.start_current=t;break}0===this.start_current?this.workData.startOption=1:1===this.start_current?this.workData.startOption=2:2===this.start_current&&(this.workData.startOption=3)},checkboxChange:function(e){console.log(o(e," at pages\\workslist\\workslist.vue:715"));for(var t=e.target.value,s={},i=0;i<this.checkboxItems.length;i++)-1!==t.indexOf(this.checkboxItems[i].name)?s["checkboxItems["+i+"].checked"]=!0:s["checkboxItems["+i+"].checked"]=!1;this.workData.suitCrowds=e.target.value},checkboxChange2:function(e){console.log(o(e," at pages\\workslist\\workslist.vue:729"));for(var t=e.target.value,s={},i=0;i<this.settingworktype.length;i++)-1!==t.indexOf(this.settingworktype[i].name)?s["settingworktype["+i+"].checked"]=!0:s["settingworktype["+i+"].checked"]=!1;this.workData.extraOptions=t},switch1Change:function(e){this.workData.cache=e.target.value},goSelectlabel:function(){this.show_labelBOx=!0;var e=this.LabelList,t=!0,s=!1,i=void 0;try{for(var r,n=e[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var a=r.value,l=!0,c=!1,u=void 0;try{for(var h,d=a.labels[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var k=h.value;null!==k.id&&(k.id=k.id.toString()),k["checked"]=!1}}catch(v){c=!0,u=v}finally{try{l||null==d.return||d.return()}finally{if(c)throw u}}}}catch(v){s=!0,i=v}finally{try{t||null==n.return||n.return()}finally{if(s)throw i}}for(var f in this.labels=e,this.labels)for(var w in this.labels[f].labels)for(var g in this.selected)this.labels[f].labels[w].name===this.selected[g].name&&(this.labels[f].labels[w]["checked"]=!0,console.log(o(this.labels[f].labels[w].name," at pages\\workslist\\workslist.vue:764")));this.labels=e,console.log(o(this.selected,"已选择的标签"," at pages\\workslist\\workslist.vue:771"))},addImage:function(e){var t=e.allImages[0],s=this;(0,r.pathToBase64)(t).then(function(e){var t=i.default.backUrl+"/upload/img",r={data:e};s.$request.post(t,r).then(function(e){1===e.code&&(s.workData.bannerImgUrl=e.data.absolutePath)}).catch(function(e){console.error(o("error:",e," at pages\\workslist\\workslist.vue:790"))})}).catch(function(e){console.error(o(e," at pages\\workslist\\workslist.vue:794"))})},editor_adddata:function(){var t=JSON.parse(JSON.stringify(this.workData));if("添加作品"===this.editortitle&&(t.labels=this.selected),t.intro&&t.suitCrowds&&t.userNickname&&t.preface&&t.difficulty&&t.userNickname&&t.labels){console.log(o(this.editortitle,"头头3"," at pages\\workslist\\workslist.vue:811"));var s=typeof t.suitCrowds;if(console.log(o(t.suitCrowds,"转换前"," at pages\\workslist\\workslist.vue:813")),console.log(o(s,"验证"," at pages\\workslist\\workslist.vue:814")),t.suitCrowds.length>0&&"object"===s&&(t.suitCrowds=t.suitCrowds.join(",")),"object"===typeof t.nicknames?t.nicknames=[]:""===t.nicknames?t.nicknames=[]:(t.nicknames=t.nicknames.replace(/,/g,"，"),t.nicknames=t.nicknames.replace(/ /g,""),t.nicknames=t.nicknames.split("，")),t.nicknames=Array.from(new Set(t.nicknames)),"添加作品"===this.editortitle){console.log(o(this.editortitle,"1"," at pages\\workslist\\workslist.vue:830")),console.log(o("是添加"," at pages\\workslist\\workslist.vue:831"));var r=this;e.showLoading({title:"生成作品中"}),r.$request.post(i.default.backUrl+"/work",t).then(function(t){e.hideLoading(),1===t.code?e.showModal({title:"提示",content:"添加作品成功",cancelText:"继续添加",confirmText:"返回列表",success:function(e){e.confirm?(console.log(o("点击确定"," at pages\\workslist\\workslist.vue:848")),r.is_typeshow=!1,r.getworklist()):e.cancel&&r.getworklist()}}):e.showModal({title:"提示",content:t.msg,cancelText:"继续添加",confirmText:"返回列表",success:function(e){e.confirm?(r.is_typeshow=!1,r.getworklist()):e.cancel&&r.getworklist()}}),console.log(o(t," at pages\\workslist\\workslist.vue:875"))}).catch(function(e){console.error(o("error:",error," at pages\\workslist\\workslist.vue:878"))})}else if("确认编辑"===this.editortitle){console.log(o(this.editortitle,"1"," at pages\\workslist\\workslist.vue:881")),console.log(o("是修改"," at pages\\workslist\\workslist.vue:882"));var n=this;e.showLoading({title:"作品修改中"}),n.$request.put(i.default.backUrl+"/work/"+t.botAccount,t).then(function(t){e.hideLoading(),1===t.code?e.showModal({title:"提示",content:"修改作品成功",cancelText:"继续修改",confirmText:"返回列表",success:function(e){e.confirm?(n.is_typeshow=!1,n.getworklist()):e.cancel&&n.getworklist()}}):e.showModal({title:"提示",content:t.msg,cancelText:"继续修改",confirmText:"返回列表",success:function(e){e.confirm?(n.is_typeshow=!1,n.getworklist()):e.cancel&&n.getworklist()}}),console.log(o(t," at pages\\workslist\\workslist.vue:925"))}).catch(function(e){console.error(o("error:",error," at pages\\workslist\\workslist.vue:928"))})}}else e.showToast({title:"请填写必填项",icon:"none",duration:2e3})},returnworklist:function(){this.is_typeshow=!1},change:function(){},closeModal:function(){this.show_labelBOx=!1},checkboxChange_label:function(e){var t=e.target.value;console.log(o(t,"选择的集合"," at pages\\workslist\\workslist.vue:946"));var s=[],i=this.labels;for(var r in console.log(o(i,"labels"," at pages\\workslist\\workslist.vue:953")),i)for(var n in i[r].labels)for(var a in t)t[a]==i[r].labels[n].id&&s.push({id:null,name:i[r].labels[n].name});this.selected=s},bindBtn:function(){var e="";for(var t in this.selected)e=e+","+this.selected[t].name;e=e.substr(1),console.log(o(this.label,"已经选择的标签"," at pages\\workslist\\workslist.vue:975")),this.label=e,this.workData.labels=this.selected}},onShow:function(){this.getworktype(),this.getworklist(),this.getLabelList(),this.editor_getworktype();var t=e.getStorageSync("userinfo");this.userinfo=t},onLoad:function(t){var s=e.getStorageSync("userinfo");this.userinfo=s}};t.default=w}).call(this,s("6e42")["default"],s("0de9")["default"])},"3b2a":function(e,t,s){"use strict";(function(e){s("bf90"),s("921b");o(s("66fd"));var t=o(s("1085"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},"434a":function(e,t,s){"use strict";s.r(t);var o=s("1fbe"),i=s.n(o);for(var r in o)"default"!==r&&function(e){s.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},"45ef":function(e,t,s){"use strict";var o=s("f9e2"),i=s.n(o);i.a},cb61:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];s.d(t,"a",function(){return o}),s.d(t,"b",function(){return i})},f9e2:function(e,t,s){}},[["3b2a","common/runtime","common/vendor"]]]);