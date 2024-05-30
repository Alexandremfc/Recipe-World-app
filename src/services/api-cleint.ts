import axios from "axios";


const API_URL = "http://localhost:3000/api"

export default axios.create({
    baseURL: API_URL,
    headers: {
        "x-auth-token" : "Token"
    }
});