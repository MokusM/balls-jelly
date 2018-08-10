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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mouse = __webpack_require__(/*! ./mouse */ \"./mouse.js\");\n\nvar _mouse2 = _interopRequireDefault(_mouse);\n\nvar _ball = __webpack_require__(/*! ./ball */ \"./ball.js\");\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.getElementById('drawOneMe');\nvar ctx = canvas.getContext('2d');\nvar pos = new _mouse2.default(canvas);\nvar balls = [];\nvar mouse = new _ball2.default(0, 0, 30, 'green');\n\nfor (var i = 0; i < 50; i++) {\n  balls.push(new _ball2.default(200 + 100 * Math.cos(i * 2 * Math.PI / 50), 200 + 100 * Math.sin(i * 2 * Math.PI / 50)));\n}\nfunction ConnectDots(balls) {\n  ctx.beginPath();\n  ctx.moveTo(balls[0].x, balls[0].y);\n  balls.forEach(function (ball) {\n    ctx.lineTo(ball.x, ball.y);\n  });\n  ctx.closePath();\n  ctx.fill();\n}\nfunction ConnectDots1(dots) {\n  ctx.beginPath();\n\n  for (var i = 0, jlen = dots.length; i <= jlen; ++i) {\n    var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];\n    var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];\n    ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);\n  }\n\n  ctx.closePath();\n  ctx.fill();\n}\nfunction Render() {\n  window.requestAnimationFrame(Render);\n  ctx.clearRect(0, 0, 600, 600);\n  mouse.setPos(pos.x, pos.y);\n  mouse.draw(ctx);\n  balls.forEach(function (ball) {\n    ball.think(pos);\n    //ball.draw(ctx);\n  });\n  ConnectDots1(balls);\n}\n\nRender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3VzZSBmcm9tICcuL21vdXNlJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd09uZU1lJyk7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5sZXQgcG9zID0gbmV3IE1vdXNlKGNhbnZhcyk7XG5sZXQgYmFsbHMgPSBbXTtcbmxldCBtb3VzZSA9IG5ldyBCYWxsKDAsIDAsIDMwLCAnZ3JlZW4nKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gIGJhbGxzLnB1c2goXG4gICAgbmV3IEJhbGwoXG4gICAgICAyMDAgKyAxMDAgKiBNYXRoLmNvcyhpICogMiAqIE1hdGguUEkgLyA1MCksXG4gICAgICAyMDAgKyAxMDAgKiBNYXRoLnNpbihpICogMiAqIE1hdGguUEkgLyA1MCksXG4gICAgKVxuICApO1xufVxuZnVuY3Rpb24gQ29ubmVjdERvdHMoYmFsbHMpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKGJhbGxzWzBdLngsIGJhbGxzWzBdLnkpO1xuICBiYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xuICAgIGN0eC5saW5lVG8oYmFsbC54LCBiYWxsLnkpO1xuICB9KTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xufVxuZnVuY3Rpb24gQ29ubmVjdERvdHMxKGRvdHMpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBqbGVuID0gZG90cy5sZW5ndGg7IGkgPD0gamxlbjsgKytpKSB7XG4gICAgdmFyIHAwID0gZG90c1tpICsgMCA+PSBqbGVuID8gaSArIDAgLSBqbGVuIDogaSArIDBdO1xuICAgIHZhciBwMSA9IGRvdHNbaSArIDEgPj0gamxlbiA/IGkgKyAxIC0gamxlbiA6IGkgKyAxXTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCAocDAueCArIHAxLngpICogMC41LCAocDAueSArIHAxLnkpICogMC41KTtcbiAgfVxuXG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbn1cbmZ1bmN0aW9uIFJlbmRlcigpIHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXIpO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTtcbiAgbW91c2Uuc2V0UG9zKHBvcy54LCBwb3MueSk7XG4gIG1vdXNlLmRyYXcoY3R4KTtcbiAgYmFsbHMuZm9yRWFjaChcbiAgICBiYWxsID0+IHtcbiAgICAgIGJhbGwudGhpbmsocG9zKTtcbiAgICAgIC8vYmFsbC5kcmF3KGN0eCk7XG4gICAgfVxuICApO1xuICBDb25uZWN0RG90czEoYmFsbHMpO1xufVxuXG5SZW5kZXIoKTtcblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./ball.js":
/*!*****************!*\
  !*** ./ball.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function () {\n  function Ball(x, y, radius, color) {\n    _classCallCheck(this, Ball);\n\n    this.x = x || 0;\n    this.y = y || 0;\n\n    this.originalX = x || 0;\n    this.originalY = y || 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.radius = radius || 2;\n    this.color = color || '#ff6600';\n    this.friction = 0.3;\n    this.springFactor = 0.32;\n  }\n\n  _createClass(Ball, [{\n    key: 'setPos',\n    value: function setPos(x, y) {\n      this.x = x;\n      this.y = y;\n    }\n  }, {\n    key: 'think',\n    value: function think(mouse) {\n      var dx = this.x - mouse.x;\n      var dy = this.y - mouse.y;\n\n      var dist = Math.sqrt(dx * dx + dy * dy);\n      if (dist < 30) {\n        var angle = Math.atan2(dx, dy);\n        var tx = mouse.x + Math.cos(angle) * 30;\n        var ty = mouse.y + Math.sin(angle) * 30;\n\n        this.vx += tx - this.x;\n        this.vy += ty - this.y;\n      }\n      var dx1 = -(this.x - this.originalX);\n      var dy1 = -(this.y - this.originalY);\n\n      this.vx += dx1 * this.springFactor;\n      this.vy += dy1 * this.springFactor;\n\n      this.vx *= this.friction;\n      this.vy *= this.friction;\n\n      this.x += this.vx;\n      this.y += this.vy;\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n      ctx.fillStyle = this.color;\n      ctx.fill();\n      ctx.closePath();\n      ctx.restore();\n    }\n  }]);\n\n  return Ball;\n}();\n\nexports.default = Ball;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9iYWxsLmpzP2M2ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgY29uc3RydWN0b3IoeCx5LCByYWRpdXMsIGNvbG9yKSB7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcblxyXG4gICAgdGhpcy5vcmlnaW5hbFggPSB4IHx8IDA7XHJcbiAgICB0aGlzLm9yaWdpbmFsWSA9IHkgfHwgMDtcclxuICAgIHRoaXMudnggPSAwO1xyXG4gICAgdGhpcy52eSA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAyO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8ICcjZmY2NjAwJztcclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjM7XHJcbiAgICB0aGlzLnNwcmluZ0ZhY3RvciA9IDAuMzI7XHJcbiAgICBcclxuICB9XHJcbiAgc2V0UG9zKHgseSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG4gIHRoaW5rKG1vdXNlKSB7XHJcbiAgICBsZXQgZHggPSB0aGlzLnggLSBtb3VzZS54O1xyXG4gICAgbGV0IGR5ID0gdGhpcy55IC0gbW91c2UueTtcclxuXHJcbiAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuICAgIGlmKGRpc3Q8MzApIHtcclxuICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeCxkeSk7XHJcbiAgICAgIGxldCB0eCA9IG1vdXNlLnggKyBNYXRoLmNvcyhhbmdsZSkgKiAzMDtcclxuICAgICAgbGV0IHR5ID0gbW91c2UueSArIE1hdGguc2luKGFuZ2xlKSAqIDMwO1xyXG5cclxuXHJcbiAgICAgIHRoaXMudnggKz0gdHggLSB0aGlzLng7XHJcbiAgICAgIHRoaXMudnkgKz0gdHkgLSB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBsZXQgZHgxID0gLSh0aGlzLnggLSB0aGlzLm9yaWdpbmFsWCk7XHJcbiAgICBsZXQgZHkxID0gLSh0aGlzLnkgLSB0aGlzLm9yaWdpbmFsWSk7XHJcblxyXG4gICAgdGhpcy52eCArPSBkeDEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcclxuICAgIHRoaXMudnkgKz0gZHkxICogdGhpcy5zcHJpbmdGYWN0b3I7XHJcblxyXG5cclxuICAgIHRoaXMudnggKj0gdGhpcy5mcmljdGlvbjtcclxuICAgIHRoaXMudnkgKj0gdGhpcy5mcmljdGlvbjtcclxuXHJcbiAgICBcclxuICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgdGhpcy55ICs9IHRoaXMudnk7XHJcbiAgfVxyXG5cclxuICBkcmF3KGN0eCkge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHgucmVzdG9yZSgpOyAgICAgIFxyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBeERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ball.js\n");

/***/ }),

/***/ "./mouse.js":
/*!******************!*\
  !*** ./mouse.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mouse = function Mouse(canvas) {\n  var _this = this;\n\n  _classCallCheck(this, Mouse);\n\n  this.x = 0;\n  this.y = 0;\n  var rect = canvas.getBoundingClientRect();\n  canvas.onmousemove = function (e) {\n    _this.x = e.clientX - rect.left, _this.y = e.clientY - rect.top;\n  };\n};\n\nexports.default = Mouse;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb3VzZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbW91c2UuanM/ZGI1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZSA9PiB7XHJcbiAgICAgIHRoaXMueCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgdGhpcy55ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBVkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./mouse.js\n");

/***/ })

/******/ });