<template>
	<view>
		<button class="margin-top buttonwidth" @click="push_questions()">添加词句转换</button>
		<view class="one_questions" v-for="(item, index) of alldata">
			<view class="uni-list-cell one_input">
				<view class="uni-list-cell-left titlebox special2">话语意图:</view>
				<view class="uni-list-cell-db pickerbox special" @click="show_tree(index)">
					<view class="uni-input">{{ item.conditionNickname ? item.conditionNickname : '请选择' }}</view>
					<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
				</view>
			</view>
			<fa-icon type="plus-circle " size="22" color="#666666" class="text-center" @click="push_original(index)"></fa-icon>
			<view class="original" v-for="(item2, index2) of item.systemWords">
				<view class="leftbox">
					<view class="uni-textarea"><textarea :maxlength="-1" v-model="item2.customs" :auto-height="true" placeholder="多个原句用换行分开" /></view>
					<QSInput variableName="input" required layout="row" title="限定词" v-model="item2.o"></QSInput>
					<QSInput variableName="input" required layout="row" title="关键词" v-model="item2.s"></QSInput>
				</view>

				<view class="rightbox"><fa-icon type="minus " size="22" color="#666666" class="delete_original" @click="delete_original(index, item2)"></fa-icon></view>
			</view>

			<fa-icon type="trash-o operation_icon" size="22" color="#666666" class="delete_icon" @click="delete_questions(item)"></fa-icon>
		</view>
		<button class="margin-top buttonwidth" @click="submitData()">保存问答</button>

		<tki-tree
			ref="tkitree"
			:selectParent="selectParent"
			:multiple="multiple"
			:range="condition"
			rangeKey="nickName"
			@treeItemTap="demo"
			@confirm="treeConfirm"
			@cancel="treeCancel"
		></tki-tree>
	</view>
</template>
<script>
import tkiTree from '@/components/tki-tree/tki-tree.vue';
export default {
	components: {
		tkiTree
	},

	data() {
		return {
			plotID: '',
			alldata: [],
			workinfo: {},
			allNPClist: [],
			Dubbing: [],
			type_index: 1,
			resetview: true,
			npclist: [],
			condition: [],
			multiple: false,
			selectParent: false,
			arr_index: ''
		};
	},
	methods: {
		treeConfirm(e) {
			console.log(e, '看看');
			let item = e[0];
			if (e.length === 0) {
				return;
			}
			let index = this.arr_index;
			this.alldata[index].conditionName = item.name;
			this.alldata[index].conditionNickname = item.nickName;
			console.log(this.alldata, '数据');
		},
		treeCancel() {},
		show_tree(index) {
			console.log(index, '索引');
			this.arr_index = index;
			this.$refs.tkitree._show();
			let that = this;
			let status = 0;
			if (this.condition.length === 0) {
				that.$request
					.post('/condition/all_list?status=' + status)
					.then(res => {
						that.condition = res.data;
					})
					.catch(error => {
						console.log(error);
					});
			} else {
			}
		},
		// 删除问答
		push_questions() {
			let obj = {
				conditionName: '',
				conditionNickname: '',
				systemWords: [
					{
						customs: '',
						o: '',
						s: ''
					}
				]
			};
			this.alldata.unshift(obj);
		},
		//添加词句转换中的原句
		push_original(index) {
			let obj = {
				customs: '',
				o: '',
				s: ''
			};
			this.alldata[index].systemWords.unshift(obj);
		},

		delete_questions(item) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此文本吗?',
				success: function(res) {
					if (res.confirm) {
						var index = that.alldata.indexOf(item);
						if (index !== -1) {
							that.alldata.splice(index, 1);
						}
					} else if (res.cancel) {
					}
				}
			});
		},
		delete_original(index2, item) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此文本吗?',
				success: function(res) {
					if (res.confirm) {
						var index = that.alldata[index2].systemWords.indexOf(item);
						if (index !== -1) {
							that.alldata[index].systemWords.splice(index, 1);
						}
					} else if (res.cancel) {
					}
				}
			});
		},
		// 提交数据
		submitData() {
			let postData = JSON.parse(JSON.stringify(this.alldata));

			for (let i of postData) {
				if (!i.conditionName) {
					uni.showToast({
						title: '请选择话语意图',
						icon: 'none'
					});
					return;
				}
				for (let word of i.systemWords) {
					if (!word.customs) {
						uni.showToast({
							title: '请填入原句',
							icon: 'none'
						});
						return;
					}

					if (!word.o) {
						uni.showToast({
							title: '请填入关键词',
							icon: 'none'
						});
						return;
					}

					if (!word.s) {
						uni.showToast({
							title: '请填入限定词',
							icon: 'none'
						});
						return;
					}

					word.customs = word.customs.replace(/\r/g, '\n');
					word.customs = word.customs.split('\n');
					for (let i = word.customs.length - 1; i >= 0; i--) {
						if (!word.customs[i]) {
							word.customs.splice(i, 1);
						}
					}
				}
			}
			console.log(postData);

			postData = JSON.stringify(postData);

			let that = this;
			that.$request
				.put('/plot/systemCustomWord?projectId=' + that.workinfo.id + '&plotId=' + that.plotID, postData)
				.then(res => {
					if (res.code === 1) {
						uni.showModal({
							title: '提示',
							content: '修改成功',
							cancelText: '继续操作',
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
				.catch(error => {
					console.error('error:', error);
				});

			// for (var item of this.alldata) {

			// }
		},
		// 获取数据
		getalldata() {
			let that = this;
			that.$request
				.get('/plot/systemCustomWord?projectId=' + that.workinfo.id + '&plotId=' + that.plotID)
				.then(res => {
					console.log(res);
					for (var item of res.data) {
						for (var item2 of item.systemWords) {
							item2.customs = item2.customs.join('\n');
						}
					}
					that.alldata = res.data;
				})
				.catch(error => {
					console.error('error:', error);
				});
		}
	},
	onLoad(data) {
		let workinfo = uni.getStorageSync('workinfo');
		this.workinfo = workinfo;
		this.plotID = data.plotId;
		this.getalldata();

		// this.alldata=alldata;
	}
};
</script>

<style>
.text-center {
	text-align: center;
	width: 100%;
	padding: 10upx;
}
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
.uni-textarea {
	padding: 10upx;
	border: 1px solid rgb(242, 242, 242) !important;
}
.special {
	width: 80% !important;
	margin-left: 0px !important;
}
.special2 {
	width: 20% !important;
}
.one_input {
	border-bottom: 1px solid rgb(242, 242, 242);
}
.uni-textarea-textarea {
}
page {
	padding: 20upx;
}
.original {
	display: flex;
	flex-direction: row;
}
.leftbox {
	width: 80%;
}
.rightbox {
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
