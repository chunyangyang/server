<template>
	<div class="login-style">
			<ul v-if="isLogin  == 100" class="login-ul">
				<li><a href="javascript:;" @click=registerFor>个人中心</a></li>
				<li><a href="javascript:;" @click=loginFor>注销</a></li>
			</ul>

		<ul class="login-ul" v-else>
			<li><a href="javascript:;" @click=registerFor>注册</a></li>
			<li><a href="javascript:;" @click=loginFor>登陆</a></li>
		</ul>
	</div>

			<div class="login-wrap" id="login-wrap" style=" text-align:center;border:1px solid #f5f5f5;display:none;position:fixed;z-index:100000000;background-color:white;left:35%;" >
				<!-- 登陆 -->
					<p v-show="showTishi">{{tishi}}</p>
					<div class="alertModel" style=" width:auto;height:50px;text-align:center;border:1px solid rgb(130,137,137);display:none;position:fixed;z-index:1000000000;background-color:#F5F5F5;left:39%;right:37%;top:40%">
						<ul style="line-height:50px;margin-right:25px;">
							<li><span></span></li>
						</ul>
					</div>
					<ul>
						<li><h3>登录</h3></li>
						<li><input type="text" id="ltel" placeholder="请输入你的手机号/邮箱" v-model="username"></li>
						<li><input type="password" id="lrePassWord" placeholder="请输入密码" v-model="password"></li>
						<li><button style="cursor:pointer;" v-on:click="loginTo">登录</button></li>
						<li><span v-on:click="registerFor">没有账号?马上注册&nbsp&nbsp</span><span v-on:click="forGot">忘记密码？</span></li>
					</ul>
			</div>
			<!-- 修改密码获取验证码 -->
			<div class="forGot-wrap" id="forGot-wrap" v-show="showRegister" style="border:1px solid #f5f5f5;display:none;position:fixed;z-index:100000000;background-color:white;left:35%;" >
					<p v-show="showTishi"></p>
					<div class="alertModel" style=" width:auto;height:50px;text-align:center;border:1px solid rgb(130,137,137);display:none;position:fixed;z-index:1000000000;background-color:#F5F5F5;left:38%;right:35%;top:36%" >
						<ul style="line-height:50px;margin-right:25px;">
							<li><span></span></li>
						</ul>
					</div>
					<ul>
						<li style="margin-left:40%;"><h3>找回密码</h3></li>
						<li><input type="text" id="ftel1" placeholder="请输入你的手机号/邮箱" v-model="username"></li>
						<li><input type="text" id='fverifycode' placeholder="请输入验证码"  ><a herf="javascript:;" id="time1" v-on:click="spendInfo" style=" cursor:pointer;font-size:14px;">发送验证码</a><a herf="javascript:;" id="times1" style=" cursor:pointer;font-size:14px;"></a></li>
						<li><button style="cursor:pointer;" v-on:click="forGotNext">下一步</button></li>
					</ul>
			</div>
			<!-- 修改密码 -->
			<div class="forGotedit-wrap" id="forGotedit-wrap" style="border:1px solid #f5f5f5;display:none;position:fixed;z-index:100000000;background-color:white;left:35%;" >
					<p v-show="showTishi">{{tishi}}</p>
					<div class="alertModel" style=" width:auto;height:50px;text-align:center;border:1px solid rgb(130,137,137);display:none;position:fixed;z-index:1000000000;background-color:#F5F5F5;left:35%;right:35%;top:40%" >
						<ul style="line-height:50px;margin-right:25px;">
							<li><span></span></li>
						</ul>
					</div>
					<ul>
						<li style="margin-left:40%;"><h3>修改密码</h3></li>
						<li ><input type="password" id="fPassWord" placeholder="请输入密码" ></li>
						<li ><input type="password" id="frePassWord" placeholder="请再次输入密码" ></li>
						<li><button style="cursor:pointer;" v-on:click="forGotEdit">确认修改</button></li>
					</ul>
			</div>
			<!-- 注册 -->
			<div class="register-wrap" id="register-wrap" v-show="showRegister" style="border:1px solid #f5f5f5;display:none;position:fixed;z-index:100000000;background-color:white;left:35%;" >

					<p v-show="showTishi">{{tishi}}</p>
					<div class="alertModel" style=" width:auto;height:50px;text-align:center;border:1px solid rgb(130,137,137);display:none;position:fixed;z-index:1000000000;background-color:#F5F5F5;left:38%;right:35%;top:36%">
						<ul style="line-height:50px;margin-right:25px;">
							<li><span></span></li>
						</ul>
					</div>
					<ul>
						<li style="margin-left:40%;"><h3>注册</h3></li>
						<li><input type="text" id="tel" placeholder="请输入手机号" v-model="newUsername"></li>
						<li><input type="text" id='verifycode' placeholder="请输入验证码"  ><a herf="javascript:;" id="time" v-on:click="spendInfo" style=" cursor:pointer;font-size:14px;">发送验证码</a><a herf="javascript:;" id="times" style=" cursor:pointer;font-size:14px;"></a></li>
						<li ><input type="password" id="rePassWord" placeholder="请输入密码" v-model="resPassword"></li>
						<li><button style="cursor:pointer;" v-on:click="registerTo">完成注册并登陆</button></li>
						<li style="margin-left:30%;"><span v-on:click="loginFor">已有账号？马上登录</span></li>
					</ul>
			</div>
			<div v-on:click="moveblack" class="modal-backdrop" style="display: none; position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: #000; opacity: .8; z-index: 1000;">
			</div>
			{{ $store.isLogin }}
</template>

<script>
    export default {
        data () {
            return {
							tao: 21,
							showLogin: true,
							showRegister: false,
							showTishi: false,
							tishi: '',
							username: '',
							password: '',
							newUsername: '',
							newPassword: ''
            }
        },
				methods: {
					loginFor () {
						// 跳转登陆
						$('#login-wrap').show()
						$('.modal-backdrop').show()
						$('#register-wrap').hide()
					},
					forGot () {
						// 跳转登陆
						$('#forGot-wrap').show()
						$('#login-wrap').hide()
						$('.modal-backdrop').show()
						$('#register-wrap').hide()
					},
					alertModelTOMove (msg) {
						// 弹出模板提示
						$('.alertModel').show()
						$('.alertModel ul li span').html(msg)
						var time = 0
						var runtimes = 0
						timer = null
						var run = function () {
							var nMS = time * 1000 - runtimes * 1000
							if (nMS >= 0) {
								runtimes++
							} else {
								$('.alertModel').hide()
								this.$options.methods.moveblack()
								clearInterval(timer)
								return false
							}
						}
						run()
						var timer = setInterval(run, 1000)
					},
					alertModel (msg) {
						// 弹出模板提示
						$('.alertModel').show()
						$('.alertModel ul li span').html(msg)
						var time = 0
						var runtimes = 0
						timer = null
						var run = function () {
							var nMS = time * 1000 - runtimes * 1000
							if (nMS >= 0) {
								runtimes++
							} else {
								$('.alertModel').hide()
								clearInterval(timer)
								return false
							}
						}
						run()
						var timer = setInterval(run, 1000)
					},
					registerFor () {
						// 跳转注册
						$('#register-wrap').show()
						$('.modal-backdrop').show()
						$('#login-wrap').hide()
					},
					resEdit () {
					},
					moveblack () {
						// 点击背景隐藏
						$('#register-wrap').hide()
						$('.modal-backdrop').hide()
						$('#login-wrap').hide()
						$('#forGot-wrap').hide()
						$('#forGotedit-wrap').hide()
					},
					updateEndTime (obj, el1, el2) {
						// 短信发送间隔时间
						var time = 120
						var runtimes = 0
						timer = null
						var run = function () {
							var nMS = time * 1000 - runtimes * 1000
							if (nMS >= 0) {
								var nS = Math.floor(nMS / 1000) % 120
								el1.hide()
								el2.show()
								el2.html(nS + '秒重新发送')
								runtimes++
							} else {
								el2.hide()
								el1.show()
								el1.html('重新发送')
								clearInterval(timer)
								return false
							}
						}
						run()
						var timer = setInterval(run, 1000)
					},
					spendInfo () {
						/* 发送短信请求 */
						var tel = $('#tel').val()
						var url = 'http://www.zhujingcheng.cn/smallindex/smallSpendInfo'
						var params = {
							'mobile': tel
						}
						var otherParam = {
							emulateJSON: true
						}
						this.$http.post(url, params, otherParam)
						.then(function (res) {
							if (res.body.code === 'success') {
								var obj = this
								var el1 = $('#time')
								var el2 = $('#times')
								this.$options.methods.updateEndTime(obj, el1, el2)
							} else {
								var msg = res.body.msg
								this.$options.methods.alertModel(msg)
							}
					}, (res) => {
									// error callback
							})
					},
					registerTo () {
					this.tao = '5555'
					/* 注册请求接口 */
					var tel = $('#tel').val()
					var rePassWord = $('#rePassWord').val()
					var verifycode = $('#verifycode').val()
					var url = 'http://www.zhujingcheng.cn/smallindex/smallRegister'
					var params = {
						'mobile': tel,
						'rePassWord': rePassWord,
						'verifycode': verifycode
					}
					var otherParam = {
						emulateJSON: true
					}
					this.$http.post(url, params, otherParam)
					.then(function (res) {
						var msg = res.body.msg
						if (res.body.code === 'success') {
							this.$options.methods.alertModelTOMove(msg)
							this.$store.commit('changeLogin', '100')
							// this.$options.methods.updateEndTime(obj)
						} else {
							this.$options.methods.alertModel(msg)
						}
				}, (res) => {
								// error callback
						})
			},
			loginTo () {
							/* 登陆请求接口 */
			var tel = $('#ltel').val()
			var rePassWord = $('#lrePassWord').val()
			var url = 'http://www.zhujingcheng.cn/smallindex/smallLogin'
			var params = {
				'mobile': tel,
				'rePassWord': rePassWord
						}
			var otherParam = {
				emulateJSON: true
			}
			this.$http.post(url, params, otherParam)
			.then(function (res) {
				var msg = res.body.msg
				if (res.body.code === 'success') {
					this.$options.methods.alertModelTOMove(msg)
				} else {
					this.$options.methods.alertModel(msg)
					this.$store.commit('changeLogin', '100')
				}
		}, (res) => {
						// error callback
				})
			},
	// 手机找回密码，验证验证码
				forGotNext () {
				var tel = $('#ftel1').val()
				var verifycode = $('#fverifycode').val()
				var url = 'http://www.zhujingcheng.cn/smallindex/smallCheckVerifycode'
				var params = {
					'mobile': tel,
					'verifycode': verifycode
							}
				var otherParam = {
					emulateJSON: true
				}
				this.info = tel
				this.$http.post(url, params, otherParam)
				.then(function (res) {
					var msg = res.body.msg
					if (res.body.code === 'success') {
						this.$options.methods.moveblack()
						$('#forGotedit-wrap').show()
						$('.modal-backdrop').show()
					} else {
						this.$options.methods.alertModel(msg)
					}
			}, (res) => {
							// error callback
					})
			},
			forGotEdit () {
							/* 确认修改密码请求接口 */
			var tel = $('#ftel1').val()
			var verifycode = $('#fverifycode').val()
			var fPassWord = $('#fPassWord').val()
			var frePassWord = $('#frePassWord').val()
			var url = 'http://www.zhujingcheng.cn/smallindex/smallEditPassword'
			var params = {
				'mobile': tel,
				'fPassWord': fPassWord,
				'frePassWord': frePassWord,
				'verifycode': verifycode
						}
			var otherParam = {
				emulateJSON: true
			}
			this.$http.post(url, params, otherParam)
			.then(function (res) {
				var msg = res.body.msg
				if (res.body.code === 'success') {
					this.$options.methods.alertModel(msg)
					this.$options.methods.moveblack()
				} else {
					this.$options.methods.alertModel(msg)
				}
		}, (res) => {
						// error callback
				})
			}
    }
	}
</script>

<style>
.login-style {
	width: 100%;
	height: auto;
	background: #f5f5f5;
	padding-bottom: 45px;
	z-index: 100000;
}
.login-ul li{
	float: left;
	line-height: 45px;
  margin-left: 10px;
}
.login-ul li a:hover{
	color: blue;
	width: 120px;
}
.login-ul{
	margin-left: 85%;
}
    .forGot-wrap,.forGotedit-wrap,.register-wrap,.login-wrap{width: 450px;height: 300px;}
		.forGotedit-wrap ul li,.forGot-wrap ul li,.register-wrap ul li{
			margin-left: 20%;
		}
    /* input{ width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;} */
    button{ width:250px; height:40px; line-height: 40px;  border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>
