/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n// JS代码：\nvar eleFile = document.querySelector('#file');\n\n// 压缩图片需要的一些元素和对象\n/*\n * @Author: zhengchunyang \n * @Date: 2018-07-28 17:05:00 \n * @Last Modified by: zhengchunyang\n * @Last Modified time: 2018-07-28 17:05:20\n */\n\nvar reader = new FileReader(),\n    img = new Image();\n\n// 选择的文件对象\nvar file = null;\n\n// 缩放图片需要的canvas\nvar canvas = document.createElement('canvas');\nvar context = canvas.getContext('2d');\n\n// base64地址图片加载完毕后\nimg.onload = function () {\n    // 图片原始尺寸\n    var originWidth = this.width;\n    var originHeight = this.height;\n    // 最大尺寸限制\n    var maxWidth = 400,\n        maxHeight = 400;\n    // 目标尺寸\n    var targetWidth = originWidth,\n        targetHeight = originHeight;\n    // 图片尺寸超过400x400的限制\n    if (originWidth > maxWidth || originHeight > maxHeight) {\n        if (originWidth / originHeight > maxWidth / maxHeight) {\n            // 更宽，按照宽度限定尺寸\n            targetWidth = maxWidth;\n            targetHeight = Math.round(maxWidth * (originHeight / originWidth));\n        } else {\n            targetHeight = maxHeight;\n            targetWidth = Math.round(maxHeight * (originWidth / originHeight));\n        }\n    }\n\n    // canvas对图片进行缩放\n    canvas.width = targetWidth;\n    canvas.height = targetHeight;\n    // 清除画布\n    context.clearRect(0, 0, targetWidth, targetHeight);\n    // 图片压缩\n    context.drawImage(img, 0, 0, targetWidth, targetHeight);\n    // canvas转为blob并上传\n    canvas.toBlob(function (blob) {\n        // 图片ajax上传\n        var xhr = new XMLHttpRequest();\n        // 文件上传成功\n        xhr.onreadystatechange = function () {\n            if (xhr.status == 200) {\n                // xhr.responseText就是返回的数据\n            }\n        };\n        // 开始上传\n        xhr.open(\"POST\", 'upload.php', true);\n        xhr.send(blob);\n    }, file.type || 'image/png');\n};\n\n// 文件base64化，以便获知图片原始尺寸\nreader.onload = function (e) {\n    img.src = e.target.result;\n};\neleFile.addEventListener('change', function (event) {\n    file = event.target.files[0];\n    // 选择的文件是图片\n    if (file.type.indexOf(\"image\") == 0) {\n        reader.readAsDataURL(file);\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ })

/******/ });