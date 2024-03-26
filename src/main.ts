import { login } from './authentication';
import { adminDashboard } from './adminDashboard';
import { userDashboard } from './userDashboard';
import { privilagedDashboard } from './privilagedDashboard';
import { guestDashboard } from './guestDashboard';
import * as readline from 'readline';

function promptSignIn(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter username: ", (username: string) => {
        rl.question("Enter password: ", (password: string) => {
            const user = login(username, password);
            if (user) {
                switch (user.role) {
                    case "admin":
                        adminDashboard();
                        break;
                    case "user":
                        userDashboard();
                        break;
                    case "privilaged":
                        privilagedDashboard();
                        break;  
                    case "guest":
                        guestDashboard();
                        break;       
                    default:
                        console.log("Unknown role");
                        break;
                }
            } else {
                console.log("Invalid username or password");
            }
            rl.close();
        });
    });
}

promptSignIn();

