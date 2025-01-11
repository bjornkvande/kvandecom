"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 7252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9288);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9127);
/* harmony import */ var _BlogHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(534);
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4750);
function Template(props){const{pageContext,children}=props;const{frontmatter}=pageContext;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_default__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .P,{path:props.path},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:props.children,page:frontmatter,title:frontmatter.title||frontmatter.heading}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main",{className:"min-h-screen bg-center bg-no-repeat bg-cover pt-20 mb-16 max-w-4xl m-auto px-4 sm:px-6 md:px-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlogHeader__WEBPACK_IMPORTED_MODULE_2__/* .BlogHeader */ .Y,Object.assign({path:props.path},frontmatter)),children));}

/***/ }),

/***/ 1629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _frontmatter: () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3986);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9288);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5680);
/* harmony import */ var _Users_bjornjarle_projects_kvandecom_src_layout_layout_blog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7252);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5237);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5463);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1010);

const _excluded = ["components"];

/* @jsx mdx */

/* @jsxRuntime classic */
/* @jsx mdx */




const _frontmatter = {};
const layoutProps = {
  _frontmatter
};
const MDXLayout = _Users_bjornjarle_projects_kvandecom_src_layout_layout_blog_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
function MDXContent(_ref) {
  let {
      components
    } = _ref,
    props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_ref, _excluded);
  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1", {
    className: "px-2 text-center"
  }, "Bj\xF8rn Jarle Kvande"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
    className: "text-center text-lg sm:text-2xl"
  }, "Koderelatert arbeid, tanker, id\xE9er, og frustrasjoner"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .Image */ ._V, {
    src: "/coding/programmerspet.jpg",
    mdxType: "Image"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
    className: "sm:text-lg leading-7 sm:leading-9"
  }, "Hei, Bj\xF8rn Jarle heter jeg. Jeg bygger ting med kode. Her finner du en samling av innlegg om koding, tanker, id\xE9er, og frustrasjoner som farer gjennom hodet p\xE5 en utvikler som har v\xE6rt med siden Commodore 64 sin storhetstid. Jeg elsker faget mitt, jobber ustanselig for \xE5 bli bedre, er godt ute p\xE5 spekteret og er stadig sosialt forvirret. Men \xE5 programmere det er jeg god p\xE5."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .BlogEntry */ .Vv, {
    mdxType: "BlogEntry"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", null, `I'm a codeaholic`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/blog/codeaholic",
    mdxType: "Link"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
    src: "https://res.cloudinary.com/trailguide-as/image/upload/v1728468082/coding/codeaholics.webp",
    className: "w-48 ml-8 rounded md:float-right"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .ByLine */ .at, {
    author: "Bj\xF8rn Jarle",
    text: ", 9. october 2024",
    mdxType: "ByLine"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `My name is Bjørn and I'm a codeaholic. People call me a founder and an entrepreneur.
I am not. I am just a guy who likes to code and make stuff. I am a true codeaholic
who cannot escape the addiction.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
    parentName: "p",
    "href": "./blog/codeaholic"
  }, `Read more...`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .BlogEntry */ .Vv, {
    mdxType: "BlogEntry"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", null, `Would you rather have invested in a gold plated piece of lead, or a lead plated piece of gold?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .Image */ ._V, {
    src: "/coding/me_creating_stuff.jpg",
    href: "blog/gold_or_led",
    className: "mt-8 w-40 md:float-right md:ml-12 shadow-md rounded",
    mdxType: "Image"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .ByLine */ .at, {
    author: "Bj\xF8rn Jarle",
    text: ", 16. june 2023",
    mdxType: "ByLine"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Imagine you are an investor and you discover that the piece of gold you invested in was
just a piece of lead when you started polishing it. Do not get fooled my smooth-talking,
charismatic founders who are better at selling you a great story than actually creating
a great product.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
    parentName: "p",
    "href": "blog/gold_or_led"
  }, `Read more...`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .BlogEntry */ .Vv, {
    mdxType: "BlogEntry"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .DesktopRightImage */ .I7, {
    src: "/coding/kakediagram.jpeg",
    href: "blog/invester-i-produktet",
    mdxType: "DesktopRightImage"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", null, `Investere i jævla bra gründere eller jævla bra produkter?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .ByLine */ .at, {
    author: "Bj\xF8rn Jarle",
    text: ", 6. februar 2023",
    mdxType: "ByLine"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Investere i jævla dyktige gründere med middels bra produkter, eller et veldig bra
produkt med en middelmådig gründer? Hva er det som `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
    parentName: "p"
  }, `egentlig`), ` er det beste? Og for hvem?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
    parentName: "p",
    "href": "blog/invester-i-produktet"
  }, `Les mer...`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .BlogEntry */ .Vv, {
    mdxType: "BlogEntry"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_5__/* .DesktopRightImage */ .I7, {
    src: "/coding/test-suites-passed.jpeg",
    href: "blog/automatisert_testing",
    mdxType: "DesktopRightImage"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", null, `Automatisert testing`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .ByLine */ .at, {
    author: "Bj\xF8rn Jarle",
    text: ", 2. februar 2023",
    mdxType: "ByLine"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Hva er det som `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
    parentName: "p"
  }, `egentlig`), ` er det viktigste med automatisert testing av
programvare? Deployer du på en fredag ettermiddag kanskje?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
    parentName: "p",
    "href": "blog/automatisert_testing"
  }, `Les mer...`))));
}
;
MDXContent.isMDXComponent = true;

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-mdx.js.map