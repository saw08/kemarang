"use strict";
(() => {
var exports = {};
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection mahasiswa
async function getMenu(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let menu = await db.collection("menu").find({}).sort({}).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(menu)),
            success: true
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// menambah data kedalam collection mahasiswa
async function addMenu(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection("menu").insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: "Data menu Telah di Tambahkan",
            success: true
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// CRUD handler
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case "GET":
            {
                return getMenu(req, res);
            }
        case "POST":
            {
                return addMenu(req, res);
            }
        case "PUT":
            {
                return updateMenu(req, res);
            }
        case "DELETE":
            {
                return deleteaMenu(req, res);
            }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(6471)));
module.exports = __webpack_exports__;

})();