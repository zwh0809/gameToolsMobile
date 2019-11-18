(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/workpage/npc/editorNpc/editorNpc"],{

/***/ 166:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/main.js?{"page":"pages%2Fworkpage%2Fnpc%2FeditorNpc%2FeditorNpc"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editorNpc = _interopRequireDefault(__webpack_require__(/*! ./pages/workpage/npc/editorNpc/editorNpc.vue */ 167));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editorNpc.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 167:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorNpc_vue_vue_type_template_id_1a4604e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editorNpc.vue?vue&type=template&id=1a4604e1& */ 168);
/* harmony import */ var _editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorNpc.vue?vue&type=script&lang=js& */ 170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editorNpc.vue?vue&type=style&index=0&lang=css& */ 172);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editorNpc_vue_vue_type_template_id_1a4604e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editorNpc_vue_vue_type_template_id_1a4604e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue?vue&type=template&id=1a4604e1& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_template_id_1a4604e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editorNpc.vue?vue&type=template&id=1a4604e1& */ 169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_template_id_1a4604e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_template_id_1a4604e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 169:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue?vue&type=template&id=1a4604e1& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 170:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editorNpc.vue?vue&type=script&lang=js& */ 171);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












































var _root = _interopRequireDefault(__webpack_require__(/*! ../../../../common/js/root.js */ 19));

