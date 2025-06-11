import axios from "axios";

const instance = axios.create({
    // The API(cloud function) URL
    baseURL: 'https://us-central1-amzaon-clone-4bb41.cloudfunctions.net/api'
    // You can add other configurations here, like headers, timeout, etc.

    // baseURL: 'http://127.0.0.1:5001/amzaon-clone-4bb41/us-central1/api'
});

export default instance;