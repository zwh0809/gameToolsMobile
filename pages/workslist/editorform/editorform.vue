<template>
	<view class="editor">
		<catLabel dataType="text" inputType="text" text="作品名称" hasX v-model="workData.name" />
		<catLabel dataType="text" inputType="text" text="作品别名" v-model="workData.nicknames" />
		<catLabel
			text="功能用途"
			v-model="workData.edition"
			@handSelect="worktype_handSelect"
			:initIndex="worktype_initIndex"
			dataType="selector"
			:selectList="selector_worktype"
			hasX
		/>

		<view class="crowdbox">
			<radio-group class="uni-list" @change="radioChange">
				<view class="title requried">版本类型</view>
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in editionItems" :key="item.value">
					<view><radio :value="item.value" :checked="index === editionItems_current" /></view>
					<view>{{ item.name }}</view>
				</label>
			</radio-group>
		</view>

		<!-- <catLabel text="版本类型" @handSelect="editionList_handSelect" :initIndex="editionList_initIndex" dataType="selector" :selectList="editionList" hasX /> -->
		<view class="imgbox">
			<view class="title requried">作品封面</view>
			<robby-image-upload v-model="imageData" @delete="deleteImage" @add="addImage" :enable-del="enableDel" :enable-add="enableAdd" :limit="limitNumber"></robby-image-upload>
		</view>
		<catLabel text="作品简介" dataType="textarea" :textareaLength="1024" v-model="workData.intro" hasX />
		<view class="crowdbox">
			<radio-group class="uni-list" @change="radioChange3">
				<view class="title requried">作品资费</view>
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in freeItems" :key="item.value">
					<view><radio :value="item.value" :checked="index === free_current" /></view>
					<view>{{ item.name }}</view>
				</label>
			</radio-group>
		</view>

		<!-- <catLabel text="作品资费" @handSelect="ispay_handSelect" :initIndex="ispay_initIndex" dataType="selector" :selectList="ispay_worktype" hasX /> -->
		<view class="labbox" @click="goSelectlabel"><catLabel text="作品标签" :dataText="label" hasX /></view>
		<view class="crowdbox">
			<radio-group class="uni-list" @change="radioChange2">
				<view class="title requried">难易程度</view>
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in degreeItems" :key="item.value">
					<view><radio :value="item.value" :checked="index === degree_current" /></view>
					<view>{{ item.name }}</view>
				</label>
			</radio-group>
		</view>
		<view class="crowdbox">
			<checkbox-group class="uni-list" @change="checkboxChange">
				<view class="title requried">适宜人群</view>
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
					<view>
						<checkbox :value="item.value" :checked="item.checked"></checkbox>
						<view>{{ item.value }}</view>
					</view>
				</label>
			</checkbox-group>
		</view>
		<catLabel dataType="text" inputType="text" text="作者名称" v-model="workData.userNickname" hasX />
		<catLabel text="创作者说" dataType="textarea" :textareaLength="1024" v-model="workData.preface" hasX />
		<!-- <catLabel text="启动选项" hasR icon="arrowright" @handSelect="start_handSelect" :initIndex="start_initIndex" dataType="selector" :selectList="start_worktype" /> -->
		<uni-collapse @change="change">
			<uni-collapse-item title="其他">
				<uni-list>
					<view class="crowdbox">
						<radio-group class="uni-list" @change="radioChange4">
							<view class="title requried">启动选项</view>
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in startItems" :key="item.value">
								<view><radio :value="item.value" :checked="index === start_current" /></view>
								<view>{{ item.name }}</view>
							</label>
						</radio-group>
					</view>

					<view class="crowdbox">
						<checkbox-group class="uni-list" @change="checkboxChange2">
							<view class="title">选项设置</view>
							<label class="uni-list-cell uni-list-cell-pd" v-for="item in settingworktype" :key="item.name">
								<view>
									<checkbox :value="item.name" :checked="item.checked"></checkbox>
									<view>{{ item.value }}</view>
								</view>
							</label>
						</checkbox-group>
					</view>
					<catLabel dataType="text" inputType="text" text="表单网站" v-model="workData.postURL" />
					<catLabel dataType="text" inputType="text" text="配置参数" v-model="workData.configContent" />
					<view class="crowdbox2">
						<view class="title">自动存档</view>
						<view class="switchbox"><switch @change="switch1Change" :checked="hadOpen" /></view>
					</view>
				</uni-list>
			</uni-collapse-item>
		</uni-collapse>
		<button  class="margin-top widthnine" @click="adddata">添加作品</button>
	</view>
