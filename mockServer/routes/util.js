const glob = require('glob');
var chalk = require('chalk');
const path = require('path');

const PROJECT_PATH = process.cwd();
const MOCK_PATH = path.join(PROJECT_PATH, 'mockServer');

exports.autoLoadRouter = function (router) {
	console.log(chalk.green(""));
	console.log(chalk.green("auto load router"));
	let files = glob.sync(MOCK_PATH + '/mock/**/*.js');

	files.forEach(file => {
		let filePath = file.replace('./mock', '../mock');
		console.log(chalk.yellow("auto load router --> " + filePath));

		const instance = require(filePath);
		if (isFunction(instance)) {
			instance(router);//自动执行方法
		} else {
			const methods = Object.keys(instance);
			methods.forEach(method => {
				instance[method](router);//自动执行方法
			});
		}
	});
};


function isFunction(fn) {
	return typeof fn === 'function';
}
