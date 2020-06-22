import qs from 'qs'
import {runWithLock} from "localstorage-lock";
import axiosInstance from "./index";

// put mutex into localstorage
localStorage.setItem('auth-key', 'auth-key');

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    }, function (error) {
        if (error.request.responseURL.indexOf("/api/refresh") !== -1 ) {
            window.location = '/login';
        }
        else {
            if (401 === error.response.status) {
                // runWithLock('auth-key', () => {
                AuthenticationService.updateAuthTokens()
                    .then(() => {
                        return axiosInstance.request(error.config);
                    })
                    .catch(() => {
                        window.location = '/login';
                    })
                // }, {timeout: 5000});
            } else {
                return Promise.reject(error);
            }
        }
    }
);

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
        window.location = '/login';
        return axiosInstance.get('/api/logout');
    },

    updateAuthTokens() {
        return axiosInstance.get('/api/refresh')
    },
};

export default AuthenticationService;
