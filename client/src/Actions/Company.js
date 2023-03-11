import axios from "axios";

export const registerCompany = (name, email, password, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterCompanyRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/register/company", {
                name, email, password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "RegisterCompanySuccess",
            payload: data.company,
        });
        toast.success("Company Registered Successfully");
    } catch (error) {
        dispatch({
            type: "RegisterCompanyFailure",
            payload: error.response.data.message,
        });
        toast.error("Company Registeration Failed");
    }
}