(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main","components/cat-label/cat-label"],{"0e34":function(t,e,n){"use strict";(function(t){n("bf90"),n("921b");var e=l(n("66fd")),i=l(n("58c4")),o=l(n("cd64")),u=l(n("7424")),a=l(n("a84a"));l(n("0b8d")),l(n("31ea"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("components/t-table/t-table").then(n.bind(null,"ff6a"))},f=function(){return n.e("components/t-table/t-th").then(n.bind(null,"7c17"))},d=function(){return n.e("components/t-table/t-tr").then(n.bind(null,"86de"))},m=function(){return n.e("components/t-table/t-td").then(n.bind(null,"e064"))},p=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"2415"))};e.default.component("fa-icon",p),e.default.component("tTable",s),e.default.component("tTh",f),e.default.component("tTr",d),e.default.component("tTd",m);var h=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-input/index")]).then(n.bind(null,"cf59"))},g=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-radio/index")]).then(n.bind(null,"599a"))},b=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-checkbox/index")]).then(n.bind(null,"c138"))},y=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-textarea/index")]).then(n.bind(null,"e2a5"))},v=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-picker-date/index")]).then(n.bind(null,"f448"))},S=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-picker-city/index")]).then(n.bind(null,"1728"))},x=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-picker-custom/index")]).then(n.bind(null,"c27a"))},Q=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-picker-custom2/index")]).then(n.bind(null,"b7fa"))},T=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-pics/index")]).then(n.bind(null,"d1fe"))},$=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-infinitePics/index")]).then(n.bind(null,"9b58"))},w=function(){return Promise.all([n.e("common/vendor"),n.e("components/QS-inputs-split/elements/QS-switch/index")]).then(n.bind(null,"7fee"))};e.default.component("QSInput",h),e.default.component("QSRadio",g),e.default.component("QSCheckbox",b),e.default.component("QSTextarea",y),e.default.component("QSPickerDate",v),e.default.component("QSPickerCity",S),e.default.component("QSPickerCustom",x),e.default.component("QSPickerCustom2",Q),e.default.component("QSPics",T),e.default.component("QSInfinitePics",$),e.default.component("QSwitch",w),e.default.prototype.$request=a.default.minRequest,e.default.prototype.MinRequest=u.default,e.default.prototype.$store=o.default,e.default.config.productionTip=!1,i.default.mpType="app",e.default.use(u.default);var P=new e.default(r({},i.default,{minRequest:a.default,store:o.default}));t(P).$mount()}).call(this,n("6e42")["createApp"])},"0fb6":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/cpimg").then(n.bind(null,"d470"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"3f79"))},a=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"b19b"))},l={components:{wPicker:u,uniIcon:a,cpimg:o},props:{text:{default:"默认占位符",type:String},textAlign:{default:"left",type:String},mode:{default:"default",type:String},model:{default:"",type:String},placeholder:{default:"",type:String},textareaLength:{type:Number,default:500},dataText:{default:"默认占位符",type:String||Number},hasR:{default:!1,type:Boolean},showRightText:{default:!1,type:Boolean},rightText:{default:"",type:String},value:{default:"",type:String},name:{default:"",type:String},icon:{type:String,default:"arrowright"},preview:{type:Boolean,default:!0},startYear:{type:String,default:"1949"},endYear:{type:String,default:"2030"},startHour:{type:String,default:"8"},endHour:{type:String,default:"20"},minuteStep:{type:String,default:"5"},afterStep:{type:String,default:"30"},editImg:{type:Boolean,default:!1},imgList:{type:Array,default:function(){return[]}},imgNumber:{type:Number,default:9},dataType:{default:"",type:String},noP:{default:!1,type:Boolean},initIndex:{type:Number,default:0},selectList:{type:Array,default:function(){return[{label:"男",value:"0"},{label:"女",value:"1"}]}},inputType:{default:"text",type:String},hasX:{default:!1,type:Boolean},useReg:{default:!1,type:Boolean},reg:{default:/(?:)/,type:RegExp},regText:{type:String,default:""}},created:function(){this.ImgNumber=this.imgNumber-this.copyimgList.length},watch:{initIndex:function(t,e){this.tabIndex=t},imgList:function(t,e){this.copyimgList=t},value:function(t){this.inputValue=t}},data:function(){return{ImgNumber:"",inputValue:this.value,staticColor:"default",selectorD:[this.initIndex],defaultVal2:[0,1,3],defaultVal3:[0,0,0],defaultVal4:[0,0,0,0,0,0],tabIndex:this.initIndex,copyimgList:this.imgList,textareaVal:""}},methods:{rightClick:function(){this.$emit("handRight")},cpimgOk:function(e){var n=this;e.map(function(t){n.copyimgList.push(t)}),this.ImgNumber=this.imgNumber-this.copyimgList.length,t.hideLoading(),this.$emit("getImg",this.copyimgList)},cpimgErr:function(t){this.$emit("getImgErr",t)},clearImg:function(t,e){var n=t-1;this.copyimgList.splice(e,1),this.ImgNumber=this.imgNumber-this.copyimgList.length,this.$emit("clearImg",n)},textFocus:function(){this.staticColor="default",this.$emit("focus")},textBlur:function(e){this.useReg&&(this.reg.test(e.target.value)?this.staticColor="default":(this.staticColor="err",t.showToast({title:this.regText,icon:"none"}))),this.$emit("blur",e.target.value)},handleChange:function(t){this.$emit("input",t.target.value)},handtextarea:function(t){this.textareaVal=t.target.value,this.$emit("input",t.target.value)},toggleTabClick:function(){this.$emit("handClick")},toggleTabImg:function(){console.log(i(1," at components\\cat-label\\cat-label.vue:376"))},toggleTabGetImg:function(){this.editImg&&(this.ImgNumber<0||this.imgNumber<=this.copyimgList.length?t.showToast({title:"none",icon:"none"}):this.$refs.cpimgs._changImg())},showPreview:function(e){this.preview&&t.previewImage({urls:this.copyimgList,indicator:"number",current:e,longPressActions:{itemList:["保存图片"],success:function(t){console.log(i("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片"," at components\\cat-label\\cat-label.vue:400"))},fail:function(t){console.log(i(t.errMsg," at components\\cat-label\\cat-label.vue:403"))}}})},toggleTabSelector:function(){this.$refs.selector.show()},toggleTabDate:function(){this.$refs.date.show()},toggleTabTime:function(){this.$refs.time.show()},toggleTabDateTime:function(){this.$refs.dateTime.show()},toggleTabRange:function(){this.$refs.range.show()},toggleTabYearMonth:function(){this.$refs.yearMonth.show()},toggleTabRegion:function(){this.$refs.region.show()},toggleTabLimit:function(){this.$refs.limit.show()},onConfirm:function(t){this.tabIndex=t.checkArr.index,this.$emit("handSelect",t)},onConfirm2:function(t){this.$emit("handDate",t)},onConfirm3:function(t){this.$emit("handTime",t)},onConfirm4:function(t){this.$emit("handDateTime",t)},onConfirm5:function(t){this.$emit("handRange",t)},onConfirm6:function(t){this.$emit("handYearMonth",t)},onConfirm7:function(t){this.$emit("handRegion",t)},onConfirm8:function(t){this.$emit("handLimit",t)}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"31ea":function(t,e,n){"use strict";n.r(e);var i=n("c350"),o=n("77ab");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("84b2");var a=n("2877"),l=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},"335d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={globalData:{userinfo:{}},onLaunch:function(){},onShow:function(){},onHide:function(){}};e.default=i},4820:function(t,e,n){},"58c4":function(t,e,n){"use strict";n.r(e);var i=n("a30d");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("7589");var u,a,l=n("2877"),r=Object(l["a"])(i["default"],u,a,!1,null,null,null);e["default"]=r.exports},7589:function(t,e,n){"use strict";var i=n("4820"),o=n.n(i);o.a},"77ab":function(t,e,n){"use strict";n.r(e);var i=n("0fb6"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},"84b2":function(t,e,n){"use strict";var i=n("fa63"),o=n.n(i);o.a},a30d:function(t,e,n){"use strict";n.r(e);var i=n("335d"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},c350:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,Array.isArray(t.inputValue));t._isMounted||(t.e0=function(e){var n=t.inputValue,i=e.target,o=!!i.checked;if(Array.isArray(n)){var u=t.inputValue,a=t._i(n,u);i.checked?a<0&&(t.inputValue=n.concat([u])):a>-1&&(t.inputValue=n.slice(0,a).concat(n.slice(a+1)))}else t.inputValue=o},t.e1=function(e){t.inputValue=t.inputValue}),t.$mp.data=Object.assign({},{$root:{g0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},fa63:function(t,e,n){}},[["0e34","common/runtime","common/vendor"]]]);