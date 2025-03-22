import axios from "../utils/axiosCustomize";

const postLogin = async (data) => {
    const response = await axios.post("/auth/login", data);
    console.log(response);
    return response;
}

// Example of other API calls you might want to add
const getAllLeaveRequests = async () => {
    return await axios.get("/leave-requests");
}

const createLeaveRequest = async (data) => {
    return await axios.post("/leave-requests", data);
}

const getUserProfile = async () => {
    return await axios.get("/users/profile");
}

export { 
    postLogin,
    getAllLeaveRequests,
    createLeaveRequest,
    getUserProfile 
};