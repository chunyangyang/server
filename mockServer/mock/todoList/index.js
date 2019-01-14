let indexJson = require('./json/tododata.json');

/**
 * init方法，会自动执行的方法
 * @param app
 */
module.exports = function init(app) {

	// 请求todolist数据
	app.post('/mobile.php/order/order_progress', (req, res) => {
		indexJson.data.type = req.query.progress;
		res.send(indexJson);
	});





};

