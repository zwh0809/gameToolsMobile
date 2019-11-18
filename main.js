import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import MinRequest from './api/service.js'
import minRequest from './api/api.js'
import root from './common/js/root.js';
// 表格插件
import tTable from './components/t-table/t-table.vue';
import tTh from './components/t-table/t-th.vue';
import tTr from './components/t-table/t-tr.vue';
import tTd from './components/t-table/t-td.vue';
Vue.component('tTable',tTable)
Vue.component('tTh',tTh)
Vue.component('tTr',tTr)
Vue.component('tTd',tTd)
//表单插件
import catLabel from "@/components/cat-label/cat-label.vue"
//icon 插件
import faIcon from '@/components/kilvn-fa-icon/fa-icon.vue';
Vue.component('fa-icon',faIcon)
/* 全局注册QS-inputs-split组件 */
import QSInput from './components/QS-inputs-split/elements/QS-input/index.vue';
import QSRadio from './components/QS-inputs-split/elements/QS-radio/index.vue';
import QSCheckbox from './components/QS-inputs-split/elements/QS-checkbox/index.vue';
import QSTextarea from './components/QS-inputs-split/elements/QS-textarea/index.vue';
import QSPickerDate from './components/QS-inputs-split/elements/QS-picker-date/index.vue';
import QSPickerCity from './components/QS-inputs-split/elements/QS-picker-city/index.vue';
import QSPickerCustom from './components/QS-inputs-split/elements/QS-picker-custom/index.vue';
import QSPickerCustom2 from './components/QS-inputs-split/elements/QS-picker-custom2/index.vue';
import QSPics from './components/QS-inputs-split/elements/QS-pics/index.vue';
import QSInfinitePics from './components/QS-inputs-split/elements/QS-infinitePics/index.vue';
import QSwitch from './components/QS-inputs-split/elements/QS-switch/index.vue';
Vue.component('QSInput',QSInput);
Vue.component('QSRadio',QSRadio);
Vue.component('QSCheckbox',QSCheckbox);
Vue.component('QSTextarea',QSTextarea);
Vue.component('QSPickerDate',QSPickerDate);
Vue.component('QSPickerCity',QSPickerCity);
Vue.component('QSPickerCustom',QSPickerCustom);
Vue.component('QSPickerCustom2',QSPickerCustom2);
Vue.component('QSPics',QSPics);
Vue.component('QSInfinitePics',QSInfinitePics);
Vue.component('QSwitch',QSwitch);
/* 下拉框组件 */ 
import xflSelect from './components/xfl-select/xfl-select.vue';
Vue.component('xfl-select',xflSelect);


/*  结束 */
Vue.prototype.$request=minRequest.minRequest
Vue.prototype.MinRequest=MinRequest
 
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MinRequest);
const app = new Vue({
	...App,
	minRequest,
	store
})
app.$mount()
