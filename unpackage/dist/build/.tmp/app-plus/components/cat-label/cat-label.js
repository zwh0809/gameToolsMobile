(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cat-label/cat-label"],{"0fb6":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("components/cpimg").then(i.bind(null,"d470"))},o=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"3f79"))},u=function(){return i.e("components/uni-icon/uni-icon").then(i.bind(null,"b19b"))},r={components:{wPicker:o,uniIcon:u,cpimg:a},props:{text:{default:"默认占位符",type:String},textAlign:{default:"left",type:String},mode:{default:"default",type:String},model:{default:"",type:String},placeholder:{default:"",type:String},textareaLength:{type:Number,default:500},dataText:{default:"默认占位符",type:String||Number},hasR:{default:!1,type:Boolean},showRightText:{default:!1,type:Boolean},rightText:{default:"",type:String},value:{default:"",type:String},name:{default:"",type:String},icon:{type:String,default:"arrowright"},preview:{type:Boolean,default:!0},startYear:{type:String,default:"1949"},endYear:{type:String,default:"2030"},startHour:{type:String,default:"8"},endHour:{type:String,default:"20"},minuteStep:{type:String,default:"5"},afterStep:{type:String,default:"30"},editImg:{type:Boolean,default:!1},imgList:{type:Array,default:function(){return[]}},imgNumber:{type:Number,default:9},dataType:{default:"",type:String},noP:{default:!1,type:Boolean},initIndex:{type:Number,default:0},selectList:{type:Array,default:function(){return[{label:"男",value:"0"},{label:"女",value:"1"}]}},inputType:{default:"text",type:String},hasX:{default:!1,type:Boolean},useReg:{default:!1,type:Boolean},reg:{default:/(?:)/,type:RegExp},regText:{type:String,default:""}},created:function(){this.ImgNumber=this.imgNumber-this.copyimgList.length},watch:{initIndex:function(t,e){this.tabIndex=t},imgList:function(t,e){this.copyimgList=t},value:function(t){this.inputValue=t}},data:function(){return{ImgNumber:"",inputValue:this.value,staticColor:"default",selectorD:[this.initIndex],defaultVal2:[0,1,3],defaultVal3:[0,0,0],defaultVal4:[0,0,0,0,0,0],tabIndex:this.initIndex,copyimgList:this.imgList,textareaVal:""}},methods:{rightClick:function(){this.$emit("handRight")},cpimgOk:function(e){var i=this;e.map(function(t){i.copyimgList.push(t)}),this.ImgNumber=this.imgNumber-this.copyimgList.length,t.hideLoading(),this.$emit("getImg",this.copyimgList)},cpimgErr:function(t){this.$emit("getImgErr",t)},clearImg:function(t,e){var i=t-1;this.copyimgList.splice(e,1),this.ImgNumber=this.imgNumber-this.copyimgList.length,this.$emit("clearImg",i)},textFocus:function(){this.staticColor="default",this.$emit("focus")},textBlur:function(e){this.useReg&&(this.reg.test(e.target.value)?this.staticColor="default":(this.staticColor="err",t.showToast({title:this.regText,icon:"none"}))),this.$emit("blur",e.target.value)},handleChange:function(t){this.$emit("input",t.target.value)},handtextarea:function(t){this.textareaVal=t.target.value,this.$emit("input",t.target.value)},toggleTabClick:function(){this.$emit("handClick")},toggleTabImg:function(){console.log(n(1," at components\\cat-label\\cat-label.vue:376"))},toggleTabGetImg:function(){this.editImg&&(this.ImgNumber<0||this.imgNumber<=this.copyimgList.length?t.showToast({title:"none",icon:"none"}):this.$refs.cpimgs._changImg())},showPreview:function(e){this.preview&&t.previewImage({urls:this.copyimgList,indicator:"number",current:e,longPressActions:{itemList:["保存图片"],success:function(t){console.log(n("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片"," at components\\cat-label\\cat-label.vue:400"))},fail:function(t){console.log(n(t.errMsg," at components\\cat-label\\cat-label.vue:403"))}}})},toggleTabSelector:function(){this.$refs.selector.show()},toggleTabDate:function(){this.$refs.date.show()},toggleTabTime:function(){this.$refs.time.show()},toggleTabDateTime:function(){this.$refs.dateTime.show()},toggleTabRange:function(){this.$refs.range.show()},toggleTabYearMonth:function(){this.$refs.yearMonth.show()},toggleTabRegion:function(){this.$refs.region.show()},toggleTabLimit:function(){this.$refs.limit.show()},onConfirm:function(t){this.tabIndex=t.checkArr.index,this.$emit("handSelect",t)},onConfirm2:function(t){this.$emit("handDate",t)},onConfirm3:function(t){this.$emit("handTime",t)},onConfirm4:function(t){this.$emit("handDateTime",t)},onConfirm5:function(t){this.$emit("handRange",t)},onConfirm6:function(t){this.$emit("handYearMonth",t)},onConfirm7:function(t){this.$emit("handRegion",t)},onConfirm8:function(t){this.$emit("handLimit",t)}}};e.default=r}).call(this,i("6e42")["default"],i("0de9")["default"])},"31ea":function(t,e,i){"use strict";i.r(e);var n=i("c350"),a=i("77ab");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("84b2");var u=i("2877"),r=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"77ab":function(t,e,i){"use strict";i.r(e);var n=i("0fb6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"84b2":function(t,e,i){"use strict";var n=i("fa63"),a=i.n(n);a.a},c350:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,Array.isArray(t.inputValue));t._isMounted||(t.e0=function(e){var i=t.inputValue,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=t.inputValue,u=t._i(i,o);n.checked?u<0&&(t.inputValue=i.concat([o])):u>-1&&(t.inputValue=i.slice(0,u).concat(i.slice(u+1)))}else t.inputValue=a},t.e1=function(e){t.inputValue=t.inputValue}),t.$mp.data=Object.assign({},{$root:{g0:i}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},fa63:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cat-label/cat-label-create-component',
    {
        'components/cat-label/cat-label-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("31ea"))
        })
    },
    [['components/cat-label/cat-label-create-component']]
]);                
