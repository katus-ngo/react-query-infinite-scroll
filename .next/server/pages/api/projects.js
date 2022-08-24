"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
exports.modules = {

/***/ "(api)/./pages/api/projects.js":
/*!*******************************!*\
  !*** ./pages/api/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// an endpoint for getting projects data\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const cursor = parseInt(req.query.cursor) || 0;\n    const pageSize = 5;\n    const data = Array(pageSize).fill(0).map((_, i)=>{\n        return {\n            name: \"Project \" + (i + cursor) + ` (server time: ${Date.now()})`,\n            id: i + cursor\n        };\n    });\n    const nextId = cursor < 10 ? data[data.length - 1].id + 1 : null;\n    const previousId = cursor > -10 ? data[0].id - pageSize : null;\n    setTimeout(()=>res.json({\n            data,\n            nextId,\n            previousId\n        }), 1000);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHdDQUF3QztBQUN4QyxpRUFBZSxDQUFDQSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMzQixNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxLQUFLLENBQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUMsTUFBTUcsUUFBUSxHQUFHLENBQUM7SUFFbEIsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNGLFFBQVEsQ0FBQyxDQUN6QkcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUs7UUFDYixPQUFPO1lBQ0xDLElBQUksRUFBRSxVQUFVLEdBQUcsQ0FBQ0QsQ0FBQyxHQUFHVCxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRVcsSUFBSSxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakVDLEVBQUUsRUFBRUosQ0FBQyxHQUFHVCxNQUFNO1NBQ2Y7S0FDRixDQUFDO0lBRUosTUFBTWMsTUFBTSxHQUFHZCxNQUFNLEdBQUcsRUFBRSxHQUFHSSxJQUFJLENBQUNBLElBQUksQ0FBQ1csTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDRixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDaEUsTUFBTUcsVUFBVSxHQUFHaEIsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLEVBQUUsR0FBR1YsUUFBUSxHQUFHLElBQUk7SUFFOURjLFVBQVUsQ0FBQyxJQUFNbEIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDO1lBQUVkLElBQUk7WUFBRVUsTUFBTTtZQUFFRSxVQUFVO1NBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztDQUMvRCIsInNvdXJjZXMiOlsid2VicGFjazovL0B0YW5zdGFjay9xdWVyeS1leGFtcGxlLXJlYWN0LWxvYWQtbW9yZS1pbmZpbml0ZS1zY3JvbGwvLi9wYWdlcy9hcGkvcHJvamVjdHMuanM/YTU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbiBlbmRwb2ludCBmb3IgZ2V0dGluZyBwcm9qZWN0cyBkYXRhXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgY3Vyc29yID0gcGFyc2VJbnQocmVxLnF1ZXJ5LmN1cnNvcikgfHwgMFxuICBjb25zdCBwYWdlU2l6ZSA9IDVcblxuICBjb25zdCBkYXRhID0gQXJyYXkocGFnZVNpemUpXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChfLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnUHJvamVjdCAnICsgKGkgKyBjdXJzb3IpICsgYCAoc2VydmVyIHRpbWU6ICR7RGF0ZS5ub3coKX0pYCxcbiAgICAgICAgaWQ6IGkgKyBjdXJzb3IsXG4gICAgICB9XG4gICAgfSlcblxuICBjb25zdCBuZXh0SWQgPSBjdXJzb3IgPCAxMCA/IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5pZCArIDEgOiBudWxsXG4gIGNvbnN0IHByZXZpb3VzSWQgPSBjdXJzb3IgPiAtMTAgPyBkYXRhWzBdLmlkIC0gcGFnZVNpemUgOiBudWxsXG5cbiAgc2V0VGltZW91dCgoKSA9PiByZXMuanNvbih7IGRhdGEsIG5leHRJZCwgcHJldmlvdXNJZCB9KSwgMTAwMClcbn1cbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjdXJzb3IiLCJwYXJzZUludCIsInF1ZXJ5IiwicGFnZVNpemUiLCJkYXRhIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJuYW1lIiwiRGF0ZSIsIm5vdyIsImlkIiwibmV4dElkIiwibGVuZ3RoIiwicHJldmlvdXNJZCIsInNldFRpbWVvdXQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/projects.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/projects.js"));
module.exports = __webpack_exports__;

})();