webpackJsonp([2],{

/***/ 1606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Market; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withSize__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Layouts_Tiny__ = __webpack_require__(2118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Layouts_Full__ = __webpack_require__(2275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Layouts_Mid__ = __webpack_require__(2277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Layouts_Small__ = __webpack_require__(2278);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n    query getMarket($code: ID!) {\n      market(code: $code) {\n        code\n        name\n        commission\n        mainCurrency {\n          ...getMarketCurrency\n        }\n        secondaryCurrency {\n          ...getMarketCurrency\n        }\n      }\n      me {\n        _id\n        marketFees(marketCode: $code) {\n          maker\n          taker\n        }\n      }\n    }\n\n    fragment getMarketCurrency on Currency {\n      code\n      name\n      format\n      longFormat\n      units\n      symbol\n      round\n      wallet {\n        _id\n        balance\n        availableBalance\n      }\n    }\n  '],['\n    query getMarket($code: ID!) {\n      market(code: $code) {\n        code\n        name\n        commission\n        mainCurrency {\n          ...getMarketCurrency\n        }\n        secondaryCurrency {\n          ...getMarketCurrency\n        }\n      }\n      me {\n        _id\n        marketFees(marketCode: $code) {\n          maker\n          taker\n        }\n      }\n    }\n\n    fragment getMarketCurrency on Currency {\n      code\n      name\n      format\n      longFormat\n      units\n      symbol\n      round\n      wallet {\n        _id\n        balance\n        availableBalance\n      }\n    }\n  ']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Market=(_dec=__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject),{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Loading__["a" /* default */],null),options:{pollInterval:5000}}),__WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withSize___default()(_class=_dec(_class=(_class2=function(_React$Component){_inherits(Market,_React$Component);function Market(){_classCallCheck(this,Market);return _possibleConstructorReturn(this,(Market.__proto__||Object.getPrototypeOf(Market)).apply(this,arguments));}_createClass(Market,[{key:'selectPrice',value:function selectPrice(_ref){var price=_ref.price,sell=_ref.sell;this.refs.createOrder.selectPrice({price:price,sell:sell});}},{key:'getLayout',value:function getLayout(){var width=window.innerWidth;if(width>1300)return'full';if(width>1000)return'mid';if(width>750)return'small';return'tiny';}},{key:'renderLayout',value:function renderLayout(){var size={width:window.innerWidth,height:window.innerHeight-60};var layout=this.getLayout();if(layout==='full')return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Layouts_Full__["a" /* default */],Object.assign({},this.props,size));if(layout==='mid')return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Layouts_Mid__["a" /* default */],Object.assign({},this.props,size));if(layout==='small')return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Layouts_Small__["a" /* default */],Object.assign({},this.props,size));if(layout==='tiny')return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Layouts_Tiny__["a" /* default */],Object.assign({},this.props,size));}},{key:'render',value:function render(){localStorage.setItem('lastMarketCode',this.props.market.code);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},this.renderLayout());}}]);return Market;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'selectPrice',[__WEBPACK_IMPORTED_MODULE_5_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'selectPrice'),_class2.prototype)),_class2))||_class)||_class);Market.propTypes={market:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,me:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,wallet:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object};

/***/ }),

/***/ 1705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* harmony default export */ __webpack_exports__["a"] = (function(ComposedComponent){var _class,_temp;return _temp=_class=function(_React$Component){_inherits(WithConfirmationDialog,_React$Component);function WithConfirmationDialog(){_classCallCheck(this,WithConfirmationDialog);return _possibleConstructorReturn(this,(WithConfirmationDialog.__proto__||Object.getPrototypeOf(WithConfirmationDialog)).apply(this,arguments));}_createClass(WithConfirmationDialog,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent,Object.assign({},this.props,{confirm:this.context.confirm}));}}]);return WithConfirmationDialog;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),_class.contextTypes={confirm:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired},_temp;});

/***/ }),

/***/ 1706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__ = __webpack_require__(1851);



if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellPosition', {
  value: {
    columnIndex: __webpack_require__(2).number.isRequired,
    rowIndex: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRendererParams', {
  value: {
    columnIndex: __webpack_require__(2).number.isRequired,
    isScrolling: __webpack_require__(2).bool.isRequired,
    isVisible: __webpack_require__(2).bool.isRequired,
    key: __webpack_require__(2).string.isRequired,
    parent: __webpack_require__(2).object.isRequired,
    rowIndex: __webpack_require__(2).number.isRequired,
    style: __webpack_require__(2).object.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRenderer', {
  value: __webpack_require__(2).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRangeRendererParams', {
  value: {
    cellCache: __webpack_require__(2).object.isRequired,
    cellRenderer: __webpack_require__(2).func.isRequired,
    columnSizeAndPositionManager: typeof __WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */] === 'function' ? __webpack_require__(2).instanceOf(__WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */]).isRequired : __webpack_require__(2).any.isRequired,
    columnStartIndex: __webpack_require__(2).number.isRequired,
    columnStopIndex: __webpack_require__(2).number.isRequired,
    deferredMeasurementCache: __webpack_require__(2).object,
    horizontalOffsetAdjustment: __webpack_require__(2).number.isRequired,
    isScrolling: __webpack_require__(2).bool.isRequired,
    parent: __webpack_require__(2).object.isRequired,
    rowSizeAndPositionManager: typeof __WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */] === 'function' ? __webpack_require__(2).instanceOf(__WEBPACK_IMPORTED_MODULE_1__utils_ScalingCellSizeAndPositionManager__["a" /* default */]).isRequired : __webpack_require__(2).any.isRequired,
    rowStartIndex: __webpack_require__(2).number.isRequired,
    rowStopIndex: __webpack_require__(2).number.isRequired,
    scrollLeft: __webpack_require__(2).number.isRequired,
    scrollTop: __webpack_require__(2).number.isRequired,
    styleCache: __webpack_require__(2).object.isRequired,
    verticalOffsetAdjustment: __webpack_require__(2).number.isRequired,
    visibleColumnIndices: __webpack_require__(2).object.isRequired,
    visibleRowIndices: __webpack_require__(2).object.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellRangeRenderer', {
  value: __webpack_require__(2).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellSizeGetter', {
  value: __webpack_require__(2).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellSize', {
  value: __webpack_require__(2).oneOfType([__webpack_require__(2).func, __webpack_require__(2).number]),
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_NoContentRenderer', {
  value: __webpack_require__(2).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Scroll', {
  value: {
    clientHeight: __webpack_require__(2).number.isRequired,
    clientWidth: __webpack_require__(2).number.isRequired,
    scrollHeight: __webpack_require__(2).number.isRequired,
    scrollLeft: __webpack_require__(2).number.isRequired,
    scrollTop: __webpack_require__(2).number.isRequired,
    scrollWidth: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ScrollbarPresenceChange', {
  value: {
    horizontal: __webpack_require__(2).bool.isRequired,
    vertical: __webpack_require__(2).bool.isRequired,
    size: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RenderedSection', {
  value: {
    columnOverscanStartIndex: __webpack_require__(2).number.isRequired,
    columnOverscanStopIndex: __webpack_require__(2).number.isRequired,
    columnStartIndex: __webpack_require__(2).number.isRequired,
    columnStopIndex: __webpack_require__(2).number.isRequired,
    rowOverscanStartIndex: __webpack_require__(2).number.isRequired,
    rowOverscanStopIndex: __webpack_require__(2).number.isRequired,
    rowStartIndex: __webpack_require__(2).number.isRequired,
    rowStopIndex: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams', {
  value: {
    direction: __webpack_require__(2).oneOf(['horizontal', 'vertical']).isRequired,
    scrollDirection: __webpack_require__(2).oneOf([-1, 1]).isRequired,
    cellCount: __webpack_require__(2).number.isRequired,
    overscanCellsCount: __webpack_require__(2).number.isRequired,
    startIndex: __webpack_require__(2).number.isRequired,
    stopIndex: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_OverscanIndices', {
  value: {
    overscanStartIndex: __webpack_require__(2).number.isRequired,
    overscanStopIndex: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter', {
  value: __webpack_require__(2).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Alignment', {
  value: __webpack_require__(2).oneOf(['auto', 'end', 'start', 'center']),
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_VisibleCellRange', {
  value: {
    start: __webpack_require__(2).number,
    stop: __webpack_require__(2).number
  },
  configurable: true
});

/***/ }),

/***/ 1712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2219), __esModule: true };

/***/ }),

/***/ 1714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Grid__ = __webpack_require__(1899);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessibilityOverscanIndicesGetter__ = __webpack_require__(2226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "accessibilityOverscanIndicesGetter", function() { return __WEBPACK_IMPORTED_MODULE_1__accessibilityOverscanIndicesGetter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultCellRangeRenderer__ = __webpack_require__(1901);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCellRangeRenderer", function() { return __WEBPACK_IMPORTED_MODULE_2__defaultCellRangeRenderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultOverscanIndicesGetter__ = __webpack_require__(1900);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOverscanIndicesGetter", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultOverscanIndicesGetter__["c"]; });









/***/ }),

/***/ 1734:
/***/ (function(module, exports, __webpack_require__) {

var createRound = __webpack_require__(1742);

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

module.exports = round;


/***/ }),

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(585),
    toNumber = __webpack_require__(344),
    toString = __webpack_require__(343);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

module.exports = createRound;


/***/ }),

/***/ 1747:
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Index", {
  value: {
    index: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_PositionInfo", {
  value: {
    x: __webpack_require__(2).number.isRequired,
    y: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_ScrollPosition", {
  value: {
    scrollLeft: __webpack_require__(2).number.isRequired,
    scrollTop: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo", {
  value: {
    height: __webpack_require__(2).number.isRequired,
    width: __webpack_require__(2).number.isRequired,
    x: __webpack_require__(2).number.isRequired,
    y: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_SizeInfo", {
  value: {
    height: __webpack_require__(2).number.isRequired,
    width: __webpack_require__(2).number.isRequired
  },
  configurable: true
});

/***/ }),

/***/ 1765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationTimeout", function() { return cancelAnimationTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationTimeout", function() { return requestAnimationTimeout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationFrame__ = __webpack_require__(2223);


if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId', {
  value: {
    id: __webpack_require__(2).number.isRequired
  },
  configurable: true
});


var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__animationFrame__["a" /* caf */])(frame.id);
};

/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */
var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = Date.now();

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = Object(__WEBPACK_IMPORTED_MODULE_0__animationFrame__["b" /* raf */])(timeout);
    }
  };

  var frame = {
    id: Object(__WEBPACK_IMPORTED_MODULE_0__animationFrame__["b" /* raf */])(timeout)
  };

  return frame;
};

/***/ }),

/***/ 1766:
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_CellDataGetterParams", {
  value: {
    columnData: __webpack_require__(2).any,
    dataKey: __webpack_require__(2).string.isRequired,
    rowData: __webpack_require__(2).any.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_CellRendererParams", {
  value: {
    cellData: __webpack_require__(2).any,
    columnData: __webpack_require__(2).any,
    dataKey: __webpack_require__(2).string.isRequired,
    rowData: __webpack_require__(2).any.isRequired,
    rowIndex: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams", {
  value: {
    className: __webpack_require__(2).string.isRequired,
    columns: __webpack_require__(2).arrayOf(__webpack_require__(2).any).isRequired,
    style: __webpack_require__(2).any.isRequired
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_HeaderRendererParams", {
  value: {
    columnData: __webpack_require__(2).any,
    dataKey: __webpack_require__(2).string.isRequired,
    disableSort: __webpack_require__(2).bool,
    label: __webpack_require__(2).any,
    sortBy: __webpack_require__(2).string,
    sortDirection: __webpack_require__(2).string
  },
  configurable: true
});
if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_RowRendererParams", {
  value: {
    className: __webpack_require__(2).string.isRequired,
    columns: __webpack_require__(2).arrayOf(__webpack_require__(2).any).isRequired,
    index: __webpack_require__(2).number.isRequired,
    isScrolling: __webpack_require__(2).bool.isRequired,
    onRowClick: __webpack_require__(2).func,
    onRowDoubleClick: __webpack_require__(2).func,
    onRowMouseOver: __webpack_require__(2).func,
    onRowMouseOut: __webpack_require__(2).func,
    rowData: __webpack_require__(2).any.isRequired,
    style: __webpack_require__(2).any.isRequired
  },
  configurable: true
});

/***/ }),

/***/ 1787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Balance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_numeral__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_numeral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Balance=Object(__WEBPACK_IMPORTED_MODULE_5_react_router__["withRouter"])(_class=function(_React$Component){_inherits(Balance,_React$Component);function Balance(){_classCallCheck(this,Balance);return _possibleConstructorReturn(this,(Balance.__proto__||Object.getPrototypeOf(Balance)).apply(this,arguments));}_createClass(Balance,[{key:'renderFees',value:function renderFees(){if(!this.props.me)return;var _props$me$marketFees=this.props.me.marketFees,taker=_props$me$marketFees.taker,maker=_props$me$marketFees.maker;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.commissions},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.commission},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.code},'Comisi\xF3n taker'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.value},__WEBPACK_IMPORTED_MODULE_4_numeral___default()(taker).format('0.[000]%'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.commission},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.code},'Comisi\xF3n maker'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.value},__WEBPACK_IMPORTED_MODULE_4_numeral___default()(maker).format('0.[000]%'))));}},{key:'renderCreateAccount',value:function renderCreateAccount(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-title'},'Registrate en Orionx')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'box'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default.a,{onClick:function onClick(){return _this2.props.router.push('/register');},primary:true},'Crear una cuenta'))));}},{key:'render',value:function render(){if(!this.props.me)return this.renderCreateAccount();var market=this.props.market;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;var mainWallet=mainCurrency.wallet;var secondaryWallet=secondaryCurrency.wallet;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-title'},'Balance disponible')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'box'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.balance},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.code},mainCurrency.code),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.value},Object(__WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__["a" /* default */])(mainWallet.availableBalance,mainCurrency,{long:true}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.balance},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.code},secondaryCurrency.code),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.value},Object(__WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__["a" /* default */])(secondaryWallet.availableBalance,secondaryCurrency,{long:true}))),this.renderFees())));}}]);return Balance;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component))||_class;Balance.propTypes={router:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,me:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object};

/***/ }),

/***/ 1788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Limit__ = __webpack_require__(2128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Market__ = __webpack_require__(2133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Stop__ = __webpack_require__(2136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_fields_OrderTypeSegmentedControl__ = __webpack_require__(2148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fields_SellSegmentedControl__ = __webpack_require__(2151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_helpers_sleep__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_helpers_sleep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_helpers_sleep__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var CreateOrder=(_class=function(_React$Component){_inherits(CreateOrder,_React$Component);function CreateOrder(){_classCallCheck(this,CreateOrder);return _possibleConstructorReturn(this,(CreateOrder.__proto__||Object.getPrototypeOf(CreateOrder)).apply(this,arguments));}_createClass(CreateOrder,[{key:'getType',value:function getType(){return localStorage.getItem('exchange.createOrderType')||'limit';}},{key:'setType',value:function setType(type){localStorage.setItem('exchange.createOrderType',type);this.forceUpdate();}},{key:'getSell',value:function getSell(){return localStorage.getItem('exchange.createOrderSell')==='sell';}},{key:'setSell',value:function setSell(sell){localStorage.setItem('exchange.createOrderSell',sell?'sell':'buy');this.forceUpdate();}},{key:'selectPrice',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref){var price=_ref.price,sell=_ref.sell;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setType('limit');this.setSell(sell);_context.next=4;return __WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_helpers_sleep___default()(10);case 4:this.limit.setState({limitPrice:price});case 5:case'end':return _context.stop();}}},_callee,this);}));function selectPrice(_x){return _ref2.apply(this,arguments);}return selectPrice;}()},{key:'renderForm',value:function renderForm(){var _this2=this;var props=Object.assign({},this.props,{sell:this.getSell(),loggedIn:!!localStorage.getItem('Meteor.userId')});if(this.getType()==='market')return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Market__["a" /* default */],props);if(this.getType()==='stop')return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Stop__["a" /* default */],props);if(this.getType()==='limit'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Limit__["a" /* default */],Object.assign({setRef:function setRef(limit){return _this2.limit=limit;}},props));}}},{key:'render',value:function render(){var _this3=this;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'header'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'header-title'},'Crear orden')),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'box'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.content},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Form"],{state:{type:this.getType(),sell:this.getSell()},onChange:function onChange(_ref3){var type=_ref3.type,sell=_ref3.sell;_this3.setSell(sell);_this3.setType(type);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'type',type:__WEBPACK_IMPORTED_MODULE_7__components_fields_OrderTypeSegmentedControl__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br',null),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'sell',type:__WEBPACK_IMPORTED_MODULE_8__components_fields_SellSegmentedControl__["a" /* default */]})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br',null),this.renderForm())));}}]);return CreateOrder;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'selectPrice',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'selectPrice'),_class.prototype)),_class);CreateOrder.propTypes={};

/***/ }),

/***/ 1789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraderNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_numeral__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_numeral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_round__ = __webpack_require__(1734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_round___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_round__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var TraderNumber=(_class=function(_React$Component){_inherits(TraderNumber,_React$Component);function TraderNumber(props){_classCallCheck(this,TraderNumber);var _this=_possibleConstructorReturn(this,(TraderNumber.__proto__||Object.getPrototypeOf(TraderNumber)).call(this,props));_this.state={value:_this.getValueText(props.value),number:props.value};return _this;}_createClass(TraderNumber,[{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.state.number===this.props.value)return;this.resetState();}},{key:'resetState',value:function resetState(){var multiplier=Math.pow(10,-this.props.currency.units);this.setState({value:this.getValueText(this.props.value*multiplier),number:this.props.value});}},{key:'getValueText',value:function getValueText(text){var value=this.getValueNumber(text);if(value){var multiplier=Math.pow(10,this.props.currency.units);var calculatedAmount=value/multiplier;return __WEBPACK_IMPORTED_MODULE_4_numeral___default()(calculatedAmount).format(this.props.currency.format);}else{return'';}}},{key:'getValueNumber',value:function getValueNumber(text){var multiplier=Math.pow(10,this.props.currency.units);var value=__WEBPACK_IMPORTED_MODULE_4_numeral___default()(text).value()*multiplier;if(value){return __WEBPACK_IMPORTED_MODULE_5_lodash_round___default()(value);}else{return null;}}},{key:'onChange',value:function onChange(event){var text=event.target.value;var value=this.getValueText(text);var number=this.getValueNumber(text);this.setState({value:value,number:number});this.props.onChange(number);event.stopPropagation();}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.label},this.props.currency.code),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.input,placeholder:__WEBPACK_IMPORTED_MODULE_4_numeral___default()(0).format(this.props.currency.format),onChange:function onChange(event){return _this2.setState({value:event.target.value});},value:this.state.value,onBlur:this.onChange,onKeyPress:function onKeyPress(event){return event.key==='Enter'&&_this2.onChange(event);}}));}}]);return TraderNumber;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'onChange',[__WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'onChange'),_class.prototype)),_class);TraderNumber.propTypes={currency:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,onChange:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number};

/***/ }),

/***/ 1790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data__ = __webpack_require__(2156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RealTime__ = __webpack_require__(2170);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var OrderBook=(_class=function(_React$Component){_inherits(OrderBook,_React$Component);function OrderBook(){_classCallCheck(this,OrderBook);return _possibleConstructorReturn(this,(OrderBook.__proto__||Object.getPrototypeOf(OrderBook)).apply(this,arguments));}_createClass(OrderBook,[{key:'didMount',value:function didMount(element){if(!element)return;if(!this.refs.box)return;this.refs.box.scrollTop=element.clientHeight*0.5-this.refs.box.clientHeight*0.5;}},{key:'renderHeader',value:function renderHeader(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.header},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Monto'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Precio (',this.props.market.secondaryCurrency.code,')'));}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-title'},'Libro de \xF3rdenes'),this.renderHeader()),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'box',ref:'box'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RealTime__["a" /* default */],{marketCode:this.props.market.code}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Data__["a" /* default */],{width:this.props.width,height:this.props.height,didMount:this.didMount,onSelectPrice:this.props.onSelectPrice,market:this.props.market,marketCode:this.props.market.code})));}}]);return OrderBook;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'didMount',[__WEBPACK_IMPORTED_MODULE_4_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'didMount'),_class.prototype)),_class);OrderBook.propTypes={market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,onSelectPrice:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,width:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number};

/***/ }),

/***/ 1791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Amount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_numeral__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_numeral__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var regex=/0+$/g;var Amount=function(_React$Component){_inherits(Amount,_React$Component);function Amount(){_classCallCheck(this,Amount);return _possibleConstructorReturn(this,(Amount.__proto__||Object.getPrototypeOf(Amount)).apply(this,arguments));}_createClass(Amount,[{key:'getDelimiter',value:function getDelimiter(){return __WEBPACK_IMPORTED_MODULE_4_numeral___default.a.localeData().delimiters.decimal;}},{key:'getNormalPart',value:function getNormalPart(text){var delimiter=this.getDelimiter();var parts=text.split(delimiter);if(!parts[1])return parts[0];var nonCeros=parts[1].replace(regex,'');return parts[0]+delimiter+nonCeros;}},{key:'getOpacityPart',value:function getOpacityPart(text){var normalPart=this.getNormalPart(text);return text.replace(normalPart,'');}},{key:'renderCode',value:function renderCode(){if(!this.props.code)return;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,' ',this.props.currency.code);}},{key:'render',value:function render(){var text=Object(__WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__["a" /* default */])(this.props.value,this.props.currency,{long:this.props.long,code:false});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,this.getNormalPart(text)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{style:{opacity:0.2}},this.getOpacityPart(text)),this.renderCode());}}]);return Amount;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Amount.propTypes={value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,currency:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,code:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,long:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool};Amount.defaultProps={code:false,long:true};

/***/ }),

/***/ 1792:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(167);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),

/***/ 1793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data__ = __webpack_require__(2202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RealTime__ = __webpack_require__(2208);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var History=function(_React$Component){_inherits(History,_React$Component);function History(){_classCallCheck(this,History);return _possibleConstructorReturn(this,(History.__proto__||Object.getPrototypeOf(History)).apply(this,arguments));}_createClass(History,[{key:'renderHeader',value:function renderHeader(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.header},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Monto'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Precio (',this.props.market.secondaryCurrency.code,')'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Fecha'));}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RealTime__["a" /* default */],{marketCode:this.props.market.code}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-title'},'Historial de transacciones'),this.renderHeader()),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:''},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Data__["a" /* default */],{height:this.props.height,market:this.props.market,marketCode:this.props.market.code})));}}]);return History;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);History.propTypes={market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number};

/***/ }),

/***/ 1794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Open__ = __webpack_require__(2209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css__ = __webpack_require__(2270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fields_SegmentedControl__ = __webpack_require__(1847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Closed__ = __webpack_require__(2272);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MyOrders=function(_React$Component){_inherits(MyOrders,_React$Component);function MyOrders(){var _ref;var _temp,_this,_ret;_classCallCheck(this,MyOrders);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=MyOrders.__proto__||Object.getPrototypeOf(MyOrders)).call.apply(_ref,[this].concat(args))),_this),_this.state={type:'open'},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(MyOrders,[{key:'renderOrders',value:function renderOrders(){var _this2=this;var props={marketCode:this.props.market.code,market:this.props.market,width:this.props.width,height:this.props.height,page:1,renderHeader:function renderHeader(header){return _this2.setState({header:header});}};if(this.state.type==='open'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Open__["a" /* default */],props);}else if(this.state.type==='closed'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Closed__["a" /* default */],props);}}},{key:'render',value:function render(){var _this3=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_3__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:' header-flex'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-title'},'\xD3rdenes'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-options'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this3.setState(changes);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_simple_react_form__["Field"],{fieldName:'type',type:__WEBPACK_IMPORTED_MODULE_5__components_fields_SegmentedControl__["a" /* default */],options:[{label:'Abiertas',value:'open'},{label:'Cerradas',value:'closed'}]})))),this.state.header),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'box'},this.renderOrders()));}}]);return MyOrders;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);MyOrders.propTypes={market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,width:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number};

/***/ }),

/***/ 1795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};

/* harmony default export */ __webpack_exports__["a"] = (SortDirection);

/***/ }),

/***/ 1796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdAlarm = function MdAlarm(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 33.4c6.5 0 11.6-5.3 11.6-11.8s-5.1-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.1 11.8 11.6 11.8z m0-26.8c8.3 0 15 6.8 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z m0.9 6.8v8.7l6.6 3.9-1.2 2-7.9-4.6v-10h2.5z m-7.8-7.8l-7.6 6.4-2.1-2.5 7.6-6.4z m23.5 3.9l-2.1 2.6-7.6-6.5 2.1-2.5z' })
        )
    );
};

exports.default = MdAlarm;
module.exports = exports['default'];

/***/ }),

/***/ 1846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketEstimate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_formatCurrency__ = __webpack_require__(159);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _templateObject=_taggedTemplateLiteral(['\n    query getEstimate($marketCode: ID!, $amount: Float!, $sell: Boolean!) {\n      estimate: marketEstimateAmountToRecieve(marketCode: $marketCode, amount: $amount, sell: $sell)\n    }\n  '],['\n    query getEstimate($marketCode: ID!, $amount: Float!, $sell: Boolean!) {\n      estimate: marketEstimateAmountToRecieve(marketCode: $marketCode, amount: $amount, sell: $sell)\n    }\n  ']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var MarketEstimate=(_dec=__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject),{loading:null}),_dec(_class=function(_React$Component){_inherits(MarketEstimate,_React$Component);function MarketEstimate(){_classCallCheck(this,MarketEstimate);return _possibleConstructorReturn(this,(MarketEstimate.__proto__||Object.getPrototypeOf(MarketEstimate)).apply(this,arguments));}_createClass(MarketEstimate,[{key:'render',value:function render(){if(!this.props.estimate)return 0;var _props=this.props,market=_props.market,sell=_props.sell;var currency=sell?market.secondaryCurrency:market.mainCurrency;return Object(__WEBPACK_IMPORTED_MODULE_4__helpers_formatCurrency__["a" /* default */])(this.props.estimate,currency,{code:true});}}]);return MarketEstimate;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component))||_class);MarketEstimate.propTypes={estimate:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,market:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,sell:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};

/***/ }),

/***/ 1847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTypeSegmentedControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var OrderTypeSegmentedControl=function(_React$Component){_inherits(OrderTypeSegmentedControl,_React$Component);function OrderTypeSegmentedControl(){_classCallCheck(this,OrderTypeSegmentedControl);return _possibleConstructorReturn(this,(OrderTypeSegmentedControl.__proto__||Object.getPrototypeOf(OrderTypeSegmentedControl)).apply(this,arguments));}_createClass(OrderTypeSegmentedControl,[{key:'renderOptions',value:function renderOptions(){var _this2=this;return this.props.options.map(function(option,index){var select=function select(type){return function(event){return _this2.props.onChange(type);};};var className=function className(type){return _this2.props.value===type?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.active:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.item;};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:index,className:className(option.value),onClick:select(option.value)},option.label);});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},this.renderOptions());}}]);return OrderTypeSegmentedControl;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);OrderTypeSegmentedControl.propTypes={value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,onChange:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,options:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array};

/***/ }),

/***/ 1848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Charts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fields_SegmentedControl__ = __webpack_require__(1847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Depth__ = __webpack_require__(2173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Candle__ = __webpack_require__(2181);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Charts=function(_React$Component){_inherits(Charts,_React$Component);function Charts(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Charts);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Charts.__proto__||Object.getPrototypeOf(Charts)).call.apply(_ref,[this].concat(args))),_this),_this.state={type:'candle'},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Charts,[{key:'renderChart',value:function renderChart(){var height=this.props.height-41-4;var width=this.props.width-2;if(this.state.type==='depth'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Depth__["a" /* default */],{width:width,height:height,market:this.props.market,marketCode:this.props.market.code});}if(this.state.type==='candle'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Candle__["a" /* default */],{width:width,height:height,market:this.props.market,marketCode:this.props.market.code});}}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header header-flex'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-title'},'Gr\xE1ficos'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'header-options'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_simple_react_form__["Field"],{fieldName:'type',type:__WEBPACK_IMPORTED_MODULE_3__components_fields_SegmentedControl__["a" /* default */],options:[{label:'Vela',value:'candle'},{label:'Profundidad',value:'depth'}]})))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'box',ref:'container'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},this.renderChart())));}}]);return Charts;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Charts.propTypes={market:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,width:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number};

/***/ }),

/***/ 1849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdClear = function MdClear(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z' })
        )
    );
};

exports.default = MdClear;
module.exports = exports['default'];

/***/ }),

/***/ 1850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* harmony default export */ __webpack_exports__["a"] = (function(ComposedComponent){var _class,_temp;return _temp=_class=function(_React$Component){_inherits(WithSheet,_React$Component);function WithSheet(){_classCallCheck(this,WithSheet);return _possibleConstructorReturn(this,(WithSheet.__proto__||Object.getPrototypeOf(WithSheet)).apply(this,arguments));}_createClass(WithSheet,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent,Object.assign({},this.props,{showSheet:this.context.showSheet}));}}]);return WithSheet;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),_class.contextTypes={showSheet:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired},_temp;});

/***/ }),

/***/ 1851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_MAX_SCROLL_SIZE */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__ = __webpack_require__(2222);




var babelPluginFlowReactPropTypes_proptype_VisibleCellRange = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_VisibleCellRange || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellSizeGetter = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellSizeGetter || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(2).any;



/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */
var DEFAULT_MAX_SCROLL_SIZE = 1500000;

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize,
        params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['maxScrollSize']);

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_3__CellSizeAndPositionManager__["a" /* default */](params);
    this._maxScrollSize = maxScrollSize;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (ScalingCellSizeAndPositionManager);

/***/ }),

/***/ 1852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCallbackMemoizer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ 1853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RowRendererParams', {
  value: {
    index: __webpack_require__(2).number.isRequired,
    isScrolling: __webpack_require__(2).bool.isRequired,
    isVisible: __webpack_require__(2).bool.isRequired,
    key: __webpack_require__(2).string.isRequired,
    parent: __webpack_require__(2).object.isRequired,
    style: __webpack_require__(2).object.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RowRenderer', {
  value: __webpack_require__(2).func,
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RenderedRows', {
  value: {
    overscanStartIndex: __webpack_require__(2).number.isRequired,
    overscanStopIndex: __webpack_require__(2).number.isRequired,
    startIndex: __webpack_require__(2).number.isRequired,
    stopIndex: __webpack_require__(2).number.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Scroll', {
  value: {
    clientHeight: __webpack_require__(2).number.isRequired,
    scrollHeight: __webpack_require__(2).number.isRequired,
    scrollTop: __webpack_require__(2).number.isRequired
  },
  configurable: true
});

/***/ }),

/***/ 1854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLLING_RESET_TIME_INTERVAL", function() { return DEFAULT_SCROLLING_RESET_TIME_INTERVAL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PositionCache__ = __webpack_require__(2249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__ = __webpack_require__(1765);











var babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId = __webpack_require__(1765).babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId || __webpack_require__(2).any;

