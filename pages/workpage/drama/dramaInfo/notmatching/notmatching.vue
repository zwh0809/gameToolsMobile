<template>
	<view>
		<button class="margin-top buttonwidth" @click="add()">添加问答</button>
		<view class="one_questions" v-for="(item, index) of alldata" v-if="resetview">
			<view class="uni-list one_picker">
				<view class="uni-list-cell one_input">
					<view class="uni-list-cell-left titlebox">选择人物:</view>
					<view class="uni-list-cell-db pickerbox">
						<picker @change="utterance_operation1($event, index)" :value="item.NPC_index" :range="allNPClist" range-key="name">
							<view class="uni-input">{{ item.npcName ? item.npcName : '请选择' }}</view>
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
							<view class="uni-input">{{ item.mood ? item.mood : '请选择' }}</view>
						</picker>
						<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
					</view>
				</view>
			</view>
			<view class="uni-textarea"><textarea class="textarea_box" v-model="item.content" :auto-height="false" /></view>		
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
			resetview: true,
			npclist: []
		};
	},
	methods: {
		// 删除问答
		delete_questions(data) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此文本吗?',
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
			} else {
				uni.showToast({
					title: '该角色说话风格不存在，请选择说话风格后重试,',
					icon: 'none',
					duration: 2000
				});
				this.alldata[index].mood = '';
				return;
			}
			this.alldata[index].npcId = Npc.id;
			this.alldata[index].npcName = Npc.name;
			this.$nextTick(function() {
				this.resetview = true;
			});
		},
		// 选择情绪
		utterance_operation2(e, index) {
			this.resetview = false;
			let index2 = e.detail.value;
			this.alldata[index].mood = this.alldata[index].moodList[index2];
			this.$nextTick(function() {
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
					let NPClist = that.npclist;
					let newarr = res.data.filter((item, index, arr) => {
						for (var i in NPClist) {
							if (item.name === NPClist[i] || item.name === '旁白') {
								return item;
							}
						}
					});
					that.allNPClist = newarr;
					that.getDubbing();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		add() {
			let obj = {
				content: '',
				mood: '',
				npcId: '',
				npcName: ''
			};
			this.alldata.unshift(obj);
			console.log(this.alldata);
		},
		// 提交数据
		submitData() {
			for (var item of this.alldata) {
				delete item.Mood_index;
				delete item.NPC_index;
				delete item.moodList;
			}
			console.log(this.alldata, '数据');
		},
		getquestionsList() {
			this.resetview=false
			let data = this.alldata;
			console.log(data, '1');
			console.log(this.allNPClist, '2');
			for (var i in data) {
				for (var ii in this.allNPClist) {
					if (data[i].npcName === this.allNPClist[ii].name) {
						data[i]['NPC_index'] = ii;
						data[i].moodList = this.Dubbing.offline[this.allNPClist[ii].voiceClass].mood;
						let data2 = this.Dubbing.offline[this.allNPClist[ii].voiceClass].mood;
						for (var iii in data2) {
							if (data[i].mood === data2[iii]) {
								data[i]['Mood_index'] = iii;
							}
						}
					}
				}
			};
			
			this.$nextTick(function(){
				this.resetview=true
			})
		}
	},
	onLoad(data) {
		console.log(JSON.parse(decodeURIComponent(data.npclist)));

		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		const alldata = JSON.parse(decodeURIComponent(data.plotUnknowText));
		const npclist = JSON.parse(decodeURIComponent(data.npclist));

		this.alldata = alldata;
		this.npclist = npclist;

		console.log(alldata, 'alldata');
		this.getNPClist();
		// this.alldata=alldata;
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
	padding-top: 50upx;
	border: 1px solid #585858;
}
.delete_icon {
	position: absolute;
	top: 10upx;
	left: 10upx;
}
.one_questions /deep/ .marginRight5 {
	padding: 0px;
	margin: 0px;
	flex: none !important;
}
.uni-textarea{
	padding: 10upx;
}
.textarea_box{
	width: 100% !important;
}
</style>
