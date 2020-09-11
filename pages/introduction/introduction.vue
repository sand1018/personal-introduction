<template>
	<view>
		<view class="title text-white" :class="topNavStyle.class" :style="topNavStyle.style">
			<u-navbar :is-back="true" title="个人简介" title-color="#fff" back-icon-color="#fff" :border-bottom="false" :background="background"></u-navbar>
		</view>
		<view class="top-swiper u-skeleton" style="min-height: 100vh;">
			<view class="bg">
				<view class="placeholder"></view>
				<view class="image">
					<image src="../../static/img/bg.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="box">
				<view style="height: 44px;"></view>
				<view class="margin-lr-lg margin-top-lg bg-white padding-xl " style="border-radius: 12rpx;">
					<view class="flex flex-direction align-center">
						<image src="../../static/img/avatar.jpg" mode="aspectFill" style="height: 120rpx;width: 120rpx;border: 2px solid #ccc;border-radius: 50%;"
						 class="u-skeleton-circle"></image>
						<view class="text-lg margin-top-sm text-bold text-shadow text-blue u-skeleton-rect">
							{{info.nickname}}
						</view>
						<view class="margin-top u-skeleton-rect">
							{{info.describe}}
						</view>
						<view class="margin-top flex self-stretch justify-between u-skeleton-rect">
							<view @click="addWeixin">
								<u-icon name="weixin-fill" color="#91d18b"></u-icon>
								<text style="padding-left: 6rpx;">添加微信</text>
							</view>
							<view @click="makePhoneCall">
								<u-icon name="phone-fill" color="#91d18b"></u-icon>
								<text style="padding-left: 6rpx;">拨打电话</text>
							</view>
							<view @click="addContact">
								<u-icon name="bookmark-fill" color="#91d18b"></u-icon>
								<text style="padding-left: 6rpx;">保存通讯录</text>
							</view>
						</view>
					</view>
				</view>
				<view v-if="info.education.show" class="padding-lr-lg   cell-lg margin-lr-lg shadow">
					<u-divider> <text class="text-bold text-lg text-black">教育经历</text></u-divider>
					<view class="text-gray padding-tb">
						<view class="margin-top">
							<u-icon name="clock"></u-icon>
							<text style="padding-left: 10rpx;">{{info.education.time}}</text>
						</view>
						<view class="margin-top">
							<u-icon name="home"></u-icon>
							<text style="padding-left: 10rpx;">{{info.education.school}}</text>
						</view>
						<view class="margin-top">
							<u-icon name="tags"></u-icon>
							<text style="padding-left: 10rpx;">{{info.education.major}}</text>
						</view>
					</view>
				</view>
				<view class="padding-lr-lg   cell-lg margin-lr-lg shadow">
					<u-divider> <text class="text-bold text-lg text-black">博客与GitHub</text></u-divider>
					<view class="padding-tb">
						<view class="text-gray margin-top">
							简书：<text :selectable="true">{{info.community.blog}}</text>
						</view>
						<view class="text-gray margin-top">
							GitHub：<text :selectable="true">{{info.community.github}}</text>
						</view>
					</view>

				</view>
				<view class="padding-lr-lg   cell-lg margin-lr-lg shadow">
					<u-divider> <text class="text-bold text-lg text-black">自我评价</text></u-divider>
					<view class="padding-tb">
						<view v-for="(item,index) in info.evaluate.list" :key="index" class="text-gray margin-top">
							{{item}}
						</view>
					</view>

				</view>
				<view class="" style="height: 100rpx;">

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
				pageScrollTop: 0, // 页面滚动距离
				info: {
					avatar: 'https://cdn.img.wenhairu.com/images/2020/08/28/wsgDK.md.jpg',
					describe: 'xxxxxxxx',
					weixin: 'https://cdn.img.wenhairu.com/images/2020/08/28/wsMS3.jpg',
					nickname: 'Journey',
					phone: 'xxxxxx',
					education: {
						show: true,
						time: 'xxxxx',
						school: 'xxxx',
						major: 'xxxxx'
					},
					community: {
						show: true,
						blog: 'https://www.jianshu.com/u/fea6ff7cb848',
						github: 'https://github.com/sand1018'
					},
					evaluate: {
						show: true,
						list: []
					}
				},
				loading: true
			}
		},
		computed: {
			topNavStyle() {
				let r = this.pageScrollTop / 100;
				return {
					"class": r >= 0.85 ? 'style2' : '',
					"style": `background-color: rgba(66, 185, 131,${r>=1?1:r});`
				}
			}
		},
		onLoad() {
			this.getIntrodution()
		},
		// 页面滚动监听
		onPageScroll(e) {
			this.pageScrollTop = Math.floor(e.scrollTop);
		},
		methods: {
			addContact() {
				let phone = this.info.phone.toString()
				uni.addPhoneContact({
					firstName: this.info.name,
					mobilePhoneNumber: phone
				})
			},
			makePhoneCall() {
				let phone = this.info.phone.toString()
				uni.makePhoneCall({
					phoneNumber: phone
				})
			},
			addWeixin() {
				uni.previewImage({
					urls: [this.info.weixin]
				})
			},
			getIntrodution() {
				uniCloud.callFunction({
					name: 'introduction',
					data: {
						id: 'b5416b755f4905d000a311c92a7cfbc5',
					},
					success: (res) => {
						this.info = res.result.data[0]
						this.$nextTick(() => {
							this.loading = false
						})
						console.log(this.info)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "lib/global.scss";

	page {
		background-color: #fff;
	}

	/* 标题栏 */
	.title {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		// padding-top: var(--status-bar-height);
		z-index: 10;
		background-color: rgba(66, 185, 131, 0);
		color: rgba(255, 255, 255, 0.8);

		&>view {
			height: 44px;
		}

		.box1 {
			width: 60rpx;
			margin: 0 40rpx;
			font-size: 36rpx;
		}


		.tab {
			&>view {
				margin: 0 30rpx;
				line-height: 64rpx;
				font-size: 36rpx;
				position: relative;
				letter-spacing: 0;
				transition: transform 0.3s ease-in-out 0s;
				transform: scale(1, 1);

				&.active {
					color: rgba(255, 255, 255, 1);
					transform: scale(1.15, 1.15);
				}
			}
		}

		&.style2 {
			color: #FFF;
			background-color: rgba(66, 185, 131, 1);

			.tab {
				&>view {
					&.active {
						color: #FFF;
					}
				}
			}
		}
	}

	.top-swiper {
		margin-bottom: 30rpx;

		.bg {
			padding-top: var(--status-bar-height);
			box-sizing: content-box;
			width: 100%;
			position: relative;

			.placeholder {
				box-sizing: content-box;
				padding-top: 600rpx;
				height: 44px;
			}

			.image {
				box-sizing: content-box;
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;

				&::after {
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 1;
					bottom: 0;
					left: 0;
					height: 65%;
					background-image: linear-gradient(to bottom, transparent, #FFF);
				}

				>image {
					position: absolute;
					box-sizing: content-box;
					padding: 60px;
					top: 0;
					left: 0;
					width: 100%;
					height: 80%;
					top: -60px;
					left: -60px;
					filter: blur(10px);
				}
			}
		}

		.box {
			padding-top: var(--status-bar-height);
			box-sizing: content-box;
			position: absolute;
			z-index: 5;
			top: 0;
			left: 0;
			width: 100%;
			height: auto;
		}

		.swiper {
			height: 600rpx;
			margin: 0 20rpx;

			.le-img {
				width: 100%;
				height: 100%;
				display: block;
				transform: scale(0.9);
				transition: transform 0.3s ease-in-out 0s;
				border-radius: 4px;

				&.le-active {
					transform: scale(1);
				}
			}

		}
	}

	.cell-lg {
		margin-top: 60rpx;
	}
</style>
