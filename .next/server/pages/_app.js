(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/style.css
var style = __webpack_require__(8702);
// EXTERNAL MODULE: ./styles/bootstrap/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9611);
// EXTERNAL MODULE: ./styles/bootstrap-icons/bootstrap-icons.css
var bootstrap_icons = __webpack_require__(4605);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./components/navbar.js





function navbaruser() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        id: "header",
        className: "navbar-dark d-flex align-items-cente",
        expand: "lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            className: "container-fluid container-xl d-flex align-items-center justify-content-lg-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Brand, {
                    href: "/",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "logo me-auto me-lg-0",
                            alt: "",
                            src: "/logo.png",
                            width: "30",
                            height: "30"
                        }),
                        "  "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                    id: "basic-navbar-nav fixed",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                        className: "ml-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-white text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("u", {
                                        children: "Warung kemarang"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "#book-a-table",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Reservasi"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "#specials",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Hiburan"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "#menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Menu"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const navbar = (navbaruser);

;// CONCATENATED MODULE: ./components/footer.js

const Footers = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright",
                children: [
                    "\xa9 Copyright ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "apisport."
                        })
                    }),
                    "creator website"
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footers);

;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: ./components/layout.js






const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container-xxl mx-auto p-0 position-relative header-2-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_helmet_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js",
                        integrity: "undefined",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "../../styles/bootstrap/js/bootstrap.min.js"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Warung kemarang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: true,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: true,
                        name: "keywords"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./components/navbaradmin.js





function navbarAdmin() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        id: "header",
        className: "navbar-dark d-flex align-items-cente",
        expand: "lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            className: "container-fluid container-xl d-flex align-items-center justify-content-lg-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Brand, {
                    href: "#home",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "logo me-auto me-lg-0",
                            alt: "",
                            src: "/logo.png",
                            width: "50",
                            height: "50"
                        }),
                        "  "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                        className: "navbar-header ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-white text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("u", {
                                        children: "Warung kemarang"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/home",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/pesanan",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Pesanan"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/data-pesanan",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Data Pesanan"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/tambah-ruang",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Ruang"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/tambah-paket",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Paket"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/tambah-hiburan",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Hiburan"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                className: "nav-link scrollto",
                                href: "../admin/tambah-album",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-white text-start",
                                    children: "Album"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const navbaradmin = (navbarAdmin);

;// CONCATENATED MODULE: ./components/layoutadmin.js





const layoutadmin = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container-xxl mx-auto p-0 position-relative header-2-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_helmet_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js",
                        integrity: "undefined",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "../../styles/bootstrap/js/bootstrap.min.js"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1.0",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Warung kemarang"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: true,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: true,
                        name: "keywords"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbaradmin, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const components_layoutadmin = (layoutadmin);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./styles/font-awesome-4.7.0/css/font-awesome.min.css
var font_awesome_min = __webpack_require__(8093);
;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    if (router.pathname.startsWith("/admin/")) {
        return /*#__PURE__*/ jsx_runtime_.jsx(components_layoutadmin, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        });
    }
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4605:
/***/ (() => {



/***/ }),

/***/ 9611:
/***/ (() => {



/***/ }),

/***/ 8093:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 8702:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
   false
    ? 0
    : __webpack_require__(3573)


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,573], () => (__webpack_exec__(9226)));
module.exports = __webpack_exports__;

})();