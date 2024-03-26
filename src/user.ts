export interface User {
    username: string;
    password: string;
    role: string;
}

export const users: User[] = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "guest", password: "guest123", role: "guest" },
    { username: "privilageduser", password: "Puser123", role: "privilaged" },
    { username: "user", password: "user123", role: "user" }
];
