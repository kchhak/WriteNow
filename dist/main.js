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

/***/ "./src/consequences.js":
/*!*****************************!*\
  !*** ./src/consequences.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sounds = {\n  dog: new Audio('../dist/assets/dog.mp3'),\n  bell: new Audio('../dist/assets/bell.mp3'),\n  alarm: new Audio('../dist/assets/alarm.mp3'),\n  seagulls: new Audio('../dist/assets/seagulls.mp3'),\n  whistle: new Audio('../dist/assets/whistle.mp3')\n}\n\nlet sound;\n\nclass Consequences {\n  constructor(difficulty) {\n    this.difficulty = difficulty;\n  }\n\n  runConsequences() { \n    switch (this.difficulty) {\n      case \"easy\":\n        alert(\"Get back to typing!\");\n        break;\n      case \"medium\":\n        this.soundAlert();\n        break;\n      case \"hard\":\n        this.deleteWords();\n        break;\n    }\n  }\n\n  soundAlert() {\n    let keys = Object.keys(sounds);\n    sound = sounds[keys[Math.floor(Math.random() * keys.length)]];\n    sound.loop = true;\n    sound.play();\n  }\n\n  stopSound() {\n    if (sound) { sound.pause() }\n  }\n\n  deleteWords() {\n    let textbox = document.getElementById(\"textbox\")\n    let words = textbox.value.split(\" \");\n    words.pop();\n    \n    textbox.value = words.join(\" \");\n  }\n}\n\nmodule.exports = Consequences;\n\n//# sourceURL=webpack:///./src/consequences.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TextEditor = __webpack_require__(/*! ./text_editor.js */ \"./src/text_editor.js\");\nwindow.TextEditor = TextEditor;\n\nlet editor;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  document.getElementById(\"settings\").addEventListener(\"submit\", e => {\n    e.preventDefault();\n    let settings = $(\"#settings\").serializeArray();\n    editor = new TextEditor(settings);\n    editor.startEditor();\n  })\n\n  document.getElementById(\"restart\").addEventListener(\"click\", () => {\n    if (confirm(\"This will erase your work and return you to the settings. If you want to save your work, press cancel and copy-paste it before going back.\")) {\n      editor.closeEditor();\n    }\n  })\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/text_editor.js":
/*!****************************!*\
  !*** ./src/text_editor.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Consequences = __webpack_require__(/*! ./consequences.js */ \"./src/consequences.js\");\nwindow.Consequences = Consequences;\n\nclass TextEditor {\n  constructor(options) {\n    this.difficulty = options[0].value;\n    this.consequences = new Consequences(this.difficulty);\n    this.time = options[1].value * 60;\n    this.grace = options[2].value;\n    this.countdown = this.grace;\n    this.running = false;\n  }\n\n  startEditor() {\n    document.getElementById(\"settings-page\").classList.add(\"hidden\");\n    document.getElementById(\"writing-box\").classList.remove(\"hidden\");\n    this.running = true;\n    \n    setInterval(() => {\n      this.tick();\n    }, 1000)\n  }\n\n  closeEditor(){\n    clearInterval();\n    this.running = false;\n    this.consequences.stopSound();\n\n    document.getElementById(\"textbox\").value = \"\";\n    document.getElementById(\"timer\").innerHTML = \"\";\n    document.getElementById(\"wordcount\").innerHTML = 0;\n\n    document.getElementById(\"writing-box\").classList.add(\"hidden\");\n    document.getElementById(\"settings-page\").classList.remove(\"hidden\");\n\n  }\n\n  tick() {\n    if (this.running){\n      this.time--;\n      this.countdown--;\n      \n      if (this.time <= 0) {\n        alert(\"You survived!\")\n      }\n  \n      this.timeSinceType();\n      this.setTime();\n      this.setWordCount();\n    }\n\n  }\n\n  countWords(input) {\n    let words = input.split(\" \");\n    if (words[0] === \"\") return 0;\n\n    return words.length;\n  }\n\n  setWordCount() {\n    let count = this.countWords(document.getElementById(\"textbox\").value);\n    document.getElementById(\"wordcount\").innerHTML = count;\n  }\n\n  setTime() {\n    document.getElementById(\"timer\").innerHTML = this.formatTime(this.time);\n  }\n\n  formatTime(time) {\n    let min = String(Math.floor(this.time / 60));\n    let sec = String(this.time % 60);\n\n    if (min.length < 2) min = \"0\" + min;\n    if (sec.length < 2) sec = \"0\" + sec;\n\n    return min + \":\" + sec;\n  }\n  \n  timeSinceType() {\n    document.getElementById(\"textbox\").addEventListener(\"keyup\", () => {\n      this.countdown = this.grace;\n      this.consequences.stopSound();\n    })\n\n    if (this.countdown === 0){\n      this.consequences.runConsequences();\n      this.countdown = this.grace;\n    }\n  }\n\n}\n\n\nmodule.exports = TextEditor;\n\n//# sourceURL=webpack:///./src/text_editor.js?");

/***/ })

/******/ });