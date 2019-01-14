<template>
	<div class="top-header">
		<div class="container">
			<a href="#" class="icon-mi"></a>
			<a href="#" class="pic-gif"></a>
			<div class="header-navs">
				<ul class="navs">
					<li v-for="item in navs" class="nav">
						<template >
							<a href="javascript: void(0);" class="nav-item"
							><span @mouseenter="evtHeaderEnter(item.type,item.name)" >{{item.name}}</span></a>
						</template>
						<template>
							<a :href="item.sourceUrl" target="_blank" class="nav-item">{{item.name}}</a>
						</template>
						<input type="hidden" name="type" id="searchType" value="">
						<input type="hidden" name="type" id="searchName" value="">
					</li>
				</ul>
			</div>
			<div class="header-search" 	@mouseleave="evtHeaderLeave2">
				<ul class="hot-word"
					transition="fadeOut"
					v-show="hotStatus">
					<li class="hot-item"
						v-for="item in hotItems">
						{{item}}
					</li>
				</ul>
				<input
					@focus="evtIptFocus"
					class="search-ipt" type="search" name="search" id="vals" value="">
					<label  @click='searchSmall()' class="search-btn" for="search" >
					<i class="icon-search" ></i>
				</label>
				<ul id="sc" style="display:block;" class="search-result clearfix">
					<li v-for="item in results">
            	<a :href="" @click='btnClick (item.name)' ><span>{{item.name}}</span></a>
						<span class="item-num">约有{{item.number}}件</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="header-menu"
			@mouseleave="evtHeaderLeave()"
			v-show="headerStatus"
			transition="fadein">
			<ul class="menus clearfix">

			<template  v-if="idStatus == 1">
					<li class="product" v-for="item in currentPhones">
				<a :href="item.path">
					<img :src="item.img" alt="" class="product-img"/>
				</a>
				<div class="product-name">{{item.name}}</div>
				<div class="product-price">
				<font color="black" size="2">开始时间：</font>	{{item.time*1000 | datefmt ('YYYY-MM-DD HH:mm:ss')}}
				</div>
						</li>
			</template>

			<template  v-else>
						<li class="product" style="margin-left:550px;margin-top:200px;">
            当前{{name}}未搜索到数据
						</li>
			</template>
			</ul>
		</div>
	</div>
	<!-- {{idStatus}}
	{{msg}} -->
</template>

<script>
export default {
	data () {
		return {
			msg: 222,
			idStatus: 3,
			searchResult: [],
			name: '',
			searchStatus: true,
			hotStatus: true,
			headerStatus: false,
			tids: '',
			currentPhones: this.xiaomi,
			hotItems: ['复仇者联盟3之鬼畜', '盗墓笔记之...'],
			weishang: [],
			qiqu: [],
			tanxian: [],
			qiangqiang: [],
			fuchou: [],
			yingxiong: [],
			shilian: [],
			navs: [
				{name: '微商联盟', type: 'weishang'},
				{name: '奇趣联盟', type: 'qiqu'},
				{name: '探险者联盟', type: 'tanxian'},
				{name: '强强联盟', type: 'qiangqiang'},
				{name: '复仇者联盟', type: 'fuchou'},
				{name: '英雄联盟', type: 'yingxiong'},
				{name: '失恋阵线联盟', type: 'shilian'}
				// {name: '服务', sourceUrl: '//www.mi.com/service/'},
				// {name: '社区', sourceUrl: 'http://www.xiaomi.cn'}
			],
			results: [
				{name: '中国墙头草', number: '11'},
				{name: '秦始皇陵记', number: '1'},
				{name: '活塞耳机', number: '4'},
				{name: '盗墓笔记之再续前缘', number: '8'},
				{name: '6个6的故事', number: '21'},
				{name: '八匹狼的狂奔', number: '3'},
				{name: '说不完的话', number: '2'},
				{name: '从你的全世界路过', number: '1'},
				{name: '我还能说些什么', number: '13'},
				{name: '该与不该', number: '32'}
			]
		}
	},
	ready () {
		$('#sc').hide()
	},
	methods: {
		getCoachInfo (menuType, obj) {
				var url = 'http://www.zhujingcheng.cn/showsmalltype/showsmalltypelist'
				var params = {
					type: menuType
				}
				var otherParam = {
					emulateJSON: true
				}
				obj.$http.post(url, params, otherParam)
				.then(function (res) {
				this.currentPhones = res.body.data
				this.idStatus = 1
			}, (res) => {
               obj.currentPhones = '网络繁忙'
              // error callback
          })
    },
		postsearch (obj, keywords, getmenuType, searchName) {
			var url = 'http://www.zhujingcheng.cn/showsmalltype/showSmallsearch'
			var params = {
				type: getmenuType,
				keywords: keywords
			}
			var otherParam = {
				emulateJSON: true
			}
			obj.$http.post(url, params, otherParam)
			.then(function (res) {
				if (res.body.code === 'failed') {
					obj.idStatus = 0
					obj.name = searchName
				} else {
					obj.idStatus = 1
					this.currentPhones = res.body.data
				}
		}, (res) => {
				})
		},
		evtIptFocus () {
			$('.header-search').addClass('search-active')
			$('#sc').show()
			this.hotStatus = false
		},
		evtHeaderEnter (menuType, name) {
			this.$options.methods.getCoachInfo(menuType, this)
			$('#searchType').val(menuType)
			$('#searchName').val(name)
			// if (menuType) {
			// 	this.currentPhones = this[menuType]
			// }
			this.headerStatus = true
			clearTimeout(this.tids)
		},
		evtHeaderLeave2 () {
			$('.header-search').removeClass('search-active')
			$('.search-result').hide()
			var vals = $('#vals').val()
			if (vals === '') {
				this.hotStatus = true
			} else {
				this.hotStatus = false
			}
		},
		evtHeaderLeave () {
			let self = this
			this.tids = setTimeout(function () {
				self.headerStatus = false
			}, 300)
		},
		btnClick (e) {
			$('.header-search').removeClass('search-active')
			$('.search-result').hide()
			$('#vals').val(e)
			this.hotStatus = false
		},
		searchSmall () {
			var keywords = $('#vals').val()
			var searchName = $('#searchName').val()
			var getmenuType = $('#searchType').val()
			var obj = this
			this.$options.methods.postsearch(obj, keywords, getmenuType, searchName)
			this.headerStatus = true
		}
	},
	components: {
	}
}
</script>

