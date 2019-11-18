<template>
	<view>
		<button class="margin-top buttonwidth" @click="add()">添加问答</button>
		<view class="one_questions" v-for="(item, index) of alldata">
			<QSInput variableName="input" required layout="row" title="问题" v-model="alldata[index].question"></QSInput>
			<view class="uni-list one_picker">
				<view class="uni-list-cell one_input">
					<view class="uni-list-cell-left titlebox">选择人物:</view>
					<view class="uni-list-cell-db pickerbox">
						<picker @change="utterance_operation1($event, index)" :value="item.NPC_index" :range="allNPClist" range-key="name">
							<view class="uni-input">{{ item.answer.npcName ? item.answer.npcName : '请选择' }}</view>
						</picker>
						<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
					</view>
				</view>
			</view>
			<view class="uni-list one_picker">
				<view class="uni-list-cell one_input">
					<view class="uni-list-cell-left titlebox">选择情绪:</view>
					<view class="uni-list-cell-db pickerbox">
						<picker @change="utterance_operation2($event, index)" :value="item.Mood_index" :range="item.moodList" range-key="label">
							<view class="uni-input">{{ item.answer.mood ? item.answer.mood : '请选择' }}</view>
						</picker>
						<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
					</view>
				</view>
			</view>
			<QSInput variableName="input" required layout="row" title="回答" v-model="alldata[index].answer.content"></QSInput>
			<fa-icon type="trash-o operation_icon" size="28" color="#666666" class="delete_icon" @click="delete_questions(item)"></fa-icon>
		</view>
		<button class="margin-top buttonwidth" @click="submitData()">保存问答</button>
	</view>
</template>
<script>
export default {
	data() {
		return {
			plotID: '',
			alldata: [],
			workinfo: {},
			allNPClist: [],
			Dubbing: [],
			type_index: 1,
			resetview: true
		};
	},
	methods: {
		// 删除问答
		delete_questions(data) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此问答吗?',
				success: function(res) {
					if (res.confirm) {
						var index = that.alldata.indexOf(data);
						if (index !== -1) {
							that.alldata.splice(index, 1);
						}
					} else if (res.cancel) {
					}
				}
			});
		},
		// 选择人物
		utterance_operation1(e, index) {
			this.resetview = false;
			let index2 = e.detail.value;
			let Npc = this.allNPClist[index2];
			if (Npc.offline === true) {
				this.alldata[index].moodList = this.Dubbing.offline[Npc.voiceClass].mood;
				this.alldata[index]['person'] = Npc.voiceClass;
			} else {
				uni.showToast({
					title: '该角色说话风格不存在，请选择说话风格后重试,',
					icon: 'none',
					duration: 2000
				});
				this.alldata[index].answer.mood = '';
				return;
			}
			this.alldata[index].answer.npcId = Npc.id;
			this.alldata[index].answer.npcName = Npc.name;
			this.$nextTick(function() {
				this.resetview = true;
			});
		},
		// 选择情绪
		utterance_operation2(e, index) {
			this.resetview = false;
			let index2 = e.detail.value;
			this.alldata[index].answer.mood = this.alldata[index].moodList[index2];
			this.$nextTick(function() {
				console.log(this.alldata[index].answer.mood, '显示效果');
				this.resetview = true;
			});
		},
		// 获取配音
		getDubbing() {
			let that = this;
			that.$request
				.get('http://didi-gz5.jiaoyou365.com:9663/api/speakers')
				.then(res => {
					console.log(res);
					that.Dubbing = res;
					that.getquestionsList();
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
					that.allNPClist = res.data;
					console.log(that.allNPClist, 'NPC列表');
					that.getDubbing();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		add() {
			let obj = {
				question: '',
				answer: { content: '', npcId: '', npcName: '', mood: '' },
				fType: 0
			};
			this.alldata.unshift(obj);
		},
		// 提交数据
		submitData() {
			let postData = JSON.parse(JSON.stringify(this.alldata));
			for (var item of postData) {
				delete item.moodList;
				delete item.Mood_index;
				delete item.NPC_index;
				if (!item.question) {
					uni.showToast({
						icon: 'none',
						title: '问题不能为空'
					});
					return;
				}
				if (!item.answer.npcId) {
					uni.showToast({
						icon: 'none',
						title: '请选择人物'
					});
					return;
				}
				if (!item.answer.mood) {
					uni.showToast({
						icon: 'none',
						title: '请选择人物情绪'
					});
					return;
				}
				if (!item.answer.content) {
					uni.showToast({
						icon: 'none',
						title: '回答不能为空'
					});
					return;
				}
			}
			let that = this;
			postData = JSON.stringify(postData);
			console.log(postData, '提交的数据');
			that.$request
				.put('/plot/qa/' + that.plotID + '/', postData)
				.then(res => {
					console.log(res);
					if (res.code === 1) {
						uni.showModal({
							title: '提示',
							content: '提交成功',
							cancelText: '继续操作',
							confirmText: '返回剧情跳转',
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
							cancelText: '继续操作',
							confirmText: '返回剧情跳转',
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
		},
		initialize(){
			let data=this.alldata;
			console.log(data,"1")
			console.log(this.allNPClist,"2")
			for(var i in data){
				for(var ii in this.allNPClist){
					if( data[i].answer.npcName  === this.allNPClist[ii].name){
						data[i]["NPC_index"]=ii;
						data[i].moodList = this.Dubbing.offline[this.allNPClist[ii].voiceClass].mood;
						let data2=this.Dubbing.offline[this.allNPClist[ii].voiceClass].mood;
						for(var iii in data2){
							if ( data[i].answer.mood === data2[iii] ){
									data[i]["Mood_index"]=iii;
							}
						}
					}
				}
			};
		},
		getquestionsList() {
			
			uni.showLoading({
			    title: '获取数据中'
			});
			
			let that = this;
			that.$request
				.get('/plot/qa/' + that.plotID + '/')
				.then(res => {
					console.log(res.data);
					that.alldata = res.data;
					that.initialize();
					  uni.hideLoading();
				})
				.catch(Error => {
					console.log(Error);
				});
		}
	},
	onLoad(data) {
		console.log(data.id, 'id');
		let plotID = data.id;
		this.plotID = plotID;
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		this.getNPClist();
	}
};
</script>

<style>
* {
	font-size: 32upx;
	color: #666666;
}
.one_input {
	display: flex;
	flex-direction: row;
	font-size: 32upx;
	color: #666666;
}
.one_picker {
	margin-top: 29upx;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	padding: 10upx;
	font-size: 32upx;
	color: #666666;
}
.titlebox {
	width: 40%;
	box-sizing: border-box;
}
.pickerbox {
	box-sizing: border-box;
	width: 60%;
	margin-left: 50upx;
	position: relative;
	text-align: right;
	padding-right: 50upx;
}
.icon_right {
	position: absolute;
	right: 0px;
	top: 5px;
	font-weight: 100 !important;
}
.one_questions {
	margin-top: 10upx;
	position: relative;
	margin-bottom: 10upx;
	border: 1px solid #585858;
}
.delete_icon {
	position: absolute;
	top: 10upx;
	left: 10upx;
}
</style>
