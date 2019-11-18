<template>
	<view>
		<view class="imgbox">
			<view class="title requried">角色头像</view>
			<robby-image-upload v-model="imageData" @delete="deleteImage" @add="addImage" :enable-del="enableDel" :enable-add="enableAdd" :limit="limitNumber"></robby-image-upload>
		</view>
		
		<QSInput variableName="input" required layout="column" title="角色名称" v-model="postdata.name" ></QSInput>
		<QSInput variableName="input" required layout="column" title="角色别名" v-model="postdata.nickname" ></QSInput>
		
		
	
		
		<view class="property">
			<view class="title">角色属性</view>
			<view class="one_property">
				<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcInstanceAttrVos[0].name"></QSInput>
				<QSPickerCustom title="请选择跟随玩家" ref="pickerCustom1" pickerTitle="能否跟随玩家" v-model="postdata.npcInstanceAttrVos[0].value" />
			</view>
			<view class="one_property">
				<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcInstanceAttrVos[1].name"></QSInput>
				<QSPickerCustom title="请选择可被询问" ref="pickerCustom2" pickerTitle="可被询问" v-model="postdata.npcInstanceAttrVos[1].value" />
			</view>
			<view class="one_property" v-if="updateview">
					<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcInstanceAttrVos[2].name"></QSInput>
					<QSPickerCustom ref="pickerCustom3" title="请选择所在地点" pickerTitle="所在地点" v-model="postdata.npcInstanceAttrVos[2].value" />
			</view>
			<view class="one_property">
				<QSInput variableName="input" :disabled="true" required layout="row" v-model="postdata.npcInstanceAttrVos[3].name"></QSInput>
				<QSPickerCustom title="请选择能否说话" ref="pickerCustom4" pickerTitle="能否说话" v-model="postdata.npcInstanceAttrVos[3].value" />
			</view>
			<view class="one_property2" v-for="(item, index) of addotherpropertylist">
				<QSInput class="other" variableName="input" required placeholder="属性名称" layout="row" v-model="addotherpropertylist[index].name"></QSInput>
				<QSInput class="other" variableName="input" required placeholder="属性别名" layout="row" v-model="addotherpropertylist[index].nickname"></QSInput>
				<QSInput class="other" variableName="input" required placeholder="属性值" layout="row" v-model="addotherpropertylist[index].value"></QSInput>
			</view>
		</view>
		
		<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="人物简介" v-model="postdata.intro"></QSTextarea>
		<button  class="uni-button2 widthnine" @click="submitdata">{{ operation === 'push' ? '确认添加' : '确认编辑' }}</button>
		
	</view>
</template>

<script>
	import root from '../../../../common/js/root.js';
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue';
	import { pathToBase64, base64ToPath } from '../../../../common/js/base64.js';