</template>

<script>
import catLabel from '@/components/cat-label/cat-label.vue';
var checker = require('@/common/checker.js');
import root from '../../../common/js/root.js';
import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue';
import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue';
import { pathToBase64, base64ToPath } from '../../../common/js/base64.js';
export default {
	components: {
		catLabel,
		uniCollapse,
		uniCollapseItem,
		uniList,
		uniListItem,
		robbyImageUpload
	},
	data() {
		return {
			// 账号信息
			userinfo: {},
			// 图片上传组件
			imageData: '',
			fileList: '',
			enableDel: true,
			limitNumber: 1,
			enableAdd: true,
			img: '',
			bannerImgUrl: '',
			// 图片上传组件
			hadOpen: true,
			// 新建作品数据
			worktype_initIndex: 0,
			worktype: [],
			selector_worktype: [],
			//是否付费
			//难易程度
			degreeItems: [
				{
					value: '1',
					name: '简单'
					// checked: 'true'
				},
				{
					value: '2',
					name: '中等'
					// checked: 'true'
				},
				{
					value: '3',
					name: '困难'
					// checked: 'true'
				}
			],
			degree_current: 0,
			//版本类型
			editionItems: [
				{
					value: '1',
					name: '文字版'
					// checked: 'true'
				},
				{
					value: '2',
					name: '声音版'
					// checked: 'true'
				}
			],
			editionItems_current: 0,
			//版本资费
			freeItems: [
				{
					value: '1',
					name: '免费'
					// checked: 'true'
				},
				{
					value: '2',
					name: '付费'
					// checked: 'true'
				}
			],
			free_current: 0,
			//启动选项
			startItems: [
				{
					value: '1',
					name: '询问开始或继续'
				},
				{
					value: '2',
					name: '快速开始'
				},
				{
					value: '2',
					name: '继续'
				}
			],
			start_current: 0,

			// 适宜人群
			checkboxItems: [
				{
					name: '1',
					value: '儿童'
				},
				{
					name: '2',
					value: '学生'
				},
				{
					name: '3',
					value: '成人'
				}
			],
			// 选项设置
			settingworktype: [
				{
					name: 'debug',
					value: '调试词性'
				},
				{
					name: 'disable_time_recognition',
					value: '时间禁用多次识别'
				}
			],
			label: '',
			// 提交的数据
			workData: {
				name: '', // 作品名称
				intro: '', // 作品简介
				userId: '',
				bannerImgUrl: '', // 作品头像
				preface: '', // 创作者说
				labels: [], // 作品标签
				difficulty: '简单', //难易程度
				cache: true, // 自动存档
				userNickname: '', // 作者名称
				suitCrowds: '', // 适宜人群
				wordNum: '', //作品字数
				postURL: '', // 表单网站
				configContent: '', // 配置参数
				postActive: false, //勾选之后在启动时提交一次
				startOption: 1, // 启动选项
				extraOptions: [], //启动设置
				edition: 1, // 版本类型
				workType: 0, //
				startAge: 1, // 开始年龄
				stopAge: 100, //结束年龄
				free: 0, // 是否付费
				nicknames: '', // 作品别名
				username: '' //账号
			}
		};
	},
	methods: {
		// 初始化作品类型数据
		getworktype() {
			let that = this;
			that.$request
				.get(root.backUrl + '/workType')
				.then(res => {
					let worktype = [];
					for (let item in res.data) {
						let onedata = {
							label: '',
							value: '',
							index: '',
							level: ''
						};
						onedata.label = res.data[item].name;
						onedata.value = res.data[item].id;
						onedata.index = parseInt(item);
						onedata.level = res.data[item].level;
						worktype.push(onedata);
					}
					that.worktype = res.data;
					that.selector_worktype = worktype;
					console.log(that.selector_worktype, '下拉框数据');
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 选择版本类型
		editionList_handSelect(val) {
			console.log(val);
			this.editionList_initIndex = val.checkArr.index;
			console.log(this.editionList_initIndex, '索引');
			if (this.editionList_initIndex === 0) {
				this.workData.edition = 1;
			} else if (this.worktype_initIndex === 1) {
				this.workData.edition = 2;
			}
			console.log(this.workData.edition, '版本类型');
		},
		// 选择功能用途
		worktype_handSelect(val) {
			console.log(val);
			this.worktype_initIndex = val.checkArr.index;
			this.workData.workType = this.selector_worktype[val.checkArr.index].value;
			this.isshow = this.selector_worktype[val.checkArr.index].value;
			console.log(this.workData.workType, 'id');
		},
		//选择难易程度
		radioChange2: function(evt) {
			for (let i = 0; i < this.degreeItems.length; i++) {
				if (this.degreeItems[i].value === evt.target.value) {
					this.degree_current = i;
					break;
				}
			}
			console.log(this.degree_current, '单选');
			if (this.degree_current === 0) {
				this.workData.difficulty = '简单';
			} else if (this.degree_current === 1) {
				this.workData.difficulty = '中等';
			} else if (this.degree_current === 2) {
				this.workData.difficulty = '困难';
			}
		},

		// 版本类型
		radioChange(evt) {
			for (let i = 0; i < this.editionItems.length; i++) {
				if (this.editionItems[i].value === evt.target.value) {
					this.editionItems_current = i;
					break;
				}
			}
			console.log(this.editionItems_current, '单选');
			if (this.editionItems_current === 0) {
				this.workData.edition = 1;
			} else if (this.degree_initIndex === 1) {
				this.workData.edition = 2;
			}
		},
		//选择资费
		radioChange3: function(evt) {
			for (let i = 0; i < this.freeItems.length; i++) {
				if (this.freeItems[i].value === evt.target.value) {
					this.free_current = i;
					break;
				}
			}
			if (this.free_current === 0) {
				this.workData.free = 0;
			} else if (this.free_current === 1) {
				this.workData.free = 1;
			}
		},
		//启动选项
		radioChange4: function(evt) {
			for (let i = 0; i < this.startItems.length; i++) {
				if (this.freeItems[i].value === evt.target.value) {
					this.start_current = i;
					break;
				}
			}
			if (this.start_current === 0) {
				this.workData.startOption = 1;
			} else if (this.start_current === 1) {
				this.workData.startOption = 2;
			} else if (this.start_current === 2) {
				this.workData.startOption = 3;
			}
		},
		// 选择适宜人群
		checkboxChange: function(e) {
			console.log(e);
			var checked = e.target.value;
			var changed = {};
			for (var i = 0; i < this.checkboxItems.length; i++) {
				if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
					changed['checkboxItems[' + i + '].checked'] = true;
				} else {
					changed['checkboxItems[' + i + '].checked'] = false;
				}
			}
			this.workData.suitCrowds = e.target.value;
		},
		//选择启动项
		checkboxChange2(e) {
			console.log(e);
			var checked = e.target.value;
			var changed = {};
			for (var i = 0; i < this.settingworktype.length; i++) {
				if (checked.indexOf(this.settingworktype[i].name) !== -1) {
					changed['settingworktype[' + i + '].checked'] = true;
				} else {
					changed['settingworktype[' + i + '].checked'] = false;
				}
			}

			this.workData.extraOptions = checked;
		},
		//前往标签选择页
		goSelectlabel() {
			let data = JSON.stringify(this.workData.labels);
			uni.navigateTo({
				url: '../Selectlabel/Selectlabel?data=' + data
			});
		},
		switch1Change: function(e) {
			console.log('switch1 发生 change 事件，携带值为', e.target.value);
			this.workData.cache = e.target.value;
		},
		addImage(e) {
			let path = e.allImages[0];
			let that = this;
			pathToBase64(path)
				.then(base64 => {
					let url = root.backUrl + '/upload/img';
					let postdata = {
						data: base64
					};
					that.$request
						.post(url, postdata)
						.then(res => {
							if (res.code === 1) {
								that.workData.bannerImgUrl = res.data.absolutePath;
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
		// 添加作品
		adddata() {
			let workData =JSON.parse(JSON.stringify(this.workData)) 
			// console.log(workData, '表单数据');
			if (!workData.intro || !workData.suitCrowds || !workData.userNickname || !workData.preface || !workData.difficulty || !workData.userNickname || !workData.labels) {
				uni.showToast({
					title: '请填写必填项',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			if( workData.suitCrowds.length>0){
				workData.suitCrowds = workData.suitCrowds.join(',');
				
			}
			if (workData.nicknames) {
				workData.nicknames = workData.nicknames.replace(/,/g, '，');
				workData.nicknames = workData.nicknames.replace(/ /g, '');
				workData.nicknames = workData.nicknames.split('，');
			} else {
				workData.nicknames = [];
			}
			workData.nicknames = Array.from(new Set(workData.nicknames));
			console.log(workData, '要发送的数据');
			let that = this;
       
	   uni.showLoading({
	       title: '生成作品中'
	   });
			that.$request
				.post(root.backUrl + '/work', workData)
				.then(res => {
					uni.hideLoading();
					if(res.code===1){
						uni.showModal({
						    title: '提示',
						    content: '添加作品成功',
							cancelText:"继续添加",
							confirmText:"返回列表",
						    success: function (res) {
						        if (res.confirm) {
									uni.reLaunch({
									    url: '/pages/workslist/workslist'
									});	
						        } else if (res.cancel) {
									
						            // console.log('用户点击取消');
						        }
						    }
						});
						
						}
					console.log(res);
				})
				.catch(erro => {
					console.error('error:', error);
				});
		},
		change() {}
	},
	onShow() {
		this.getworktype();
	},
	onLoad: function(options) {
		// console.log(options,"作品数据")
		const userinfo = uni.getStorageSync('userinfo');
		this.userinfo = userinfo;
		this.workData.userNickname = userinfo.nickname;
		this.workData.username = userinfo.username;
		if(options.workdata){
			let editor_workdata=JSON.parse(options.workdata);
		}else if(options.data){
			let openiddata = JSON.parse(options.data);
			let str = '';
			this.workData.labels = openiddata;
			for (var i in this.workData.labels) {
				str = str + ',' + this.workData.labels[i].name;
			}
			str = str.substr(1);
			this.label = str;
		}
		
	}
};
</script>

<style>
.crowdbox {
	border-bottom: 1px solid #c0c0c0;
}

.crowdbox .uni-list {
	padding: 30upx;
	display: flex;
	flex-direction: row;
}

.crowdbox .uni-list-cell {
	margin: 10upx;
	text-align: center;
	font-size: 28upx;
}

.crowdbox .title {
	font-size: 28upx;
	margin-top: 30upx;
	margin-right: 30upx;
}

.crowdbox2 {
	padding: 30upx;
	border-bottom: 1px solid #c0c0c0;
	display: flex;
	flex-direction: row;
	font-size: 32upx;
	margin-top: 30upx;
	margin-right: 30upx;
}

.switchbox {
	margin-left: 30px;
	transform: scale(0.7);
	margin-top: -20upx;
}

.collapse-box {
	margin-top: 10upx;
	background: #fff !important;
}

.uni-collapse-cell {
	z-index: 1 !important;
}

.uni-picker-view-content {
	z-index: 999 !important;
}

.collapse-box2 {
	/* margin-top: 10upx */
	background: #fff !important;
}
.imgbox {
	display: flex;
	flex-direction: row;
	padding-left: 30upx;
	padding-top: 15upx;
	font-size: 28upx;
	border-bottom: 1px solid #d5d5d5;
}
.imgbox .title {
	margin-top: 100upx;
	margin-right: 30upx;
}
.requried:before {
	content: '*';
	color: #f56c6c;
	margin-right: 2px;
}
.labbox .text:before {
	content: '*';
	color: #f56c6c;
	margin-right: 2px;
}
</style>
yle>
