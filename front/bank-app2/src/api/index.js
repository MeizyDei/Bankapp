import axios from "axios";

const HTTP = axios.create({
    baseURL: 'http://localhost:8080/tasks',
    headers: {
        "Content-type": "application/json"
    }
})

export default HTTP
