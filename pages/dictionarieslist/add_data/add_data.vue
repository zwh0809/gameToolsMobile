<template>
	<view class="page">
		<view>
			<view class="" v-if="type === 'push'">
				<QSInput variableName="input" required layout="column" title="词组名称" v-model="postdata.phraseName"></QSInput>
				<QSInput variableName="input"  layout="column" title="词组标签" placeholder="每个标签用逗号分隔" v-model="postdata.labels"></QSInput>
				<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="词组备注" v-model="postdata.phraseRemarks"></QSTextarea>
				<!-- <QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="词组内容"></QSTextarea> -->
				<button class="m-top" @click="pushdata">确认添加</button>
			</view>
			<view class="" v-if="type === 'change'">
				<QSInput variableName="input" required layout="column" title="词组名称" v-model="updatePhraseName"></QSInput>
				<QSInput variableName="input"  layout="column" title="词组标签" placeholder="每个标签用逗号分隔" v-model="oenEntry.labels"></QSInput>
				<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="词组备注" v-model="oenEntry.phraseRemarks"></QSTextarea>
				<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="词组内容" v-model="oenEntry.content"></QSTextarea>
				<button class="m-top" @click="changedata">确认修改</button>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			postdata: {
				phraseName: '',
				labels: '',
				phraseRemarks: ''
			},
			type: 'push',
			dictionariesinfo: {},
			oenEntry: {},
			updatePhraseName:""
		};
	},
	methods: {
		pushdata: function() {
			let that = this;
			let postdata = that.postdata;
			postdata.labels = postdata.labels.replace(/,/g, ',');
			postdata.labels = postdata.labels.replace(/，/g, ',');
			postdata.labels = postdata.labels.replace(/^(\s|,)+|(\s|,)+$/g, '');
			if (postdata.phraseName === '') {
				uni.showToast({
					title: '词组名称不能为空',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			that.$request
				.post('/authorPhrase', postdata)
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
									uni.reLaunch({
										url: '/pages/dictionarieslist/dictionarieslist'
									});
								} else if (res.cancel) {
									that.formReset();
								}
							}
						});
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 修改词组
		changedata(){
			let that = this;
			let postdata = that.oenEntry;
			postdata.labels = postdata.labels.replace(/,/g, ',');
			postdata.labels = postdata.labels.replace(/，/g, ',');
			postdata.labels = postdata.labels.replace(/^(\s|,)+|(\s|,)+$/g, '');
			postdata.updatePhraseName = that.updatePhraseName;
			if (postdata.phraseName === '') {
				uni.showToast({
					title: '词组名称不能为空',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			that.$request
				.put('/authorPhrase', postdata)
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
							content: '修改成功',
							cancelText: '继续修改',
							confirmText: '返回列表',
							success: function(res) {
								if (res.confirm) {
									uni.reLaunch({
										url: '/pages/dictionarieslist/dictionarieslist'
									});
								} else if (res.cancel) {
									that.formReset();
								}
							}
						});
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取单条数据
		getoneinfo(phraseName) {
			console.log(phraseName,"名字")
			let that=this;
			that.$request
				.get('/authorPhrase/' + phraseName)
				.then(res => {
					if (res.code === 1) {
						that.oenEntry = JSON.parse(JSON.stringify(res.data));
						that.updatePhraseName = that.oenEntry.phraseName;
						if (that.oenEntry.labels) {
							that.oenEntry.labels = that.oenEntry.labels.join(',');
						}
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		// 
		formReset: function(e) {
			console.log('清空数据');
		}
	},
	mounted: function() {
		// this.getTableData();
	},
	onLoad(data) {
		if (data.dictionariesinfo) {
			this.type = 'change';
			let postdata = JSON.parse(data.dictionariesinfo);
			this.oenEntry = postdata;
			// 特殊处理
			if (this.oenEntry.content === null) {
				this.oenEntry.content = '';
			}
			this.getoneinfo(this.oenEntry.phraseName);
		} else {
			this.type = 'push';
		}
	},
	onShow() {
		
	}
};
</script>

<style>
.uni-form-item .title {
	padding: 20rpx 0;
}
</style>
