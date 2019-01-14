<template>
	<footer class="footer-wrap">
		<div class="footer">
			<div class="footer-service">
				<ul class="service clearfix">
					<li class="service-item">
						<a href="javascript:;">
							<span class="icon"><i class="fa fa-gavel"></i></span>
							赞助路遥联盟
						</a>
					</li>
					<li class="service-item">
						<a href="javascript:;">
							<span class="icon"><i class="fa fa-history"></i></span>
            加入路遥联盟
						</a>
					</li>
					<li class="service-item">
						<a href="javascript:;">
							<span class="icon"><i class="fa fa-history"></i></span>
							了解路遥联盟
						</a>
					</li>
					<li class="service-item">
						<a href="javascript:;">
							<span class="icon"><i class="fa fa-gift"></i></span>
							新用户登陆有奖
						</a>
					</li>
					<li class="service-item">
						<a href="javascript:;">
							<span class="icon"><i class="fa fa-location-arrow"></i></span>
							了解更多
						</a>
					</li>
				</ul>
			</div>
			<div class="site-info">
				<div class="footer-explan clearfix">
					<img class="logo-img" src="../assets/img/gg.png" alt="" />
					<div class="explan-content">
						<ul class="links clearfix">
							<!-- <li class="link-item"><a href="//www.mi.com/index.html"></a></li> -->
						</ul>
						<p class="explan-txt">
							©<a href="//www.mi.com/index.html">mi.com</a> 粤ICP证110507号 京ICP备00000000号 <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=0000000" target="_blank">京公网安备11010802020134号 </a><br/>
							 违法和不良信息举报电话：151-1912-7567
						</p>
					</div>
					<img class="logo-explan logo-explan-first" src="http://privacy-policy.truste.com/privacy-seal/seal?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8" alt="" />
					<img class="logo-explan" src="http://s01.mifile.cn/i/v-logo-2.png" alt="" />
					<img class="logo-explan" src="http://s01.mifile.cn/i/v-logo-1.png" alt="" />
					<img class="logo-explan" src="http://s01.mifile.cn/i/v-logo-3.png" alt="" />
				</div>
				<p class="footer-desc">
				寻找最初的回忆	，路遥为年轻而生
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style>
.footer {
	width: 1226px;
	height: auto;
	margin: 0 auto;
	padding-bottom: 20px;
}

.footer-service {
	padding: 27px 0;
	border-bottom: 1px solid #e0e0e0;
}
.service {
	.service-item {
		float: left;
		width: 245px;
		height: 27px;
		line-height: 27px;
		font-size: 16px;
		color: #616161;
		padding: 0 40px;
		box-sizing: border-box;
		border-right: 1px solid #e0e0e0;
		&:nth-last-child(1) {
			border-right: 0;
		}
		.icon {
			display: inline-block;
			height: 27px;
			line-height: 27px;
			font-size: 24px;
			margin-right: 10px;
		}
	}
}
.footer-info {
	padding: 40px 0;
}

.footer-content {
	.footer-item {
		float: left;
		width: 160px;
		height: 120px;
		a {
			text-decoration: none;
			color: #333;
		}
		&:nth-last-child(2) {
			padding-right: 20px;
			border-right: 1px solid #e0e0e0;
		}
		h3 {
			font-size: 14px;
			font-weight: normal;
			margin-bottom: 26px;
		}
		p {
			font-size: 12px;
			margin-top: 10px;
		}
	}
	.footer-last-item {
		float: left;
		.col-content {
			margin-left: 40px;
			.phone-number {
				margin: 0 0 5px;
				font-size: 22px;
				text-align: center;
				margin-bottom: 5px;
				color: #ff6700;
			}
			.phone-desc {
				font-size: 12px;
				line-height: 1.5;
				text-align: center;
    		color: #616161;
			}
			.server-btn {
				display: block;
				width: 120px;
				height: 30px;
				line-height: 30px;
				font-size: 12px;
				text-align: center;
				margin: 0 auto;
				border: 1px solid #ff6700;
				color: #ff6700;
				cursor: pointer;
				&:hover {
					background: #ff6700;
					color: #fff;
				}
			}
		}
	}
}

.footer-explan {
	.logo-img {
		float: left;
		width: 57px;
		height: 57px;
	}
	.explan-content {
		float: left;
		padding-left: 10px;
		.links {
			.link-item {
				float: left;
				padding: 0 5px;
				font-size: 12px;
				color: #757575;
				border-right: 1px solid #757575;
				&:nth-last-child(1) {
					border-right: 0;
				}
			}
		}
	}
	.explan-txt {
		margin: 10px 0 0 5px;
		line-height: 18px;
		font-size: 12px;
		color: #b0b0b0;
		a {
			text-decoration: none;
			color: #b0b0b0;
			&:hover {
				color: #ff6700;
			}
		}
	}
	.logo-explan {
		width: 85px;
		height: 28px;
		&.logo-explan-first {
			margin-left: 50px;
		}
	}
}

.site-info {
	padding: 30px 0;
	.footer-desc {
		text-align: left;
    color: #b9b9b9;
		width: 267px;
		height: 19px;
		margin: 30px auto 0;
		/* background: url('http://s01.mifile.cn/i/slogan2016.png') center center no-repeat; */
	}
}
</style>
