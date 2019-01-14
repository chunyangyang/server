<template>
	<div class="goods-right">
		<ul class="goods-right-content">
			<template
				v-for="goods in currGoods"
				v-if="$index < currGoods.length">
				<li class="goods-right-item">
					<span class="discount-label"
						:class="goods.discountType">{{goods.discount}}</span>
					<a :href="goods.path" target="_blank">
						<img :src="goods.img" alt="" />
						<h3 class="goods-title">{{goods.name}}</h3>
					</a>
					<p class="goods-price">
						<font color="black" size="2">开始时间：</font>	{{item.time * 1000 | datefmt ('YYYY-MM-DD HH:mm:ss')}}
						<!-- <span
							v-if="goods.discountType === 'discount'"
							class="old-price">
							{{goods.oldPrice}}元
						</span> -->
					</p>
					<p class="goods-rank">
						{{goods.count}}人参与
					</p>
					<div
						v-show="goods.reviewStatus"
						class="review">
						<span class="review-content">{{goods.reviewDesc}}</span>
						<span class="review-author">来自于{{goods.reviewAuthor}}的评价</span>
					</div>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		currGoods: {
			required: true,
			type: Array
		}
	},
	computed: {
		lastGoods: function () {
			if (this.currGoods && this.currGoods.length > 0) {
				return this.currGoods[this.currGoods.length - 1]
			} else {
				return null
			}
		}
	}
}
</script>

<style>
.goods-right {
	float: left;
	width: 1392px;
	height: 628px;
	.goods-right-content {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
	}
}

.goods-right-item {
	position: relative;
	margin: 0 0 14px 14px;
	padding: 20px 0;
	width: 234px;
	height: 260px;
	background: #fff;
	cursor: pointer;
	transition: all 0.3s;
	&:hover {
		transform: translateY(-1px);
		box-shadow: 5px 5px 20px #ccc;
		.review {
			height: 76px;
			opacity: 1;
		}
	}
	.discount-label {
		position: absolute;
		top: 0;
		left: 50%;
		width: 64px;
		height: 20px;
		line-height: 20px;
		margin-left: -32px;
		font-size: 12px;
		text-align: center;
		color: #fff;
		z-index: 4;
		&.free {
			background-color: #ffac13;
		}
		&.new {
			background-color: #83c44e;
		}
		&.discount {
			background-color: #e53935;
		}
	}
	.old-price {
		color: #b0b0b0;
		text-decoration: line-through;
	}
	img {
		display: block;
		width: 160px;
		height: 160px;
		margin: 0 auto;
	}
	.goods-title {
		font-size: 14px;
		text-align: center;
		color: #333;
		font-weight:normal;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.goods-price {
		color: #ff6700;
		font-size: 14px;
		text-align: center;
	}
	.goods-rank {
		margin: 0 10px;
		font-size: 12px;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #b0b0b0;
	}
}

.goods-right-small {
	width: 234px;
	height: 260px;
	.item-small {
		width: 234px;
		height: 143px;
		margin: 0 0 14px 14px;
		padding: 30px 0 0 30px;
		background: #fff;
		cursor: pointer;
		transition: all 0.3s;
		box-sizing: border-box;
		&:hover {
			transform: translateY(-1px);
			box-shadow: 5px 5px 20px #ccc;
		}
		.desc {
			float: left;
			width: 80px;
			height: 100%;
			margin-right: 20px;
			.title {
				font-size: 14px;
				text-align: center;
				color: #333;
				font-weight: normal;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			.price {
				display: block;
				width: 100%;
				color: #ff6700;
				font-size: 14px;
				text-align: center;
			}
		}
		.small-img {
			float: left;
			width: 80px;
			height: 80px;
		}
	}
	.icon-arrow {
		margin-top: 5px;
		color: #ff6700;
	}
}

.review {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 234px;
	font-size: 12px;
	height: 0;
	line-height: 18px;
	overflow: hidden;
	box-sizing: border-box;
	color: #fff;
	background: #ff6700;
	opacity: 0;
	transition: all 0.3s;
	.review-content {
		display: block;
		text-align: center;
		margin: 8px 30px;
	}
	.review-author {
		display: block;
		text-align: center;
		margin-bottom: 8px;
	}
}
</style>
