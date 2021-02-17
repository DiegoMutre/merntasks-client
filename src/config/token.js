import axiosClient from "./axios";

const setHeaderToken = token => {
    if (token) {
        // Set token at the header
        axiosClient.defaults.headers.common["x-auth-token"] = token;
        return;
    }
    // Remove token from header
    delete axiosClient.defaults.headers.common["x-auth-token"];
};

export default setHeaderToken;
