<template>
	<view>
		  <button class="margin-top buttonwidth" @click="operation(empty,push)">新建分组</button>
		<view class="margin-top">
			<t-table>
				<t-tr>
					<t-th class="one">分组编号</t-th>
					<t-th  class="tow">分组名称</t-th>
					<t-th>操作</t-th>
				</t-tr>
				<t-tr v-for=" (item,index) in datalist" :key="index" >
					<t-td class="one">{{item.num}}</t-td>
					
					<t-td class="tow"> <view @click="gotodramaList(item)">
						{{item.name}}
					</view></t-td>
					<t-td>
						<!-- <fa-icon type="eye operation_icon" size="20" color="#666" @click="gotodramaList(item)"></fa-icon> -->
						<fa-icon type="wrench operation_icon" size="20" color="#666" @click="operation(item,change)"></fa-icon>
						<fa-icon type="trash-o operation_icon" size="20" color="#666" @click="deletedata(item)"></fa-icon>
					</t-td>
				</t-tr>
			</t-table>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datalist: [], // 分组列表
				empty:{},
				push:"push",
				change:"change",
				workinfo:{}
			}
		},
		methods: {
			// 获取分组
			getdatalist() {
				let that = this;
				that.$request.get("/plot/category/?projectId=" + this.workinfo.id ).then(res => {
						console.log(res, "请求的数据")
						that.datalist = res.data;
					})
					.catch(error => {
						console.error('error:', error);
					});
			},
			deletedata(data) {
				let that = this;
				uni.showModal({
				    title: '提示',
				    content: '确定删除此条数据吗',
				    success: function (res) {
				        if (res.confirm) {
							that.$request.delete("/plot/category/" + data.id +"/").then(res => {
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
			operation(data,type){
				if(type ==="push"){
					uni.navigateTo({
						 url: './EditorDramaGrouping'
					})
				}else if(type ==="change"){
					let DramaGrouping=JSON.stringify(data);
					uni.navigateTo({
						 url: './EditorDramaGrouping?DramaGrouping='+DramaGrouping
					})
				}
			},
			gotodramaList(data){
				console.log("来一发")
				uni.navigateTo({
					 url: './dramaList/dramaList?categoryId='+data.id
				})
				
			},
		},
		mounted: function() {
			
		},
		onShow() {
			this.getdatalist();
			
		},
		onLoad() {
			let workinfo=uni.getStorageSync("workinfo");
			this.workinfo=workinfo;
		}
	}
</script>

<style>
	.margin-top{
		margin-top: 20upx;
		
	}
	.one{
		flex: none !important;
		width: 20% !important;
	}
	.tow{
		flex: none !important;
		width: 50% !important;
	}
/* 
.one {
	
	width: 20% !important;
} */
</style>
