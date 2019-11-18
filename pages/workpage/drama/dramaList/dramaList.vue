<template>
	<view>
		<button class="margin-top buttonwidth" @click="operation(empty, push)">新建剧情</button>
		<view class="margin-top unfold" @click="is_unfold">{{ unfold ? '展开' : '收起' }}</view>
		<view class="margin-top">
			<t-table>
				<t-tr>
					<t-th class="one iconbox">剧情编号</t-th>
					<t-th>对话内容</t-th>
					<t-th class="one">操作</t-th>
				</t-tr>
				<t-tr v-for="(item, index) in datalist" :key="index">
					<view class="biaoge">
						<t-td class="one iconbox">{{ item.plotNum }}</t-td>
						<t-td class="tow" :class="{ isActive: !unfold }">
							<view class="onedrama" v-for="(item2, index2) in item.plotTextVos" @click="godramaInfo(item)">
								{{ item2.npcName }}【{{ item2.mood }}】:{{ item2.content }}
							</view>
						</t-td>
						<t-td class="one iconbox">
							<fa-icon v-show="item.plotId !== startPlotId" type="play-circle operation_icon" size="20" color="#666" @click="settingstart(item)"></fa-icon>
							<fa-icon v-show="item.plotId === startPlotId" type="play-circle operation_icon" size="20" color="#32CD32"></fa-icon>
							<fa-icon type="wrench operation_icon" size="20" color="#666" @click="operation(item, change)"></fa-icon>
							<fa-icon type="trash-o operation_icon" size="20" color="#666" @click="deletedata(item)"></fa-icon>
						</t-td>
					</view>
				</t-tr>
			</t-table>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			datalist: [], // 剧情列表
			empty: {},
			push: 'push',
			change: 'change',
			workinfo: {},
			categoryId: '',
			startPlotId: '',
			unfold: true
		};
	},
	methods: {
		godramaInfo(data) {
			let dramaInfo = JSON.stringify(data);
			console.log('点击事件');
			uni.navigateTo({
				url: '../dramaInfo/dramaInfo?dramaInfo=' + encodeURIComponent(dramaInfo)
			});
		},
		// 设置开头的剧情
		settingstart(data) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要设置此剧情为开始吗',
				success: function(res) {
					if (res.confirm) {
						that.$request
							.post('/project/' + that.workinfo.id + '/start_num?startNum=' + data.plotNum + '&startPlotId=' + data.plotId)
							.then(res => {
								that.getstartnum();
							})
							.catch(error => {
								console.error('error:', error);
							});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		// 展开收缩
		is_unfold() {
			this.unfold = !this.unfold;
		},
		// 获取剧情
		getdatalist() {
			let that = this;
			uni.showLoading({
				title: '获取数据中'
			});
			that.$request
				.get('/plot/text/?categoryId=' + this.categoryId)
				.then(res => {
					that.datalist = res.data;
					uni.hideLoading();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取开始剧情
		getstartnum() {
			let that = this;
			that.$request
				.get('/project/' + this.workinfo.id + '/start_num')
				.then(res => {
					console.log(res, '请求的数据');
					that.startPlotId = res.data.startPlotId;

					console.log(that.startPlotId, '开头的剧情');
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		deletedata(data) {
			console.log(data);
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定删除此条数据吗',
				success: function(res) {
					if (res.confirm) {
						that.$request
							.delete('/plot/' + data.plotId + '/')
							.then(res => {
								that.getdatalist();
							})
							.catch(error => {
								console.error('error:', error);
							});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		operation(data, type) {
			console.log(data, 'data');

			let transmit = {
				categoryId: this.categoryId
			};
			let transmitdata = JSON.stringify(transmit);
			if (type === 'push') {
				uni.navigateTo({
					url: './editordramaList?transmitdata=' + encodeURIComponent(transmitdata)
				});
			} else if (type === 'change') {
				let DramaGrouping = JSON.stringify(data);
				uni.navigateTo({
					url: './editordramaList?DramaGrouping=' + encodeURIComponent(DramaGrouping)
				});
			}
		}
	},
	mounted: function() {},
	onShow() {
		this.getdatalist();
		this.getstartnum();
	},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		console.log(data.categoryId, '剧情ID');
		this.categoryId = data.categoryId;
	}
};
</script>

<style>
.margin-top {
	margin-top: 20upx;
}
.one {
	flex: none !important;
	width: 20% !important;
}
.tow {
	flex-direction: column;
}
.unfold {
	font-size: 28upx;
	color: #0081ff;
	margin-left: 50upx;
}
.isActive {
	height: auto;
	word-break: break-all;
	word-wrap: break-word !important;
	white-space: pre-wrap !important;
	flex-direction: column;
}
.iconbox {
	display: flex;
	flex-direction: row;
	align-items: center; /* 垂直居中 */
}
.biaoge {
	width: 100%;
	display: flex;
	flex-direction: row;
}
</style>
