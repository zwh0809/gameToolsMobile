import MinRequest from './service.js'
const minRequest = new MinRequest()
var hostname = "http://didi-gz4.jiaoyou365.com";
var hostname2 = "http://didi-gz4.jiaoyou365.com";
var host = "http://didi-gz4.jiaoyou365.com";
const root = {
	localUrl: hostname,
	host: host,
	backUrl: hostname2 + ":18082", // gz5
	// loginUrl: hostname + ':6636',  // zzy接口
	loginUrl: hostname + ":18083", // didi-gz3 --ZSM端口 新接口
	talkUrl: hostname2,
	listenUrl: hostname2 + ":9663", //gz5
};

function base64_encode(str) { // 编码，配合encodeURIComponent使用
	var c1, c2, c3;
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var i = 0,
		len = str.length,
		strin = '';
	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			strin += base64EncodeChars.charAt(c1 >> 2);
			strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
			strin += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			strin += base64EncodeChars.charAt(c1 >> 2);
			strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
			strin += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		strin += base64EncodeChars.charAt(c1 >> 2);
		strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		strin += base64EncodeChars.charAt(c3 & 0x3F)
	}
	return strin
}
// 请求拦截器
minRequest.interceptors.request((request) => {
	let userinfo = uni.getStorageSync("userinfo");
	if (userinfo.platform_token) {
		let str = userinfo.platform_token + ":" + "s00pers3cret";
		let Basic = base64_encode(str)
		request.header["Authorization"] = "Basic" + " " + Basic;
		if(request.url.indexOf( "voiceTestChat") !==-1){
			// 请求地址是对话接口，做特殊处理
			let str = ":s00pers3cret";
			let Basic = base64_encode(str);
			request.header["Authorization"] = "Basic" + " " + Basic;
		}
	}
	
	return request
})
// 响应拦截器
minRequest.interceptors.response((response) => {
	if(response.errMsg=== "request:fail"){
		uni.showToast({
			title:"服务器出小差了",
			icon:"none"
		})
		
	}
	if (response.data.code === 1) {} else if (response.data.code === 20007) {
		uni.showModal({
			title: '提示',
			content: '用户未登录或登录过期',
			showCancel: false,
			confirmText: '重新登录',
			success: function(res) {
				if (res.confirm) {
					uni.reLaunch({
						url: '/pages/login/login'
					});
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	} else if (response.data.status === 500) {
		uni.showModal({
			title: '提示',
			content: '服务器发生错误',
			showCancel: false,
			confirmText: '确定',
			success: function(res) {
				if (res.confirm) {} else if (res.cancel) {}
			}
		});


	} else if (response.data.msg) {
	 uni.showToast({
	 	  icon:"none",
		  title:response.data.msg
	 })

	} else {

	}
	return response.data;
})
// 设置默认配置
minRequest.setConfig((config) => {
	config.baseURL = root.backUrl
	return config
})
// export minRequest
export default {
	minRequest
}