var emptyObject = {};

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Masonry, _PureComponent);

  function Masonry(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Masonry);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Masonry.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Masonry)).call(this, props, context));

    _this._invalidateOnUpdateStartIndex = null;
    _this._invalidateOnUpdateStopIndex = null;
    _this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
    _this._startIndex = null;
    _this._startIndexMemoized = null;
    _this._stopIndex = null;
    _this._stopIndexMemoized = null;


    _this.state = {
      isScrolling: false,
      scrollTop: 0
    };

    _this._debounceResetIsScrollingCallback = _this._debounceResetIsScrollingCallback.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Masonry, [{
    key: 'clearCellPositions',
    value: function clearCellPositions() {
      this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
      this.forceUpdate();
    }

    // HACK This method signature was intended for Grid

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: 'recomputeCellPositions',
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;

      this._positionCache = new __WEBPACK_IMPORTED_MODULE_8__PositionCache__["a" /* default */]();
      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollTop = this.props.scrollTop;


      if (scrollTop !== nextProps.scrollTop) {
        this._debounceResetIsScrolling();

        this.setState({
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoHeight = _props.autoHeight,
          cellCount = _props.cellCount,
          cellMeasurerCache = _props.cellMeasurerCache,
          cellRenderer = _props.cellRenderer,
          className = _props.className,
          height = _props.height,
          id = _props.id,
          keyMapper = _props.keyMapper,
          overscanByPixels = _props.overscanByPixels,
          role = _props.role,
          style = _props.style,
          tabIndex = _props.tabIndex,
          width = _props.width;
      var _state = this.state,
          isScrolling = _state.isScrolling,
          scrollTop = _state.scrollTop;


      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;

      var startIndex = 0;
      var stopIndex = void 0;

      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
        if (typeof stopIndex === 'undefined') {
          startIndex = index;
          stopIndex = index;
        } else {
          startIndex = Math.min(startIndex, index);
          stopIndex = Math.max(stopIndex, index);
        }

        children.push(cellRenderer({
          index: index,
          isScrolling: isScrolling,
          key: keyMapper(index),
          parent: _this2,
          style: {
            height: cellMeasurerCache.getHeight(index),
            left: left,
            position: 'absolute',
            top: top,
            width: cellMeasurerCache.getWidth(index)
          }
        }));
      });

      // We need to measure additional cells for this layout
      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;

          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }

      this._startIndex = startIndex;
      this._stopIndex = stopIndex;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ReactVirtualized__Masonry', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            boxSizing: 'border-box',
            direction: 'ltr',
            height: autoHeight ? 'auto' : height,
            overflowX: 'hidden',
            overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
            position: 'relative',
            width: width,
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform'
          }, style),
          tabIndex: tabIndex },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Masonry__innerScrollContainer',
            style: {
              width: '100%',
              height: estimateTotalHeight,
              maxWidth: '100%',
              maxHeight: estimateTotalHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            } },
          children
        )
      );
    }
  }, {
    key: '_checkInvalidateOnUpdate',
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var _startIndex = this._invalidateOnUpdateStartIndex;
        var _stopIndex = this._invalidateOnUpdateStopIndex;

        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null;

        // Query external layout logic for position of newly-measured cells
        this._populatePositionCache(_startIndex, _stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: '_debounceResetIsScrolling',
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._debounceResetIsScrollingId) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = Object(__WEBPACK_IMPORTED_MODULE_9__utils_requestAnimationTimeout__["requestAnimationTimeout"])(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_debounceResetIsScrollingCallback',
    value: function _debounceResetIsScrollingCallback() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_getEstimatedTotalHeight',
    value: function _getEstimatedTotalHeight() {
      var _props2 = this.props,
          cellCount = _props2.cellCount,
          cellMeasurerCache = _props2.cellMeasurerCache,
          width = _props2.width;


      var estimatedColumnCount = Math.floor(width / cellMeasurerCache.defaultWidth);

      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: '_invokeOnScrollCallback',
    value: function _invokeOnScrollCallback() {
      var _props3 = this.props,
          height = _props3.height,
          onScroll = _props3.onScroll;
      var scrollTop = this.state.scrollTop;


      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });

        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: '_invokeOnCellsRenderedCallback',
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var _onCellsRendered = this.props.onCellsRendered;


        _onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });

        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: '_populatePositionCache',
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _props4 = this.props,
          cellMeasurerCache = _props4.cellMeasurerCache,
          cellPositioner = _props4.cellPositioner;


      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            _left = _cellPositioner.left,
            _top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, _left, _top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      var height = this.props.height;


      var eventScrollTop = event.target.scrollTop;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
      var scrollTop = Math.min(Math.max(0, this._getEstimatedTotalHeight() - height), eventScrollTop);

      // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.
      if (eventScrollTop !== scrollTop) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceResetIsScrolling();

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollTop !== scrollTop) {
        this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    }
  }]);

  return Masonry;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

Masonry.defaultProps = {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Masonry);


function identity(value) {
  return value;
}

function noop() {}

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CellMeasurerCache', {
  value: {
    defaultHeight: __webpack_require__(2).number.isRequired,
    defaultWidth: __webpack_require__(2).number.isRequired,
    getHeight: __webpack_require__(2).func.isRequired,
    getWidth: __webpack_require__(2).func.isRequired
  },
  configurable: true
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Positioner', {
  value: __webpack_require__(2).func,
  configurable: true
});

/***/ }),

/***/ 1855:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2276);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1888:
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(2167);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ 1889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject=_taggedTemplateLiteral(['\n  query getOrderBook($marketCode: ID!) {\n    orderBook: marketOrderBook(marketCode: $marketCode, limit: 50) {\n      buy {\n        limitPrice\n        amount\n      }\n      sell {\n        limitPrice\n        amount\n      }\n    }\n  }\n'],['\n  query getOrderBook($marketCode: ID!) {\n    orderBook: marketOrderBook(marketCode: $marketCode, limit: 50) {\n      buy {\n        limitPrice\n        amount\n      }\n      sell {\n        limitPrice\n        amount\n      }\n    }\n  }\n']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ 1890:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),

/***/ 1891:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),

/***/ 1892:
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(2190),
    baseMatchesProperty = __webpack_require__(2193),
    identity = __webpack_require__(348),
    isArray = __webpack_require__(37),
    property = __webpack_require__(2194);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 1893:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 1894:
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 1895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject=_taggedTemplateLiteral(['\n  query getHistory($marketCode: ID!) {\n    history: marketTradeHistory(marketCode: $marketCode) {\n      _id\n      amount\n      price\n      date\n    }\n  }\n'],['\n  query getHistory($marketCode: ID!) {\n    history: marketTradeHistory(marketCode: $marketCode) {\n      _id\n      amount\n      price\n      date\n    }\n  }\n']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ 1896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_receipt__ = __webpack_require__(2217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_receipt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_receipt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_withSheet__ = __webpack_require__(1850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__ = __webpack_require__(159);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_desc,_value,_class2;function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var Details=Object(__WEBPACK_IMPORTED_MODULE_5__helpers_withSheet__["a" /* default */])(_class=(_class2=function(_React$Component){_inherits(Details,_React$Component);function Details(){_classCallCheck(this,Details);return _possibleConstructorReturn(this,(Details.__proto__||Object.getPrototypeOf(Details)).apply(this,arguments));}_createClass(Details,[{key:'getStopDetails',value:function getStopDetails(){var order=this.props.order;var market=order.market;var secondaryCurrency=market.secondaryCurrency;if(!order.isStop)return[];var up=order.stopPriceUp?Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.stopPriceUp,secondaryCurrency,{code:true}):'No tiene';var down=order.stopPriceDown?Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.stopPriceDown,secondaryCurrency,{code:true}):'No tiene';return[{label:'Precio de activación superior',value:up},{label:'Precio de activación inferior',value:down}];}},{key:'getStatus',value:function getStatus(){var order=this.props.order;if(order.status==='open')return'Abierta';if(order.status==='closed')return'Cerrada';if(order.status==='stop')return'Esperando activación';return order.status;}},{key:'getAmount',value:function getAmount(){var order=this.props.order;var market=order.market;var secondaryCurrency=market.secondaryCurrency,mainCurrency=market.mainCurrency;var opts={code:true};return order.secondaryAmount?Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.secondaryAmount,secondaryCurrency,opts):Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.amount||0,mainCurrency,opts);}},{key:'getPrice',value:function getPrice(){var order=this.props.order;var market=order.market;var secondaryCurrency=market.secondaryCurrency;if(order.type==='market'){return'Mercado';}return Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.limitPrice,secondaryCurrency,{code:true});}},{key:'getType',value:function getType(){var order=this.props.order;var text=order.sell?'Venta':'Compra';if(!order.isStop)return text;return text+' (stop)';}},{key:'getFilled',value:function getFilled(){var order=this.props.order;var market=order.market;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;var opts={code:true};return order.secondaryAmount?Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.secondaryFilled||0,secondaryCurrency,opts):Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(order.filled||0,mainCurrency,opts);}},{key:'getAmountToHold',value:function getAmountToHold(){var order=this.props.order;var market=order.market,amountToHold=order.amountToHold;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;var opts={code:true};var currency=order.sell?mainCurrency:secondaryCurrency;return Object(__WEBPACK_IMPORTED_MODULE_9__helpers_formatCurrency__["a" /* default */])(amountToHold||0,currency,opts);}},{key:'open',value:function(){var _ref=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var order,market;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:order=this.props.order;market=order.market;_context.next=4;return this.props.showSheet({title:'Detalles',values:[{label:'Mercado',value:market.name},{label:'Tipo',value:this.getType()},{label:'Estado',value:this.getStatus()}].concat(_toConsumableArray(this.getStopDetails()),[{label:'Precio límite',value:this.getPrice()},{label:'Cantidad',value:this.getAmount()},{label:'Completado',value:this.getFilled()},{label:'Monto retenido',value:this.getAmountToHold()},{label:'Fecha de creación',value:__WEBPACK_IMPORTED_MODULE_8_moment___default()(order.createdAt).format('LL HH:mm:ss.SSS')},{label:'Fecha de cierre',value:order.closedAt?__WEBPACK_IMPORTED_MODULE_8_moment___default()(order.closedAt).format('LL HH:mm:ss.SSS'):'Pendiente'}])});case 4:case'end':return _context.stop();}}},_callee,this);}));function open(){return _ref.apply(this,arguments);}return open;}()},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container,onClick:this.open},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip___default.a,{content:'Ver detalles'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_receipt___default.a,{size:12,style:{color:'#fff'}})));}}]);return Details;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'open',[__WEBPACK_IMPORTED_MODULE_6_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'open'),_class2.prototype)),_class2))||_class;Details.propTypes={showSheet:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,order:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object};

/***/ }),

/***/ 1897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__(2218);
/* unused harmony reexport ArrowKeyStepper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AutoSizer__ = __webpack_require__(2228);
/* unused harmony reexport AutoSizer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__(1904);
/* unused harmony reexport CellMeasurer */
/* unused harmony reexport CellMeasurerCache */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collection__ = __webpack_require__(2232);
/* unused harmony reexport Collection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ColumnSizer__ = __webpack_require__(2239);
/* unused harmony reexport ColumnSizer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Grid__ = __webpack_require__(1714);
/* unused harmony reexport accessibilityOverscanIndicesGetter */
/* unused harmony reexport defaultCellRangeRenderer */
/* unused harmony reexport defaultOverscanIndicesGetter */
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__InfiniteLoader__ = __webpack_require__(2241);
/* unused harmony reexport InfiniteLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__List__ = __webpack_require__(2243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Masonry__ = __webpack_require__(2247);
/* unused harmony reexport createMasonryCellPositioner */
/* unused harmony reexport Masonry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MultiGrid__ = __webpack_require__(2259);
/* unused harmony reexport MultiGrid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ScrollSync__ = __webpack_require__(2262);
/* unused harmony reexport ScrollSync */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Table__ = __webpack_require__(2264);
/* unused harmony reexport defaultTableCellDataGetter */
/* unused harmony reexport defaultTableCellRenderer */
/* unused harmony reexport defaultTableHeaderRenderer */
/* unused harmony reexport defaultTableHeaderRowRenderer */
/* unused harmony reexport defaultTableRowRenderer */
/* unused harmony reexport Table */
/* unused harmony reexport Column */
/* unused harmony reexport SortDirection */
/* unused harmony reexport SortIndicator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__WindowScroller__ = __webpack_require__(2266);
/* unused harmony reexport WindowScroller */














/***/ }),

/***/ 1898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);






var babelPluginFlowReactPropTypes_proptype_RenderedSection = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_RenderedSection || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_ScrollIndices = __webpack_require__(2227).babelPluginFlowReactPropTypes_proptype_ScrollIndices || __webpack_require__(2).any;



/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ArrowKeyStepper);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ArrowKeyStepper.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ArrowKeyStepper)).call(this, props));

    _this._columnStartIndex = 0;
    _this._columnStopIndex = 0;
    _this._rowStartIndex = 0;
    _this._rowStopIndex = 0;

    _this._onKeyDown = function (event) {
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          disabled = _this$props.disabled,
          mode = _this$props.mode,
          rowCount = _this$props.rowCount;


      if (disabled) {
        return;
      }

      var _this$_getScrollState = _this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState.scrollToRow;

      var _this$_getScrollState2 = _this._getScrollState(),
          scrollToColumn = _this$_getScrollState2.scrollToColumn,
          scrollToRow = _this$_getScrollState2.scrollToRow;

      // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;
        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;
        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;
        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this._updateScrollState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    };

    _this._onSectionRendered = function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
          columnStopIndex = _ref.columnStopIndex,
          rowStartIndex = _ref.rowStartIndex,
          rowStopIndex = _ref.rowStopIndex;

      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    };

    _this.state = {
      scrollToColumn: props.scrollToColumn,
      scrollToRow: props.scrollToRow
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ArrowKeyStepper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isControlled) {
        return;
      }

      var scrollToColumn = nextProps.scrollToColumn,
          scrollToRow = nextProps.scrollToRow;
      var _props = this.props,
          prevScrollToColumn = _props.scrollToColumn,
          prevScrollToRow = _props.scrollToRow;


      if (prevScrollToColumn !== scrollToColumn && prevScrollToRow !== scrollToRow) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      } else if (prevScrollToColumn !== scrollToColumn) {
        this.setState({ scrollToColumn: scrollToColumn });
      } else if (prevScrollToRow !== scrollToRow) {
        this.setState({ scrollToRow: scrollToRow });
      }
    }
  }, {
    key: 'setScrollIndexes',
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
          scrollToRow = _ref2.scrollToRow;

      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children;

      var _getScrollState2 = this._getScrollState(),
          scrollToColumn = _getScrollState2.scrollToColumn,
          scrollToRow = _getScrollState2.scrollToRow;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: className, onKeyDown: this._onKeyDown },
        children({
          onSectionRendered: this._onSectionRendered,
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        })
      );
    }
  }, {
    key: '_getScrollState',
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: '_updateScrollState',
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _props3 = this.props,
          isControlled = _props3.isControlled,
          onScrollToChange = _props3.onScrollToChange;


      if (typeof onScrollToChange === 'function') {
        onScrollToChange({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }

      if (!isControlled) {
        this.setState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }
  }]);

  return ArrowKeyStepper;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

ArrowKeyStepper.defaultProps = {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
};
ArrowKeyStepper.propTypes = {
  children: __webpack_require__(2).func.isRequired,
  className: __webpack_require__(2).string,
  columnCount: __webpack_require__(2).number.isRequired,
  disabled: __webpack_require__(2).bool.isRequired,
  isControlled: __webpack_require__(2).bool.isRequired,
  mode: __webpack_require__(2).oneOf(['cells', 'edges']).isRequired,
  onScrollToChange: __webpack_require__(2).func,
  rowCount: __webpack_require__(2).number.isRequired,
  scrollToColumn: __webpack_require__(2).number.isRequired,
  scrollToRow: __webpack_require__(2).number.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (ArrowKeyStepper);

/***/ }),

/***/ 1899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_SCROLLING_RESET_TIME_INTERVAL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty__ = __webpack_require__(2221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__ = __webpack_require__(2224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__ = __webpack_require__(1851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__ = __webpack_require__(1852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__ = __webpack_require__(1900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__ = __webpack_require__(2225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__defaultCellRangeRenderer__ = __webpack_require__(1901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize__ = __webpack_require__(1902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__ = __webpack_require__(1765);








var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_RenderedSection = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_RenderedSection || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_ScrollbarPresenceChange = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_ScrollbarPresenceChange || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Scroll = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_Scroll || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_NoContentRenderer = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_NoContentRenderer || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellSizeGetter = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellSizeGetter || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellSize = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellSize || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellPosition = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellPosition || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellRangeRenderer = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellRangeRenderer || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellRenderer = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellRenderer || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId = __webpack_require__(1765).babelPluginFlowReactPropTypes_proptype_AnimationTimeoutId || __webpack_require__(2).any;












/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Grid);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Grid.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Grid)).call(this, props));

    _this.state = {
      isScrolling: false,
      scrollDirectionHorizontal: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */],
      scrollDirectionVertical: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */],
      scrollLeft: 0,
      scrollTop: 0
    };
    _this._onGridRenderedMemoizer = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createCallbackMemoizer__["a" /* default */])(false);
    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;
    _this._horizontalScrollBarSize = 0;
    _this._verticalScrollBarSize = 0;
    _this._scrollbarPresenceChanged = false;
    _this._cellCache = {};
    _this._styleCache = {};
    _this._scrollbarSizeMeasured = false;
    _this._renderedColumnStartIndex = 0;
    _this._renderedColumnStopIndex = 0;
    _this._renderedRowStartIndex = 0;
    _this._renderedRowStopIndex = 0;

    _this._debounceScrollEndedCallback = function () {
      _this._disablePointerEventsTimeoutId = null;
      _this._resetStyleCache();
    };

    _this._invokeOnGridRenderedHelper = function () {
      var onSectionRendered = _this.props.onSectionRendered;


      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    };

    _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    };

    _this._onScroll = function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    };

    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);

    var deferredMeasurementCache = props.deferredMeasurementCache;

    _this._columnSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      batchAllCells: deferredMeasurementCache !== undefined && !deferredMeasurementCache.hasFixedHeight(),
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._columnWidthGetter(params);
      },
      estimatedCellSize: _this._getEstimatedColumnSize(props)
    });
    _this._rowSizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_10__utils_ScalingCellSizeAndPositionManager__["a" /* default */]({
      batchAllCells: deferredMeasurementCache !== undefined && !deferredMeasurementCache.hasFixedWidth(),
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._rowHeightGetter(params);
      },
      estimatedCellSize: _this._getEstimatedRowSize(props)
    });
    return _this;
  }

  /**
   * Gets offsets for a given cell and alignment.
   */


  // See defaultCellRangeRenderer() for more information on the usage of these caches


  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Grid, [{
    key: 'getOffsetForCell',
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === undefined ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: 'handleScrollEvent',
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      var _props = this.props,
          autoHeight = _props.autoHeight,
          autoWidth = _props.autoWidth,
          height = _props.height,
          width = _props.width;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = this._scrollbarSize;
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var _scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_BACKWARD */] : this.state.scrollDirectionHorizontal;
        var _scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_BACKWARD */] : this.state.scrollDirectionVertical;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: _scrollDirectionHorizontal,
          scrollDirectionVertical: _scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props2 = this.props,
          columnCount = _props2.columnCount,
          rowCount = _props2.rowCount;


      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === undefined ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === undefined ? 0 : _ref4$rowIndex;

      var _props3 = this.props,
          scrollToColumn = _props3.scrollToColumn,
          scrollToRow = _props3.scrollToRow;


      this._columnSizeAndPositionManager.resetCell(columnIndex);
      this._rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && columnIndex <= scrollToColumn;
      this._recomputeScrollTopFlag = scrollToRow >= 0 && rowIndex <= scrollToRow;

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._cellCache = {};
      this._styleCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;


      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props4 = this.props,
          getScrollbarSize = _props4.getScrollbarSize,
          height = _props4.height,
          scrollLeft = _props4.scrollLeft,
          scrollToColumn = _props4.scrollToColumn,
          scrollTop = _props4.scrollTop,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = getScrollbarSize();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        this.scrollToPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.
      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props5 = this.props,
          autoHeight = _props5.autoHeight,
          autoWidth = _props5.autoWidth,
          columnCount = _props5.columnCount,
          height = _props5.height,
          rowCount = _props5.rowCount,
          scrollToAlignment = _props5.scrollToAlignment,
          scrollToColumn = _props5.scrollToColumn,
          scrollToRow = _props5.scrollToRow,
          width = _props5.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0;

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__["a" /* default */])({
          cellSizeAndPositionManager: this._columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_13__utils_updateScrollIndexHelper__["a" /* default */])({
          cellSizeAndPositionManager: this._rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var getScrollbarSize = this.props.getScrollbarSize;

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()

      this._scrollbarSize = getScrollbarSize();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }

      this._calculateChildrenToRender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        Object(__WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;


      if (nextProps.columnCount === 0 && scrollLeft !== 0 || nextProps.rowCount === 0 && scrollTop !== 0) {
        this.scrollToPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null) {
          newState.scrollLeft = nextProps.scrollLeft;
        }
        if (nextProps.scrollTop != null) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this.scrollToPosition(newState);
      }

      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
        this._styleCache = {};
      }

      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);

      this._columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
      });
      this._rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: this._getEstimatedRowSize(nextProps)
      });

      var _props6 = this.props,
          columnCount = _props6.columnCount,
          rowCount = _props6.rowCount;

      // Special case when either cols or rows were 0
      // This would prevent any cells from rendering
      // So we need to reset row scroll if cols changed from 0 (and vice versa)

      if (columnCount === 0 || rowCount === 0) {
        columnCount = 0;
        rowCount = 0;
      }

      // If scrolling is controlled outside this component, clear cache when scrolling stops
      if (nextProps.autoHeight && nextProps.isScrolling === false && this.props.isScrolling === true) {
        this._resetStyleCache();
      }

      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
      Object(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: columnCount,
        cellSize: typeof this.props.columnWidth === 'number' ? this.props.columnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: this.props.scrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollLeftForScrollToColumn(nextProps, _this3.state);
        }
      });
      Object(__WEBPACK_IMPORTED_MODULE_9__utils_calculateSizeAndPositionDataAndUpdateScrollOffset__["a" /* default */])({
        cellCount: rowCount,
        cellSize: typeof this.props.rowHeight === 'number' ? this.props.rowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: this.props.scrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollTopForScrollToRow(nextProps, _this3.state);
        }
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this._calculateChildrenToRender(nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          autoContainerWidth = _props7.autoContainerWidth,
          autoHeight = _props7.autoHeight,
          autoWidth = _props7.autoWidth,
          className = _props7.className,
          containerProps = _props7.containerProps,
          containerRole = _props7.containerRole,
          containerStyle = _props7.containerStyle,
          height = _props7.height,
          id = _props7.id,
          noContentRenderer = _props7.noContentRenderer,
          role = _props7.role,
          style = _props7.style,
          tabIndex = _props7.tabIndex,
          width = _props7.width;


      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
          ref: this._setScrollingContainerRef
        }, containerProps, {
          'aria-label': this.props['aria-label'],
          'aria-readonly': this.props['aria-readonly'],
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, gridStyle, style),
          tabIndex: tabIndex }),
        childrenToDisplay.length > 0 && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            role: containerRole,
            style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            }, containerStyle) },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          scrollLeft = state.scrollLeft,
          scrollTop = state.scrollTop;


      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof this._renderedColumnStartIndex === 'number' ? this._renderedColumnStartIndex : 0,
          stopIndex: typeof this._renderedColumnStopIndex === 'number' ? this._renderedColumnStopIndex : -1
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof this._renderedRowStartIndex === 'number' ? this._renderedRowStartIndex : 0,
          stopIndex: typeof this._renderedRowStopIndex === 'number' ? this._renderedRowStopIndex : -1
          // stopIndex: this._renderedRowStopIndex
        });

        // Store for _invokeOnGridRenderedHelper()
        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
        this._rowStopIndex = overscanRowIndices.overscanStopIndex;

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
          columnStartIndex: this._columnStartIndex,
          columnStopIndex: this._columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          parent: this,
          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
          rowStartIndex: this._rowStartIndex,
          rowStopIndex: this._rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        Object(__WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = Object(__WEBPACK_IMPORTED_MODULE_16__utils_requestAnimationTimeout__["requestAnimationTimeout"])(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */

  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this4 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _props8 = _this4.props,
              height = _props8.height,
              onScroll = _props8.onScroll,
              width = _props8.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_isScrolling',
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: '_maybeCallOnScrollbarPresenceChange',
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var _onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;


        this._scrollbarPresenceChanged = false;

        _onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this._scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: 'scrollToPosition',


    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["b" /* SCROLL_DIRECTION_FORWARD */] : __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["a" /* SCROLL_DIRECTION_BACKWARD */];
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var columnCount = props.columnCount,
          height = props.height,
          scrollToAlignment = props.scrollToAlignment,
          scrollToColumn = props.scrollToColumn,
          width = props.width;
      var scrollLeft = state.scrollLeft;


      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;

        return this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var scrollLeft = state.scrollLeft;

      var calculatedScrollLeft = this._getCalculatedScrollLeft(props, state);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        this.scrollToPosition({
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var height = props.height,
          rowCount = props.rowCount,
          scrollToAlignment = props.scrollToAlignment,
          scrollToRow = props.scrollToRow,
          width = props.width;
      var scrollTop = state.scrollTop;


      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

        return this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
    }
  }, {
    key: '_resetStyleCache',
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];
        }
      }

      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var scrollTop = state.scrollTop;

      var calculatedScrollTop = this._getCalculatedScrollTop(props, state);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        this.scrollToPosition({
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
    }
  }]);

  return Grid;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.PureComponent);

Grid.defaultProps = {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: __WEBPACK_IMPORTED_MODULE_14__defaultCellRangeRenderer__["a" /* default */],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: __WEBPACK_IMPORTED_MODULE_15_dom_helpers_util_scrollbarSize___default.a,
  noContentRenderer: renderNull,
  onScroll: function onScroll(_ref9) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref9);
  },
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered(_ref10) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectDestructuringEmpty___default()(_ref10);
  },
  overscanColumnCount: 0,
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_12__defaultOverscanIndicesGetter__["c" /* default */],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0
};
Grid.propTypes = {
  "aria-label": __webpack_require__(2).string.isRequired,
  "aria-readonly": __webpack_require__(2).bool,
  autoContainerWidth: __webpack_require__(2).bool.isRequired,
  autoHeight: __webpack_require__(2).bool.isRequired,
  autoWidth: __webpack_require__(2).bool.isRequired,
  cellRenderer: typeof babelPluginFlowReactPropTypes_proptype_CellRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_CellRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_CellRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_CellRenderer : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_CellRenderer).isRequired,
  cellRangeRenderer: typeof babelPluginFlowReactPropTypes_proptype_CellRangeRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_CellRangeRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_CellRangeRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_CellRangeRenderer : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_CellRangeRenderer).isRequired,
  className: __webpack_require__(2).string,
  columnCount: __webpack_require__(2).number.isRequired,
  columnWidth: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,
  containerProps: __webpack_require__(2).object,
  containerRole: __webpack_require__(2).string.isRequired,
  containerStyle: __webpack_require__(2).object.isRequired,
  deferredMeasurementCache: __webpack_require__(2).object,
  estimatedColumnSize: __webpack_require__(2).number.isRequired,
  estimatedRowSize: __webpack_require__(2).number.isRequired,
  getScrollbarSize: __webpack_require__(2).func.isRequired,
  height: __webpack_require__(2).number.isRequired,
  id: __webpack_require__(2).string,
  isScrolling: __webpack_require__(2).bool,
  noContentRenderer: typeof babelPluginFlowReactPropTypes_proptype_NoContentRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_NoContentRenderer : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_NoContentRenderer).isRequired,
  onScroll: __webpack_require__(2).func.isRequired,
  onScrollbarPresenceChange: __webpack_require__(2).func.isRequired,
  onSectionRendered: __webpack_require__(2).func.isRequired,
  overscanColumnCount: __webpack_require__(2).number.isRequired,
  overscanIndicesGetter: typeof babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter === 'function' ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired : babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter).isRequired,
  overscanRowCount: __webpack_require__(2).number.isRequired,
  role: __webpack_require__(2).string.isRequired,
  rowHeight: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,
  rowCount: __webpack_require__(2).number.isRequired,
  scrollingResetTimeInterval: __webpack_require__(2).number.isRequired,
  scrollLeft: __webpack_require__(2).number,
  scrollToAlignment: typeof babelPluginFlowReactPropTypes_proptype_Alignment === 'function' ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired : babelPluginFlowReactPropTypes_proptype_Alignment : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_Alignment).isRequired,
  scrollToColumn: __webpack_require__(2).number.isRequired,
  scrollTop: __webpack_require__(2).number,
  scrollToRow: __webpack_require__(2).number.isRequired,
  style: __webpack_require__(2).object.isRequired,
  tabIndex: __webpack_require__(2).number,
  width: __webpack_require__(2).number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ 1900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCROLL_DIRECTION_BACKWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SCROLL_DIRECTION_FORWARD; });
/* unused harmony export SCROLL_DIRECTION_HORIZONTAL */
/* unused harmony export SCROLL_DIRECTION_VERTICAL */
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultOverscanIndicesGetter;
var babelPluginFlowReactPropTypes_proptype_OverscanIndices = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_OverscanIndices || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams || __webpack_require__(2).any;

var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}

/***/ }),

/***/ 1901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRangeRenderer;


/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */

var babelPluginFlowReactPropTypes_proptype_CellRangeRendererParams = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellRangeRendererParams || __webpack_require__(2).any;

function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;

        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}

/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(366);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ 1903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vendor_detectElementResize__ = __webpack_require__(2230);






var babelPluginFlowReactPropTypes_proptype_Size = __webpack_require__(2229).babelPluginFlowReactPropTypes_proptype_Size || __webpack_require__(2).any;




var AutoSizer = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = AutoSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var height = _this._parentNode.offsetHeight || 0;
        var width = _this._parentNode.offsetWidth || 0;

        var style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });

          onResize({ height: height, width: width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode instanceof HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = Object(__WEBPACK_IMPORTED_MODULE_6__vendor_detectElementResize__["a" /* default */])(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }

      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { ref: this._setRef, style: outerStyle },
        children(childParams)
      );
    }
  }]);

  return AutoSizer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false
};
AutoSizer.propTypes = {
  children: __webpack_require__(2).func.isRequired,
  defaultHeight: __webpack_require__(2).number,
  defaultWidth: __webpack_require__(2).number,
  disableHeight: __webpack_require__(2).bool.isRequired,
  disableWidth: __webpack_require__(2).bool.isRequired,
  nonce: __webpack_require__(2).string,
  onResize: __webpack_require__(2).func.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (AutoSizer);

/***/ }),

/***/ 1904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellMeasurer__ = __webpack_require__(2231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CellMeasurerCache__ = __webpack_require__(1905);
/* unused harmony reexport CellMeasurer */
/* unused harmony reexport CellMeasurerCache */



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__CellMeasurer__["a" /* default */]);


/***/ }),

/***/ 1905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_HEIGHT */
/* unused harmony export DEFAULT_WIDTH */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100;

// Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache = function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurerCache);

    this._cellHeightCache = {};
    this._cellWidthCache = {};
    this._columnWidthCache = {};
    this._rowHeightCache = {};
    this._columnCount = 0;
    this._rowCount = 0;

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache.hasOwnProperty(key) ? _this._columnWidthCache[key] : _this._defaultWidth;
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache.hasOwnProperty(key) ? _this._rowHeightCache[key] : _this._defaultHeight;
    };

    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;


    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;

    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (false) {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn("CellMeasurerCache should only measure a cell's width or height. " + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellMeasurerCache, [{
    key: 'clear',
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache.hasOwnProperty(_key) ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache.hasOwnProperty(_key2) ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache.hasOwnProperty(key);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }
      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      }

      // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: '_updateCachedColumnAndRowSizes',
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;
        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }
        var columnKey = this._keyMapper(0, columnIndex);
        this._columnWidthCache[columnKey] = columnWidth;
      }
      if (!this._hasFixedHeight) {
        var rowHeight = 0;
        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }
        var rowKey = this._keyMapper(rowIndex, 0);
        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._defaultWidth;
    }
  }]);

  return CellMeasurerCache;
}();

/* harmony default export */ __webpack_exports__["a"] = (CellMeasurerCache);


function defaultKeyMapper(rowIndex, columnIndex) {
  return rowIndex + '-' + columnIndex;
}

/***/ }),

/***/ 1906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(2244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Grid__ = __webpack_require__(1714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);








var babelPluginFlowReactPropTypes_proptype_Scroll = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_Scroll || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellRendererParams = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_CellRendererParams || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_RenderedSection = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_RenderedSection || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellPosition = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_CellPosition || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellSize = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_CellSize || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_NoContentRenderer = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_NoContentRenderer || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Scroll = __webpack_require__(1853).babelPluginFlowReactPropTypes_proptype_Scroll || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_RenderedRows = __webpack_require__(1853).babelPluginFlowReactPropTypes_proptype_RenderedRows || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_RowRenderer = __webpack_require__(1853).babelPluginFlowReactPropTypes_proptype_RowRenderer || __webpack_require__(2).any;





/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = List.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: _this
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = __WEBPACK_IMPORTED_MODULE_9_classnames___default()('ReactVirtualized__List', className);

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_7__Grid__["accessibilityOverscanIndicesGetter"],
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes = {
  "aria-label": __webpack_require__(2).string,
  autoHeight: __webpack_require__(2).bool.isRequired,
  className: __webpack_require__(2).string,
  estimatedRowSize: __webpack_require__(2).number.isRequired,
  height: __webpack_require__(2).number.isRequired,
  noRowsRenderer: typeof babelPluginFlowReactPropTypes_proptype_NoContentRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_NoContentRenderer : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_NoContentRenderer).isRequired,
  onRowsRendered: __webpack_require__(2).func.isRequired,
  onScroll: __webpack_require__(2).func.isRequired,
  overscanIndicesGetter: typeof babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter === 'function' ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired : babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter).isRequired,
  overscanRowCount: __webpack_require__(2).number.isRequired,
  rowHeight: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,
  rowRenderer: typeof babelPluginFlowReactPropTypes_proptype_RowRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_RowRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_RowRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_RowRenderer : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_RowRenderer).isRequired,
  rowCount: __webpack_require__(2).number.isRequired,
  scrollToAlignment: typeof babelPluginFlowReactPropTypes_proptype_Alignment === 'function' ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired : babelPluginFlowReactPropTypes_proptype_Alignment : __webpack_require__(2).shape(babelPluginFlowReactPropTypes_proptype_Alignment).isRequired,
  scrollToIndex: __webpack_require__(2).number.isRequired,
  scrollTop: __webpack_require__(2).number,
  style: __webpack_require__(2).object.isRequired,
  tabIndex: __webpack_require__(2).number,
  width: __webpack_require__(2).number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ 1907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellDataGetter;


/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
var babelPluginFlowReactPropTypes_proptype_CellDataGetterParams = __webpack_require__(1766).babelPluginFlowReactPropTypes_proptype_CellDataGetterParams || __webpack_require__(2).any;

function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

/***/ }),

/***/ 1908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultCellRenderer;


