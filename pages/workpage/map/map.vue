<template>
	<view>
		  <button class="margin-top widthnine" @click="goto_editor(empty,pushdata)">添加地点</button>
		<view class="margin-top">
			<t-table>
				<t-tr>
					<t-th>地点名称</t-th>
					<t-th>操作</t-th>
				</t-tr>
				<t-tr v-for=" (item,index) in datalist" :key="index">
					<t-td>{{item.name}}</t-td>
					<t-td class="operation_box">
						<fa-icon type="wrench operation_icon" size="20" color="#666" @click="goto_editor(item,changedata)"></fa-icon>
						<fa-icon type="trash-o operation_icon" size="20" color="#666" @click="deletedata(item)"></fa-icon>
						<!-- <view class="operation" @click="deletedata(item.phraseName)">删除</view> -->
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
				pushdata:"pushdata",
				changedata:"changedata",
				empty:{},
				datalist: [], // 词组列表
				workinfo:{},
			}
		},
		methods: {
			getdatalist() {
				console.log(this.workinfo,"当前作品数据")
				let that = this;
				that.$request.get("/place/?projectId="+that.workinfo.id).then(res => {
						console.log(res, "请求的数据");
						 that.datalist=res.data.filter( (item)=>
						       item.name !=="任意地点" &&  item.name !=="不可见区域"
						   );
						   console.log(that.datalist,"数据列表")
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
							that.$request.delete("/place/" + data.id+"/").then(res => {
								
								  
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
			goto_editor(data,type){
				if( type === "pushdata"){
					uni.navigateTo({
						url:"./editor"
					})
				}
				else if(type === "changedata"){
					console.log(data,"data")
					let mapinfo=JSON.stringify(data);
					console.log(mapinfo,"参数")
					uni.navigateTo({
						url:"./editor?mapinfo="+mapinfo
					})
				}
			}
			//跳转到编辑增加页面
		},
		onShow() {
			let workinfo=uni.getStorageSync("workinfo");
			this.workinfo=workinfo;
			this.getdatalist();
		},
		mounted: function() {
			
		

		},
	}
</script>

<style>
	.margin-top{
		margin-top: 20upx;
		
	}

</style>
