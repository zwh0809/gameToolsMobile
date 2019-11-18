<template>
	<view>
		<view class="content" @touchstart="hideDrawer">
			<scroll-view
				class="msg-list"
				scroll-y="true"
				:scroll-with-animation="scrollAnimation"
				:scroll-top="scrollTop"
				:scroll-into-view="scrollToView"
				@scrolltoupper="loadHistory"
				upper-threshold="50"
			>
				<view class="row lastID" v-for="(row, index) in msgList" :key="index" :id="'msg' + row.msg.id">
					<!-- 系统消息 -->
					<block v-if="row.type == 'system'">
						<view class="system">
							<!-- 文字消息 -->
							<view v-if="row.msg.type == 'text'" class="text">{{ row.msg.content.text }}</view>
						</view>
					</block>
					<!-- 用户消息 -->
					<block v-if="row.type == 'user'">
						<!-- 自己发出的消息 -->
						<view class="my" v-if="row.msg.userinfo.uid == myuid">
							<!-- 左-消息 -->
							<view class="left">
								<!-- 文字消息 -->
								<view v-if="row.msg.type == 'text'" class="bubble"><rich-text :nodes="row.msg.content.text"></rich-text></view>
								<!-- 语言消息 -->
								<!-- <view v-if="row.msg.type == 'voice'" class="bubble voice" @tap="playVoice(row.msg)" :class="playMsgid == row.msg.id ? 'play' : ''">
									<view class="length">{{ row.msg.content.length }}</view>
									<view class="icon my-voice"></view>
								</view> -->
							</view>

							<view class="right"><image src="http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png"></image></view>
						</view>
						<!-- 别人发出的消息 -->
						<view class="other" v-if="row.msg.userinfo.uid != myuid">
							<!-- 左-头像 -->
							<view class="left"><image :src="row.msg.userinfo.face"></image></view>
							<!-- 右-用户名称-时间-消息 -->
							<view class="right">
								<view class="username">
									<view class="name">{{ row.msg.userinfo.username }}</view>
									<view class="time">{{ row.msg.time }}</view>
								</view>
								<view v-if="row.msg.type == 'welcome'" class="bubble voice" :class="playMsgid === index ? 'play' : ''">
									<rich-text :nodes="row.msg.content.text"></rich-text>
								</view>
								<view
									v-if="row.msg.type == 'text' && row.msg.content.audio"
									class="bubble voice"
									data-index="index"
									@tap="playVoice($event, row.msg, index)"
									:class="playMsgid === index ? 'play' : ''"
								>
									<rich-text :nodes="row.msg.content.text"></rich-text>
									<view class="icon other-voice"></view>
								</view>
								<view v-if="row.msg.type == 'text' && !row.msg.content.audio" class="bubble voice" :class="playMsgid === index ? 'play' : ''">
									<rich-text :nodes="row.msg.content.text"></rich-text>
								</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<!-- 抽屉栏 -->
		<!-- 底部输入栏 -->
		<view class="input-box" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<view class="textbox">
				<view
					class="voice-mode"
					:class="[isVoice ? '' : 'hidden', recording ? 'recording' : '']"
					@touchstart="voiceBegin"
					@touchmove.stop.prevent="voiceIng"
					@touchend="voiceEnd"
					@touchcancel="voiceCancel"
				></view>
				<view class="text-mode" :class="isVoice ? 'hidden' : ''">
					<view class="box"><textarea auto-height="true" v-model="textMsg" @focus="textareaFocus" /></view>
				</view>
			</view>
			<view class="send" :class="isVoice ? 'hidden' : ''" @tap="startdialogue"><view class="btn">发送</view></view>
		</view>
	</view>
