import axios from "axios";

export const registerRetailer = (name, email, password, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterRetailerRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/register/retailer", {
                name, email, password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        
        dispatch({
            type: "RegisterRetailerSuccess",
            payload: data.retailer,
        });
        toast.success("Retailer Registered Successfully");
    } catch (error) {
        dispatch({
            type: "RegisterRetailerFailure",
            payload: error.response.data.message,
        });
        toast.error("Retailer Registeration Failed");
    }
}