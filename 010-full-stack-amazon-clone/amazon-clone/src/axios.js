import axios from "axios";

const instance = axios.create({
    baseURL: '...', // The API(cloud function) URL

    // You can add other configurations here, like headers, timeout, etc.
});

export default instance;