export default {
	data() {
		return {

		}
	},
	onShareAppMessage(res) {
		if (res.from === 'button') { // 来自页面内分享按钮
			console.log(res.target)
		}
		return {
			title: '个人简历',
			path: `${this.$scope.route}`,
			imageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2745578700,1174389269&fm=26&gp=0.jpg'
		}
	}
}
