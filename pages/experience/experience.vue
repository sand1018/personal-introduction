<template>
	<view>
		<view class="cu-timeline u-skeleton" style="min-height: 100vh;">
			<view v-for="(item,index) in experience" :key="item._id" class="cu-item" :class="item.dotcolor">
				<view class="content">
					<view class="text-lg text-bold u-skeleton-rect">
						{{item.company}}
					</view>
					<view class="cu-capsule radius margin-top u-skeleton-rect">
						<view :class="item.bg" class="cu-tag ">{{item.position}}</view>
						<view :class="item.line" class="cu-tag ">{{item.duration}}</view>
					</view>
					<view class="describe text-gray margin-top-sm u-skeleton-rect">
					{{item.info}}
					</view>
					<view class="margin-top u-skeleton-rect">{{item.describe}}</view>
				</view>
			</view>
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#fff"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				experience: [{
					dotcolor: 'text-red',
					company: 'xxxxxxx',
					duration: 'xxxxxx',
					info: 'xxxxxxxx',
					describe: 'xxxxxxxxx'
				}],
				loading: true
			};
		},
		onLoad() {
			this.getExperience()
		},
		methods: {
			getExperience() {
				uniCloud.callFunction({
					name: 'experience',
					data: {},
					success: (res) => {
						const {
							data
						} = res.result
						this.experience =  data
						this.$nextTick(() => {
							this.loading = false
						})
						console.log(data)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.describe {

		line-height: 1.8;
	}
</style>