</template>
<script>
import root from '../../../common/js/root.js';
export default {
	data() {
		return {
			//文字消息
			textMsg: '', //发送的文字消息
			//消息列表
			scrollAnimation: false,
			scrollTop: 0,
			scrollToView: '',
			msgList: [],
			myuid: 0,
			//录音相关参数
			isVoice: false,
			recording: false,
			//播放语音相关参数
			AUDIO: uni.createInnerAudioContext(),
			playMsgid: null,
			// 抽屉参数
			popupLayerClass: '',
			// more参数
			hideMore: true,
			//表情定义
			hideEmoji: true,
			windowsState: '',
			botInfo: {},
			client_id: '',
			chatKey: '',
			play_type: true,
			play_index: null, // 全局控制暂停
			play_stop:false,
		};
	},
	methods: {
		stop_play() {
			this.AUDIO.stop();
			this.playMsgid = null;
		},
		// 开始对话
		startdialogue() {
			let message = this.textMsg;
			var shortURL =
				top.location.href.substring(0, top.location.href.indexOf('?')) +
				'?bot=' +
				this.workinfo.id +
				',' +
				this.workinfo.name +
				',' +
				this.workinfo.botAccount +
				'&userId=' +
				this.newClientId +
				'&message=' +
				message;
			history.replaceState(null, null, shortURL);
			let check = message.replace(/ /g, '');
			if (!check) {
				message = '';
				return;
			}
			let url = root.talkUrl + ':8070/api/voiceTestChat';
			let postdata = {
				userId: this.client_id,
				message: message,
				chatKey: this.chatKey,
				nickname: 'visitor',
				botAccount: this.workinfo.botAccount
			};
			var nowDate = new Date();
			let lastid = this.msgList[this.msgList.length - 1].msg.id;
			lastid++;
			let task = {
				type: 'user',
				msg: {
					id: lastid,
					type: 'text',
					time: nowDate.getHours() + ':' + nowDate.getMinutes(),
					userinfo: { uid: 0, username: '游客', face: 'http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png' },
					content: { text: this.textMsg }
				}
			};
			this.msgList.push(task);
			// this.screenMsg(task);
			this.scrollTop = 9999;
			this.$nextTick(function() {
				this.scrollAnimation = true;
				this.scrollToView = 'msg' + task.msg.id;
			});
			this.textMsg = ''; //清空输入框
			let that = this;
			that.$request
				.post(url, postdata)
				.then(res => {
					if (res.code === 1) {
						that.chatKey = res.chatKey;
						let arr = [];
						for (var item of res.dialogList) {
							let face = '';
							for (var i in that.botInfo.npcHeadImgUrl) {
								if (item.npcName === i) {
									face = that.botInfo.npcHeadImgUrl[i];
									console.log(i, 'NPC任务');
									console.log(face, '头像');
								}
							}
							let lastid = that.msgList[that.msgList.length - 1].msg.id;
							lastid++;
							let obj = {
								type: 'user',
								msg: {
									id: lastid,
									type: 'text',
									time: nowDate.getHours() + ':' + nowDate.getMinutes(),
									userinfo: {
										uid: 1,
										username: item.npcName,
										face: face
									},
									content: {
										text: item.text,
										audio: item.audio ? item.audio : ''
									}
								}
							};
							arr.push(obj);
						}
						uni.vibrateLong();
						that.msgList.push(...arr);
						this.scrollTop = 9999;
						this.$nextTick(function() {
							this.scrollToView = 'msg' + that.msgList[that.msgList.length - 1].msg.id;
							this.scrollAnimation = true;
						});
					} else {
						uni.showToast({
							title: '服务器错误',
							icon: 'none'
						});
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 获取头像
		getHeadImg: function() {
			let that = this;
			that.$request
				.get('/api/works?include=worksName,authorName,npcHeadImgUrl&aipioneerUsername=' + that.workinfo.botAccount)
				.then(res => {
					if (res.code === 1) {
						that.botInfo = res.data;
						that.getMsgList();
					}
				})
				.catch(error => {
					console.error('error:', error);
				});
		},
		// 接受消息(筛选处理)
		screenMsg(msg) {
			uni.vibrateLong();
			this.$nextTick(function() {
				// 滚动到底
				this.scrollToView = 'msg' + msg.msg.id;
			});
		},
		//触发滑动到顶部(加载历史信息记录)
		loadHistory(e) {},
		// 加载初始页面消息
		getMsgList() {
			var nowDate = new Date();
			// 消息列表
			let list = [
				// { type: 'system', msg: { id: 0, type: 'text', content: { text: '欢迎进入HM-chat聊天室' } } },
				{
					type: 'user',
					msg: {
						id: 1,
						type: 'welcome',
						time: nowDate.getHours() + ':' + nowDate.getMinutes(),
						userinfo: { uid: 1, username: this.botInfo.worksName, face: 'http://didi-gz4.jiaoyou365.com/Editor//upload/img/npc/default.png' },
						content: { text: '欢迎来到' + this.botInfo.worksName + ',' + '请说继续剧情或者重新开始' }
					}
				}
			];

			this.msgList = list;
			// 滚动到底部
			this.$nextTick(function() {
				//进入页面滚动到底部
				this.scrollTop = 9999;
				this.$nextTick(function() {
					this.scrollAnimation = true;
				});
			});
		},
		// 隐藏抽屉
		hideDrawer() {
			this.popupLayerClass = '';
			setTimeout(() => {
				this.hideMore = true;
				this.hideEmoji = true;
			}, 150);
		},
		//获取焦点，如果不是选表情ing,则关闭抽屉
		textareaFocus() {
			if (this.popupLayerClass == 'showLayer' && this.hideMore == false) {
				this.hideDrawer();
			}
		},
		// 发送文字消息
		sendText() {
			this.hideDrawer(); //隐藏抽屉
			if (!this.textMsg) {
				return;
			}
			let content = this.replaceEmoji(this.textMsg);
			let msg = { text: content };
			this.sendMsg(msg, 'text');
			this.textMsg = ''; //清空输入框
		},
		//替换表情符号为图片
		replaceEmoji(str) {
			let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
				console.log('item: ' + item);
				for (let i = 0; i < this.emojiList.length; i++) {
					let row = this.emojiList[i];
					for (let j = 0; j < row.length; j++) {
						let EM = row[j];
						if (EM.alt == item) {
							//在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径
							//比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
							let onlinePath = 'https://s2.ax1x.com/2019/04/12/';
							let imgstr = '<img src="' + onlinePath + this.onlineEmoji[EM.url] + '">';
							console.log('imgstr: ' + imgstr);
							return imgstr;
						}
					}
				}
			});
			return '<div style="display: flex;align-items: center;word-wrap:break-word;">' + replacedStr + '</div>';
		},
		sendSystemMsg(content, type) {
			let lastid = this.msgList[this.msgList.length - 1].msg.id;
			lastid++;
			let row = { type: 'system', msg: { id: lastid, type: type, content: content } };
			this.screenMsg(row);
		},
		// 播放语音
		playVoice(e, msg, index) {
			this.playMsgid = index;
			this.AUDIO.src = msg.content.audio;
			if (this.play_index === index) {
				// 如果是点击重复的一句话
				this.play_stop=!this.play_stop;
				if (this.play_stop) {
					this.stop_play();
				} else {
					this.$nextTick(function() {
						this.AUDIO.play();
					});
				}
			} else {
				this.play_stop = false;
				this.play_index = index;
				this.$nextTick(function() {
					this.AUDIO.play();
				});
			}
		},
		discard() {
			return;
		},
		base64_encode(str) {
			var c1, c2, c3;
			var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			var i = 0,
				len = str.length,
				strin = '';
			while (i < len) {
				c1 = str.charCodeAt(i++) & 0xff;
				if (i == len) {
					strin += base64EncodeChars.charAt(c1 >> 2);
					strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
					strin += '==';
					break;
				}
				c2 = str.charCodeAt(i++);
				if (i == len) {
					strin += base64EncodeChars.charAt(c1 >> 2);
					strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
					strin += base64EncodeChars.charAt((c2 & 0xf) << 2);
					strin += '=';
					break;
				}
				c3 = str.charCodeAt(i++);
				strin += base64EncodeChars.charAt(c1 >> 2);
				strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
				strin += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
				strin += base64EncodeChars.charAt(c3 & 0x3f);
			}
			return strin;
		}
	},
	onLoad(option) {
		this.AUDIO.onEnded(res => {
			this.playMsgid = null;
		});
		this.workinfo = uni.getStorageSync('workinfo');
		this.getHeadImg();
	},
	onShow() {
		this.scrollTop = 9999999;
		this.stop_play();
		this.playMsgid = null;
	},
	onUnload() {
		this.stop_play();
	}
};
</script>
<style lang="scss">
@import '@/static/HM-chat/css/style.scss';
</style>
