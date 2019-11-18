<template>
	<view>
		<QSInput variableName="input" required layout="column" title="地点名称" v-model="postdata.name"></QSInput>
		<QSInput variableName="input" layout="column" title="地点别名" placeholder="多个地点别名用逗号分隔" v-model="postdata.nickname"></QSInput>
		<QSRadio variableName="radio" class="addboder" layout="row" title="到达条件" v-model="postdata.goFlag" :itemArray="placeLevel"></QSRadio>
		<QSCheckbox
			variableName="checkbox"
			value="ableGoName.name"
			class="addboder"
			layout="column"
			title="可去地点"
			v-model="postdata.ableGoName"
			:itemArray="ableGoName"
			@chane="demo"
		></QSCheckbox>
		<QSTextarea variableName="textarea" textareaWidth="100" layout="column" title="地点简介" v-model="postdata.intro"></QSTextarea>
		<button class="margin-top buttonwidth widthnine " @click="senddata">{{ buttonname }}</button>
	</view>
</template>
<script>
import { speCharCheck, lg_cn_Check } from '../../../common/js/verification.js';

export default {
	data() {
		return {
			workinfo: {},
			postdata: {
				name: '',
				nickname: '',
				goFlag: '',
				ableGoName: [],
				ableGo: [],
				intro: '',
				isBase: '',
				isBase: false,
				projectId: ''
			},
			placeLevel: [{ value: 1, name: '相邻可达' }, { value: 2, name: '相通可达' }, { value: 3, name: '任意可达' }, { value: 4, name: '不可到达' }],
			ableGoName: [],
			buttonname: '增加地点',
			operation_type:"push",
		};
	},
	methods: {
		//获取地点
		getdatalist() {
			console.log(this.workinfo, '当前作品数据');
			let that = this;
			that.$request
				.get('/place/?projectId=' + that.workinfo.id)
				.then(res => {
					let arr = [];
					for (var i in res.data) {
						let obj = {
							name: res.data[i].name,
							value: res.data[i].id
						};
						arr.push(obj);
					}
					that.ableGoName = arr.filter( item=> item.name !=="任意地点" &&  item.name !=="不可见区域" );
				})
				.catch(error => {
					console.error('error:', error);
				});	
		},
		// 确认发送数据
		senddata() {
			let postdata = JSON.parse(JSON.stringify(this.postdata));
			if(this.operation_type === "push"){
				if(postdata.name ===""){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '请输入地点名'
					});
					return;
				}
				if (postdata.nickname) {
					let reg = postdata.nickname.replace(/，/g, ',');
					let nicknameList = reg.split(',');
					for (let item of nicknameList) {
						let regNickName = item.replace(/｛/g, '{');
						regNickName = regNickName.split('{')[0];
						let cnCheck = lg_cn_Check(regNickName);
						if (!cnCheck) {
							uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: '地点别名只能输入中文、数字与逗号'
							});
							return;
						}
					}
					postdata.nickname = reg;
				}
				postdata.projectId = this.workinfo.id;
				if (postdata.ableGoName.length === 0) {
					postdata.ableGoName = "";
					postdata.ableGo = [];
				}
				if (postdata.ableGoName.length !== 0) {
					for (var i in postdata.ableGoName) {
						for (var ii in this.ableGoName) {
							if (postdata.ableGoName[i] === this.ableGoName[ii].value) {
								postdata.ableGo.push(this.ableGoName[ii].value);
							}
						}
					}
					let arr = [];
					for (var o in postdata.ableGoName) {
						for (var oo in this.ableGoName) {
							if (postdata.ableGoName[o] === this.ableGoName[ii].value){
								arr.push(this.ableGoName[oo].name);
							} 
						}
					}
					postdata.ableGoName = arr;
					postdata.ableGoName = postdata.ableGoName.join(',');
				}
				console.log(postdata, '提交的数据');
				uni.showLoading({
					title: '添加地点中'
				});
				let that = this;
				this.$request
					.post('/place/', postdata)
					.then(res => {
						uni.hideLoading();
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '添加地点成功',
								cancelText: '继续添加',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										that.is_typeshow = false;
										that.getdatalist();
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
										that.getdatalist();
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
										that.is_typeshow = false;
										that.getdatalist();
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
										that.getdatalist();
									}
								}
							});
						}
						console.log(res);
					})
					.catch(erro => {
						console.log(erro);
					});
			} else if(this.operation_type === "change"){
					console.log(postdata, '提交的数据1');
				if(postdata.name ===""){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '请输入地点名'
					});
					return;
					
				}
				if (postdata.nickname) {
					let reg = postdata.nickname.replace(/，/g, ',');
					let nicknameList = reg.split(',');
					for (let item of nicknameList) {
						let regNickName = item.replace(/｛/g, '{');
						regNickName = regNickName.split('{')[0];
						let cnCheck = lg_cn_Check(regNickName);
						if (!cnCheck) {
							uni.showToast({
								icon: 'none',
								position: 'bottom',
								title: '地点别名只能输入中文、数字与逗号'
							});
							return;
						}
					}
					postdata.nickname = reg;
				}
				postdata.projectId = this.workinfo.id;
				if (postdata.ableGoName.length === 0) {
					postdata.ableGoName = "";
					postdata.ableGo = [];
				}
				if (postdata.ableGoName.length !== 0) {
					let arr=[];
					for (var i in postdata.ableGoName) {
						for (var ii in this.ableGoName) {
							if (postdata.ableGoName[i] == this.ableGoName[ii].value) {
								arr.push( this.ableGoName[ii].value )
								
							}
						}
					}
					postdata.ableGo=arr;
					let arr2 = [];
					for (var o in postdata.ableGoName) {
						for (var oo in this.ableGoName) {
							if (postdata.ableGoName[o] == this.ableGoName[oo].value) {
								arr2.push( this.ableGoName[oo].name )
							}
						}
					}
					postdata.ableGoName = arr2;
					postdata.ableGoName = postdata.ableGoName.join(',');
				}
				console.log(postdata, '提交的数据');
				uni.showLoading({
					title: '添加地点中'
				});
				let that = this;
				
				
					
					
				this.$request
					.put('/place/'+postdata.id+'/', postdata)
					.then(res => {
						uni.hideLoading();
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '修改地点成功',
								cancelText: '继续修改',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										that.is_typeshow = false;
										that.getdatalist();
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
										that.getdatalist();
									}
								}
							});
						} else {
							uni.showModal({
								title: '提示',
								content: res.msg,
								cancelText: '继续修改',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										that.is_typeshow = false;
										that.getdatalist();
										uni.navigateBack({
											delta: 1
										});
									} else if (res.cancel) {
										that.getdatalist();
									}
								}
							});
						}
						console.log(res);
					})
					.catch(erro => {
						console.log(erro);
					});
			}
		}
	},
	onShow() {
	
	},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		if( data.mapinfo){
			this.buttonname="修改地点"
			this.getdatalist();
			this.operation_type="change";
			let postdata=JSON.parse(data.mapinfo);
			console.log(postdata,"接受的数据")
			
			let arr = [];
			for (var i in this.ableGoName) {
				if( postdata.name !== this.ableGoName[i].name){
					let obj = {
						name: this.ableGoName[i].name,
						value: this.ableGoName[i].name
					};
					arr.push(obj);
				}
			}
			this.ableGoName = arr;
			this.postdata=postdata;
			let arr2=postdata.ableGo.map( (item)=>{
				return parseInt(item)
			} )
			this.postdata.ableGoName=arr2;
			console.log(this.postdata.ableGoName,"转换类型后的数据" )
		}else{
			this.getdatalist();
			this.operation_type="push"
			this.buttonname="增加地点"
			this.postdata={
					name: '',
					nickname: '',
					goFlag: '',
					ableGoName: [],
					ableGo: [],
					intro: '',
					isBase: false,
					projectId: ''
			};
		}
	},
	mounted: function() {}
};
</script>

<style>
.margin-top {
	margin-top: 20upx;
}
.addboder {
	border-bottom: 1px solid #f2f2f2;
}

</style>
