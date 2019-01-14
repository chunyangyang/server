<template>
	<div class="around-container">
		<div class="goods-top clearfix">
			<h3 class="top-title">热门推荐</h3>
		</div>
		<div class="goods-content clearfix">
			<goods-right
				:curr-goods="currGoods"
			></goods-right>
		</div>
</div>
</template>
<script>
import GoodsRight from './common/GoodsRight'
export default {
	data () {
		return {
			topTitle: '热门推荐',
			topSubStatus: 'hotGoods',
			currGoods: [],
			hotGoods: []
		}
	},
	ready () {
		this.currGoods = this.hotGoods
		this.getCoachInfoList('weishang', this)
	},
	methods: {
		topSubEnter (key) {
			this.topSubStatus = key
			this.currGoods = this[key]
		},
		getCoachInfoList (menuType, obj) {
				var url = 'http://www.zhujingcheng.cn/showsmalltype/showsmalltypelist'
				var params = {
					type: menuType
				}
				var otherParam = {
					emulateJSON: true
				}
				obj.$http.post(url, params, otherParam)
				.then(function (res) {
				this.currGoods = res.body.data
			}, (res) => {
							// error callback
					})
		}
	},
	components: {
		'goods-right': GoodsRight
	}
}
</script>

<style>
.around-container {
	width: 1226px;
	height: auto;
	margin: 0 auto;
}
.goods-content {
	width: 1226px;
	height: auto;
	margin: 0 auto;
}
.top-title {
  float: left;
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
</style>