/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
var babelPluginFlowReactPropTypes_proptype_CellRendererParams = __webpack_require__(1766).babelPluginFlowReactPropTypes_proptype_CellRendererParams || __webpack_require__(2).any;

function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

/***/ }),

/***/ 1909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRowRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams = __webpack_require__(1766).babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams || __webpack_require__(2).any;

function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: className, role: 'row', style: style },
    columns
  );
}
defaultHeaderRowRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams === __webpack_require__(2).any ? {} : babelPluginFlowReactPropTypes_proptype_HeaderRowRendererParams;

/***/ }),

/***/ 1910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultHeaderRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortIndicator__ = __webpack_require__(1911);



/**
 * Default table header renderer.
 */
var babelPluginFlowReactPropTypes_proptype_HeaderRendererParams = __webpack_require__(1766).babelPluginFlowReactPropTypes_proptype_HeaderRendererParams || __webpack_require__(2).any;

function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;

  var showSortIndicator = sortBy === dataKey;
  var children = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    {
      className: 'ReactVirtualized__Table__headerTruncatedText',
      key: 'label',
      title: label },
    label
  )];

  if (showSortIndicator) {
    children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SortIndicator__["a" /* default */], { key: 'SortIndicator', sortDirection: sortDirection }));
  }

  return children;
}
defaultHeaderRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_HeaderRendererParams === __webpack_require__(2).any ? {} : babelPluginFlowReactPropTypes_proptype_HeaderRendererParams;

/***/ }),

/***/ 1911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SortIndicator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SortDirection__ = __webpack_require__(1795);





/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;

  var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].DESC
  });

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'svg',
    { className: classNames, width: 18, height: 18, viewBox: '0 0 24 24' },
    sortDirection === __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* default */].ASC ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M7 14l5-5 5 5z' }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M7 10l5 5 5-5z' }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
}

SortIndicator.propTypes =  false ? {
  sortDirection: PropTypes.oneOf([SortDirection.ASC, SortDirection.DESC])
} : {};

/***/ }),

/***/ 1912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultRowRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



/**
 * Default row renderer for Table.
 */
var babelPluginFlowReactPropTypes_proptype_RowRendererParams = __webpack_require__(1766).babelPluginFlowReactPropTypes_proptype_RowRendererParams || __webpack_require__(2).any;

function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;

  var a11yProps = {};

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
      className: className,
      key: key,
      role: 'row',
      style: style }),
    columns
  );
}
defaultRowRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_RowRendererParams === __webpack_require__(2).any ? {} : babelPluginFlowReactPropTypes_proptype_RowRendererParams;

/***/ }),

/***/ 1913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaultHeaderRenderer__ = __webpack_require__(1910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defaultCellRenderer__ = __webpack_require__(1908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__defaultCellDataGetter__ = __webpack_require__(1907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SortDirection__ = __webpack_require__(1795);











/**
 * Describes the header and cell contents of a table column.
 */

var Column = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Column, _Component);

  function Column() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Column);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Column.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Column)).apply(this, arguments));
  }

  return Column;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Column.defaultProps = {
  cellDataGetter: __WEBPACK_IMPORTED_MODULE_8__defaultCellDataGetter__["a" /* default */],
  cellRenderer: __WEBPACK_IMPORTED_MODULE_7__defaultCellRenderer__["a" /* default */],
  defaultSortDirection: __WEBPACK_IMPORTED_MODULE_9__SortDirection__["a" /* default */].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: __WEBPACK_IMPORTED_MODULE_6__defaultHeaderRenderer__["a" /* default */],
  style: {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (Column);
Column.propTypes =  false ? {
  /** Optional aria-label value to set on the column header */
  'aria-label': PropTypes.string,

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: PropTypes.func,

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: PropTypes.func,

  /** Optional CSS class to apply to cell */
  className: PropTypes.string,

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: PropTypes.object,

  /** Uniquely identifies the row-data attribute corresponding to this cell */
  dataKey: PropTypes.any.isRequired,

  /** Optional direction to be used when clicked the first time */
  defaultSortDirection: PropTypes.oneOf([SortDirection.ASC, SortDirection.DESC]),

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: PropTypes.bool,

  /** Flex grow style; defaults to 0 */
  flexGrow: PropTypes.number,

  /** Flex shrink style; defaults to 1 */
  flexShrink: PropTypes.number,

  /** Optional CSS class to apply to this column's header */
  headerClassName: PropTypes.string,

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: PropTypes.func.isRequired,

  /** Optional inline style to apply to this column's header */
  headerStyle: PropTypes.object,

  /** Optional id to set on the column header */
  id: PropTypes.string,

  /** Header label for this column */
  label: PropTypes.node,

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: PropTypes.number,

  /** Minimum width of column. */
  minWidth: PropTypes.number,

  /** Optional inline style to apply to cell */
  style: PropTypes.object,

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: PropTypes.number.isRequired
} : {};

/***/ }),

/***/ 2116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2117);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._1WsY0hINr9aBU51KYpHecU{display:-ms-flexbox;display:flex;height:100%}._1WsY0hINr9aBU51KYpHecU .header{border-top:2px solid #202228;background:#262930;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}._1WsY0hINr9aBU51KYpHecU .header>div{border-bottom:2px solid #202228}._1WsY0hINr9aBU51KYpHecU .header-flex{display:-ms-flexbox;display:flex}._1WsY0hINr9aBU51KYpHecU .header-title{font-size:16px;padding:10px;-ms-flex:1 1;flex:1 1}._1WsY0hINr9aBU51KYpHecU .header-options{padding:0 10px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/styles.css"],"names":[],"mappings":"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,WAAa,CACd,AAYD,iCACE,6BAAsC,AACtC,mBAAoB,AACpB,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AAED,qCACE,+BAAyC,CAC1C,AAED,sCACE,oBAAqB,AACrB,YAAc,CACf,AAED,uCACE,eAAgB,AAChB,aAAc,AACd,aAAc,AACV,QAAU,CACf,AAED,yCACE,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CACzB","file":"styles.css","sourcesContent":[":local(.container) {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n}\n/*\n:local(.container) .box {\n  flex: 1;\n  border: 1px solid rgb(32, 34, 40);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n\n*/\n\n:local(.container) .header {\n  border-top: 2px solid rgb(32, 34, 40);\n  background: #262930;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n:local(.container) .header > div {\n  border-bottom: 2px solid rgb(32, 34, 40);\n}\n\n:local(.container) .header-flex {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.container) .header-title {\n  font-size: 16px;\n  padding: 10px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n:local(.container) .header-options {\n  padding: 0 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_1WsY0hINr9aBU51KYpHecU"
};

/***/ }),

/***/ 2118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tiny; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fields_Tabs__ = __webpack_require__(2121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Balance__ = __webpack_require__(1787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CreateOrder__ = __webpack_require__(1788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__OrderBook__ = __webpack_require__(1790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Charts__ = __webpack_require__(1848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__History__ = __webpack_require__(1793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MyOrders__ = __webpack_require__(1794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_helpers_sleep__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_helpers_sleep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_helpers_sleep__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var Tiny=(_class=function(_React$Component){_inherits(Tiny,_React$Component);function Tiny(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Tiny);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Tiny.__proto__||Object.getPrototypeOf(Tiny)).call.apply(_ref,[this].concat(args))),_this),_this.state={section:'charts'},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Tiny,[{key:'getSections',value:function getSections(){return[{label:'Crear',value:'createOrder'},{label:'Libro',value:'orderBook'},{label:'Gráficos',value:'charts'},{label:'Órdenes',value:'myOrders'},{label:'Historial',value:'history'}];}},{key:'selectPrice',value:function(){var _ref3=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref2){var price=_ref2.price,sell=_ref2.sell;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setState({section:'createOrder'});_context.next=3;return __WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_helpers_sleep___default()(100);case 3:this.refs.createOrder.selectPrice({price:price,sell:sell});case 4:case'end':return _context.stop();}}},_callee,this);}));function selectPrice(_x){return _ref3.apply(this,arguments);}return selectPrice;}()},{key:'renderActive',value:function renderActive(){if(this.state.section==='createOrder'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Balance__["a" /* default */],{me:this.props.me,market:this.props.market,wallet:this.props.wallet}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__CreateOrder__["a" /* default */],{ref:'createOrder',market:this.props.market,wallet:this.props.wallet}));}if(this.state.section==='orderBook'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__OrderBook__["a" /* default */],{market:this.props.market,onSelectPrice:this.selectPrice,height:this.props.height-35-1,width:this.props.width});}if(this.state.section==='charts'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Charts__["a" /* default */],{market:this.props.market,height:this.props.height-35-1,width:this.props.width});}if(this.state.section==='myOrders'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__MyOrders__["a" /* default */],{market:this.props.market,height:this.props.height-35-1,width:this.props.width});}if(this.state.section==='history'){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__History__["a" /* default */],{market:this.props.market,height:this.props.height-35-1});}}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container,style:{height:this.props.height}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.active},this.renderActive()),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.tabs},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_simple_react_form__["Field"],{fieldName:'section',type:__WEBPACK_IMPORTED_MODULE_5__components_fields_Tabs__["a" /* default */],options:this.getSections()}))));}}]);return Tiny;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'selectPrice',[__WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'selectPrice'),_class.prototype)),_class);Tiny.propTypes={market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,me:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,wallet:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ }),

/***/ 2119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2120);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._1v10tNblbtdD9wAoDOvzcS,.Fkwy1TsVDaRX7wJpjn-6N{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.Fkwy1TsVDaRX7wJpjn-6N{overflow:auto;-webkit-overflow-scrolling:touch}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/Layouts/Tiny/styles.css"],"names":[],"mappings":"AASA,gDARE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAY5B,AATD,uBAGE,cAAe,AACf,gCAAkC,CAKnC","file":"styles.css","sourcesContent":[":local(.container) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n:local(.active) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n:local(.tabs) {\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_1v10tNblbtdD9wAoDOvzcS",
	"active": "Fkwy1TsVDaRX7wJpjn-6N",
	"tabs": "_3vCMsNo_1oZ3VJHGOMteZm"
};

/***/ }),

/***/ 2121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Tabs=function(_React$Component){_inherits(Tabs,_React$Component);function Tabs(){_classCallCheck(this,Tabs);return _possibleConstructorReturn(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).apply(this,arguments));}_createClass(Tabs,[{key:'renderSections',value:function renderSections(){var _this2=this;return this.props.options.map(function(section){var selected=section.value===_this2.props.value;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:function onClick(){return _this2.props.onChange(section.value);},className:selected?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.selected:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.section,key:section.value},section.label);});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},this.renderSections());}}]);return Tabs;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Tabs.propTypes={options:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,onChange:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func};

/***/ }),

/***/ 2122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2123);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._2HeN4Hl3Z2XeU7h2o41YOB{display:-ms-flexbox;display:flex;border-top:1px solid hsla(0,0%,100%,.1);font-size:13px;font-weight:700;text-align:center}._1v7RH6AsWhLTChbTYggYuD{padding:10px;-ms-flex:1 1;flex:1 1;border-left:1px solid hsla(0,0%,100%,.1);cursor:pointer}._1v7RH6AsWhLTChbTYggYuD:first-child{border-left:none}._31l5Kt4VzS_6EP9SISY1uU{background-color:#0069ff}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/components/fields/Tabs/styles.css"],"names":[],"mappings":"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,wCAA+C,AAC/C,eAAgB,AAChB,gBAAkB,AAClB,iBAAmB,CACpB,AAED,yBACE,aAAc,AACd,aAAc,AACV,SAAU,AACd,yCAAgD,AAChD,cAAgB,CACjB,AAED,qCACE,gBAAkB,CACnB,AAED,yBAEE,wBAA0B,CAC3B","file":"styles.css","sourcesContent":[":local(.container) {\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  font-size: 13px;\n  font-weight: bold;\n  text-align: center;\n}\n\n:local(.section) {\n  padding: 10px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n}\n\n:local(.section):first-child {\n  border-left: none;\n}\n\n:local(.selected) {\n  composes: section;\n  background-color: #0069ff;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_2HeN4Hl3Z2XeU7h2o41YOB",
	"section": "_1v7RH6AsWhLTChbTYggYuD",
	"selected": "_31l5Kt4VzS_6EP9SISY1uU _1v7RH6AsWhLTChbTYggYuD"
};

/***/ }),

/***/ 2124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2125);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3o_31xZfrJNBHCB8qeR9VR{padding:10px;font-size:14px}._2DCaJW2Rqz8s0jNsjDSeIX{display:-ms-flexbox;display:flex;font-weight:700;margin:5px 0}._1w-Iz7pZzji0di7OE4PDIF{-ms-flex:1 1;flex:1 1}._1QMn4q_AuERqo8SPP-dryr{margin-top:10px}._3JOuwz6OEtIQ936hgdbcBy{font-size:12px;color:hsla(0,0%,100%,.7)}._3o_31xZfrJNBHCB8qeR9VR .orion_button{margin:5px 0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:13px}._3o_31xZfrJNBHCB8qeR9VR .orion_primary,._3o_31xZfrJNBHCB8qeR9VR .orion_primary:active{background-color:#008c76}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/Balance/styles.css"],"names":[],"mappings":"AAAA,yBACE,aAAc,AACd,cAAgB,CACjB,AAED,yBACE,oBAAqB,AACrB,aAAc,AACd,gBAAkB,AAClB,YAAc,CACf,AAED,yBACE,aAAc,AACV,QAAU,CACf,AAKD,yBACE,eAAiB,CAClB,AAED,yBAEE,eAAgB,AAChB,wBAAgC,CACjC,AAED,uCACE,aAAc,AACd,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACjB,AAMD,uFACE,wBAA0B,CAC3B","file":"styles.css","sourcesContent":[":local(.container) {\n  padding: 10px;\n  font-size: 14px;\n}\n\n:local(.balance) {\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: bold;\n  margin: 5px 0;\n}\n\n:local(.code) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n:local(.value) {\n}\n\n:local(.commissions) {\n  margin-top: 10px;\n}\n\n:local(.commission) {\n  composes: balance;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n:local(.container) .orion_button {\n  margin: 5px 0;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 13px;\n}\n\n:local(.container) .orion_primary {\n  background-color: #008c76;\n}\n\n:local(.container) .orion_primary:active {\n  background-color: #008c76;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_3o_31xZfrJNBHCB8qeR9VR",
	"balance": "_2DCaJW2Rqz8s0jNsjDSeIX",
	"code": "_1w-Iz7pZzji0di7OE4PDIF",
	"value": "_2Ue9lz2xr9mygllnw4Jc_h",
	"commissions": "_1QMn4q_AuERqo8SPP-dryr",
	"commission": "_3JOuwz6OEtIQ936hgdbcBy _2DCaJW2Rqz8s0jNsjDSeIX"
};

/***/ }),

/***/ 2126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2127);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, ".So_a9VZcg76A40izHASih{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}._3vUnktzBbfTMU-MAhBY-dB{font-size:12px;padding:10px;-ms-flex:1 1;flex:1 1}._3vUnktzBbfTMU-MAhBY-dB .label{margin-bottom:2px}._3vUnktzBbfTMU-MAhBY-dB .total{margin-top:30px;text-align:center}._3vUnktzBbfTMU-MAhBY-dB .totalValue{margin:10px 0;font-size:20px}._3vUnktzBbfTMU-MAhBY-dB .totalCommission{font-size:11px;color:hsla(0,0%,100%,.5)}._3vUnktzBbfTMU-MAhBY-dB .orion_button{margin-top:20px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:13px}._3vUnktzBbfTMU-MAhBY-dB .orion_primary,._3vUnktzBbfTMU-MAhBY-dB .orion_primary:active{background-color:#008c76}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/CreateOrder/styles.css"],"names":[],"mappings":"AAAA,uBACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AAED,yBACE,eAAgB,AAChB,aAAc,AACd,aAAc,AACV,QAAU,CACf,AAED,gCACE,iBAAmB,CACpB,AAED,gCACE,gBAAiB,AACjB,iBAAmB,CACpB,AAKD,qCACE,cAAe,AACf,cAAgB,CACjB,AAED,0CACE,eAAgB,AAChB,wBAAgC,CACjC,AAED,uCACE,gBAAiB,AACjB,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACjB,AAMD,uFACE,wBAA0B,CAC3B","file":"styles.css","sourcesContent":[":local(.container) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n:local(.content) {\n  font-size: 12px;\n  padding: 10px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n:local(.content) .label {\n  margin-bottom: 2px;\n}\n\n:local(.content) .total {\n  margin-top: 30px;\n  text-align: center;\n}\n\n:local(.content) .totalLabel {\n}\n\n:local(.content) .totalValue {\n  margin: 10px 0;\n  font-size: 20px;\n}\n\n:local(.content) .totalCommission {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n:local(.content) .orion_button {\n  margin-top: 20px;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 13px;\n}\n\n:local(.content) .orion_primary {\n  background-color: #008c76;\n}\n\n:local(.content) .orion_primary:active {\n  background-color: #008c76;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "So_a9VZcg76A40izHASih",
	"content": "_3vUnktzBbfTMU-MAhBY-dB"
};

/***/ }),

/***/ 2128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__ = __webpack_require__(1789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo_decorators_lib_withMutation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo_decorators_lib_withMutation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo_decorators_lib_withMutation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_withConfirmationDialog__ = __webpack_require__(1705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_track__ = __webpack_require__(574);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n  mutation placeLimitOrder($marketCode: ID, $amount: BigInt, $limitPrice: BigInt, $sell: Boolean) {\n    placeLimitOrder(\n      marketCode: $marketCode\n      amount: $amount\n      limitPrice: $limitPrice\n      sell: $sell\n    ) {\n      _id\n    }\n  }\n'],['\n  mutation placeLimitOrder($marketCode: ID, $amount: BigInt, $limitPrice: BigInt, $sell: Boolean) {\n    placeLimitOrder(\n      marketCode: $marketCode\n      amount: $amount\n      limitPrice: $limitPrice\n      sell: $sell\n    ) {\n      _id\n    }\n  }\n']);function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var CreateOrder=(_dec=__WEBPACK_IMPORTED_MODULE_8_react_apollo_decorators_lib_withMutation___default()(__WEBPACK_IMPORTED_MODULE_9_graphql_tag___default()(_templateObject)),_dec(_class=Object(__WEBPACK_IMPORTED_MODULE_11__helpers_withConfirmationDialog__["a" /* default */])(_class=__WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage___default()(_class=(_class2=function(_React$Component){_inherits(CreateOrder,_React$Component);function CreateOrder(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CreateOrder);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CreateOrder.__proto__||Object.getPrototypeOf(CreateOrder)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CreateOrder,[{key:'componentDidMount',value:function componentDidMount(){this.props.setRef(this);}},{key:'place',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var market,amount,price;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setState({loading:true});_context.prev=1;market=this.props.market;amount=Object(__WEBPACK_IMPORTED_MODULE_5__helpers_formatCurrency__["a" /* default */])(this.state.amount,market.mainCurrency,{code:true});price=Object(__WEBPACK_IMPORTED_MODULE_5__helpers_formatCurrency__["a" /* default */])(this.state.limitPrice,market.secondaryCurrency,{code:true});_context.next=7;return this.props.confirm({disableTwoFactor:true,title:'Confirmar',description:'Confirma que quieres crear esta orden de '+(this.props.sell?'venta':'compra')+' de '+amount+'.',values:[{label:'Mercado',value:this.props.market.name},{label:'Tipo',value:this.props.sell?'Venta':'Compra'},{label:'Monto',value:amount},{label:'Precio por '+market.mainCurrency.code,value:price}]});case 7:_context.next=9;return this.props.placeLimitOrder({marketCode:this.props.market.code,amount:this.state.amount,limitPrice:this.state.limitPrice,sell:this.props.sell},{refetchQueries:['myOrders']});case 9:this.setState({amount:0,limitPrice:0});this.props.showMessage('Orden creada');Object(__WEBPACK_IMPORTED_MODULE_13__helpers_track__["a" /* default */])('trade',{marketCode:this.props.market.code,orderType:'limit',sellType:this.props.sell?'sell':'buy'});_context.next=17;break;case 14:_context.prev=14;_context.t0=_context['catch'](1);if(_context.t0.message!=='[dialog-cancel]'){console.log('Error:',_context.t0);this.props.showMessage(_context.t0.message,{level:'error'});}case 17:this.setState({loading:false});case 18:case'end':return _context.stop();}}},_callee,this,[[1,14]]);}));function place(){return _ref2.apply(this,arguments);}return place;}()},{key:'renderTotal',value:function renderTotal(){var market=this.props.market;var price=this.state.limitPrice||0;var amount=this.state.amount||0;var currency=market.secondaryCurrency;var otherCurrency=market.mainCurrency;var mainMultiplier=Math.pow(10,-market.mainCurrency.units);var total=price*amount*mainMultiplier;var verb=this.props.sell?'recibirás':'gastarás';var otherVerb=this.props.sell?'gastarás':'recibirás';var formattedAmount=Object(__WEBPACK_IMPORTED_MODULE_5__helpers_formatCurrency__["a" /* default */])(amount,otherCurrency);var andText='Y '+otherVerb+' '+formattedAmount+' '+otherCurrency.code;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'total'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalLabel'},'Si la orden es ejecutada ',verb,' ',this.props.sell?'mínimo':'máximo'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalValue'},Object(__WEBPACK_IMPORTED_MODULE_5__helpers_formatCurrency__["a" /* default */])(total,currency),' ',currency.code),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalCommission'},this.props.sell?'':andText));}},{key:'renderButton',value:function renderButton(){if(!this.props.loggedIn)return;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default.a,{loading:this.state.loading,onClick:this.place,primary:!this.props.sell,danger:this.props.sell},'Crear orden de ',this.props.sell?'venta':'compra');}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Monto a ',this.props.sell?'vender':'comprar'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'amount',currency:this.props.market.mainCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Precio l\xEDmite por ',this.props.market.mainCurrency.code),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'limitPrice',currency:this.props.market.secondaryCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),this.renderTotal(),this.renderButton()));}}]);return CreateOrder;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'place',[__WEBPACK_IMPORTED_MODULE_10_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'place'),_class2.prototype)),_class2))||_class)||_class)||_class);CreateOrder.propTypes={showMessage:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,market:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,sell:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,placeLimitOrder:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,setRef:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,loggedIn:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool};

/***/ }),

/***/ 2129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2130);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_11OWHY6OlGg4yr_cXkFLcv"
};

/***/ }),

/***/ 2131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2132);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._6YMilprpkxHHrawUR_xPB{position:relative;margin-bottom:10px}._2yCchmICjqvyjLZheVJG6J{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px;background-color:hsla(0,0%,100%,.1);border:0;outline:none;padding:5px 30px 5px 10px;color:#fff;border-radius:2px;font-size:12px}._2jz2ST_9usktuO0n_dO4U0{position:absolute;top:4px;right:10px;font-size:12px}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/components/fields/TraderNumber/styles.css"],"names":[],"mappings":"AAAA,wBACE,kBAAmB,AACnB,kBAAoB,CACrB,AAED,yBACE,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,eAAgB,AAChB,oCAA2C,AAC3C,SAAU,AACV,aAAc,AACd,0BAA2B,AAC3B,WAAe,AACf,kBAAmB,AACnB,cAAgB,CACjB,AAED,yBACE,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,cAAgB,CACjB","file":"styles.css","sourcesContent":[":local(.container) {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n:local(.input) {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 0;\n  outline: none;\n  padding: 5px 30px 5px 10px;\n  color: #ffffff;\n  border-radius: 2px;\n  font-size: 12px;\n}\n\n:local(.label) {\n  position: absolute;\n  top: 4px;\n  right: 10px;\n  font-size: 12px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_6YMilprpkxHHrawUR_xPB",
	"input": "_2yCchmICjqvyjLZheVJG6J",
	"label": "_2jz2ST_9usktuO0n_dO4U0"
};

/***/ }),

/***/ 2133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Market; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__ = __webpack_require__(1789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo_decorators_lib_withMutation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo_decorators_lib_withMutation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo_decorators_lib_withMutation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_MarketEstimate__ = __webpack_require__(1846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_withConfirmationDialog__ = __webpack_require__(1705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_decorators_withMessage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_decorators_withMessage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_decorators_withMessage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_track__ = __webpack_require__(574);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n  mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean) {\n    placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell) {\n      _id\n    }\n  }\n'],['\n  mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean) {\n    placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell) {\n      _id\n    }\n  }\n']);function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Market=(_dec=__WEBPACK_IMPORTED_MODULE_7_react_apollo_decorators_lib_withMutation___default()(__WEBPACK_IMPORTED_MODULE_8_graphql_tag___default()(_templateObject)),_dec(_class=Object(__WEBPACK_IMPORTED_MODULE_12__helpers_withConfirmationDialog__["a" /* default */])(_class=__WEBPACK_IMPORTED_MODULE_13_orionsoft_parts_lib_decorators_withMessage___default()(_class=(_class2=function(_React$Component){_inherits(Market,_React$Component);function Market(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Market);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Market.__proto__||Object.getPrototypeOf(Market)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Market,[{key:'place',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var amount,market,currency,amountFormatted,description;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setState({loading:true});_context.prev=1;amount=(this.props.sell?this.state.amountSell:this.state.amountBuy)||0;market=this.props.market;currency=this.props.sell?market.mainCurrency:market.secondaryCurrency;amountFormatted=Object(__WEBPACK_IMPORTED_MODULE_11__helpers_formatCurrency__["a" /* default */])(amount,currency,{code:true});description='Confirma que quieres '+(this.props.sell?'vender':'comprar '+market.mainCurrency.code+' con')+' '+amountFormatted+' a precio de mercado.';_context.next=9;return this.props.confirm({title:'Confirmar',description:description,disableTwoFactor:true,values:[{label:'Mercado',value:this.props.market.name},{label:'Tipo',value:this.props.sell?'Venta':'Compra'},{label:'Monto',value:amountFormatted},{label:'Precio por '+market.mainCurrency.code,value:'Mercado'}]});case 9:_context.next=11;return this.props.placeMarketOrder({marketCode:this.props.market.code,amount:amount,sell:this.props.sell},{refetchQueries:['myOrders']});case 11:this.setState({amountSell:0,amountBuy:0});this.props.showMessage('Orden creada');Object(__WEBPACK_IMPORTED_MODULE_14__helpers_track__["a" /* default */])('trade',{marketCode:this.props.market.code,orderType:'market',sellType:this.props.sell?'sell':'buy'});_context.next=19;break;case 16:_context.prev=16;_context.t0=_context['catch'](1);if(_context.t0.message!=='[dialog-cancel]'){console.log('Error:',_context.t0);this.props.showMessage(_context.t0.message,{level:'error'});}case 19:this.setState({loading:false});case 20:case'end':return _context.stop();}}},_callee,this,[[1,16]]);}));function place(){return _ref2.apply(this,arguments);}return place;}()},{key:'renderTotal',value:function renderTotal(){var amount=(this.props.sell?this.state.amountSell:this.state.amountBuy)||0;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'total'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalLabel'},'Si la orden es ejecutada recibir\xE1s aproximadamente'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalValue'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_MarketEstimate__["a" /* default */],{marketCode:this.props.market.code,market:this.props.market,amount:amount,sell:this.props.sell})));}},{key:'renderButton',value:function renderButton(){if(!this.props.loggedIn)return;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default.a,{loading:this.state.loading,onClick:this.place,primary:!this.props.sell,danger:this.props.sell},'Crear orden de ',this.props.sell?'venta':'compra');}},{key:'render',value:function render(){var _this2=this;var workingCurrency=this.props.sell?this.props.market.mainCurrency:this.props.market.secondaryCurrency;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Monto'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:this.props.sell?'amountSell':'amountBuy',currency:workingCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]})),this.renderTotal(),this.renderButton());}}]);return Market;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'place',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'place'),_class2.prototype)),_class2))||_class)||_class)||_class);Market.propTypes={showMessage:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,sell:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,market:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,placeMarketOrder:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,loggedIn:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool};

/***/ }),

/***/ 2134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2135);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_21LZhAae6jjStNd8_nEoUH"
};

/***/ }),

/***/ 2136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fields_MarketOrLimitCheckbox__ = __webpack_require__(2139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Limit__ = __webpack_require__(2142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Market__ = __webpack_require__(2145);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Stop=function(_React$Component){_inherits(Stop,_React$Component);function Stop(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Stop);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Stop.__proto__||Object.getPrototypeOf(Stop)).call.apply(_ref,[this].concat(args))),_this),_this.state={limit:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Stop,[{key:'renderForm',value:function renderForm(){if(this.state.limit){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Limit__["a" /* default */],this.props);}else{return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Market__["a" /* default */],this.props);}}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_simple_react_form__["Field"],{fieldName:'limit',type:__WEBPACK_IMPORTED_MODULE_3__components_fields_MarketOrLimitCheckbox__["a" /* default */],label:'Establecer un l\xEDmite de precio'})),this.renderForm());}}]);return Stop;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Stop.propTypes={market:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,sell:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool};

/***/ }),

/***/ 2137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2138);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_2sfT-Vj-y-J-R8GR8zA-Wh"
};

/***/ }),

/***/ 2139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketOrLimitCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_autobind_decorator__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var MarketOrLimitCheckbox=(_class=function(_React$Component){_inherits(MarketOrLimitCheckbox,_React$Component);function MarketOrLimitCheckbox(){_classCallCheck(this,MarketOrLimitCheckbox);return _possibleConstructorReturn(this,(MarketOrLimitCheckbox.__proto__||Object.getPrototypeOf(MarketOrLimitCheckbox)).apply(this,arguments));}_createClass(MarketOrLimitCheckbox,[{key:'onCheck',value:function onCheck(event){this.props.onChange(event.target.checked);}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.label},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.checkbox,type:'checkbox',checked:this.props.value,onClick:this.onCheck}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.label},this.props.label)));}}]);return MarketOrLimitCheckbox;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'onCheck',[__WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'onCheck'),_class.prototype)),_class);MarketOrLimitCheckbox.propTypes={value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,label:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,onChange:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func};

/***/ }),

/***/ 2140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2141);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, ".m_wKIfyiqK3_z7tQTIy-F{margin-bottom:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ghakHezZnxBsgqoRDq4Tj{margin:0;margin-right:5px}._37R_KUGPzGw_gKqPceNrFz{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/components/fields/MarketOrLimitCheckbox/styles.css"],"names":[],"mappings":"AAAA,uBACE,mBAAoB,AACpB,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAC3B,AAED,uBACE,SAAU,AACV,gBAAkB,CACnB,AAED,yBACE,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAC3B","file":"styles.css","sourcesContent":[":local(.container) {\n  margin-bottom: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n:local(.checkbox) {\n  margin: 0;\n  margin-right: 5px;\n}\n\n:local(.label) {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "m_wKIfyiqK3_z7tQTIy-F",
	"checkbox": "ghakHezZnxBsgqoRDq4Tj",
	"label": "_37R_KUGPzGw_gKqPceNrFz"
};

/***/ }),

