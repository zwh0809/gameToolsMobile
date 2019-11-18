<script>
	export default {
		globalData: {
			userinfo: {}
		},
		onLaunch: function() {

		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style>
	/* *{
		font-size: 28upx;
		color: #666666;
	} */
	.t-check-box{
		display: none !important;
	}
	.operation{
		margin-left: 20upx;
	}
	.m-top{
		margin-top: 20upx;
	}
	.uni-input{
		/* border-bottom: 1px solid rgba(0,0,0,.2); */
		
	}
	.t-td{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.operation_box{
		display: flex;
		flex-direction: row;
	}
	.operation_icon{
		flex: 1;
		text-align: center;
	}
	.addboder{
		border-bottom: 1px solid #F2F2F2;
	}
	.widthnine{
		width: 98% !important;
	}
	.oneselect{
		font-size: 28upx;
		display: flex;
		flex-direction: row;
		margin-bottom: 20upx;
	}
	.selecttitle{
		font-size: 30upx;
		color: #666666;
	    text-align: center;
		margin-right: 50upx;
		padding-left: 40upx;
		margin-top: 20upx;
		align-items: center; 
			/* 垂直居中 */
	}
	.oneselect /deep/ .show-box{
		width: 65% !important;
		height: 40px !important;
	}
</style>
