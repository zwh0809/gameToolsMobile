<template>
	<view>
		<QSInput variableName="input" required layout="row" title="剧情编号" v-model="postdata.plotNum"></QSInput>
		<view class="oneselect" v-if="resetbox">
			<view class="selecttitle">剧情分组</view>
			<xfl-select
				:list="Dramllist"
				:clearable="false"
				:showItemNum="5"
				:isCanInput="false"
				:placeholder="'请选择'"
				:selectHideType="'hideAll'"
				class="selectobx"
				@change="selectvalue"
				:initValue="postdata.initialize1"
			></xfl-select>
		</view>

		<view class="property">
			<view class="title row">
				<view class="">对话信息</view>
				<fa-icon type="plus-square-o " class="icon" size="20" color="#32CD32" @click="addotherproperty"></fa-icon>
			</view>
			<view class="one_talk" v-for="(item2, index) of postdata.plotTextVos">
				<fa-icon type="minus-square-o" class="one_talk_icon" size="16" color="#DC143C" @click="deleteohter(item2)"></fa-icon>
				<view class="oneselect">
					<view class="selecttitle">对话角色</view>
					<xfl-select
						:list="NPClist"
						:clearable="false"
						:showItemNum="5"
						:isCanInput="false"
						:placeholder="'请选择'"
						:selectHideType="'hideAll'"
						class="selectobx"
						:initValue="postdata.plotTextVos[index].npcName"
						@change="selectvalue3(index, $event)"
					></xfl-select>
				</view>
				<view class="oneselect">
					<view class="selecttitle">对话情绪</view>
					<xfl-select
						:list="postdata.plotTextVos[index].moodList"
						:clearable="false"
						:showItemNum="5"
						:isCanInput="false"
						:placeholder="'请选择'"
						:selectHideType="'hideAll'"
						class="selectobx"
						:initValue="postdata.plotTextVos[index].mood"
						@change="selectvalue4(index, $event)"
					></xfl-select>
				</view>
				<QSTextarea variableName="textarea" :textareaWidth="100" layout="row" title="对话文本" v-model="postdata.plotTextVos[index].content"></QSTextarea>
			</view>
		</view>
		<view class="oneselect">
			<view class="selecttitle">对话地点</view>
			<xfl-select
				:list="Maplist"
				@change="selectvalue2"
				:clearable="false"
				:showItemNum="5"
				:isCanInput="false"
				:placeholder="'请选择'"
				:selectHideType="'hideAll'"
				class="selectobx"
				:initValue="postdata.plotPlaceName"
			></xfl-select>
		</view>
		<QSTextarea variableName="textarea" :textareaWidth="100" layout="column" title="剧情备注" v-model="postdata.note"></QSTextarea>
		<button class="m-top" @click="submitdata">{{ operation === 'push' ? '确认添加' : '确认编辑' }}</button>
	</view>
