import axiosInstance from "./index";

const UserService = {

    getMe() {
        return axiosInstance.get('/api/me');
    },

};

export default UserService;
