//导入mock数据
const orderPrepareResponse = require("./json/orderPrepare.json");
const prepareCheckInfo = require("./json/prepareCheckInfo.json");
const pickUpCheckInfo = require("./json/pickUpCheckInfo.json");
const checkListUpdateResult = require("./json/checkListUpdate.json");
const orderPickupUpdateResult = require("./json/orderPickupUpdate.json");
const orderReturnUpdateResult = require("./json/orderReturnUpdate.json");
const returnCheckInfo = require("./json/returnCheckInfo.json");
const orderAttachment = require("./json/orderAttachment.json");
const orderStatusUpdate = require("./json/orderStatusUpdate.json");

//航班信息
const updateFlightResult = require('./json/updateFlight.json');
const flightInfo = require('./json/flightInfo.json');
const orderProgressNumber = require('./json/orderProgressNumber.json');
const orderProgressList = require('./json/orderProgressList.json');
const orderListToday = require('./json/orderListToday.json');
const updateDriver = require('./json/updateDriver.json');

// 车辆状况
const vehicleConditionReport = require('./json/vehicleConditionReport.json');
const vehicleConditionDelete = require('./json/vehicleConditionDelete.json');
const vehicleConditionSubmit = require('./json/vehicleConditionSubmit.json');

/**
 * init方法，会自动执行的方法
 * @param app
 */
module.exports = function init(app) {

	//订单列表
	app.post('/mobile.php/order/order_progress_list', (req, res) => {
		orderProgressList.data.type = req.query.progress;
		res.send(orderProgressList);
	});

	//订单数量
	app.post('/mobile.php/order/order_progress_number', (req, res) => {
		res.send(orderProgressNumber);
	});

	//获取当天的
	app.post('/mobile.php/order/order_today_list', (req, res) => {
		res.send(orderListToday);
	});


	//模拟用户订单信息
	app.post('/mobile.php/order/prepare_order_info', (req, res) => {
		res.send(orderPrepareResponse);
	});

	//mock用户checklist数据
	app.post('/mobile.php/order/prepare_checklist', (req, res) => {
		if (req.query.type === 'prepare') {
			res.send(prepareCheckInfo);
		} else if (req.query.type === 'pickup') {
			res.send(pickUpCheckInfo);
		} else if (req.query.type === 'return') {
			res.send(returnCheckInfo);
		}
	});

	//保存订单checklist
	app.post('/mobile.php/order/save_order_checklist', (req, res) => {
		res.send(checkListUpdateResult);
	});

	// 更新提车信息
	app.post('/mobile.php/order_pickup/order_pickup_save', (req, res) => {
		res.send(orderPickupUpdateResult);
	});

	// 更新还车信息
	app.post('/mobile.php/order_return/order_return_save', (req, res) => {
		res.send(orderReturnUpdateResult);
	});

	// 获取订单附件
	app.post('/mobile.php/order/get_order_attachment', (req, res) => {
		res.send(orderAttachment);
	});

	// 更新状态
	app.post('/mobile.php/order/update_status', (req, res) => {
		res.send(orderStatusUpdate);
	});

	// 获取航班信息
	app.post('/mobile.php/order_customer/get_flight_info', (req, res) => {
		res.send(flightInfo);
	});

	// 更新航班信息
	app.post('/mobile.php/order_customer/update_flight', (req, res) => {
		res.send(updateFlightResult);
	});

	// 更新驾驶员信息
	app.post('/mobile.php/myorder/order_driver/update', (req, res) => {
		res.send(updateDriver);
	});

	// 获取车辆状况
	app.post('/mobile.php/order_vehicle/get_damage', (req, res) => {
		res.send(vehicleConditionReport);
	});

	// 提交车辆状况
	app.post('/mobile.php/myorder/order_vehicle/save_damage', (req, res) => {
		res.send(vehicleConditionSubmit);
	});

	//删除车辆状况
	app.post('/mobile.php/myorder/order_vehicle/del_damage', (req, res) => {
		res.send(vehicleConditionDelete);
	});

};

