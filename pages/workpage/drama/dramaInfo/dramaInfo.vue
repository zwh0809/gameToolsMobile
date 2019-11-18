<template>
	<view>
		<view class="uni-list one_picker">
			<view class="uni-list-cell one_input">
				<view class="uni-list-cell-left">当前剧情:</view>
				<view class="uni-list-cell-db pickerbox">
					<picker @change="bindPickerChange" :value="plotNumindex" :range="allplot" range-key="plotNum">
						<view class="uni-input">{{ allplot[plotNumindex].plotNum }}</view>
					</picker>
					<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
				</view>
			</view>
		</view>
		<button class="button one_button" type="button" @click="gotoquestions(allbranch.plotId)" v-show="!allbranch.merge">剧情问答</button>
		<button class="button tow_button" type="button" @click="togglePopup('center', 'tip')" v-show="!allbranch.merge">添加分支</button>
		<button class="button three_button" type="button" @click="gotonotmatching" v-show="!allbranch.merge">无匹配问答</button>
		<button class="button four_button" type="button" @click="gowordsconversion" v-show="!allbranch.merge">词句转换</button>
		<button class="button five_button" type="button" @click="submitPostdata">保存数据</button>
		<view class="headline">分支列表</view>
		<view class="Branchbox">
			<uni-collapse :accordion="true">
				<uni-collapse-item class="" v-for="(item, index) of allbranch.plotBranchVos" :key="index" :title="item.title" :show-animation="item.animation">
					<view class="Branch_box">
						<QSwitch variableName="switch" title="合并剧情" v-model="allbranch.merge" @change="mergedrama($event, index)"></QSwitch>
						<view class="Branchbox_content">
							<view class="operationbox">
								<view class="" @click="togglePopup2('center', 'editorBranchbox_title', index)">修改分支名</view>
								<view class="" @click="deleteBranch(item)">删除此分支</view>
							</view>
							<view class="titlecenter">
								<view class="title">匹配玩家话语</view>
								<fa-icon type="plus-circle operation_icon" size="22" color="#666666" class="addicon" @click="addmatching(index)"></fa-icon>
							</view>
							<view class="one_utterance" v-for="(branch_item, branch_index) of item.plotBranchMatchFieldVos">
								<view class="pickerlist">
									<view class="uni-list one_picker">
										<view class="uni-list-cell one_input">
											<view class="uni-list-cell-left titlebox">匹配类型:</view>
											<view class="uni-list-cell-db pickerbox">
												<picker
													@change="utterance_operation1($event, index, branch_index, 'FieldVos')"
													:value="1"
													:range="pagedata.cmpType"
													range-key="label"
												>
													<view class="uni-input" v-if="opopop">{{ branch_item.type_name ? branch_item.type_name : '请选择' }}</view>
												</picker>
												<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
											</view>
										</view>
									</view>
									<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
										<view class="uni-list-cell one_input">
											<view class="uni-list-cell-left titlebox">比较符:</view>
											<view class="uni-list-cell-db pickerbox">
												<picker
													@change="utterance_operation2($event, index, branch_index)"
													:value="branch_item.operator_index"
													:range="branch_item.compare"
													range-key="label"
												>
													<view class="uni-input" v-if="opopop">{{ branch_item.operator_name ? branch_item.operator_name : '请选择' }}</view>
												</picker>
												<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
											</view>
										</view>
									</view>
									<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
										<view class="uni-list-cell one_input">
											<view class="uni-list-cell-left titlebox special2">话语意图:</view>
											<view class="uni-list-cell-db pickerbox special" @click="show_tree(index, branch_index)">
												<view class="uni-input">{{ branch_item.conditionQuestion ? branch_item.conditionQuestion : '请选择' }}</view>
												<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
											</view>

											<view class="checkbox">
												<checkbox-group class="uni-list" @change="checkboxChange1($event, index, branch_index)">
													<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
														<view><checkbox :value="item.name" :checked="branch_item.active"></checkbox></view>
													</label>
												</checkbox-group>
												<view class="">设为默认</view>
											</view>
										</view>
									</view>
									<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
										<view class="uni-list-cell one_input">
											<view class="uni-list-cell-left titlebox special2">关键字:</view>
											<view class="uni-list-cell-db pickerbox special">
												<input class="uni-input" placeholder="输入关键词" v-model="branch_item.comparedValue" />
											</view>
											<view class="checkbox">
												<checkbox-group class="uni-list" @change="checkboxChange2($event, index, branch_index)">
													<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
														<view><checkbox :value="item.name" :checked="branch_item.accurateMatch"></checkbox></view>
													</label>
												</checkbox-group>
												<view class="">精准匹配</view>
											</view>
										</view>
									</view>
									<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
										<view class="uni-list-cell one_input">
											<view class="uni-list-cell-left titlebox">保存限定词:</view>
											<view class="uni-list-cell-db pickerbox">
												<picker
													@change="utterance_operation5($event, index, branch_index, 'variableS')"
													:value="value_index"
													:range="allattr"
													range-key="name"
												>
													<view class="uni-input" v-if="opopop">{{ branch_item.variableS ? branch_item.variableS : '请选择' }}</view>
												</picker>
												<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
											</view>
										</view>
									</view>
									<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
										<view class="uni-list-cell one_input">
											<view class="uni-list-cell-left titlebox special2">保存关键词:</view>
											<view class="uni-list-cell-db pickerbox special">
												<picker
													@change="utterance_operation5($event, index, branch_index, 'variableO')"
													:value="value_index"
													:range="allattr"
													range-key="name"
												>
													<view class="uni-input" v-if="opopop">{{ branch_item.variableO ? branch_item.variableO : '请选择' }}</view>
												</picker>
												<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
											</view>
											<view class="checkbox">
												<checkbox-group class="uni-list" @change="checkboxChange3($event, index, branch_index)">
													<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
														<view><checkbox :value="item.name" :checked="branch_item.updateTime"></checkbox></view>
													</label>
												</checkbox-group>
												<view class="">事先更新</view>
											</view>
										</view>
									</view>
								</view>
								<view class="iconbox" @click="deleteplotBranchMatchFieldVos(branch_item, index)">
									<fa-icon type="trash-o operation_icon" size="32" color="#666666"></fa-icon>
								</view>
							</view>
							<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#409eff"></uni-segmented-control>
							<view class="content">
								<view v-show="current === 0">
									<view class="one_utterance" v-for="(branch_item, branch_index) of item.plotBranchPremiseVos">
										<view class="pickerlist">
											<view class="uni-list one_picker">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox">条件类型:</view>
													<view class="uni-list-cell-db pickerbox">
														<picker
															@change="utterance_operation6($event, index, branch_index)"
															:value="branch_item.module_index"
															:range="pagedata.moduleType"
															range-key="label"
														>
															<view class="uni-input" v-if="opopop">{{ branch_item.module_name ? branch_item.module_name : '请选择' }}</view>
														</picker>
														<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
													</view>
												</view>
											</view>
											
											<view class="uni-list one_picker">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox">匹配类型:</view>
													<view class="uni-list-cell-db pickerbox">
														<picker
															@change="utterance_operation1($event, index, branch_index, 'PremiseVos')"
															:value="branch_item.type_index"
															:range="pagedata.cmpType"
															range-key="label"
														>
															<view class="uni-input" v-if="opopop">{{ branch_item.type_name ? branch_item.type_name : '请选择' }}</view>
														</picker>
														<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
													</view>
												</view>
											</view>
											
											<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox">比较符:</view>
													<view class="uni-list-cell-db pickerbox">
														<picker
															@change="utterance_operation2($event, index, branch_index)"
															:value="branch_item.operator_index"
															:range="branch_item.compare"
															range-key="label"
														>
															<view class="uni-input" v-if="opopop">{{ branch_item.operator_name ? branch_item.operator_name : '请选择' }}</view>
														</picker>
														<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
													</view>
												</view>
											</view>
											<!-- <view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox special2">话语意图:</view>
													<view class="uni-list-cell-db pickerbox special" @click="show_tree(index, branch_index)">
														<view class="uni-input">{{ branch_item.conditionQuestion ? branch_item.conditionQuestion : '请选择' }}</view>
														<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
													</view>
									
													<view class="checkbox">
														<checkbox-group class="uni-list" @change="checkboxChange1($event, index, branch_index)">
															<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
																<view><checkbox :value="item.name" :checked="branch_item.active"></checkbox></view>
															</label>
														</checkbox-group>
														<view class="">设为默认</view>
													</view>
												</view>
											</view> -->
										<!-- 	<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox special2">关键字:</view>
													<view class="uni-list-cell-db pickerbox special">
														<input class="uni-input" placeholder="输入关键词" v-model="branch_item.comparedValue" />
													</view>
													<view class="checkbox">
														<checkbox-group class="uni-list" @change="checkboxChange2($event, index, branch_index)">
															<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
																<view><checkbox :value="item.name" :checked="branch_item.accurateMatch"></checkbox></view>
															</label>
														</checkbox-group>
														<view class="">精准匹配</view>
													</view>
												</view>
											</view> -->
											<!-- <view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox">保存限定词:</view>
													<view class="uni-list-cell-db pickerbox">
														<picker
															@change="utterance_operation5($event, index, branch_index, 'variableS')"
															:value="value_index"
															:range="allattr"
															range-key="name"
														>
															<view class="uni-input" v-if="opopop">{{ branch_item.variableS ? branch_item.variableS : '请选择' }}</view>
														</picker>
														<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
													</view>
												</view>
											</view> -->
										<!-- 	<view class="uni-list one_picker" v-show="branch_item.type_name !== '任意'">
												<view class="uni-list-cell one_input">
													<view class="uni-list-cell-left titlebox special2">保存关键词:</view>
													<view class="uni-list-cell-db pickerbox special">
														<picker
															@change="utterance_operation5($event, index, branch_index, 'variableO')"
															:value="value_index"
															:range="allattr"
															range-key="name"
														>
															<view class="uni-input" v-if="opopop">{{ branch_item.variableO ? branch_item.variableO : '请选择' }}</view>
														</picker>
														<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
													</view>
													<view class="checkbox">
														<checkbox-group class="uni-list" @change="checkboxChange3($event, index, branch_index)">
															<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
																<view><checkbox :value="item.name" :checked="branch_item.updateTime"></checkbox></view>
															</label>
														</checkbox-group>
														<view class="">事先更新</view>
													</view>
												</view>
											</view> -->
										</view>
										<view class="iconbox" @click="deleteplotBranchMatchFieldVos(branch_item, index)">
											<fa-icon type="trash-o operation_icon" size="32" color="#666666"></fa-icon>
										</view>
									</view>
									
									
									
									
								</view>
								<view v-show="current === 1">
									<view class="checkbox">
										<checkbox-group class="uni-list" @change="checkboxset($event, index)">
											<label class="uni-list-cell uni-list-cell-pd">
												<view class="Option ">
													<checkbox value="1" :checked="item.includeCurInfo"></checkbox>
													<view class="">附加条件包含匹配玩家话语信息</view>
												</view>
											</label>
											<label class="uni-list-cell uni-list-cell-pd">
												<view class="Option ">
													<checkbox value="2" :checked="item.moveWithPlot"></checkbox>
													<view class="">切换地点</view>
												</view>
											</label>
											<label class="uni-list-cell uni-list-cell-pd">
												<view class="Option ">
													<checkbox value="3" :checked="item.postActive"></checkbox>
													<view class="">提交表单</view>
												</view>
											</label>
										</checkbox-group>
									</view>

									<QSInput variableName="input" layout="row" title="表单网址" v-model="item.postURL" v-show="item.show_postURL"></QSInput>
									<view class="number-box">
										<view class="title">优先级</view>
										<uni-number-box
											:min="0"
											:max="100"
											:value="item.auxiliaryPriority ? item.auxiliaryPriority : 10"
											@change="change_priority($event, index)"
										></uni-number-box>
									</view>
								</view>
								<view v-show="current === 2">选项卡3的内容</view>
								<view v-show="current === 3">
									<button class="button five_button" type="button" @click="pushanswer(index)">增加回答</button>

									<view class="one_questions" v-for="(item2, index2) of item.connectiveTexts">
										<view class="uni-list one_picker">
											<view class="uni-list-cell one_input">
												<view class="uni-list-cell-left titlebox">选择人物:</view>
												<view class="uni-list-cell-db pickerbox">
													<picker @change="utterance_operation3($event, index, index2)" :value="item2.NPC_index" :range="allNPClist" range-key="name">
														<view class="uni-input" v-if="opopop">{{ item2.npcName ? item2.npcName : '请选择' }}</view>
													</picker>
													<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
												</view>
											</view>
										</view>
										<view class="uni-list one_picker">
											<view class="uni-list-cell one_input">
												<view class="uni-list-cell-left titlebox">选择情绪:</view>
												<view class="uni-list-cell-db pickerbox">
													<picker
														@change="utterance_operation4($event, index, index2)"
														:value="item2.Mood_index"
														:range="item2.moodList"
														range-key="label"
													>
														<view class="uni-input" v-if="opopop">{{ item2.mood ? item2.mood : '请选择' }}</view>
													</picker>
													<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
												</view>
											</view>
										</view>
										<view class="uni-textarea"><textarea class="textarea_box" v-model="item2.content" :auto-height="false" /></view>
										<fa-icon type="trash-o operation_icon" size="24" color="#666666" class="delete_icon" @click="delete_questions(item2, index)"></fa-icon>
									</view>
								</view>
							</view>
						</view>
						<view class="nextPlotnum">下一步</view>

						<view class="">
							<view class="uni-list one_picker">
								<view class="uni-list-cell one_input">
									<view class="uni-list-cell-left">下一步:</view>
									<view class="uni-list-cell-db pickerbox">
										<picker
											@change="selectnextPlotNum($event, index)"
											:value="item.nextPlotNum_index ? item.nextPlotNum_index : 0"
											:range="allplot2"
											range-key="plotNum"
										>
											<view class="uni-input">{{item.nextPlotNum?item.nextPlotNum : '请选择下一步' }}</view>
										</picker>
										<fa-icon type="chevron-right operation_icon" size="14" color="#666666" class="icon_right"></fa-icon>
									</view>
								</view>
							</view>
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<!-- 各类弹框 -->
		<uni-popup :show="addBranchbox" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<view class="uni-tip-title">添加分支</view>
				<view class="uni-tip-content"><QSInput variableName="input" required layout="row" v-model="newValue"></QSInput></view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel_addBranchbox('cancel')">取消</view>
					<view class="uni-tip-button" @click="cancel_addBranchbox('confirm')">确定</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup :show="editorBranchbox_title" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<view class="uni-tip-title">修改分支名称</view>
				<view class="uni-tip-content"><QSInput variableName="input" required layout="row" v-model="Branchbox_title"></QSInput></view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel_editorBranchbox_title('cancel', present_index)">取消</view>
					<view class="uni-tip-button" @click="cancel_editorBranchbox_title('confirm', present_index)">确定</view>
				</view>
			</view>
		</uni-popup>
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
import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue';
import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import uniSegmentedControl from '@/components/uni-ui/uni-segmented-control/uni-segmented-control.vue';
import tkiTree from '@/components/tki-tree/tki-tree.vue';
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';
export default {
	components: {
		uniPopup,
		uniCollapse,
		uniCollapseItem,
		uniList,
		uniListItem,
		uniSegmentedControl,
		tkiTree,
		uniNumberBox
	},
	data() {
		return {
			condition: [], // 所有话语语句
			workinfo: {},
			value8: '数字',
			items: ['附加条件', '选项设置', '属性更新', '设置回答'],
			current: 0,
			value_index: 0,
			pagedata: {
				cmpType: [{ value: 'match', label: '文本' }, { value: 'number', label: '数字' }, { value: 'time', label: '时间' }, { value: 'any', label: '任意' }],
				comparison: {
					includeOperator: [{ value: 'Include', label: '属于' }, { value: 'Exclude', label: '不属于' }],
					numOperator: [
						{ value: 'Bigger', label: '大于' },
						{ value: 'BiggerOrEqual', label: '大于等于' },
						{ value: 'Equal', label: '等于' },
						{ value: 'Smaller', label: '小于' },
						{ value: 'SmallerOrEqual', label: '小于等于' },
						{ value: 'NotEqual', label: '不等于' }
					],
					timeOperator: [{ value: 'Early', label: '早于' }, { value: 'Equal', label: '等于' }, { value: 'Later', label: '晚于' }]
				},
				moduleType: [
				    { value: 0, label: "物品" },
				    { value: 1, label: "角色" },
				    { value: 2, label: "变量" },
				    { value: 3, label: "地点" }
				  ],
			},
			dramaInfo: {},
			plotNumindex: '',
			allplot: [],
			allplot2: [],
			allbranch: {
				merge: false,
				plotBranchVos: [
					{
						activateExtraPlot: [],
						auxiliaryPriority: 10,
						connectiveTexts: [],
						id: 625484,
						includeCurInfo: true,
						moveWithPlot: true,
						name: '分支1',
						nextPlotId: null,
						nextPlotNum: '',

						plotBranchMatchFieldVos: [
							{
								accurateMatch: false,
								accurateMatchLabel: null,
								active: false,
								comparedValue: '',
								conditionId: 4550,
								conditionName: 'wenzainali4aaa',
								conditionQuestion: '肯定形式的比较符加数字',
								id: 513328,
								oPhrases: [],
								operator: 'Include',
								plotBranchId: 625484,
								sPhrases: [],
								semanticRelationName: 'ruleb0wenb0zainali4dd',
								type: 'match',
								updateTime: false,
								variableO: '',
								variableS: ''
							}
						],
						plotBranchPremiseVos: [],
						plotBranchRelateVos: [],
						postActive: false,
						postURL: '',
						remain: false
					}
				],
				plotId: 138396,
				plotNum: '',
				plotUnknowText: [],
				prevPlotNums: []
			},
			merge: false,
			addBranchbox: false,
			type: '',
			newValue: '',
			editorBranchbox_title: false,
			present_index: '', //当前分支索引
			Branchbox_title: '',
			opopop: true,
			allattr: [],
			// 树形选择
			list: [],
			multiple: false,
			selectParent: false,
			checkboxItems: [
				{
					name: 'yes',
					value: ''
				}
			],
			indexboj: {}, // 话语意图索引
			Dubbing: [],
			allNPClist: []
		};
	},

	methods: {
		//添加回答
		pushanswer(index) {
			let obj = {
				content: '',
				id: null,
				mood: '',
				npcId: '',
				npcName: ''
			};
			this.allbranch.plotBranchVos[index].connectiveTexts.unshift(obj);
		},
		// 删除问答
		delete_questions(data, index2) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此问答吗?',
				success: function(res) {
					if (res.confirm) {
						var index = that.allbranch.plotBranchVos[index2].connectiveTexts.indexOf(data);
					
						if (index !== -1) {
							that.allbranch.plotBranchVos[index2].connectiveTexts.splice(index, 1);
						}
					} else if (res.cancel) {
					}
				}
			});
		},

		// 选择人物
		utterance_operation3(e, index, index2) {
			this.opopop = false;
			let index3 = e.detail.value;
			let Npc = this.allNPClist[index3];
			if (Npc.offline === true) {
				this.allbranch.plotBranchVos[index].connectiveTexts[index2].moodList = this.Dubbing.offline[Npc.voiceClass].mood;
				this.allbranch.plotBranchVos[index].connectiveTexts[index2].npcId = Npc.id;
				this.allbranch.plotBranchVos[index].connectiveTexts[index2].npcName = Npc.name;
				this.$nextTick(function() {
					this.opopop = true;
				});
				
			} else {
				uni.showToast({
					title: '该角色说话风格不存在，请选择说话风格后重试,',
					icon: 'none',
					duration: 2000
				});
				this.allbranch.plotBranchVos[index].connectiveTexts[index2].mood=""
				this.$nextTick(function() {
					this.opopop = true;
				});
				return;
			};	
		},
		// 选择情绪
		utterance_operation4(e, index, index2) {
			this.opopop = false;
			let index3 = e.detail.value;
			this.allbranch.plotBranchVos[index].connectiveTexts[index2].mood = this.allbranch.plotBranchVos[index].connectiveTexts[index2].moodList[index3];
			this.$nextTick(function() {
				this.opopop = true;
			});
		},
		// 选择条件类型
		utterance_operation6(e, index, index2){
			this.opopop = false;
			let index3 = e.detail.value;
			this.allbranch.plotBranchVos[index].plotBranchPremiseVos[index2].module_name =  this.pagedata.moduleType[index3].label;
			this.$nextTick(function() {
				this.opopop = true;
			});
			
		},
		// 选择优先级
		change_priority(e, index) {
			this.allbranch.plotBranchVos[index].auxiliaryPriority = e;
		},
		// 点击选项设置
		checkboxset(e, index) {
			let arr = e.detail.value;
			var a = arr.indexOf('1'); // 2
			var b = arr.indexOf('2'); // 2
			var c = arr.indexOf('3'); // 2
			if (a !== -1) {
				this.allbranch.plotBranchVos[index].includeCurInfo = true;
			} else {
				this.allbranch.plotBranchVos[index].includeCurInfo = false;
			}
			if (b !== -1) {
				this.allbranch.plotBranchVos[index].moveWithPlot = true;
			} else {
				this.allbranch.plotBranchVos[index].moveWithPlot = false;
			}
			if (c !== -1) {
				this.allbranch.plotBranchVos[index].postActive = true;
				this.allbranch.plotBranchVos[index].show_postURL = true;
			} else {
				this.allbranch.plotBranchVos[index].postActive = false;
				this.allbranch.plotBranchVos[index].show_postURL = false;
			}
		},
		// 选择话语意图
		treeConfirm(e) {
			let item = e[0];
			let index1 = this.indexboj.index1;
			let index2 = this.indexboj.index2;
			this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2].conditionQuestion = item.nickName;
			this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2].semanticRelationName = item.semanticRelationName;
			this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2].conditionId = item.id;
			this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2].conditionName = item.name;
		},
		treeCancel() {},
		// 选择下一步
		selectnextPlotNum(e, index) {
			let index2 = e.detail.value;
			this.allbranch.plotBranchVos[index].nextPlotNum = this.allplot2[index2].plotNum;
			this.allbranch.plotBranchVos[index].nextPlotId = this.allplot2[index2].plotId;
		},
		//增加匹配
		addmatching(index) {
			let obj = {
				active: false,
				accurateMatch: false,
				accurateMatchLabel: null,
				updateTime: false,
				variableO: '',
				variableS: '',
				comparedValue: '',
				conditionId: null,
				conditionName: '',
				conditionQuestion: '',
				operator: 'Include',
				plotBranchId: null,
				type: 'match',
				oPhrases: [],
				sPhrases: [],
				semanticRelationName: ''
			};
			this.allbranch.plotBranchVos[index].plotBranchMatchFieldVos.push(obj);
		},
		// 设为默认
		checkboxChange1(e, index1, index2) {
			let item = this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2];
			let arr = e.detail.value;
			if (arr.length > 0) {
				item.active = true;
			} else {
				item.active = false;
			}
		},
		// 精准匹配
		checkboxChange2(e, index1, index2) {
			let item = this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2];
			let arr = e.detail.value;
			if (arr.length > 0) {
				item.accurateMatch = true;
			} else {
				item.accurateMatch = false;
			}
		},
		// 事先更新
		checkboxChange3(e, index1, index2) {
			let item = this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2];
			let arr = e.detail.value;
			if (arr.length > 0) {
				item.updateTime = true;
			} else {
				item.updateTime = false;
			}
		},
		//选择话语意图
		show_tree(index1, index2) {
			this.$refs.tkitree._show();
			let indexboj = {
				index1: index1,
				index2: index2
			};
			this.indexboj = indexboj;
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
		// 选择匹配类型
		utterance_operation1(e, index1, index2,type) {
			this.opopop = false;
			let index3 = e.detail.value;
			 if(type === "FieldVos"){
				 // 是选择匹配玩家话语的匹配类型
				 let item = this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2];
				 item.type_name = this.pagedata.cmpType[index3].label;
				 item.type = this.pagedata.cmpType[index3].value;
				 if (item.type_name === '任意') {
				 	item['isarbitrarily'] = true;
				 } else {
				 	item['isarbitrarily'] = false;
				 };
				 //选择匹配类型
				 switch (item.type_name) {
				 	case '文本':
				 		item['compare'] = this.pagedata.comparison.includeOperator;
				 		item['operator_name'] = '属于';
				 		item['operator_index'] = 0;
				 		item['operator'] = 'Include';
				 		break;
				 	case '数字':
				 		item['compare'] = this.pagedata.comparison.numOperator;
				 		item['operator_name'] = '大于';
				 		item['operator_index'] = 0;
				 		item['operator'] = 'Bigger';
				 		break;
				 	case '时间':
				 		item['compare'] = this.pagedata.comparison.timeOperator;
				 		item['operator_name'] = '早于';
				 		item['operator_index'] = 0;
				 		item['operator'] = 'Early';
				 		break;
				 	case '任意':
				 		item['conditionName'] = '';
				 		item['conditionQuestion'] = '';
				 		item['comparedValue'] = '';
				 		item['conditionId'] = '';
				 		break;
				 	default:
				 }
				 
			 }else if(type === "PremiseVos"){
				 let item = this.allbranch.plotBranchVos[index1].plotBranchPremiseVos[index2];
				 item.type_name = this.pagedata.cmpType[index3].label;
				 item.type = this.pagedata.cmpType[index3].value;
				 if (item.type_name === '任意') {
				 	item['isarbitrarily'] = true;
				 } else {
				 	item['isarbitrarily'] = false;
				 };
				 
				 //选择匹配类型
				switch (item.type_name) {
					case '文本':
						item['compare'] = this.pagedata.comparison.includeOperator;
						item['operator_name'] = '属于';
						item['operator_index'] = 0;
						item['operator'] = 'Include';
						break;
					case '数字':
						item['compare'] = this.pagedata.comparison.numOperator;
						item['operator_name'] = '大于';
						item['operator_index'] = 0;
						item['operator'] = 'Bigger';
						break;
					case '时间':
						item['compare'] = this.pagedata.comparison.timeOperator;
						item['operator_name'] = '早于';
						item['operator_index'] = 0;
						item['operator'] = 'Early';
						break;
					case '任意':
						item['conditionName'] = '';
						item['conditionQuestion'] = '';
						item['comparedValue'] = '';
						item['conditionId'] = '';
						break;
					default:
				}
				 
			 }
			
			this.$nextTick(function() {
				this.opopop = true;
			});
		},
		// 选择比较符
		utterance_operation2(e, index1, index2) {
			this.opopop = false;
			let index3 = e.detail.value;
			let item = this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2];
			item.operator_name = item.compare[[index3]].label;
			item.operator = item.compare[[index3]].value;
			this.$nextTick(function() {
				this.opopop = true;
			});
		},
		//选择限定词 or 关键词
		utterance_operation5(e, index1, index2, type) {
			this.opopop = false;
			let index3 = e.detail.value;
			let item = this.allbranch.plotBranchVos[index1].plotBranchMatchFieldVos[index2];
			if (type === 'variableS') {
				item.variableS = this.allattr[index3].name;
			} else if (type === 'variableO') {
				item.variableO = this.allattr[index3].name;
			}
			this.$nextTick(function() {
				this.opopop = true;
			
			});
		},
		// 选项卡事件
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		},
		// 提交数据
		submitPostdata() {
			let postData = JSON.parse(JSON.stringify(this.allbranch));
			for (let item of postData.plotBranchVos) {
				for (let item2 of item.plotBranchMatchFieldVos) {
					delete item2.compare;
					delete item2.operator_name;
					delete item2.type_name;
					delete item2.operator_index;
					delete item2.operator_name;
					delete item2.isarbitrarily;
				}
				for (let item3 of item.connectiveTexts) {
					delete item3.moodList;
					delete item3.NPC_index;
				}
				delete item.nextPlotNum_index;
				delete item.postActive_click;
				delete item.moveWithPlot_click;
				delete item.includeCurInfo_click;
				delete item.show_postURL;
				if (item.nextPlotNum === '') {
					uni.showToast({
						title: '分支的下一步不能为空',
						icon: 'none'
					});
					return;
				}
			}
			console.log(postData, '提交的数据');
		},
		//
		deleteplotBranchMatchFieldVos(data, index) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此匹配吗?',
				success: function(res) {
					if (res.confirm) {
						
						var index2 = that.allbranch.plotBranchVos[index].plotBranchMatchFieldVos.indexOf(data);
						if (index2 !== -1) {
							that.allbranch.plotBranchVos[index].plotBranchMatchFieldVos.splice(index2, 1);
						}
					} else if (res.cancel) {
					}
				}
			});
		},
		//删除分支
		deleteBranch(data) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除此分支吗?',
				success: function(res) {
					if (res.confirm) {
						var index = that.allbranch.plotBranchVos.indexOf(data);
						if (index !== -1) {
							that.allbranch.plotBranchVos.splice(index, 1);
						}
					} else if (res.cancel) {
					}
				}
			});
		},
		// 添加title
		process_addtitle() {
			for (var item of this.allbranch.plotBranchVos) {
				let suffix = '';
				if (item.nextPlotNum !== '') {
					suffix = item.nextPlotNum;
				} else {
					suffix = '剧情结束';
				}
				item['title'] = item.name + '（' + suffix + '）';
			}
		},
		togglePopup(type, open) {
			switch (type) {
				case 'top':
					this.content = '顶部弹出 popup';
					break;
				case 'bottom':
					this.content = '底部弹出 popup';
					break;
				case 'center':
					this.content = '居中弹出 popup';
					break;
			}
			this.type = type;
			if (open === 'tip') {
				let len = this.allbranch.plotBranchVos.length + 1;
				this.newValue = '分支' + len;
				this.addBranchbox = true;
			} else {
				this.$refs[open].open();
			}
		},
		togglePopup2(type, open, index) {
			this.present_index = index;
			switch (type) {
				case 'top':
					this.content = '顶部弹出 popup';
					break;
				case 'bottom':
					this.content = '底部弹出 popup';
					break;
				case 'center':
					this.content = '居中弹出 popup';
					break;
			}
			this.type = type;
			if (open === 'editorBranchbox_title') {
				this.editorBranchbox_title = true;
				this.Branchbox_title = this.allbranch.plotBranchVos[index].name;
			
			} else {
				this.$refs[open].open();
			}
		},
		cancel_addBranchbox(type) {
			if (type === 'cancel') {
				this.addBranchbox = false;
				return;
			} else if (type === 'confirm') {
				this.allbranch.plotBranchVos.push({
					auxiliaryPriority: 10,
					connectiveTexts: [],
					includeCurInfo: true,
					moveWithPlot: true,
					name: this.newValue,
					nextPlotId: null,
					nextPlotNum: '',
					plotBranchMatchFieldVos: [],
					plotBranchPremiseVos: [],
					plotBranchRelateVos: [],
					postActive: false,
					postURL: '',
					remain: false
				});
				this.process_addtitle();
				this.addBranchbox = false;
				return;
			}
			this.$refs[type].close();
		},
		// 更换分支名字
		cancel_editorBranchbox_title(type, index) {
			if (type === 'cancel') {
				this.editorBranchbox_title = false;
				return;
			} else if (type === 'confirm') {
				this.allbranch.plotBranchVos[index].name = this.Branchbox_title;
				this.process_addtitle();
				this.editorBranchbox_title = false;
				return;
			}
			this.$refs[type].close();
		},
		change(e) {},
		// 合并剧情
		mergedrama(e, index) {
			let that = this;
			if (e) {
				uni.showModal({
					title: '提示',
					content: '选择合并剧情会清除分支的跳转设置，确定要勾选嘛?',
					success: function(res) {
						if (res.confirm) {
							let tmp = JSON.parse(JSON.stringify(that.allbranch.plotBranchVos[index]));
							that.allbranch.plotBranchVos = [];
							that.allbranch.plotBranchVos.push(tmp);
							for (let plot of that.allbranch.plotBranchVos) {
								plot.plotBranchMatchFieldVos = [];
								plot.plotBranchPremiseVos = [];
								plot.plotBranchRelateVos = [];
							}
							that.$forceUpdate();
							// 合并分支逻辑
						} else if (res.cancel) {
							that.allbranch.merge = false;
						}
					}
				});
			}
		},
		// 选择分支
		bindPickerChange(e) {
			this.plotNumindex = e.detail.value;
			this.getallbranch(this.allplot[this.plotNumindex].plotId);
		},
		// 获取所有分支
		getallbranch(id) {
			let that = this;
			that.$request
				.get('/plot/branch/' + id + '/')
				.then(res => {
					that.allbranch = res.data;
					that.process_addtitle();
					this.getallattr();
				})
				.catch(error => {
					console.log(error);
				});
		},
		// 获取全局属性
		getallattr() {
			let that = this;
			that.$request
				.get('/global_attr/?projectId=' + that.workinfo.id)
				.then(res => {
					that.allattr = res.data;
					that.getNPClist()
				})
				.catch(error => {
					console.log(error);
				});
		},
		// 获取所有剧情
		getalldrama() {
			let that = this;
			that.$request
				.get('/plot/text/?categoryId=' + that.dramaInfo.categoryId)
				.then(res => {
					that.allplot = res.data;
					that.allplot2 = JSON.parse(JSON.stringify(that.allplot));
					let end = { plotNum: '剧情结束', plotId: null };
					let stay = { plotNum: '剧情停留', plotId: null };
					that.allplot2.unshift(stay);
					that.allplot2.unshift(end);
					that.allplot.filter((item, index, arr) => {
						if (item.plotNum === that.dramaInfo.plotNum) {
							that.plotNumindex = index;
							that.getallbranch(that.dramaInfo.plotId);
						}
					});
				})
				.catch(error => {
					console.log(error);
				});
		},
		// 初始化函数
		initialize(data) {
			let plotBranchVos = this.allbranch.plotBranchVos;
			this.opopop=false;
			for (var i in plotBranchVos) {
				for (var ii in plotBranchVos[i].plotBranchMatchFieldVos) {
					for (var iii in this.pagedata.cmpType) {
						if (this.pagedata.cmpType[iii].value === plotBranchVos[i].plotBranchMatchFieldVos[ii].type) {
							
							plotBranchVos[i].plotBranchMatchFieldVos[ii]['type_name'] = this.pagedata.cmpType[iii].label;
						
						}
					}
				}
			};
			// 初始化附加条件的匹配类型
			for (var i in plotBranchVos) {
				for (var ii in plotBranchVos[i].plotBranchPremiseVos) {
					for (var iii in this.pagedata.cmpType) {
						if (this.pagedata.cmpType[iii].value === plotBranchVos[i].plotBranchPremiseVos[ii].type) {
							plotBranchVos[i].plotBranchPremiseVos[ii]['type_name'] = this.pagedata.cmpType[iii].label;
							
						}
					}
				}
			};
			for (var i in plotBranchVos) {
				for (var ii in plotBranchVos[i].plotBranchMatchFieldVos) {
					for (var iii in this.pagedata.comparison) {
						for (var iiii in this.pagedata.comparison[iii]) {
							if (this.pagedata.comparison[iii][iiii].value === plotBranchVos[i].plotBranchMatchFieldVos[ii].operator) {
								plotBranchVos[i].plotBranchMatchFieldVos[ii].operator_name = this.pagedata.comparison[iii][iiii].label;
								plotBranchVos[i].plotBranchMatchFieldVos[ii].compare = this.pagedata.comparison[iii];
							}
						}
					}
				}
			}
			// 初始化下一步
			for (var i in plotBranchVos) {
				for (var ii in this.allplot2) {
					if (this.allplot2[ii].plotNum === plotBranchVos[i].nextPlotNum) {
						plotBranchVos[i]['nextPlotNum_index'] = ii;
					}
				}
			}
			// 初始化设置
			for (var item of plotBranchVos) {
				if (item.includeCurInfo) {
					item['includeCurInfo_click'] = true;
				} else {
					item['includeCurInfo_click'] = false;
				}
				if (item.moveWithPlot) {
					item['moveWithPlot_click'] = true;
				} else {
					item['moveWithPlot_click'] = false;
				}
				if (item.postActive) {
					item['postActive_click'] = true;
					item['show_postURL'] = true;
				} else {
					item['postActive_click'] = false;
					item['show_postURL'] = false;
				}
			}
			// 初始化设置回答
			for (var i in plotBranchVos) {
				for (var ii in plotBranchVos[i].connectiveTexts) {
					for (var iii in this.allNPClist) {
						if (plotBranchVos[i].connectiveTexts[ii].npcName === this.allNPClist[iii].name) {
							plotBranchVos[i].connectiveTexts[ii]['NPC_index'] = iii;
							plotBranchVos[i].connectiveTexts[ii]['moodList'] = this.Dubbing.offline[this.allNPClist[iii].voiceClass].mood;
							let data2 = this.Dubbing.offline[this.allNPClist[iii].voiceClass].mood;
							for (var iii in data2) {
								if (plotBranchVos[i].connectiveTexts[ii].mood === data2[iii]) {
									plotBranchVos[i].connectiveTexts[ii]['Mood_index'] = iii;
								}
							}
						}
					}
				}
			};
			// 初始化条件类型
			for (var i in plotBranchVos) {
				for (var ii in plotBranchVos[i].plotBranchPremiseVos) {
					for (var iii in this.pagedata.moduleType) {
						if (this.pagedata.moduleType[iii].value === plotBranchVos[i].plotBranchPremiseVos[ii].module) {
							plotBranchVos[i].plotBranchPremiseVos[ii]['module_name'] = this.pagedata.moduleType[iii].label;
						}
					}
				}
			};
			this.$nextTick(function(){
				 this.opopop=true;
				 console.log("我是最后出现的。老铁")
			})
			// console.log(plotBranchVos,"数据")
		},
		// 跳转到剧情问答
		gotoquestions(id) {
			uni.navigateTo({
				url: './questions/questions?id=' + id
			});
		},
		// 跳转无匹配问答
		gotonotmatching() {
			let arr = this.dramaInfo.plotTextVos.map(item => {
				return item.npcName;
			});
			let plotUnknowText = JSON.stringify(this.allbranch.plotUnknowText);
			let npclist = JSON.stringify(arr);
			uni.navigateTo({
				url: './notmatching/notmatching?plotUnknowText=' + encodeURIComponent(plotUnknowText) + '&npclist=' + npclist
			});
		},
		//跳转到词句转换
		gowordsconversion() {
			uni.navigateTo({
				url: './Wordsconversion/Wordsconversion?plotId=' + this.dramaInfo.plotId
			});
		},
		// 获取NPC列表
		getNPClist() {
			let that = this;
			that.$request
				.get('/npc/instance_by_project_id/' + that.workinfo.id + '/')
				.then(res => {
					that.allNPClist = res.data;
					that.getDubbing();
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取配音
		getDubbing() {
			
			let that = this;
			that.$request
				.get('http://didi-gz4.jiaoyou365.com:9663/api/speakers')
				.then(res => {
					that.Dubbing = res;
					that.initialize()
					if(res===""){
						uni.showToast({
							title:"获取配音数据失败",
							icon:"none"
						});
						return
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
		const dramaInfo = JSON.parse(decodeURIComponent(data.dramaInfo));
		this.dramaInfo = dramaInfo;
		this.getalldrama();
	}
};
</script>

<style>
* {
	font-size: 28upx;
	color: #666666;
}
.one_input {
	display: flex;
	flex-direction: row;
}
.one_picker {
	margin-top: 29upx;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	padding: 10upx;
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
.branchbox {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20upx 20upx 20upx 20upx;
	margin-top: 10upx;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.branchbane {
	width: 70%;
	text-align: left;
}
.iconbox {
	width: 28%;
	display: flex;
	flex-direction: row;
}
.one_icon {
	flex: 1;
}
.example {
	padding: 0 30upx 30upx;
}

.example-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
	color: #464e52;
	padding: 30upx 30upx 30upx 50upx;
	margin-top: 20upx;
	position: relative;
	background-color: #fdfdfd;
	border-bottom: 1px #f5f5f5 solid;
}

.example-title__after {
	position: relative;
	color: #031e3c;
}

.example-title:after {
	content: '';
	position: absolute;
	left: 30upx;
	margin: auto;
	top: 0;
	bottom: 0;
	width: 6upx;
	height: 32upx;
	background-color: #ccc;
}

.example .example-title {
	margin: 40upx 0;
}

.example-body {
	padding: 30upx;
	background: #fff;
}

.example-info {
	padding: 30upx;
	color: #3b4144;
	background: #fff;
}

.example-body {
	padding: 10upx 30upx;
}

.button {
	margin: 20upx 0;
}

/* 提示窗口 */
.uni-tip {
	padding: 15px;
	width: 300px;
	background: #fff;
	box-sizing: border-box;
	border-radius: 10px;
}

.uni-tip-title {
	text-align: center;
	font-weight: bold;
	font-size: 16px;
	color: #333;
}

.uni-tip-content {
	padding: 15px;
	font-size: 14px;
	color: #666;
}

.uni-tip-group-button {
	margin-top: 10px;
	display: flex;
}

.uni-tip-button {
	width: 100%;
	text-align: center;
	font-size: 14px;
	color: #3b4144;
}

/* 插屏广告 */
.uni-image {
	position: relative;
	width: 200px;
	height: 200px;
}

.uni-image .image {
	width: 100%;
	height: 100%;
}

.uni-image-close {
	position: absolute;
	right: -30px;
	top: -30px;
	z-index: 2;
}

/* 底部分享 */
.uni-share {
	background: #fff;
}

.uni-share-title {
	line-height: 60upx;
	font-size: 24upx;
	padding: 15upx 0;
	text-align: center;
}

.uni-share-content {
	display: flex;
	flex-wrap: wrap;
	padding: 15px;
}

.uni-share-content-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25%;
	box-sizing: border-box;
}

.uni-share-content-image {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60upx;
	height: 60upx;
	overflow: hidden;
	border-radius: 10upx;
}

.uni-share-content-image .image {
	width: 100%;
	height: 100%;
}

.uni-share-content-text {
	font-size: 26upx;
	color: #333;
	padding-top: 5px;
	padding-bottom: 10px;
}

.uni-share-btn {
	height: 90upx;
	line-height: 90upx;
	border-top: 1px #f5f5f5 solid;
	text-align: center;
	color: #666;
}
.uni-collapse-cell {
	background: #fff;
}
.Branchbox_content {
	padding: 20upx !important;
	background: #fff;

	/* border:1px solid rgba(0, 0, 0, 0.2); */
}
.Branchbox /deep/ .uni-collapse-cell__content {
	/* padding:20upx !important; */
}
.operationbox {
	display: flex;
	flex-direction: row;
	text-align: center;
}
.operationbox * {
	flex: 1;
	text-align: center;
	color: #4693ec;
}
.headline {
	margin: 10upx;
}
.titlecenter {
	margin: 20upx;

	border-bottom: 1px solid #ebebeb;

	text-align: center;
	display: flex;
	flex-direction: row;
}
.one_utterance {
	margin-bottom: 50upx;
	display: flex;
	flex-direction: row;
	width: 100%;
}
.pickerlist {
	width: 90%;
}
.iconbox {
	width: 10%;

	display: flex;
	align-items: center; /* 垂直居中 */
}
.segmented-control {
	width: 100%;
}
.Branchbox /deep/ .uni-checkbox-wrapper {
	transform: scale(0.7);
}
.checkbox {
	display: flex;
	flex-direction: row;
}
.special {
	width: 40% !important;
	margin-left: 0px !important;
}
.special2 {
	width: 30% !important;
}
.nextPlotnum {
	width: 100%;
	text-align: center;
	color: #000000 !important;
	font-weight: bold;
	margin: 20upx;
}
.next_picker {
	margin: 20upx;
}
.one_button {
	color: #fff;
	background: #67c23a;
}
.tow_button {
	background: #409eff;
	color: #fff;
}
.three_button {
	background: #e6a23c;
	color: #fff;
}
.four_button {
	background: #f56c6c;
	color: #fff;
}
.five_button {
	background: #fff;
}
.Branch_box {
	border: 1px solid #dcdfe6;
}
page {
	padding: 20upx;
}
.Option {
	display: flex;
	flex-direction: row;
}
.number-box {
	display: flex;
	flex-direction: row;
	/* justify-content: center; */
	align-items: center;
}
.number-box .title {
	margin-right: 20upx;
}
.one_questions {
	margin-top: 10upx;
	position: relative;
	margin-bottom: 10upx;
	padding-top: 25upx;
	border: 1px solid #585858;
}
.delete_icon {
	position: absolute;
	top: 10upx;
	left: 10upx;
}
</style>