/***/ 2142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopLimit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__ = __webpack_require__(1789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_orionsoft_parts_lib_components_Button__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_orionsoft_parts_lib_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_orionsoft_parts_lib_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withMessage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withMessage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withMessage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_withConfirmationDialog__ = __webpack_require__(1705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_track__ = __webpack_require__(574);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n  mutation placeStopLimitOrder(\n    $marketCode: ID\n    $stopPriceUp: BigInt\n    $stopPriceDown: BigInt\n    $amount: BigInt\n    $limitPrice: BigInt\n    $sell: Boolean\n  ) {\n    placeStopLimitOrder(\n      marketCode: $marketCode\n      stopPriceUp: $stopPriceUp\n      stopPriceDown: $stopPriceDown\n      amount: $amount\n      limitPrice: $limitPrice\n      sell: $sell\n    ) {\n      _id\n    }\n  }\n'],['\n  mutation placeStopLimitOrder(\n    $marketCode: ID\n    $stopPriceUp: BigInt\n    $stopPriceDown: BigInt\n    $amount: BigInt\n    $limitPrice: BigInt\n    $sell: Boolean\n  ) {\n    placeStopLimitOrder(\n      marketCode: $marketCode\n      stopPriceUp: $stopPriceUp\n      stopPriceDown: $stopPriceDown\n      amount: $amount\n      limitPrice: $limitPrice\n      sell: $sell\n    ) {\n      _id\n    }\n  }\n']);function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StopLimit=(_dec=__WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation___default()(__WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject)),__WEBPACK_IMPORTED_MODULE_7_orionsoft_parts_lib_decorators_withMessage___default()(_class=_dec(_class=Object(__WEBPACK_IMPORTED_MODULE_11__helpers_withConfirmationDialog__["a" /* default */])(_class=(_class2=function(_React$Component){_inherits(StopLimit,_React$Component);function StopLimit(){var _ref;var _temp,_this,_ret;_classCallCheck(this,StopLimit);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=StopLimit.__proto__||Object.getPrototypeOf(StopLimit)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(StopLimit,[{key:'placeOrder',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var market,amount,price,opts,formattedStopPriceUp,formattedStopPriceDown;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setState({loading:true});_context.prev=1;market=this.props.market;amount=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(this.state.amount,market.mainCurrency,{code:true});price=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(this.state.limitPrice,market.secondaryCurrency,{code:true});opts={code:true};formattedStopPriceUp=this.state.stopPriceUp?Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceUp||0,market.secondaryCurrency,opts):'No tiene';formattedStopPriceDown=this.state.stopPriceDown?Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceDown||0,market.secondaryCurrency,opts):'No tiene';_context.next=10;return this.props.confirm({title:'Confirmar',description:'Confirma que quieres crear esta orden de '+(this.props.sell?'venta':'compra')+' de '+amount+' con precio de activaci\xF3n.',disableTwoFactor:true,values:[{label:'Mercado',value:this.props.market.name},{label:'Tipo',value:this.props.sell?'Venta':'Compra'},{label:'Monto',value:amount},{label:'Precio por '+market.mainCurrency.code,value:price},{label:'Precio de activación superior',value:formattedStopPriceUp},{label:'Precio de activación inferior',value:formattedStopPriceDown}]});case 10:_context.next=12;return this.props.placeStopLimitOrder({marketCode:this.props.market.code,amount:this.state.amount,limitPrice:this.state.limitPrice,sell:this.props.sell,stopPriceUp:this.state.stopPriceUp,stopPriceDown:this.state.stopPriceDown},{refetchQueries:['myOrders']});case 12:this.setState({amount:0,limitPrice:0,stopPriceUp:0,stopPriceDown:0});this.props.showMessage('Orden creada');Object(__WEBPACK_IMPORTED_MODULE_13__helpers_track__["a" /* default */])('trade',{marketCode:this.props.market.code,orderType:'stopLimit',sellType:this.props.sell?'sell':'buy'});_context.next=20;break;case 17:_context.prev=17;_context.t0=_context['catch'](1);if(_context.t0.message!=='[dialog-cancel]'){console.log('Error:',_context.t0);this.props.showMessage(_context.t0.message,{level:'error'});}case 20:this.setState({loading:false});case 21:case'end':return _context.stop();}}},_callee,this,[[1,17]]);}));function placeOrder(){return _ref2.apply(this,arguments);}return placeOrder;}()},{key:'renderPriceActivation',value:function renderPriceActivation(){var secondaryCurrency=this.props.market.secondaryCurrency;var opts={code:true};var formattedStopPriceUp=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceUp||0,secondaryCurrency,opts);var formattedStopPriceDown=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceDown||0,secondaryCurrency,opts);var up='es mayor a igual a '+formattedStopPriceUp;var down='es menor o igual a '+formattedStopPriceDown;if(!this.state.stopPriceUp&&!this.state.stopPriceDown)return;var conditions=[];if(this.state.stopPriceUp)conditions.push(up);if(this.state.stopPriceDown)conditions.push(down);return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',null,'Si el precio de la \xFAltima transacci\xF3n ',conditions.join(' o '));}},{key:'renderTotalLabel',value:function renderTotalLabel(){var secondaryCurrency=this.props.market.secondaryCurrency;var mainCurrency=this.props.market.mainCurrency;var amount=this.state.amount;if(!amount)return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',null);var formattedAmount=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(amount,mainCurrency)+' '+mainCurrency.code;var price=this.state.limitPrice||0;var formattedPrice=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(price,secondaryCurrency)+' '+secondaryCurrency.code;var verb=this.props.sell?'recibirás':'gastarás';var action=this.props.sell?'venta':'compra';return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalLabel'},this.renderPriceActivation(),', se generar\xE1 una orden de ',action,' de ',formattedAmount,' a',' ',formattedPrice,' cada uno y si la orden es ejecutada ',verb,' un',' ',this.props.sell?'mínimo':'máximo',' de');}},{key:'renderTotal',value:function renderTotal(){var price=this.state.limitPrice||0;var amount=this.state.amount||0;if(!amount)return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',null);var currency=this.props.market.secondaryCurrency;var otherCurrency=this.props.market.mainCurrency;var mainMultiplier=Math.pow(10,-this.props.market.mainCurrency.units);var total=price*amount*mainMultiplier;var otherVerb=this.props.sell?'gastarás':'recibirás';var formattedAmount=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(amount,otherCurrency);var andText='Y '+otherVerb+' '+formattedAmount+' '+otherCurrency.code;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'total'},this.renderTotalLabel(),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalValue'},Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(total,currency,{code:true})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalCommission'},this.props.sell?'':andText));}},{key:'renderButton',value:function renderButton(){if(!this.props.loggedIn)return;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_orionsoft_parts_lib_components_Button___default.a,{loading:this.state.loading,onClick:this.placeOrder,primary:!this.props.sell,danger:this.props.sell},'Crear orden');}},{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Precio de activaci\xF3n superior'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'stopPriceUp',currency:this.props.market.secondaryCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Precio de activaci\xF3n inferior'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'stopPriceDown',currency:this.props.market.secondaryCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Monto a ',this.props.sell?'vender':'comprar'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'amount',currency:this.props.market.mainCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Precio l\xEDmite por ',this.props.market.mainCurrency.code,' (opcional)'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'limitPrice',currency:this.props.market.secondaryCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),this.renderTotal(),this.renderButton()));}}]);return StopLimit;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'placeOrder',[__WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'placeOrder'),_class2.prototype)),_class2))||_class)||_class)||_class);StopLimit.propTypes={showMessage:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,market:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,sell:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,placeStopLimitOrder:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,loggedIn:__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool};

/***/ }),

/***/ 2143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2144);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_297VtEQXocmfWm1QLu1fsH"
};

/***/ }),

/***/ 2145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopMarket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__ = __webpack_require__(1789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_withConfirmationDialog__ = __webpack_require__(1705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_track__ = __webpack_require__(574);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n  mutation placeStopMarketOrder(\n    $marketCode: ID\n    $stopPriceUp: BigInt\n    $stopPriceDown: BigInt\n    $amount: BigInt\n    $sell: Boolean\n  ) {\n    placeStopMarketOrder(\n      marketCode: $marketCode\n      stopPriceUp: $stopPriceUp\n      stopPriceDown: $stopPriceDown\n      amount: $amount\n      sell: $sell\n    ) {\n      _id\n    }\n  }\n'],['\n  mutation placeStopMarketOrder(\n    $marketCode: ID\n    $stopPriceUp: BigInt\n    $stopPriceDown: BigInt\n    $amount: BigInt\n    $sell: Boolean\n  ) {\n    placeStopMarketOrder(\n      marketCode: $marketCode\n      stopPriceUp: $stopPriceUp\n      stopPriceDown: $stopPriceDown\n      amount: $amount\n      sell: $sell\n    ) {\n      _id\n    }\n  }\n']);function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var StopMarket=(_dec=__WEBPACK_IMPORTED_MODULE_9_react_apollo_decorators_lib_withMutation___default()(__WEBPACK_IMPORTED_MODULE_10_graphql_tag___default()(_templateObject)),_dec(_class=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_withConfirmationDialog__["a" /* default */])(_class=__WEBPACK_IMPORTED_MODULE_12_orionsoft_parts_lib_decorators_withMessage___default()(_class=(_class2=function(_React$Component){_inherits(StopMarket,_React$Component);function StopMarket(){var _ref;var _temp,_this,_ret;_classCallCheck(this,StopMarket);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=StopMarket.__proto__||Object.getPrototypeOf(StopMarket)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(StopMarket,[{key:'place',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var amount,market,currency,amountFormatted,opts,formattedStopPriceUp,formattedStopPriceDown,currencyCode,description;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setState({loading:true});_context.prev=1;amount=(this.props.sell?this.state.amountSell:this.state.amountBuy)||0;market=this.props.market;currency=this.props.sell?market.mainCurrency:market.secondaryCurrency;amountFormatted=Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(amount,currency,{code:true});opts={code:true};formattedStopPriceUp=this.state.stopPriceUp?Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceUp||0,market.secondaryCurrency,opts):'No tiene';formattedStopPriceDown=this.state.stopPriceDown?Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceDown||0,market.secondaryCurrency,opts):'No tiene';currencyCode=market.mainCurrency.code;description='Confirma que quieres '+(this.props.sell?'vender':'comprar '+currencyCode+' con')+' '+amountFormatted+' a precio de mercado con precio de activaci\xF3n.';_context.next=13;return this.props.confirm({title:'Confirmar',description:description,disableTwoFactor:true,values:[{label:'Mercado',value:this.props.market.name},{label:'Tipo',value:this.props.sell?'Venta':'Compra'},{label:'Monto',value:amountFormatted},{label:'Precio por '+market.mainCurrency.code,value:'Mercado'},{label:'Precio de activación superior',value:formattedStopPriceUp},{label:'Precio de activación inferior',value:formattedStopPriceDown}]});case 13:_context.next=15;return this.props.placeStopMarketOrder({marketCode:this.props.market.code,amount:amount,sell:this.props.sell,stopPriceUp:this.state.stopPriceUp,stopPriceDown:this.state.stopPriceDown},{refetchQueries:['myOrders']});case 15:this.setState({amountSell:0,amountBuy:0,stopPriceUp:0,stopPriceDown:0});this.props.showMessage('Orden creada');Object(__WEBPACK_IMPORTED_MODULE_13__helpers_track__["a" /* default */])('trade',{marketCode:this.props.market.code,orderType:'stopMarket',sellType:this.props.sell?'sell':'buy'});_context.next=23;break;case 20:_context.prev=20;_context.t0=_context['catch'](1);if(_context.t0.message!=='[dialog-cancel]'){console.log('Error:',_context.t0);this.props.showMessage(_context.t0.message,{level:'error'});}case 23:this.setState({loading:false});case 24:case'end':return _context.stop();}}},_callee,this,[[1,20]]);}));function place(){return _ref2.apply(this,arguments);}return place;}()},{key:'renderPriceActivation',value:function renderPriceActivation(){var secondaryCurrency=this.props.market.secondaryCurrency;var opts={code:true};var formattedStopPriceUp=Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceUp||0,secondaryCurrency,opts);var formattedStopPriceDown=Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(this.state.stopPriceDown||0,secondaryCurrency,opts);var up='es mayor a igual a '+formattedStopPriceUp;var down='es menor o igual a '+formattedStopPriceDown;if(!this.state.stopPriceUp&&!this.state.stopPriceDown)return;var conditions=[];if(this.state.stopPriceUp)conditions.push(up);if(this.state.stopPriceDown)conditions.push(down);return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',null,'Si el precio de la \xFAltima transacci\xF3n ',conditions.join(' o '));}},{key:'renderTotal',value:function renderTotal(){if(!this.state.stopPriceUp&&!this.state.stopPriceDown)return;var amount=(this.props.sell?this.state.amountSell:this.state.amountBuy)||0;var mainCurrency=this.props.market.mainCurrency;var formattedAmount=Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(amount,mainCurrency);return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'total'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'totalLabel'},this.renderPriceActivation(),', se abrir\xE1 una orden de',' ',this.props.sell?'venta':'compra',' de ',this.props.sell?formattedAmount:'',' ',mainCurrency.code,' a precio de mercado'));}},{key:'renderButton',value:function renderButton(){if(!this.props.loggedIn)return;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_orionsoft_parts_lib_components_Button___default.a,{loading:this.state.loading,onClick:this.place,primary:!this.props.sell,danger:this.props.sell},'Crear orden');}},{key:'render',value:function render(){var _this2=this;var workingCurrency=this.props.sell?this.props.market.mainCurrency:this.props.market.secondaryCurrency;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Form"],{state:this.state,onChange:function onChange(changes){return _this2.setState(changes);}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Precio de activaci\xF3n superior'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'stopPriceUp',currency:this.props.market.secondaryCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Precio de activaci\xF3n inferior'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:'stopPriceDown',currency:this.props.market.secondaryCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:'label'},'Monto'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_simple_react_form__["Field"],{fieldName:this.props.sell?'amountSell':'amountBuy',currency:workingCurrency,type:__WEBPACK_IMPORTED_MODULE_4__components_fields_TraderNumber__["a" /* default */]})),this.renderTotal(),this.renderButton());}}]);return StopMarket;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'place',[__WEBPACK_IMPORTED_MODULE_11_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'place'),_class2.prototype)),_class2))||_class)||_class)||_class);StopMarket.propTypes={showMessage:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,sell:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,market:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,placeStopMarketOrder:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,loggedIn:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool};

/***/ }),

/***/ 2146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2147);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_274FXGVZb_erS70h2No5PG"
};

/***/ }),

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTypeSegmentedControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SegmentedControl__ = __webpack_require__(1847);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var OrderTypeSegmentedControl=function(_React$Component){_inherits(OrderTypeSegmentedControl,_React$Component);function OrderTypeSegmentedControl(){_classCallCheck(this,OrderTypeSegmentedControl);return _possibleConstructorReturn(this,(OrderTypeSegmentedControl.__proto__||Object.getPrototypeOf(OrderTypeSegmentedControl)).apply(this,arguments));}_createClass(OrderTypeSegmentedControl,[{key:'render',value:function render(){var options=[{label:'Market',value:'market'},{label:'Limit',value:'limit'},{label:'Stop',value:'stop'}];return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SegmentedControl__["a" /* default */],Object.assign({},this.props,{options:options}));}}]);return OrderTypeSegmentedControl;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);OrderTypeSegmentedControl.propTypes={};

/***/ }),

/***/ 2149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2150);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3eFIjzks9V6mP0ofp3MBGr{display:-ms-flexbox;display:flex}._3yTTXkneYzyK041jP4VNjP{-ms-flex:1 1;flex:1 1;font-size:14px;padding:0 10px 5px;cursor:pointer;text-align:center;color:hsla(0,0%,100%,.4);border-bottom:2px solid hsla(0,0%,100%,.4);-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}._3rIXqyRxhPisyQ2cUP6R7O{color:#fff;border-bottom:2px solid #fff}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/components/fields/SegmentedControl/styles.css"],"names":[],"mappings":"AAEA,yBACE,oBAAqB,AACrB,YAAc,CACf,AAED,yBACE,aAAc,AACV,SAAU,AACd,eAAgB,AAChB,mBAAyB,AACzB,eAAgB,AAChB,kBAAmB,AACnB,yBAAwB,AACxB,2CAAmD,AACnD,gCAAkC,AAClC,2BAA6B,AAC7B,uBAA0B,CAC3B,AAED,yBAEE,WAAY,AACZ,4BAAuC,CACxC","file":"styles.css","sourcesContent":["@value borderBottom: 2px;\n@value deactivatedColor: rgba(255, 255, 255, 0.4);\n:local(.container) {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.item) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  font-size: 14px;\n  padding: 0 10px 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: deactivatedColor;\n  border-bottom: borderBottom solid deactivatedColor;\n  -webkit-transition: all 0.4s ease;\n  -o-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n:local(.active) {\n  composes: item;\n  color: #fff;\n  border-bottom: borderBottom solid #fff;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"borderBottom": "2px",
	"deactivatedColor": "rgba(255, 255, 255, 0.4)",
	"container": "_3eFIjzks9V6mP0ofp3MBGr",
	"item": "_3yTTXkneYzyK041jP4VNjP",
	"active": "_3rIXqyRxhPisyQ2cUP6R7O _3yTTXkneYzyK041jP4VNjP"
};

/***/ }),

/***/ 2151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellSegmentedControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SellSegmentedControl=function(_React$Component){_inherits(SellSegmentedControl,_React$Component);function SellSegmentedControl(){_classCallCheck(this,SellSegmentedControl);return _possibleConstructorReturn(this,(SellSegmentedControl.__proto__||Object.getPrototypeOf(SellSegmentedControl)).apply(this,arguments));}_createClass(SellSegmentedControl,[{key:'render',value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:function onClick(){return _this2.props.onChange(false);},className:this.props.value?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.item:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.buy},'Comprar'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:function onClick(){return _this2.props.onChange(true);},className:this.props.value?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.sell:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.item},'Vender'));}}]);return SellSegmentedControl;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);SellSegmentedControl.propTypes={value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,onChange:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func};

/***/ }),

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2153);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, ".V4eNb442q-MlXGSLTknfI{display:-ms-flexbox;display:flex;margin-bottom:10px}._3RJ3nnUd_Gm9naTPwzgkQB{font-size:14px;-ms-flex:1 1;flex:1 1;text-align:center;padding:5px;cursor:pointer;background-color:hsla(0,0%,100%,.1);border-radius:2px}._3RJ3nnUd_Gm9naTPwzgkQB:first-child{margin-right:5px}._2Apeg_4TIuuwrDTmQKiD5U{background-color:#008c76}._cIRBnhE4xbpbdlUYxGJR{background-color:#f44336}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/components/fields/SellSegmentedControl/styles.css"],"names":[],"mappings":"AAAA,uBACE,oBAAqB,AACrB,aAAc,AACd,kBAAoB,CACrB,AAED,yBACE,eAAgB,AAChB,aAAc,AACV,SAAU,AACd,kBAAmB,AACnB,YAAa,AACb,eAAgB,AAChB,oCAA2C,AAC3C,iBAAmB,CACpB,AAED,qCACE,gBAAkB,CACnB,AAKD,yBAEE,wBAA0B,CAC3B,AAED,uBAEE,wBAA0B,CAC3B","file":"styles.css","sourcesContent":[":local(.container) {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n}\n\n:local(.item) {\n  font-size: 14px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n}\n\n:local(.item):first-child {\n  margin-right: 5px;\n}\n\n:local(.item):last-child {\n}\n\n:local(.buy) {\n  composes: item;\n  background-color: #008c76;\n}\n\n:local(.sell) {\n  composes: item;\n  background-color: #f44336;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "V4eNb442q-MlXGSLTknfI",
	"item": "_3RJ3nnUd_Gm9naTPwzgkQB",
	"buy": "_2Apeg_4TIuuwrDTmQKiD5U _3RJ3nnUd_Gm9naTPwzgkQB",
	"sell": "_cIRBnhE4xbpbdlUYxGJR _3RJ3nnUd_Gm9naTPwzgkQB"
};

/***/ }),

/***/ 2154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2155);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._27qw-H1Fy8cx7MZq-ufd8D{font-size:12px;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;-ms-flex-direction:column;flex-direction:column}._29v6j7kmsAxliI6Ad8338W{border-bottom:2px solid #202228;font-weight:700;display:-ms-flexbox;display:flex}._29v6j7kmsAxliI6Ad8338W>div{padding:2px;-ms-flex:1 1;flex:1 1;text-align:right}._29v6j7kmsAxliI6Ad8338W>div:first-child{padding-left:10px}._29v6j7kmsAxliI6Ad8338W>div:last-child{padding-right:10px}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/OrderBook/styles.css"],"names":[],"mappings":"AAAA,yBACE,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACV,SAAU,AACd,0BAA2B,AACvB,qBAAuB,CAC5B,AAED,yBACE,gCAAiC,AACjC,gBAAkB,AAClB,oBAAqB,AACrB,YAAc,CACf,AAED,6BACE,YAAa,AACb,aAAc,AACV,SAAU,AACd,gBAAkB,CACnB,AAED,yCACE,iBAAmB,CACpB,AAED,wCACE,kBAAoB,CACrB","file":"styles.css","sourcesContent":[":local(.container) {\n  font-size: 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n:local(.header) {\n  border-bottom: 2px solid #202228;\n  font-weight: bold;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.header) > div {\n  padding: 2px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  text-align: right;\n}\n\n:local(.header) > div:first-child {\n  padding-left: 10px;\n}\n\n:local(.header) > div:last-child {\n  padding-right: 10px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_27qw-H1Fy8cx7MZq-ufd8D",
	"header": "_29v6j7kmsAxliI6Ad8338W"
};

/***/ }),

/***/ 2156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spread__ = __webpack_require__(2159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__List_Item__ = __webpack_require__(2162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range__ = __webpack_require__(1888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__query__ = __webpack_require__(1889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var Data=(_dec=__WEBPACK_IMPORTED_MODULE_4_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_9__query__["a" /* default */],{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Loading__["a" /* default */],null)}),_dec(_class=(_class2=function(_React$Component){_inherits(Data,_React$Component);function Data(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Data);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Data.__proto__||Object.getPrototypeOf(Data)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Data,[{key:'componentDidMount',value:function componentDidMount(){var itemHeight=18.5;var items=this.props.orderBook.sell.length;var spaceHeight=this.props.height-41-18-6;var scrollTop=items*itemHeight-spaceHeight/2+10;this.refs.container.scrollTop=scrollTop;}},{key:'getOrder',value:function getOrder(index){var buyOrders=this.props.orderBook.buy;var sellOrders=this.props.orderBook.sell;if(index<sellOrders.length){var i=sellOrders.length-index-1;return Object.assign({},sellOrders[i],{sell:true});}else if(index>sellOrders.length){var newIndex=index-sellOrders.length-1;return Object.assign({},buyOrders[newIndex],{sell:false});}}},{key:'renderOrder',value:function renderOrder(index){var _this2=this;var order=this.getOrder(index);if(!order){var buy=this.props.orderBook.buy[0]||{};var sell=this.props.orderBook.sell[0]||{};var spread=sell.limitPrice-buy.limitPrice;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Spread__["a" /* default */],{key:'spread',market:this.props.market,spread:spread});}var key=''+(order.sell?'sell':'buy')+order.limitPrice;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__List_Item__["a" /* default */],{key:key,order:order,market:this.props.market,sell:order.sell,onClick:function onClick(){return _this2.props.onSelectPrice({price:order.limitPrice,sell:!order.sell});}});}},{key:'renderOrders',value:function renderOrders(){var _this3=this;var total=this.props.orderBook.sell.length+this.props.orderBook.buy.length+1;return __WEBPACK_IMPORTED_MODULE_8_lodash_range___default()(total).map(function(index){return _this3.renderOrder(index);});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container,ref:'container',style:{height:this.props.height-41-18-6}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default.a,{transitionName:'orders-list',transitionEnterTimeout:1000,transitionLeaveTimeout:1000},this.renderOrders()));}}]);return Data;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'renderOrder',[__WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'renderOrder'),_class2.prototype)),_class2))||_class);Data.propTypes={market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,onSelectPrice:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,orderBook:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,didMount:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,width:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number};

/***/ }),

/***/ 2157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2158);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._2B-zr6lNJhL69jKFRnHpxw{overflow:auto;-webkit-overflow-scrolling:touch}.orders-list-enter{background-color:hsla(0,0%,100%,.2)}.orders-list-enter.orders-list-enter-active{background-color:hsla(0,0%,100%,0);-webkit-transition:background 1s ease-in-out;-o-transition:background 1s ease-in-out;transition:background 1s ease-in-out}.orders-list-leave{background-color:rgba(0,0,0,.2)}.orders-list-leave.orders-list-leave-active{background-color:transparent;-webkit-transition:background 1s ease-in-out;-o-transition:background 1s ease-in-out;transition:background 1s ease-in-out}.orders-list-leave.orders-list-leave-active .amount{color:#484c53;background-color:transparent;-webkit-transition:color .2s ease-in-out;-o-transition:color .2s ease-in-out;transition:color .2s ease-in-out;-webkit-transition:background 1s ease-in-out;-o-transition:background 1s ease-in-out;transition:background 1s ease-in-out}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/OrderBook/Data/styles.css"],"names":[],"mappings":"AAAA,yBACE,cAAe,AACf,gCAAkC,CACnC,AAED,mBACE,mCAA2C,CAC5C,AAED,4CACE,mCAAyC,AACzC,6CAAkD,AAClD,wCAA6C,AAC7C,oCAA0C,CAC3C,AAED,mBACE,+BAAqC,CACtC,AAED,4CACE,6BAAmC,AACnC,6CAAkD,AAClD,wCAA6C,AAC7C,oCAA0C,CAC3C,AAED,oDACE,cAAe,AACf,6BAAmC,AACnC,yCAA4C,AAC5C,oCAAuC,AACvC,iCAAoC,AACpC,6CAAkD,AAClD,wCAA6C,AAC7C,oCAA0C,CAC3C","file":"styles.css","sourcesContent":[":local(.container) {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.orders-list-enter {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.orders-list-enter.orders-list-enter-active {\n  background-color: rgba(255, 255, 255, 0);\n  -webkit-transition: background 1000ms ease-in-out;\n  -o-transition: background 1000ms ease-in-out;\n  transition: background 1000ms ease-in-out;\n}\n\n.orders-list-leave {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.orders-list-leave.orders-list-leave-active {\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: background 1000ms ease-in-out;\n  -o-transition: background 1000ms ease-in-out;\n  transition: background 1000ms ease-in-out;\n}\n\n.orders-list-leave.orders-list-leave-active .amount {\n  color: #484c53;\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: color 200ms ease-in-out;\n  -o-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n  -webkit-transition: background 1000ms ease-in-out;\n  -o-transition: background 1000ms ease-in-out;\n  transition: background 1000ms ease-in-out;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_2B-zr6lNJhL69jKFRnHpxw"
};

/***/ }),

/***/ 2159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spread; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__ = __webpack_require__(159);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Spread=function(_React$Component){_inherits(Spread,_React$Component);function Spread(){_classCallCheck(this,Spread);return _possibleConstructorReturn(this,(Spread.__proto__||Object.getPrototypeOf(Spread)).apply(this,arguments));}_createClass(Spread,[{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:this.props.style},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.label},'Diferencia (',this.props.market.secondaryCurrency.code,')'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.value},this.props.spread&&this.props.spread>0?Object(__WEBPACK_IMPORTED_MODULE_3__helpers_formatCurrency__["a" /* default */])(this.props.spread,this.props.market.secondaryCurrency):'0')));}}]);return Spread;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Spread.propTypes={market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,spread:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,style:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object};

/***/ }),

/***/ 2160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2161);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._2QhSvvE3tKz1oirP18GB77{padding:2px 10px;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#202228}.miP5dt_jdwbDCnhVDRtE_{-ms-flex:1 1;flex:1 1}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/OrderBook/Data/Spread/styles.css"],"names":[],"mappings":"AAAA,yBACE,iBAAkB,AAClB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,wBAA0B,CAC3B,AAED,uBACE,aAAc,AACV,QAAU,CACf","file":"styles.css","sourcesContent":[":local(.container) {\n  padding: 2px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #202228;\n}\n\n:local(.label) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_2QhSvvE3tKz1oirP18GB77",
	"label": "miP5dt_jdwbDCnhVDRtE_"
};

/***/ }),

/***/ 2162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_sleep__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_sleep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_sleep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AmountOpacity__ = __webpack_require__(1791);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Item=function(_React$Component){_inherits(Item,_React$Component);function Item(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Item);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Item.__proto__||Object.getPrototypeOf(Item)).call.apply(_ref,[this].concat(args))),_this),_this.state={className:''},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Item,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){if(nextProps.order.limitPrice!==this.props.order.limitPrice)return true;if(nextProps.order.amount!==this.props.order.amount)return true;if(nextState.className!==this.state.className)return true;return false;}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.order.amount!==this.props.order.amount){this.highlight();}}},{key:'highlight',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var className;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:className=this.props.sell?__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.highlightSell:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.highlightBuy;this.setState({className:className});_context.next=4;return __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_sleep___default()(1000);case 4:this.setState({className:null});case 5:case'end':return _context.stop();}}},_callee,this);}));function highlight(){return _ref2.apply(this,arguments);}return highlight;}()},{key:'render',value:function render(){var _props=this.props,sell=_props.sell,order=_props.order,market=_props.market;var className=sell?__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.containerSell:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.containerBuy;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{style:this.props.style,className:className+' '+this.state.className,onClick:this.props.onClick},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.amount+' amount'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_AmountOpacity__["a" /* default */],{value:order.amount,currency:market.mainCurrency})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.price},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_AmountOpacity__["a" /* default */],{value:order.limitPrice,currency:market.secondaryCurrency,long:true})));}}]);return Item;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);Item.propTypes={order:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,sell:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,onClick:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,style:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ }),

/***/ 2163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2164);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3o_TRwIcTQW_K94FDx4yv4{display:-ms-flexbox;display:flex;cursor:pointer}._3o_TRwIcTQW_K94FDx4yv4:hover{background-color:hsla(0,0%,100%,.025)}.UuMnG2oTdYqNTq0wHLaaw{-webkit-animation:highlightBuy 1s 1 ease-in-out;animation:highlightBuy 1s 1 ease-in-out}._2jG2NW7prwiQllLyN3XH3Q{-webkit-animation:highlightSell 1s 1 ease-in-out;animation:highlightSell 1s 1 ease-in-out}@-webkit-keyframes highlightBuy{0%{color:#008c76}to{color:#fff}}@-webkit-keyframes highlightSell{0%{color:#f44336}to{color:#fff}}._3keuqvYDDq4dmJNySCigED{padding:2px;text-align:right;-ms-flex:1 1;flex:1 1;font-weight:700}._1v_aPpZW2S7WLiquJCgVIz{padding-left:10px}._2puHfNajlGDgaN6L_byNoK{padding-right:10px}._13onbI0vSRKCffA9EvXdM5 ._2puHfNajlGDgaN6L_byNoK{color:#f44336}._3lV1TRH1kh_IQ21yGoRBCW ._2puHfNajlGDgaN6L_byNoK{color:#008c76}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/OrderBook/Data/List/Item/styles.css"],"names":[],"mappings":"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,cAAgB,CACjB,AAED,+BACE,qCAA6C,CAC9C,AAED,uBACE,gDAAiD,AACzC,uCAAyC,CAClD,AAED,yBACE,iDAAkD,AAC1C,wCAA0C,CACnD,AAED,gCACE,GACE,aAAe,CAChB,AACD,GACE,UAAY,CACb,CACF,AAED,iCACE,GACE,aAAe,CAChB,AACD,GACE,UAAY,CACb,CACF,AAUD,yBACE,YAAa,AACb,iBAAkB,AAClB,aAAc,AACV,SAAU,AACd,eAAkB,CACnB,AAED,yBAEE,iBAAmB,CACpB,AAED,yBAEE,kBAAoB,CACrB,AAED,kDACE,aAAe,CAChB,AAED,kDACE,aAAe,CAChB","file":"styles.css","sourcesContent":[":local(.container) {\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n}\n\n:local(.container):hover {\n  background-color: rgba(255, 255, 255, 0.025);\n}\n\n:local(.highlightBuy) {\n  -webkit-animation: highlightBuy 1s 1 ease-in-out;\n          animation: highlightBuy 1s 1 ease-in-out;\n}\n\n:local(.highlightSell) {\n  -webkit-animation: highlightSell 1s 1 ease-in-out;\n          animation: highlightSell 1s 1 ease-in-out;\n}\n\n@-webkit-keyframes highlightBuy {\n  0% {\n    color: #008c76;\n  }\n  100% {\n    color: #fff;\n  }\n}\n\n@-webkit-keyframes highlightSell {\n  0% {\n    color: #f44336;\n  }\n  100% {\n    color: #fff;\n  }\n}\n\n:local(.containerSell) {\n  composes: container;\n}\n\n:local(.containerBuy) {\n  composes: container;\n}\n\n:local(.box) {\n  padding: 2px;\n  text-align: right;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  font-weight: bold;\n}\n\n:local(.amount) {\n  composes: box;\n  padding-left: 10px;\n}\n\n:local(.price) {\n  composes: box;\n  padding-right: 10px;\n}\n\n:local(.containerSell) :local(.price) {\n  color: #f44336;\n}\n\n:local(.containerBuy) :local(.price) {\n  color: #008c76;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_3o_TRwIcTQW_K94FDx4yv4",
	"highlightBuy": "UuMnG2oTdYqNTq0wHLaaw",
	"highlightSell": "_2jG2NW7prwiQllLyN3XH3Q",
	"containerSell": "_13onbI0vSRKCffA9EvXdM5 _3o_TRwIcTQW_K94FDx4yv4",
	"containerBuy": "_3lV1TRH1kh_IQ21yGoRBCW _3o_TRwIcTQW_K94FDx4yv4",
	"box": "_3keuqvYDDq4dmJNySCigED",
	"amount": "_1v_aPpZW2S7WLiquJCgVIz _3keuqvYDDq4dmJNySCigED",
	"price": "_2puHfNajlGDgaN6L_byNoK _3keuqvYDDq4dmJNySCigED"
};

/***/ }),

/***/ 2165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2166);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_3OfLIaNOUU4kS2pYnVcHQQ"
};

/***/ }),

