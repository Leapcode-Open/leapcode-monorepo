module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/constants.js":
/*!*****************************!*\
  !*** ./config/constants.js ***!
  \*****************************/
/*! exports provided: COOKIE_TOKEN, API_URL, SERVER_API_KEY, getToken, API_HEADERS, GET_TOKEN_HEADER, GET_SERVER_TOKEN_HEADER, GET_AUTH_USER_DETAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COOKIE_TOKEN\", function() { return COOKIE_TOKEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SERVER_API_KEY\", function() { return SERVER_API_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_HEADERS\", function() { return API_HEADERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TOKEN_HEADER\", function() { return GET_TOKEN_HEADER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_SERVER_TOKEN_HEADER\", function() { return GET_SERVER_TOKEN_HEADER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_AUTH_USER_DETAILS\", function() { return GET_AUTH_USER_DETAILS; });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ \"./config/firebase.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ \"next-cookies\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst COOKIE_TOKEN = 'lptoken';\nconst API_URL = process.env.NEXT_PUBLIC_APIURL;\nconst SERVER_API_KEY = process.env.SERVER_API_KEY ? process.env.SERVER_API_KEY : 'notoken';\nconst getToken = async () => {\n  //const token = auth().currentUser ? await auth().currentUser.getIdToken() : 'notokeb';\n  const co = await js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('lptoken');\n  const token = co ? co : 'notokeb';\n  return token;\n};\nconst API_HEADERS = {\n  'Accept': 'application/json',\n  'Content-Type': 'application/json',\n  'authorization': `Bearer ${getToken()}`\n};\nconst GET_TOKEN_HEADER = async () => ({\n  'Accept': 'application/json',\n  'Content-Type': 'application/json',\n  'authorization': `Bearer ${await getToken()}`\n});\nconst GET_SERVER_TOKEN_HEADER = async ctx => {\n  const {\n    lptoken\n  } = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);\n  return {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json',\n    'authorization': `Bearer ${lptoken}`,\n    'server-access-key': `${SERVER_API_KEY}`\n  };\n};\nconst GET_AUTH_USER_DETAILS = async ctx => {\n  const {\n    lptoken\n  } = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);\n  if (!lptoken) return false;\n  let user = await fetch(API_URL + `/auth/authUser/`, {\n    headers: await GET_SERVER_TOKEN_HEADER(ctx)\n  });\n  user = await user.json();\n  return _objectSpread({}, user);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uc3RhbnRzLmpzP2MwOWUiXSwibmFtZXMiOlsiQ09PS0lFX1RPS0VOIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElVUkwiLCJTRVJWRVJfQVBJX0tFWSIsImdldFRva2VuIiwiY28iLCJqc2Nvb2tpZSIsImdldCIsInRva2VuIiwiQVBJX0hFQURFUlMiLCJHRVRfVE9LRU5fSEVBREVSIiwiR0VUX1NFUlZFUl9UT0tFTl9IRUFERVIiLCJjdHgiLCJscHRva2VuIiwiY29va2llcyIsIkdFVF9BVVRIX1VTRVJfREVUQUlMUyIsInVzZXIiLCJmZXRjaCIsImhlYWRlcnMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFlBQVksR0FBRyxTQUFyQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUE1QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLGNBQVosR0FBNkJILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxjQUF6QyxHQUEyRCxTQUFsRjtBQUVBLE1BQU1DLFFBQVEsR0FBRyxZQUFZO0FBQ2hDO0FBQ0EsUUFBTUMsRUFBRSxHQUFHLE1BQU1DLGdEQUFRLENBQUNDLEdBQVQsQ0FBYSxTQUFiLENBQWpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSCxFQUFFLEdBQUdBLEVBQUgsR0FBUSxTQUF4QjtBQUNBLFNBQU9HLEtBQVA7QUFDSCxDQUxNO0FBT0EsTUFBTUMsV0FBVyxHQUFHO0FBQ3ZCLFlBQVUsa0JBRGE7QUFFdkIsa0JBQWdCLGtCQUZPO0FBR3ZCLG1CQUFrQixVQUFTTCxRQUFRLEVBQUc7QUFIZixDQUFwQjtBQU9BLE1BQU1NLGdCQUFnQixHQUFHLGFBQWE7QUFDekMsWUFBVSxrQkFEK0I7QUFFekMsa0JBQWdCLGtCQUZ5QjtBQUd6QyxtQkFBa0IsVUFBUyxNQUFNTixRQUFRLEVBQUc7QUFISCxDQUFiLENBQXpCO0FBT0EsTUFBTU8sdUJBQXVCLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQ2xELFFBQU07QUFBRUM7QUFBRixNQUFjQyxtREFBTyxDQUFDRixHQUFELENBQTNCO0FBQ0EsU0FBTztBQUNILGNBQVUsa0JBRFA7QUFFSCxvQkFBZ0Isa0JBRmI7QUFHSCxxQkFBa0IsVUFBU0MsT0FBUSxFQUhoQztBQUlILHlCQUFzQixHQUFFVixjQUFlO0FBSnBDLEdBQVA7QUFNSCxDQVJNO0FBV0EsTUFBTVkscUJBQXFCLEdBQUcsTUFBT0gsR0FBUCxJQUFlO0FBQ2hELFFBQU07QUFBRUM7QUFBRixNQUFjQyxtREFBTyxDQUFDRixHQUFELENBQTNCO0FBQ0EsTUFBRyxDQUFDQyxPQUFKLEVBQ0ksT0FBTyxLQUFQO0FBQ0osTUFBSUcsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQ2xCLE9BQU8sR0FBRSxpQkFBVixFQUE0QjtBQUM5Q21CLFdBQU8sRUFBRSxNQUFNUCx1QkFBdUIsQ0FBQ0MsR0FBRDtBQURRLEdBQTVCLENBQXRCO0FBR0FJLE1BQUksR0FBRyxNQUFNQSxJQUFJLENBQUNHLElBQUwsRUFBYjtBQUNBLDJCQUNPSCxJQURQO0FBR0gsQ0FYTSIsImZpbGUiOiIuL2NvbmZpZy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcyc7XG5pbXBvcnQganNjb29raWUgZnJvbSAnanMtY29va2llJztcbmV4cG9ydCBjb25zdCBDT09LSUVfVE9LRU4gPSAnbHB0b2tlbic7XG5leHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSVVSTDtcbmV4cG9ydCBjb25zdCBTRVJWRVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52LlNFUlZFUl9BUElfS0VZID8gcHJvY2Vzcy5lbnYuU0VSVkVSX0FQSV9LRVkgIDogJ25vdG9rZW4nO1xuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgLy9jb25zdCB0b2tlbiA9IGF1dGgoKS5jdXJyZW50VXNlciA/IGF3YWl0IGF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKCkgOiAnbm90b2tlYic7XG4gICAgY29uc3QgY28gPSBhd2FpdCBqc2Nvb2tpZS5nZXQoJ2xwdG9rZW4nKTtcbiAgICBjb25zdCB0b2tlbiA9IGNvID8gY28gOiAnbm90b2tlYidcbiAgICByZXR1cm4gdG9rZW47XG59XG5cbmV4cG9ydCBjb25zdCBBUElfSEVBREVSUyA9IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gXG59XG5cblxuZXhwb3J0IGNvbnN0IEdFVF9UT0tFTl9IRUFERVIgPSBhc3luYyAoKSA9PiAoe1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthd2FpdCBnZXRUb2tlbigpfWBcbn0pXG5cblxuZXhwb3J0IGNvbnN0IEdFVF9TRVJWRVJfVE9LRU5fSEVBREVSID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHsgbHB0b2tlbiB9ID0gY29va2llcyhjdHgpO1xuICAgIHJldHVybih7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xwdG9rZW59YCxcbiAgICAgICAgJ3NlcnZlci1hY2Nlc3Mta2V5JzogYCR7U0VSVkVSX0FQSV9LRVl9YCBcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBHRVRfQVVUSF9VU0VSX0RFVEFJTFMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBscHRva2VuIH0gPSBjb29raWVzKGN0eCk7XG4gICAgaWYoIWxwdG9rZW4pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIGxldCB1c2VyID0gYXdhaXQgZmV0Y2goQVBJX1VSTCtgL2F1dGgvYXV0aFVzZXIvYCwge1xuICAgICAgICBoZWFkZXJzOiBhd2FpdCBHRVRfU0VSVkVSX1RPS0VOX0hFQURFUihjdHgpXG4gICAgfSlcbiAgICB1c2VyID0gYXdhaXQgdXNlci5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udXNlclxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/constants.js\n");

/***/ }),

