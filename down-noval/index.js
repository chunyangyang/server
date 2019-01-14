
// 常用功能模块

const readline = require('readline'); //读取cmd模块
const clicolor = require('cli-color'); //改变文字颜色模块
const superagent = require('superagent'); //请求模块
const log = require('single-line-log').stdout; //单行输出模块

// get请求
function get(url,callback){
	superagent
	.get(url)
	.set({ 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.3964.2 Safari/537.36' })
	.end(function(err,res) {
		if(err){
			let timer = new Date().toLocaleTimeString();
			log(clicolor.red.bold(timer+' 请求失败，重新请求中...\n'));
			get(url,callback);
			return
		};
		callback(res);
	})
};

// post请求
function post(url,obj,callback){
	superagent
	.post(url)
	.set('Content-Type','application/x-www-form-urlencoded')
	.set({ 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.3964.2 Safari/537.36' })
	.send(obj)
	.end(function(err,res) {
		if(err){
			let timer = new Date().toLocaleTimeString();
			log(clicolor.red.bold(timer+' 请求失败，重新请求中...\n'));
			post(url,obj,callback);
			return
		};
		callback(res);
	})
};

// 读取cmd输入
function readSyncByRl(tips) {
	tips = tips || '> ';

	return new Promise((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		rl.question(tips, (answer) => {
			rl.close();
			resolve(answer.trim());
		});
	});
};

function readcmd(init,callback){
	init = clicolor.green.bold(init);
	readSyncByRl(init).then((rea) => {
		if(!rea){
			console.log(clicolor.red.bold('\n内容不能为空！\n'));
			readcmd(init,callback);
			return;
		};
		callback(rea);
	});
};

module.exports = {
	post: post,
	get: get,
	readcmd: readcmd
}; //留出接口