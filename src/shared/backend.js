import axios from "axios";

 const baseUrl='https://fakestoreapi.com'

export async function  GET_SERVICE (endpoint) {
    const url = baseUrl + endpoint;  
    try {
        return await axios.get(url);  
    } catch (error) {
        return error.response;
    }
}


export async function POST_SERVICE(body, endpoint) {
    const url = baseUrl + endpoint;

    try {
        return await axios.post(url, body);
    } catch (e) {
        return e.response;
    }
}

export async function  PATCH_SERVICE (endpoint) {
    const url = baseUrl + endpoint;

    try {
        return await axios.patch(url, );
    } catch (error) {
        return error.response;
    }
}

  
export async function  DELETE_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    try {
        return await axios.delete(url);
    } catch (error) {
        return error.response;
    }
}
