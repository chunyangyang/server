<template>
	<div class="goods-container">
		<top-header></top-header>
		<xian></xian>
		<top-banner></top-banner>
		<goods-collocation class="goodscc"></goods-collocation>
		<temp-footer></temp-footer>
	</div>
</template>
<script>
import GoodsCollocation from './GoodsCollocation'
import TopHeader from './TopHeader'
import xian from './xian'
import TopBanner from './TopBanner'
import TempFooter from './TempFooter'
export default {
	components: {
		'goods-collocation': GoodsCollocation,
		'top-header': TopHeader,
		'top-banner': TopBanner,
		'xian': xian,
		'temp-footer': TempFooter
	}
}
</script>

<style>
/* .goods-container {
	width: 100%;
	height: auto;
	background: #f5f5f5;
	padding-bottom: 40px;
	z-index: 100000;
} */
.goodscc{
	width: 100%;
	height: auto;
	background: #f5f5f5;
	padding-bottom: 40px;
	z-index: 100000;

}
</style>
