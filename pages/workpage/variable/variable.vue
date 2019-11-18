<template>
	<view>
		  <button  class="margin-top widthnine" @click="operation(empty,push)">添加变量</button>
		<view class="margin-top">
			<t-table>
				<t-tr>
					<t-th>变量名称</t-th>
					<t-th>变量的值</t-th>
					<t-th>操作</t-th>
				</t-tr>
				<t-tr v-for=" (item,index) in datalist" :key="index">
					<t-td>{{item.name}}</t-td>
					<t-td>{{item.value}}</t-td>
					<t-td>
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
				datalist: [], // 变量列表
				empty:{},
				push:"push",
				change:"change",
				workinfo:{}
			}
		},
		methods: {
			// 获取变量
			getdatalist() {
				let that = this;
				that.$request.get("/global_attr/?projectId=" + this.workinfo.id ).then(res => {
						console.log(res, "请求的数据")
						that.datalist = res.data;
					})
					.catch(error => {
						console.error('error:', error);
					});
			},
			deletedata(data) {
				let that = this;
				if(data.isBase  === true){
					uni.showToast({
						title:"默认变量不能删除",
						icon:"none"
					})
					return
				}
				uni.showModal({
				    title: '提示',
				    content: '确定删除此条数据吗',
				    success: function (res) {
				        if (res.confirm) {
							that.$request.delete("/global_attr/" + data.id +"/").then(res => {
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
						 url: './add_variable/add_variable'
					})
				}else if(type ==="change"){
					let variable_info=JSON.stringify(data);
					uni.navigateTo({
						 url: './add_variable/add_variable?variable_info='+variable_info
					})
				}
				
			}
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

</style>
