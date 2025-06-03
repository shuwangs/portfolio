import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/amzaon-clone-4bb41/us-central1/api'// The API(cloud function) URL
    // You can add other configurations here, like headers, timeout, etc.
});

export default instance;