/***/ "./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/*! exports provided: auth, provider, storage, signInWithGithub, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"provider\", function() { return provider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInWithGithub\", function() { return signInWithGithub; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firebaseConfig = {\n  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,\n  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,\n  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,\n  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,\n  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,\n  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,\n  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID\n};\nlet firebaseApp = null;\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n}\n\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth;\nconst provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GithubAuthProvider();\nconst storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();\nconst signInWithGithub = () => {\n  auth().signInWithPopup(provider);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UuanM/YzZmMiJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElLRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSERPTUFJTiIsImRhdGFiYXNlVVJMIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfREFUQUJBU0VVUkwiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRUJVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HU0VOREVSSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUElEIiwiZmlyZWJhc2VBcHAiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsInByb3ZpZGVyIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwic3RvcmFnZSIsInNpZ25JbldpdGhHaXRodWIiLCJzaWduSW5XaXRoUG9wdXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDJCQURDO0FBRXJCQyxZQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRywrQkFGSDtBQUdyQkMsYUFBVyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssZ0NBSEo7QUFJckJDLFdBQVMsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLDhCQUpGO0FBS3JCQyxlQUFhLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxrQ0FMTjtBQU1yQkMsbUJBQWlCLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxzQ0FOVjtBQU9yQkMsT0FBSyxFQUFFYixPQUFPLENBQUNDLEdBQVIsQ0FBWWE7QUFQRSxDQUF2QjtBQVVBLElBQUlDLFdBQVcsR0FBRyxJQUFsQjs7QUFDQSxJQUFJLENBQUNDLG1EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDdkJILGFBQVcsR0FBR0MsbURBQVEsQ0FBQ0csYUFBVCxDQUF1QnJCLGNBQXZCLENBQWQ7QUFDSDs7QUFJTSxNQUFNc0IsSUFBSSxHQUFHSixtREFBUSxDQUFDSSxJQUF0QjtBQUVBLE1BQU1DLFFBQVEsR0FBRyxJQUFJTCxtREFBUSxDQUFDSSxJQUFULENBQWNFLGtCQUFsQixFQUFqQjtBQUVBLE1BQU1DLE9BQU8sR0FBR1AsbURBQVEsQ0FBQ08sT0FBVCxFQUFoQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLE1BQU07QUFDbENKLE1BQUksR0FBR0ssZUFBUCxDQUF1QkosUUFBdkI7QUFDSCxDQUZNO0FBSVFMLGtIQUFmIiwiZmlsZSI6Ii4vY29uZmlnL2ZpcmViYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIRE9NQUlOLFxuICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfREFUQUJBU0VVUkwsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVElELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HU0VOREVSSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBJRFxufVxuXG5sZXQgZmlyZWJhc2VBcHAgPSBudWxsO1xuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlQXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG59XG5cblxuXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGg7XG5cbmV4cG9ydCBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcigpO1xuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcblxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhHaXRodWIgPSAoKSA9PiB7XG4gICAgYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/AuthProvider */ \"./providers/AuthProvider.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/stanly/Documents/projects/leapcode-next/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = () => {\n  // console.log('onRouteChangeStart triggered');\n  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();\n};\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = () => {\n  // console.log('onRouteChangeComplete triggered');\n  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n};\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = () => {\n  // console.log('onRouteChangeError triggered');\n  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n};\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_2__[\"AuthProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"App w-full min-h-screen font-jak flex flex-col justify-between\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLE1BQU07QUFDaEM7QUFDQUMsa0RBQVMsQ0FBQ0MsS0FBVjtBQUNELENBSEQ7O0FBS0FILGtEQUFNLENBQUNJLHFCQUFQLEdBQStCLE1BQU07QUFDbkM7QUFDQUYsa0RBQVMsQ0FBQ0csSUFBVjtBQUNELENBSEQ7O0FBS0FMLGtEQUFNLENBQUNNLGtCQUFQLEdBQTRCLE1BQU07QUFDaEM7QUFDQUosa0RBQVMsQ0FBQ0csSUFBVjtBQUNELENBSEQ7O0FBTUEsU0FBU0UsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLG9FQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZ0VBQWY7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyLCBBdXRoQ29udGV4dCB9IGZyb20gJy4uL3Byb3ZpZGVycy9BdXRoUHJvdmlkZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuLy8gTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBwdWJsaWNSdW50aW1lQ29uZmlnLk5Qcm9ncmVzc1Nob3dTcGlubmVyIH0pO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnb25Sb3V0ZUNoYW5nZVN0YXJ0IHRyaWdnZXJlZCcpO1xuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbn07XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCdvblJvdXRlQ2hhbmdlQ29tcGxldGUgdHJpZ2dlcmVkJyk7XG4gIE5Qcm9ncmVzcy5kb25lKCk7XG59O1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnb25Sb3V0ZUNoYW5nZUVycm9yIHRyaWdnZXJlZCcpO1xuICBOUHJvZ3Jlc3MuZG9uZSgpO1xufTtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgdy1mdWxsIG1pbi1oLXNjcmVlbiBmb250LWphayBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0F1dGhQcm92aWRlcj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./providers/AuthProvider.js":
/*!***********************************!*\
  !*** ./providers/AuthProvider.js ***!
  \***********************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/constants */ \"./config/constants.js\");\n\nvar _jsxFileName = \"/Users/stanly/Documents/projects/leapcode-next/providers/AuthProvider.js\";\n\n //import SkeletonLoading from \"../Components/SkeletonLoading\";\n\n\n\nconst AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: currentUser,\n    1: setCurrentUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: pending,\n    1: setPending\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: token,\n    1: setToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: userDetails,\n    1: setUserDetails\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: claims,\n    1: setClaims\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const {\n    0: lpLoggedIn,\n    1: setLpLoggedIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const signOut = () => {\n    Object(_config_firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"])().signOut().then(res => {\n      setToken(null);\n      setUserDetails(null);\n      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(_config_constants__WEBPACK_IMPORTED_MODULE_4__[\"COOKIE_TOKEN\"]);\n      window.location.href = \"/\";\n    });\n  };\n\n  const login = async () => {\n    const authUser = await Object(_config_firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"])().signInWithPopup(_config_firebase__WEBPACK_IMPORTED_MODULE_2__[\"provider\"]);\n    const userToken = await Object(_config_firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"])().currentUser.getIdToken();\n    const loginInfo = await fetch(_config_constants__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + `/auth/login`, {\n      method: 'POST',\n      headers: _config_constants__WEBPACK_IMPORTED_MODULE_4__[\"API_HEADERS\"],\n      body: JSON.stringify({\n        token: userToken,\n        username: authUser.additionalUserInfo ? authUser.additionalUserInfo.username : '',\n        githubInfo: authUser.additionalUserInfo ? authUser.additionalUserInfo.profile : {}\n      })\n    });\n\n    if (!loginInfo) {\n      return signOut();\n    }\n\n    window.location.reload();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Object(_config_firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"])().onAuthStateChanged(async user => {\n      setCurrentUser(user);\n\n      if (user) {\n        const idClains = await user.getIdTokenResult();\n        setClaims(idClains);\n        const idToken = await user.getIdToken();\n        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(_config_constants__WEBPACK_IMPORTED_MODULE_4__[\"COOKIE_TOKEN\"], idToken);\n        setToken(idToken);\n        const userD = {\n          displayName: user.displayName,\n          email: user.email,\n          emailVerified: user.emailVerified,\n          photoURL: user.photoURL,\n          uid: user.uid,\n          metadata: user.metadata\n        };\n        setUserDetails(userD);\n      } else {\n        setCurrentUser(null);\n        setPending(false); //setToken(null)\n\n        js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(_config_constants__WEBPACK_IMPORTED_MODULE_4__[\"COOKIE_TOKEN\"]);\n      }\n\n      setPending(false);\n    });\n  }, []); // if( pending ){\n  //   return (<div className=\"w-screen h-screen flex items-center justify-center\">\n  //     <div className=\"w-1/4 bg-white rounded-lg px-6 py-10 flex items-center flex-col\">\n  //       loading\n  //     </div>\n  //   </div>)\n  // }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      currentUser,\n      authLoading: false,\n      setToken,\n      token,\n      userDetails,\n      signOut,\n      claims,\n      login\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvQXV0aFByb3ZpZGVyLmpzP2Y4M2UiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1c2VTdGF0ZSIsInBlbmRpbmciLCJzZXRQZW5kaW5nIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZXJEZXRhaWxzIiwic2V0VXNlckRldGFpbHMiLCJjbGFpbXMiLCJzZXRDbGFpbXMiLCJscExvZ2dlZEluIiwic2V0THBMb2dnZWRJbiIsInNpZ25PdXQiLCJhdXRoIiwidGhlbiIsInJlcyIsImNvb2tpZSIsInJlbW92ZSIsIkNPT0tJRV9UT0tFTiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvZ2luIiwiYXV0aFVzZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJwcm92aWRlciIsInVzZXJUb2tlbiIsImdldElkVG9rZW4iLCJsb2dpbkluZm8iLCJmZXRjaCIsIkFQSV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiQVBJX0hFQURFUlMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJuYW1lIiwiYWRkaXRpb25hbFVzZXJJbmZvIiwiZ2l0aHViSW5mbyIsInByb2ZpbGUiLCJyZWxvYWQiLCJ1c2VFZmZlY3QiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiaWRDbGFpbnMiLCJnZXRJZFRva2VuUmVzdWx0IiwiaWRUb2tlbiIsInNldCIsInVzZXJEIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsImVtYWlsVmVyaWZpZWQiLCJwaG90b1VSTCIsInVpZCIsIm1ldGFkYXRhIiwiYXV0aExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXBCO0FBRUEsTUFB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QUFFVCxJQUFJLENBQUNTLFFBSkg7QUFLWkMsYUFBRyxFQUFFVixJQUFJLENBQUNVLEdBTEU7QUFNWkMsa0JBQVEsRUFBRVgsSUFBSSxDQUFDVztBQU5ILFNBQWQ7QUFRQWhELHNCQUFjLENBQUMwQyxLQUFELENBQWQ7QUFDRCxPQWhCRCxNQWtCSztBQUNIakQsc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUcsa0JBQVUsQ0FBQyxLQUFELENBQVYsQ0FGRyxDQUdIOztBQUNBYSx3REFBTSxDQUFDQyxNQUFQLENBQWNDLDhEQUFkO0FBQ0Q7O0FBRURmLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBRUQsS0E3QkQ7QUE4QkQsR0EvQlEsRUErQk4sRUEvQk0sQ0FBVCxDQXRDNEMsQ0EwRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQ0UsU0FBSyxFQUFFO0FBQ0xKLGlCQURLO0FBRUx5RCxpQkFBVyxFQUFFLEtBRlI7QUFHTG5ELGNBSEs7QUFJTEQsV0FKSztBQUtMRSxpQkFMSztBQU1MTSxhQU5LO0FBT0xKLFlBUEs7QUFRTGM7QUFSSyxLQURUO0FBQUEsY0FZR3hCO0FBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBbkdNIiwiZmlsZSI6Ii4vcHJvdmlkZXJzL0F1dGhQcm92aWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vY29uZmlnL2ZpcmViYXNlJztcbi8vaW1wb3J0IFNrZWxldG9uTG9hZGluZyBmcm9tIFwiLi4vQ29tcG9uZW50cy9Ta2VsZXRvbkxvYWRpbmdcIjtcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEFQSV9IRUFERVJTLCBBUElfVVJMLCBDT09LSUVfVE9LRU4sIGdldFRva2VuIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGVuZGluZywgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJEZXRhaWxzLCBzZXRVc2VyRGV0YWlsc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NsYWltcywgc2V0Q2xhaW1zXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbHBMb2dnZWRJbiwgc2V0THBMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICBhdXRoKCkuc2lnbk91dCgpLnRoZW4ocmVzID0+IHtcbiAgICAgIHNldFRva2VuKG51bGwpO1xuICAgICAgc2V0VXNlckRldGFpbHMobnVsbCk7XG4gICAgICBjb29raWUucmVtb3ZlKENPT0tJRV9UT0tFTik7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9cIlxuICAgIH0pXG4gIH1cblxuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcik7XG4gICAgY29uc3QgdXNlclRva2VuID0gYXdhaXQgYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW4oKTtcbiAgICBjb25zdCBsb2dpbkluZm8gPSBhd2FpdCBmZXRjaChBUElfVVJMK2AvYXV0aC9sb2dpbmAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IEFQSV9IRUFERVJTLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0b2tlbjogdXNlclRva2VuLFxuICAgICAgICAgICAgdXNlcm5hbWU6IGF1dGhVc2VyLmFkZGl0aW9uYWxVc2VySW5mbyA/IGF1dGhVc2VyLmFkZGl0aW9uYWxVc2VySW5mby51c2VybmFtZSA6ICcnLFxuICAgICAgICAgICAgZ2l0aHViSW5mbzogYXV0aFVzZXIuYWRkaXRpb25hbFVzZXJJbmZvID8gYXV0aFVzZXIuYWRkaXRpb25hbFVzZXJJbmZvLnByb2ZpbGUgOiB7fVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgaWYoIWxvZ2luSW5mbykge1xuICAgICAgcmV0dXJuIHNpZ25PdXQoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgIHNldEN1cnJlbnRVc2VyKHVzZXIpXG4gICAgICBpZih1c2VyKSB7XG5cbiAgICAgICAgY29uc3QgaWRDbGFpbnMgPSBhd2FpdCB1c2VyLmdldElkVG9rZW5SZXN1bHQoKTtcbiAgICAgICAgc2V0Q2xhaW1zKGlkQ2xhaW5zKTtcbiAgICAgICAgY29uc3QgaWRUb2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpO1xuICAgICAgICBjb29raWUuc2V0KENPT0tJRV9UT0tFTiwgaWRUb2tlbik7XG4gICAgICAgIHNldFRva2VuKGlkVG9rZW4pO1xuICAgICAgICBjb25zdCB1c2VyRCA9IHtcbiAgICAgICAgICBkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBlbWFpbFZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXG4gICAgICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgICAgICBtZXRhZGF0YTogdXNlci5tZXRhZGF0YVxuICAgICAgICB9XG4gICAgICAgIHNldFVzZXJEZXRhaWxzKHVzZXJEKVxuICAgICAgfVxuICAgICAgXG4gICAgICBlbHNlIHtcbiAgICAgICAgc2V0Q3VycmVudFVzZXIobnVsbClcbiAgICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XG4gICAgICAgIC8vc2V0VG9rZW4obnVsbClcbiAgICAgICAgY29va2llLnJlbW92ZShDT09LSUVfVE9LRU4pO1xuICAgICAgfVxuXG4gICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcbiAgICAgIFxuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuXG5cbiAgLy8gaWYoIHBlbmRpbmcgKXtcbiAgLy8gICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYmctd2hpdGUgcm91bmRlZC1sZyBweC02IHB5LTEwIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XG4gIC8vICAgICAgIGxvYWRpbmdcbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgIDwvZGl2PilcbiAgLy8gfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICBhdXRoTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHNldFRva2VuLFxuICAgICAgICB0b2tlbixcbiAgICAgICAgdXNlckRldGFpbHMsXG4gICAgICAgIHNpZ25PdXQsXG4gICAgICAgIGNsYWltcyxcbiAgICAgICAgbG9naW5cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./providers/AuthProvider.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-cookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIj82ZGI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29va2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-cookies\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nprogress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIj8xNTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nprogress\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });