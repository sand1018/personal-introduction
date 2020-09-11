<template>
	<view>
		<view class=" u-skeleton">
			<view v-if="loading" class="margin">
				<view class="u-skeleton-rect margin-top">1</view>
				<view class="u-skeleton-rect margin-top">1</view>
				<view class="u-skeleton-rect margin-top">1</view>
				<view class="u-skeleton-rect margin-top">1</view>
				<view class="u-skeleton-rect margin-top">1</view>
			</view>

			<view class=" bg-white parse " style="line-height: 1.8;padding: 50rpx 50rpx;">
				<u-parse :html="content" :lazy-load="true" :show-with-animation="true"></u-parse>
			</view>
		</view>

		<u-skeleton :loading="loading" :animation="true" bgColor="#fff"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				content: ''
			};
		},
		onLoad() {
			this.getProjects()
		},
		methods: {
			getProjects() {
				uniCloud.callFunction({
					name: "projects",
					data: {
						id: '6518b7395f47a5e400763bab337297fb'
					},
					success: (res) => {
						const {
							content
						} = res.result.data[0]
						this.content = content
						this.$nextTick(() => {
							this.loading = false
						})
					}
				})
			}
		}

	}
</script>

<style lang="scss">

	.parse {
		border-radius: 16rpx;
	}
</style>
