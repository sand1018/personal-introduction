<template name="basics">
	<view class="page">
		<view class="popup" @click="show=false" @touchmove="show=false" :class="show?'':'popshow'">
			<view class="content">
				<view class="name">
					Journey
				</view>
				<view class="job">
					<view class="title">
						<text v-for="(item,index) in job" :key="index" :style="{'animation-delay':index * 0.1 + 's'}">{{item}}</text>
					</view>
				</view>
				<view class="enter ">
					<text v-for="(item,index) in enter" :key="index" :style="{'animation-delay':index / 10 + 's'}">{{item}}</text>
				</view>
			</view>
			<view class="loading">
				<view class="dot"></view>
				<view class="dot"></view>
				<view class="dot"></view>
				<view class="dot"></view>
				<view class="dot"></view>
			</view>
		</view>
		<view class="box ">
			<view class="">
				<view class="info flex align-center " :style="{animation:!show?('show ' + (1*0.2+1) + 's 1'):'',margin:'0 60rpx'}">
					<image style="height: 120rpx;width: 120rpx;" class="radius" src="../../static/img/avatar.jpg" mode="aspectFill"></image>
					<view class="margin-left name text-white text-xl">
						<view class="" style="font-size: 50rpx;">
							Journey
						</view>
						<view class="margin-top-xs">
							Code & Input & Output
						</view>
					</view>
				</view>
				<view class="nav-list margin-top-lg">
					<navigator hover-class="none" :url="item.url" class="nav-li" navigateTo :class="'bg-'+item.color" :style="[{animation:!show? ('show ' + ((index+2)*0.2+1) + 's 1'):''}]"
					 v-for="(item,index) in elements" :key="index">
						<view class="nav-title">{{item.title}}</view>
						<view class="nav-name">{{item.name}}</view>
						<text :class="'cuIcon-' + item.cuIcon"></text>
					</navigator>
				</view>
			</view>
		</view>
		<view class="snow" v-for="item in 200" :key="item"></view> 
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				show: true,
				elements: [{
						title: '个人简介',
						name: 'introduction',
						color: 'cyan',
						cuIcon: 'newsfill',
						url: '/pages/introduction/introduction'
					},
					{
						title: '工作经历',
						name: 'experience',
						color: 'blue',
						cuIcon: 'colorlens',
						url: '/pages/experience/experience'
					},
					{
						title: '项目经验',
						name: 'projects',
						color: 'red',
						cuIcon: 'presentfill',
						url: '/pages/projects/projects'
					},

					{
						title: '职业技能',
						name: 'Skills',
						color: 'green',
						cuIcon: 'favorfill',
						url: '/pages/skills/skills'
					}
				],
				job: [],
				enter: ['']
			};
		},
		onShow() {

		},
		onLoad() {
			this.job = 'Web前端工程师'.split('')
			this.enter = 'enter'.split('')
		},
		watch: {

		},
		methods: {

		}
	}
</script>

<style>
	.page {
		height: 100vh;
		background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		overflow: hidden;
		filter: drop-shadow(0 0 10px white);
	}
</style>

