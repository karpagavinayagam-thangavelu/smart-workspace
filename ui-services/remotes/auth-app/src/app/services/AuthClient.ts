
import Axios from "axios";

export const AuthClient = Axios.create({
    baseURL: "http://localhost:5000",
});