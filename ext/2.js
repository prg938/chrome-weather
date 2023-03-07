(this["webpackJsonpchrome-weather"] = this["webpackJsonpchrome-weather"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/index.css ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n/* Scrollbar size */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n  -webkit-transition: 1.0s;\r\n  transition: 1.0s;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: none;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background-color: rgba(127, 127, 127, 0.6);\r\n  background-clip: padding-box;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  -webkit-transition: 1.0s;\r\n  transition: 1.0s;\r\n}\r\n::-webkit-scrollbar-thumb:vertical:hover,\r\n::-webkit-scrollbar-thumb:horizontal:hover {\r\n  background-color: rgb(110, 110, 110);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n::-webkit-scrollbar-thumb:vertical:active,\r\n::-webkit-scrollbar-thumb:horizontal:active {\r\n  background: rgba(95, 91, 91, 1);\r\n}\r\n\r\nbody {\r\n  background-color: rgb(35, 39, 47);\r\n  font-family: 'Roboto';\r\n  color: rgb(201, 209, 217);\r\n}\r\nbody.grabbing { cursor: grabbing; }\r\n\r\n\r\n/*gw-temperature*/\r\n.gw-temperature {\r\n  margin: 20px 0;\r\n}\r\n.gw-temperature .gw-temperature__wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.gw-temperature .gw-temperature__value {\r\n  font-size: 74px;\r\n  color: black;\r\n  font-weight: 600;\r\n  min-width: 140px;\r\n  line-height: 1.2;\r\n}\r\n.gw-temperature .gw-temperature__t {\r\n  font-size: 53px;\r\n}\r\n.gw-temperature .gw-temperature__geo {\r\n  font-size: 14px;\r\n}\r\n.gw-temperature .gw-temperature__geo > * {\r\n  vertical-align: top;\r\n}\r\n.gw-temperature__icon-wrapper {\r\n  min-width: 175px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.gw-temperature .gw-temperature__icon {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/*gw-stats*/\r\n.gw-stats {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 21px;\r\n  background-color: darkslateblue;\r\n  padding: 10px;\r\n}\r\n.gw-stats .outside {\r\n  min-width: 140px;\r\n}\r\n.gw-stats .time {\r\n  min-width: 105px;\r\n}\r\n\r\n/*tabber*/\r\n.tabber {\r\n  margin-top: 20px;\r\n  font-size: 14px;\r\n}\r\n.tabber__content {\r\n  margin-top: 20px;\r\n}\r\n.tabber__content a {\r\n  text-decoration: none;\r\n  color: rgb(105, 103, 221);\r\n  font-weight: bold;\r\n}\r\n.tabber__content a:hover {\r\n  text-decoration: underline;\r\n}\r\n.tabber__tab {\r\n  display: inline-block;\r\n  padding: 0 25px;\r\n}\r\n.tabber__tab:first-child { padding-left: 0; }\r\n.tabber__tab:last-child { padding-right: 0; }\r\n\r\n.tabber__tab .tabber__text {\r\n  border-bottom: 3px solid transparent;\r\n  font-size: 27px;\r\n  cursor: pointer;\r\n  transition: all .1s ease-in-out;\r\n}\r\n.tabber__tab.tabber__tab_current .tabber__text {\r\n  border-bottom: 3px solid rgb(105, 103, 221);\r\n}\r\n\r\n/*chart-container*/\r\n.chart-container {\r\n  overflow: hidden;\r\n}\r\n.chart-container .chart-wrapper {\r\n  position: relative;\r\n}\r\n.chart-container .chart-container__tooltip {\r\n  position: absolute;\r\n  background-color: #000000;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 12px;\r\n  color: rgb(179, 179, 179);\r\n  padding: 4px 10px;\r\n  border-radius: 15px;\r\n  font-weight: bold;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n/*chartminified-container*/\r\n.chartminified-container {\r\n  position: relative;\r\n}\r\n.chartminified-container > .chartminified-container__viewbox {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: rgb(22, 24, 29);\r\n  opacity: .75;\r\n  height: 100%;\r\n  cursor: grab;\r\n}\r\n.chartminified-container > .chartminified-container__viewbox.grabbing { \r\n  cursor: grabbing;\r\n}", "",{"version":3,"sources":["webpack://src/styles/index.css"],"names":[],"mappings":";AACA,mBAAmB;AACnB;EACE,WAAW;EACX,YAAY;EACZ,wBAAgB;EAAhB,gBAAgB;AAClB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,0CAA0C;EAC1C,4BAA4B;EAC5B,6BAA6B;EAC7B,kBAAkB;EAClB,wBAAgB;EAAhB,gBAAgB;AAClB;AACA;;EAEE,oCAAoC;EACpC,wBAAgB;EAAhB,gBAAgB;AAClB;AACA;;EAEE,+BAA+B;AACjC;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;EACrB,yBAAyB;AAC3B;AACA,gBAAgB,gBAAgB,EAAE;;;AAGlC,iBAAiB;AACjB;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,+BAA+B;EAC/B,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;AACnB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,qBAAqB;EACrB,eAAe;AACjB;AACA,2BAA2B,eAAe,EAAE;AAC5C,0BAA0B,gBAAgB,EAAE;;AAE5C;EACE,oCAAoC;EACpC,eAAe;EACf,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,2CAA2C;AAC7C;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;EACpC,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA,0BAA0B;AAC1B;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,iCAAiC;EACjC,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;AACA;EACE,gBAAgB;AAClB","sourcesContent":["\r\n/* Scrollbar size */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n  transition: 1.0s;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: none;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background-color: rgba(127, 127, 127, 0.6);\r\n  background-clip: padding-box;\r\n  border: 2px solid transparent;\r\n  border-radius: 5px;\r\n  transition: 1.0s;\r\n}\r\n::-webkit-scrollbar-thumb:vertical:hover,\r\n::-webkit-scrollbar-thumb:horizontal:hover {\r\n  background-color: rgb(110, 110, 110);\r\n  transition: 0.3s;\r\n}\r\n::-webkit-scrollbar-thumb:vertical:active,\r\n::-webkit-scrollbar-thumb:horizontal:active {\r\n  background: rgba(95, 91, 91, 1);\r\n}\r\n\r\nbody {\r\n  background-color: rgb(35, 39, 47);\r\n  font-family: 'Roboto';\r\n  color: rgb(201, 209, 217);\r\n}\r\nbody.grabbing { cursor: grabbing; }\r\n\r\n\r\n/*gw-temperature*/\r\n.gw-temperature {\r\n  margin: 20px 0;\r\n}\r\n.gw-temperature .gw-temperature__wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.gw-temperature .gw-temperature__value {\r\n  font-size: 74px;\r\n  color: black;\r\n  font-weight: 600;\r\n  min-width: 140px;\r\n  line-height: 1.2;\r\n}\r\n.gw-temperature .gw-temperature__t {\r\n  font-size: 53px;\r\n}\r\n.gw-temperature .gw-temperature__geo {\r\n  font-size: 14px;\r\n}\r\n.gw-temperature .gw-temperature__geo > * {\r\n  vertical-align: top;\r\n}\r\n.gw-temperature__icon-wrapper {\r\n  min-width: 175px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.gw-temperature .gw-temperature__icon {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/*gw-stats*/\r\n.gw-stats {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 21px;\r\n  background-color: darkslateblue;\r\n  padding: 10px;\r\n}\r\n.gw-stats .outside {\r\n  min-width: 140px;\r\n}\r\n.gw-stats .time {\r\n  min-width: 105px;\r\n}\r\n\r\n/*tabber*/\r\n.tabber {\r\n  margin-top: 20px;\r\n  font-size: 14px;\r\n}\r\n.tabber__content {\r\n  margin-top: 20px;\r\n}\r\n.tabber__content a {\r\n  text-decoration: none;\r\n  color: rgb(105, 103, 221);\r\n  font-weight: bold;\r\n}\r\n.tabber__content a:hover {\r\n  text-decoration: underline;\r\n}\r\n.tabber__tab {\r\n  display: inline-block;\r\n  padding: 0 25px;\r\n}\r\n.tabber__tab:first-child { padding-left: 0; }\r\n.tabber__tab:last-child { padding-right: 0; }\r\n\r\n.tabber__tab .tabber__text {\r\n  border-bottom: 3px solid transparent;\r\n  font-size: 27px;\r\n  cursor: pointer;\r\n  transition: all .1s ease-in-out;\r\n}\r\n.tabber__tab.tabber__tab_current .tabber__text {\r\n  border-bottom: 3px solid rgb(105, 103, 221);\r\n}\r\n\r\n/*chart-container*/\r\n.chart-container {\r\n  overflow: hidden;\r\n}\r\n.chart-container .chart-wrapper {\r\n  position: relative;\r\n}\r\n.chart-container .chart-container__tooltip {\r\n  position: absolute;\r\n  background-color: #000000;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 12px;\r\n  color: rgb(179, 179, 179);\r\n  padding: 4px 10px;\r\n  border-radius: 15px;\r\n  font-weight: bold;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n/*chartminified-container*/\r\n.chartminified-container {\r\n  position: relative;\r\n}\r\n.chartminified-container > .chartminified-container__viewbox {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: rgb(22, 24, 29);\r\n  opacity: .75;\r\n  height: 100%;\r\n  cursor: grab;\r\n}\r\n.chartminified-container > .chartminified-container__viewbox.grabbing { \r\n  cursor: grabbing;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/GoogleWeather/Chart.tsx":
/*!************************************************!*\
  !*** ./src/components/GoogleWeather/Chart.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings */ "./src/settings/index.ts");
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contexts */ "./src/components/GoogleWeather/Contexts.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Chart.tsx";






class Chart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.initialClickState = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.viewboxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.chartWrapperRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.W = _settings__WEBPACK_IMPORTED_MODULE_1__["default"].chartW;
    this.H = _settings__WEBPACK_IMPORTED_MODULE_1__["default"].chartH;
    this.mW = _settings__WEBPACK_IMPORTED_MODULE_1__["default"].windowW;
    this.mH = _settings__WEBPACK_IMPORTED_MODULE_1__["default"].chartMinifiedH;
    this.prevCircleIndex = 0;
    this.animation = {
      frameId: 0,
      duration: 1000,
      fn: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    };
    this.animationInitialized = false;
    this.coordinates = {
      large: [],
      minified: []
    };
    this.state = {
      coordinates: {
        large: [],
        minified: []
      }
    };
    this.styles = {
      dasharrayLine: {
        style: {
          stroke: '#cfcfcf',
          strokeWidth: 1,
          strokeDasharray: '3',
          opacity: 0
        },
        prefix: '__dasharray-'
      },
      tooltip: {
        class: 'chart-container__tooltip',
        prefix: '__tooltip'
      },
      line: {
        style: {
          stroke: 'rgb(201, 209, 217)',
          strokeWidth: 3
        }
      },
      lineMinified: {
        style: {
          stroke: 'rgb(201, 209, 217)',
          strokeWidth: 1
        }
      },
      circle: {
        r: 6,
        style: {
          fill: 'rgb(201, 209, 217)'
        },
        activeColor: '#cfcfcf',
        prefix: '__circle-'
      },
      text: {
        style: {
          fill: '#b3b3b3',
          font: 'bold 12px "Roboto"'
        }
      },
      polygon: {
        style: {
          fill: '#16181d',
          strokeWidth: 1,
          stroke: '#16181d'
        }
      },
      viewbox: {
        class: 'chartminified-container__viewbox'
      },
      grabbing: {
        class: 'grabbing'
      }
    };

    this.cx = (i, W, L) => i * (W / L);

    this.cy = (y, ymin, ymax, H) => H / (this.diff(ymin, ymax) || Infinity) * this.diff(ymin, y);

    this.animationCompleted = false;
    this.preventComponentUpdate = false;
    this.circleEvent = this.circleEvent.bind(this);
    this.viewboxEvent = this.viewboxEvent.bind(this);
    this.initInitialCoordinates();
  }

  diff(min, max) {
    const {
      abs,
      sign
    } = Math;
    return sign(min) === sign(max) ? abs(abs(min) - abs(max)) : abs(min - max);
  }

  minmax(numbers) {
    let min, max;
    min = max = numbers[0];
    if (min === undefined || numbers.length === 1) return [];

    for (let i = 1; i < numbers.length; i++) {
      const n = numbers[i];
      if (n < min) min = n;
      if (n > max) max = n;
    }

    return [min, max];
  }

  pushCoordinates(temperatureList) {
    const {
      W,
      H,
      mW,
      mH
    } = this;
    this.coordinates.large.push(this.generateCoordinates(temperatureList, W, H));
    this.coordinates.minified.push(this.generateCoordinates(temperatureList, mW, mH));
  }

  initInitialCoordinates() {
    this.pushCoordinates([]);
  }

  initEndCoordinates() {
    this.pushCoordinates(this.props.gwc.data.trange.map(o => +o.tm).slice(0, _settings__WEBPACK_IMPORTED_MODULE_1__["default"].chartDotLimit));
  }

  generateCoordinates(temperatureList, W, H) {
    const L = _settings__WEBPACK_IMPORTED_MODULE_1__["default"].chartDotLimit - 1;
    const isEmpty = temperatureList.length === 0;
    const [ymin, ymax] = this.minmax(temperatureList);
    const [circleR, circleD] = [this.styles.circle.r, this.styles.circle.r * 2];
    const coordinates = [];
    H = H - circleD;

    for (let i = 0; i < L; i++) {
      const x = this.cx(i, W, L);
      const xNext = this.cx(i + 1, W, L);
      const textX = x - 12;
      const textY = H - 4;
      let y, yNext;

      if (isEmpty) {
        y = yNext = H;
      } else {
        y = H - this.cy(temperatureList[i], ymin, ymax, H) + circleR;
        yNext = H - this.cy(temperatureList[i + 1], ymin, ymax, H) + circleR;
      }

      const [p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y] = [x, y, x, H + circleD, xNext, H + circleD, xNext, yNext];
      coordinates[coordinates.length] = {
        x,
        y,
        xNext,
        yNext,
        textX,
        textY,
        p1x,
        p1y,
        p2x,
        p2y,
        p3x,
        p3y,
        p4x,
        p4y
      };
    }

    return coordinates;
  }

  generateChartElements(coordinates, minified) {
    const data = this.props.gwc.data;
    const containsTrange = ('trange' in data);
    const {
      dasharrayLine,
      line,
      lineMinified,
      circle,
      text,
      polygon
    } = this.styles;
    const [circles, lines, texts, polygons, dasharrayLines] = [[], [], [], [], []];

    for (let i = 0; i < coordinates.length; i++) {
      const {
        x,
        xNext,
        y,
        yNext,
        p1x,
        p1y,
        p2x,
        p2y,
        p3x,
        p3y,
        p4x,
        p4y
      } = coordinates[i];
      const notMinifiedAndGreaterZero = !minified && i > 0;
      const tm = containsTrange ? data.trange[i].tm : 0;
      polygons.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("polygon", {
        style: polygon.style,
        points: `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 21
      }, this));
      lines.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("line", {
        style: minified ? lineMinified.style : line.style,
        x1: x,
        y1: y,
        x2: xNext,
        y2: yNext
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 18
      }, this));

      if (notMinifiedAndGreaterZero) {
        dasharrayLines.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("line", {
          style: dasharrayLine.style,
          x1: x,
          y1: y,
          x2: x,
          y2: this.H,
          id: dasharrayLine.prefix.concat(String(i))
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 29
        }, this));
        circles.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("circle", {
          style: circle.style,
          cx: x,
          cy: y,
          r: circle.r,
          "data-index": i,
          id: circle.prefix.concat(String(i)),
          onMouseOver: this.circleEvent,
          onMouseOut: this.circleEvent
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 22
        }, this));
        texts.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("text", {
          style: text.style,
          x: x - 5,
          y: y < 25 ? y + 25 : y - 15,
          children: [tm, '°']
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 20
        }, this));
      }
    }

    return {
      circles,
      lines,
      texts,
      polygons,
      dasharrayLines
    };
  }

  viewboxEvent(event) {
    const [MOUSEUP, MOUSEDOWN, MOUSEMOVE] = ['mouseup', 'mousedown', 'mousemove'];
    const {
      viewbox,
      grabbing
    } = this.styles;
    const {
      W,
      mW
    } = this;
    const viewboxGrabbing = `${viewbox.class} ${grabbing.class}`;
    const eventType = event.type;
    const body = document.body;
    const viewboxElement = this.viewboxRef.current;
    const chartWrapperRef = this.chartWrapperRef.current;
    event.preventDefault();
    event.stopPropagation();

    switch (eventType) {
      case MOUSEUP:
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["className"])(viewboxElement, viewbox.class);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["className"])(body, _utils__WEBPACK_IMPORTED_MODULE_3__["es"]);
        body.removeEventListener(MOUSEUP, this.viewboxEvent);
        body.removeEventListener(MOUSEMOVE, this.viewboxEvent);
        this.initialClickState.current = undefined;
        break;

      case MOUSEDOWN:
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["className"])(viewboxElement, viewboxGrabbing);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["className"])(body, grabbing.class);
        body.addEventListener(MOUSEUP, this.viewboxEvent);
        body.addEventListener(MOUSEMOVE, this.viewboxEvent);
        this.initialClickState.current = {
          pgx: event.pageX,
          left: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["computed"])(viewboxElement, 'left')
        };
        break;

      case MOUSEMOVE:
        const {
          pgx,
          left
        } = this.initialClickState.current;
        const {
          offsetWidth
        } = viewboxElement;
        const cpgx = event.pageX;
        const currentLeft = left + (cpgx - pgx);
        const viewboxElementL = currentLeft;
        const viewboxElementR = currentLeft + offsetWidth;
        let computedLeft, computedTranslateX;
        if (viewboxElementR > mW) computedLeft = mW - offsetWidth;else if (viewboxElementL < 0) computedLeft = 0;else computedLeft = currentLeft;
        computedTranslateX = -computedLeft * ((W - mW) / (mW - mW * (mW / W)));
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(viewboxElement, {
          left: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(computedLeft)
        });
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(chartWrapperRef, {
          transform: `translate(${computedTranslateX}px, 0)`
        });
        break;
    }
  }

  circleEvent(event) {
    const [MOUSEOVER, MOUSEOUT] = ['mouseover', 'mouseout'];
    const {
      gwc: {
        data
      }
    } = this.props;
    const {
      dasharrayLine,
      tooltip,
      circle
    } = this.styles;
    const eventType = event.type;
    const circleElement = event.currentTarget;
    const circleIndex = Number(circleElement.dataset.index);

    const selectDasharrayTooltopCircle = circleIndex => {
      const stringifiedCircleIndex = String(circleIndex);
      return [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["selector"])(dasharrayLine.prefix.concat(stringifiedCircleIndex)), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["selector"])(tooltip.prefix), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["selector"])(circle.prefix.concat(stringifiedCircleIndex))];
    };

    const [dasharrayElement, tooltipElement] = selectDasharrayTooltopCircle(circleIndex);

    if (eventType === MOUSEOVER) {
      const [prevDasharrayElement, prevTooltipElement, prevCircleElement] = selectDasharrayTooltopCircle(this.prevCircleIndex);
      const {
        dts,
        tm
      } = data.trange[circleIndex];
      tooltipElement.innerText = dts;
      const tw = tooltipElement.offsetWidth;
      const th = tooltipElement.offsetHeight;
      const cx = Number(circleElement.getAttribute('cx'));
      const cy = Number(circleElement.getAttribute('cy'));
      if (prevDasharrayElement) Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(prevDasharrayElement, {
        opacity: 0
      });
      if (prevTooltipElement) Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(prevTooltipElement, {
        opacity: 0,
        visibility: 'hidden'
      });
      if (prevCircleElement) Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(prevCircleElement, {
        fill: circle.style.fill
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(dasharrayElement, {
        opacity: 1
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(tooltipElement, {
        opacity: 1,
        visibility: 'visible',
        left: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(cx - tw / 2),
        top: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(cy < 32 ? cy + 10 : cy - th - 10)
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["style"])(circleElement, {
        fill: circle.activeColor
      });
      this.props.gwc.update(circleIndex);
    } else if (eventType === MOUSEOUT) {
      this.prevCircleIndex = circleIndex;
    }
  }

  shouldComponentUpdate() {
    if (this.preventComponentUpdate) {
      return false;
    } else {
      if (this.animationCompleted) this.preventComponentUpdate = true;
      return true;
    }
  }

  render() {
    const SVGNS = 'http://www.w3.org/2000/svg';
    const {
      tooltip,
      viewbox
    } = this.styles;
    const {
      W,
      H,
      mW,
      mH
    } = this;
    const [coordinatesLarge, coordinatesMinified] = [this.animationInitialized ? this.state.coordinates.large : this.coordinates.large[0], this.animationInitialized ? this.state.coordinates.minified : this.coordinates.minified[0]];
    const {
      circles,
      lines,
      texts,
      polygons,
      dasharrayLines
    } = this.generateChartElements(coordinatesLarge, false);
    const {
      polygons: polygonsMinified,
      lines: linesMinified
    } = this.generateChartElements(coordinatesMinified, true);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "chart-container",
        style: {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(mW)
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "chart-wrapper",
          ref: this.chartWrapperRef,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
            xmlns: SVGNS,
            width: W,
            height: H,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("g", {
              children: [polygons, lines, dasharrayLines, circles, texts]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: tooltip.class,
            id: tooltip.prefix
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "chartminified-container",
        style: {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(mW),
          height: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(mH)
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
          xmlns: SVGNS,
          width: mW,
          height: mH,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("g", {
            children: [polygonsMinified, linesMinified]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: viewbox.class,
          style: {
            width: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(mW * (mW / W))
          },
          onMouseDown: this.viewboxEvent,
          onMouseUp: this.viewboxEvent,
          ref: this.viewboxRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 12
    }, this);
  }

  componentDidUpdate() {
    if (!this.animationInitialized) {
      this.animationInitialized = true;
      this.initEndCoordinates();
      const initialTime = Date.now();
      const {
        duration,
        fn
      } = this.animation;
      const {
        large,
        minified
      } = this.coordinates;
      const initialLargeCoordinates = large[0];
      const initialMinifiedCoordinates = minified[0];
      const endLargeCoordinates = large[1];
      const endMinifiedCoordinates = minified[1];

      const compute = (initialCoordinates, endCoordinates, dx) => {
        const coordinates = [];

        for (let i = 0; i < initialCoordinates.length; i++) {
          const {
            x,
            xNext,
            textX,
            textY,
            p1x,
            p2x,
            p3x,
            p4x,
            p2y,
            p3y,
            y: y1,
            yNext: yNext1,
            p1y: p1y1,
            p4y: p4y1
          } = initialCoordinates[i];
          const {
            y: y2,
            yNext: yNext2,
            p1y: p1y2,
            p4y: p4y2
          } = endCoordinates[i];
          const y = y1 + dx * (y2 - y1);
          const yNext = yNext1 + dx * (yNext2 - yNext1);
          const p1y = p1y1 + dx * (p1y2 - p1y1);
          const p4y = p4y1 + dx * (p4y2 - p4y1);
          coordinates.push({
            x,
            y,
            xNext,
            yNext,
            textX,
            textY,
            p1x,
            p1y,
            p2x,
            p2y,
            p3x,
            p3y,
            p4x,
            p4y
          });
        }

        return coordinates;
      };

      const animate = () => {
        const currentTime = Date.now();
        let animationComplete = false;
        let dx = (currentTime - initialTime) / duration;

        if (dx >= 1) {
          dx = 1;
          this.animationCompleted = animationComplete = true;
        }

        const newState = {
          coordinates: {
            large: [],
            minified: []
          }
        };
        newState.coordinates.large = compute(initialLargeCoordinates, endLargeCoordinates, fn(dx));
        newState.coordinates.minified = compute(initialMinifiedCoordinates, endMinifiedCoordinates, fn(dx));
        this.setState(state => newState);
        if (!animationComplete) this.animation.frameId = requestAnimationFrame(animate);
      };

      animate();
    }
  }

}

const component = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Contexts__WEBPACK_IMPORTED_MODULE_2__["GoogleWeatherContext"].Consumer, {
  children: gwc => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Chart, { ...props,
    gwc: gwc
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 328,
    columnNumber: 74
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 328,
  columnNumber: 35
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (component);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Contexts.ts":
/*!**************************************************!*\
  !*** ./src/components/GoogleWeather/Contexts.ts ***!
  \**************************************************/
/*! exports provided: GoogleWeatherContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleWeatherContext", function() { return GoogleWeatherContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const GoogleWeatherContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  data: {},
  circleIndex: 0,
  update: () => {},
  geo: null
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Humidity.tsx":
/*!***************************************************!*\
  !*** ./src/components/GoogleWeather/Humidity.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customHooks */ "./src/customHooks/index.tsx");
/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Humidity.tsx",
    _s = __webpack_require__.$Refresh$.signature();





const GoogleWeatherHumidity = ({
  name,
  prefix
}) => {
  _s();

  const result = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('humidity', 'h');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: name,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_wi__WEBPACK_IMPORTED_MODULE_1__["WiHumidity"], {
      title: "humidity"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

_s(GoogleWeatherHumidity, "xp3uL3Jz0lbC1dHmLR6Xf4FB98M=", false, function () {
  return [_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"]];
});

_c = GoogleWeatherHumidity;
/* harmony default export */ __webpack_exports__["default"] = (GoogleWeatherHumidity);

var _c;

__webpack_require__.$Refresh$.register(_c, "GoogleWeatherHumidity");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Links.tsx":
/*!************************************************!*\
  !*** ./src/components/GoogleWeather/Links.tsx ***!
  \************************************************/
/*! exports provided: LinkExternal, LinkGithub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkExternal", function() { return LinkExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkGithub", function() { return LinkGithub; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Links.tsx";

const LinkExternal = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: "https://github.com/prg938/chrome-weather",
    target: "_blank",
    rel: "noreferrer",
    children: "/chrome-weather"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 64
}, undefined);
_c = LinkExternal;
const LinkGithub = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: "https://github.com/prg938",
    target: "_blank",
    rel: "noreferrer",
    children: "github.com/prg938"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 62
}, undefined);
_c2 = LinkGithub;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "LinkExternal");
__webpack_require__.$Refresh$.register(_c2, "LinkGithub");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Loading.tsx":
/*!**************************************************!*\
  !*** ./src/components/GoogleWeather/Loading.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Loading.tsx";


const Loading = ({
  text
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "gw-temperature-loading",
    children: text ? text : 'Loading'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

__webpack_require__.$Refresh$.register(_c, "Loading");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Outside.tsx":
/*!**************************************************!*\
  !*** ./src/components/GoogleWeather/Outside.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customHooks */ "./src/customHooks/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Outside.tsx",
    _s = __webpack_require__.$Refresh$.signature();




const Outside = ({
  name,
  prefix
}) => {
  _s();

  let result = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('outside', 'c');
  if (Array.isArray(result)) result = result[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: name,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

_s(Outside, "xp3uL3Jz0lbC1dHmLR6Xf4FB98M=", false, function () {
  return [_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"]];
});

_c = Outside;
/* harmony default export */ __webpack_exports__["default"] = (Outside);

var _c;

__webpack_require__.$Refresh$.register(_c, "Outside");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Precipitation.tsx":
/*!********************************************************!*\
  !*** ./src/components/GoogleWeather/Precipitation.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customHooks */ "./src/customHooks/index.tsx");
/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Precipitation.tsx",
    _s = __webpack_require__.$Refresh$.signature();





const Precipitation = ({
  name,
  prefix
}) => {
  _s();

  const result = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('precipitation', 'p');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: name,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_wi__WEBPACK_IMPORTED_MODULE_1__["WiCloudDown"], {
      title: "precipitation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

_s(Precipitation, "xp3uL3Jz0lbC1dHmLR6Xf4FB98M=", false, function () {
  return [_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"]];
});

_c = Precipitation;
/* harmony default export */ __webpack_exports__["default"] = (Precipitation);

var _c;

__webpack_require__.$Refresh$.register(_c, "Precipitation");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Tabber.tsx":
/*!*************************************************!*\
  !*** ./src/components/GoogleWeather/Tabber.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Tabber.tsx",
    _s = __webpack_require__.$Refresh$.signature();




// <Tabber list={[['A', <Chart />], ['B', <div></div>]]} />
const Tabber = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(({
  list
}) => {
  _s();

  const [currentId, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');

  const specifyClass = id => id === currentId ? 'tabber__tab tabber__tab_current' : 'tabber__tab';

  const findDataTabId = target => {
    if (target) {
      const dataTab = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])(target)('data-tab');
      return dataTab ? dataTab : findDataTabId(target.parentElement);
    } else return '0';
  };

  const containerEvent = event => setId(findDataTabId(event.target));

  let content = undefined;
  const tabs = list.map((value, index) => {
    const [name, _content] = value;
    const indexStringified = String(index);

    if (indexStringified === currentId) {
      content = _content;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: specifyClass(indexStringified),
      "data-tab": indexStringified,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "tabber__text",
        "data-tab-text": true,
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, undefined)
    }, indexStringified, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "tabber",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "tabber__tabs",
      onClick: containerEvent,
      children: tabs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "tabber__content",
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 10
  }, undefined);
}, "lEG3D7hSBFCjFDUYn9w9bADlxRI="));
_c2 = Tabber;
/* harmony default export */ __webpack_exports__["default"] = (Tabber);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Tabber$memo");
__webpack_require__.$Refresh$.register(_c2, "Tabber");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Temperature.tsx":
/*!******************************************************!*\
  !*** ./src/components/GoogleWeather/Temperature.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customHooks */ "./src/customHooks/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contexts */ "./src/components/GoogleWeather/Contexts.ts");
/* harmony import */ var _Outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Outside */ "./src/components/GoogleWeather/Outside.tsx");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Temperature.tsx",
    _s = __webpack_require__.$Refresh$.signature();








const Temperatute = () => {
  _s();

  const temperature = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('temperature', 'tm');
  let icon = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('outside', 'iu');
  const gwc = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Contexts__WEBPACK_IMPORTED_MODULE_2__["GoogleWeatherContext"]);

  const getImageWithHTTPPrefix = link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
    src: link.replace(/^/, 'http:'),
    alt: ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 52
  }, undefined);

  const geo = gwc.geo ? gwc.geo.country + ', ' + gwc.geo.city : '...';
  if (Array.isArray(icon)) icon = getImageWithHTTPPrefix(icon[1]);
  if (typeof icon === 'string') icon = getImageWithHTTPPrefix(icon);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "gw-temperature__wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "gw-temperature__value",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "gw-temperature__t",
        children: [temperature, '°C']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "gw-temperature__geo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsGeoAltFill"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, undefined), " \xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
          children: geo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "gw-temperature__icon-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "gw-temperature__icon",
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Outside__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: 'outside'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, undefined);
};

_s(Temperatute, "9sTLCwVflV3i9o8MvJwH2h4UEgA=", false, function () {
  return [_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"], _customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"]];
});

_c = Temperatute;
/* harmony default export */ __webpack_exports__["default"] = (Temperatute);

var _c;

__webpack_require__.$Refresh$.register(_c, "Temperatute");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Time.tsx":
/*!***********************************************!*\
  !*** ./src/components/GoogleWeather/Time.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customHooks */ "./src/customHooks/index.tsx");
/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Time.tsx",
    _s = __webpack_require__.$Refresh$.signature();





const prefix = time => String(time).length === 1 ? '0' + time : time;

const Time = ({
  name
}) => {
  _s();

  let result = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('dts', 'dts');
  const date = new Date();
  const dtsFallback = prefix(date.getHours()) + ':' + prefix(date.getMinutes());
  if (result === null) result = dtsFallback;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: name,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_wi__WEBPACK_IMPORTED_MODULE_1__["WiTime3"], {
      title: "time"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

_s(Time, "xp3uL3Jz0lbC1dHmLR6Xf4FB98M=", false, function () {
  return [_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"]];
});

_c = Time;
/* harmony default export */ __webpack_exports__["default"] = (Time);

var _c;

__webpack_require__.$Refresh$.register(_c, "Time");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/Wind.tsx":
/*!***********************************************!*\
  !*** ./src/components/GoogleWeather/Wind.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../customHooks */ "./src/customHooks/index.tsx");
/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\Wind.tsx",
    _s = __webpack_require__.$Refresh$.signature();





const Wind = ({
  name,
  prefix
}) => {
  _s();

  const result = Object(_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"])('wind', 'ws');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: name,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_wi__WEBPACK_IMPORTED_MODULE_1__["WiStrongWind"], {
      title: "wind"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

_s(Wind, "xp3uL3Jz0lbC1dHmLR6Xf4FB98M=", false, function () {
  return [_customHooks__WEBPACK_IMPORTED_MODULE_0__["useResult"]];
});

_c = Wind;
/* harmony default export */ __webpack_exports__["default"] = (Wind);

var _c;

__webpack_require__.$Refresh$.register(_c, "Wind");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GoogleWeather/index.tsx":
/*!************************************************!*\
  !*** ./src/components/GoogleWeather/index.tsx ***!
  \************************************************/
/*! exports provided: GoogleWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleWeather", function() { return GoogleWeather; });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contexts */ "./src/components/GoogleWeather/Contexts.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _Temperature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Temperature */ "./src/components/GoogleWeather/Temperature.tsx");
/* harmony import */ var _Precipitation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Precipitation */ "./src/components/GoogleWeather/Precipitation.tsx");
/* harmony import */ var _Humidity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Humidity */ "./src/components/GoogleWeather/Humidity.tsx");
/* harmony import */ var _Wind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Wind */ "./src/components/GoogleWeather/Wind.tsx");
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Time */ "./src/components/GoogleWeather/Time.tsx");
/* harmony import */ var _Tabber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tabber */ "./src/components/GoogleWeather/Tabber.tsx");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chart */ "./src/components/GoogleWeather/Chart.tsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../settings */ "./src/settings/index.ts");
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Links */ "./src/components/GoogleWeather/Links.tsx");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\components\\GoogleWeather\\index.tsx",
    _s = __webpack_require__.$Refresh$.signature();

















const GoogleWeather = () => {
  _s();

  const [data, update] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data: {},
    circleIndex: null,
    geo: null
  });

  const upd = data => update(prevData => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["merge"])(prevData, data));

  const gwc = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["merge"])(data, {
    update: circleIndex => upd({
      circleIndex
    })
  });
  const links = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => [[/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_13__["GoLinkExternal"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 6
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Links__WEBPACK_IMPORTED_MODULE_12__["LinkExternal"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 26
  }, undefined)], [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_icons_go__WEBPACK_IMPORTED_MODULE_13__["GoLogoGithub"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 6
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Links__WEBPACK_IMPORTED_MODULE_12__["LinkGithub"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 24
  }, undefined)]], []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    chrome.runtime.sendMessage({
      type: 'data'
    }, response => {
      if (response) {
        const {
          data,
          geo
        } = response;
        chrome.action.setBadgeText({
          text: data.temperature + '°'
        });
        upd({
          data,
          geo
        });
      } else document.write('Cannot fetch data from background.js');
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Contexts__WEBPACK_IMPORTED_MODULE_2__["GoogleWeatherContext"].Provider, {
    value: gwc,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
      style: {
        width: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(_settings__WEBPACK_IMPORTED_MODULE_11__["default"].windowW),
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["px"])(_settings__WEBPACK_IMPORTED_MODULE_11__["default"].windowH)
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
        className: "gw-top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
          className: "gw-temperature",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Temperature__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
          className: "gw-stats",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Time__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'time'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Precipitation__WEBPACK_IMPORTED_MODULE_5__["default"], {
            name: 'precipitation'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Humidity__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: 'humidity'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Wind__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'wind'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Chart__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Tabber__WEBPACK_IMPORTED_MODULE_9__["default"], {
        list: links
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 10
  }, undefined);
};

_s(GoogleWeather, "gwCOoxtUiMTRf0johPyOC4r9Adg=");

_c = GoogleWeather;


var _c;

__webpack_require__.$Refresh$.register(_c, "GoogleWeather");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/customHooks/index.tsx":
/*!***********************************!*\
  !*** ./src/customHooks/index.tsx ***!
  \***********************************/
/*! exports provided: useResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResult", function() { return useResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GoogleWeather_Contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GoogleWeather/Contexts */ "./src/components/GoogleWeather/Contexts.ts");
/* harmony import */ var _components_GoogleWeather_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GoogleWeather/Loading */ "./src/components/GoogleWeather/Loading.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\customHooks\\index.tsx",
    _s = __webpack_require__.$Refresh$.signature();






const useResult = (propertyFull, propertyShort, loadingText = '...') => {
  _s();

  const {
    data,
    circleIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_GoogleWeather_Contexts__WEBPACK_IMPORTED_MODULE_1__["GoogleWeatherContext"]);
  let result;

  if ('trange' in data) {
    if (circleIndex) result = data.trange[circleIndex][propertyShort];else {
      if (propertyFull === 'dts') result = null;else result = data[propertyFull];
    }
  } else result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_GoogleWeather_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: loadingText
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 17
  }, undefined);

  return result;
};

_s(useResult, "Cptt3YSg5tLknyy9PAHDJdSUzOU=");



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GoogleWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoogleWeather */ "./src/components/GoogleWeather/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\Rita\\Desktop\\dev\\chrome-weather\\src\\index.tsx";





Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_GoogleWeather__WEBPACK_IMPORTED_MODULE_3__["GoogleWeather"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 8
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/settings/index.ts":
/*!*******************************!*\
  !*** ./src/settings/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const settings = {
  windowW: 460,
  windowH: 420,
  chartW: 2500,
  chartH: 115,
  chartMinifiedH: 30,
  chartDotLimit: 50
};
/* harmony default export */ __webpack_exports__["default"] = (settings);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: es, UTF8ArrayToString, scroll, attr, px, computed, selector, className, style, isArray, isBoolean, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "es", function() { return es; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTF8ArrayToString", function() { return UTF8ArrayToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "className", function() { return className; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const es = '';
const UTF8ArrayToString = (() => {
  // Preallocate the cache for the common single byte chars
  const isFromCodePointDefined = !!String.fromCodePoint;
  const charCache = new Array(128);
  const charFromCodePt = String.fromCodePoint || String.fromCharCode;
  const result = [];
  return array => {
    const buffLen = array.length;
    let codePt, byte1;
    let i = 0;
    result.length = 0;

    while (i < buffLen) {
      byte1 = array[i++];
      if (byte1 <= 0x7F) codePt = byte1;else if (byte1 <= 0xDF) codePt = (byte1 & 0x1F) << 6 | array[i++] & 0x3F;else if (byte1 <= 0xEF) codePt = (byte1 & 0x0F) << 12 | (array[i++] & 0x3F) << 6 | array[i++] & 0x3F;else if (isFromCodePointDefined) codePt = (byte1 & 0x07) << 18 | (array[i++] & 0x3F) << 12 | (array[i++] & 0x3F) << 6 | array[i++] & 0x3F;else {
        // Cannot convert four byte code points, so use "?" instead
        codePt = 63;
        i = i + 3;
      }
      result.push(charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt)));
    }

    return result.join(es);
  };
})(); // @ts-ignore

const scroll = (axis = 'Y') => Number(window.pageYOffset !== undefined ? window[`page${axis}Offset`] : (document.documentElement || document.body.parentNode || document.body)[`scroll${axis === 'Y' ? 'Top' : 'Left'}`]);
const attr = node => qualifiedName => node.getAttribute(qualifiedName);
const px = value => `${value}px`;
const computed = (node, property) => {
  var _document$defaultView;

  return parseInt((_document$defaultView = document.defaultView) === null || _document$defaultView === void 0 ? void 0 : _document$defaultView.getComputedStyle(node).getPropertyValue(property));
};
const selector = selector => document.querySelector(`#${selector}`);
const className = (node, className) => node.setAttribute('class', node.className = className);
const style = (node, styleSet) => Object.keys(styleSet).forEach(property => node.style[property] = styleSet[property]);
const isArray = array => Object.prototype.toString.call(array) === '[object Array]';
const isBoolean = bool => bool === true || bool === false;
const merge = (...objects) => objects.reduce((pv, cv) => ({ ...pv,
  ...cv
}), {});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Rita\Desktop\dev\chrome-weather\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Rita\Desktop\dev\chrome-weather\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! C:\Users\Rita\Desktop\dev\chrome-weather\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Rita\Desktop\dev\chrome-weather\src\index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map