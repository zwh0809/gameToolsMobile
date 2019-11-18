<template>
	<view>
		<view class="workname">{{ workinfo.name }}</view>
		<uni-grid :column="3" class="gridbox">
			<uni-grid-item>
				<view class="box" @click="instruction(1)">
					<fa-icon type="map" size="32" color="#666"></fa-icon>
					<text class="text">地图</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(2)">
					<fa-icon type="archive" size="32" color="#666"></fa-icon>
					<text class="text">物品</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(3)">
					<fa-icon type="users" size="32" color="#666"></fa-icon>
					<text class="text">角色</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(4)">
					<fa-icon type="comments" size="32" color="#666"></fa-icon>
					<text class="text">剧情</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(5)">
					<fa-icon type="sun-o" size="32" color="#666"></fa-icon>
					<text class="text">变量</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(6)">
					<fa-icon type="ellipsis-h" size="32" color="#666"></fa-icon>
					<text class="text">话术</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(7)">
					<fa-icon type="deaf" size="32" color="#666"></fa-icon>
					<text class="text">监听</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(8)">
					<fa-icon type="paint-brush" size="32" color="#666"></fa-icon>
					<text class="text">生成</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(9)">
					<fa-icon type="share-alt" size="32" color="#666"></fa-icon>
					<text class="text">语音合成</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(10)">
					<fa-icon type="line-chart" size="32" color="#666"></fa-icon>
					<text class="text">统计</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(11)">
					<fa-icon type="money" size="32" color="#666"></fa-icon>
					<text class="text">付费</text>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="box" @click="instruction(12)">
					<fa-icon type="volume-up" size="32" color="#666"></fa-icon>
					<text class="text">对话</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
import uniGrid from '@/components/uni-ui/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-ui/uni-grid-item/uni-grid-item.vue';
import faIcon from '../../components/kilvn-fa-icon/fa-icon.vue';

export default {
	components: { uniGrid, uniGridItem, faIcon },
	data() {
		return {
			workinfo: {},
			newClientId:"",
		};
	},

	methods: {
		instruction(data) {
			switch (data) {
				case 1:
					{
						console.log(data, '地图跳转');
						uni.navigateTo({
							url: '../workpage/map/map'
						});
					}
					break;
				case 2:
					{
						console.log(data, '跳转到物品');
						uni.navigateTo({
							url: '../workpage/goods/goods'
						});
					}
					break;

				case 3:
					{
						uni.navigateTo({
							url: '../workpage/npc/npc'
						});
					}
					break;

				case 4:
					{
						uni.navigateTo({
							url: '../workpage/drama/dramaGrouping'
						});
					}
					break;

				case 5:
					{
						uni.navigateTo({
							url: '../workpage/variable/variable'
						});
					}
					break;
				case 6:
					{
						uni.navigateTo({
							url: '../workpage/verbal/verbal'
						});
					}
					break;
				case 8:
					{
						let that = this;
						uni.showModal({
							title: '提示',
							content: '确定生成bot吗?',
							success: function(res) {
								if (res.confirm) {
									that.$request
										.get('/generate/bot/' + that.workinfo.id)
										.then(res => {
											if (res.code === 1) {
												uni.showToast({
													title: '作品已生成',
													icon: 'success'
												});
											}
										})
										.catch(Error => {
											console.log(Error, '错误信息');
										});
								} else if (res.cancel) {
								}
							}
						});
					}
					break;
					case 12:
						{
							uni.navigateTo({
								url: '../workpage/chat/chat?bot='+this.workinfo.id+","+this.workinfo.name+","+this.workinfo.botAccount+"&userId="+this.newClientId
							});
						}
						break;
				default:
			}
		}
	},
	onLoad() {
		this.workinfo = uni.getStorageSync('workinfo');
	}
};
</script>

<style>
.workname {
	margin: 20upx;
	text-align: center;
}
.gridbox {
	margin-top: 40upx;
}
.text {
	margin-top: 10upx;
}
.box {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
}
</style>
