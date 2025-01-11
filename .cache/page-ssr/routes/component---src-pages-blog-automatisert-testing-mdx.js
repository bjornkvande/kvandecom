"use strict";
exports.id = 435;
exports.ids = [435];
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

/***/ 4999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _frontmatter: () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3986);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9288);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5680);
/* harmony import */ var _Users_bjornjarle_projects_kvandecom_src_layout_layout_blog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7252);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1010);

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
    props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ref, _excluded);
  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", null, `Hvorfor er gode automatiserte tester så viktig?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Mange utviklere maser om at man må drive test-driven development (TDD) og ha unit- og
integrasjonstester for systemene man utvikler.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Så har du utviklere som sier de ikke har tid til å skrive tester eller mener testene
kommer i veien for videreutviklingen av systemet sitt.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `"Hver gang jeg endrer noe i koden eller skal legge til en ny funksjon så er det noen av
testene som feiler og jeg må fikse på testen" er noen av unnskyldningene man hører.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Jeg er definitivt av den typen utviklere som skriver tester og jeg kan ikke forstå
hvorfor andre velger å ikke ha gode tester for prosjektet sitt. Uten tester blir det
for meg som å hoppe fra et fly uten fallskjerm (håper de i det lengste det skal gå bra?)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Hva er viktig for å lykkes med test-driven development, og hva er det som `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
    parentName: "p"
  }, `egentlig`), `
er det viktigste med automatisert testing.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", null, `Test-driven development`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Prinsippet er enkelt. Man skriver en test for funksjonen man skal lage. Ser at testen
feiler (rødt). Implementerer funksjonen med en røff implementasjon og får det til å
virke (grønt). Deretter bruker man litt tid på å skrive om koden slik at den blir lett
å lese, lett å forstå og gjerne mindre i samme slengen (refactor).`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Følger man en slik prosess får man god kode som virker (i følge testene) og på kjøpet
får man et sikkerhetsnett mot å ødelegge noe når koden senere trenger å endres.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", null, `En iterativ prosess`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Mange reagerer med "jeg kan da ikke skrive en hel test før jeg vet hva jeg skal lage".
Det er jo selvsagt sant.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Skriving av tester og kode er en iterativ prosess hvor man skriver test og kode
parallelt, litt av testen først, og deretter litt av koden. Litt test. Litt kode. Så
kommer man til slutten og du vet du er ferdig med funksjonen og den fungerer.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", null, `Testing av oppførsel, ikke implementasjon`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Hva er det som har skjedd når testene kommer i veien for videreutviklingen og de
lyser rødt hver gang man skal endre noe eller legge til noe?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Dette skjer fordi man har skrevet en test som tester implementasjonen i stedet for
den forventede oppførselen. Dette skjer gjerne om man skriver tester i ettertid hvor man
ser på hvordan man har implementert en funksjon for å skrive testen.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Testene dine blir dermed mer som en hemsko og et irritasjonsmoment som begrenser
utviklingstempo i stedet for et verdifullt sikkerhetsnett som øker utviklingshastigheten.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Har du en test-driven utviklingsprosess (hvor testene driver implementasjonen) vil
testene naturlig ende opp med å teste oppførselen, ikke implementasjonen.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", null, `Tester må kjøres raskt`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Man må skrive tester som kjøres raskt. De skal kjøre på sekunder, og ikke minutter.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Man bør ha en iterativ prosess hvor man har tester kjørende i bakgrunnen (automatisk
utvalgt basert på koden som er endret) og man ser med en gang om man har ødelagt noe.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Man bør ha en iterativ prosess hvor man gjerne comitter kode flere ganger i timen, og
hvor man hele tiden er sikker på at koden fungerer og kan deployes på et øyeblikks
varsel.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Mine 2930 unit- og integrasjonstester kjøres på 30 sekunder. Dermed kommer de ikke
i veien og du kjører dem kanskje hundrevis av ganger gjennom hele dagen.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ ._V, {
    src: "/news/test-suites-passed.png",
    mdxType: "Image"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", null, `Hva er det absolutt viktigste med automatiserte tester?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Med test-driven development og automatiserte unit- og integrasjonstester får man et
verktøy for å vite at koden fungerer etter intensjonen og man får et sikkerhetsnett
mot å ødelegge noe når man trenger å endre koden eller legge til nye funksjoner.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Men hva er det som `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
    parentName: "p"
  }, `egentlig`), ` er det viktigste med automatisert testing i et
langvarig utviklingsprosjekt?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
    parentName: "p"
  }, `Med automatiserte tester, som tester oppførsel, har du alltid mulighet til å endre
og forbedre kodebasen din og hele tiden holde den i en optimal helsetilstand.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Dette er det absolutt viktigste med automatiserte tester om man har et prosjekt som går
over flere år og skal videreutvikles.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Har man ikke tester og skal legge til ny funksjonalitet har man ingen garanti for at
man ikke ødelegger noe. Man har også en tendens til å "skvise" inn ny funksjonalitet
et sted i koden fordi man ikke tør å rydde opp først uten å kanskje ødelegge noe.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Dermed vil kodebasen din sakte men sikkert kompliseres, bli uoversiktlig, teknisk
gjeld bygger seg opp og til slutt størkner den som en bolle med ei ukes gammel spaghetti.
All videreutvikling stopper opp og du har ikke mulighet til å fikse feil uten å introdusere
nye feil.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Hvordan man kan utvikle kommersiell programvare uten å ha muligheten til å kontinuerlig
forbedre og forenkle den dyrebare kodebasen sin fordi de ikke har tid til å skrive
tester, det er for meg helt uforståelig. Man kommer til et punkt hvor alt stopper opp
til slutt. Det er da utviklere maser om å begynne på nytt og lover på død og liv at
"denne gangen, da skal det bli perfekt".`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `En kodebase er alltid deilig og flott når den er ny. Alt er oversiktlig og ingenting
er komplisert. Utviklingen er artig og det går kjempefort. Helt til det ikke gjør
det lenger og man ligger i grøfta. Tiden det tar før man havner i grøfta med koden
sin kan være mye kortere enn man tror og man vet ikke helt hva som skjedde.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", null, `Jeg deployer alltid en ny versjon fredag ettermiddag jeg!`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Selv nyter jeg et fantastisk sikkerhetsnett i kodebasen min med en miks av
statisk kodeanalyse (eslint), unit- og integrasjonstester (jest/react-testing-library),
ende-til-ende tester (cypress) og sanntids feilrapportering i produksjon (sentry).`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Jeg følger alltid "speider-prinsippet" hvor man forlater koden litt bedre enn
når man kom når man skal legge til ny funksjonalitet. Og jeg gjør det fryktløst.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Jeg kan legge til ny funksjonalitet i løpet av noen minutter eller noen få timer. Jeg
legger gjerne ut 10-15 nye versjoner per dag.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Og jeg deployer `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
    parentName: "p"
  }, `alltid`), ` på en fredag ettermiddag. Kan du gjøre det?`));
}
;
MDXContent.isMDXComponent = true;

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-automatisert-testing-mdx.js.map