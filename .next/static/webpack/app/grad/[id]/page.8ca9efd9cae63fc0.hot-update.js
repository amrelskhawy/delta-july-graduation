"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/grad/[id]/page",{

/***/ "(app-pages-browser)/./app/grad/[id]/page.jsx":
/*!********************************!*\
  !*** ./app/grad/[id]/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_StudentInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/StudentInfo */ \"(app-pages-browser)/./components/StudentInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./components/Footer.jsx\");\n/* harmony import */ var _components_AllDegrees__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AllDegrees */ \"(app-pages-browser)/./components/AllDegrees.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Page(param) {\n    let { params } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [studentsData, setStudentsData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [student, setStudent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"/dessoq-data.json\").then((res)=>res.json()).then((students)=>{\n            setStudentsData(students);\n            console.log(students);\n            const studentBack = students.find((student)=>parseInt(student.id) === parseInt(params.id));\n            if (studentBack) {\n                setStudent(studentBack);\n            } else {\n                setTimeout(()=>{\n                    router.push(\"/\");\n                }, 3000);\n            }\n            setTimeout(()=>{\n                setLoading(false);\n            }, 1000);\n        }).then((student)=>console.log(student));\n    }, []);\n    const getStudentData = ()=>{\n        const studentBack = studentsData.find((student)=>parseInt(student.id) === parseInt(id));\n        (()=>{\n            setStudent((prevStudent)=>{\n                // Update the state immediately with the latest value\n                return studentBack;\n            });\n        })();\n        {}\n    };\n    // if (loading) {\n    //   return (\n    //     <div className=\"w-full h-screen flex justify-center items-center\">\n    //       <div className=\"w-[500px]   flex justify-center items-center h-[500px] flex-col gap-8 \">\n    //         <Spinner size=\"lg\" />\n    //         <h3 className=\"text-xl font-medium\">\n    //           يرجي الانتظار حتي يتم تحميل النتيجة\n    //         </h3>\n    //       </div>\n    //     </div>\n    //   )\n    // }\n    if (student) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative my-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-[800px]  mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StudentInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                student: student\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AllDegrees__WEBPACK_IMPORTED_MODULE_6__.AllDegrees, {\n                                student: student\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-[800px] mt-24 mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-4xl text-center\",\n                        children: [\n                            \"لا يوجد طالب مسجل لدينا \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 37\n                            }, this),\n                            \"بالرقم القومى المدخل\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Amr\\\\Desktop\\\\july-grad\\\\app\\\\grad\\\\[id]\\\\page.jsx\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Page, \"6HAA1YISE9qxTWlVCVgWcZ6v0lw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ncmFkL1tpZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDVTtBQUNQO0FBQ0E7QUFDQTtBQUNLO0FBQ1I7QUFDWTtBQUV0QyxTQUFTVSxLQUFLLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFFM0IsTUFBTUMsU0FBU1AsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQTtJQUV0QyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSZSxXQUFXO1FBQ1hDLE1BQU0scUJBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTFQsZ0JBQWdCUztZQUNoQkMsUUFBUUMsR0FBRyxDQUFDRjtZQUdaLE1BQU1HLGNBQWNILFNBQVNJLElBQUksQ0FBQyxDQUFDWixVQUFZYSxTQUFTYixRQUFRYyxFQUFFLE1BQU1ELFNBQVNqQixPQUFPa0IsRUFBRTtZQUUxRixJQUFJSCxhQUFhO2dCQUNmVixXQUFXVTtZQUNiLE9BQU87Z0JBRUxJLFdBQVc7b0JBQ1RsQixPQUFPbUIsSUFBSSxDQUFDO2dCQUNkLEdBQUc7WUFDTDtZQUVBRCxXQUFXO2dCQUNUWixXQUFXO1lBQ2IsR0FBRztRQUNMLEdBQ0NFLElBQUksQ0FBQ0wsQ0FBQUEsVUFBV1MsUUFBUUMsR0FBRyxDQUFDVjtJQUNqQyxHQUFHLEVBQUU7SUFHTCxNQUFNaUIsaUJBQWlCO1FBRXJCLE1BQU1OLGNBQWNiLGFBQWFjLElBQUksQ0FBQyxDQUFDWixVQUFZYSxTQUFTYixRQUFRYyxFQUFFLE1BQU1ELFNBQVNDO1FBRXBGO1lBQ0NiLFdBQVcsQ0FBQ2lCO2dCQUNWLHFEQUFxRDtnQkFDckQsT0FBT1A7WUFDVDtRQUNGO1FBQ0EsQ0FBc0I7SUFFeEI7SUFFQSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlFQUF5RTtJQUN6RSxpR0FBaUc7SUFDakcsZ0NBQWdDO0lBQ2hDLCtDQUErQztJQUMvQyxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBRWhCLGVBQWU7SUFDZixhQUFhO0lBQ2IsTUFBTTtJQUNOLElBQUk7SUFFSixJQUFJWCxTQUFTO1FBQ1gscUJBQ0UsOERBQUNtQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ25DLDBEQUFNQTs7Ozs7OEJBQ1AsOERBQUNrQztvQkFBSUMsV0FBVTs4QkFHYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQVdiLDhEQUFDbEMsK0RBQVdBO2dDQUFDYyxTQUFTQTs7Ozs7OzBDQUN0Qiw4REFBQ04sOERBQVVBO2dDQUFDTSxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSXpCLDhEQUFDUCwwREFBTUE7Ozs7Ozs7Ozs7O0lBR2IsT0FFSztRQUNILHFCQUNFLDhEQUFDMEI7OzhCQUNDLDhEQUFDbEMsMERBQU1BOzs7Ozs4QkFDUCw4REFBQ2tDO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBRUQsV0FBVTs7NEJBQXVCOzBDQUNWLDhEQUFDRTs7Ozs7NEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU14QztBQUVGO0dBM0d3QjNCOztRQUVQTCxzREFBU0E7OztLQUZGSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ3JhZC9baWRdL3BhZ2UuanN4PzA3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IFN0dWRlbnRJbmZvIGZyb20gXCJAL2NvbXBvbmVudHMvU3R1ZGVudEluZm9cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgTGluaywgQnV0dG9uIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgQWxsRGVncmVlcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQWxsRGVncmVlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IHBhcmFtcyB9KSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IFtzdHVkZW50c0RhdGEsIHNldFN0dWRlbnRzRGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbc3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgZmV0Y2goJy9kZXNzb3EtZGF0YS5qc29uJylcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHN0dWRlbnRzKSA9PiB7XHJcbiAgICAgICAgc2V0U3R1ZGVudHNEYXRhKHN0dWRlbnRzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0dWRlbnRzKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudEJhY2sgPSBzdHVkZW50cy5maW5kKChzdHVkZW50KSA9PiBwYXJzZUludChzdHVkZW50LmlkKSA9PT0gcGFyc2VJbnQocGFyYW1zLmlkKSk7XHJcblxyXG4gICAgICAgIGlmIChzdHVkZW50QmFjaykge1xyXG4gICAgICAgICAgc2V0U3R1ZGVudChzdHVkZW50QmFjaylcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHN0dWRlbnQgPT4gY29uc29sZS5sb2coc3R1ZGVudCkpXHJcbiAgfSwgW10pXHJcblxyXG5cclxuICBjb25zdCBnZXRTdHVkZW50RGF0YSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBzdHVkZW50QmFjayA9IHN0dWRlbnRzRGF0YS5maW5kKChzdHVkZW50KSA9PiBwYXJzZUludChzdHVkZW50LmlkKSA9PT0gcGFyc2VJbnQoaWQpKTtcclxuXHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICBzZXRTdHVkZW50KChwcmV2U3R1ZGVudCkgPT4ge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgaW1tZWRpYXRlbHkgd2l0aCB0aGUgbGF0ZXN0IHZhbHVlXHJcbiAgICAgICAgcmV0dXJuIHN0dWRlbnRCYWNrO1xyXG4gICAgICB9KTtcclxuICAgIH0pKClcclxuICAgIHsvKiAzMDUwMjA4MTUwMTgxNSAqLyB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gaWYgKGxvYWRpbmcpIHtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1MDBweF0gICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVs1MDBweF0gZmxleC1jb2wgZ2FwLTggXCI+XHJcbiAgLy8gICAgICAgICA8U3Bpbm5lciBzaXplPVwibGdcIiAvPlxyXG4gIC8vICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj5cclxuICAvLyAgICAgICAgICAg2YrYsdis2Yog2KfZhNin2YbYqti42KfYsSDYrdiq2Yog2YrYqtmFINiq2K3ZhdmK2YQg2KfZhNmG2KrZitis2KlcclxuICAvLyAgICAgICAgIDwvaDM+XHJcblxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgIClcclxuICAvLyB9XHJcblxyXG4gIGlmIChzdHVkZW50KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiAgXCI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktMTJcIj5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bODAwcHhdICBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDYp9mE2LnZiNiv2Kkg2KfZhNmJINin2YTYsdim2YrYs9mK2KlcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8U3R1ZGVudEluZm8gc3R1ZGVudD17c3R1ZGVudH0gLz5cclxuICAgICAgICAgICAgPEFsbERlZ3JlZXMgc3R1ZGVudD17c3R1ZGVudH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVs4MDBweF0gbXQtMjQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAg2YTYpyDZitmI2KzYryDYt9in2YTYqCDZhdiz2KzZhCDZhNiv2YrZhtinIDxiciAvPlxyXG4gICAgICAgICAgICDYqNin2YTYsdmC2YUg2KfZhNmC2YjZhdmJINin2YTZhdiv2K7ZhFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIkhlYWRlciIsIlN0dWRlbnRJbmZvIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwidXNlUm91dGVyIiwiTGluayIsIkJ1dHRvbiIsIkZvb3RlciIsIkFsbERlZ3JlZXMiLCJQYWdlIiwicGFyYW1zIiwicm91dGVyIiwic3R1ZGVudHNEYXRhIiwic2V0U3R1ZGVudHNEYXRhIiwic3R1ZGVudCIsInNldFN0dWRlbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzdHVkZW50cyIsImNvbnNvbGUiLCJsb2ciLCJzdHVkZW50QmFjayIsImZpbmQiLCJwYXJzZUludCIsImlkIiwic2V0VGltZW91dCIsInB1c2giLCJnZXRTdHVkZW50RGF0YSIsInByZXZTdHVkZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/grad/[id]/page.jsx\n"));

/***/ })

});