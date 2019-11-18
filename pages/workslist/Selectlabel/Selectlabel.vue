<template>
	<view>
		<view class="toptitle">标签列表</view>
		<uni-collapse @change="change">
			<checkbox-group class="uni-list" @change="checkboxChange">
				<uni-collapse-item v-for="(item, index) of labels" :title="item.name">
					<uni-list class="contentbox">
						<label class="uni-list-cell uni-list-cell-pd" v-for="oneitem in item.labels" :key="oneitem.id">
							<view>
								<checkbox :value="oneitem.id" :checked="oneitem.checked"></checkbox>
								<view>{{ oneitem.name }}</view>
							</view>
						</label>
					</uni-list>
				</uni-collapse-item>
			</checkbox-group>
		</uni-collapse>
	<!-- 	<catLabel dataType="text" inputType="text" text="自定义标签" v-model="manual_labels" class="manual_labels" placeholder="每个标签用逗号隔开" />
		<button class="mini-btn addbutton" type="default" size="mini" @click="manuallabels">生成自定义标签</button> -->
		<view class="fatherbox">
			<!-- <view class="toptitle">已选标签（点击可删除标签）</view> -->
			<view class="toptitle">已选标签</view>
			<view class="deposit">
				<!-- <view text="标签" type="danger" class="onetag" inverted="false" v-for="(item,index) in selected " @click="deletetag(item,index)">{{item.name}}</view> -->
				<view text="标签" type="danger" class="onetag" inverted="false" v-for="(item, index) in selected">{{ item.name }}</view>
			</view>
		</view>
		<button class="mini-btn addbutton" type="default" @click="addlables">确定选择</button>
	</view>
</template>
<script>
import catLabel from '@/components/cat-label/cat-label.vue';
import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue';
import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue';

export default {
	components: {
		catLabel,
		uniCollapse,
		uniCollapseItem,
		uniList,
		uniListItem,
		uniTag
	},
	data() {
		return {
			labels: [],
			manual_labels: '',
			arr: [], //选择框加入的
			arr2: [], //输入框加入的
			selected: []
		};
	},
	methods: {
		change() {},
		// 选择单个标签
		checkboxChange(e) {
			let idarr = e.target.value;
			let onetag = {
				id: null,
				name: ''
			};
			let checkboxarr = [];
			let labels = this.labels;
			for (var i in labels) {
				for (var ii in labels[i].labels) {
					for (var iii in idarr) {
						if (idarr[iii] == labels[i].labels[ii].id) {
							checkboxarr.push({
								id: null,
								name: labels[i].labels[ii].name
							});
						}
					}
				}
			}
			this.arr = checkboxarr;
			this.selected = [...this.arr, ...this.arr2];
			console.log(this.labels, '点击后');
		},
		manuallabels() {
			// let str = this.manual_labels;
			// str = str.replace(/，/g, ',');
			// let arr = str.split(',');
			// let dearr = Array.from(new Set(arr));
			// let arr2 = [];
			// for (var i in dearr) {
			// 	arr2.push({
			// 		id: null,
			// 		name: dearr[i]
			// 	});
			// }
			// this.arr2 = arr2;
			// this.selected = [this.selected, ...this.arr2];
		},
		deletetag(item, index) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此标签吗?',
				success: function(res) {
					if (res.confirm) {
						let name = item.name;
						console.log(name, '被删除的名字');
						that.selected.splice(index, 1);
						console.log(that.selected, '啥');
						for (var i in that.labels) {
							for (var ii in that.labels[i].labels) {
								for (var iii in that.selected) {
									that.labels[i].labels[ii].checked = false;
									if (that.selected[iii].name === that.labels[i].labels[ii].name) {
										that.labels[i].labels[ii].checked = true;
									}
								}
							}
						}
						console.log(that.labels, '删除后变化的原数组');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		addlables() {
			let data = JSON.stringify(this.selected);
			uni.navigateTo({
				url: '../editorform/editorform?data=' + data
			});
		}
	},
	onShow() {
	},
	onLoad: function(options) {
		let labels = JSON.parse(uni.getStorageSync('LabelList'));
		for (var item of labels) {
			for (var item2 of item.labels) {
				if (item2.id !== null) {
					item2.id = item2.id.toString();
				}
				item2['checked'] = false;
			}
		}
		this.labels = labels;
		// 初始化标签显示
		let openiddata = JSON.parse(options.data);
		this.selected = openiddata;
		console.log(openiddata, '标签页接收的数据');
		for (var i of this.selected) {
			for (var item of labels) {
				for (var item2 of item.labels) {
					if (i.name === item2.name) {
						item2['checked'] = true;
					}
				}
			}
		}
		
		this.labels = labels;
	}
};
</script>

<style>
.toptitle {
	width: 100%;
	padding: 20upx;
	text-align: center;
	font-size: 32upx;
}

.contentbox {
	padding: 30upx;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}

.contentbox .uni-list-cell {
	/* flex: 1; */
	margin-bottom: 10upx;
	width: 20%;
	font-size: 32upx;
	text-align: center;
	border-right: 1px solid rgb(248, 248, 248);
}

.contentbox .uni-list {
	padding: 30upx;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}

.manual_labels {
	margin-top: 60upx;
}

.addbutton {
	margin-top: 20px;
	width: 100%;
}

.onetag {
	background: #fff !important;
	border: 1px solid #4cd964;
	width: auto;
	margin: 10upx;
	padding: 10upx;
	font-size: 16upx;
}

.deposit {
	/* padding: 20px; */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.fatherbox {
	display: flex;
	flex-direction: column;
	border: 1px solid #eoeoeo;
}
</style>