/***/ 2167:
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(2168),
    isIterateeCall = __webpack_require__(2169),
    toFinite = __webpack_require__(601);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ 2168:
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ 2169:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(224),
    isArrayLike = __webpack_require__(166),
    isIndex = __webpack_require__(223),
    isObject = __webpack_require__(65);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 2170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Root_getEnv__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__query__ = __webpack_require__(1889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_desc,_value,_class2;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var RealTime=Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"])(_class=(_class2=function(_React$Component){_inherits(RealTime,_React$Component);function RealTime(){_classCallCheck(this,RealTime);return _possibleConstructorReturn(this,(RealTime.__proto__||Object.getPrototypeOf(RealTime)).apply(this,arguments));}_createClass(RealTime,[{key:'componentDidMount',value:function componentDidMount(){var env=Object(__WEBPACK_IMPORTED_MODULE_1__Root_getEnv__["a" /* default */])();this.channel=global.pusher.subscribe(env+'-'+this.props.marketCode+'-orderBook');this.channel.bind('new',this.onNew);this.channel.bind('updated',this.onUpdated);this.channel.bind('deleted',this.onDeleted);}},{key:'componentWillUnmount',value:function componentWillUnmount(){var env=Object(__WEBPACK_IMPORTED_MODULE_1__Root_getEnv__["a" /* default */])();this.channel.unbind('new',this.onNew);this.channel.unbind('updated',this.onUpdated);this.channel.unbind('deleted',this.onDeleted);global.pusher.unsubscribe(env+'-'+this.props.marketCode+'-orderBook');}},{key:'onNew',value:function onNew(newItem){var data=this.props.client.readQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode}});var key=newItem.sell?'sell':'buy';var index=0;for(var i=0;i<data.orderBook[key].length;i++){var item=data.orderBook[key][i];if(newItem.sell&&item.limitPrice>newItem.limitPrice){index=i;break;}if(!newItem.sell&&item.limitPrice<newItem.limitPrice){index=i;break;}index=i+1;}data.orderBook[key].splice(index,0,{limitPrice:newItem.limitPrice,amount:newItem.amount,__typename:'MarketBookOrder'});// Write our data back to the cache.
this.props.client.writeQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode},data:data});}},{key:'onUpdated',value:function onUpdated(updatedItem){var data=this.props.client.readQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode}});var key=updatedItem.sell?'sell':'buy';for(var i=0;i<data.orderBook[key].length;i++){var item=data.orderBook[key][i];if(item.limitPrice===updatedItem.limitPrice){data.orderBook[key][i].amount=updatedItem.amount;}}// Write our data back to the cache.
this.props.client.writeQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode},data:data});}},{key:'onDeleted',value:function onDeleted(deleteItem){var data=this.props.client.readQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode}});var key=deleteItem.sell?'sell':'buy';for(var i=0;i<data.orderBook[key].length;i++){var item=data.orderBook[key][i];if(item.limitPrice===deleteItem.limitPrice){data.orderBook[key].splice(i,1);}}// Write our data back to the cache.
this.props.client.writeQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode},data:data});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null);}}]);return RealTime;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'onNew',[__WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onNew'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'onUpdated',[__WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onUpdated'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'onDeleted',[__WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onDeleted'),_class2.prototype)),_class2))||_class;RealTime.propTypes={client:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,marketCode:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ }),

/***/ 2171:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2172);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "etl1dXCougEzS19aucsbW"
};

/***/ }),

/***/ 2173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Depth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_add_circle_outline__ = __webpack_require__(2176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_add_circle_outline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_add_circle_outline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_remove_circle_outline__ = __webpack_require__(2177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_remove_circle_outline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_remove_circle_outline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Chart__ = __webpack_require__(2178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_round__ = __webpack_require__(1734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_round___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_round__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_formatCurrency__ = __webpack_require__(159);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _templateObject=_taggedTemplateLiteral(['\n    query getMarketMid($marketCode: ID!) {\n      orderBook: marketOrderBook(marketCode: $marketCode) {\n        mid\n      }\n    }\n  '],['\n    query getMarketMid($marketCode: ID!) {\n      orderBook: marketOrderBook(marketCode: $marketCode) {\n        mid\n      }\n    }\n  ']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var zoomLevels=8;var Depth=(_dec=__WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_6_graphql_tag___default()(_templateObject),{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Loading__["a" /* default */],null),options:{pollInterval:10000}}),_dec(_class=function(_React$Component){_inherits(Depth,_React$Component);function Depth(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Depth);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Depth.__proto__||Object.getPrototypeOf(Depth)).call.apply(_ref,[this].concat(args))),_this),_this.state={zoom:6},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Depth,[{key:'renderChart',value:function renderChart(){var max=50;var limit=__WEBPACK_IMPORTED_MODULE_9_lodash_round___default()(max-(this.state.zoom-1)*(max/zoomLevels));return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Chart__["a" /* default */],{width:this.props.width,height:this.props.height,marketCode:this.props.market.code,limit:limit,market:this.props.market});}},{key:'renderMid',value:function renderMid(){var _this2=this;var onClick=function onClick(diff){return function(event){var newZoom=_this2.state.zoom+diff;if(newZoom>zoomLevels||newZoom<1)return;_this2.setState({zoom:newZoom});};};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.mid},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:onClick(-1),className:this.state.zoom===1?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.minusDisabled:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.minus},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_md_remove_circle_outline___default.a,{size:20})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.data},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.value},Object(__WEBPACK_IMPORTED_MODULE_10__helpers_formatCurrency__["a" /* default */])(this.props.orderBook.mid,this.props.market.secondaryCurrency)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.label},'Precio medio')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{onClick:onClick(1),className:this.state.zoom===zoomLevels?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.plusDisabled:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.plus},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_add_circle_outline___default.a,{size:20})));}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container,ref:'container',style:{height:this.props.height}},this.renderChart(),this.renderMid());}}]);return Depth;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component))||_class);Depth.propTypes={orderBook:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,width:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,market:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object};

/***/ }),

/***/ 2174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2175);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._10ee0nYhJf_Y00uokVz0bF{position:relative}._10ee0nYhJf_Y00uokVz0bF .rv-xy-plot__axis__line{stroke-width:1px}._3bzk2oIkSTO1B_12inHq83{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:10px;display:-ms-flexbox;display:flex;left:0;right:0}._2yXAIMKTKxxAw048or6tBm{padding:0 20px;text-align:center}.LbNM3JZ-8t3aVpViipauU{color:hsla(0,0%,100%,.4);font-size:11px}._2DHPAJYplSwA1MZLJQC6KW{color:hsla(0,0%,100%,.8);-ms-flex:1 1;flex:1 1;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}._2DHPAJYplSwA1MZLJQC6KW:hover{color:#fff}._1u27P7uctIGqB5VxkxT8dU{cursor:default;color:hsla(0,0%,100%,.3)}._1u27P7uctIGqB5VxkxT8dU:hover{color:hsla(0,0%,100%,.3)}._2fSOmYeazy7YDyam5KRCs0,.QeFm0WE-oXuA4Dh8YIIda{-ms-flex-align:end;align-items:flex-end}._1NiNZqfP0zoUxVvAzs_2HK,._3Fx6E9wJUgQiTFu1P7edDt{-ms-flex-align:start;align-items:flex-start}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/Charts/Depth/styles.css"],"names":[],"mappings":"AAAA,yBACE,iBAAmB,CACpB,AAED,iDACE,gBAAkB,CACnB,AAED,yBACE,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,iBAAkB,AAC1B,kBAAmB,AACnB,SAAU,AACV,oBAAqB,AACrB,aAAc,AACd,OAAQ,AACR,OAAS,CACV,AAED,yBACE,eAAgB,AAChB,iBAAmB,CACpB,AAKD,uBACE,yBAAgC,AAChC,cAAgB,CACjB,AAED,yBACE,yBAAgC,AAChC,aAAc,AACV,SAAU,AACd,gCAAkC,AAClC,2BAA6B,AAC7B,wBAA0B,AAC1B,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,cAAgB,CACjB,AAED,+BACE,UAA8B,CAC/B,AAED,yBAEE,eAAgB,AAChB,wBAAgC,CACjC,AAED,+BACE,wBAAgC,CACjC,AAQD,gDAEE,mBAAoB,AAChB,oBAAsB,CAC3B,AAQD,kDAEE,qBAAsB,AAClB,sBAAwB,CAC7B","file":"styles.css","sourcesContent":[":local(.container) {\n  position: relative;\n}\n\n:local(.container) .rv-xy-plot__axis__line {\n  stroke-width: 1px;\n}\n\n:local(.mid) {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 10px;\n  display: -ms-flexbox;\n  display: flex;\n  left: 0;\n  right: 0;\n}\n\n:local(.data) {\n  padding: 0 20px;\n  text-align: center;\n}\n\n:local(.value) {\n}\n\n:local(.label) {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 11px;\n}\n\n:local(.icon) {\n  color: rgba(255, 255, 255, 0.8);\n  -ms-flex: 1 1;\n      flex: 1 1;\n  -webkit-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  cursor: pointer;\n}\n\n:local(.icon):hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n:local(.iconDisabled) {\n  composes: icon;\n  cursor: default;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n:local(.iconDisabled):hover {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n:local(.minus) {\n  composes: icon;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n:local(.minusDisabled) {\n  composes: iconDisabled;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n:local(.plus) {\n  composes: icon;\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n\n:local(.plusDisabled) {\n  composes: iconDisabled;\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_10ee0nYhJf_Y00uokVz0bF",
	"mid": "_3bzk2oIkSTO1B_12inHq83",
	"data": "_2yXAIMKTKxxAw048or6tBm",
	"value": "_3Vls66wVR9zelY9PVvsyxK",
	"label": "LbNM3JZ-8t3aVpViipauU",
	"icon": "_2DHPAJYplSwA1MZLJQC6KW",
	"iconDisabled": "_1u27P7uctIGqB5VxkxT8dU _2DHPAJYplSwA1MZLJQC6KW",
	"minus": "_2fSOmYeazy7YDyam5KRCs0 _2DHPAJYplSwA1MZLJQC6KW",
	"minusDisabled": "QeFm0WE-oXuA4Dh8YIIda _1u27P7uctIGqB5VxkxT8dU _2DHPAJYplSwA1MZLJQC6KW",
	"plus": "_3Fx6E9wJUgQiTFu1P7edDt _2DHPAJYplSwA1MZLJQC6KW",
	"plusDisabled": "_1NiNZqfP0zoUxVvAzs_2HK _1u27P7uctIGqB5VxkxT8dU _2DHPAJYplSwA1MZLJQC6KW"
};

/***/ }),

/***/ 2176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdAddCircleOutline = function MdAddCircleOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 33.4q5.5 0 9.4-4t4-9.4-4-9.4-9.4-4-9.4 4-4 9.4 4 9.4 9.4 4z m0-30q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z m1.6 8.2v6.8h6.8v3.2h-6.8v6.8h-3.2v-6.8h-6.8v-3.2h6.8v-6.8h3.2z' })
        )
    );
};

exports.default = MdAddCircleOutline;
module.exports = exports['default'];

/***/ }),

/***/ 2177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdRemoveCircleOutline = function MdRemoveCircleOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 33.4q5.5 0 9.4-4t4-9.4-4-9.4-9.4-4-9.4 4-4 9.4 4 9.4 9.4 4z m0-30q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z m-8.4 15h16.8v3.2h-16.8v-3.2z' })
        )
    );
};

exports.default = MdRemoveCircleOutline;
module.exports = exports['default'];

/***/ }),

/***/ 2178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_vis__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css__ = __webpack_require__(2179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_css__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n    query getDepthData($marketCode: ID!, $limit: Int) {\n      orderBook: marketOrderBook(marketCode: $marketCode, limit: $limit) {\n        mid\n        buy {\n          limitPrice\n          accumulated\n          accumulatedPrice\n        }\n        sell {\n          limitPrice\n          accumulated\n          accumulatedPrice\n        }\n      }\n    }\n  '],['\n    query getDepthData($marketCode: ID!, $limit: Int) {\n      orderBook: marketOrderBook(marketCode: $marketCode, limit: $limit) {\n        mid\n        buy {\n          limitPrice\n          accumulated\n          accumulatedPrice\n        }\n        sell {\n          limitPrice\n          accumulated\n          accumulatedPrice\n        }\n      }\n    }\n  ']);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var interval=10000;var Chart=(_dec=__WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject),{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Loading__["a" /* default */],null),options:{fetchPolicy:'network-only',pollInterval:interval}}),_dec(_class=(_class2=function(_React$Component){_inherits(Chart,_React$Component);function Chart(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Chart);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Chart.__proto__||Object.getPrototypeOf(Chart)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Chart,[{key:'getData',value:function getData(section){return this.props.orderBook[section].map(function(point){return{x:point.limitPrice,y:point.accumulated,y0:0};});}},{key:'formatX',value:function formatX(item){return Object(__WEBPACK_IMPORTED_MODULE_6__helpers_formatCurrency__["a" /* default */])(item,this.props.market.secondaryCurrency);}},{key:'formatY',value:function formatY(item){return Object(__WEBPACK_IMPORTED_MODULE_6__helpers_formatCurrency__["a" /* default */])(item,this.props.market.mainCurrency);}},{key:'getTickPadding',value:function getTickPadding(){var buy=this.props.orderBook['buy'];var last=buy[buy.length-1].accumulated;var formatted=this.formatY(last);return formatted.length*8*-1;}},{key:'onMouseLeave',value:function onMouseLeave(){this.setState({selected:null});}},{key:'onMouseOver',value:function onMouseOver(item){this.setState({selected:item.point});}},{key:'getRefDataSection',value:function getRefDataSection(section){return this.props.orderBook[section].map(function(point){return{x:point.limitPrice,y:0,point:Object.assign({},point,{section:section})};});}},{key:'getRefData',value:function getRefData(){var buy=this.getRefDataSection('buy');var sell=this.getRefDataSection('sell');return[].concat(_toConsumableArray(buy),_toConsumableArray(sell));}},{key:'renderCrosshair',value:function renderCrosshair(){var point=this.state.selected;if(!point)return;var mainCurrency=this.props.market.mainCurrency;var secondaryCurrency=this.props.market.secondaryCurrency;var total=point.accumulatedPrice;var opts={code:true};var word=point.section==='buy'?'vendido':'comprado';return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["c" /* Crosshair */],{values:[{x:point.limitPrice}]},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.crosshair},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.limitPrice},Object(__WEBPACK_IMPORTED_MODULE_6__helpers_formatCurrency__["a" /* default */])(point.limitPrice,secondaryCurrency,opts)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.flex},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.flexItem},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.title},'Puede ser ',word,':'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.value},Object(__WEBPACK_IMPORTED_MODULE_6__helpers_formatCurrency__["a" /* default */])(point.accumulated,mainCurrency,opts))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.flexItem},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.title},'Por un total de:'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_8__styles_css___default.a.value},Object(__WEBPACK_IMPORTED_MODULE_6__helpers_formatCurrency__["a" /* default */])(total,secondaryCurrency,opts))))));}},{key:'renderChart',value:function renderChart(){var sell=this.getData('sell');var buy=this.getData('buy');if(!sell.length)return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null);if(!buy.length)return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null);var axisStyle={line:{stroke:'rgba(255, 255, 255, 0.4)'},text:{fill:'#fff',fontWeight:600}};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["g" /* XYPlot */],{animation:true,margin:{left:0,right:0,top:20,bottom:30},height:this.props.height,width:this.props.width,onMouseLeave:this.onMouseLeave},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["d" /* GradientDefs */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('linearGradient',{id:'sellGradient',x1:'0',x2:'0',y1:'0',y2:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop',{offset:'0%',stopColor:'#f44336',stopOpacity:0.8}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop',{offset:'100%',stopColor:'#f44336',stopOpacity:0.3}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["d" /* GradientDefs */],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('linearGradient',{id:'buyGradient',x1:'0',x2:'0',y1:'0',y2:'1'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop',{offset:'0%',stopColor:'#008c76',stopOpacity:0.8}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop',{offset:'100%',stopColor:'#008c76',stopOpacity:0.3}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["e" /* LineSeries */],{color:'transparent',onNearestX:this.onMouseOver,data:this.getRefData()}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["b" /* AreaSeries */],{color:'url(#sellGradient)',data:sell}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["b" /* AreaSeries */],{color:'url(#buyGradient)',data:buy}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["f" /* XAxis */],{tickTotal:4,tickFormat:this.formatX,style:axisStyle,tickSizeInner:0}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["h" /* YAxis */],{tickFormat:this.formatY,tickPadding:this.getTickPadding(),hideLine:true,style:axisStyle,tickSizeOuter:0}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["h" /* YAxis */],{tickFormat:this.formatY,tickPadding:this.getTickPadding(),hideLine:true,style:axisStyle,tickSizeOuter:0,orientation:'right'}),this.renderCrosshair());}},{key:'render',value:function render(){return this.renderChart();}}]);return Chart;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'formatX',[__WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'formatX'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'formatY',[__WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'formatY'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'onMouseLeave',[__WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onMouseLeave'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'onMouseOver',[__WEBPACK_IMPORTED_MODULE_7_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onMouseOver'),_class2.prototype)),_class2))||_class);Chart.propTypes={orderBook:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,aggregation:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ }),

/***/ 2179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2180);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3InpbzEWTp9QBn_hB8ucuN{z-index:100;background-color:#010101;padding:10px;width:260px;color:#fff}.rv-crosshair__line{background:#fff;width:1px}._2N4aLyn-l7ViMFbCaYZtGf{font-size:16px;font-weight:700;margin-bottom:10px}._2yLE8b0wl_1kPD3VVcwE2V{display:-ms-flexbox;display:flex}.V5I060zUaTHFQZA7B8zXy{-ms-flex:1 1;flex:1 1}._2gn2DE0RVf8BWH7eHeNDLt{font-size:14px;font-weight:700}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/Charts/Depth/Chart/styles.css"],"names":[],"mappings":"AAAA,yBACE,YAAa,AACb,yBAA0B,AAC1B,aAAc,AACd,YAAa,AACb,UAAY,CACb,AAED,oBACE,gBAAiB,AACjB,SAAW,CACZ,AAED,yBACE,eAAgB,AAChB,gBAAkB,AAClB,kBAAoB,CACrB,AAED,yBACE,oBAAqB,AACrB,YAAc,CACf,AAED,uBACE,aAAc,AACV,QAAU,CACf,AAKD,yBACE,eAAgB,AAChB,eAAkB,CACnB","file":"styles.css","sourcesContent":[":local(.crosshair) {\n  z-index: 100;\n  background-color: #010101;\n  padding: 10px;\n  width: 260px;\n  color: #fff;\n}\n\n.rv-crosshair__line {\n  background: #fff;\n  width: 1px;\n}\n\n:local(.limitPrice) {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n:local(.flex) {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.flexItem) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n:local(.title) {\n}\n\n:local(.value) {\n  font-size: 14px;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"crosshair": "_3InpbzEWTp9QBn_hB8ucuN",
	"limitPrice": "_2N4aLyn-l7ViMFbCaYZtGf",
	"flex": "_2yLE8b0wl_1kPD3VVcwE2V",
	"flexItem": "V5I060zUaTHFQZA7B8zXy",
	"title": "_3R8nWa1uE7q5qWkiwnGcQB",
	"value": "_2gn2DE0RVf8BWH7eHeNDLt"
};

/***/ }),

/***/ 2181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chart__ = __webpack_require__(2184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Candle=function(_React$Component){_inherits(Candle,_React$Component);function Candle(){_classCallCheck(this,Candle);return _possibleConstructorReturn(this,(Candle.__proto__||Object.getPrototypeOf(Candle)).apply(this,arguments));}_createClass(Candle,[{key:'getAggregation',value:function getAggregation(){return localStorage.getItem('exchange.candleAggregation')||'h1';}},{key:'setAggregation',value:function setAggregation(aggregation){localStorage.setItem('exchange.candleAggregation',aggregation);this.forceUpdate();}},{key:'renderOptions',value:function renderOptions(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.select,value:this.getAggregation(),onChange:function onChange(event){return _this2.setAggregation(event.target.value);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'m1'},'1m'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'m5'},'5m'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'m15'},'15m'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'m30'},'30m'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'h1'},'1h'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'h4'},'4h'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'h6'},'6h'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('option',{value:'d1'},'1d')));}},{key:'renderChart',value:function renderChart(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Chart__["a" /* default */],{width:this.props.width,height:this.props.height,marketCode:this.props.market.code,market:this.props.market,aggregation:this.getAggregation(),options:this.renderOptions()});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container,style:{height:this.props.height}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.options}),this.renderChart());}}]);return Candle;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Candle.propTypes={width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ }),

/***/ 2182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2183);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.css","sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_3EXy19PsXDc8JN1g60dZ_x"
};

/***/ }),

/***/ 2184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_vis__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CandleStick__ = __webpack_require__(2185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_minBy__ = __webpack_require__(2189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_minBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_minBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_maxBy__ = __webpack_require__(2197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_maxBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_maxBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_css__ = __webpack_require__(2198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_range__ = __webpack_require__(1888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_range__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n    query getMarketStats($marketCode: ID!, $aggregation: MarketStatsAggregation!) {\n      marketStats(marketCode: $marketCode, aggregation: $aggregation) {\n        _id\n        open\n        close\n        high\n        low\n        volume\n        count\n        fromDate\n        toDate\n      }\n    }\n  '],['\n    query getMarketStats($marketCode: ID!, $aggregation: MarketStatsAggregation!) {\n      marketStats(marketCode: $marketCode, aggregation: $aggregation) {\n        _id\n        open\n        close\n        high\n        low\n        volume\n        count\n        fromDate\n        toDate\n      }\n    }\n  ']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var interval=10000;var Chart=(_dec=__WEBPACK_IMPORTED_MODULE_1_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject),{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Loading__["a" /* default */],null),options:{pollInterval:interval}}),_dec(_class=(_class2=function(_React$Component){_inherits(Chart,_React$Component);function Chart(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Chart);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Chart.__proto__||Object.getPrototypeOf(Chart)).call.apply(_ref,[this].concat(args))),_this),_this.state={point:{fromDate:null}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Chart,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){if(this.props.width!==nextProps.width)return true;if(this.props.height!==nextProps.height)return true;var currentPoint=this.state.point;var nextPoint=nextState.point;if(!!currentPoint!==!!nextPoint)return true;if(currentPoint.fromDate!==nextPoint.fromDate)return true;var currentLast=this.props.marketStats[this.props.marketStats.length-1];var nextLast=nextProps.marketStats[nextProps.marketStats.length-1];if(!currentLast)return false;if(!nextLast)return false;if(currentLast.fromDate!==nextLast.fromDate)return true;if(currentLast.count!==nextLast.count)return true;return false;}},{key:'getData',value:function getData(){var _this2=this;return this.props.marketStats.map(function(point,index){if(point.count===0){return{_id:point._id,x:index,fromDate:point.fromDate,toDate:point.toDate,volume:0,y:0};}var goesUp=point.open<=point.close;var x=index;return{_id:point._id,x:x,fromDate:point.fromDate,toDate:point.toDate,volume:point.volume,y:(point.open+point.close)/2,open:point.open,close:point.close,high:point.high,low:point.low,color:goesUp?'#008c76':'#f44336',opacity:_this2.state.point&&point.fromDate===_this2.state.point.fromDate?1:0.6};});}},{key:'getDomain',value:function getDomain(){var lowest=__WEBPACK_IMPORTED_MODULE_7_lodash_minBy___default()(this.props.marketStats,'low')||{low:0};var highest=__WEBPACK_IMPORTED_MODULE_8_lodash_maxBy___default()(this.props.marketStats,'high')||{high:0};var low=lowest.low;var high=highest.high;var diff=high-low;return[low-diff*0.2,high+diff*0.1];}},{key:'getHighestVolume',value:function getHighestVolume(){var highest=__WEBPACK_IMPORTED_MODULE_8_lodash_maxBy___default()(this.props.marketStats,'volume');return highest?highest.volume:0;}},{key:'onMouseOver',value:function onMouseOver(point){this.setState({point:point});}},{key:'onMouseLeave',value:function onMouseLeave(){this.setState({point:{fromDate:null}});}},{key:'formatX',value:function formatX(value){var fromDate=this.props.marketStats[value].fromDate;var format={m1:'HH:mm',m5:'HH:mm',m15:'HH:mm',m30:'HH:mm',h1:'LT',h4:'DD/MM',h6:'DD/MM',d1:'DD/MM'};return __WEBPACK_IMPORTED_MODULE_11_moment___default()(fromDate).format(format[this.props.aggregation]);}},{key:'formatY',value:function formatY(item){return Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(item,this.props.market.secondaryCurrency);}},{key:'getTickValues',value:function getTickValues(){var total=this.props.marketStats.length;var ticks=total/6;var step=Math.round(total/ticks);var first=Math.floor(total/10);var values=__WEBPACK_IMPORTED_MODULE_13_lodash_range___default()(first,total,step);return values;}},{key:'getRightPadding',value:function getRightPadding(highest){var formatted=this.formatY(highest);return formatted.length*8;}},{key:'renderStats',value:function renderStats(){var point=this.state.point;if(!point.fromDate)return;var _props$market=this.props.market,secondaryCurrency=_props$market.secondaryCurrency,mainCurrency=_props$market.mainCurrency;if(!point.volume){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_10__styles_css___default.a.point},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_11_moment___default()(point.fromDate).format('HH:mm DD-MM-YYYY')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Volume: ',Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(0,mainCurrency)));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_10__styles_css___default.a.point},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_11_moment___default()(point.fromDate).format('HH:mm DD-MM-YYYY')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Open: ',Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(point.open||0,secondaryCurrency)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Close: ',Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(point.close||0,secondaryCurrency)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'High: ',Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(point.high||0,secondaryCurrency)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Low: ',Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(point.low||0,secondaryCurrency)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'Volume: ',Object(__WEBPACK_IMPORTED_MODULE_12__helpers_formatCurrency__["a" /* default */])(point.volume||0,mainCurrency)));}},{key:'render',value:function render(){if(!this.props.marketStats)return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null);if(this.props.marketStats.length<2)return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null);var axisStyle={line:{stroke:'rgba(255, 255, 255, 0.4)'},text:{fill:'#fff',fontWeight:600}};var domain=this.getDomain();return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_10__styles_css___default.a.container},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_10__styles_css___default.a.head},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_10__styles_css___default.a.options},this.props.options),this.renderStats()),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["g" /* XYPlot */],{animation:true,margin:{left:0,right:this.getRightPadding(domain[1]),top:20,bottom:30},height:this.props.height-2-23,width:this.props.width,yDomain:domain,onMouseLeave:this.onMouseLeave},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CandleStick__["a" /* default */],{colorType:'literal',data:this.getData(),lowest:domain[0],highest:domain[1],highestVolume:this.getHighestVolume(),onValueMouseOver:this.onMouseOver}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["f" /* XAxis */],{tickValues:this.getTickValues(),tickFormat:this.formatX,style:axisStyle,tickSizeInner:0}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_vis__["h" /* YAxis */],{tickFormat:this.formatY,hideLine:true,style:axisStyle,tickSizeInner:0,orientation:'right'})));}}]);return Chart;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'onMouseOver',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onMouseOver'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'onMouseLeave',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'onMouseLeave'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'formatX',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'formatX'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'formatY',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'formatY'),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,'getTickValues',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'getTickValues'),_class2.prototype)),_class2))||_class);Chart.propTypes={marketStats:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,aggregation:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,options:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node};

/***/ }),

/***/ 2185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandlestickSeries; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_min__ = __webpack_require__(2186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_max__ = __webpack_require__(2187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_max___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_max__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_vis__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_mapValue__ = __webpack_require__(2188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_mapValue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_mapValue__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CandlestickSeries=function(_AbstractSeries){_inherits(CandlestickSeries,_AbstractSeries);function CandlestickSeries(){_classCallCheck(this,CandlestickSeries);return _possibleConstructorReturn(this,(CandlestickSeries.__proto__||Object.getPrototypeOf(CandlestickSeries)).apply(this,arguments));}_createClass(CandlestickSeries,[{key:'renderData',value:function renderData(){var _this2=this;var _props=this.props,data=_props.data,lowest=_props.lowest,highest=_props.highest,highestVolume=_props.highestVolume;if(!data){return null;}var xFunctor=this._getAttributeFunctor('x');var yFunctor=this._getAttributeFunctor('y');var strokeFunctor=this._getAttributeFunctor('stroke')||this._getAttributeFunctor('color');var fillFunctor=this._getAttributeFunctor('fill')||this._getAttributeFunctor('color');var opacityFunctor=this._getAttributeFunctor('opacity');var distance=Math.abs(xFunctor(data[1])-xFunctor(data[0]))*0.2;return data.map(function(d,i){var xTrans=xFunctor(d);var yHigh=yFunctor({x:d.x,y:d.high});var yOpen=yFunctor({x:d.x,y:d.open});var yClose=yFunctor({x:d.x,y:d.close});var yLow=yFunctor({x:d.x,y:d.low});var volumeStart=yFunctor({x:d.x,y:lowest});var volumeMax=(highest-lowest)*0.25;var volumeTop=lowest+__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_helpers_mapValue___default()(d.volume,0,highestVolume,0,volumeMax);var volumeHeight=volumeStart-yFunctor({x:d.x,y:volumeTop});var maxHeight=volumeStart-yFunctor({x:d.x,y:highest});var lineAttrs={stroke:strokeFunctor&&strokeFunctor(d)};var xWidth=distance*2;if(d.volume===0){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{transform:'translate('+xTrans+')',opacity:0,key:d.fromDate||i,onMouseOver:function onMouseOver(e){return _this2._valueMouseOverHandler(d,e);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{x:-xWidth,width:Math.max(xWidth*2,0),y:volumeStart-maxHeight,height:maxHeight,fill:'rgba(255, 255, 255, 0)'}));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{transform:'translate('+xTrans+')',opacity:opacityFunctor?opacityFunctor(d):1,key:d._id,onClick:function onClick(e){return _this2._valueClickHandler(d,e);},onMouseOver:function onMouseOver(e){return _this2._valueMouseOverHandler(d,e);},onMouseOut:function onMouseOut(e){return _this2._valueMouseOutHandler(d,e);}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('line',Object.assign({x1:0,x2:0,y1:yHigh,y2:yLow},lineAttrs)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{x:-xWidth,width:Math.max(xWidth*2,0),y:volumeStart-maxHeight,height:maxHeight,fill:'rgba(255, 255, 255, 0)'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{x:-xWidth,width:Math.max(xWidth*2,0),y:volumeStart-volumeHeight,height:volumeHeight,fill:'rgba(255, 255, 255, 0.1)'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect',{x:-xWidth,width:Math.max(xWidth*2,0),y:__WEBPACK_IMPORTED_MODULE_1_lodash_min___default()([yOpen,yClose]),height:__WEBPACK_IMPORTED_MODULE_2_lodash_max___default()([Math.abs(yOpen-yClose),2]),fill:fillFunctor&&fillFunctor(d)}));});}},{key:'render',value:function render(){var _props2=this.props,marginLeft=_props2.marginLeft,marginTop=_props2.marginTop;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('g',{ref:'container',transform:'translate('+marginLeft+','+marginTop+')'},this.renderData());}}]);return CandlestickSeries;}(__WEBPACK_IMPORTED_MODULE_3_react_vis__["a" /* AbstractSeries */]);

/***/ }),

/***/ 2186:
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(1792),
    baseLt = __webpack_require__(1890),
    identity = __webpack_require__(348);

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

module.exports = min;


/***/ }),

/***/ 2187:
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(1792),
    baseGt = __webpack_require__(1891),
    identity = __webpack_require__(348);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),

/***/ 2188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, inMin, inMax, outMin, outMax) {
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

/***/ }),

/***/ 2189:
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(1792),
    baseIteratee = __webpack_require__(1892),
    baseLt = __webpack_require__(1890);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ }),

/***/ 2190:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(2191),
    getMatchData = __webpack_require__(2192),
    matchesStrictComparable = __webpack_require__(1894);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 2191:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(363),
    baseIsEqual = __webpack_require__(592);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(1893),
    keys = __webpack_require__(86);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 2193:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(592),
    get = __webpack_require__(600),
    hasIn = __webpack_require__(599),
    isKey = __webpack_require__(591),
    isStrictComparable = __webpack_require__(1893),
    matchesStrictComparable = __webpack_require__(1894),
    toKey = __webpack_require__(164);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 2194:
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(2195),
    basePropertyDeep = __webpack_require__(2196),
    isKey = __webpack_require__(591),
    toKey = __webpack_require__(164);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 2195:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 2196:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(225);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 2197:
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(1792),
    baseGt = __webpack_require__(1891),
    baseIteratee = __webpack_require__(1892);

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;


/***/ }),

/***/ 2198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2199);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, ".MgbDHivgp0K15jDfSztwj{position:relative}._1ZhrPch4Y9X7GSYbreo13o{border-bottom:2px solid #202228;font-weight:700;font-size:11px;display:-ms-flexbox;display:flex;height:23px}._1hk8o_8aSd2iE9X_MDe9i2{padding:0 10px;-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}._2gGni7RbK-jdcZ5qyLsQM7{padding:5px 10px;font-size:11px}._2gGni7RbK-jdcZ5qyLsQM7>div{display:inline-block;margin-left:12px}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/Charts/Candle/Chart/styles.css"],"names":[],"mappings":"AAAA,uBACE,iBAAmB,CACpB,AAED,yBACE,gCAAiC,AACjC,gBAAkB,AAClB,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,WAAa,CACd,AAED,yBACE,eAAkB,AAClB,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AAED,yBACE,iBAAkB,AAClB,cAAgB,CACjB,AAED,6BACE,qBAAsB,AACtB,gBAAkB,CACnB","file":"styles.css","sourcesContent":[":local(.container) {\n  position: relative;\n}\n\n:local(.head) {\n  border-bottom: 2px solid #202228;\n  font-weight: bold;\n  font-size: 11px;\n  display: -ms-flexbox;\n  display: flex;\n  height: 23px;\n}\n\n:local(.options) {\n  padding: 0px 10px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n:local(.point) {\n  padding: 5px 10px;\n  font-size: 11px;\n}\n\n:local(.point) > div {\n  display: inline-block;\n  margin-left: 12px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "MgbDHivgp0K15jDfSztwj",
	"head": "_1ZhrPch4Y9X7GSYbreo13o",
	"options": "_1hk8o_8aSd2iE9X_MDe9i2",
	"point": "_2gGni7RbK-jdcZ5qyLsQM7"
};

/***/ }),

/***/ 2200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2201);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._19MGnALvkSPGxUNMFAkUKz{font-size:12px;-ms-flex:1 1;flex:1 1}._2YVlLbCOppKVl4i67DfyC9{border-bottom:2px solid #202228;font-weight:700;display:-ms-flexbox;display:flex}._2YVlLbCOppKVl4i67DfyC9>div{padding:2px;-ms-flex:1 1;flex:1 1;text-align:right}._2YVlLbCOppKVl4i67DfyC9>div:first-child{padding-left:10px;text-align:left}._2YVlLbCOppKVl4i67DfyC9>div:last-child{padding-right:10px}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/History/styles.css"],"names":[],"mappings":"AAAA,yBACE,eAAgB,AAChB,aAAc,AACV,QAAU,CACf,AAED,yBACE,gCAAiC,AACjC,gBAAkB,AAClB,oBAAqB,AACrB,YAAc,CACf,AAED,6BACE,YAAa,AACb,aAAc,AACV,SAAU,AACd,gBAAkB,CACnB,AAED,yCACE,kBAAmB,AACnB,eAAiB,CAClB,AAED,wCACE,kBAAoB,CACrB","file":"styles.css","sourcesContent":[":local(.container) {\n  font-size: 12px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n:local(.header) {\n  border-bottom: 2px solid #202228;\n  font-weight: bold;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.header) > div {\n  padding: 2px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  text-align: right;\n}\n\n:local(.header) > div:first-child {\n  padding-left: 10px;\n  text-align: left;\n}\n\n:local(.header) > div:last-child {\n  padding-right: 10px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_19MGnALvkSPGxUNMFAkUKz",
	"header": "_2YVlLbCOppKVl4i67DfyC9"
};

/***/ }),

