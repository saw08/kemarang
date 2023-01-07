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
exports.id = "pages/api/db_ruangan";
exports.ids = ["pages/api/db_ruangan"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\n// check the MongoDB URI\nif (!MONGODB_URI) {\n    throw new Error(\"Define the MONGODB_URI environmental variable\");\n} // check the MongoDB DB\nif (!MONGODB_DB) {\n    throw new Error(\"Define the MONGODB_DB environmental variable\");\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    // check the cached.\n    if (cachedClient && cachedDb) {\n        // load from cache\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    // set the connection options\n    const opts = {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    };\n    // Connect to cluster\n    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);\n    await client.connect();\n    let db = client.db(MONGODB_DB);\n    // set cache\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client: cachedClient,\n        db: cachedDb\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFDdEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBQUUsTUFBTUcsYUFBYUYsUUFBUUMsR0FBRyxDQUFDRSxPQUFPO0FBQ25GLHdCQUF3QjtBQUN4QixJQUFJLENBQUNKLGFBQWE7SUFDZCxNQUFNLElBQUlLLE1BQU0saURBQWlEO0FBQ3JFLENBQUMsQ0FBQyx1QkFBdUI7QUFDekIsSUFBSSxDQUFDRixZQUFZO0lBQ2IsTUFBTSxJQUFJRSxNQUFNLGdEQUFnRDtBQUNwRSxDQUFDO0FBQUMsSUFBSUMsZUFDRixJQUFJO0FBQ1IsSUFBSUMsV0FBVyxJQUFJO0FBQ1osZUFBZUMsb0JBQW9CO0lBQ3RDLG9CQUFvQjtJQUNwQixJQUFJRixnQkFBZ0JDLFVBQVU7UUFDMUIsa0JBQWtCO1FBQ2xCLE9BQU87WUFDSEUsUUFBUUg7WUFDUkksSUFBSUg7UUFDUjtJQUNKLENBQUM7SUFDRCw2QkFBNkI7SUFDN0IsTUFBTUksT0FDTjtRQUNJQyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDNUI7SUFDQSxxQkFBcUI7SUFDckIsSUFBSUosU0FBUyxJQUFJVixnREFBV0EsQ0FBQ0MsYUFBYVc7SUFDMUMsTUFBTUYsT0FBT0ssT0FBTztJQUNwQixJQUFJSixLQUFLRCxPQUFPQyxFQUFFLENBQUNQO0lBQ25CLFlBQVk7SUFDWkcsZUFBZUc7SUFDZkYsV0FBV0c7SUFDWCxPQUFPO1FBQ0hELFFBQVFIO1FBQ1JJLElBQUlIO0lBQ1I7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzZXJ2YXNpLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJOyBjb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuREJfTkFNRTtcclxuLy8gY2hlY2sgdGhlIE1vbmdvREIgVVJJXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudGFsIHZhcmlhYmxlJyk7XHJcbn0gLy8gY2hlY2sgdGhlIE1vbmdvREIgREJcclxuaWYgKCFNT05HT0RCX0RCKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudGFsIHZhcmlhYmxlJyk7XHJcbn0gbGV0IGNhY2hlZENsaWVudCA9XHJcbiAgICBudWxsO1xyXG5sZXQgY2FjaGVkRGIgPSBudWxsO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgICAvLyBjaGVjayB0aGUgY2FjaGVkLlxyXG4gICAgaWYgKGNhY2hlZENsaWVudCAmJiBjYWNoZWREYikge1xyXG4gICAgICAgIC8vIGxvYWQgZnJvbSBjYWNoZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNsaWVudDogY2FjaGVkQ2xpZW50LFxyXG4gICAgICAgICAgICBkYjogY2FjaGVkRGIsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIHNldCB0aGUgY29ubmVjdGlvbiBvcHRpb25zXHJcbiAgICBjb25zdCBvcHRzID1cclxuICAgIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfTtcclxuICAgIC8vIENvbm5lY3QgdG8gY2x1c3RlclxyXG4gICAgbGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwgb3B0cyk7XHJcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgbGV0IGRiID0gY2xpZW50LmRiKE1PTkdPREJfREIpO1xyXG4gICAgLy8gc2V0IGNhY2hlXHJcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XHJcbiAgICBjYWNoZWREYiA9IGRiO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGllbnQ6IGNhY2hlZENsaWVudCxcclxuICAgICAgICBkYjogY2FjaGVkRGIsXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9EQiIsIkRCX05BTUUiLCJFcnJvciIsImNhY2hlZENsaWVudCIsImNhY2hlZERiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/db_ruangan.js":
/*!*********************************!*\
  !*** ./pages/api/db_ruangan.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { connectToDatabase  } = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\nconst ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectId);\n// mengambil data dari collection mahasiswa\nasync function getRuangan(req, res) {\n    try {\n        // connect to the database\n        let { db  } = await connectToDatabase();\n        // fetch the posts\n        let ruangan = await db.collection(\"ruangan\").find({}).sort({}).toArray();\n        // return the posts\n        return res.json({\n            message: JSON.parse(JSON.stringify(ruangan)),\n            success: true\n        });\n    } catch (error) {\n        // return the error\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n// menambah data kedalam collection mahasiswa\nasync function addRuangan(req, res) {\n    try {\n        // connect to the database\n        let { db  } = await connectToDatabase();\n        // add the post\n        await db.collection(\"ruangan\").insertOne(JSON.parse(req.body));\n        // return a message\n        return res.json({\n            message: \"Data ruangan Telah di Tambahkan\",\n            success: true\n        });\n    } catch (error) {\n        // return an error\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n// CRUD handler\nasync function handler(req, res) {\n    // switch the methods\n    switch(req.method){\n        case \"GET\":\n            {\n                return getRuangan(req, res);\n            }\n        case \"POST\":\n            {\n                return addRuangan(req, res);\n            }\n        case \"PUT\":\n            {\n                return updateRuangan(req, res);\n            }\n        case \"DELETE\":\n            {\n                return deleteaRuangan(req, res);\n            }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGJfcnVhbmdhbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxrQkFBaUIsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUN0QyxNQUFNQyxXQUFXRCx3REFBMkI7QUFDNUMsMkNBQTJDO0FBQzNDLGVBQWVFLFdBQVdDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hDLElBQUk7UUFDQSwwQkFBMEI7UUFDMUIsSUFBSSxFQUFFQyxHQUFFLEVBQUUsR0FBRyxNQUFNTjtRQUNuQixrQkFBa0I7UUFDbEIsSUFBSU8sVUFBVSxNQUFNRCxHQUNmRSxVQUFVLENBQUMsV0FDWEMsSUFBSSxDQUFDLENBQUMsR0FDTkMsSUFBSSxDQUFDLENBQUMsR0FDTkMsT0FBTztRQUNaLG1CQUFtQjtRQUNuQixPQUFPTixJQUFJTyxJQUFJLENBQUM7WUFDWkMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNUO1lBQ25DVSxTQUFTLElBQUk7UUFDakI7SUFDSixFQUFFLE9BQU9DLE9BQU87UUFDWixtQkFBbUI7UUFDbkIsT0FBT2IsSUFBSU8sSUFBSSxDQUFDO1lBQ1pDLFNBQVMsSUFBSU0sTUFBTUQsT0FBT0wsT0FBTztZQUNqQ0ksU0FBUyxLQUFLO1FBQ2xCO0lBQ0o7QUFDSjtBQUNBLDZDQUE2QztBQUM3QyxlQUFlRyxXQUFXaEIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDaEMsSUFBSTtRQUNBLDBCQUEwQjtRQUMxQixJQUFJLEVBQUVDLEdBQUUsRUFBRSxHQUFHLE1BQU1OO1FBQ25CLGVBQWU7UUFDZixNQUFNTSxHQUFHRSxVQUFVLENBQUMsV0FBV2EsU0FBUyxDQUFDUCxLQUFLQyxLQUFLLENBQUNYLElBQUlrQixJQUFJO1FBQzVELG1CQUFtQjtRQUNuQixPQUFPakIsSUFBSU8sSUFBSSxDQUFDO1lBQ1pDLFNBQVM7WUFDVEksU0FBUyxJQUFJO1FBQ2pCO0lBQ0osRUFBRSxPQUFPQyxPQUFPO1FBQ1osa0JBQWtCO1FBQ2xCLE9BQU9iLElBQUlPLElBQUksQ0FBQztZQUNaQyxTQUFTLElBQUlNLE1BQU1ELE9BQU9MLE9BQU87WUFDakNJLFNBQVMsS0FBSztRQUNsQjtJQUNKO0FBQ0o7QUFDQSxlQUFlO0FBQ0EsZUFBZU0sUUFBUW5CLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLHFCQUFxQjtJQUNyQixPQUFRRCxJQUFJb0IsTUFBTTtRQUNkLEtBQUs7WUFBTztnQkFDUixPQUFPckIsV0FBV0MsS0FBS0M7WUFDM0I7UUFDQSxLQUFLO1lBQVE7Z0JBQ1QsT0FBT2UsV0FBV2hCLEtBQUtDO1lBQzNCO1FBQ0EsS0FBSztZQUFPO2dCQUNSLE9BQU9vQixjQUFjckIsS0FBS0M7WUFDOUI7UUFDQSxLQUFLO1lBQVU7Z0JBQ1gsT0FBT3FCLGVBQWV0QixLQUFLQztZQUMvQjtJQUNKO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc2VydmFzaS8uL3BhZ2VzL2FwaS9kYl9ydWFuZ2FuLmpzP2UxMzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjb25uZWN0VG9EYXRhYmFzZSB9ID0gcmVxdWlyZSgnLi4vLi4vbGliL21vbmdvZGInKTtcclxuY29uc3QgT2JqZWN0SWQgPSByZXF1aXJlKCdtb25nb2RiJykuT2JqZWN0SWQ7XHJcbi8vIG1lbmdhbWJpbCBkYXRhIGRhcmkgY29sbGVjdGlvbiBtYWhhc2lzd2FcclxuYXN5bmMgZnVuY3Rpb24gZ2V0UnVhbmdhbihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgICAgIC8vIGZldGNoIHRoZSBwb3N0c1xyXG4gICAgICAgIGxldCBydWFuZ2FuID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3J1YW5nYW4nKVxyXG4gICAgICAgICAgICAuZmluZCh7fSlcclxuICAgICAgICAgICAgLnNvcnQoe30pXHJcbiAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBwb3N0c1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocnVhbmdhbikpLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGVycm9yXHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyBtZW5hbWJhaCBkYXRhIGtlZGFsYW0gY29sbGVjdGlvbiBtYWhhc2lzd2FcclxuYXN5bmMgZnVuY3Rpb24gYWRkUnVhbmdhbihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgICAgIC8vIGFkZCB0aGUgcG9zdFxyXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3J1YW5nYW4nKS5pbnNlcnRPbmUoSlNPTi5wYXJzZShyZXEuYm9keSkpO1xyXG4gICAgICAgIC8vIHJldHVybiBhIG1lc3NhZ2VcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnRGF0YSBydWFuZ2FuIFRlbGFoIGRpIFRhbWJhaGthbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIHJldHVybiBhbiBlcnJvclxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gQ1JVRCBoYW5kbGVyXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIC8vIHN3aXRjaCB0aGUgbWV0aG9kc1xyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzoge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UnVhbmdhbihyZXEsIHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ1BPU1QnOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRSdWFuZ2FuKHJlcSwgcmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnUFVUJzoge1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlUnVhbmdhbihyZXEsIHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0RFTEVURSc6IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZWFSdWFuZ2FuKHJlcSwgcmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJyZXF1aXJlIiwiT2JqZWN0SWQiLCJnZXRSdWFuZ2FuIiwicmVxIiwicmVzIiwiZGIiLCJydWFuZ2FuIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwidG9BcnJheSIsImpzb24iLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3IiLCJhZGRSdWFuZ2FuIiwiaW5zZXJ0T25lIiwiYm9keSIsImhhbmRsZXIiLCJtZXRob2QiLCJ1cGRhdGVSdWFuZ2FuIiwiZGVsZXRlYVJ1YW5nYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db_ruangan.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db_ruangan.js"));
module.exports = __webpack_exports__;

})();