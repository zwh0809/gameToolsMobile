(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/QS-tabs/QS-tabs"],{

/***/ 477:
/*!*************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QS_tabs_vue_vue_type_template_id_00048904_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QS-tabs.vue?vue&type=template&id=00048904&scoped=true& */ 478);
/* harmony import */ var _QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QS-tabs.vue?vue&type=script&lang=js& */ 480);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QS-tabs.vue?vue&type=style&index=0&id=00048904&scoped=true&lang=css& */ 482);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QS_tabs_vue_vue_type_template_id_00048904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QS_tabs_vue_vue_type_template_id_00048904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00048904",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue?vue&type=template&id=00048904&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_template_id_00048904_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./QS-tabs.vue?vue&type=template&id=00048904&scoped=true& */ 479);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_template_id_00048904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_template_id_00048904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 479:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue?vue&type=template&id=00048904&scoped=true& ***!
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
  var m0 = Number(_vm.zIndex)
  var m1 = Number(_vm.zIndex)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 480:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./QS-tabs.vue?vue&type=script&lang=js& */ 481);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 481:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _uni$getSystemInfoSyn =
uni.getSystemInfoSync(),screenWidth = _uni$getSystemInfoSyn.screenWidth;var _default2 =
{
  props: {
    tabs: { //需循环的标签列表
      type: Array,
      default: function _default() {
        return [];
      } },

    current: { //当前所在滑块的 index
      type: Number,
      default: 0 },

    height: { //QS-tabs的高度和行高
      type: [String, Number],
      default: 80 },

    width: { //单个tab的宽度
      type: [String, Number],
      default: 250 },

    fontSize: { //字体大小
      type: [String, Number],
      default: 30 },

    duration: { //过渡动画时长, 单位 s
      type: [String, Number],
      default: .5 },

    activeColor: { //选中项的主题颜色
      type: String,
      default: '#33cc33' },

    defaultColor: { //未选中项的主题颜色
      type: String,
      default: '#888' },

    animationLineWidth: { //动画线条的宽度
      type: [String, Number],
      default: 20 },

    line2Style: { //line2线条的样式
      type: String,
      default: 'height: 8rpx;border-radius: 4rpx;' },

    animationMode: { //动画类型
      type: String,
      default: 'line1' },

    autoCenter: { //是否自动滚动至中心目标
      type: Boolean,
      default: true },

    autoCenterMode: { //滚动至中心目标类型
      type: String,
      default: 'component' },

    activeStyle: { //line1模式选中项的样式
      type: String,
      default: 'bottom:0;left:50%;transform: translate(-50%,-100%);height: 8rpx;border-radius:4rpx;' },

    defaultStyle: { //line1模式未选中项的样式
      type: String,
      default: 'bottom:0;left:50%;transform: translate(-50%,-100%);height: 8rpx;border-radius:4rpx;' },

    backgroundColor: { //统一背景颜色
      type: String,
      default: 'rgba(255,255,255,0)' },

    hasItemBackground: { //是否开启背景追光
      type: Boolean,
      default: false },

    itemBackgroundColor: { //统一追光背景颜色
      type: String,
      default: 'rgba(255,255,255,0)' },

    itemBackgroundStyle: { //追光样式
      type: String,
      default: '' },

    zIndex: { //css的z-index属性值
      type: [String, Number],
      default: 99 } },


  computed: {
    getCurrent: function getCurrent() {
      if (this.current > this.getTabs.length - 1) {
        return this.getTabs.length - 1;
      }
      return this.current;
    },
    getTabs: function getTabs() {
      return this.tabs;
    },
    getHeight: function getHeight() {
      return this.height;
    },
    getWidth: function getWidth() {
      return this.width;
    },
    getFontSize: function getFontSize() {
      return this.fontSize;
    },
    getDuration: function getDuration() {
      return this.duration;
    },
    getBgColor: function getBgColor() {
      var defaultColor = this.backgroundColor || 'rgba(255,255,255,0)';
      if (this.getTabs[this.getCurrent] instanceof Object) {
        return this.getTabs[this.getCurrent].backgroundColor || defaultColor;
      } else {
        return defaultColor;
      }
    },
    getItemBackgroundColor: function getItemBackgroundColor() {
      var defaultColor = this.itemBackgroundColor || 'rgba(255,255,255,0)';
      if (this.getTabs[this.getCurrent] instanceof Object) {
        return this.getTabs[this.getCurrent].itemBackgroundColor || defaultColor;
      } else {
        return defaultColor;
      }
    },
    getDurationStyle: function getDurationStyle() {
      return "transition-duration: ".concat(this.getDuration, "s;");
    },
    getActiveColor: function getActiveColor() {
      var activeColor;
      if (this.getTabs[this.getCurrent] instanceof Object) {
        if (this.getTabs[this.getCurrent].activeColor) {
          activeColor = this.getTabs[this.getCurrent].activeColor;
        } else {
          activeColor = this.activeColor;
        }
      } else {
        activeColor = this.activeColor;
      }
      return activeColor;
    },
    getDefaultColor: function getDefaultColor() {
      var defaultColor;
      if (this.getTabs[this.getCurrent] instanceof Object) {
        if (this.getTabs[this.getCurrent].defaultColor) {
          defaultColor = this.getTabs[this.getCurrent].defaultColor;
        } else {
          defaultColor = this.defaultColor;
        }
      } else {
        defaultColor = this.defaultColor;
      }
      return defaultColor;
    },
    getActiveStyle: function getActiveStyle() {
      return "width:".concat(this.animationLineWidth, "%;background-color:").concat(this.getActiveColor, ";").concat(this.activeStyle);
    },
    getDefaultStyle: function getDefaultStyle() {
      return "width:0;background-color:".concat(this.getActiveColor, ";").concat(this.defaultStyle);
    },
    getLinezIndex: function getLinezIndex() {
      return "z-index: ".concat(Number(this.zIndex) + 2, ";");
    },
    getBoxStyle2: function getBoxStyle2() {
      if (this.animationMode === 'line2') {
        var lineWidth = Number(this.line2Width);
        var lw = this.width * (lineWidth / 100);
        var x = this.width * (this.getCurrent + 1) - this.width / 2 - lw / 2;
        return "transform:translate(".concat(x, "rpx, -100%);width:").concat(lw, "rpx;background-color: ").concat(this.getActiveColor, ";").concat(this.line2Style);
      }
    },
    getItemBackgroundBoxStyle: function getItemBackgroundBoxStyle() {
      return "height: ".concat(this.getHeight, "rpx;\n\t\t\t\t\twidth: ").concat(
      this.getWidth, "rpx;\n\t\t\t\t\tz-index: ").concat(
      Number(this.zIndex) + 1, ";\n\t\t\t\t\ttransition-duration: ").concat(
      this.getDuration, "s;\n\t\t\t\t\ttransform: translateX(").concat(
      this.width * this.getCurrent, "rpx);");
    },
    getItemBackgroundStyle: function getItemBackgroundStyle() {
      return "transition-duration: ".concat(this.getDuration, "s;\n\t\t\t\t\tbackground-color: ").concat(
      this.getItemBackgroundColor, ";\n\t\t\t\t\tbox-shadow: 0 0 5rpx 5rpx ").concat(
      this.getItemBackgroundColor, ";\n\t\t\t\t\t").concat(
      this.itemBackgroundStyle, ";");
    } },

  watch: {
    current: function current(n, o) {
      this.change(n);
    } },

  data: function data() {
    return {
      left: 0,
      line2Width: this.animationLineWidth,
      setTimeoutFc: null,
      componentsWidth: 0 };

  },

  onReady: function onReady() {var _this = this;
    this.getQuery(function () {
      _this.countScrollX();
    });
  },








  methods: {
    emit: function emit(index) {
      this.$emit('change', index);
    },
    change: function change() {var _this2 = this;
      this.countScrollX();
      if (this.animationMode === 'line2') {
        this.line2Width = 2;
        if (this.setTimeoutFc) clearTimeout(this.setTimeoutFc);
        this.setTimeoutFc = setTimeout(function () {
          _this2.line2Width = _this2.animationLineWidth;
        }, this.getDuration * 1000 * 3 / 5);
      }
    },
    getQuery: function getQuery(cb) {var _this3 = this;
      try {
        var view = uni.createSelectorQuery().in(this).select('.QS-segmented-control-scroll');
        view.fields({
          size: true },
        function (data) {
          if (data) {
            _this3.componentsWidth = data.width;
            if (cb && typeof cb === 'function') cb(data);
          } else {
            _this3.retryGetQuery(cb);
          }
        }).exec();
      } catch (e) {
        //TODO handle the exception
        this.componentsWidth = screenWidth;
      }
    },
    retryGetQuery: function retryGetQuery() {var _this4 = this;
      try {
        var view = uni.createSelectorQuery().select('.QS-segmented-control-scroll');
        view.fields({
          size: true },
        function (data) {
          if (data) {
            _this4.componentsWidth = data.width;
          } else {
            _this4.componentsWidth = screenWidth;
          }
          if (cb && typeof cb === 'function') cb(data);
        }).exec();
      } catch (e) {
        //TODO handle the exception
        this.componentsWidth = screenWidth;
      }
    },
    countScrollX: function countScrollX() {
      if (this.autoCenter) {
        var width = Number(this.width);
        var itemWidth = width / 750 * screenWidth;
        var left = itemWidth * (this.getCurrent + 1) - itemWidth / 2;
        var fatherWidth;
        if (this.autoCenterMode === 'window') {
          fatherWidth = screenWidth;
        } else {
          fatherWidth = this.componentsWidth;
        }
        this.left = left - fatherWidth / 2;
      }
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 482:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue?vue&type=style&index=0&id=00048904&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./QS-tabs.vue?vue&type=style&index=0&id=00048904&scoped=true&lang=css& */ 483);
/* harmony import */ var _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_G_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_QS_tabs_vue_vue_type_style_index_0_id_00048904_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 483:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/gameToolsMobile/components/QS-tabs/QS-tabs.vue?vue&type=style&index=0&id=00048904&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/QS-tabs/QS-tabs.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/QS-tabs/QS-tabs-create-component',
    {
        'components/QS-tabs/QS-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(477))
        })
    },
    [['components/QS-tabs/QS-tabs-create-component']]
]);                
