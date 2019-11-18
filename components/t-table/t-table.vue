<template>
	<view class="t-table" >
		<slot />
	</view>
</template>

<script>
	export default {
		props: {
		
		},
		provide() {
			return {
				
			};
		},
		data() {
			return {};
		},
		created() {
			
		},
		methods: {
		
		}
	};
</script>

<style scoped>
	.t-table {
		width: 100%;
		border: 1px #d0dee5 solid;
		border-left: none;
		border-top: none;
		box-sizing: border-box;
	}

	.t-table>>>t-tr {
		display: flex;
	}

	.t-table>>>t-tr:nth-child(2n) {
		background: #f5f5f5;
	}

	/* #ifdef H5 */
	.t-table>>>.t-tr:nth-child(2n) {
		background: #f5f5f5;
	}
	/* #endif */
</style>
