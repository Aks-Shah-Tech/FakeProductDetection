import axios from "axios";

export const loginAdmin = (email, password, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginAdminRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/admin/login", {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "LoginAdminSuccess",
            payload: data.admin,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "LoginAdminFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const logoutAdmin = (toast) => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutAdminRequest",
        });

        await axios.get("/api/v1/admin/logout");

        dispatch({
            type: "LogoutAdminSuccess",
        });
        toast.success("Logged out Successfully");
    } catch (error) {
        dispatch({
            type: "LogoutAdminFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}