/***/ 2202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_reverse__ = __webpack_require__(2205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_reverse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_reverse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_cloneDeep__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_cloneDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_arrow_upward__ = __webpack_require__(2206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_arrow_upward___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_arrow_upward__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md_arrow_downward__ = __webpack_require__(2207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md_arrow_downward___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md_arrow_downward__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_AmountOpacity__ = __webpack_require__(1791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_document_title__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_document_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_document_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__query__ = __webpack_require__(1895);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Data=(_dec=__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_14__query__["a" /* default */],{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Loading__["a" /* default */],null)}),_dec(_class=function(_React$Component){_inherits(Data,_React$Component);function Data(){_classCallCheck(this,Data);return _possibleConstructorReturn(this,(Data.__proto__||Object.getPrototypeOf(Data)).apply(this,arguments));}_createClass(Data,[{key:'getTitle',value:function getTitle(){var lastTrade=this.props.history[0];if(!lastTrade)return this.props.market.code+' \xB7 Orionx';var secondaryCurrency=this.props.market.secondaryCurrency;var price=Object(__WEBPACK_IMPORTED_MODULE_13__helpers_formatCurrency__["a" /* default */])(lastTrade.price,secondaryCurrency,{long:true});return'$'+price+' \xB7 '+this.props.market.code+' \xB7 Orionx';}},{key:'renderItems',value:function renderItems(){var market=this.props.market;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;var lastPrice=0;var up=true;var history=__WEBPACK_IMPORTED_MODULE_5_lodash_reverse___default()(__WEBPACK_IMPORTED_MODULE_6_lodash_cloneDeep___default()(this.props.history));var items=history.map(function(trade){if(lastPrice>trade.price){up=false;}else if(lastPrice<trade.price){up=true;}lastPrice=trade.price;var Icon=up?__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_arrow_upward___default.a:__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_md_arrow_downward___default.a;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:trade._id,className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.trade},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.amount+' amount'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_AmountOpacity__["a" /* default */],{value:trade.amount,currency:mainCurrency})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:up?__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.priceUp:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.priceDown},Object(__WEBPACK_IMPORTED_MODULE_13__helpers_formatCurrency__["a" /* default */])(trade.price,secondaryCurrency,{long:true}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon,null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.date},__WEBPACK_IMPORTED_MODULE_4_moment___default()(trade.date).format('HH:mm:ss')));});return __WEBPACK_IMPORTED_MODULE_5_lodash_reverse___default()(items);}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.container,style:{height:this.props.height-41-20-2}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_document_title___default.a,{title:this.getTitle()}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default.a,{transitionName:'orders-list',transitionEnterTimeout:1000,transitionLeaveTimeout:1000},this.renderItems()));}}]);return Data;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component))||_class);Data.propTypes={history:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number};

/***/ }),

/***/ 2203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2204);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._1q5naDq8VP4g9egTSdphxx{overflow:auto}._1yY3jMwY2C21yUA0uHL1Qw{display:-ms-flexbox;display:flex}._1yY3jMwY2C21yUA0uHL1Qw>div{padding:2px;-ms-flex:1 1;flex:1 1;text-align:right}._1yY3jMwY2C21yUA0uHL1Qw>div:first-child{padding-left:10px;text-align:left}._1yY3jMwY2C21yUA0uHL1Qw>div:last-child{padding-right:10px}._2MF3uNRmRIQSEjli_WQPZU{font-weight:700}._2MF3uNRmRIQSEjli_WQPZU svg{position:relative;top:-1px;margin-left:2px;margin-right:-2.5px}._3sLSzliTWPh_t9JyYrnFdm{color:#008c76}._3XmuKvJzAlQfzcMDhKpPFw{color:#f44336}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/History/Data/styles.css"],"names":[],"mappings":"AAAA,yBACE,aAAe,CAChB,AAED,yBACE,oBAAqB,AACrB,YAAc,CACf,AAED,6BACE,YAAa,AACb,aAAc,AACV,SAAU,AACd,gBAAkB,CACnB,AAED,yCACE,kBAAmB,AACnB,eAAiB,CAClB,AAED,wCACE,kBAAoB,CACrB,AAED,yBACE,eAAkB,CACnB,AAED,6BACE,kBAAmB,AACnB,SAAU,AACV,gBAAiB,AACjB,mBAAqB,CACtB,AAED,yBAEE,aAAe,CAChB,AAED,yBAEE,aAAe,CAChB","file":"styles.css","sourcesContent":[":local(.container) {\n  overflow: auto;\n}\n\n:local(.trade) {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.trade) > div {\n  padding: 2px;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  text-align: right;\n}\n\n:local(.trade) > div:first-child {\n  padding-left: 10px;\n  text-align: left;\n}\n\n:local(.trade) > div:last-child {\n  padding-right: 10px;\n}\n\n:local(.price) {\n  font-weight: bold;\n}\n\n:local(.price) svg {\n  position: relative;\n  top: -1px;\n  margin-left: 2px;\n  margin-right: -2.5px;\n}\n\n:local(.priceUp) {\n  composes: price;\n  color: #008c76;\n}\n\n:local(.priceDown) {\n  composes: price;\n  color: #f44336;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_1q5naDq8VP4g9egTSdphxx",
	"trade": "_1yY3jMwY2C21yUA0uHL1Qw",
	"price": "_2MF3uNRmRIQSEjli_WQPZU",
	"priceUp": "_3sLSzliTWPh_t9JyYrnFdm _2MF3uNRmRIQSEjli_WQPZU",
	"priceDown": "_3XmuKvJzAlQfzcMDhKpPFw _2MF3uNRmRIQSEjli_WQPZU"
};

/***/ }),

/***/ 2205:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;


/***/ }),

/***/ 2206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdArrowUpward = function MdArrowUpward(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm6.6 20l13.4-13.4 13.4 13.4-2.5 2.3-9.3-9.3v20.4h-3.2v-20.4l-9.4 9.3z' })
        )
    );
};

exports.default = MdArrowUpward;
module.exports = exports['default'];

/***/ }),

/***/ 2207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdArrowDownward = function MdArrowDownward(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.4 20l-13.4 13.4-13.4-13.4 2.5-2.3 9.3 9.3v-20.4h3.2v20.4l9.4-9.3z' })
        )
    );
};

exports.default = MdArrowDownward;
module.exports = exports['default'];

/***/ }),

/***/ 2208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Root_getEnv__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__query__ = __webpack_require__(1895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_desc,_value,_class2;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var RealTime=Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"])(_class=(_class2=function(_React$Component){_inherits(RealTime,_React$Component);function RealTime(){_classCallCheck(this,RealTime);return _possibleConstructorReturn(this,(RealTime.__proto__||Object.getPrototypeOf(RealTime)).apply(this,arguments));}_createClass(RealTime,[{key:'componentDidMount',value:function componentDidMount(){var env=Object(__WEBPACK_IMPORTED_MODULE_1__Root_getEnv__["a" /* default */])();this.channel=global.pusher.subscribe(env+'-'+this.props.marketCode+'-trades');this.channel.bind('new-trade',this.newTrade);}},{key:'componentWillUnmount',value:function componentWillUnmount(){var env=Object(__WEBPACK_IMPORTED_MODULE_1__Root_getEnv__["a" /* default */])();this.channel.unbind('new-trade',this.newTrade);global.pusher.unsubscribe(env+'-'+this.props.marketCode+'-trades');}},{key:'newTrade',value:function newTrade(_newTrade){console.log('new trade',_newTrade);var data=this.props.client.readQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode}});// Add our todo from the mutation to the end.
data.history.unshift({_id:_newTrade._id,amount:_newTrade.amount,date:new Date(_newTrade.date),price:_newTrade.price,__typename:'MarketTrade'});// Write our data back to the cache.
this.props.client.writeQuery({query:__WEBPACK_IMPORTED_MODULE_4__query__["a" /* default */],variables:{marketCode:this.props.marketCode},data:data});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null);}}]);return RealTime;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'newTrade',[__WEBPACK_IMPORTED_MODULE_3_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'newTrade'),_class2.prototype)),_class2))||_class;RealTime.propTypes={client:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,marketCode:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ }),

/***/ 2209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Open; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(2210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Cancel__ = __webpack_require__(2212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Details__ = __webpack_require__(1896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__ = __webpack_require__(1791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_virtualized__ = __webpack_require__(1897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm__ = __webpack_require__(1796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n    query myOrders($marketCode: ID!) {\n      orders(marketCode: $marketCode, onlyOpen: true, limit: 0) {\n        totalCount\n        items {\n          _id\n          sell\n          type\n          amount\n          amountToHold\n          secondaryAmount\n          filled\n          secondaryFilled\n          limitPrice\n          createdAt\n          isStop\n          status\n          stopPriceUp\n          stopPriceDown\n          market {\n            name\n            code\n            mainCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n            secondaryCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n          }\n        }\n      }\n    }\n  '],['\n    query myOrders($marketCode: ID!) {\n      orders(marketCode: $marketCode, onlyOpen: true, limit: 0) {\n        totalCount\n        items {\n          _id\n          sell\n          type\n          amount\n          amountToHold\n          secondaryAmount\n          filled\n          secondaryFilled\n          limitPrice\n          createdAt\n          isStop\n          status\n          stopPriceUp\n          stopPriceDown\n          market {\n            name\n            code\n            mainCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n            secondaryCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n          }\n        }\n      }\n    }\n  ']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var filledMinWidth=580;var dateMinWidth=420;var Open=(_dec=__WEBPACK_IMPORTED_MODULE_2_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject),{loading:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Loading__["a" /* default */],null),options:{pollInterval:5000}}),_dec(_class=(_class2=function(_React$Component){_inherits(Open,_React$Component);function Open(){_classCallCheck(this,Open);return _possibleConstructorReturn(this,(Open.__proto__||Object.getPrototypeOf(Open)).apply(this,arguments));}_createClass(Open,[{key:'componentDidMount',value:function componentDidMount(){this.props.renderHeader(this.renderHeader());}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){if(this.props.width!==prevProps.width){this.props.renderHeader(this.renderHeader());}}},{key:'renderHeader',value:function renderHeader(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.thead},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.sell},'Tipo'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.price},'Precio'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.amount},'Cantidad'),this.props.width<filledMinWidth?null:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.filled},'Completado'),this.props.width<dateMinWidth?null:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.date},'Fecha'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.actions}));}},{key:'renderPrice',value:function renderPrice(order){var market=order.market;var secondaryCurrency=market.secondaryCurrency;if(order.type==='market'){return'Mercado';}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',null,Object(__WEBPACK_IMPORTED_MODULE_7__helpers_formatCurrency__["a" /* default */])(order.limitPrice,secondaryCurrency,{code:true,long:true}));}},{key:'getType',value:function getType(order){var action=order.sell?'Venta':'Compra';var stop=order.isStop?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm___default.a,null):null;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.typeInner},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.action},action),' ',stop);}},{key:'renderFilled',value:function renderFilled(order){if(this.props.width<filledMinWidth)return;if(order.status==='stop')return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.filled},'-');var market=order.market;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;var text=order.secondaryAmount?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__["a" /* default */],{value:order.secondaryFilled||0,currency:secondaryCurrency,code:true}):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__["a" /* default */],{value:order.filled||0,currency:mainCurrency,code:true});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.filled},text);}},{key:'renderDate',value:function renderDate(order){if(this.props.width<dateMinWidth)return;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.date},__WEBPACK_IMPORTED_MODULE_5_moment___default()(order.createdAt).fromNow(true));}},{key:'renderOrder',value:function renderOrder(_ref){var key=_ref.key,index=_ref.index,style=_ref.style;var order=this.props.orders.items[index];var market=order.market;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:key,className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.tr,style:style},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.sell},this.getType(order)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.price},this.renderPrice(order)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.amount},order.secondaryAmount?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__["a" /* default */],{value:order.secondaryAmount,currency:secondaryCurrency,code:true}):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__["a" /* default */],{value:order.amount||0,currency:mainCurrency,code:true})),this.renderFilled(order),this.renderDate(order),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.actions},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Details__["a" /* default */],{order:order}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Cancel__["a" /* default */],{order:order})));}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_virtualized__["a" /* List */],{width:this.props.width-2,height:this.props.height-41-18-4,rowCount:this.props.orders.items.length,rowHeight:20,rowRenderer:this.renderOrder});}}]);return Open;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'renderOrder',[__WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'renderOrder'),_class2.prototype)),_class2))||_class);Open.propTypes={orders:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,renderHeader:__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func};

/***/ }),

/***/ 2210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2211);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3TJo5h__DpBSfpe_IdGpf-{display:-ms-flexbox;display:flex}._1T17etGqhP3a4InZcunNP3{border-bottom:2px solid #202228;font-weight:700}._2pVBdIj5UCJY2nrGIMDe8w{-ms-flex:1 1;flex:1 1;padding:2px;text-align:right}.mfmuLjkMmlOpgcP64Lk2w{padding-left:10px;width:63px;-ms-flex:none;flex:none;text-align:left}._3Vo9KIx7TteJXTmC-f6yyN{width:90px;-ms-flex:none;flex:none}._3oYYLPcnysKbsKneaw-sGc{width:40px;-ms-flex:none;flex:none;padding-right:10px}.Qzt38j9zA02RX2qDypK0_ ._3oYYLPcnysKbsKneaw-sGc{cursor:pointer;z-index:10}.Qzt38j9zA02RX2qDypK0_ ._3oYYLPcnysKbsKneaw-sGc:hover{opacity:.9}._2ogZWTF8yW42SHX1Ji5XTY{display:-ms-flexbox;display:flex;padding-right:4px}._2ogZWTF8yW42SHX1Ji5XTY svg{position:relative;top:.5px}._3BsuuJ3ITsdZR5bLOFJ0yt{-ms-flex:1 1;flex:1 1}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/MyOrders/Open/styles.css"],"names":[],"mappings":"AAAA,yBACE,oBAAqB,AACrB,YAAc,CACf,AAED,yBAEE,gCAAiC,AACjC,eAAkB,CACnB,AAYD,yBACE,aAAc,AACV,SAAU,AACd,YAAa,AACb,gBAAkB,CACnB,AAED,uBACE,kBAAmB,AAEnB,WAAY,AACZ,cAAe,AACX,UAAW,AACf,eAAiB,CAClB,AAcD,yBAEE,WAAY,AACZ,cAAe,AACX,SAAW,CAChB,AAED,yBAEE,WAAY,AACZ,cAAe,AACX,UAAW,AACf,kBAAoB,CACrB,AAED,gDACE,eAAgB,AAChB,UAAY,CACb,AAED,sDACE,UAAa,CACd,AAED,yBACE,oBAAqB,AACrB,aAAc,AACd,iBAAmB,CACpB,AAED,6BACE,kBAAmB,AACnB,QAAW,CACZ,AAED,yBACE,aAAc,AACV,QAAU,CACf","file":"styles.css","sourcesContent":[":local(.tableRow) {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.thead) {\n  composes: tableRow;\n  border-bottom: 2px solid #202228;\n  font-weight: bold;\n}\n\n:local(.tr) {\n  composes: tableRow;\n}\n\n:local(.thead) :local(.tableD) {\n}\n\n:local(.tr) :local(.tableD) {\n}\n\n:local(.tableD) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  padding: 2px;\n  text-align: right;\n}\n\n:local(.sell) {\n  padding-left: 10px;\n  composes: tableD;\n  width: 63px;\n  -ms-flex: none;\n      flex: none;\n  text-align: left;\n}\n\n:local(.price) {\n  composes: tableD;\n}\n\n:local(.amount) {\n  composes: tableD;\n}\n\n:local(.filled) {\n  composes: tableD;\n}\n\n:local(.date) {\n  composes: tableD;\n  width: 90px;\n  -ms-flex: none;\n      flex: none;\n}\n\n:local(.actions) {\n  composes: tableD;\n  width: 40px;\n  -ms-flex: none;\n      flex: none;\n  padding-right: 10px;\n}\n\n:local(.tr) :local(.actions) {\n  cursor: pointer;\n  z-index: 10;\n}\n\n:local(.tr) :local(.actions):hover {\n  opacity: 0.9;\n}\n\n:local(.typeInner) {\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 4px;\n}\n\n:local(.typeInner) svg {\n  position: relative;\n  top: 0.5px;\n}\n\n:local(.action) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"tableRow": "_3TJo5h__DpBSfpe_IdGpf-",
	"thead": "_1T17etGqhP3a4InZcunNP3 _3TJo5h__DpBSfpe_IdGpf-",
	"tr": "Qzt38j9zA02RX2qDypK0_ _3TJo5h__DpBSfpe_IdGpf-",
	"tableD": "_2pVBdIj5UCJY2nrGIMDe8w",
	"sell": "mfmuLjkMmlOpgcP64Lk2w _2pVBdIj5UCJY2nrGIMDe8w",
	"price": "_1rMcnmVtsiEAsnYZPfSba- _2pVBdIj5UCJY2nrGIMDe8w",
	"amount": "_2dgw4OU7M848hX3jVwaHIx _2pVBdIj5UCJY2nrGIMDe8w",
	"filled": "Y9xcT_3PC6uBYQiCstn0W _2pVBdIj5UCJY2nrGIMDe8w",
	"date": "_3Vo9KIx7TteJXTmC-f6yyN _2pVBdIj5UCJY2nrGIMDe8w",
	"actions": "_3oYYLPcnysKbsKneaw-sGc _2pVBdIj5UCJY2nrGIMDe8w",
	"typeInner": "_2ogZWTF8yW42SHX1Ji5XTY",
	"action": "_3BsuuJ3ITsdZR5bLOFJ0yt"
};

/***/ }),

/***/ 2212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cancel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_clear__ = __webpack_require__(1849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_clear___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_clear__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withMutation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withMutation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withMutation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_withConfirmationDialog__ = __webpack_require__(1705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_decorators_withMessage__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_decorators_withMessage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_decorators_withMessage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_formatCurrency__ = __webpack_require__(159);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n  mutation cancelOrder($orderId: ID) {\n    cancelOrder(orderId: $orderId) {\n      _id\n    }\n  }\n'],['\n  mutation cancelOrder($orderId: ID) {\n    cancelOrder(orderId: $orderId) {\n      _id\n    }\n  }\n']);function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Cancel=(_dec=__WEBPACK_IMPORTED_MODULE_5_react_apollo_decorators_lib_withMutation___default()(__WEBPACK_IMPORTED_MODULE_6_graphql_tag___default()(_templateObject)),_dec(_class=__WEBPACK_IMPORTED_MODULE_10_orionsoft_parts_lib_decorators_withMessage___default()(_class=Object(__WEBPACK_IMPORTED_MODULE_8__helpers_withConfirmationDialog__["a" /* default */])(_class=(_class2=function(_React$Component){_inherits(Cancel,_React$Component);function Cancel(){_classCallCheck(this,Cancel);return _possibleConstructorReturn(this,(Cancel.__proto__||Object.getPrototypeOf(Cancel)).apply(this,arguments));}_createClass(Cancel,[{key:'getAmount',value:function getAmount(){var order=this.props.order;var market=order.market;var secondaryCurrency=market.secondaryCurrency,mainCurrency=market.mainCurrency;var opts={code:true};return order.secondaryAmount?Object(__WEBPACK_IMPORTED_MODULE_11__helpers_formatCurrency__["a" /* default */])(order.secondaryAmount,secondaryCurrency,opts):Object(__WEBPACK_IMPORTED_MODULE_11__helpers_formatCurrency__["a" /* default */])(order.amount||0,mainCurrency,opts);}},{key:'getPrice',value:function getPrice(){var order=this.props.order;var market=order.market;var secondaryCurrency=market.secondaryCurrency;if(order.type==='market'){return'Mercado';}return Object(__WEBPACK_IMPORTED_MODULE_11__helpers_formatCurrency__["a" /* default */])(order.limitPrice,secondaryCurrency,{code:true});}},{key:'getType',value:function getType(){var order=this.props.order;var text=order.sell?'Venta':'Compra';if(!order.isStop)return text;return text+' (stop)';}},{key:'cancel',value:function(){var _ref=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){var order,market;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.setState({loading:true,errorMessages:null});_context.prev=1;order=this.props.order;if(!(order.type==='market'&&!order.isStop)){_context.next=5;break;}throw new Error('No se puede cancelar una orden de mercado... de hecho, ya se debería haber ejecutado. Contactanos para solucionar esto');case 5:market=order.market;_context.next=8;return this.props.confirm({title:'Cancelar orden',description:'Confirma que quieres cancelar esta orden de '+(this.props.sell?'venta':'compra')+' de '+this.getAmount()+'.',disableTwoFactor:true,values:[{label:'Mercado',value:market.name},{label:'Tipo',value:this.getType()},{label:'Precio límite',value:this.getPrice()},{label:'Cantidad',value:this.getAmount()}]});case 8:_context.next=10;return this.props.cancelOrder({orderId:this.props.order._id},{refetchQueries:['myOrders']});case 10:this.props.showMessage('La orden fue cancelada');_context.next=16;break;case 13:_context.prev=13;_context.t0=_context['catch'](1);if(_context.t0.message!=='[dialog-cancel]'){console.log('Error:',_context.t0);this.props.showMessage(_context.t0.message,{level:'error'});}case 16:this.setState({loading:false});case 17:case'end':return _context.stop();}}},_callee,this,[[1,13]]);}));function cancel(){return _ref.apply(this,arguments);}return cancel;}()},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container,onClick:this.cancel},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_orionsoft_parts_lib_components_Tooltip___default.a,{content:'Cancelar orden',position:'left'},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_md_clear___default.a,{size:12,style:{color:'#fff'}})));}}]);return Cancel;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'cancel',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'cancel'),_class2.prototype)),_class2))||_class)||_class)||_class);Cancel.propTypes={showMessage:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,cancelOrder:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,order:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object};

/***/ }),

/***/ 2213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2214);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._2DDbtc-AdHqZ9ORIjc_qUH{display:inline-block;cursor:pointer;z-index:10}._2DDbtc-AdHqZ9ORIjc_qUH:hover{opacity:.9}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/MyOrders/Open/Cancel/styles.css"],"names":[],"mappings":"AAAA,yBACE,qBAAsB,AAItB,eAAgB,AAChB,UAAY,CAJb,AAOD,+BACE,UAAa,CACd","file":"styles.css","sourcesContent":[":local(.container) {\n  display: inline-block;\n}\n\n:local(.container) {\n  cursor: pointer;\n  z-index: 10;\n}\n\n:local(.container):hover {\n  opacity: 0.9;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_2DDbtc-AdHqZ9ORIjc_qUH"
};

/***/ }),

/***/ 2215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2216);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._17KoJXwbKLF7kT-GGaazHD{display:inline-block;margin-right:5px;cursor:pointer;z-index:10}._17KoJXwbKLF7kT-GGaazHD:hover{opacity:.9}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/MyOrders/Open/Details/styles.css"],"names":[],"mappings":"AAAA,yBACE,qBAAsB,AACtB,iBAAkB,AAIlB,eAAgB,AAChB,UAAY,CAJb,AAOD,+BACE,UAAa,CACd","file":"styles.css","sourcesContent":[":local(.container) {\n  display: inline-block;\n  margin-right: 5px;\n}\n\n:local(.container) {\n  cursor: pointer;\n  z-index: 10;\n}\n\n:local(.container):hover {\n  opacity: 0.9;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_17KoJXwbKLF7kT-GGaazHD"
};

/***/ }),

/***/ 2217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(47);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdReceipt = function MdReceipt(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 36.6v-33.2l2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5 2.5 2.5 2.5-2.5v33.2l-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5-2.5 2.5-2.5-2.5z m25-21.6v-3.4h-20v3.4h20z m0 6.6v-3.2h-20v3.2h20z m0 6.8v-3.4h-20v3.4h20z' })
        )
    );
};

exports.default = MdReceipt;
module.exports = exports['default'];

/***/ }),

/***/ 2218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrowKeyStepper__ = __webpack_require__(1898);
/* unused harmony reexport default */
/* unused harmony reexport ArrowKeyStepper */






/***/ }),

/***/ 2219:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2220);
module.exports = __webpack_require__(25).Object.getPrototypeOf;


/***/ }),

/***/ 2220:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(165);
var $getPrototypeOf = __webpack_require__(595);

__webpack_require__(354)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 2221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

/***/ }),

/***/ 2222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var babelPluginFlowReactPropTypes_proptype_VisibleCellRange = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_VisibleCellRange || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellSizeGetter = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellSizeGetter || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(2).any;

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */

var CellSizeAndPositionManager = function () {

  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  function CellSizeAndPositionManager(_ref) {
    var _ref$batchAllCells = _ref.batchAllCells,
        batchAllCells = _ref$batchAllCells === undefined ? false : _ref$batchAllCells,
        cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellSizeAndPositionManager);

    this._cellSizeAndPositionData = {};
    this._lastMeasuredIndex = -1;
    this._lastBatchedIndex = -1;

    this._batchAllCells = batchAllCells;
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  // Used in deferred mode to track which cells have been queued for measurement.

  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment() {
      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: 0
            };

            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: _size
            };

            _offset += _size;

            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
      // eg we can't know a row's height without measuring the height of all columns within that row.
      if (this._batchAllCells) {
        return {
          start: 0,
          stop: this._cellCount - 1
        };
      }

      var containerSize = params.containerSize,
          offset = params.offset;


      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var _currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (_currentOffset === offset) {
          return middle;
        } else if (_currentOffset < offset) {
          low = middle + 1;
        } else if (_currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (CellSizeAndPositionManager);

/***/ }),

/***/ 2223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caf; });


// Properly handle server-side rendering.
var win = void 0;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
var caf = cancel;

/***/ }),

/***/ 2224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionDataAndUpdateScrollOffset;


function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/**
 * Helper method that determines when to recalculate row or column metadata.
 */

/***/ }),

/***/ 2225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateScrollIndexHelper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScalingCellSizeAndPositionManager_js__ = __webpack_require__(1851);
var babelPluginFlowReactPropTypes_proptype_CellSize = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_CellSize || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Alignment = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_Alignment || __webpack_require__(2).any;



/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),

/***/ 2226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SCROLL_DIRECTION_BACKWARD */
/* unused harmony export SCROLL_DIRECTION_FORWARD */
/* unused harmony export SCROLL_DIRECTION_HORIZONTAL */
/* unused harmony export SCROLL_DIRECTION_VERTICAL */
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultOverscanIndicesGetter;
var babelPluginFlowReactPropTypes_proptype_OverscanIndices = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_OverscanIndices || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams = __webpack_require__(1706).babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetterParams || __webpack_require__(2).any;

var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}

/***/ }),

/***/ 2227:
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_ScrollIndices", {
  value: {
    scrollToColumn: __webpack_require__(2).number.isRequired,
    scrollToRow: __webpack_require__(2).number.isRequired
  },
  configurable: true
});

/***/ }),

/***/ 2228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AutoSizer__ = __webpack_require__(1903);
/* unused harmony reexport default */
/* unused harmony reexport AutoSizer */






/***/ }),

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Size", {
  value: {
    height: __webpack_require__(2).number.isRequired,
    width: __webpack_require__(2).number.isRequired
  },
  configurable: true
});

/***/ }),

/***/ 2230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDetectElementResize;
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = this;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles() {
    if (!document.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles();
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),

/***/ 2231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CellMeasurerCache_js__ = __webpack_require__(1905);









/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CellMeasurer, _React$PureComponent);

  function CellMeasurer() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = CellMeasurer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CellMeasurer)).call.apply(_ref, [this].concat(args))), _this), _this._measure = function () {
      var _this$props = _this.props,
          cache = _this$props.cache,
          _this$props$columnInd = _this$props.columnIndex,
          columnIndex = _this$props$columnInd === undefined ? 0 : _this$props$columnInd,
          parent = _this$props.parent,
          _this$props$rowIndex = _this$props.rowIndex,
          rowIndex = _this$props$rowIndex === undefined ? _this.props.index || 0 : _this$props$rowIndex;

      var _this$_getCellMeasure = _this._getCellMeasurements(),
          height = _this$_getCellMeasure.height,
          width = _this$_getCellMeasure.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CellMeasurer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return typeof children === 'function' ? children({ measure: this._measure }) : children;
    }
  }, {
    key: '_getCellMeasurements',
    value: function _getCellMeasurements() {
      var cache = this.props.cache;


      var node = Object(__WEBPACK_IMPORTED_MODULE_6_react_dom__["findDOMNode"])(this);

      // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node instanceof HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height;

        // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.
        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }
        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }

        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth);

        // Reset after measuring to avoid breaking styles; see #660
        if (styleWidth) {
          node.style.width = styleWidth;
        }
        if (styleHeight) {
          node.style.height = styleHeight;
        }

        return { height: height, width: width };
      } else {
        return { height: 0, width: 0 };
      }
    }
  }, {
    key: '_maybeMeasureCell',
    value: function _maybeMeasureCell() {
      var _props = this.props,
          cache = _props.cache,
          _props$columnIndex = _props.columnIndex,
          columnIndex = _props$columnIndex === undefined ? 0 : _props$columnIndex,
          parent = _props.parent,
          _props$rowIndex = _props.rowIndex,
          rowIndex = _props$rowIndex === undefined ? this.props.index || 0 : _props$rowIndex;


      if (!cache.has(rowIndex, columnIndex)) {
        var _getCellMeasurements2 = this._getCellMeasurements(),
            height = _getCellMeasurements2.height,
            width = _getCellMeasurements2.width;

        cache.set(rowIndex, columnIndex, width, height);

        // If size has changed, let Grid know to re-render.
        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);

  return CellMeasurer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

// Used for DEV mode warning check


CellMeasurer.__internalCellMeasurerFlag = false;
CellMeasurer.propTypes = {
  cache: typeof __WEBPACK_IMPORTED_MODULE_7__CellMeasurerCache_js__["a" /* default */] === 'function' ? __webpack_require__(2).instanceOf(__WEBPACK_IMPORTED_MODULE_7__CellMeasurerCache_js__["a" /* default */]).isRequired : __webpack_require__(2).any.isRequired,
  children: __webpack_require__(2).oneOfType([__webpack_require__(2).func, typeof (__WEBPACK_IMPORTED_MODULE_5_react___default.a.Element == null ? {} : __WEBPACK_IMPORTED_MODULE_5_react___default.a.Element) === 'function' ? __webpack_require__(2).instanceOf(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Element == null ? {} : __WEBPACK_IMPORTED_MODULE_5_react___default.a.Element) : __webpack_require__(2).any]).isRequired,
  columnIndex: __webpack_require__(2).number,
  index: __webpack_require__(2).number,
  parent: __webpack_require__(2).shape({
    invalidateCellSizeAfterRender: __webpack_require__(2).func,
    recomputeGridSize: __webpack_require__(2).func
  }).isRequired,
  rowIndex: __webpack_require__(2).number
};
/* harmony default export */ __webpack_exports__["a"] = (CellMeasurer);
if (false) {
  CellMeasurer.__internalCellMeasurerFlag = true;
}

/***/ }),

/***/ 2232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collection__ = __webpack_require__(2233);
/* unused harmony reexport Collection */


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__Collection__["a" /* default */]);


/***/ }),

