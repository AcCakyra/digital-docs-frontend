import axiosInstance from "./index";

const UserService = {
    getMe() {
        return axiosInstance.get('/api/userinfo')
            .then(user => {
                return user.data
            })
    },
};

export default UserService;
