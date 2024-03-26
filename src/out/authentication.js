"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var user_1 = require("./user");
function login(username, password) {
    var user = user_1.users.find(function (u) { return u.username === username && u.password === password; });
    return user ? user : null;
}
exports.login = login;
//# sourceMappingURL=authentication.js.map