import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		userinfo:{
			
		}
	},
	mutations:{
		// 存入用户信息到Veux中
		deposit:function(state,userinfo){
		            state.userinfo=userinfo
		        }
		// deposit(state,{data}) {
		//       state.userinfo=data
		//     }
		
	},
	actions:{},
});
export default store