</template>
<script>
import { listSort } from '../../../../common/listSort.js';
export default {
	data() {
		return {
			postdata: {
				categoryId: '',
				note: '',
				plotNum: '',
				plotPlaceId: '', //地点ID
				plotPlaceName: '', // 地点名字
				plotTextVos: [
					{
						content: '',
						mood: '',
						npcId: '',
						npcName: '',
						offline: '',
						moodList: []
					}
				] // 对话文本
			},
			NPClist: [],
			Maplist: [],
			Dramllist: [],
			allNPClist: [],
			allMaplist: [],
			allDramllist: [],
			moodList: [],
			allMoodList: [],
			Dubbing: {}, // 配音角色
			addotherpropertylist: [],
			workinfo: {},
			operation: 'push',
			updateview: true,
			categoryId: '',
			resetbox: true
		};
	},
	methods: {
		// 选中剧情
		selectvalue({ newVal, oldVal, index, orignItem }) {
			let arrindex = index;
			this.postdata.categoryId = this.allDramllist[arrindex].id;
			console.log(this.postdata.categoryId, 'c此时的ID');
			this.getdatalist(this.postdata.categoryId);
		},
		// 选中地点
		selectvalue2({ newVal, oldVal, index, orignItem }) {
			let arrindex = index;
			this.postdata.plotPlaceId = this.allMaplist[arrindex].id;
			this.postdata.plotPlaceName = this.allMaplist[arrindex].name;
			console.log(this.postdata, '表单数据');
		},
		// 选中角色
		selectvalue3(itemindex, { newVal, oldVal, index, orignItem }) {
			// this.ishsow=false
			let arrindex = index;
			let Npc = this.allNPClist[arrindex];
			console.log(Npc, '数据');
			if (Npc.offline === true) {
			} else {
				uni.showToast({
					title: '该角色说话风格不存在，请选择说话风格后重试,',
					icon: 'none',
					duration: 2000
				});
				this.postdata.plotTextVos[itemindex].mood = '';
				return;
			}
			if (Npc.offline === true) {
				this.postdata.plotTextVos[itemindex].moodList = this.Dubbing.offline[Npc.voiceClass].mood;
				this.postdata.plotTextVos[itemindex].offline = true;
			} else {
				this.postdata.plotTextVos[itemindex].moodList = this.Dubbing.online[Npc.voiceClass].mood;
				this.postdata.plotTextVos[itemindex].offline = false;
			}
			this.postdata.plotTextVos[itemindex].npcId = Npc.id;
			this.postdata.plotTextVos[itemindex].npcName = Npc.name;
			this.postdata.plotTextVos[itemindex].mood = Npc.mood;
			console.log(itemindex, '对话列表索引');
			console.log(this.postdata.plotTextVos, '列表数据');
		},
		// 选中情绪
		selectvalue4(itemindex, { newVal, oldVal, index, orignItem }) {
			this.postdata.plotTextVos[itemindex].mood = newVal;
		},
		// 获取所有剧情
		getdatalist(id) {
			let num = '';
			console.log(this.allDramllist, '列表');
			console.log();
			for (var item of this.allDramllist) {
				if (parseInt(this.postdata.categoryId) === item.id) {
					num = item.num;
				}
			}
			console.log(num, '基数');
			let that = this;
			that.$request
				.get('/plot/text/?categoryId=' + id)
				.then(res => {
					if (res.code === 1) {
						let data = res.data;
						data = listSort(data);
						if (that.operation === 'push') {
							// 新建作品时得到的默认编号
							let plotNum = '';
							if (data.length === 0) {
								plotNum = num + '-' + 1;
							} else {
								let max = 0;
								for (let i of data) {
									if (max < parseInt(i.plotNum.split('-')[1].split('-')[0])) {
										max = JSON.parse(parseInt(i.plotNum.split('-')[1].split('-')[0]));
									}
								}
								plotNum = num + '-' + (max + 1);
							}
							that.postdata.plotNum = plotNum;
						}
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		getdramaList() {
			let that = this;
			that.$request
				.get('/plot/category/?projectId=' + that.workinfo.id)
				.then(res => {
					if (res.code === 1) {
						let arr = [];
						for (var i in res.data) {
							arr.push(res.data[i].name);
						}
						that.allDramllist = res.data;
						that.Dramllist = arr;
						console.log(that.allDramllist, '剧情列表');
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		//  提交数据
		submitdata() {
			let postdata = JSON.parse(JSON.stringify(this.postdata));
			console.log(this.operation, '状态');

			for (var i in postdata.plotTextVos) {
				delete postdata.plotTextVos[i].moodList;
			}
			console.log(postdata, '提交的数据');

			if (this.operation === 'push') {
				if (!postdata.plotNum) {
					uni.showToast({
						icon: 'none',
						title: '请添加剧情编号'
					});
					return;
				}
				if (!postdata.categoryId) {
					uni.showToast({
						icon: 'none',
						title: '请选择剧情分组'
					});
					return;
				}

				for (var i in postdata.plotTextVos) {
					if (!postdata.plotTextVos[i].content || !postdata.plotTextVos[i].mood || !postdata.plotTextVos[i].npcId || !postdata.plotTextVos[i].npcName) {
						uni.showToast({
							icon: 'none',
							title: '请完善对话信息'
						});
						return;
					}
				}
				if (!postdata.plotPlaceId || !postdata.plotPlaceName) {
					uni.showToast({
						icon: 'none',
						title: '请选择对话地点'
					});
					return;
				}
				console.log(postdata, '提交的数据');
				let that = this;
				that.$request
					.post('/plot/text/', postdata)
					.then(res => {
						console.log(res);
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '添加剧情成功',
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
				delete postdata.initialize1;
				delete postdata.isAddBranch;
				if (!postdata.plotNum) {
					uni.showToast({
						icon: 'none',
						title: '请添加剧情编号'
					});
					return;
				}
				if (!postdata.categoryId) {
					uni.showToast({
						icon: 'none',
						title: '请选择剧情分组'
					});
					return;
				}

				for (var i in postdata.plotTextVos) {
					if (!postdata.plotTextVos[i].content || !postdata.plotTextVos[i].mood || !postdata.plotTextVos[i].npcId || !postdata.plotTextVos[i].npcName) {
						uni.showToast({
							icon: 'none',
							title: '请完善对话信息'
						});
						return;
					}
				}
				if (!postdata.plotPlaceId || !postdata.plotPlaceName) {
					uni.showToast({
						icon: 'none',
						title: '请选择对话地点'
					});
					return;
				}
				for (var i in postdata.plotTextVos) {
					for (var ii in this.allNPClist) {
						if (postdata.plotTextVos[i].npcName === this.allNPClist[ii].name) {
							postdata.plotTextVos[i].offline = this.allNPClist[ii].offline;
						}
					}
				}
				console.log(postdata, '提交的数据');
				let that = this;
				that.$request
					.put('/plot/text/' + that.workinfo.id + '/', postdata)
					.then(res => {
						console.log(res);
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '编辑剧情成功',
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
			if (this.postdata.plotTextVos.length === 1) {
				uni.showToast({
					icon: 'none',
					title: '最少保留一个对话'
				});
				return;
			}
			var index = this.postdata.plotTextVos.indexOf(item);
			if (index !== -1) {
				this.postdata.plotTextVos.splice(index, 1);
			}
		},
		addotherproperty() {
			let obj = {
				content: '',
				mood: '',
				npcId: '',
				npcName: '',
				offline: '',
				moodList: []
			};
			this.postdata.plotTextVos.push(obj);
		},
		// 获取地点
		getmaplist() {
			let that = this;
			that.$request
				.get('/place/?projectId=' + that.workinfo.id)
				.then(res => {
					let arr = [];
					for (var i in res.data) {
						arr.push(res.data[i].name);
					}
					that.allMaplist = res.data;
					that.Maplist = arr;
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取NPC
		getNPClist() {
			let that = this;
			that.$request
				.get('/npc/instance_by_project_id/' + that.workinfo.id + '/')
				.then(res => {
					let arr = [];
					for (var i in res.data) {
						arr.push(res.data[i].name);
					}
					that.allNPClist = res.data;
					that.NPClist = arr;
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取配音
		getDubbing() {
			let that = this;
			that.$request
				.get('http://didi-gz5.jiaoyou365.com:9663/api/speakers')
				.then(res => {
					console.log(res);
					this.Dubbing = res;
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
					console.log(that.updateview, '此时的updateview');
					that.$nextTick(function() {});
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 初始化剧情编号
		initializeprojectId() {
			let that = this;
			that.$request
				.get('/plot/category/?projectId=' + that.workinfo.id)
				.then(res => {
					if (res.code === 1) {
						let arr = [];
						for (var i in res.data) {
							arr.push(res.data[i].name);
						}
						that.allDramllist = res.data;
						that.Dramllist = arr;
						this.resetbox = false;
						that.allDramllist.filter((item, index, arr) => {
							if (item.id === that.postdata.categoryId) {
								console.log(item, '匹配的数据');
								that.postdata['initialize1'] = item.name;
							}
						});
						that.$nextTick(function() {
							this.resetbox = true;
							console.log(that.postdata.initialize1, '匹配的剧情分组---');
						});
						console.log(that.allDramllist, '剧情列表');
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		}
	},
	mounted() {},
	onShow() {},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		console.log(data, '页面数据');
		if (data.transmitdata) {
			this.getmaplist();
			this.getNPClist();
			this.getDubbing();
			this.getdramaList();
			const transmitdata = JSON.parse(decodeURIComponent(data.transmitdata));
			console.log(transmitdata, '接收的数据');
			this.categoryId = transmitdata.categoryId;
			this.operation = 'push';
		} else if (data.DramaGrouping) {
			this.getmaplist();
			this.getNPClist();
			this.getDubbing();
			this.getdramaList();
			const DramaGrouping = JSON.parse(decodeURIComponent(data.DramaGrouping));
			console.log(DramaGrouping, '接收的数据');
			this.postdata = DramaGrouping;

			this.postdata.categoryId = DramaGrouping.categoryId;
			console.log(this.postdata.categoryId, 'categoryId');
			this.operation = 'change';

			this.initializeprojectId();
			// this.postdata["initialize1"]="大dd"

			// let id=DramaGrouping.categoryId;
			// console.log(this.allMaplist,"地图列表")
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

.othermm /deep/ .flex_row_e_c {
	color: #666666 !important;
}
.childrenBOX {
	display: flex;
	flex-direction: row;
}
.one_property {
}
.one_talk {
	padding-top: 20upx;
	margin-top: 20upx;
	border-top: 1upx solid #eaeefb;
	border-bottom: 1upx solid #eaeefb;
	margin-bottom: 20upx;
}
.row {
	display: flex;
	flex-direction: row;
}
.icon {
	margin-top: 3upx;
	margin-left: 60upx;
}
.one_talk {
	position: relative;
}
.one_talk_icon {
	position: absolute;
	top: 10upx;
	left: 10upx;
}
.m-top {
	margin: 20upx;
}
</style>
