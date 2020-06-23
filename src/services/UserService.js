import axiosInstance from "./index";

const UserService = {
    getMe() {
        return axiosInstance.get('/api/userinfo')
            .then(user => {
                if (user && user.data) {
                    return user.data
                }
            })
    },
};

export default UserService;
