<template>
	<view class="u-skeleton">
		<view class="margin  content radius padding bg-white" style="font-size: 28rpx;line-height: 2;">
			<view class="skill-item flex u-skeleton-rect " v-for="(item,index) in content.skills" :key="index">
				<view class="dot margin-right " :style="{background:item.color}"></view>
				<view class="skill-content padding-tb" style="overflow: hidden;flex: 1;">
					{{item.content}}
				</view>
			</view>
		</view>
		<view class="bg-white margin-top padding-tb">
			<view v-for="(item,index) in content.skills_list" :key="index" class="skill-progress padding">
				<view class="action flex align-center">
					<text class="cuIcon-title  text-xl" :class="item.textcolor"></text>
					{{item.name}}
				</view>
				<view class="cu-progress round lg striped active margin-top-sm ">
					<view class="" :class="item.color" :style="{width:item.persent + '%'}">{{item.persent + '%'}}</view>
				</view>
			</view>
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#f1f1f1"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: {
					skills: [{
							content: ''
						},
						{
							content: ''
						},
						{
							content: ''
						}
					]
				},
				loading: true
			};
		},
		filters:{
			colorFilter(e){
				console.log(e)
			}
		},
		onLoad() {
			this.getSkillsData()
		},
		methods: {
			getSkillsData() {
				uniCloud.callFunction({
					name: 'skills',
					data: {
						id: 'ac5f38825f472802006d993d52c686ee'
					},
					success: (res) => {
						console.log(res)
						this.content = res.result.data[0]
						this.content.skills_list.forEach(item=>{
							item.textcolor = item.color.replace('bg','text')
						})
						this.loading = false
					}
				})
			}
		}

	}
</script>

<style lang="scss">
	page {
		background-color: #F1F1F1;
	}

	.content {
		border-radius: 16rpx;

		.dot {
			position: relative;
			width: 26rpx;
			height: 26rpx;
			border-radius: 50%;
			background-color: #4682b4;
			margin-top: 44rpx;

			&::before {
				position: absolute;
				content: "";
				width: 100%;
				height: 100%;
				background: inherit;
				border-radius: inherit;
				animation: wave 2s ease-out infinite;

				@keyframes wave {
					0% {
						transform: scale(1.2);
						opacity: 0.8;
					}

					50% {
						transform: scale(1.5);
						opacity: 0.6;
					}

					100% {
						transform: scale(1.2);
						opacity: 0.8;
					}
				}
			}

		}

		.skill-item {

			&:first-child {
				margin-top: 0;

				.skill-content {
					border-top: none;
				}

			}

			.skill-content {
				border-top: 1px solid #ccc;
			}
		}

	}
</style>
