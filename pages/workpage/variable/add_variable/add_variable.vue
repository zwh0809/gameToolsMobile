<template>
	<view class="page">
		<view>
			<view class="">
				<QSInput variableName="input" required layout="column" :disabled="postdata.isBase" title="变量名称" v-model="postdata.name"></QSInput>
				<QSInput
					variableName="input"
					layout="column"
					:disabled="postdata.isBase"
					title="变量别名"
					placeholder="每个变量别名用逗号分隔"
					v-model="postdata.nickname"
				></QSInput>
				<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="变量的值" v-model="postdata.value"></QSTextarea>
				<QSTextarea variableName="textarea" textareaWidth="100" :disabled="postdata.isBase" layout="column" title="变量简介" v-model="postdata.intro"></QSTextarea>
				<button class="m-top widthnine" @click="pushdata">{{ type === 'push' ? '确认添加' : '确认编辑' }}</button>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			postdata: {
				name: '',
				nickname: '',
				value: '',
				intro: '',
				projectId: '',
				isBase: false
			},
			workinfo: {},
			type: 'push',
			forbid: false
		};
	},
	methods: {
		pushdata: function() {
			let that = this;
			let postdata = JSON.parse(JSON.stringify(that.postdata));
			postdata.nickname = postdata.nickname.replace(/,/g, ',');
			postdata.nickname = postdata.nickname.replace(/，/g, ',');
			postdata.nickname = postdata.nickname.replace(/^(\s|,)+|(\s|,)+$/g, '');
			postdata.projectId = that.workinfo.id;
			if (postdata.name === '') {
				uni.showToast({
					title: '变量名称不能为空',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			if (that.type === 'push') {
				that.$request
					.post('/global_attr/', postdata)
					.then(res => {
						console.log(res, '数据');
						if (res.code == 50003) {
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							});
							return;
						} else if (res.code == 1) {
							uni.showModal({
								title: '提示',
								content: '增加成功',
								cancelText: '继续添加',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
									}
								}
							});
						}
					})
					.catch(error => {
						console.error('error:', error);
					});
			} else if (that.type === 'change') {
				that.$request
					.put('/global_attr/' + postdata.id + '/', postdata)
					.then(res => {
						console.log(res, '数据');
						if (res.code == 50003) {
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							});
							return;
						} else if (res.code == 1) {
							uni.showModal({
								title: '提示',
								content: '编辑成功',
								cancelText: '继续编辑',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
									}
								}
							});
						}
					})
					.catch(error => {
						console.error('error:', error);
					});
			}
		}
	},
	mounted: function() {
		// this.getTableData();
	},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		if (data.variable_info) {
			this.type = 'change';
			let postdata = JSON.parse(data.variable_info);
			this.postdata = postdata;
			// 特殊处理
			if (this.postdata.nickname === null) {
				this.postdata.nickname = '';
			}
			if (this.postdata.value === null) {
				this.postdata.value = '';
			}
			if (this.postdata.intro === null) {
				this.postdata.intro = '';
			}

			// if (this.postdata.isBase === true) {
			// 	this.postdata.intro = '';
			// }
		} else {
			this.type = 'push';
		}
	}
};
</script>

<style>
.uni-form-item .title {
	padding: 20rpx 0;
}
</style>
