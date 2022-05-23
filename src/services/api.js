import axios from "axios";

const Api = axios.create({
    baseURL: 'https://databasetijucacars.herokuapp.com/'
});

Api.interceptors.request.use(async(config)=>{
    const token = localStorage.getItem('Token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})
export default Api;