export default {
	components: {
		robbyImageUpload
	},
	data() {
		return {
			// 头像
				imageData: [ "http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png"],
				enableDel: true,
				enableAdd: true,
				limitNumber: 1,
			postdata: {
				npcInstanceAttrVos: [
					{
						name: '跟随玩家',
						value: '',
						
						isBase: true
					},
					{
						name: '可被询问',
						value: '',
					
						isBase: true
					},
					{
						name: '所在地点',
						value: '',
						
						isBase: true
					},
					{
						name: '能否说话',
						value: '',
						
						isBase: true
					}
				],
				isBase: false,
				id: '',
				name: '',
				intro: '',
				projectId: '',
				headImgUrl:"",
			    mood: "",
				nickname: "",
				npcClassId: "",
				offline:"",
				voiceClass: "",
				voiceName: ""
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
			pickerValue1: '',
			pickerValue2: '',
			updateview: true,
			
			
		};
	},
	methods: {
		deleteImage(){
			console.log("删除图片")
		// this.imageData.push( "http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png")
			
		},
		addImage(e) {
			let path = e.allImages[0];
			let that = this;
			pathToBase64(path)
				.then(base64 => {
					let url = root.backUrl + '/upload/npc_head_img';
					let postdata = {
						data: base64
					};
					that.$request
						.post(url, postdata)
						.then(res => {
							if (res.code === 1) {
								that.headImgUrl=res.data.absolutePath;
							}
						})
						.catch(error => {
							console.error('error:', error);
						});
				})
				.catch(error => {
					console.error(error);
				});
		},
		//  提交数据
		submitdata() {
			let postdata = JSON.parse(JSON.stringify(this.postdata));
			console.log(this.operation, '状态');
			if (this.operation === 'push') {
				postdata.npcInstanceAttrVos = postdata.npcInstanceAttrVos.concat(this.addotherpropertylist);
				if (postdata.npcInstanceAttrVos[0].value !== '') {
					console.log("发生了")
					let voucher1 = postdata.npcInstanceAttrVos[0].value.data[0];
					if (voucher1 === "否") {
						postdata.npcInstanceAttrVos[0].value = '否';
					} else if (voucher1 === "是") {
						postdata.npcInstanceAttrVos[0].value = '是';
					}
				}
				
				if (postdata.npcInstanceAttrVos[1].value !== '') {
					
					let voucher2 = postdata.npcInstanceAttrVos[1].value.data[0];
					if (voucher2 === "否") {
						postdata.npcInstanceAttrVos[1].value = '否';
					} else if (voucher2 === "是") {
						postdata.npcInstanceAttrVos[1].value = '是';
					}
				}
				if (postdata.npcInstanceAttrVos[2].value !== '') {
					let voucher3 = postdata.npcInstanceAttrVos[2].value.data[0];
					for (var i in this.allMaplist) {
						if (this.allMaplist[i].name === voucher3) {
							postdata.npcInstanceAttrVos[2].value = this.allMaplist[i].id;
						}
					}
				}
				if (postdata.npcInstanceAttrVos[3].value !== '') {
					console.log("发生了")
					let voucher4 = postdata.npcInstanceAttrVos[3].value.data[0];
					if (voucher4 === "否") {
						postdata.npcInstanceAttrVos[3].value = '否';
					} else if (voucher4 === "能") {
						postdata.npcInstanceAttrVos[3].value = '能';
					}
				};
				console.log(postdata, '提交的数据');
							
							
							
							
				
				
				if (!postdata.name) {
					uni.showToast({
						icon: 'none',
						title: '分类名称不能为空'
					});
					return;
				}
				postdata.projectId = this.workinfo.id;
				
				
				return 
				let that = this;
				that.$request
					.post('/goods/class/', postdata)
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
				for (var i in postdata.npcInstanceAttrVos) {
					if (postdata.npcInstanceAttrVos[i].nickname === '') {
						postdata.npcInstanceAttrVos[i].nickname = null;
					}
				}
				postdata.npcInstanceAttrVos = postdata.npcInstanceAttrVos.concat(this.addotherpropertylist);
				if (postdata.npcInstanceAttrVos[0].value !== '') {
					let voucher1 = postdata.npcInstanceAttrVos[0].value.value[0];
					if (voucher1 === 1) {
						postdata.npcInstanceAttrVos[0].value = '否';
					} else if (voucher1 === 0) {
						postdata.npcInstanceAttrVos[0].value = '是';
					}
				}
				if (postdata.npcInstanceAttrVos[1].value !== '') {
					let voucher2 = postdata.npcInstanceAttrVos[1].value.data[0];
					for (var i in this.allNPClist) {
						if (this.allNPClist[i].name === voucher2) {
							postdata.npcInstanceAttrVos[1].value = this.allNPClist[i].id;
						}
					}
				}
				if (postdata.npcInstanceAttrVos[2].value !== '') {
					let voucher3 = postdata.npcInstanceAttrVos[2].value.data[0];
					for (var i in this.allMaplist) {
						if (this.allMaplist[i].name === voucher3) {
							postdata.npcInstanceAttrVos[2].value = this.allMaplist[i].id;
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
					.put('/goods/class/' + '/' + postdata.id + '/', postdata)
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
					that.setPickerDatac();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
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
					if (that.postdata.npcInstanceAttrVos[1].value !== '') {
						let voucher2 = that.postdata.npcInstanceAttrVos[1].value;
						for (var i in that.allNPClist) {
							if (that.allNPClist[i].id === parseInt(voucher2)) {
								that.postdata.npcInstanceAttrVos[1].value = {
									data: [that.allNPClist[i].name],
									value: [parseInt(i)]
								};
								that.$set(that.postdata.npcInstanceAttrVos, 1, that.postdata.npcInstanceAttrVos[1]);
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
					if (that.postdata.npcInstanceAttrVos[2].value !== '') {
						let voucher3 = that.postdata.npcInstanceAttrVos[2].value;
						for (var i in that.allMaplist) {
							if (that.allMaplist[i].id === parseInt(voucher3)) {
								that.postdata.npcInstanceAttrVos[2].value = {
									data: [that.allMaplist[i].name],
									value: [parseInt(i)]
								};
								that.$set(that.postdata.npcInstanceAttrVos, 2, that.postdata.npcInstanceAttrVos[2]);
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
			if(this.updateview === true){
				this.$refs.pickerCustom1.setData(this.inquire);
				this.$refs.pickerCustom2.setData(this.NPClist);
				this.$refs.pickerCustom3.setData(this.Maplist);
			}
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
		if (data.categoryinfo) {
			this.updateview = false;
			console.log(this.updateview, '状态1');
			let category = JSON.parse(data.categoryinfo);
			console.log(category, '接收的数据');
			let addotherpropertylist = [];
			for (var i in category.npcInstanceAttrVos) {
				if (category.npcInstanceAttrVos[i].nickname === null) {
					category.npcInstanceAttrVos[i].nickname = '';
				}
				if (i > 2) {
					addotherpropertylist.push(category.npcInstanceAttrVos[i]);
				}
			}
			this.addotherpropertylist = addotherpropertylist;
			this.postdata = category;
			this.initialize1();
			if (this.postdata.npcInstanceAttrVos[0].value !== '') {
				let voucher1 = this.postdata.npcInstanceAttrVos[0].value;
				if (voucher1 === '是') {
					this.postdata.npcInstanceAttrVos[0].value = {
						data: ['是'],
						value: [0]
					};
				} else if (voucher1 === '否') {
					this.postdata.npcInstanceAttrVos[0].value = {
						data: ['否'],
						value: [1]
					};
				}
			}
			this.operation = 'change';
		} else {
			this.pickerValue1 = '请选择';
			this.pickerValue2 = '请选择';
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
	flex-direction: row;
	border: 1px solid #f8f8f8;
	margin-top: 20upx;
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
.childrenBOX {
	display: flex;
	flex-direction: row;
}
.one_property {
}
.imgbox{
	margin-top: 20upx;
	font-size: 28upx;
	color: #666666;
	text-align: center;
}

.imgbox /deep/ .imageItem{
	margin: auto;
}
.imgbox /deep/ .imageUpload{
	margin: auto;
}

.imageItem /deep/  img{
		border-radius: 100px !important;
}
</style>
