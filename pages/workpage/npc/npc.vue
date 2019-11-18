<template>
	<view>
		<view class="box"><QSTabs :current="current_1" :tabs="tabs_1" width="375" Number="100" backgroundColor="#fff" @change="change($event, '1')" /></view>
		<view class="" v-show="current_1 === 0">
			<button  class="margin-top widthnine" @click="goto_editor_category(empty, pushdata)">添加角色类别</button>
			<view class="margin-top">
				<t-table>
					<t-tr>
						<t-th>角色类别</t-th>
						<t-th>操作</t-th>
					</t-tr>
					<t-tr v-for="(item, index) in datalist" :key="index">
						<t-td>{{ item.name }}</t-td>
						<t-td class="operation_box">
							<fa-icon type="wrench operation_icon" size="20" color="#666" @click="goto_editor_category(item, changedata)"></fa-icon>
							<fa-icon type="trash-o operation_icon" size="20" color="#666" @click="deletedata_category(item)"></fa-icon>
							<!-- <view class="operation" @click="deletedata(item.phraseName)">删除</view> -->
						</t-td>
					</t-tr>
				</t-table>
			</view>
		</view>
		
		<view class="" v-show="current_1 !== 0">
			<button  class="margin-top widthnine" @click="goto_editor_goods(empty, pushdata)">添加角色</button>
			<view class="margin-top">
				<t-table>
					<t-tr>
						<t-th>角色名称</t-th>
						<t-th>操作</t-th>
					</t-tr>
					<t-tr v-for="(item, index) in goodslist" :key="index">
						<t-td>{{ item.name }}</t-td>
						<t-td class="operation_box">
							<fa-icon type="wrench operation_icon" size="20" color="#666" @click="goto_editor_goods(item, changedata)"></fa-icon>
							<fa-icon type="trash-o operation_icon" size="20" color="#666" @click="deletedata_goods(item)"></fa-icon>
							<!-- <view class="operation" @click="deletedata(item.phraseName)">删除</view> -->
						</t-td>
					</t-tr>
				</t-table>
			</view>
		</view>
	</view>
</template>

<script>
import QSTabs from '@/components/QS-tabs/QS-tabs.vue';

export default {
	components: {
		QSTabs
	},
	data() {
		return {
			tabs_1: ['角色类别', '所有角色'],
			current_1: 0,
			pushdata: 'pushdata',
			changedata: 'changedata',
			empty: {},
			datalist: [], // 物品列表
			workinfo: {},
			goodslist:[],
		};
	},
	methods: {
		// 控制选项卡
		change(index, i) {
			this['current_' + i] = index;
		},
		getgoodslist() {
			let that = this;
			that.$request
				.get('/npc/instance_by_project_id/'+that.workinfo.id+'/')
				.then(res => {
					console.log(res, '请求的数据');
					that.goodslist = res.data;
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		getdatalist() {
			let that = this;
			that.$request
				.get('/npc/class/?projectId=' + that.workinfo.id)
				.then(res => {
					console.log(res, '请求的数据');
					that.datalist = res.data;
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		deletedata_category(data) {
			let that = this;
			
			if(data.name === "旁白" ){
				uni.showToast({
					icon: 'none',
					title: '旁白不能删除'
				});
				return;
			}
			
			if(data.name === "玩家" ){
				uni.showToast({
					icon: 'none',
					title: '玩家不能删除'
				});
				return;
			}
			
			
			uni.showModal({
				title: '提示',
				content: '确定删除此条数据吗',
				success: function(res) {
					if (res.confirm) {
						that.$request
							.delete('/npc/class/' + data.id + '/')
							.then(res => {
								that.getdatalist();
								that.getgoodslist();
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
		deletedata_goods(data) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定删除此条数据吗',
				success: function(res) {
					if (res.confirm) {
						that.$request
							.delete('/npc/instance/' + data.id + '/')
							.then(res => {
								that.getdatalist();
								that.getgoodslist();
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
		goto_editor_category(data, type) {
			if (type === 'pushdata') {
				uni.navigateTo({
					url: './categoryNpc/categoryNpc'
				});
			} else if (type === 'changedata') {
				console.log(data, 'data');
				let categoryNpc = JSON.stringify(data);
				uni.navigateTo({
					url: './categoryNpc/categoryNpc?categoryNpc=' + categoryNpc
				});
			}
		},
		goto_editor_goods(data, type) {
			if (type === 'pushdata') {
				uni.navigateTo({
					url: './editorNpc/editorNpc'
				});
			} else if (type === 'changedata') {
				return
				console.log(data, 'data');
				let goodinfo = JSON.stringify(data);
				console.log(goodinfo, '参数');
				uni.navigateTo({
					url: './categoryGoods/categoryGoods?goodinfo=' + goodinfo
				});
			}
		}
//跳转到编辑增加页面
	},
	onShow() {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		this.getdatalist();
		this.getgoodslist();
	},
	mounted: function() {},
	
};
</script>

<style>
.margin-top {
	margin-top: 20upx;
}
.QS-segmented-control {
	border-bottom: 1px solid #e5e5e5;
}
</style>
