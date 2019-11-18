<template>
	<view class="t-th">
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
	.t-th {
	
		flex: 1;
		display: flex;
		font-size: 30upx;
		font-weight: bold;
		text-align: left;
		color: #3b4246;
		border-left: 1px #d0dee5 solid;
		border-top: 1px #d0dee5 solid;
		padding: 15upx;
	}
</style>
