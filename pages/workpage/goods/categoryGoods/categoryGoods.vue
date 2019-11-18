<template>
	<view>
		<QSPickerCustom  v-if="updateview" ref="pickerCustom4" title="物品类别" @change="changecategory" pickerTitle="物品类别" v-model="postdata.goodsClassId" />
		<QSInput variableName="input" required layout="column" title="物品名称" v-model="postdata.name"></QSInput>
		<QSInput variableName="input" layout="column" title="物品别名" v-model="postdata.nickname"></QSInput>
		<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="物品简介" v-model="postdata.intro"></QSTextarea>
		<view class="property">
			<view class="title">类别属性</view>
			<view class="one_property" v-if="updateview">
				<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.goodsInstanceAttrVos[0].name"></QSInput>
				<QSPickerCustom ref="pickerCustom1" title="请选择可被询问" pickerTitle="可被询问" v-model="postdata.goodsInstanceAttrVos[0].value" />
			</view>
			<view class="one_property"  v-if="updateview">
				<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.goodsInstanceAttrVos[1].name"></QSInput>
				<QSPickerCustom ref="pickerCustom2" title="请选择所属角色" pickerTitle="所属角色" v-model="postdata.goodsInstanceAttrVos[1].value" />
			</view>
			<view class="one_property"  v-if="updateview" >
				<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.goodsInstanceAttrVos[2].name"></QSInput>
				<QSPickerCustom ref="pickerCustom3" title="请选择所在地点" pickerTitle="所在地点" v-model="postdata.goodsInstanceAttrVos[2].value" />
			</view>
			<view class="one_property2" v-for="(item, index) of othergoodsInstanceAttrVos">
				<QSInput variableName="input" :disabled="true" layout="row" v-model="othergoodsInstanceAttrVos[index].name"></QSInput>
				<QSInput variableName="input" layout="row" v-model="othergoodsInstanceAttrVos[index].value"></QSInput>
			</view>	
			<button  class="uni-button2 buttonwidth" @click="submitdata">{{ operation === 'push' ? '确认添加' : '确认编辑' }}</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			postdata: {
				goodsInstanceAttrVos: [
					{
						goodsClassAttrId: '',
						name: '可被询问',
						value: ''
					},
					{
						goodsClassAttrId: '',
						name: '所属角色',
						value: ''
					},
					{
						goodsClassAttrId: '',
						name: '所在地点',
						value: ''
					}
				],
				othergoodsInstanceAttrVos: [],
				goodsClassId: '',
				name: '',
				intro: '',
				nickname: '',
				npcId: '',
				npcName: '',
				placeId: '',
				placeName: ''
			},
			NPClist: [],
			Maplist: [],
			allNPClist: [],
			allMaplist: [],
			allCategorylist: [],
			Categorylist: [],
			inquire: [['是', '否']],
			workinfo: {},
			operation: 'push',
			showelement: false,
			updateview:true
		};
	},
	methods: {
		changecategory(e) {
			if (e.value.length === 0) {
				e.value[0] = 0;
			}
			let index = e.value[0];
			console.log(this.allCategorylist[index].goodsClassAttrVos, '看看是什么东西');
			this.postdata.goodsClassId = this.allCategorylist[index].id;
			let arr = this.allCategorylist[index].goodsClassAttrVos;
			let othergoodsInstanceAttrVos = [];
			if (arr.length > 3) {
				for (var i in arr) {
					if (i > 2) {
						othergoodsInstanceAttrVos.push(arr[i]);
					}
				}
			}
			this.othergoodsInstanceAttrVos = othergoodsInstanceAttrVos;
			this.postdata.goodsInstanceAttrVos[0].goodsClassAttrId = this.allCategorylist[index].goodsClassAttrVos[0].id;
			this.postdata.goodsInstanceAttrVos[1].goodsClassAttrId = this.allCategorylist[index].goodsClassAttrVos[1].id;
			this.postdata.goodsInstanceAttrVos[2].goodsClassAttrId = this.allCategorylist[index].goodsClassAttrVos[2].id;
		},
		// 选择类别
		//  提交数据
		submitdata() {
			let postdata = JSON.parse(JSON.stringify(this.postdata));
			if (this.operation === 'push') {
				if (postdata.goodsInstanceAttrVos[0].value !== '') {
					let voucher1 = postdata.goodsInstanceAttrVos[0].value.data[0];
					if (voucher1 === '否') {
						postdata.goodsInstanceAttrVos[0].value = '否';
					} else if (voucher1 === '是') {
						postdata.goodsInstanceAttrVos[0].value = '是';
					} else {
						postdata.goodsInstanceAttrVos[0].value = postdata.goodsInstanceAttrVos[0].value.data[0];
					}
				}
				if (postdata.goodsInstanceAttrVos[1].value  !="") {
					let voucher2 = postdata.goodsInstanceAttrVos[1].value.data[0];
					for (var i in this.allNPClist) {
						if (this.allNPClist[i].name === voucher2) {
							postdata.goodsInstanceAttrVos[1].value = this.allNPClist[i].id;
						}
					}
				}
				if (postdata.goodsInstanceAttrVos[2].value !== '') {
					let voucher3 = postdata.goodsInstanceAttrVos[2].value.data[0];
					for (var i in this.allMaplist) {
						if (this.allMaplist[i].name === voucher3) {
							postdata.goodsInstanceAttrVos[2].value = this.allMaplist[i].id;
						}
					}
				}
				if (!postdata.goodsClassId) {
					uni.showToast({
						icon: 'none',
						title: '请选择物品分类'
					});
					return;
				}
				if (!postdata.name) {
					uni.showToast({
						icon: 'none',
						title: '物品名称不能为空'
					});
					return;
				}

				if (!postdata.goodsInstanceAttrVos[0].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择是否可被询问'
					});
					return;
				}
				console.log(postdata, '提交的数据');
				let that = this;
				that.$request
					.post('/goods/instance/', postdata)
					.then(res => {
						console.log(res);
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '添加类别成功',
								cancelText: '继续添加',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
									}
								}
							});
						} else {
							uni.showModal({
								title: '提示',
								content: res.msg,
								cancelText: '继续添加',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
									}
								}
							});
						}
					})
					.catch(erro => {
						console.log(erro);
					});
			} else if (this.operation === 'change') {
				
				
				console.log(postdata, '编辑提交的数据');
				
				for (var i in postdata.goodsInstanceAttrVos) {
					if (postdata.goodsInstanceAttrVos[i].nickname === '') {
						postdata.goodsInstanceAttrVos[i].nickname = null;
					}
				}
				
				postdata.goodsInstanceAttrVos = postdata.goodsInstanceAttrVos.concat(this.othergoodsInstanceAttrVos);
				
				if (postdata.goodsInstanceAttrVos[0].value !== '' ) {
					let voucher1 = postdata.goodsInstanceAttrVos[0].value.data[0];
					if (voucher1 === "否") {
						postdata.goodsInstanceAttrVos[0].value = '否';
					} else if (voucher1 === "是") {
						postdata.goodsInstanceAttrVos[0].value = '是';
					}
				}
				
				
				if (postdata.goodsInstanceAttrVos[1].value !== '' && postdata.goodsInstanceAttrVos[1].value !== null ) {
					let voucher2 = postdata.goodsInstanceAttrVos[1].value.data[0];
					for (var i in this.allNPClist) {
						if (this.allNPClist[i].name === voucher2) {
							postdata.goodsInstanceAttrVos[1].value = this.allNPClist[i].id;
						}
					}
				}
				
				if (postdata.goodsInstanceAttrVos[2].value !== '' && postdata.goodsInstanceAttrVos[2].value !== null ) {
					let voucher3 = postdata.goodsInstanceAttrVos[2].value.data[0];
					for (var i in this.allMaplist) {
						if (this.allMaplist[i].name === voucher3) {
							postdata.goodsInstanceAttrVos[2].value = this.allMaplist[i].id;
						}
					}
				}
				
				function isArrayFn (o) {
				return Object.prototype.toString.call(o) === '[object Array]';
				}
				
				
				
				if (postdata.goodsClassId.value !== '' && postdata.goodsClassId.value !== null  &&    Object.prototype.toString.call(postdata.goodsClassId)  === '[object Object]'    ) {
					let voucher3 = postdata.goodsClassId.data[0];
					for (var i in this.allCategorylist) {
						if (this.allCategorylist[i].name === voucher3) {
							postdata.goodsClassId = this.allCategorylist[i].id;
						}
					}
				}
				
				
				
				if (!postdata.name) {
					uni.showToast({
						icon: 'none',
						title: '分类名称不能为空'
					});
					return;
				}
				postdata.projectId = this.workinfo.id;
				let that = this;
				that.$request
					.put('/goods/instance/'+'/'+that.workinfo.id+'/',postdata)
					.then(res => {
						console.log(res);
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '编辑物品成功',
								cancelText: '继续编辑',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
									}
								}
							});
						} else {
							uni.showModal({
								title: '提示',
								content: res.msg,
								cancelText: '继续编辑',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
									}
								}
							});
						}
					})
					.catch(erro => {
						console.log(erro);
					});
			}
		},
		getCategorylist() {
			let that = this;
			that.$request
				.get('/goods/class/?projectId=' + that.workinfo.id)
				.then(res => {
					if (res.code === 1) {
						let arr = [[]];
						for (var i in res.data) {
							arr[0].push(res.data[i].name);
						}
						that.allCategorylist = res.data;
						that.Categorylist = arr;
						this.setPickerDatac();
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		getmaplist() {
			let that = this;
			that.$request
				.get('/place/?projectId=' + that.workinfo.id)
				.then(res => {
					let arr = [[]];
					for (var i in res.data) {
						arr[0].push(res.data[i].name);
					}
					that.allMaplist = res.data;
					that.Maplist = arr;
					this.setPickerDatac();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		getNPClist() {
			let that = this;
			that.$request
				.get('/npc/instance_by_project_id/' + that.workinfo.id + '/')
				.then(res => {
					let arr = [[]];
					for (var i in res.data) {
						arr[0].push(res.data[i].name);
					}
					that.allNPClist = res.data;
					that.NPClist = arr;
					this.setPickerDatac();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取角色
		initialize1() {
			let that = this;
			that.$request
				.get('/npc/instance_by_project_id/' + that.workinfo.id + '/')
				.then(res => {
					let arr = [[]];
					for (var i in res.data) {
						arr[0].push(res.data[i].name);
					}
					that.allNPClist = res.data;
					that.NPClist = arr;

					if (that.postdata.goodsInstanceAttrVos[1].value !== '') {
						let voucher2 = that.postdata.goodsInstanceAttrVos[1].value;
						for (var i in that.allNPClist) {
							if (that.allNPClist[i].id === parseInt(voucher2)) {
								that.postdata.goodsInstanceAttrVos[1].value = {
									data: [that.allNPClist[i].name],
									value: [parseInt(i)]
								};
								that.$set(that.postdata.goodsInstanceAttrVos, 1, that.postdata.goodsInstanceAttrVos[1]);
							}
						}
					}
					that.initialize2();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		initialize2() {
			console.log("initialize2")
			let that = this;
			that.$request
				.get('/place/?projectId=' + that.workinfo.id)
				.then(res => {
					let arr = [[]];
					for (var i in res.data) {
						arr[0].push(res.data[i].name);
					}
					that.allMaplist = res.data;
					that.Maplist = arr;
					if (that.postdata.goodsInstanceAttrVos[2].value !== '') {
						let voucher2 = that.postdata.goodsInstanceAttrVos[2].value;
						for (var i in that.allMaplist) {
							if (that.allMaplist[i].id === parseInt(voucher2)) {
								that.postdata.goodsInstanceAttrVos[2].value = {
									data: [that.allMaplist[i].name],
									value: [parseInt(i)]
								};
								that.$set(that.postdata.goodsInstanceAttrVos, 2, that.postdata.goodsInstanceAttrVos[2]);
							}
						}
					}
					that.initialize3();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		initialize3() {
			console.log("initialize3")
			let that = this;
			that.$request
				.get('/goods/class/?projectId=' + that.workinfo.id)
				.then(res => {
					if (res.code === 1) {
						let arr = [[]];
						for (var i in res.data) {
							arr[0].push(res.data[i].name);
						}
						that.allCategorylist = res.data;
						that.Categorylist = arr;
						if (that.postdata.goodsClassId !== '') {
							let voucher2 = that.postdata.goodsClassId;
							for (var i in that.allCategorylist) {
								if (that.allCategorylist[i].id === parseInt(voucher2)) {
									that.postdata.goodsClassId = {
										data: [that.allCategorylist[i].name],
										value: [parseInt(i)]
									};
								}
							}
						}
						that.updateview = true;
						console.log(that.updateview ,"此时的updateview")
						that.$nextTick(function() {
							that.setPickerDatac2();
						});
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
			
		},
		setPickerDatac() {
			this.$refs.pickerCustom1.setData(this.inquire);
			this.$refs.pickerCustom2.setData(this.NPClist);
			this.$refs.pickerCustom3.setData(this.Maplist);
			this.$refs.pickerCustom4.setData(this.Categorylist);
		},
		setPickerDatac2() {
			this.$refs.pickerCustom1.setData(this.inquire);
			this.$refs.pickerCustom2.setData(this.NPClist);
			this.$refs.pickerCustom3.setData(this.Maplist);
			this.$refs.pickerCustom4.setData(this.Categorylist);
		}
	},
	mounted() {},
	onShow() {
		// let workinfo = uni.getStorageSync('workinfo');
		// this.workinfo = workinfo;
	},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		if (data.goodinfo) {
			this.updateview=false;
			this.operation = 'change';
			let goodinfo = JSON.parse(data.goodinfo);
			console.log(goodinfo, '接收的数据');
			let othergoodsInstanceAttrVos = [];
			for (var i in goodinfo.goodsInstanceAttrVos) {
				if (goodinfo.goodsInstanceAttrVos[i].nickname === null) {
					goodinfo.goodsInstanceAttrVos[i].nickname = '';
				}
				if (i > 2) {
					othergoodsInstanceAttrVos.push(goodinfo.goodsInstanceAttrVos[i]);
				}
			}
			this.othergoodsInstanceAttrVos = othergoodsInstanceAttrVos;
			this.postdata = goodinfo;
			if (this.postdata.goodsInstanceAttrVos[0].value !== '') {
				let voucher1 = this.postdata.goodsInstanceAttrVos[0].value;
				if (voucher1 === '是') {
					this.postdata.goodsInstanceAttrVos[0].value = {
						data: ['是'],
						value: [0]
					};
				} else if (voucher1 === '否') {
					this.postdata.goodsInstanceAttrVos[0].value = {
						data: ['否'],
						value: [1]
					};
				}
			};
			console.log(this.postdata, '形成的数据');
			this.initialize1();
		} else {
			this.operation = 'push';
			this.getCategorylist();
			this.getmaplist();
			this.getNPClist();
		}
	}
};
</script>

<style>
.property {
	font-size: 32upx;
	color: #666666;
	display: flex;
	flex-direction: column;
}
.one_property {
	display: flex;
	flex-direction: column;
}
.one_property2 {
	display: flex;
	flex-direction: row;
}
.title {
	margin-left: 20upx;
}
.uni-button {
	text-align: center;
	font-size: 32upx;
	color: #666666;
	height: 60upx;
	line-height: 60upx;
	border-radius: 10upx;
	margin-top: 20upx;
	margin-left: 0px;
}
.other {
	padding: 10px;
	width: 30% !important;
}
.icon {
	margin-top: 40upx;
}
.uni-button2 {
	width: 100%;
	margin-top: 20upx;
}
</style>