var _base = __webpack_require__(/*! ../../../../common/js/base64.js */ 41);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var robbyImageUpload = function robbyImageUpload() {return __webpack_require__.e(/*! import() | components/robby-image-upload/robby-image-upload */ "components/robby-image-upload/robby-image-upload").then(__webpack_require__.bind(null, /*! @/components/robby-image-upload/robby-image-upload.vue */ 442));};var _default = { components: { robbyImageUpload: robbyImageUpload }, data: function data() {return { // 头像
      imageData: ["http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png"], enableDel: true, enableAdd: true, limitNumber: 1, postdata: { npcInstanceAttrVos: [{ name: '跟随玩家', value: '', isBase: true }, { name: '可被询问', value: '', isBase: true }, { name: '所在地点', value: '', isBase: true }, { name: '能否说话', value: '', isBase: true }], isBase: false, id: '', name: '', intro: '', projectId: '', headImgUrl: "", mood: "",
        nickname: "",
        npcClassId: "",
        offline: "",
        voiceClass: "",
        voiceName: "" },

      NPClist: [],
      Maplist: [],
      allNPClist: [],
      allMaplist: [],
      steps1: {
        step_1_value: 'name' //第一级显示的属性名
      },

      inquire: [['是', '否']],
      inquire2: [['是', '否']],
      inquire3: [['能', '否']],

      addotherpropertylist: [],
      workinfo: {},
      operation: 'push',
      pickerValue1: '',
      pickerValue2: '',
      updateview: true };



  },
  methods: {
    deleteImage: function deleteImage() {
      console.log("删除图片");
      // this.imageData.push( "http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png")

    },
    addImage: function addImage(e) {
      var path = e.allImages[0];
      var that = this;
      (0, _base.pathToBase64)(path).
      then(function (base64) {
        var url = _root.default.backUrl + '/upload/npc_head_img';
        var postdata = {
          data: base64 };

        that.$request.
        post(url, postdata).
        then(function (res) {
          if (res.code === 1) {
            that.headImgUrl = res.data.absolutePath;
          }
        }).
        catch(function (error) {
          console.error('error:', error);
        });
      }).
      catch(function (error) {
        console.error(error);
      });
    },
    //  提交数据
    submitdata: function submitdata() {
      var postdata = JSON.parse(JSON.stringify(this.postdata));
      console.log(this.operation, '状态');
      if (this.operation === 'push') {
        postdata.npcInstanceAttrVos = postdata.npcInstanceAttrVos.concat(this.addotherpropertylist);
        if (postdata.npcInstanceAttrVos[0].value !== '') {
          console.log("发生了");
          var voucher1 = postdata.npcInstanceAttrVos[0].value.data[0];
          if (voucher1 === "否") {
            postdata.npcInstanceAttrVos[0].value = '否';
          } else if (voucher1 === "是") {
            postdata.npcInstanceAttrVos[0].value = '是';
          }
        }

        if (postdata.npcInstanceAttrVos[1].value !== '') {

          var voucher2 = postdata.npcInstanceAttrVos[1].value.data[0];
          if (voucher2 === "否") {
            postdata.npcInstanceAttrVos[1].value = '否';
          } else if (voucher2 === "是") {
            postdata.npcInstanceAttrVos[1].value = '是';
          }
        }
        if (postdata.npcInstanceAttrVos[2].value !== '') {
          var voucher3 = postdata.npcInstanceAttrVos[2].value.data[0];
          for (var i in this.allMaplist) {
            if (this.allMaplist[i].name === voucher3) {
              postdata.npcInstanceAttrVos[2].value = this.allMaplist[i].id;
            }
          }
        }
        if (postdata.npcInstanceAttrVos[3].value !== '') {
          console.log("发生了");
          var voucher4 = postdata.npcInstanceAttrVos[3].value.data[0];
          if (voucher4 === "否") {
            postdata.npcInstanceAttrVos[3].value = '否';
          } else if (voucher4 === "能") {
            postdata.npcInstanceAttrVos[3].value = '能';
          }
        };
        console.log(postdata, '提交的数据');






        if (!postdata.name) {
          uni.showToast({
            icon: 'none',
            title: '分类名称不能为空' });

          return;
        }
        postdata.projectId = this.workinfo.id;


        return;
        var that = this;
        that.$request.
        post('/goods/class/', postdata).
        then(function (res) {
          console.log(res);
          if (res.code === 1) {
            uni.showModal({
              title: '提示',
              content: '添加类别成功',
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
        console.log(postdata, '编辑提交的数据');
        for (var i in postdata.npcInstanceAttrVos) {
          if (postdata.npcInstanceAttrVos[i].nickname === '') {
            postdata.npcInstanceAttrVos[i].nickname = null;
          }
        }
        postdata.npcInstanceAttrVos = postdata.npcInstanceAttrVos.concat(this.addotherpropertylist);
        if (postdata.npcInstanceAttrVos[0].value !== '') {
          var _voucher = postdata.npcInstanceAttrVos[0].value.value[0];
          if (_voucher === 1) {
            postdata.npcInstanceAttrVos[0].value = '否';
          } else if (_voucher === 0) {
            postdata.npcInstanceAttrVos[0].value = '是';
          }
        }
        if (postdata.npcInstanceAttrVos[1].value !== '') {
          var _voucher2 = postdata.npcInstanceAttrVos[1].value.data[0];
          for (var i in this.allNPClist) {
            if (this.allNPClist[i].name === _voucher2) {
              postdata.npcInstanceAttrVos[1].value = this.allNPClist[i].id;
            }
          }
        }
        if (postdata.npcInstanceAttrVos[2].value !== '') {
          var _voucher3 = postdata.npcInstanceAttrVos[2].value.data[0];
          for (var i in this.allMaplist) {
            if (this.allMaplist[i].name === _voucher3) {
              postdata.npcInstanceAttrVos[2].value = this.allMaplist[i].id;
            }
          }
        }
        if (!postdata.name) {
          uni.showToast({
            icon: 'none',
            title: '分类名称不能为空' });

          return;
        }
        postdata.projectId = this.workinfo.id;
        var _that = this;
        _that.$request.
        put('/goods/class/' + '/' + postdata.id + '/', postdata).
        then(function (res) {
          console.log(res);
          if (res.code === 1) {
            uni.showModal({
              title: '提示',
              content: '编辑类别成功',
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
      var index = this.addotherpropertylist.indexOf(item);
      if (index !== -1) {
        this.addotherpropertylist.splice(index, 1);
      }
    },
    addotherproperty: function addotherproperty() {
      var obj = {
        name: '',
        value: '',
        nickname: '',
        isBase: true };

      this.addotherpropertylist.push(obj);
    },
    getmaplist: function getmaplist() {
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
        that.setPickerDatac();
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    getNPClist: function getNPClist() {
      var that = this;
      that.$request.
      get('/npc/instance_by_project_id/' + that.workinfo.id + '/').
      then(function (res) {
        var arr = [[]];
        for (var i in res.data) {
          arr[0].push(res.data[i].name);
        }
        that.allNPClist = res.data;
        that.NPClist = arr;
        that.setPickerDatac();
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    initialize1: function initialize1() {
      var that = this;
      that.$request.
      get('/npc/instance_by_project_id/' + that.workinfo.id + '/').
      then(function (res) {
        var arr = [[]];
        for (var i in res.data) {
          arr[0].push(res.data[i].name);
        }
        that.allNPClist = res.data;
        that.NPClist = arr;
        if (that.postdata.npcInstanceAttrVos[1].value !== '') {
          var voucher2 = that.postdata.npcInstanceAttrVos[1].value;
          for (var i in that.allNPClist) {
            if (that.allNPClist[i].id === parseInt(voucher2)) {
              that.postdata.npcInstanceAttrVos[1].value = {
                data: [that.allNPClist[i].name],
                value: [parseInt(i)] };

              that.$set(that.postdata.npcInstanceAttrVos, 1, that.postdata.npcInstanceAttrVos[1]);
            }
          }
        }
        that.initialize2();
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    initialize2: function initialize2() {
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
        if (that.postdata.npcInstanceAttrVos[2].value !== '') {
          var voucher3 = that.postdata.npcInstanceAttrVos[2].value;
          for (var i in that.allMaplist) {
            if (that.allMaplist[i].id === parseInt(voucher3)) {
              that.postdata.npcInstanceAttrVos[2].value = {
                data: [that.allMaplist[i].name],
                value: [parseInt(i)] };

              that.$set(that.postdata.npcInstanceAttrVos, 2, that.postdata.npcInstanceAttrVos[2]);
            }
          }
        } else {
        }
        that.updateview = true;
        console.log(that.updateview, "此时的updateview");
        that.$nextTick(function () {
          that.setPickerDatac2();
        });
      }).
      catch(function (error) {
        console.error('error:', error);
      });
    },
    setPickerDatac: function setPickerDatac() {
      this.$refs.pickerCustom1.setData(this.inquire);
      this.$refs.pickerCustom2.setData(this.inquire2);
      this.$refs.pickerCustom3.setData(this.Maplist);
      this.$refs.pickerCustom4.setData(this.inquire3);
    },
    setPickerDatac2: function setPickerDatac2() {
      if (this.updateview === true) {
        this.$refs.pickerCustom1.setData(this.inquire);
        this.$refs.pickerCustom2.setData(this.NPClist);
        this.$refs.pickerCustom3.setData(this.Maplist);
      }
    } },

  mounted: function mounted() {},
  onShow: function onShow() {
    // this.getmaplist();
    // this.getNPClist();
  },
  onLoad: function onLoad(data) {
    var workinfo = uni.getStorageSync('workinfo');
    this.workinfo = workinfo;
    if (data.categoryinfo) {
      this.updateview = false;
      console.log(this.updateview, '状态1');
      var category = JSON.parse(data.categoryinfo);
      console.log(category, '接收的数据');
      var addotherpropertylist = [];
      for (var i in category.npcInstanceAttrVos) {
        if (category.npcInstanceAttrVos[i].nickname === null) {
          category.npcInstanceAttrVos[i].nickname = '';
        }
        if (i > 2) {
          addotherpropertylist.push(category.npcInstanceAttrVos[i]);
        }
      }
      this.addotherpropertylist = addotherpropertylist;
      this.postdata = category;
      this.initialize1();
      if (this.postdata.npcInstanceAttrVos[0].value !== '') {
        var voucher1 = this.postdata.npcInstanceAttrVos[0].value;
        if (voucher1 === '是') {
          this.postdata.npcInstanceAttrVos[0].value = {
            data: ['是'],
            value: [0] };

        } else if (voucher1 === '否') {
          this.postdata.npcInstanceAttrVos[0].value = {
            data: ['否'],
            value: [1] };

        }
      }
      this.operation = 'change';
    } else {
      this.pickerValue1 = '请选择';
      this.pickerValue2 = '请选择';
      this.getmaplist();
      this.getNPClist();
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 172:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editorNpc.vue?vue&type=style&index=0&lang=css& */ 173);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editorNpc_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/pages/workpage/npc/editorNpc/editorNpc.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[166,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/workpage/npc/editorNpc/editorNpc.js.map