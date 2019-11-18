<template>
	<view>
		<QSInput variableName="input" required layout="column" title="角色类别" v-model="postdata.name"></QSInput>
		<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="类别简介" v-model="postdata.intro"></QSTextarea>
		<view class="property">
			<view class="title">类别属性</view>
			<view class="one_property">
				<view class="childrenBOX">
					<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcClassAttrVos[0].name"></QSInput>
					<QSInput variableName="input" required placeholder="属性别名" layout="row" v-model="postdata.npcClassAttrVos[0].nickname"></QSInput>
				</view>
				<QSPickerCustom title="选择跟随玩家" ref="pickerCustom1" pickerTitle="跟随玩家" v-model="postdata.npcClassAttrVos[0].value" />
			</view>
			<view class="one_property">
				<view class="childrenBOX">
					<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcClassAttrVos[1].name"></QSInput>
					<QSInput variableName="input" required placeholder="属性别名" layout="row" v-model="postdata.npcClassAttrVos[1].nickname"></QSInput>
				</view>
				<QSPickerCustom title="选择可被询问" ref="pickerCustom2" pickerTitle="可被询问" v-model="postdata.npcClassAttrVos[1].value" />
			</view>
			<view class="one_property" v-if="updateview">
				<view class="childrenBOX">
					<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcClassAttrVos[2].name"></QSInput>
					<QSInput variableName="input" required placeholder="属性别名" layout="row" v-model="postdata.npcClassAttrVos[2].nickname"></QSInput>
				</view>
				<QSPickerCustom title="选择所在地点" class="othermm" ref="pickerCustom3" pickerTitle="所在地点"  :placherhold="pickerValue2" v-model="postdata.npcClassAttrVos[2].value" />
			</view>
			<view class="one_property">
				<view class="childrenBOX">
					<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcClassAttrVos[3].name"></QSInput>
					<QSInput variableName="input" required placeholder="属性别名" layout="row" v-model="postdata.npcClassAttrVos[3].nickname"></QSInput>
				</view>
				<QSPickerCustom title="选择能否说话" ref="pickerCustom4" pickerTitle="能否说话" v-model="postdata.npcClassAttrVos[3].value" />
			</view>
			<button type="default" class="uni-button" @click="addotherproperty">增加其他属性</button>
			<view class="one_property2" v-for="(item, index) of addotherpropertylist">
				<QSInput class="other" variableName="input" required placeholder="属性名称" layout="row" v-model="addotherpropertylist[index].name"></QSInput>
				<QSInput class="other" variableName="input" required placeholder="属性别名" layout="row" v-model="addotherpropertylist[index].nickname"></QSInput>
				<QSInput class="other" variableName="input" required placeholder="属性值" layout="row" v-model="addotherpropertylist[index].value"></QSInput>
				<fa-icon type="minus-circle operation_icon" size="20" color="#666" class="icon" @click="deleteohter(item)" v-if="operation === 'push' " ></fa-icon>
			</view>
			<button  class="uni-button2 widthnine" @click="submitdata">{{ operation === 'push' ? '确认添加' : '确认编辑' }}</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			postdata: {
				npcClassAttrVos: [
					{
						name: '跟随玩家',
						value: '',
						nickname: '',
						isBase: true
					},
					{
						name: '可被询问',
						value: '',
						nickname: '',
						isBase: true
					},
					{
						name: '所在地点',
						value: '',
						nickname: '',
						isBase: true
					},
					{
						name: '能否说话',
						value: '',
						nickname: '',
						isBase: true
					}
				],
				id: '',
				name: '',
				intro: '',
				projectId: ''
			},
			NPClist: [],
			Maplist: [],
			allNPClist: [],
			allMaplist: [],
			steps1: {
				step_1_value: 'name' //第一级显示的属性名
			},
			
			inquire: [['是', '否']],
			inquire2: [['是', '否']],
			inquire3: [['能', '否']],
			
			addotherpropertylist: [],
			workinfo: {},
			operation: 'push',
			pickerValue1:"",
			pickerValue2:"",
			updateview: true
			
		};
	},
	methods: {
		deepCopy(obj) {
			var result = Array.isArray(obj) ? [] : {};
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (typeof obj[key] === 'object' && obj[key] !== null) {
						result[key] = this.deepCopy(obj[key]); //递归复制
					} else {
						result[key] = obj[key];
					}
				}
			}
			return result;
		},
		demo(e) {
			// console.log(e,"eeee");
			// console.log(this.postdata.npcClassAttrVos[0].value,"初始值");
		},
		//  提交数据
		submitdata() {
			
			let postdata =  JSON.parse( JSON.stringify( this.postdata))     ;

			console.log(this.operation, '状态');
			if (this.operation === 'push') {
				for (var i in postdata.npcClassAttrVos) {
					if (postdata.npcClassAttrVos[i].nickname === '') {
						postdata.npcClassAttrVos[i].nickname = null;
					}
				}
				postdata.npcClassAttrVos = postdata.npcClassAttrVos.concat(this.addotherpropertylist);
				if (postdata.npcClassAttrVos[0].value !== '') {
					console.log("发生了")
					let voucher1 = postdata.npcClassAttrVos[0].value.data[0];
					if (voucher1 === "否") {
						postdata.npcClassAttrVos[0].value = '否';
					} else if (voucher1 === "是") {
						postdata.npcClassAttrVos[0].value = '是';
					}
				}
				
				if (postdata.npcClassAttrVos[1].value !== '') {
					
					let voucher2 = postdata.npcClassAttrVos[1].value.data[0];
					if (voucher2 === "否") {
						postdata.npcClassAttrVos[1].value = '否';
					} else if (voucher2 === "是") {
						postdata.npcClassAttrVos[1].value = '是';
					}
				}
				if (postdata.npcClassAttrVos[2].value !== '') {
					let voucher3 = postdata.npcClassAttrVos[2].value.data[0];
					for (var i in this.allMaplist) {
						if (this.allMaplist[i].name === voucher3) {
							postdata.npcClassAttrVos[2].value = this.allMaplist[i].id;
						}
					}
				}
				if (postdata.npcClassAttrVos[3].value !== '') {
					console.log("发生了")
					let voucher4 = postdata.npcClassAttrVos[3].value.data[0];
					if (voucher4 === "否") {
						postdata.npcClassAttrVos[3].value = '否';
					} else if (voucher4 === "能") {
						postdata.npcClassAttrVos[3].value = '能';
					}
				};
			
				
				
				if (!postdata.name) {
					uni.showToast({
						icon: 'none',
						title: '分类名称不能为空'
					});
					return;
				}
				
				if (!postdata.npcClassAttrVos[0].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择是否可跟随玩家'
					});
					return;
				}
				if (!postdata.npcClassAttrVos[1].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择可被询问'
					});
					return;
				}
				if (!postdata.npcClassAttrVos[2].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择所在地点'
					});
					return;
				}
				if (!postdata.npcClassAttrVos[3].value) {
					uni.showToast({
						icon: 'none',
						title: '能否说话'
					});
					return;
				}
				
				postdata.projectId = this.workinfo.id;
				console.log(postdata, '提交的数据');
				let that = this;
				that.$request
					.post('/npc/class/', postdata)
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
				
				for (var i in postdata.npcClassAttrVos) {
					if (postdata.npcClassAttrVos[i].nickname === '') {
						postdata.npcClassAttrVos[i].nickname = null;
					}
				}
				postdata.npcClassAttrVos = postdata.npcClassAttrVos.concat(this.addotherpropertylist);
				
				if (postdata.npcClassAttrVos[0].value !== '') {
					let voucher1 = postdata.npcClassAttrVos[0].value.data[0];
					if (voucher1 === '否') {
						postdata.npcClassAttrVos[0].value = '否';
					} else if (voucher1 === '是') {
						postdata.npcClassAttrVos[0].value = '是';
					}
				}
				
				
				if (postdata.npcClassAttrVos[1].value !== '') {
					let voucher1 = postdata.npcClassAttrVos[1].value.data[0];
					if (voucher1 === '否') {
						postdata.npcClassAttrVos[1].value = '否';
					} else if (voucher1 === '是') {
						postdata.npcClassAttrVos[1].value = '是';
					}
				}
				
				
				
				if (postdata.npcClassAttrVos[2].value !== '') {
					let voucher2 = postdata.npcClassAttrVos[2].value.data[0];
					for (var i in this.allMaplist) {
						if (this.allMaplist[i].name === voucher2) {
							postdata.npcClassAttrVos[2].value = this.allMaplist[i].id;
						}
					}
				}
				
				if (postdata.npcClassAttrVos[3].value !== '') {
					let voucher1 = postdata.npcClassAttrVos[3].value.data[0];
					if (voucher1 === '能') {
						postdata.npcClassAttrVos[3].value = '能';
					} else if (voucher1 === '否') {
						postdata.npcClassAttrVos[3].value = '否';
					}
				}
				if (!postdata.name) {
					uni.showToast({
						icon: 'none',
						title: '分类名称不能为空'
					});
					return;
				}
				
				if (!postdata.npcClassAttrVos[0].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择是否可跟随玩家'
					});
					return;
				}
				if (!postdata.npcClassAttrVos[1].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择可被询问'
					});
					return;
				}
				if (!postdata.npcClassAttrVos[2].value) {
					uni.showToast({
						icon: 'none',
						title: '请选择所在地点'
					});
					return;
				}
				if (!postdata.npcClassAttrVos[3].value) {
					uni.showToast({
						icon: 'none',
						title: '能否说话'
					});
					return;
				}
				console.log(postdata, '编辑提交的数据');
				postdata.projectId = this.workinfo.id;
				let that = this;
				that.$request
					.put('/npc/class/' + '/' + postdata.id + '/', postdata)
					.then(res => {
						console.log(res);
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '编辑类别成功',
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
		deleteohter(item) {
			var index = this.addotherpropertylist.indexOf(item);
			if (index !== -1) {
				this.addotherpropertylist.splice(index, 1);
			}
		},
		addotherproperty() {
			let obj = {
				name: '',
				value: '',
				nickname: '',
				isBase: true
			};
			this.addotherpropertylist.push(obj);
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
					that.setPickerDatac();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		initialize1() {
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
					
					
					if (that.postdata.npcClassAttrVos[2].value !== '') {
						let voucher3 = that.postdata.npcClassAttrVos[2].value;
						for (var i in that.allMaplist) {
							if (that.allMaplist[i].id === parseInt(voucher3)) {
								that.postdata.npcClassAttrVos[2].value = {
									data: [that.allMaplist[i].name],
									value: [parseInt(i)]
								};
								that.$set(that.postdata.npcClassAttrVos, 2, that.postdata.npcClassAttrVos[2]);
							}
						}
					} else {
					}
					that.updateview = true;
					console.log(that.updateview ,"此时的updateview")
					that.$nextTick(function() {
						that.setPickerDatac2();
					});	
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		setPickerDatac() {
			this.$refs.pickerCustom1.setData(this.inquire);
			this.$refs.pickerCustom2.setData(this.inquire2);
			this.$refs.pickerCustom3.setData(this.Maplist);
			this.$refs.pickerCustom4.setData(this.inquire3);
		},
		setPickerDatac2() {
			this.$refs.pickerCustom1.setData(this.inquire);
			this.$refs.pickerCustom2.setData(this.inquire2);
			this.$refs.pickerCustom3.setData(this.Maplist);
			this.$refs.pickerCustom4.setData(this.inquire3);
		}
	},
	mounted() {},
	onShow() {
		// this.getmaplist();
		// this.getNPClist();
	},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		if (data.categoryNpc) {
			this.operation ="change"
			this.updateview=false;
			this.initialize1();
			let categoryNpc = JSON.parse(data.categoryNpc);
			console.log(categoryNpc, '接收的数据');
			let addotherpropertylist = [];
			for (var i in categoryNpc.npcClassAttrVos) {
				if (categoryNpc.npcClassAttrVos[i].nickname === null) {
					categoryNpc.npcClassAttrVos[i].nickname = '';
				}
				if (i>3 ) {
					addotherpropertylist.push(categoryNpc.npcClassAttrVos[i]);
				}
			}

			this.addotherpropertylist = addotherpropertylist;
			this.postdata = categoryNpc;
			if (this.postdata.npcClassAttrVos[0].value !== '') {
				let voucher1 = this.postdata.npcClassAttrVos[0].value;
				if (voucher1 === '是') {
					this.postdata.npcClassAttrVos[0].value = {
						data: ['是'],
						value: [0]
					};
				} else if (voucher1 === '否') {
					this.postdata.npcClassAttrVos[0].value = {
						data: ['否'],
						value: [1]
					};
				}
			};
			if (this.postdata.npcClassAttrVos[1].value !== '') {
				let voucher1 = this.postdata.npcClassAttrVos[1].value;
				if (voucher1 === '是') {
					this.postdata.npcClassAttrVos[1].value = {
						data: ['是'],
						value: [0]
					};
				} else if (voucher1 === '否') {
					this.postdata.npcClassAttrVos[1].value = {
						data: ['否'],
						value: [1]
					};
				}
			}
			if (this.postdata.npcClassAttrVos[3].value !== '') {
				let voucher1 = this.postdata.npcClassAttrVos[3].value;
				if (voucher1 === '能') {
					this.postdata.npcClassAttrVos[3].value = {
						data: ['能'],
						value: [0]
					};
				} else if (voucher1 === '否') {
					this.postdata.npcClassAttrVos[3].value = {
						data: ['否'],
						value: [1]
					};
				}
			}
			
			
		} else {
			this.updateview=true
			this.operation ="push"
			this.pickerValue1="请选择";
			this.pickerValue2="请选择";
			this.getmaplist();
		
		}

		// let category= JSON.parse(data.category);
		// console.log(category,"接受的数据")
		// if(data.category){
		// 	// this.postdata
		// }
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
	border: 1px solid #f8f8f8;
	margin-top: 20upx;
}
.one_property2{
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

.othermm /deep/ .flex_row_e_c{
	color: #666666 !important;
}
.childrenBOX{
	display: flex;
	flex-direction: row;
}
.one_property{
	
}
	
		
</style>
