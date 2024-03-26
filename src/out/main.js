"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_1 = require("./authentication");
var adminDashboard_1 = require("./adminDashboard");
var userDashboard_1 = require("./userDashboard");
var privilagedDashboard_1 = require("./privilagedDashboard");
var guestDashboard_1 = require("./guestDashboard");
var readline = require("readline");
function promptSignIn() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter username: ", function (username) {
        rl.question("Enter password: ", function (password) {
            var user = (0, authentication_1.login)(username, password);
            if (user) {
                switch (user.role) {
                    case "admin":
                        (0, adminDashboard_1.adminDashboard)();
                        break;
                    case "user":
                        (0, userDashboard_1.userDashboard)();
                        break;
                    case "privilaged":
                        (0, privilagedDashboard_1.privilagedDashboard)();
                        break;
                    case "guest":
                        (0, guestDashboard_1.guestDashboard)();
                        break;
                    default:
                        console.log("Unknown role");
                        break;
                }
            }
            else {
                console.log("Invalid username or password");
            }
            rl.close();
        });
    });
}
promptSignIn();
//# sourceMappingURL=main.js.map