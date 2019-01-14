// let picture = require('./img/picture.jpeg');
let fs = require('fs');
let path = require('path');

function sendImage(res, imgName) {
	let filePath = path.join(__dirname, '../../public/images/', imgName);
	fs.readFile(filePath, 'binary', (err, file) => {
		if (err) {
			console.log(err);
			return;
		}
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		res.write(file, 'binary');
		res.end();
	});
}


module.exports = function init(app) {

	// 请求todolist数据
	app.get('/mobile.php/img/index/test/picture.jpeg', (req, res) => {
		sendImage(res, 'picture.jpeg');
	});

	app.get('/mobile.php/img/index/testHashImg/200', (req, res) => {
		sendImage(res, 'star.jpg');
	});

};

