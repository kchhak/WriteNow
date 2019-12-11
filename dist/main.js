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
/******/ 	__webpack_require__.p = "";
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

eval("const TextEditor = __webpack_require__(/*! ./text_editor.js */ \"./src/text_editor.js\");\nwindow.TextEditor = TextEditor;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  document.getElementById(\"settings\").addEventListener(\"submit\", e => {\n    e.preventDefault();\n    console.log(\"pressed\");\n    const settings = $(\"#settings\").serializeArray();\n    const editor = new TextEditor(settings);\n    editor.startEditor();\n\n  })\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/text_editor.js":
/*!****************************!*\
  !*** ./src/text_editor.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class TextEditor {\n  constructor(options) {\n    this.difficulty = options[0].value;\n    this.time = options[1].value * 60;\n    this.grace = options[2].value;\n    this.countdown = this.grace;\n    this.running = false;\n  }\n\n  startEditor() {\n    document.getElementById(\"settings-page\").classList.add(\"hidden\");\n    document.getElementById(\"writing-box\").classList.remove(\"hidden\");\n    this.running = true;\n    \n    setInterval(() => {\n      this.tick();\n    }, 1000)\n  }\n\n  tick() {\n    if (this.running){\n      this.time--;\n      this.countdown--;\n    }\n\n    if (this.time <= 0) {\n      alert(\"You survived!\")\n    }\n\n    this.timeSinceType();\n    this.setTime();\n    this.setWordCount();\n  }\n\n  countWords(input) {\n    let words = input.split(\" \");\n    if (words[0] === \"\") return 0;\n\n    return words.length;\n  }\n\n  setWordCount() {\n    let count = this.countWords(document.getElementById(\"textbox\").value);\n    document.getElementById(\"wordcount\").innerHTML = count;\n  }\n\n  setTime() {\n    document.getElementById(\"timer\").innerHTML = this.formatTime(this.time);\n  }\n\n  formatTime(time) {\n    let min = String(Math.floor(this.time / 60));\n    let sec = String(this.time % 60);\n\n    if (min.length < 2) min = \"0\" + min;\n    if (sec.length < 2) sec = \"0\" + sec;\n\n    return min + \":\" + sec;\n  }\n  \n  timeSinceType() {\n    this.setGraceTime();\n\n    document.getElementById(\"textbox\").addEventListener(\"keyup\", () => {\n      this.countdown = this.grace;\n    })\n\n    if (this.countdown === -1){\n      alert(\"Start typing!\")\n      this.countdown = this.grace;\n    }\n  }\n\n  setGraceTime() {\n    document.getElementById(\"grace-timer\").innerHTML = this.countdown;\n  }\n}\n\n\nmodule.exports = TextEditor;\n\n//# sourceURL=webpack:///./src/text_editor.js?");

/***/ })

/******/ });