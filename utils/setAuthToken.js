//this utilit will add the authorized user's JWT to the requreest header
//any routes that are protected will require JWT in order to access them
import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        //apply the token to every request header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;