
import { User, users } from './user';

export function login(username: string, password: string): User | null {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? user : null;
}