/***/ 2233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CollectionView__ = __webpack_require__(2234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_calculateSizeAndPositionData__ = __webpack_require__(2235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__ = __webpack_require__(2238);













/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var babelPluginFlowReactPropTypes_proptype_SizeInfo = __webpack_require__(1747).babelPluginFlowReactPropTypes_proptype_SizeInfo || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_ScrollPosition = __webpack_require__(1747).babelPluginFlowReactPropTypes_proptype_ScrollPosition || __webpack_require__(2).any;

var Collection = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Collection, _PureComponent);

  function Collection(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Collection);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Collection.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Collection)).call(this, props, context));

    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = [];

    // Cell cache during scroll (for perforamnce)
    _this._cellCache = [];

    _this._isScrollingChange = _this._isScrollingChange.bind(_this);
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Collection, [{
    key: 'forceUpdate',
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }

    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }

    /** React lifecycle methods */

  }, {
    key: 'render',
    value: function render() {
      var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__CollectionView__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }

    /** CellLayoutManager interface */

  }, {
    key: 'calculateSizeAndPositionData',
    value: function calculateSizeAndPositionData() {
      var _props = this.props,
          cellCount = _props.cellCount,
          cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter,
          sectionSize = _props.sectionSize;


      var data = Object(__WEBPACK_IMPORTED_MODULE_10__utils_calculateSizeAndPositionData__["a" /* default */])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }

    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: 'getLastRenderedIndices',
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }

    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: 'getScrollPositionForCell',
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;


      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];

        scrollLeft = Object(__WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });

        scrollTop = Object(__WEBPACK_IMPORTED_MODULE_11__utils_getUpdatedOffsetForIndex__["a" /* default */])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: 'cellRenderers',
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _props2 = this.props,
          cellGroupRenderer = _props2.cellGroupRenderer,
          cellRenderer = _props2.cellRenderer;

      // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });

      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({ index: index });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: '_isScrollingChange',
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: '_setCollectionViewRef',
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);

  return Collection;
}(__WEBPACK_IMPORTED_MODULE_8_react__["PureComponent"]);

Collection.defaultProps = {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
};
/* harmony default export */ __webpack_exports__["a"] = (Collection);
Collection.propTypes =  false ? {
  'aria-label': PropTypes.string,

  /**
   * Number of cells in Collection.
   */
  cellCount: PropTypes.number.isRequired,

  /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */
  cellGroupRenderer: PropTypes.func.isRequired,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */
  cellRenderer: PropTypes.func.isRequired,

  /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */
  cellSizeAndPositionGetter: PropTypes.func.isRequired,

  /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */
  sectionSize: PropTypes.number
} : {};


function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;

  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({ index: index });

    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    };

    // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.
    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}

/***/ }),

/***/ 2234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__ = __webpack_require__(1852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize__ = __webpack_require__(1902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize__);












// @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(CollectionView, _PureComponent);

  function CollectionView(props, context) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, CollectionView);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CollectionView.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(CollectionView)).call(this, props, context));

    _this.state = {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._calculateSizeAndPositionDataOnNextUpdate = false;

    // Invokes callbacks only when their values have changed.
    _this._onSectionRenderedMemoizer = Object(__WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__["a" /* default */])();
    _this._onScrollMemoizer = Object(__WEBPACK_IMPORTED_MODULE_9__utils_createCallbackMemoizer__["a" /* default */])(false);

    // Bind functions to instance so they don't lose context when passed around.
    _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this);
    return _this;
  }

  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(CollectionView, [{
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }

    /* ---------------------------- Component lifecycle methods ---------------------------- */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          cellLayoutManager = _props.cellLayoutManager,
          scrollLeft = _props.scrollLeft,
          scrollToCell = _props.scrollToCell,
          scrollTop = _props.scrollTop;

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default()();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Update onSectionRendered callback.
      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props,
          height = _props2.height,
          scrollToAlignment = _props2.scrollToAlignment,
          scrollToCell = _props2.scrollToCell,
          width = _props2.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToCell values requires it
      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var cellLayoutManager = this.props.cellLayoutManager;


      cellLayoutManager.calculateSizeAndPositionData();

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()
      this._scrollbarSize = __WEBPACK_IMPORTED_MODULE_10_dom_helpers_util_scrollbarSize___default()();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;


      if (nextProps.cellCount === 0 && (scrollLeft !== 0 || scrollTop !== 0)) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        this._setScrollPosition({
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        });
      }

      if (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        nextProps.cellLayoutManager.calculateSizeAndPositionData();
      }

      if (this._calculateSizeAndPositionDataOnNextUpdate) {
        this._calculateSizeAndPositionDataOnNextUpdate = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          autoHeight = _props3.autoHeight,
          cellCount = _props3.cellCount,
          cellLayoutManager = _props3.cellLayoutManager,
          className = _props3.className,
          height = _props3.height,
          horizontalOverscanSize = _props3.horizontalOverscanSize,
          id = _props3.id,
          noContentRenderer = _props3.noContentRenderer,
          style = _props3.style,
          verticalOverscanSize = _props3.verticalOverscanSize,
          width = _props3.width;
      var _state3 = this.state,
          isScrolling = _state3.isScrolling,
          scrollLeft = _state3.scrollLeft,
          scrollTop = _state3.scrollTop;

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width;

      // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);

      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];

      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      };

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ReactVirtualized__Collection', className),
          id: id,
          onScroll: this._onScroll,
          role: 'grid',
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, collectionStyle, style),
          tabIndex: 0 },
        cellCount > 0 && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            className: 'ReactVirtualized__Collection__innerScrollContainer',
            style: {
              height: totalHeight,
              maxHeight: totalHeight,
              maxWidth: totalWidth,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              width: totalWidth
            } },
          childrenToDisplay
        ),
        cellCount === 0 && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_enablePointerEventsAfterDelay',
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;


        isScrollingChange(false);

        _this2._disablePointerEventsTimeoutId = null;
        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: '_invokeOnSectionRenderedHelper',
    value: function _invokeOnSectionRenderedHelper() {
      var _props4 = this.props,
          cellLayoutManager = _props4.cellLayoutManager,
          onSectionRendered = _props4.onSectionRendered;


      this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _props5 = _this3.props,
              height = _props5.height,
              onScroll = _props5.onScroll,
              width = _props5.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_updateScrollPositionForScrollToCell',
    value: function _updateScrollPositionForScrollToCell() {
      var _props6 = this.props,
          cellLayoutManager = _props6.cellLayoutManager,
          height = _props6.height,
          scrollToAlignment = _props6.scrollToAlignment,
          scrollToCell = _props6.scrollToCell,
          width = _props6.width;
      var _state4 = this.state,
          scrollLeft = _state4.scrollLeft,
          scrollTop = _state4.scrollTop;


      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          this._setScrollPosition(scrollPosition);
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._enablePointerEventsAfterDelay();

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
      var _props7 = this.props,
          cellLayoutManager = _props7.cellLayoutManager,
          height = _props7.height,
          isScrollingChange = _props7.isScrollingChange,
          width = _props7.width;

      var scrollbarSize = this._scrollbarSize;

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
        if (!this.state.isScrolling) {
          isScrollingChange(true);
        }

        this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    }
  }]);

  return CollectionView;
}(__WEBPACK_IMPORTED_MODULE_7_react__["PureComponent"]);

CollectionView.defaultProps = {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
};
/* harmony default export */ __webpack_exports__["a"] = (CollectionView);
CollectionView.propTypes =  false ? {
  'aria-label': PropTypes.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: PropTypes.bool,

  /**
   * Number of cells in collection.
   */
  cellCount: PropTypes.number.isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: PropTypes.object.isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: PropTypes.string,

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: PropTypes.number.isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: PropTypes.string,

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: PropTypes.number.isRequired,

  isScrollingChange: PropTypes.func,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: PropTypes.func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: PropTypes.func.isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: PropTypes.func.isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: PropTypes.number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: PropTypes.number.isRequired,

  /**
   * Vertical offset.
   */
  scrollTop: PropTypes.number,

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: PropTypes.object,

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: PropTypes.number.isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: PropTypes.number.isRequired
} : {};

/***/ }),

/***/ 2235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateSizeAndPositionData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionManager__ = __webpack_require__(2236);


function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;

  var cellMetadata = [];
  var sectionManager = new __WEBPACK_IMPORTED_MODULE_0__SectionManager__["a" /* default */](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({ index: index });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);

    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),

/***/ 2236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Section__ = __webpack_require__(2237);



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */


var babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo = __webpack_require__(1747).babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_Index = __webpack_require__(1747).babelPluginFlowReactPropTypes_proptype_Index || __webpack_require__(2).any;

var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager = function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SectionManager);

    this._sectionSize = sectionSize;

    this._cellMetadata = [];
    this._sections = {};
  }

  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SectionManager, [{
    key: 'getCellIndices',
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;

      var indices = {};

      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      });

      // Object keys are strings; this function returns numbers
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(indices).map(function (index) {
        return indices[index];
      });
    }

    /** Get size and position information for the cell specified. */

  }, {
    key: 'getCellMetadata',
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;

      return this._cellMetadata[index];
    }

    /** Get all Sections overlapping the specified region. */

  }, {
    key: 'getSections',
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;

      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);

      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = sectionX + '.' + sectionY;

          if (!this._sections[key]) {
            this._sections[key] = new __WEBPACK_IMPORTED_MODULE_3__Section__["a" /* default */]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }

    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: 'getTotalSectionCount',
    value: function getTotalSectionCount() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).length;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }

    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: 'registerCell',
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;

      this._cellMetadata[index] = cellMetadatum;

      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({ index: index });
      });
    }
  }]);

  return SectionManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (SectionManager);

/***/ }),

/***/ 2237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo = __webpack_require__(1747).babelPluginFlowReactPropTypes_proptype_SizeAndPositionInfo || __webpack_require__(2).any; /** @rlow */


var babelPluginFlowReactPropTypes_proptype_Index = __webpack_require__(1747).babelPluginFlowReactPropTypes_proptype_Index || __webpack_require__(2).any;

var Section = function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this._indexMap = {};
    this._indices = [];
  }

  /** Add a cell to this section. */


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Section, [{
    key: 'addCellIndex',
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;
        this._indices.push(index);
      }
    }

    /** Get all cell indices that have been added to this section. */

  }, {
    key: 'getCellIndices',
    value: function getCellIndices() {
      return this._indices;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),

/***/ 2238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUpdatedOffsetForIndex;
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;

  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),

/***/ 2239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ColumnSizer__ = __webpack_require__(2240);
/* unused harmony reexport ColumnSizer */


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__ColumnSizer__["a" /* default */]);


/***/ }),

/***/ 2240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColumnSizer, _PureComponent);

  function ColumnSizer(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColumnSizer);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColumnSizer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColumnSizer)).call(this, props, context));

    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColumnSizer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          columnMaxWidth = _props.columnMaxWidth,
          columnMinWidth = _props.columnMinWidth,
          columnCount = _props.columnCount,
          width = _props.width;


      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnMaxWidth = _props2.columnMaxWidth,
          columnMinWidth = _props2.columnMinWidth,
          columnCount = _props2.columnCount,
          width = _props2.width;


      var safeColumnMinWidth = columnMinWidth || 1;

      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;

      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);

      var adjustedWidth = Math.min(width, columnWidth * columnCount);

      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (ColumnSizer);
ColumnSizer.propTypes =  false ? {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: PropTypes.func.isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: PropTypes.number,

  /** Optional minimum allowed column width */
  columnMinWidth: PropTypes.number,

  /** Number of columns in Grid or Table child */
  columnCount: PropTypes.number.isRequired,

  /** Width of Grid or Table child */
  width: PropTypes.number.isRequired
} : {};

/***/ }),

/***/ 2241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__ = __webpack_require__(2242);
/* unused harmony reexport InfiniteLoader */


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__InfiniteLoader__["a" /* default */]);


/***/ }),

/***/ 2242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isRangeVisible */
/* unused harmony export scanForUnloadedRanges */
/* unused harmony export forceUpdateReactVirtualizedComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__ = __webpack_require__(1852);









/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(InfiniteLoader, _PureComponent);

  function InfiniteLoader(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, InfiniteLoader);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (InfiniteLoader.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(InfiniteLoader)).call(this, props, context));

    _this._loadMoreRowsMemoizer = Object(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(InfiniteLoader, [{
    key: 'resetLoadMoreRowsCache',
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = Object(__WEBPACK_IMPORTED_MODULE_7__utils_createCallbackMemoizer__["a" /* default */])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;


      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: '_onRowsRendered',
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;

      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: '_doStuff',
    value: function _doStuff(startIndex, stopIndex) {
      var _this3 = this;

      var _props = this.props,
          isRowLoaded = _props.isRowLoaded,
          minimumBatchSize = _props.minimumBatchSize,
          rowCount = _props.rowCount,
          threshold = _props.threshold;


      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });

      // For memoize comparison
      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
      }, []);

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(__WEBPACK_IMPORTED_MODULE_5_react__["PureComponent"]);

/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


InfiniteLoader.defaultProps = {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
};
/* harmony default export */ __webpack_exports__["a"] = (InfiniteLoader);
InfiniteLoader.propTypes =  false ? {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: PropTypes.func.isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: PropTypes.func.isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: PropTypes.func.isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: PropTypes.number.isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: PropTypes.number.isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: PropTypes.number.isRequired
} : {};
function isRangeVisible(_ref2) {
  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref2.lastRenderedStopIndex,
      startIndex = _ref2.startIndex,
      stopIndex = _ref2.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */
function scanForUnloadedRanges(_ref3) {
  var isRowLoaded = _ref3.isRowLoaded,
      minimumBatchSize = _ref3.minimumBatchSize,
      rowCount = _ref3.rowCount,
      startIndex = _ref3.startIndex,
      stopIndex = _ref3.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({ index: index });

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({ index: _index })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({ index: _index2 })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */
function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ 2243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__(1906);
/* unused harmony reexport default */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__List__["a"]; });






/***/ }),

/***/ 2244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2245), __esModule: true };

/***/ }),

/***/ 2245:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2246);
var $Object = __webpack_require__(25).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 2246:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(109);
var $getOwnPropertyDescriptor = __webpack_require__(362).f;

__webpack_require__(354)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 2247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCellPositioner__ = __webpack_require__(2248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Masonry__ = __webpack_require__(1854);
/* unused harmony reexport createCellPositioner */
/* unused harmony reexport Masonry */



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1__Masonry__["default"]);


/***/ }),

/***/ 2248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
var babelPluginFlowReactPropTypes_proptype_Positioner = __webpack_require__(1854).babelPluginFlowReactPropTypes_proptype_Positioner || __webpack_require__(2).any;

var babelPluginFlowReactPropTypes_proptype_CellMeasurerCache = __webpack_require__(1854).babelPluginFlowReactPropTypes_proptype_CellMeasurerCache || __webpack_require__(2).any;

function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === undefined ? 0 : _ref$spacer;

  var columnHeights = void 0;

  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;
    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;

    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;

    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];
    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;

    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;

  return cellPositioner;
}

/***/ }),

/***/ 2249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_intervalTree__ = __webpack_require__(2257);





// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache = function () {
  function PositionCache() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PositionCache);

    this._columnSizeMap = {};
    this._intervalTree = Object(__WEBPACK_IMPORTED_MODULE_3__vendor_intervalTree__["a" /* default */])();
    this._leftMap = {};
  }
  // Tracks the height of each column


  // Store tops and bottoms of each cell for fast intersection lookup.


  // Maps cell index to x coordinates for quick lookup.


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PositionCache, [{
    key: 'estimateTotalHeight',
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    }

    // Render all cells visible within the viewport range defined.

  }, {
    key: 'range',
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: 'setPosition',
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);
      this._leftMap[index] = left;

      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];
      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: 'count',
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: 'shortestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: 'tallestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);

  return PositionCache;
}();

/* harmony default export */ __webpack_exports__["a"] = (PositionCache);

/***/ }),

/***/ 2250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(2251);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(2254);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 2251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2252), __esModule: true };

/***/ }),

/***/ 2252:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(355);
__webpack_require__(222);
module.exports = __webpack_require__(2253);


/***/ }),

/***/ 2253:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(359);
var ITERATOR = __webpack_require__(38)('iterator');
var Iterators = __webpack_require__(131);
module.exports = __webpack_require__(25).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 2254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2255), __esModule: true };

/***/ }),

/***/ 2255:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(355);
__webpack_require__(222);
module.exports = __webpack_require__(2256);


/***/ }),

/***/ 2256:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(66);
var get = __webpack_require__(360);
module.exports = __webpack_require__(25).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 2257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createWrapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__ = __webpack_require__(2258);
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/



var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);
  if (idx < 0) {
    return NOT_FOUND;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);
  if (this.left) {
    this.left.intervals(result);
  }
  if (this.right) {
    this.right.intervals(result);
  }
  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;
  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.leftPoints, interval, compareBegin);
    var r = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;
  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }
    var rw = this.right ? this.right.count : 0;
    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.left.remove(interval);
    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }
    var lw = this.left ? this.left.count : 0;
    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.right.remove(interval);
    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }
    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;
        while (n.right) {
          p = n;
          n = n.right;
        }
        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }
        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }
      return SUCCESS;
    }
    for (var l = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }
      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);
        for (var r = __WEBPACK_IMPORTED_MODULE_0__binarySearchBounds__["a" /* default */].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }
    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];
  if (d) {
    return d;
  }
  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];
  if (d) {
    return d;
  }
  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  var pts = [];
  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort(compareNumbers);

  var mid = pts[pts.length >> 1];

  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];
  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  }

  //Split center intervals
  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);

  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
}

//User friendly wrapper that makes it possible to support empty trees
function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);
    if (r === EMPTY) {
      this.root = null;
    }
    return r !== NOT_FOUND;
  }
  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
});

Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
});

function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}

/***/ }),

/***/ 2258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

function _GEA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GEP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GTP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LTP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LEP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function _EQP(a, l, h, y, c) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);
    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
});

/***/ }),

/***/ 2259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MultiGrid__ = __webpack_require__(2260);
/* unused harmony reexport MultiGrid */


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__MultiGrid__["a" /* default */]);


/***/ }),

/***/ 2260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__ = __webpack_require__(2261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Grid__ = __webpack_require__(1714);












var SCROLLBAR_SIZE_BUFFER = 20;

/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(MultiGrid, _PureComponent);

  function MultiGrid(props, context) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, MultiGrid);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MultiGrid.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(MultiGrid)).call(this, props, context));

    _this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    };

    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;

    _this._bottomLeftGridRef = _this._bottomLeftGridRef.bind(_this);
    _this._bottomRightGridRef = _this._bottomRightGridRef.bind(_this);
    _this._cellRendererBottomLeftGrid = _this._cellRendererBottomLeftGrid.bind(_this);
    _this._cellRendererBottomRightGrid = _this._cellRendererBottomRightGrid.bind(_this);
    _this._cellRendererTopRightGrid = _this._cellRendererTopRightGrid.bind(_this);
    _this._columnWidthRightGrid = _this._columnWidthRightGrid.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onScrollbarPresenceChange = _this._onScrollbarPresenceChange.bind(_this);
    _this._onScrollLeft = _this._onScrollLeft.bind(_this);
    _this._onScrollTop = _this._onScrollTop.bind(_this);
    _this._rowHeightBottomGrid = _this._rowHeightBottomGrid.bind(_this);
    _this._topLeftGridRef = _this._topLeftGridRef.bind(_this);
    _this._topRightGridRef = _this._topRightGridRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(MultiGrid, [{
    key: 'forceUpdateGrids',
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }

    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$columnIndex = _ref2.columnIndex,
          columnIndex = _ref2$columnIndex === undefined ? 0 : _ref2$columnIndex,
          _ref2$rowIndex = _ref2.rowIndex,
          rowIndex = _ref2$rowIndex === undefined ? 0 : _ref2$rowIndex;

      var _props = this.props,
          fixedColumnCount = _props.fixedColumnCount,
          fixedRowCount = _props.fixedRowCount;


      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);

      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });

      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(null, this.props, null, this.state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          scrollLeft = _props2.scrollLeft,
          scrollTop = _props2.scrollTop;


      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props3 = this.props,
          deferredMeasurementCache = _props3.deferredMeasurementCache,
          fixedColumnCount = _props3.fixedColumnCount,
          fixedRowCount = _props3.fixedRowCount;


      this._maybeCalculateCachedStyles(null, this.props, null, this.state);

      if (deferredMeasurementCache) {
        this._deferredMeasurementCacheBottomLeftGrid = fixedRowCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: 0,
          rowIndexOffset: fixedRowCount
        }) : deferredMeasurementCache;

        this._deferredMeasurementCacheBottomRightGrid = fixedColumnCount > 0 || fixedRowCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: fixedColumnCount,
          rowIndexOffset: fixedRowCount
        }) : deferredMeasurementCache;

        this._deferredMeasurementCacheTopRightGrid = fixedColumnCount > 0 ? new __WEBPACK_IMPORTED_MODULE_9__CellMeasurerCacheDecorator__["a" /* default */]({
          cellMeasurerCache: deferredMeasurementCache,
          columnIndexOffset: fixedColumnCount,
          rowIndexOffset: 0
        }) : deferredMeasurementCache;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      var _props4 = this.props,
          columnWidth = _props4.columnWidth,
          fixedColumnCount = _props4.fixedColumnCount,
          fixedRowCount = _props4.fixedRowCount,
          rowHeight = _props4.rowHeight;


      if (columnWidth !== nextProps.columnWidth || fixedColumnCount !== nextProps.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (fixedRowCount !== nextProps.fixedRowCount || rowHeight !== nextProps.rowHeight) {
        this._topGridHeight = null;
      }

      if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null && nextProps.scrollLeft >= 0) {
          newState.scrollLeft = nextProps.scrollLeft;
        }

        if (nextProps.scrollTop != null && nextProps.scrollTop >= 0) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this.setState(newState);
      }

      this._maybeCalculateCachedStyles(this.props, nextProps, this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          onScroll = _props5.onScroll,
          onSectionRendered = _props5.onSectionRendered,
          scrollLeftProp = _props5.scrollLeft,
          scrollToColumn = _props5.scrollToColumn,
          scrollTopProp = _props5.scrollTop,
          scrollToRow = _props5.scrollToRow,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props5, ['onScroll', 'onSectionRendered', 'scrollLeft', 'scrollToColumn', 'scrollTop', 'scrollToRow']);

      // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      }

      // scrollTop and scrollLeft props are explicitly filtered out and ignored

      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop;


      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        { style: this._containerOuterStyle },
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          { style: this._containerTopStyle },
          this._renderTopLeftGrid(rest),
          this._renderTopRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            scrollLeft: scrollLeft
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'div',
          { style: this._containerBottomStyle },
          this._renderBottomLeftGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            scrollTop: scrollTop
          })),
          this._renderBottomRightGrid(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
            onScroll: onScroll,
            onSectionRendered: onSectionRendered,
            scrollLeft: scrollLeft,
            scrollToColumn: scrollToColumn,
            scrollToRow: scrollToRow,
            scrollTop: scrollTop
          }))
        )
      );
    }
  }, {
    key: '_bottomLeftGridRef',
    value: function _bottomLeftGridRef(ref) {
      this._bottomLeftGrid = ref;
    }
  }, {
    key: '_bottomRightGridRef',
    value: function _bottomRightGridRef(ref) {
      this._bottomRightGrid = ref;
    }
  }, {
    key: '_cellRendererBottomLeftGrid',
    value: function _cellRendererBottomLeftGrid(_ref3) {
      var rowIndex = _ref3.rowIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['rowIndex']);

      var _props6 = this.props,
          cellRenderer = _props6.cellRenderer,
          fixedRowCount = _props6.fixedRowCount,
          rowCount = _props6.rowCount;


      if (rowIndex === rowCount - fixedRowCount) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement('div', {
          key: rest.key,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          parent: this,
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    }
  }, {
    key: '_cellRendererBottomRightGrid',
    value: function _cellRendererBottomRightGrid(_ref4) {
      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4, ['columnIndex', 'rowIndex']);

      var _props7 = this.props,
          cellRenderer = _props7.cellRenderer,
          fixedColumnCount = _props7.fixedColumnCount,
          fixedRowCount = _props7.fixedRowCount;


      return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: this,
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  }, {
    key: '_cellRendererTopRightGrid',
    value: function _cellRendererTopRightGrid(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref5, ['columnIndex']);

      var _props8 = this.props,
          cellRenderer = _props8.cellRenderer,
          columnCount = _props8.columnCount,
          fixedColumnCount = _props8.fixedColumnCount;


      if (columnIndex === columnCount - fixedColumnCount) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement('div', {
          key: rest.key,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: this
        }));
      }
    }
  }, {
    key: '_columnWidthRightGrid',
    value: function _columnWidthRightGrid(_ref6) {
      var index = _ref6.index;
      var _props9 = this.props,
          columnCount = _props9.columnCount,
          fixedColumnCount = _props9.fixedColumnCount,
          columnWidth = _props9.columnWidth;
      var _state2 = this.state,
          scrollbarSize = _state2.scrollbarSize,
          showHorizontalScrollbar = _state2.showHorizontalScrollbar;

      // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({ index: index + fixedColumnCount }) : columnWidth;
    }
  }, {
    key: '_getBottomGridHeight',
    value: function _getBottomGridHeight(props) {
      var height = props.height;


      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: '_getLeftGridWidth',
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;


      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({ index: index });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: '_getRightGridWidth',
    value: function _getRightGridWidth(props) {
      var width = props.width;


      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: '_getTopGridHeight',
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;


      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({ index: index });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }

    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: '_maybeCalculateCachedStyles',
    value: function _maybeCalculateCachedStyles(prevProps, props) {
      var columnWidth = props.columnWidth,
          enableFixedColumnScroll = props.enableFixedColumnScroll,
          enableFixedRowScroll = props.enableFixedRowScroll,
          height = props.height,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight,
          style = props.style,
          styleBottomLeftGrid = props.styleBottomLeftGrid,
          styleBottomRightGrid = props.styleBottomRightGrid,
          styleTopLeftGrid = props.styleTopLeftGrid,
          styleTopRightGrid = props.styleTopRightGrid,
          width = props.width;


      var firstRender = !prevProps;
      var sizeChange = firstRender || height !== prevProps.height || width !== prevProps.width;
      var leftSizeChange = firstRender || columnWidth !== prevProps.columnWidth || fixedColumnCount !== prevProps.fixedColumnCount;
      var topSizeChange = firstRender || fixedRowCount !== prevProps.fixedRowCount || rowHeight !== prevProps.rowHeight;

      if (firstRender || sizeChange || style !== prevProps.style) {
        this._containerOuterStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          height: height,
          overflow: 'visible', // Let :focus outline show through
          width: width
        }, style);
      }

      if (firstRender || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(props),
          position: 'relative',
          width: width
        };

        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(props),
          overflow: 'visible', // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (firstRender || styleBottomLeftGrid !== prevProps.styleBottomLeftGrid) {
        this._bottomLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (firstRender || leftSizeChange || styleBottomRightGrid !== prevProps.styleBottomRightGrid) {
        this._bottomRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (firstRender || styleTopLeftGrid !== prevProps.styleTopLeftGrid) {
        this._topLeftGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (firstRender || leftSizeChange || styleTopRightGrid !== prevProps.styleTopRightGrid) {
        this._topRightGridStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          left: this._getLeftGridWidth(props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;

      this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      var onScroll = this.props.onScroll;
      if (onScroll) {
        onScroll(scrollInfo);
      }
    }
  }, {
    key: '_onScrollbarPresenceChange',
    value: function _onScrollbarPresenceChange(_ref7) {
      var horizontal = _ref7.horizontal,
          size = _ref7.size,
          vertical = _ref7.vertical;
      var _state3 = this.state,
          showHorizontalScrollbar = _state3.showHorizontalScrollbar,
          showVerticalScrollbar = _state3.showVerticalScrollbar;


      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });
      }
    }
  }, {
    key: '_onScrollLeft',
    value: function _onScrollLeft(scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: this.state.scrollTop
      });
    }
  }, {
    key: '_onScrollTop',
    value: function _onScrollTop(scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: this.state.scrollLeft
      });
    }
  }, {
    key: '_renderBottomLeftGrid',
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollTop = props.scrollTop;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;


      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0;

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: this._getBottomGridHeight(props),
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        scrollTop: scrollTop,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderBottomRightGrid',
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;


      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopLeftGrid',
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;


      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopRightGrid',
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft;
      var showHorizontalScrollbar = this.state.showHorizontalScrollbar;


      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0;

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: this._getTopGridHeight(props),
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: this._topRightGridStyle,
        tabIndex: null,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_rowHeightBottomGrid',
    value: function _rowHeightBottomGrid(_ref8) {
      var index = _ref8.index;
      var _props10 = this.props,
          fixedRowCount = _props10.fixedRowCount,
          rowCount = _props10.rowCount,
          rowHeight = _props10.rowHeight;
      var _state4 = this.state,
          scrollbarSize = _state4.scrollbarSize,
          showVerticalScrollbar = _state4.showVerticalScrollbar;

      // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({ index: index + fixedRowCount }) : rowHeight;
    }
  }, {
    key: '_topLeftGridRef',
    value: function _topLeftGridRef(ref) {
      this._topLeftGrid = ref;
    }
  }, {
    key: '_topRightGridRef',
    value: function _topRightGridRef(ref) {
      this._topRightGrid = ref;
    }
  }]);

  return MultiGrid;
}(__WEBPACK_IMPORTED_MODULE_8_react__["PureComponent"]);

MultiGrid.defaultProps = {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {}
};
/* harmony default export */ __webpack_exports__["a"] = (MultiGrid);
MultiGrid.propTypes =  false ? {
  classNameBottomLeftGrid: PropTypes.string.isRequired,
  classNameBottomRightGrid: PropTypes.string.isRequired,
  classNameTopLeftGrid: PropTypes.string.isRequired,
  classNameTopRightGrid: PropTypes.string.isRequired,
  enableFixedColumnScroll: PropTypes.bool.isRequired,
  enableFixedRowScroll: PropTypes.bool.isRequired,
  fixedColumnCount: PropTypes.number.isRequired,
  fixedRowCount: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  styleBottomLeftGrid: PropTypes.object.isRequired,
  styleBottomRightGrid: PropTypes.object.isRequired,
  styleTopLeftGrid: PropTypes.object.isRequired,
  styleTopRightGrid: PropTypes.object.isRequired
} : {};

/***/ }),

/***/ 2261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CellMeasurer__ = __webpack_require__(1904);




/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator = function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CellMeasurerCacheDecorator);

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    };

    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === undefined ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === undefined ? 0 : _params$rowIndexOffse;


    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CellMeasurerCacheDecorator, [{
    key: 'clear',
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();

/* harmony default export */ __webpack_exports__["a"] = (CellMeasurerCacheDecorator);

/***/ }),

/***/ 2262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollSync__ = __webpack_require__(2263);
/* unused harmony reexport ScrollSync */


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__ScrollSync__["a" /* default */]);


/***/ }),

/***/ 2263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollSync, _PureComponent);

  function ScrollSync(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollSync);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScrollSync.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScrollSync)).call(this, props, context));

    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollSync, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          clientWidth = _state.clientWidth,
          scrollHeight = _state.scrollHeight,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop,
          scrollWidth = _state.scrollWidth;


      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;

      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);

  return ScrollSync;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (ScrollSync);
ScrollSync.propTypes =  false ? {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: PropTypes.func.isRequired
} : {};

/***/ }),

