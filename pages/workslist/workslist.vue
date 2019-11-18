<template>
	<view>
		<view class="worklist" v-show="!is_typeshow">
			<button class="margin-top widthnine" @click="editor(item_NO, operation_add)">添加作品</button>

			<t-table class="table">
				<t-tr>
					<t-th>作品名称</t-th>
					<t-th class="workname">作品状态</t-th>
					<t-th>操作</t-th>
				</t-tr>
				<t-tr v-for="(item, index) in datalist" :key="index">
					<!-- <view class="t-td"  @click="gotoinfo(item)"> -->
					<t-td>
						<view class="" @click="gotoinfo(item)">{{ item.name }}</view>
					</t-td>
					<!-- </view> -->
					<t-td v-if="item.applyStatus === 1" class="workname">审核通过</t-td>
					<t-td v-if="item.applyStatus === 0" class="workname">未发布</t-td>
					<t-td v-if="item.applyStatus === -1" class="workname">审核未通过</t-td>
					<t-td v-if="item.applyStatus === 2" class="workname">待审核</t-td>
					<t-td v-if="item.applyStatus === 11" class="workname">导入中</t-td>
					<t-td v-if="item.applyStatus === 12" class="workname">导入失败</t-td>
					<t-td>
						<fa-icon type="send-o icon" size="20" color="#666" @click="dec_publish(item)"></fa-icon>
						<fa-icon type="wrench icon" size="20" color="#666" @click="editor(item, operation_editor)"></fa-icon>
						<fa-icon type="trash-o icon" size="20" color="#666" @click="dec_delete(item)"></fa-icon>
						<!-- 	<fa-icon type="trash-o icon" size="20" color="#666" ></fa-icon> -->
					</t-td>
				</t-tr>
			</t-table>
		</view>
		<view class="editor" v-show="is_typeshow">
			<view class="returnworklist" @click="returnworklist">
				<fa-icon type="arrow-left " size="22" color="#666"></fa-icon>
				<view class="title">返回作品列表</view>
			</view>
			<catLabel  dataType="text" inputType="text" text="作品名称" hasX v-model="workData.name" />
			<catLabel dataType="text" inputType="text" text="作品别名" v-model="workData.nicknames" />
			<catLabel text="功能用途" @handSelect="worktype_handSelect" :initIndex="worktype_initIndex" dataType="selector" :selectList="selector_worktype" hasX />
			<view class="crowdbox" v-show="is_functionality">
				<radio-group class="uni-list" @change="radioChange">
					<view class="title requried">版本类型</view>
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in editionItems" :key="item.value">
						<view><radio :value="item.value" :checked="index === editionItems_current" /></view>
						<view>{{ item.name }}</view>
					</label>
				</radio-group>
			</view>
			<view class="imgbox" v-show="is_functionality">
				<view class="title requried">作品封面</view>
				<robby-image-upload
					v-model="imageData"
					@delete="deleteImage"
					@add="addImage"
					:enable-del="enableDel"
					:enable-add="enableAdd"
					:limit="limitNumber"
				></robby-image-upload>
			</view>
			<catLabel v-show="is_functionality" text="作品简介" dataType="textarea" :textareaLength="1024" v-model="workData.intro" hasX />
			<view class="crowdbox" v-show="is_functionality">
				<radio-group class="uni-list" @change="radioChange3">
					<view class="title requried">作品资费</view>
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in freeItems" :key="item.value">
						<view><radio :value="item.value" :checked="index === free_current" /></view>
						<view>{{ item.name }}</view>
					</label>
				</radio-group>
			</view>
			<view v-show="is_functionality" class="labbox" @click="goSelectlabel"><catLabel text="作品标签" :dataText="label" hasX /></view>
			<view class="crowdbox" v-show="is_functionality">
				<radio-group class="uni-list" @change="radioChange2">
					<view class="title requried">难易程度</view>
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in degreeItems" :key="item.value">
						<view><radio :value="item.value" :checked="index === degree_current" /></view>
						<view>{{ item.name }}</view>
					</label>
				</radio-group>
			</view>
			<view class="crowdbox" v-show="is_functionality">
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
			<catLabel v-show="is_functionality" dataType="text" inputType="text" text="作者名称" v-model="workData.userNickname" hasX />
			<catLabel v-show="is_functionality" text="创作者说" dataType="textarea" :textareaLength="1024" v-model="workData.preface" hasX />
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
			<button type="primary" plain="true" class="margin-top" @click="editor_adddata">{{ editortitle }}</button>
		</view>
		<!-- 选择标签 -->
		<neil-modal
			:show="show_labelBOx"
			@close="closeModal"
			title="选择作品标签"
			@confirm="bindBtn('confirm')"
			confirm-text="确定选择"
			cancel-text="取消选择"
			class="Modallabelbox"
			:auto-close="false"
		>
			<view class="Modallabelbox" v-show="show_labelBOx">
				<uni-collapse @change="change" :accordion="true">
					<checkbox-group class="uni-list" @change="checkboxChange_label">
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
				<view class="fatherbox">
					<view class="toptitle">已选标签</view>
					<view class="deposit">
						<view text="标签" type="danger" class="onetag" inverted="false" v-for="(item, index) in selected">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</neil-modal>
	</view>
</template>

<script>
import root from '../../common/js/root.js';
// import faIcon from '../../components/kilvn-fa-icon/fa-icon.vue';
// 添加作品
import catLabel from '@/components/cat-label/cat-label.vue';
var checker = require('@/common/checker.js');
// import root from '../../common/js/root.js';
import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue';
import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue';
import { pathToBase64, base64ToPath } from '../../common/js/base64.js';
// 添加作品 end
// 标签选中
import neilModal from '@/components/neil-modal/neil-modal.vue';
import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue';
export default {
	components: {
		// start
		catLabel,
		uniCollapse,
		uniCollapseItem,
		uniList,
		uniListItem,
		robbyImageUpload,
		// 标签模块
		neilModal,
		uniTag
		// end
	},
	data() {
		return {
			item_NO: {},
			operation_editor: '编辑作品',
			operation_add: '新建作品',
			//全局
			is_typeshow: false, //控制列表显示隐藏
			// userinfo: {},
			datalist: [],
			LabelList: [],
			// start
			// 账号信息
			userinfo: {},
			// 图片上传组件
			imageData: [],
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
				},
				{
					value: '2',
					name: '中等'
				},
				{
					value: '3',
					name: '困难'
				}
			],
			degree_current: 0,
			//版本类型
			editionItems: [
				{
					value: '1',
					name: '文字版'
				},
				{
					value: '2',
					name: '声音版'
				}
			],
			editionItems_current: 0,

			//版本资费
			freeItems: [
				{
					value: '1',
					name: '免费'
				},
				{
					value: '2',
					name: '付费'
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
					value: '3',
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
			},
			// 标签数据
			labels: [],
			manual_labels: '',
			selected: [],
			show_labelBOx: false,
			// end
			editortitle: '',
			is_functionality:true
		};
	},
	methods: {
		// 去九宫格
		gotoinfo(data) {
			uni.setStorageSync('workinfo', data); // 设置作品缓存
			uni.navigateTo({
				url: '../grid/grid'
			});
		},
		// 初始化作品类型数据
		getworktype() {
			let that = this;
			that.$request
				.get(root.backUrl + '/workType')
				.then(res => {
					console.log(res);
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 初始化作品列表数据
		getworklist() {
			let that = this;
			that.$request
				.get(root.backUrl + '/project/by_username/?username=' + this.userinfo.username)
				.then(res => {
					console.log(res);
					if (res.code === 1) {
						that.datalist = res.data;
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		//提交审核
		dec_publish: function(list) {
			console.log('点击操作了');
			let that = this;
			let data = JSON.parse(JSON.stringify(list));
			console.log(data, '数据');
			if (data.applyStatus === 2) {
				uni.showModal({
					title: '发布作品',
					content: '作品需一到三天审核完毕，请耐心等待',
					success: function(res) {
						if (res.confirm) {
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else {
				data.applyStatus = 2;
				uni.showModal({
					title: '发布作品',
					content: '作品需一到三天审核完毕，请耐心等待',
					success: function(res) {
						if (res.confirm) {
							that.$request
								.put('/project/' + data.id + '/apply?applyStatus=2')
								.then(res => {
									if (res.code === 1) {
										//提交审核完成操作
										god.getworklist();
									}
								})
								.catch(error => {
									console.error('error:', error);
								});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		//删除作品
		dec_delete: function(postData) {
			let that = this;
			let url = '/work/' + postData.botAccount + '?botId=' + postData.botId;
			uni.showModal({
				title: '提示',
				content: '确定要删除此作品吗?',
				success: function(res) {
					if (res.confirm) {
						that.$request
							.delete(url)
							.then(res => {
								if (res.code === 1) {
									//提交审核完成操作
									that.getworklist();
								}
							})
							.catch(error => {
								console.error('error:', error);
							});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		// 编辑作品
		editor(data, type) {
			if (type === '新建作品') {
				this.editortitle = '添加作品';
				console.log(this.editortitle, '此时的状态');
				this.workData = {
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
				};

				this.workData.userNickname = this.userinfo.nickname;
				this.workData.username = this.userinfo.username;

				this.label = '';
				this.imageData = [];
				this.tart_current = 0;
				this.ditionItems_current = 0;
				this.free_current = 0;
				this.degree_current = 0;
				this.selected = [];
				for (var i of this.settingworktype) {
					i['checked'] = false;
				}
				for (var i of this.checkboxItems) {
					i['checked'] = false;
				}
			} else if (type === '编辑作品') {
				this.editortitle = '确认编辑';
				console.log(this.editortitle, '此时的状态');

				let workData = JSON.parse(JSON.stringify(data));
				if (workData.username === null) {
					console.log(this.userinfo, '缓存数据');
					workData.username = this.userinfo.username;
				}
				//初始化标签
				let str = '';
				for (var i in workData.labels) {
					str = str + ',' + workData.labels[i].name;
				}
				str = str.substr(1);
				console.log(this.label, '已经选择的标签');
				this.label = str;
				this.selected = workData.labels;
				if (workData.bannerImgUrl) {
					this.imageData = [];
					this.imageData.push(workData.bannerImgUrl);
				}
				// let data=JSON.parse( JSON.stringify(data))
				this.workData = workData;
				// 初始化功能用途
				let initialization1 = workData.workType;
				for (var item in this.selector_worktype) {
					if (this.selector_worktype[item].value === initialization1) {
						this.worktype_initIndex = item;
					}
				}
				// 初始化版本类型
				let initialization2 = workData.edition;
				for (var item in this.editionItems) {
					if (parseInt(this.editionItems[item].value) === initialization2) {
						this.editionItems_current = parseInt(item);
					}
				}
				// 初始化付费类型
				let initialization3 = workData.free;
				if (initialization3 === 0) {
					this.free_current = 0;
				} else if (initialization3 === 1) {
					this.free_current = 1;
				}
				// 初始难易程度
				let initialization4 = workData.difficulty;
				if (initialization4 === '简单') {
					this.degree_current = 0;
				} else if (initialization4 === '中等') {
					this.degree_current = 1;
				} else if (initialization4 === '困难') {
					this.degree_current = 2;
				}
				// 初始化适宜人群
				for (var allitem in this.checkboxItems) {
					this.checkboxItems[allitem]['checked'] = false;
				}
				let initialization5 = workData.suitCrowds;
				let arr = initialization5.split(',');
				for (var i in this.checkboxItems) {
					for (var ii in arr) {
						if (arr[ii] === this.checkboxItems[i].value) {
							this.checkboxItems[i]['checked'] = true;
							console.log(this.checkboxItems[i].value);
						}
					}
				}
				// 启动选项
				let initialization6 = workData.startOption;
				console.log(initialization6, '启动设置');
				console.log(this.startItems, '列表');
				for (var i in this.startItems) {
					if (parseInt(this.startItems[i].value) === initialization6) {
						this.start_current = parseInt(i);
					}
				}
			}
			console.log(data, '作品数据');
			console.log(type, '');
			this.is_typeshow = true;
		},
		//标签列表
		getLabelList: function() {
			let that = this;
			that.$request
				.get('/label/system')
				.then(res => {
					if (res.code === 1) {
						that.LabelList = res.data;
					}
				})
				.catch(err => {
					console.error('error:', error);
				});
		},
		editor_getworktype() {
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
			
			
			this.is_functionality=val.result === "功能性bot"? false:true;
			
		
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
		switch1Change: function(e) {
			this.workData.cache = e.target.value;
		},
		//前往标签选择页
		goSelectlabel() {
			this.show_labelBOx = true;
			// 标签选择
			let labels = this.LabelList;
			for (var item of labels) {
				for (var item2 of item.labels) {
					if (item2.id !== null) {
						item2.id = item2.id.toString();
					}
					item2['checked'] = false;
				}
			}
			this.labels = labels;
			for (var one in this.labels) {
				for (var one1 in this.labels[one].labels) {
					for (var one2 in this.selected) {
						if (this.labels[one].labels[one1].name === this.selected[one2].name) {
							this.labels[one].labels[one1]['checked'] = true;
							console.log(this.labels[one].labels[one1].name);
						}
					}
				}
			}
			this.labels = labels;
			console.log(this.selected, '已选择的标签');
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
		editor_adddata() {
			let workData = JSON.parse(JSON.stringify(this.workData));
			if (this.editortitle === '添加作品') {
				workData.labels = this.selected;
			}
			if (!workData.intro || !workData.suitCrowds || !workData.userNickname || !workData.preface || !workData.difficulty || !workData.userNickname || !workData.labels) {
				uni.showToast({
					title: '请填写必填项',
					icon: 'none',
					duration: 2000
				});
				return;
			}
			console.log(this.editortitle, '头头3');
			let result = typeof workData.suitCrowds;
			console.log(workData.suitCrowds, '转换前');
			console.log(result, '验证');
			if (workData.suitCrowds.length > 0 && result === 'object') {
				workData.suitCrowds = workData.suitCrowds.join(',');
			}
			if (typeof workData.nicknames === 'object') {
				workData.nicknames = [];
			} else if (workData.nicknames === '') {
				workData.nicknames = [];
			} else {
				workData.nicknames = workData.nicknames.replace(/,/g, '，');
				workData.nicknames = workData.nicknames.replace(/ /g, '');
				workData.nicknames = workData.nicknames.split('，');
			}
			workData.nicknames = Array.from(new Set(workData.nicknames));
			if (this.editortitle === '添加作品') {
				console.log(this.editortitle, '1');
				console.log('是添加');
				let that = this;
				uni.showLoading({
					title: '生成作品中'
				});
				that.$request
					.post(root.backUrl + '/work', workData)
					.then(res => {
						uni.hideLoading();
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '添加作品成功',
								cancelText: '继续添加',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										console.log('点击确定');
										that.is_typeshow = false;
										that.getworklist();
									} else if (res.cancel) {
										that.getworklist();
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
										that.getworklist();
									} else if (res.cancel) {
										that.getworklist();
									}
								}
							});
						}
						console.log(res);
					})
					.catch(erro => {
						console.error('error:', error);
					});
			} else if (this.editortitle === '确认编辑') {
				console.log(this.editortitle, '1');
				console.log('是修改');
				let that = this;
				uni.showLoading({
					title: '作品修改中'
				});
				that.$request
					.put(root.backUrl + '/work/' + workData.botAccount, workData)
					.then(res => {
						uni.hideLoading();
						if (res.code === 1) {
							uni.showModal({
								title: '提示',
								content: '修改作品成功',
								cancelText: '继续修改',
								confirmText: '返回列表',
								success: function(res) {
									if (res.confirm) {
										that.is_typeshow = false;
										that.getworklist();
									} else if (res.cancel) {
										that.getworklist();
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
										that.getworklist();
									} else if (res.cancel) {
										that.getworklist();
									}
								}
							});
						}
						console.log(res);
					})
					.catch(erro => {
						console.error('error:', error);
					});
			}
		},
		//返回作品列表
		returnworklist() {
			this.is_typeshow = false;
		},
		change() {},
		// 关闭标签选择
		closeModal() {
			this.show_labelBOx = false;
		},
		// 编辑区域结束
		//标签逻辑
		// 选择单个标签
		checkboxChange_label(e) {
			let idarr = e.target.value;
			console.log(idarr, '选择的集合');
			let onetag = {
				id: null,
				name: ''
			};
			let checkboxarr = [];
			let labels = this.labels;
			console.log(labels, 'labels');
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
			this.selected = checkboxarr;
		},
		// 确定选择的标签
		bindBtn() {
			let str = '';
			for (var i in this.selected) {
				str = str + ',' + this.selected[i].name;
			}
			str = str.substr(1);
			console.log(this.label, '已经选择的标签');
			this.label = str;
			this.workData.labels = this.selected;
		}
	},
	onShow() {
		this.getworktype();
		this.getworklist();
		this.getLabelList();
		// 编辑区域
		this.editor_getworktype();
		const userinfo = uni.getStorageSync('userinfo');
		this.userinfo = userinfo;
	},
	onLoad: function(options) {
		const userinfo = uni.getStorageSync('userinfo');
		this.userinfo = userinfo;
	}
};
</script>

<style>
.workname {
	/* width: 25% !important; */
}
.t-td {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.table {
	table-layout: fixed;
}
.icon {
	flex: 1;
	text-align: center;
}
/* 编辑区域
 */
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
.returnworklist {
	display: flex;
	flex-direction: row;
	width: 100%;
	background: #f8f8f8;
	font-size: 32upx;
	padding: 6upx;
}
.returnworklist .title {
	margin-left: 10upx;
}
/* .Modallabelbox{
	width: 90%;
} */
.neil-modal__container {
	width: 96% !important;
}
/* 选中标签 */
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
.neil-modal__container {
	top: 20% !important;
}
.margin-top {
	margin-top: 20upx;
	margin-bottom: 20upx;
}
.workname{
	flex: none !important;
	width: 18% !important;
}
</style>
