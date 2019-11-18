(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/workpage/drama/dramaList/editordramaList"],{

/***/ 214:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/main.js?{"page":"pages%2Fworkpage%2Fdrama%2FdramaList%2FeditordramaList"} ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editordramaList = _interopRequireDefault(__webpack_require__(/*! ./pages/workpage/drama/dramaList/editordramaList.vue */ 215));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editordramaList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 215:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editordramaList_vue_vue_type_template_id_7526223c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editordramaList.vue?vue&type=template&id=7526223c& */ 216);
/* harmony import */ var _editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editordramaList.vue?vue&type=script&lang=js& */ 218);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editordramaList.vue?vue&type=style&index=0&lang=css& */ 221);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editordramaList_vue_vue_type_template_id_7526223c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editordramaList_vue_vue_type_template_id_7526223c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 216:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue?vue&type=template&id=7526223c& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_template_id_7526223c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editordramaList.vue?vue&type=template&id=7526223c& */ 217);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_template_id_7526223c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_template_id_7526223c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 217:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue?vue&type=template&id=7526223c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 218:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editordramaList.vue?vue&type=script&lang=js& */ 219);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 219:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































































var _listSort = __webpack_require__(/*! ../../../../common/listSort.js */ 220); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { postdata: { categoryId: '', note: '', plotNum: '', plotPlaceId: '', //地点ID
        plotPlaceName: '', // 地点名字
        plotTextVos: [{ content: '', mood: '', npcId: '', npcName: '', offline: '', moodList: [] }] // 对话文本
      }, NPClist: [], Maplist: [], Dramllist: [], allNPClist: [], allMaplist: [], allDramllist: [], moodList: [], allMoodList: [], Dubbing: {}, // 配音角色
      addotherpropertylist: [], workinfo: {}, operation: 'push', updateview: true, categoryId: '', resetbox: true };}, methods: { // 选中剧情
    selectvalue: function selectvalue(_ref) {var newVal = _ref.newVal,oldVal = _ref.oldVal,index = _ref.index,orignItem = _ref.orignItem;var arrindex = index;this.postdata.categoryId = this.allDramllist[arrindex].id;console.log(this.postdata.categoryId, 'c此时的ID');this.getdatalist(this.postdata.categoryId);}, // 选中地点
    selectvalue2: function selectvalue2(_ref2) {var newVal = _ref2.newVal,oldVal = _ref2.oldVal,index = _ref2.index,orignItem = _ref2.orignItem;var arrindex = index;this.postdata.plotPlaceId = this.allMaplist[arrindex].id;this.postdata.plotPlaceName = this.allMaplist[arrindex].name;console.log(this.postdata, '表单数据');}, // 选中角色
    selectvalue3: function selectvalue3(itemindex, _ref3) {var newVal = _ref3.newVal,oldVal = _ref3.oldVal,index = _ref3.index,orignItem = _ref3.orignItem; // this.ishsow=false
      var arrindex = index;var Npc = this.allNPClist[arrindex];console.log(Npc, '数据');if (Npc.offline === true) {} else {uni.showToast({ title: '该角色说话风格不存在，请选择说话风格后重试,', icon: 'none', duration: 2000 });god.postdata.plotTextVos[itemindex].mood = '';return;}if (Npc.offline === true) {this.postdata.plotTextVos[itemindex].moodList = this.Dubbing.offline[Npc.voiceClass].mood;this.postdata.plotTextVos[itemindex].offline = true;} else {this.postdata.plotTextVos[itemindex].moodList = this.Dubbing.online[Npc.voiceClass].mood;this.postdata.plotTextVos[itemindex].offline = false;}this.postdata.plotTextVos[itemindex].npcId = Npc.id;this.postdata.plotTextVos[itemindex].npcName = Npc.name;this.postdata.plotTextVos[itemindex].mood = Npc.mood;console.log(itemindex, '对话列表索引');console.log(this.postdata.plotTextVos, '列表数据');}, // 选中情绪
    selectvalue4: function selectvalue4(itemindex, _ref4) {var newVal = _ref4.newVal,oldVal = _ref4.oldVal,index = _ref4.index,orignItem = _ref4.orignItem;
      this.postdata.plotTextVos[itemindex].mood = newVal;
    },
    // 获取所有剧情
    getdatalist: function getdatalist(id) {
      var num = '';
      console.log(this.allDramllist, '列表');
      console.log();var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = this.allDramllist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var item = _step.value;
          if (parseInt(this.postdata.categoryId) === item.id) {
            num = item.num;
          }
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
      console.log(num, '基数');
      var that = this;
      that.$request.
      get('/plot/text/?categoryId=' + id).
      then(function (res) {
        if (res.code === 1) {
          var data = res.data;
          data = (0, _listSort.listSort)(data);
          if (that.operation === 'push') {
            // 新建作品时得到的默认编号
            var plotNum = '';
            if (data.length === 0) {
              plotNum = num + '-' + 1;
            } else {
              var max = 0;var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
                for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var i = _step2.value;
                  if (max < parseInt(i.plotNum.split('-')[1].split('-')[0])) {
                    max = JSON.parse(parseInt(i.plotNum.split('-')[1].split('-')[0]));
                  }
                }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return != null) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
              plotNum = num + '-' + (max + 1);
            }
            that.postdata.plotNum = plotNum;
          }
        }
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    getdramaList: function getdramaList() {
      var that = this;
      that.$request.
      get('/plot/category/?projectId=' + that.workinfo.id).
      then(function (res) {
        if (res.code === 1) {
          var arr = [];
          for (var i in res.data) {
            arr.push(res.data[i].name);
          }
          that.allDramllist = res.data;
          that.Dramllist = arr;
          console.log(that.allDramllist, '剧情列表');
        }
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    //  提交数据
    submitdata: function submitdata() {
      var postdata = JSON.parse(JSON.stringify(this.postdata));
      console.log(this.operation, '状态');

      for (var i in postdata.plotTextVos) {
        delete postdata.plotTextVos[i].moodList;
      }
      console.log(postdata, '提交的数据');

      if (this.operation === 'push') {
        if (!postdata.plotNum) {
          uni.showToast({
            icon: 'none',
            title: '请添加剧情编号' });

          return;
        }
        if (!postdata.categoryId) {
          uni.showToast({
            icon: 'none',
            title: '请选择剧情分组' });

          return;
        }

        for (var i in postdata.plotTextVos) {
          if (!postdata.plotTextVos[i].content || !postdata.plotTextVos[i].mood || !postdata.plotTextVos[i].npcId || !postdata.plotTextVos[i].npcName) {
            uni.showToast({
              icon: 'none',
              title: '请完善对话信息' });

            return;
          }
        }
        if (!postdata.plotPlaceId || !postdata.plotPlaceName) {
          uni.showToast({
            icon: 'none',
            title: '请选择对话地点' });

          return;
        }
        console.log(postdata, '提交的数据');
        var that = this;
        that.$request.
        post('/plot/text/', postdata).
        then(function (res) {
          console.log(res);
          if (res.code === 1) {
            uni.showModal({
              title: '提示',
              content: '添加剧情成功',
              cancelText: '继续添加',
              confirmText: '返回列表',
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确定');
                  uni.navigateBack({
                    delta: 1 });

                } else if (res.cancel) {
                }
              } });

          } else {
            uni.showModal({
              title: '提示',
              content: res.msg,
              cancelText: '继续添加',
              confirmText: '返回列表',
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确定');
                  uni.navigateBack({
                    delta: 1 });

                } else if (res.cancel) {
                }
              } });

          }
        }).
        catch(function (erro) {
          console.log(erro);
        });
      } else if (this.operation === 'change') {
        delete postdata.initialize1;
        delete postdata.isAddBranch;
        if (!postdata.plotNum) {
          uni.showToast({
            icon: 'none',
            title: '请添加剧情编号' });

          return;
        }
        if (!postdata.categoryId) {
          uni.showToast({
            icon: 'none',
            title: '请选择剧情分组' });

          return;
        }

        for (var i in postdata.plotTextVos) {
          if (!postdata.plotTextVos[i].content || !postdata.plotTextVos[i].mood || !postdata.plotTextVos[i].npcId || !postdata.plotTextVos[i].npcName) {
            uni.showToast({
              icon: 'none',
              title: '请完善对话信息' });

            return;
          }
        }
        if (!postdata.plotPlaceId || !postdata.plotPlaceName) {
          uni.showToast({
            icon: 'none',
            title: '请选择对话地点' });

          return;
        }
        for (var i in postdata.plotTextVos) {
          for (var ii in this.allNPClist) {
            if (postdata.plotTextVos[i].npcName === this.allNPClist[ii].name) {
              postdata.plotTextVos[i].offline = this.allNPClist[ii].offline;
            }
          }
        }
        console.log(postdata, '提交的数据');
        var _that = this;
        _that.$request.
        put('/plot/text/' + _that.workinfo.id + '/', postdata).
        then(function (res) {
          console.log(res);
          if (res.code === 1) {
            uni.showModal({
              title: '提示',
              content: '编辑剧情成功',
              cancelText: '继续编辑',
              confirmText: '返回列表',
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确定');
                  uni.navigateBack({
                    delta: 1 });

                } else if (res.cancel) {
                }
              } });

          } else {
            uni.showModal({
              title: '提示',
              content: res.msg,
              cancelText: '继续编辑',
              confirmText: '返回列表',
              success: function success(res) {
                if (res.confirm) {
                  console.log('点击确定');
                  uni.navigateBack({
                    delta: 1 });

                } else if (res.cancel) {
                }
              } });

          }
        }).
        catch(function (erro) {
          console.log(erro);
        });
      }
    },
    deleteohter: function deleteohter(item) {
      if (this.postdata.plotTextVos.length === 1) {
        uni.showToast({
          icon: 'none',
          title: '最少保留一个对话' });

        return;
      }
      var index = this.postdata.plotTextVos.indexOf(item);
      if (index !== -1) {
        this.postdata.plotTextVos.splice(index, 1);
      }
    },
    addotherproperty: function addotherproperty() {
      var obj = {
        content: '',
        mood: '',
        npcId: '',
        npcName: '',
        offline: '',
        moodList: [] };

      this.postdata.plotTextVos.push(obj);
    },
    // 获取地点
    getmaplist: function getmaplist() {
      var that = this;
      that.$request.
      get('/place/?projectId=' + that.workinfo.id).
      then(function (res) {
        var arr = [];
        for (var i in res.data) {
          arr.push(res.data[i].name);
        }
        that.allMaplist = res.data;
        that.Maplist = arr;
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    // 获取NPC
    getNPClist: function getNPClist() {
      var that = this;
      that.$request.
      get('/npc/instance_by_project_id/' + that.workinfo.id + '/').
      then(function (res) {
        var arr = [];
        for (var i in res.data) {
          arr.push(res.data[i].name);
        }
        that.allNPClist = res.data;
        that.NPClist = arr;
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    // 获取配音
    getDubbing: function getDubbing() {var _this = this;
      var that = this;
      that.$request.
      get('http://didi-gz5.jiaoyou365.com:9663/api/speakers').
      then(function (res) {
        console.log(res);
        _this.Dubbing = res;
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    initialize1: function initialize1() {
      var that = this;
      that.$request.
      get('/place/?projectId=' + that.workinfo.id).
      then(function (res) {
        var arr = [[]];
        for (var i in res.data) {
          arr[0].push(res.data[i].name);
        }
        that.allMaplist = res.data;
        that.Maplist = arr;

        if (that.postdata.npcClassAttrVos[2].value !== '') {
          var voucher3 = that.postdata.npcClassAttrVos[2].value;
          for (var i in that.allMaplist) {
            if (that.allMaplist[i].id === parseInt(voucher3)) {
              that.postdata.npcClassAttrVos[2].value = {
                data: [that.allMaplist[i].name],
                value: [parseInt(i)] };

              that.$set(that.postdata.npcClassAttrVos, 2, that.postdata.npcClassAttrVos[2]);
            }
          }
        } else {
        }
        that.updateview = true;
        console.log(that.updateview, '此时的updateview');
        that.$nextTick(function () {});
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    // 初始化剧情编号
    initializeprojectId: function initializeprojectId() {var _this2 = this;
      var that = this;
      that.$request.
      get('/plot/category/?projectId=' + that.workinfo.id).
      then(function (res) {
        if (res.code === 1) {
          var arr = [];
          for (var i in res.data) {
            arr.push(res.data[i].name);
          }
          that.allDramllist = res.data;
          that.Dramllist = arr;
          _this2.resetbox = false;
          that.allDramllist.filter(function (item, index, arr) {
            if (item.id === that.postdata.categoryId) {
              console.log(item, '匹配的数据');
              that.postdata['initialize1'] = item.name;
            }
          });
          that.$nextTick(function () {
            this.resetbox = true;
            console.log(that.postdata.initialize1, '匹配的剧情分组---');
          });
          console.log(that.allDramllist, '剧情列表');
        }
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    } },

  mounted: function mounted() {},
  onShow: function onShow() {},
  onLoad: function onLoad(data) {
    var workinfo = uni.getStorageSync('workinfo');
    this.workinfo = workinfo;
    console.log(data, '页面数据');
    if (data.transmitdata) {
      this.getmaplist();
      this.getNPClist();
      this.getDubbing();
      this.getdramaList();
      var transmitdata = JSON.parse(decodeURIComponent(data.transmitdata));
      console.log(transmitdata, '接收的数据');
      this.categoryId = transmitdata.categoryId;
      this.operation = 'push';
    } else if (data.DramaGrouping) {
      this.getmaplist();
      this.getNPClist();
      this.getDubbing();
      this.getdramaList();
      var DramaGrouping = JSON.parse(decodeURIComponent(data.DramaGrouping));
      console.log(DramaGrouping, '接收的数据');
      this.postdata = DramaGrouping;

      this.postdata.categoryId = DramaGrouping.categoryId;
      console.log(this.postdata.categoryId, 'categoryId');
      this.operation = 'change';

      this.initializeprojectId();
      // this.postdata["initialize1"]="大dd"

      // let id=DramaGrouping.categoryId;
      // console.log(this.allMaplist,"地图列表")
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 221:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editordramaList.vue?vue&type=style&index=0&lang=css& */ 222);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editordramaList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/drama/dramaList/editordramaList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[214,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/workpage/drama/dramaList/editordramaList.js.map