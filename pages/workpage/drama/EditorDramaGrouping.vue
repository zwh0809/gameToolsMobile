<template>
	<view class="page">
		<view>
			<view class="">
				<QSInput variableName="input" required layout="column" title="分组编号" v-model="postdata.num"></QSInput>
				<QSInput variableName="input" required layout="column" title="分组名称" v-model="postdata.name"></QSInput>
				<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="分组简介" v-model="postdata.intro"></QSTextarea>
				<button class="m-top" @click="pushdata">{{ type === 'push' ? '确认添加' : '确认编辑' }}</button>
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
				num: '',
				intro: '',
				projectId: ''
			},
			workinfo: {},
			type: 'push'
		};
	},
	methods: {
		pushdata: function() {
			let that = this;
			let postdata = JSON.parse(JSON.stringify(that.postdata));
			postdata.projectId = that.workinfo.id;
			let tmpNum = postdata.num.replace(/-/g, '');
			let check = /^\d+$/.test(tmpNum);
			if (check === false) {
				uni.showToast({
					title: '分组编号不能有数字以外的字符',
					icon: 'none'
				});
				return;
			}
			if (postdata.name === '') {
				uni.showToast({
					title: '分组名称不能为空',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			if (that.type === 'push') {
				that.$request
					.post('/plot/category/', postdata)
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
					.put('/plot/category/' + postdata.projectId + '/', postdata)
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
		if (data.DramaGrouping) {
			this.type = 'change';
			let postdata = JSON.parse(data.DramaGrouping);
			this.postdata = postdata;
			// 特殊处理
			if (this.postdata.intro === null) {
				this.postdata.intro = '';
			}
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
