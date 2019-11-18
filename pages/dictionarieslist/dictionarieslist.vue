<template>
	<view>
		  <button class="margin-top buttonwidth" @click="operation(empty,push)">添加词组</button>
		<view class="margin-top">
			<t-table>
				<t-tr>
					<t-th>词组名称</t-th>
					<t-th>词组标签</t-th>
					<t-th>操作</t-th>
				</t-tr>
				<t-tr v-for=" (item,index) in datalist" :key="index">
					<t-td>{{item.phraseName}}</t-td>
					<t-td>{{item.labels}}</t-td>
					<t-td>
						<fa-icon type="wrench operation_icon" size="20" color="#666" @click="operation(item,change)"></fa-icon>
						<fa-icon type="trash-o operation_icon" size="20" color="#666" @click="deletedata(item.phraseName)"></fa-icon>
					<!-- 	<view class="operation" >修改</view>
						<view class="operation" @click="deletedata(item.phraseName)">删除</view> -->
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
				datalist: [], // 词组列表
				empty:{},
				push:"push",
				change:"change",
			}
		},
		methods: {
			// 获取词组列表
			getdatalist() {
				let that = this;
				that.$request.get("/authorPhrase/search?searchText=" + " ").then(res => {
						console.log(res, "请求的数据")
						that.datalist = res.data;
					})
					.catch(error => {
						console.error('error:', error);
					});
			},
			deletedata(phraseName) {
				let that = this;
				uni.showModal({
				    title: '提示',
				    content: '确定删除此条数据吗',
				    success: function (res) {
				        if (res.confirm) {
							
							that.$request.delete("/authorPhrase/" + phraseName).then(res => {
									that.getdatalist();
									// console.log(res);
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
						 url: './add_data/add_data'
					})
				}else if(type ==="change"){
					let dictionaries=JSON.stringify(data);
					uni.navigateTo({
						 url: './add_data/add_data?dictionariesinfo='+dictionaries
					})
				}
				
			}
		},
		onShow() {
			console.log("进入页面")
			this.getdatalist();
		}

	}
</script>

<style>
	.margin-top{
		margin-top: 20upx;
		
	}

</style>
