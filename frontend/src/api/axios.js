import axios from "axios"

const uri="http://localhost:3000"

const config=axios.create({
    baseURL:uri,
    withCredentials:true
})

export default config;

