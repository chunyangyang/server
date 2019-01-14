
//导入mock数据
const selectCompanyJson = require("./json/selectCompany.json");


/**
 * init方法，会自动执行的方法
 * @param app
 */
module.exports = function init(app) {
	
	//切换公司
	app.post('/mobile.php/admin/company', (req, res) => {
		res.send(selectCompanyJson);
	});
	
	

};