<style lang="scss" scoped>
	.popup {
		height: 100vh;
		width: 100%;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		background-color: #303030;
		transform: scaleY(1);
		transition: all 0.3s ease-in;
		transform-origin: 0 0;
		overflow: hidden;

		.content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			color: #fff;

			.name {
				font-size: 60rpx;
				color: #fff;
				font-family: 'Pacifico', cursive;
				animation: shining 0.1s alternate infinite;
				letter-spacing: 6rpx;

				@keyframes shining {
					from {
						text-shadow: 0 0 6rpx rgba(182, 211, 207, 0.9),
							0 0 30rpx rgba(182, 211, 207, 0.3), 0 0 12rpx rgba(15, 115, 223, 0.5),
							0 0 21rpx rgba(15, 115, 223, 0.9), 0 0 34rpx rgba(15, 115, 223, 0.8),
							0 0 54rpx rgba(15, 115, 223, 0.9);
					}

					to {
						text-shadow: 0 0 6rpx rgba(182, 211, 207, 1),
							0 0 30rpx rgba(182, 211, 207, 0.4), 0 0 12rpx rgba(15, 115, 223, 0.6),
							0 0 22rpx rgba(15, 115, 223, 0.8), 0 0 38rpx rgba(15, 115, 223, 0.9),
							0 0 60rpx rgba(15, 115, 223, 1);
					}
				}
			}

			.job {
				font-size: 10rpx;
				margin-top: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 72vw;
				height: 100rpx;
				text-align: left;
				box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
					0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
					0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
				backdrop-filter: blur(20px);
				transition: 0.5s ease;

				&:hover {
					box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
						0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
						0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
				}

				.title {
					padding-left: 0.375em;
					font-size: 3.6em;
					text-align: left;
					font-family: Lato, sans-serif;
					font-weight: 200;
					letter-spacing: 0.75em;
					color: white;
					display: flex;
					flex-wrap: wrap;
					line-height: 1.8;
					color: white;
					font-family: Lora, serif;
					white-space: pre;

					text {
						animation: glow 0.8s both;
					}

					@keyframes glow {
						from {
							opacity: 0;
						}

						65% {
							opacity: 1;
							text-shadow: 0 0 25px white;
						}

						75% {
							opacity: 0.7;
						}

						to {
							opacity: 1;
						}
					}

				}
			}

			.enter {
				letter-spacing: 4px;
				margin-top: 100rpx;
				display: flex;
				color: white;
				justify-content: center;
				font-family: "Baloo Bhaijaan", cursive;
				text-transform: uppercase;
				text {
					transform: translateY(6rpx);
					animation: bounce 0.3s ease infinite alternate;
				}
				@keyframes bounce {
					to {

						transform: translateY(-6rpx);
					}
				}


			}

			@keyframes wave {

				50%,
				75% {
					transform: scale(2);
				}

				80%,
				100% {
					opacity: 0;
				}
			}

		}

		.loading {
			margin-top: 300rpx;
			$colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
			display: flex;
			justify-content: center;
			animation-delay: 1s;
			font-size: 10rpx;
			position: fixed;
			bottom: 200rpx;
			left: 50%;
			transform: translateX(-50%);

			.dot {
				position: relative;
				width: 2em;
				height: 2em;
				margin: 0.8em;
				border-radius: 50%;

				&::before {
					position: absolute;
					content: "";
					width: 100%;
					height: 100%;
					background: inherit;
					border-radius: inherit;
					animation: wave 2s ease-out infinite;
				}

				@for $i from 1 through 5 {
					&:nth-child(#{$i}) {
						background: nth($colors, $i);

						&::before {
							animation-delay: $i * 0.2s;
						}
					}
				}
			}
		}

	}

	.popshow {
		transform: scaleY(0);

	}

	.box {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
	}

	@function random_range($min, $max) {
		$rand: random();
		$random_range: $min + floor($rand * (($max - $min) + 1));
		@return $random_range;
	}

	.snow {
		$total: 200;
		position: absolute;
		width: 10rpx;
		height: 10rpx;
		background: white;
		border-radius: 50%;

		@for $i from 1 through $total {
			$random-x: random(1000000) * 0.0001vw;
			$random-offset: random_range(-100000, 100000) * 0.0001vw;
			$random-x-end: $random-x + $random-offset;
			$random-x-end-yoyo: $random-x + ($random-offset / 2);
			$random-yoyo-time: random_range(30000, 80000) / 100000;
			$random-yoyo-y: $random-yoyo-time * 100vh;
			$random-scale: random(10000) * 0.0001;
			$fall-duration: random_range(10, 30) * 1s;
			$fall-delay: random(30) * -1s;

			&:nth-child(#{$i}) {
				opacity: random(10000) * 0.0001;
				transform: translate($random-x, -10px) scale($random-scale);
				animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
			}

			@keyframes fall-#{$i} {
				#{percentage($random-yoyo-time)} {
					transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
				}

				to {
					transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
				}
			}
		}
	}
</style>