<style scoped>
.top-header {
	width: 100%;
	height: 100px;
}

.container {
	position: relative;
	display: flex;
	flex-flow: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 1226px;
	height: 100%;
	margin: 0 auto;
}

.icon-mi {
  width: 163px;
	height: 66px;
	background: url('../assets/img/gg.png') no-repeat;
	background-size: 100% 100%;
}
/* .pic-gif {
	width: 163px;
	height: 66px;
	margin-left: 10px;
	background: url('../assets/img/logo.jpg') no-repeat;
	background-size: 100% 100%;
} */

. {
	position: relative;
  margin-left:60px;
}

.navs {
	height: 88px;
	line-height: 88px;
	margin: 0;
	padding: 0;
	list-style: none;
	.nav {
		display: inline-block;
		.nav-item {
			display: block;
			height: 88px;
			line-height: 88px;
			font-size: 16px;
			padding: 0 10px;
			text-decoration: none;
			color: #333;
			&:hover {
				color: #ff6700;
			}
		}
	}
}

.header-search {
	position: absolute;
	top: 23px;
	right: 0;
	width: 295px;
	height: 50px;
	border: 1px solid #e0e0e0;
	.hot-word {
		position: absolute;
		top: 14px;
    right: 62px;
    z-index: 2;
    text-align: right;
		.hot-item {
			float: left;
			width: auto;
			height: 18px;
			line-height: 18px;
			padding: 0 5px;
			font-size: 12px;
			background: #eee;
    	color: #757575;
			margin-right: 5px;
			cursor: pointer;
			&:hover {
				color: #fff;
				background: #ff6300;
			}
		}
	}
	.fadeOut-transition {
		transition: all .3s ease;
		opacity: 1;
	}
	.fadeOut-enter, .fadeOut-leave {
	  opacity: 0;
	}
	.search-ipt {
		float: left;
		width: 240px;
		height: 100%;
		border: 0;
		outline: none;
	}
	.search-btn {
		display: block;
		float: right;
		width: 50px;
		height: 100%;
		border-left: 1px solid #e0e0e0;
		cursor: pointer;
		.icon-search {
			display: block;
			width: 20px;
			height: 20px;
			margin-top: 15px;
			margin-left: 15px;
			background: url('../assets/img/icon-search.png') center center no-repeat;
			background-size: 100% 100%;
		}
		&:hover {
			background: #ff6700;
			.icon-search {
				background: url('../assets/img/icon-search-white.png') center center no-repeat;
				background-size: 100% 100%;
			}
		}
	}
}

.search-active {
	border: 1px solid #ff6700;
	.search-btn {
		border-left: 1px solid #ff6700;
	}
}

.search-result {
	display: none;
	position: absolute;
	left: -1px;
	top: 50px;
	width: 244px;
	height: auto;
	margin: 0;
	padding: 0;
	list-style: none;
	border: 1px solid #ff6700;
	z-index: 110;
	background: #fff;
	li {
		padding: 7px 13px;
		width: 100%;
		height: 30px;
		box-sizing: border-box;
		cursor: pointer;
		.item-name {
			float: left;
			font-size: 12px;
		}
		.item-num {
			float: right;
			font-size: 10px;
			color: #b0b0b0;
		}
	}
}

.header-menu {
	position: absolute;
	left: 0;
	top: 173px;
	width: 100%;
	height: 930px;
	background: #fff;
	box-shadow: 0 1px 5px #ccc;
	z-index: 11;
	.menus {
		list-style: none;
		margin: 0;
		padding: 30px 0 0 10px;
		min-width: 1500px;
		.product {
			float: left;
			a {
				display: block;
				padding: 0 30px;
				border-right: 1px solid #ccc;
			}
			&:nth-last-child(1) {
				a {
					border-right: 0;
				}
			}
			.product-img {
				width: 100%;
				width: 160px;
				height: 110px;
			}
			.product-name {
				width: 100%;
				height: 16px;
				margin-top: 16px;
				font-size: 12px;
				text-align: center;
			}
			.product-price {
				width: 100%;
				height: 14px;
				margin-top: 10px;
				font-size: 10px;
				text-align: center;
				color: #ff6700;
			}
		}
	}
}
.fadein-transition {
  transition: all .3s ease-in;
	height: 465px;
	opacity: 1;
	overflow: hidden;
}

.fadein-enter, .fadein-leave {
  height: 0;
  opacity: 0;
}
</style>