/***/ 2264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultCellDataGetter__ = __webpack_require__(1907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultCellRenderer__ = __webpack_require__(1908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultHeaderRowRenderer_js__ = __webpack_require__(1909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultHeaderRenderer__ = __webpack_require__(1910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultRowRenderer__ = __webpack_require__(1912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Column__ = __webpack_require__(1913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SortDirection__ = __webpack_require__(1795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SortIndicator__ = __webpack_require__(1911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Table__ = __webpack_require__(2265);
/* unused harmony reexport defaultCellDataGetter */
/* unused harmony reexport defaultCellRenderer */
/* unused harmony reexport defaultHeaderRowRenderer */
/* unused harmony reexport defaultHeaderRenderer */
/* unused harmony reexport defaultRowRenderer */
/* unused harmony reexport Column */
/* unused harmony reexport SortDirection */
/* unused harmony reexport SortIndicator */
/* unused harmony reexport Table */










/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_8__Table__["a" /* default */]);


/***/ }),

/***/ 2265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Column__ = __webpack_require__(1913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Grid__ = __webpack_require__(1714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__ = __webpack_require__(1912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__defaultHeaderRowRenderer__ = __webpack_require__(1909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SortDirection__ = __webpack_require__(1795);







var babelPluginFlowReactPropTypes_proptype_CellPosition = __webpack_require__(1714).babelPluginFlowReactPropTypes_proptype_CellPosition || __webpack_require__(2).any;











/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Table, _PureComponent);

  function Table(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Table);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Table.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Table)).call(this, props));

    _this.state = {
      scrollbarWidth: 0
    };

    _this._createColumn = _this._createColumn.bind(_this);
    _this._createRow = _this._createRow.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _Grid$getOffsetForCel.scrollTop;

        return scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === undefined ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === undefined ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeader = _props.disableHeader,
          gridClassName = _props.gridClassName,
          gridStyle = _props.gridStyle,
          headerHeight = _props.headerHeight,
          headerRowRenderer = _props.headerRowRenderer,
          height = _props.height,
          id = _props.id,
          noRowsRenderer = _props.noRowsRenderer,
          rowClassName = _props.rowClassName,
          rowStyle = _props.rowStyle,
          scrollToIndex = _props.scrollToIndex,
          style = _props.style,
          width = _props.width;
      var scrollbarWidth = this.state.scrollbarWidth;


      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, flexStyles, {
          overflow: 'hidden'
        });
      });

      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table', className),
          id: id,
          role: 'grid',
          style: style },
        !disableHeader && headerRowRenderer({
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerRow', rowClass),
          columns: this._getHeaderColumns(),
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rowStyleObject, {
            height: headerHeight,
            overflow: 'hidden',
            paddingRight: scrollbarWidth,
            width: width
          })
        }),
        __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Grid__["default"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
          autoContainerWidth: true,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__Grid', gridClassName),
          cellRenderer: this._createRow,
          columnWidth: width,
          columnCount: 1,
          height: availableRowsHeight,
          id: undefined,
          noContentRenderer: noRowsRenderer,
          onScroll: this._onScroll,
          onSectionRendered: this._onSectionRendered,
          ref: this._setRef,
          role: 'rowgroup',
          scrollbarWidth: scrollbarWidth,
          scrollToRow: scrollToIndex,
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, gridStyle, {
            overflowX: 'hidden'
          })
        }))
      );
    }
  }, {
    key: '_createColumn',
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;


      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var style = this._cachedColumnStyles[columnIndex];

      var title = typeof renderedCell === 'string' ? renderedCell : null;

      var a11yProps = {
        role: 'gridcell'
      };

      if (id) {
        a11yProps['aria-describedby'] = id;
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
          key: 'Row' + rowIndex + '-Col' + columnIndex,
          className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__rowColumn', className),
          style: style,
          title: title }),
        renderedCell
      );
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _props2 = this.props,
          headerClassName = _props2.headerClassName,
          headerStyle = _props2.headerStyle,
          onHeaderClick = _props2.onHeaderClick,
          sort = _props2.sort,
          sortBy = _props2.sortBy,
          sortDirection = _props2.sortDirection;
      var _column$props2 = column.props,
          dataKey = _column$props2.dataKey,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label,
          columnData = _column$props2.columnData,
          defaultSortDirection = _column$props2.defaultSortDirection;

      var sortEnabled = !disableSort && sort;

      var classNames = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, headerStyle, column.props.headerStyle));

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var a11yProps = {
        role: 'columnheader'
      };

      if (sortEnabled || onHeaderClick) {
        (function () {
          // If this is a sortable header, clicking it should update the table data's sorting.
          var isFirstTimeSort = sortBy !== dataKey;

          // If this is the firstTime sort of this column, use the column default sort order.
          // Otherwise, invert the direction of the sort.
          var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].DESC ? __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].ASC : __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].DESC;

          var onClick = function onClick(event) {
            sortEnabled && sort({
              sortBy: dataKey,
              sortDirection: newSortDirection
            });
            onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey, event: event });
          };

          var onKeyDown = function onKeyDown(event) {
            if (event.key === 'Enter' || event.key === ' ') {
              onClick(event);
            }
          };

          a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
          a11yProps.tabIndex = 0;
          a11yProps.onClick = onClick;
          a11yProps.onKeyDown = onKeyDown;
        })();
      }

      if (sortBy === dataKey) {
        a11yProps['aria-sort'] = sortDirection === __WEBPACK_IMPORTED_MODULE_14__SortDirection__["a" /* default */].ASC ? 'ascending' : 'descending';
      }

      if (id) {
        a11yProps.id = id;
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, a11yProps, {
          key: 'Header-Col' + index,
          className: classNames,
          style: style }),
        renderedHeader
      );
    }
  }, {
    key: '_createRow',
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _props3 = this.props,
          children = _props3.children,
          onRowClick = _props3.onRowClick,
          onRowDoubleClick = _props3.onRowDoubleClick,
          onRowRightClick = _props3.onRowRightClick,
          onRowMouseOver = _props3.onRowMouseOver,
          onRowMouseOut = _props3.onRowMouseOut,
          rowClassName = _props3.rowClassName,
          rowGetter = _props3.rowGetter,
          rowRenderer = _props3.rowRenderer,
          rowStyle = _props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;


      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: index }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: index }) : rowStyle;
      var rowData = rowGetter({ index: index });

      var columns = __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });

      var className = __WEBPACK_IMPORTED_MODULE_6_classnames___default()('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, rowStyleObject, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      });

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }

    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: '_getFlexStyleForColumn',
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

      var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: '_getHeaderColumns',
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _props4 = this.props,
          children = _props4.children,
          disableHeader = _props4.disableHeader;

      var items = disableHeader ? [] : __WEBPACK_IMPORTED_MODULE_9_react___default.a.Children.toArray(children);

      return items.map(function (column, index) {
        return _this4._createHeader({ column: column, index: index });
      });
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;


      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      if (this.Grid) {
        var _Grid = Object(__WEBPACK_IMPORTED_MODULE_10_react_dom__["findDOMNode"])(this.Grid);
        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        var scrollbarWidth = offsetWidth - clientWidth;

        this.setState({ scrollbarWidth: scrollbarWidth });
      }
    }
  }]);

  return Table;
}(__WEBPACK_IMPORTED_MODULE_9_react__["PureComponent"]);

Table.defaultProps = {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_11__Grid__["accessibilityOverscanIndicesGetter"],
  overscanRowCount: 10,
  rowRenderer: __WEBPACK_IMPORTED_MODULE_12__defaultRowRenderer__["a" /* default */],
  headerRowRenderer: __WEBPACK_IMPORTED_MODULE_13__defaultHeaderRowRenderer__["a" /* default */],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Table);
Table.propTypes =  false ? {
  'aria-label': PropTypes.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: PropTypes.bool,

  /** One or more Columns describing the data displayed in this row */
  children: function children(props) {
    var children = React.Children.toArray(props.children);
    for (var i = 0; i < children.length; i++) {
      var childType = children[i].type;
      if (childType !== Column && !(childType.prototype instanceof Column)) {
        return new Error('Table only accepts children of type Column');
      }
    }
  },

  /** Optional CSS class name */
  className: PropTypes.string,

  /** Disable rendering the header at all */
  disableHeader: PropTypes.bool,

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: PropTypes.number.isRequired,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName: PropTypes.string,

  /** Optional inline style to attach to inner Grid element. */
  gridStyle: PropTypes.object,

  /** Optional CSS class to apply to all column headers */
  headerClassName: PropTypes.string,

  /** Fixed height of header row */
  headerHeight: PropTypes.number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */
  headerRowRenderer: PropTypes.func,

  /** Optional custom inline style to attach to table header columns. */
  headerStyle: PropTypes.object,

  /** Fixed/available height for out DOM element */
  height: PropTypes.number.isRequired,

  /** Optional id */
  id: PropTypes.string,

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer: PropTypes.func,

  /**
  * Optional callback when a column's header is clicked.
  * ({ columnData: any, dataKey: string }): void
  */
  onHeaderClick: PropTypes.func,

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick: PropTypes.func,

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick: PropTypes.func,

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut: PropTypes.func,

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver: PropTypes.func,

  /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */
  onRowRightClick: PropTypes.func,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: PropTypes.func,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: PropTypes.func.isRequired,

  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: PropTypes.func.isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: PropTypes.number.isRequired,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: PropTypes.func.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  /** Number of rows in table. */
  rowCount: PropTypes.number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: PropTypes.func,

  /** Optional custom inline style to attach to table rows. */
  rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: PropTypes.number.isRequired,

  /** Vertical offset. */
  scrollTop: PropTypes.number,

  /**
   * Sort function to be called if a sortable header is clicked.
   * ({ sortBy: string, sortDirection: SortDirection }): void
   */
  sort: PropTypes.func,

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy: PropTypes.string,

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection: PropTypes.oneOf([SortDirection.ASC, SortDirection.DESC]),

  /** Optional inline style */
  style: PropTypes.object,

  /** Tab index for focus */
  tabIndex: PropTypes.number,

  /** Width of list */
  width: PropTypes.number.isRequired
} : {};

/***/ }),

/***/ 2266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WindowScroller__ = __webpack_require__(2267);
/* unused harmony reexport WindowScroller */
/* unused harmony reexport IS_SCROLLING_TIMEOUT */


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__WindowScroller__["a" /* default */]);


/***/ }),

/***/ 2267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IS_SCROLLING_TIMEOUT */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_onScroll__ = __webpack_require__(2268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_dimensions__ = __webpack_require__(2269);











/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

var WindowScroller = function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WindowScroller, _PureComponent);

  function WindowScroller(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WindowScroller);

    // Handle server-side rendering case
    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WindowScroller.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WindowScroller)).call(this, props));

    var _ref = typeof window !== 'undefined' ? Object(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getDimensions */])(props.scrollElement || window) : { width: 0, height: 0 },
        width = _ref.width,
        height = _ref.height;

    _this.state = {
      height: height,
      width: width,
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this._onChildScroll = _this._onChildScroll.bind(_this);
    _this.__handleWindowScrollEvent = _this.__handleWindowScrollEvent.bind(_this);
    _this.__resetIsScrolling = _this.__resetIsScrolling.bind(_this);
    return _this;
  }

  // Can’t use defaultProps for scrollElement without breaking server-side rendering


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition(scrollElement) {
      var onResize = this.props.onResize;
      var _state = this.state,
          height = _state.height,
          width = _state.width;


      scrollElement = scrollElement || this.props.scrollElement || window;
      var offset = Object(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["b" /* getPositionOffset */])(__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this), scrollElement);
      this._positionFromTop = offset.top;
      this._positionFromLeft = offset.left;

      var dimensions = Object(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["a" /* getDimensions */])(scrollElement);
      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement || window;

      this.updatePosition(scrollElement);

      Object(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, scrollElement);

      window.addEventListener('resize', this._onResize, false);

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollElement = this.props.scrollElement || window;
      var nextScrollElement = nextProps.scrollElement || window;

      if (scrollElement !== nextScrollElement) {
        this.updatePosition(nextScrollElement);

        Object(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, scrollElement);
        Object(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["a" /* registerScrollListener */])(this, nextScrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_onScroll__["b" /* unregisterScrollListener */])(this, this.props.scrollElement || window);
      window.removeEventListener('resize', this._onResize, false);

      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          isScrolling = _state2.isScrolling,
          scrollTop = _state2.scrollTop,
          scrollLeft = _state2.scrollLeft,
          height = _state2.height,
          width = _state2.width;


      return children({
        onChildScroll: this._onChildScroll,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }, {
    key: '_onChildScroll',
    value: function _onChildScroll(_ref2) {
      var scrollTop = _ref2.scrollTop;

      if (this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = this.scrollElement;

      if (typeof scrollElement.scrollTo === 'function') {
        scrollElement.scrollTo(0, scrollTop + this._positionFromTop);
      } else {
        scrollElement.scrollTop = scrollTop + this._positionFromTop;
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      this.updatePosition();
    }

    // Referenced by utils/onScroll

  }, {
    key: '__handleWindowScrollEvent',
    value: function __handleWindowScrollEvent() {
      if (!this._isMounted) {
        return;
      }

      var onScroll = this.props.onScroll;


      var scrollElement = this.props.scrollElement || window;
      var scrollOffset = Object(__WEBPACK_IMPORTED_MODULE_9__utils_dimensions__["c" /* getScrollOffset */])(scrollElement);
      var scrollLeft = Math.max(0, scrollOffset.left - this._positionFromLeft);
      var scrollTop = Math.max(0, scrollOffset.top - this._positionFromTop);

      this.setState({
        isScrolling: true,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      onScroll({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
    }

    // Referenced by utils/onScroll

  }, {
    key: '__resetIsScrolling',
    value: function __resetIsScrolling() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: 'scrollElement',
    get: function get() {
      return this.props.scrollElement || window;
    }
  }]);

  return WindowScroller;
}(__WEBPACK_IMPORTED_MODULE_6_react__["PureComponent"]);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT
};
/* harmony default export */ __webpack_exports__["a"] = (WindowScroller);
WindowScroller.propTypes =  false ? {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  children: PropTypes.func.isRequired,

  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: PropTypes.func.isRequired,

  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  onScroll: PropTypes.func.isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: PropTypes.any,

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  scrollingResetTimeInterval: PropTypes.number.isRequired
} : {};

/***/ }),

/***/ 2268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerScrollListener;
/* harmony export (immutable) */ __webpack_exports__["b"] = unregisterScrollListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__ = __webpack_require__(1765);


var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    document.body.style.pointerEvents = originalBodyPointerEvents;

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });

  disablePointerEventsTimeoutId = Object(__WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__["requestAnimationTimeout"])(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent(event);
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_requestAnimationTimeout__["cancelAnimationTimeout"])(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),

/***/ 2269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDimensions;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPositionOffset;
/* harmony export (immutable) */ __webpack_exports__["c"] = getScrollOffset;
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */

function getDimensions(element) {
  if (element === window) {
    return {
      height: typeof window.innerHeight === 'number' ? window.innerHeight : 0,
      width: typeof window.innerWidth === 'number' ? window.innerWidth : 0
    };
  }

  var _element$getBoundingC = element.getBoundingClientRect(),
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;

  return { width: width, height: height };
}

/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */
function getPositionOffset(element, container) {
  var scrollOffset = container === window ? { top: 0, left: 0 } : getScrollOffset(container);
  var containerElement = container === window ? document.documentElement : container;
  var elementRect = element.getBoundingClientRect();
  var containerRect = containerElement.getBoundingClientRect();
  return {
    top: elementRect.top + scrollOffset.top - containerRect.top,
    left: elementRect.left + scrollOffset.left - containerRect.left
  };
}

/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollOffset(element) {
  if (element === window) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ 2270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2271);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._1nrR0vTYyqLMy0BsMKVwx8{font-size:12px}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/MyOrders/styles.css"],"names":[],"mappings":"AAAA,yBACE,cAAgB,CACjB","file":"styles.css","sourcesContent":[":local(.container) {\n  font-size: 12px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_1nrR0vTYyqLMy0BsMKVwx8"
};

/***/ }),

/***/ 2272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Closed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(2273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo_decorators_lib_withGraphQL__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo_decorators_lib_withGraphQL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo_decorators_lib_withGraphQL__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Loading__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Open_Details__ = __webpack_require__(1896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__ = __webpack_require__(1791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_virtualized__ = __webpack_require__(1897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm__ = __webpack_require__(1796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _templateObject=_taggedTemplateLiteral(['\n    query myClosedOrders($marketCode: ID!, $page: Int) {\n      orders(marketCode: $marketCode, onlyClosed: true, limit: 50, page: $page) {\n        totalCount\n        hasNextPage\n        page\n        items {\n          _id\n          sell\n          type\n          amount\n          amountToHold\n          secondaryAmount\n          filled\n          closedAt\n          secondaryFilled\n          limitPrice\n          createdAt\n          activatedAt\n          isStop\n          status\n          stopPriceUp\n          stopPriceDown\n          market {\n            name\n            code\n            mainCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n            secondaryCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n          }\n        }\n      }\n    }\n  '],['\n    query myClosedOrders($marketCode: ID!, $page: Int) {\n      orders(marketCode: $marketCode, onlyClosed: true, limit: 50, page: $page) {\n        totalCount\n        hasNextPage\n        page\n        items {\n          _id\n          sell\n          type\n          amount\n          amountToHold\n          secondaryAmount\n          filled\n          closedAt\n          secondaryFilled\n          limitPrice\n          createdAt\n          activatedAt\n          isStop\n          status\n          stopPriceUp\n          stopPriceDown\n          market {\n            name\n            code\n            mainCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n            secondaryCurrency {\n              code\n              format\n              longFormat\n              units\n            }\n          }\n        }\n      }\n    }\n  ']);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var filledMinWidth=580;var dateMinWidth=420;var Closed=(_dec=__WEBPACK_IMPORTED_MODULE_3_react_apollo_decorators_lib_withGraphQL___default()(__WEBPACK_IMPORTED_MODULE_4_graphql_tag___default()(_templateObject),{loading:__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Loading__["a" /* default */],null)}),_dec(_class=(_class2=function(_React$Component){_inherits(Closed,_React$Component);function Closed(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Closed);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Closed.__proto__||Object.getPrototypeOf(Closed)).call.apply(_ref,[this].concat(args))),_this),_this.state={page:1},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Closed,[{key:'componentDidMount',value:function componentDidMount(){this.props.renderHeader(this.renderHeader());}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){if(this.props.width!==prevProps.width){this.props.renderHeader(this.renderHeader());}}},{key:'fetchMore',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this.state.loading){_context.next=2;break;}return _context.abrupt('return');case 2:this.setState({loading:true});_context.next=5;return this.props.fetchMore({variables:{page:this.state.page+1},updateQuery:function updateQuery(previousResult,_ref3){var fetchMoreResult=_ref3.fetchMoreResult;if(!fetchMoreResult)return previousResult;return{orders:{__typename:fetchMoreResult.orders.__typename,totalCount:fetchMoreResult.orders.totalCount,hasNextPage:fetchMoreResult.orders.totalCount,page:fetchMoreResult.orders.page,items:[].concat(_toConsumableArray(previousResult.orders.items),_toConsumableArray(fetchMoreResult.orders.items))}};}});case 5:this.setState({loading:false});case 6:case'end':return _context.stop();}}},_callee,this);}));function fetchMore(){return _ref2.apply(this,arguments);}return fetchMore;}()},{key:'getOrder',value:function getOrder(index){var order=this.props.orders.items[index];if(order)return order;this.fetchMore();}},{key:'renderHeader',value:function renderHeader(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.thead},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.sell},'Tipo'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.price},'Precio'),this.props.width<filledMinWidth?null:__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.filled},'Completado'),this.props.width<dateMinWidth?null:__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.date},'Apertura'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.closedAt},'Cierre'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.actions}));}},{key:'renderPrice',value:function renderPrice(order){var market=order.market;var secondaryCurrency=market.secondaryCurrency;if(order.type==='market'){return'Mercado';}return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',null,Object(__WEBPACK_IMPORTED_MODULE_8__helpers_formatCurrency__["a" /* default */])(order.limitPrice,secondaryCurrency,{code:true,long:true}));}},{key:'getType',value:function getType(order){var action=order.sell?'Venta':'Compra';var stop=order.isStop?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_icons_lib_md_alarm___default.a,null):null;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.typeInner},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.action},action),' ',stop);}},{key:'renderFilled',value:function renderFilled(order){if(this.props.width<filledMinWidth)return;if(order.status==='stop')return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.filled},'-');var market=order.market;var mainCurrency=market.mainCurrency,secondaryCurrency=market.secondaryCurrency;var text=order.secondaryAmount?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__["a" /* default */],{value:order.secondaryFilled||0,currency:secondaryCurrency,code:true}):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_AmountOpacity__["a" /* default */],{value:order.filled||0,currency:mainCurrency,code:true});return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.filled},text);}},{key:'renderDate',value:function renderDate(order){if(this.props.width<dateMinWidth)return;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.date},__WEBPACK_IMPORTED_MODULE_6_moment___default()(order.activatedAt).fromNow(true));}},{key:'renderOrder',value:function renderOrder(_ref4){var key=_ref4.key,index=_ref4.index,style=_ref4.style;var order=this.getOrder(index);if(!order){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{key:key,className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.loading,style:style},'Cargando...');}return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{key:key,className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.tr,style:style},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.sell},this.getType(order)),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.price},this.renderPrice(order)),this.renderFilled(order),this.renderDate(order),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.closedAt},order.closedAt?__WEBPACK_IMPORTED_MODULE_6_moment___default.a.duration(order.activatedAt-order.closedAt).humanize()+' después':'cancelada'),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.actions},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Open_Details__["a" /* default */],{order:order})));}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_virtualized__["a" /* List */],{width:this.props.width-2,height:this.props.height-41-18-4,rowCount:this.props.orders.totalCount,rowHeight:20,rowRenderer:this.renderOrder});}}]);return Closed;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class2.prototype,'renderOrder',[__WEBPACK_IMPORTED_MODULE_12_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class2.prototype,'renderOrder'),_class2.prototype)),_class2))||_class);Closed.propTypes={orders:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,renderHeader:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,fetchMore:__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func};

/***/ }),

/***/ 2273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2274);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1582)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js??ref--1-oneOf-2-2!../../../../../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3_W92-WckRS322Uc4yYGx-{display:-ms-flexbox;display:flex}.md-8n2JICRyp-uWt7ASOk{border-bottom:2px solid #202228;font-weight:700}.E2khwBdFr1Va9g9Y3BFWO{-ms-flex:1 1;flex:1 1;padding:2px;text-align:right}._3MvCNhC077mYaLxjOdii26{padding-left:10px;width:63px;-ms-flex:none;flex:none;text-align:left}._2xceeI0kY-rBZyXY4XO0h2{width:90px;-ms-flex:none;flex:none}._1cln5LidTaj4XXbpj6-9kT{width:140px;-ms-flex:none;flex:none}._1KBs7Jn6pTPj98MYVWWMbl{width:40px;-ms-flex:none;flex:none;padding-right:10px}.GrXIHsuEGZqF1YokAAQXe ._1KBs7Jn6pTPj98MYVWWMbl{cursor:pointer;z-index:10}.GrXIHsuEGZqF1YokAAQXe ._1KBs7Jn6pTPj98MYVWWMbl:hover{opacity:.9}._1mFNJBDYmd8HqM9smk4R5F{display:-ms-flexbox;display:flex;padding-right:4px}._1mFNJBDYmd8HqM9smk4R5F svg{position:relative;top:.5px}.YVT5yVSzKvz6QKUMY4iPZ{-ms-flex:1 1;flex:1 1}._1QfATxcGR0yXu5PS4ikZiv{text-align:center}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/MyOrders/Closed/styles.css"],"names":[],"mappings":"AAAA,yBACE,oBAAqB,AACrB,YAAc,CACf,AAED,uBAEE,gCAAiC,AACjC,eAAkB,CACnB,AAYD,uBACE,aAAc,AACV,SAAU,AACd,YAAa,AACb,gBAAkB,CACnB,AAED,yBACE,kBAAmB,AAEnB,WAAY,AACZ,cAAe,AACX,UAAW,AACf,eAAiB,CAClB,AAcD,yBAEE,WAAY,AACZ,cAAe,AACX,SAAW,CAChB,AAED,yBAEE,YAAa,AACb,cAAe,AACX,SAAW,CAChB,AAED,yBAEE,WAAY,AACZ,cAAe,AACX,UAAW,AACf,kBAAoB,CACrB,AAED,gDACE,eAAgB,AAChB,UAAY,CACb,AAED,sDACE,UAAa,CACd,AAED,yBACE,oBAAqB,AACrB,aAAc,AACd,iBAAmB,CACpB,AAED,6BACE,kBAAmB,AACnB,QAAW,CACZ,AAED,uBACE,aAAc,AACV,QAAU,CACf,AAED,yBACE,iBAAmB,CACpB","file":"styles.css","sourcesContent":[":local(.tableRow) {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:local(.thead) {\n  composes: tableRow;\n  border-bottom: 2px solid #202228;\n  font-weight: bold;\n}\n\n:local(.tr) {\n  composes: tableRow;\n}\n\n:local(.thead) :local(.tableD) {\n}\n\n:local(.tr) :local(.tableD) {\n}\n\n:local(.tableD) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  padding: 2px;\n  text-align: right;\n}\n\n:local(.sell) {\n  padding-left: 10px;\n  composes: tableD;\n  width: 63px;\n  -ms-flex: none;\n      flex: none;\n  text-align: left;\n}\n\n:local(.price) {\n  composes: tableD;\n}\n\n:local(.amount) {\n  composes: tableD;\n}\n\n:local(.filled) {\n  composes: tableD;\n}\n\n:local(.date) {\n  composes: tableD;\n  width: 90px;\n  -ms-flex: none;\n      flex: none;\n}\n\n:local(.closedAt) {\n  composes: tableD;\n  width: 140px;\n  -ms-flex: none;\n      flex: none;\n}\n\n:local(.actions) {\n  composes: tableD;\n  width: 40px;\n  -ms-flex: none;\n      flex: none;\n  padding-right: 10px;\n}\n\n:local(.tr) :local(.actions) {\n  cursor: pointer;\n  z-index: 10;\n}\n\n:local(.tr) :local(.actions):hover {\n  opacity: 0.9;\n}\n\n:local(.typeInner) {\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 4px;\n}\n\n:local(.typeInner) svg {\n  position: relative;\n  top: 0.5px;\n}\n\n:local(.action) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n:local(.loading) {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"tableRow": "_3_W92-WckRS322Uc4yYGx-",
	"thead": "md-8n2JICRyp-uWt7ASOk _3_W92-WckRS322Uc4yYGx-",
	"tr": "GrXIHsuEGZqF1YokAAQXe _3_W92-WckRS322Uc4yYGx-",
	"tableD": "E2khwBdFr1Va9g9Y3BFWO",
	"sell": "_3MvCNhC077mYaLxjOdii26 E2khwBdFr1Va9g9Y3BFWO",
	"price": "_3iOzzeOZ_163WA0Lqs_SEL E2khwBdFr1Va9g9Y3BFWO",
	"amount": "_2phqGB_TeJsse9AX29Tjvs E2khwBdFr1Va9g9Y3BFWO",
	"filled": "_32gqr3eNDiEVUSGHZ75H1f E2khwBdFr1Va9g9Y3BFWO",
	"date": "_2xceeI0kY-rBZyXY4XO0h2 E2khwBdFr1Va9g9Y3BFWO",
	"closedAt": "_1cln5LidTaj4XXbpj6-9kT E2khwBdFr1Va9g9Y3BFWO",
	"actions": "_1KBs7Jn6pTPj98MYVWWMbl E2khwBdFr1Va9g9Y3BFWO",
	"typeInner": "_1mFNJBDYmd8HqM9smk4R5F",
	"action": "YVT5yVSzKvz6QKUMY4iPZ",
	"loading": "_1QfATxcGR0yXu5PS4ikZiv"
};

/***/ }),

/***/ 2275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Full; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(1855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Balance__ = __webpack_require__(1787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateOrder__ = __webpack_require__(1788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OrderBook__ = __webpack_require__(1790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Charts__ = __webpack_require__(1848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__History__ = __webpack_require__(1793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MyOrders__ = __webpack_require__(1794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_autobind_decorator__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var Full=(_class=function(_React$Component){_inherits(Full,_React$Component);function Full(){_classCallCheck(this,Full);return _possibleConstructorReturn(this,(Full.__proto__||Object.getPrototypeOf(Full)).apply(this,arguments));}_createClass(Full,[{key:'selectPrice',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref){var price=_ref.price,sell=_ref.sell;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.refs.createOrder.selectPrice({price:price,sell:sell});case 1:case'end':return _context.stop();}}},_callee,this);}));function selectPrice(_x){return _ref2.apply(this,arguments);}return selectPrice;}()},{key:'render',value:function render(){var flexWidth=this.props.width-240-280-280;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.container,style:{height:this.props.height}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.column,style:{width:240}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Balance__["a" /* default */],{me:this.props.me,market:this.props.market}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CreateOrder__["a" /* default */],{ref:'createOrder',market:this.props.market})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.column,style:{width:280}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__OrderBook__["a" /* default */],{onSelectPrice:this.selectPrice,market:this.props.market,height:this.props.height,width:280-2})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.column,style:{width:flexWidth}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Charts__["a" /* default */],{market:this.props.market,width:flexWidth,height:this.props.height/2}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__MyOrders__["a" /* default */],{market:this.props.market,width:flexWidth,height:this.props.height/2})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.column,style:{width:280,height:this.props.height}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__History__["a" /* default */],{market:this.props.market,height:this.props.height})));}}]);return Full;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'selectPrice',[__WEBPACK_IMPORTED_MODULE_10_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'selectPrice'),_class.prototype)),_class);Full.propTypes={market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,me:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,wallet:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ }),

/***/ 2276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1581)(true);
// imports


// module
exports.push([module.i, "._3KA6I2kznP5rt1KWP2xbC6{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}._3VxWWXVMvqVObx-2N88fno{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-left:1px solid #202228;border-right:1px solid #202228}._3VbB5p9aRvqG7lq5K9JyMQ{-ms-flex:1 1;flex:1 1;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}._3VbB5p9aRvqG7lq5K9JyMQ>._3VxWWXVMvqVObx-2N88fno:first-child{border-left:none}", "", {"version":3,"sources":["/Users/nicolaslopezj/Code/Node/labs/projects/exchange/web/src/App/Pages/Exchange/Market/Layouts/Full/styles.css"],"names":[],"mappings":"AAAA,yBACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,kBAAoB,CACzB,AAED,yBACE,8BAA+B,AACvB,sBAAuB,AAC/B,cAAe,AACf,iCAAkC,AAClC,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,8BAAuC,AACvC,8BAAwC,CACzC,AAED,yBACE,aAAc,AACV,SAAU,AACd,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,kBAAoB,CACzB,AAED,8DACE,gBAAkB,CACnB","file":"styles.css","sourcesContent":[":local(.container) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n\n:local(.column) {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  border-left: 1px solid rgb(32, 34, 40);\n  border-right: 1px solid rgb(32, 34, 40);\n}\n\n:local(.row) {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  overflow: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n\n:local(.row) > :local(.column):first-child {\n  border-left: none;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_3KA6I2kznP5rt1KWP2xbC6",
	"column": "_3VxWWXVMvqVObx-2N88fno",
	"row": "_3VbB5p9aRvqG7lq5K9JyMQ"
};

/***/ }),

/***/ 2277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Full_styles_css__ = __webpack_require__(1855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Full_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Balance__ = __webpack_require__(1787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateOrder__ = __webpack_require__(1788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OrderBook__ = __webpack_require__(1790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Charts__ = __webpack_require__(1848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__History__ = __webpack_require__(1793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MyOrders__ = __webpack_require__(1794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_autobind_decorator__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var Mid=(_class=function(_React$Component){_inherits(Mid,_React$Component);function Mid(){_classCallCheck(this,Mid);return _possibleConstructorReturn(this,(Mid.__proto__||Object.getPrototypeOf(Mid)).apply(this,arguments));}_createClass(Mid,[{key:'selectPrice',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref){var price=_ref.price,sell=_ref.sell;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.refs.createOrder.selectPrice({price:price,sell:sell});case 1:case'end':return _context.stop();}}},_callee,this);}));function selectPrice(_x){return _ref2.apply(this,arguments);}return selectPrice;}()},{key:'render',value:function render(){var flexWidth=this.props.width-240-280;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.container,style:{height:this.props.height}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:240}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Balance__["a" /* default */],{me:this.props.me,market:this.props.market}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CreateOrder__["a" /* default */],{ref:'createOrder',market:this.props.market})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:280}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.row},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__OrderBook__["a" /* default */],{onSelectPrice:this.selectPrice,market:this.props.market,height:this.props.height/2,width:280-2})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.row},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__History__["a" /* default */],{market:this.props.market,height:this.props.height/2}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:flexWidth}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Charts__["a" /* default */],{market:this.props.market,width:flexWidth,height:this.props.height/2}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__MyOrders__["a" /* default */],{market:this.props.market,width:flexWidth,height:this.props.height/2})));}}]);return Mid;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'selectPrice',[__WEBPACK_IMPORTED_MODULE_10_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'selectPrice'),_class.prototype)),_class);Mid.propTypes={market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,me:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,wallet:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ }),

/***/ 2278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tiny; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Full_styles_css__ = __webpack_require__(1855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Full_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Balance__ = __webpack_require__(1787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CreateOrder__ = __webpack_require__(1788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OrderBook__ = __webpack_require__(1790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__History__ = __webpack_require__(1793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MyOrders__ = __webpack_require__(1794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_autobind_decorator__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class;function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var Tiny=(_class=function(_React$Component){_inherits(Tiny,_React$Component);function Tiny(){_classCallCheck(this,Tiny);return _possibleConstructorReturn(this,(Tiny.__proto__||Object.getPrototypeOf(Tiny)).apply(this,arguments));}_createClass(Tiny,[{key:'selectPrice',value:function(){var _ref2=_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref){var price=_ref.price,sell=_ref.sell;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.refs.createOrder.selectPrice({price:price,sell:sell});case 1:case'end':return _context.stop();}}},_callee,this);}));function selectPrice(_x){return _ref2.apply(this,arguments);}return selectPrice;}()},{key:'render',value:function render(){var flexWidth=this.props.width-240;return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.container,style:{height:this.props.height}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:240}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Balance__["a" /* default */],{me:this.props.me,market:this.props.market}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CreateOrder__["a" /* default */],{ref:'createOrder',market:this.props.market})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:flexWidth}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.row},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:flexWidth/2}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__OrderBook__["a" /* default */],{onSelectPrice:this.selectPrice,market:this.props.market,height:this.props.height/2,width:flexWidth/2-2})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.column,style:{width:flexWidth/2}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__History__["a" /* default */],{market:this.props.market,height:this.props.height/2}))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div',{className:__WEBPACK_IMPORTED_MODULE_2__Full_styles_css___default.a.row},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__MyOrders__["a" /* default */],{market:this.props.market,width:flexWidth,height:this.props.height/2}))));}}]);return Tiny;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),(_applyDecoratedDescriptor(_class.prototype,'selectPrice',[__WEBPACK_IMPORTED_MODULE_9_autobind_decorator___default.a],Object.getOwnPropertyDescriptor(_class.prototype,'selectPrice'),_class.prototype)),_class);Tiny.propTypes={market:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,me:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,height:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,width:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,wallet:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object};

/***/ })

});


// WEBPACK FOOTER //
// static/js/2.8887c538.chunk.js