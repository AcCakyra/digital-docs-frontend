import axios from "axios";
import qs from 'qs'

const axiosInstance = axios.create({});

const AuthenticationService = {
    login(email, password) {
        return axiosInstance.post('/api/auth',
            qs.stringify({
                'email': email,
                'password': password
            })
        );
    },

    logout() {
        axiosInstance.get('/api/logout');
    }
};

export default AuthenticationService;
