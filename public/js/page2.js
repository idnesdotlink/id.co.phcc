webpackJsonp([3],{

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SlideComponent__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SlideComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_SlideComponent__);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('slide-component', __WEBPACK_IMPORTED_MODULE_1__components_SlideComponent___default.a);

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(95)
/* template */
var __vue_template__ = __webpack_require__(96)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38289643"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/SlideComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38289643", Component.options)
  } else {
    hotAPI.reload("data-v-38289643", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0d8cfa40", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38289643\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SlideComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38289643\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SlideComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.slider[data-v-38289643] {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  height: 100%;\n}\n.slider ul[data-v-38289643] {\n  list-style: none;\n}\n.slider ul.slides[data-v-38289643] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  -webkit-transition: top 800ms;\n  transition: top 800ms;\n}\n.slider ul.slides li[data-v-38289643] {\n  height: 100%;\n}\n.slider ul.slides li .img[data-v-38289643] {\n  height: 100%;\n  background-size: cover;\n  background-position: 50%;\n}\n.slider ul.indicators[data-v-38289643] {\n  position: absolute;\n  padding-right: 40px;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2;\n  text-align: right;\n}\n.slider ul.indicators li[data-v-38289643] {\n  clear: both;\n}\n.slider ul.indicators li .item[data-v-38289643] {\n  position: relative;\n  margin-bottom: 16px;\n  float: right;\n}\n.slider ul.indicators li:last-child .item[data-v-38289643] {\n  margin-bottom: 0;\n}\n.slider ul.indicators li .title[data-v-38289643] {\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: 'SegoeUI-Bold';\n  -webkit-transition: font-size 0.6s ease-out;\n  transition: font-size 0.6s ease-out;\n}\n.slider ul.indicators li .mark[data-v-38289643] {\n  color: #fff;\n  font-family: 'SegoeUI-Semilight';\n}\n.slider ul.indicators li .dot[data-v-38289643] {\n  position: absolute;\n  top: 50%;\n  right: -20px;\n  margin-top: -5.5px;\n  margin-left: 10px;\n  width: 11px;\n  height: 11px;\n  background: #fff;\n  border-radius: 50%;\n}\n.slider ul.indicators li .progress[data-v-38289643] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  margin: 8px 0;\n  background: rgba(255, 255, 255, 0.5);\n}\n.slider ul.indicators li.active .title[data-v-38289643] {\n  -webkit-transition: font-size 0.6s ease-in;\n  transition: font-size 0.6s ease-in;\n  font-size: 36px;\n  font-family: 'SegoeUI-Light';\n}\n.slider ul.indicators li.active .progress .fill[data-v-38289643] {\n  height: 100%;\n  background: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'slidecomponent',
  data: function data() {
    return {
      slides: [{
        img: "/img/a.png",
        title: "Give Your Home a Little Responsibility",
        mark: "Convenience"
      }, {
        img: "/img/b.png",
        title: "Experience Lighting in a New Way",
        mark: "Lighting"
      }],
      current: 0,
      percent: 0,
      timer: 0,
      interval: 0,
      progress: 0,
      duration: 5000,
      playslides: []
    };
  },

  computed: {
    style: function style() {
      switch (this.current % 2) {
        case 0:
          return { top: "0" };
        case 1:
          return { top: "-100%" };
      }
    }
  },
  methods: {
    selectSlide: function selectSlide(i) {
      this.current = i;
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    process: function process() {
      this.current++;
      if (this.current >= this.slides.length) {
        this.current = 0;
      }
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    going: function going() {
      var time = new Date().getTime();
      this.percent = Math.floor(100 * (time - this.timer) / this.duration);
    },
    resetPlay: function resetPlay() {
      clearInterval(this.interval);
      clearInterval(this.progress);
      this.play();
    },
    stop: function stop() {
      clearInterval(this.interval);
      clearInterval(this.progress);
    },
    play: function play() {
      this.timer = new Date().getTime();
      this.progress = setInterval(this.going, this.duration / 100);
      this.interval = setInterval(this.process, this.duration);
    }
  },
  created: function created() {
    this.playslides[0] = this.slides[0];
    this.playslides[1] = this.slides[1];
    this.play();
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "slider" }, [
    _c(
      "ul",
      { staticClass: "slides", style: _vm.style },
      _vm._l(_vm.playslides, function(slide, i) {
        return _c("li", { key: i }, [
          _c("div", {
            staticClass: "img",
            style: { backgroundImage: "url(" + slide.img + ")" }
          })
        ])
      })
    ),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "indicators" },
      _vm._l(_vm.slides, function(slide, i) {
        return _c(
          "li",
          {
            key: i,
            class: i == _vm.current ? "active" : null,
            on: {
              click: function($event) {
                _vm.selectSlide(i)
              }
            }
          },
          [
            _c("div", { staticClass: "item" }, [
              _c("span", { staticClass: "title" }, [
                _vm._v(_vm._s(slide.title))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "progress" }, [
                _c("div", {
                  staticClass: "fill",
                  style: { width: _vm.percent + "%" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "dot" })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mark" }, [_vm._v(_vm._s(slide.mark))])
            ])
          ]
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38289643", module.exports)
  }
}

/***/ })

},[90]);