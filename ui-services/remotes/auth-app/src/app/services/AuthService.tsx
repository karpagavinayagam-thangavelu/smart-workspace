
import { AuthClient } from "./AuthClient";

class AuthServiceImpl {
    login(username: string, password: string) {
        return AuthClient.post("/auth/login",{
            username,
            password
        });
    }
    logout() {
        return AuthClient.post("/auth/logout");
    }
}

export const AuthService = new AuthServiceImpl();