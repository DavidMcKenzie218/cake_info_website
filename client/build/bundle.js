/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ApiRequest = __webpack_require__(1);
	
	window.onload = function () {
	
	  var api = new ApiRequest();
	
	  api.getAll("https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json");
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ApiQuery = __webpack_require__(2);
	
	var DataHandler = function DataHandler() {
	
	  this.apiRequest = new ApiQuery();
	};
	
	DataHandler.prototype = {
	
	  getAll: function getAll(apiRoute) {
	    var url = apiRoute;
	    this.apiRequest.get(url, function () {
	      if (this.status != 200) return;
	      var jsonString = this.responseText;
	      console.log(jsonString);
	    });
	  }
	
	};
	
	module.exports = DataHandler;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var apiRequest = function apiRequest() {};
	
	apiRequest.prototype = {
	  get: function get(url, callback) {
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    console.log("Request opened to Api");
	    request.onload = callback;
	    request.send();
	    console.log("Request sent to Api");
	  }
	};
	
	module.exports = apiRequest;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map