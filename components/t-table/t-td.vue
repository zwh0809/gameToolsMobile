<template>
	<view class="t-td">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				
			};
		},
		

		created() {
			
		},
		computed: {
		
		}
	};
</script>

<style>
	.t-td {
		flex: 1;
		display: flex;
		width: 100%;
		padding: 14upx;
		border-top: 1px #d0dee5 solid;
		border-left: 1px #d0dee5 solid;
		text-align: left;
		color: #555c60;
		font-size: 28upx;

	}
</style>
