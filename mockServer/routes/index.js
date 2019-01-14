var express = require('express');
var router = express.Router();

var Util = require('./util');

//自动加载mock下的router.js
Util.autoLoadRouter(router);

module.exports = router;
