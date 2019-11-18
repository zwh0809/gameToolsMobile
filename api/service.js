const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class MinRequest {
	[config] = {
		baseURL: '',
		header: {
			'content-Type': 'application/json;charset=UTF-8',
		},
		method: 'GET',
		dataType: 'json',
		responseType: 'text'
	}
	interceptors = {
		request: (func) => {
			if (func) {
				MinRequest[requestBefore] = func
			} else {
				MinRequest[requestBefore] = (request) => request
			}

		},
		response: (func) => {
			if (func) {
				MinRequest[requestAfter] = func
			} else {
				MinRequest[requestAfter] = (response) => response
			}
		}
	}

	static[requestBefore](config) {
		return config
	}

	static[requestAfter](response) {
		return response
	}

	static[isCompleteURL](url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}

	setConfig(func) {
		this[config] = func(this[config])
	}

	request(options = {}) {
		options.baseURL = options.baseURL || this[config].baseURL
		options.dataType = options.dataType || this[config].dataType
		options.url = MinRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
		options.data = options.data
		options.header = options.header || this[config].header
		options.method = options.method || this[config].method

		options = { ...options,
			...MinRequest[requestBefore](options)
		}

		return new Promise((resolve, reject) => {
			options.success = function(res) {
				resolve(MinRequest[requestAfter](res))
				
			}
			options.fail = function(err) {
				reject(MinRequest[requestAfter](err))
				console.log(err,'错误信息')
			}
			uni.request(options)
		})
	}

	get(url, data, header,options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		options.header=header
		return this.request(options)
	}

	post(url, data, header,options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		options.header=header
		return this.request(options)
	}
	delete(url, data, header,options = {}) {
		options.url = url
		options.data = data
		options.method = 'delete'
		options.header=header
		return this.request(options)
	}
	put(url, data, header,options = {}) {
		options.url = url
		options.data = data
		options.method = 'put'
		options.header=header
		return this.request(options)
	}
	
}

MinRequest.install = function(Vue) {
	Vue.mixin({
		beforeCreate: function() {
			if (this.$options.minRequest) {
			
				Vue._minRequest = this.$options.minRequest
			}
		}
	})
	Object.defineProperty(Vue.prototype, 'http', {
		get: function() {
			return Vue._minRequest.apis
		}
	})
}

export default MinRequest
