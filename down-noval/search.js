const index = require("./index.js");
const fs = require('fs');
const path = require("path");
const cheerio = require("cheerio"); //node jq模块
const clicolor = require('cli-color'); //改变文字颜色模块
const log = require('single-line-log').stdout; //单行输出模块

console.log('资源网站：www.txt53.com\n');

function cha(){
	index.readcmd('请输入小说名/作者: ',function(rea){
		console.log(clicolor.blue.bold("\n正在搜索。。。\n"));
		index.post(
			'http://www.txt53.com/search.html',
			{ searchkey: rea },
			function(res){
				var $ = cheerio.load(res.text);
				if($('.xiashu ul').length == 0){
					console.log("未找到此书籍！！");
				} else {
					var vodata = {};
					$('.xiashu ul').each(function(item) {
						var id = $(this).find('.qq_g a').attr('href').substr(-10,5);
						var name = $(this).find('.qq_g a').text().substring(0,$(this).find('.qq_g a').text().length - 5);
						var aut = $(this).find('.qq_r').text();
						var big = $(this).find('.qq_l').text();
						vodata[id] = name;
						console.log(clicolor.white.bgCyan.bold("编号:" + id +"\n"+ "书名:" + name +"\n"+ "作者:" + aut +"\n"+ "大小：" + big + "\n"));
					})
					downnoval(vodata);
				};
			}
		);
	})
};

function downnoval(vodata){
	// console.log(vodata);
	index.readcmd('请输入小说编号下载: ',function(rea){
		// console.log(clicolor.blue.bold("\n正在下载。。。\n"));
		let nowtime = +new Date();
		// 创建文件夹目录
        var dirPath = path.join(__dirname, "下载的小说");
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
            // console.log("文件夹创建成功");
        } else {
            // console.log("文件夹已存在");
        };

		index.get('http://www.txt53.com/read/'+rea+'.html',function(res){
			console.log('\n温馨提示：小说下载中，本下载软件是根据网站在线阅读来获取的，所以下载速度较慢，请耐心等候！\n')
			var $ = cheerio.load(res.text);
			var linknum = $('.read_list a').length;
			(function data(i){
				if(i == linknum+1){
					let overtime = +new Date();
					let timer = parseInt((overtime - nowtime)/1000);
					console.log(clicolor.magenta.bold('\n下载完成！总用时：'+timer+"秒\n"));
					cha();
					return;
				};
				index.get('http://www.txt53.com/read/'+rea+'_'+i+'.html',function(res){
					var $ = cheerio.load(res.text);
					var content = $('#view_content_txt').contents().filter(function(){return this.nodeType==3}).text().trim();
					fs.appendFile(path.join(dirPath, vodata[rea] + ".txt"), content, function(err) {
    					if(err) {
        					return console.log(err);
    					}
    					// console.log("The file was saved!");
					});
        			log(clicolor.magenta.bold('已下载 '+(i/linknum*100).toFixed(2)+'%（百分比） --- '+ i + '/' +linknum + '（页面数）\n'));
        			data(i+1);
				})
			})(1)
		})
	})
};

cha();

