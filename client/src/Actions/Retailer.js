import axios from "axios";

export const registerRetailer = (name, email, address, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterRetailerRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/register/retailer", {
                name, email, address
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

export const getAllRetailers = (toast) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllRetailerRequest",
        });

        const {
            data
        } = await axios.get(
            `/api/v1/getAllRetailer`
        )

        dispatch({
            type: "getAllRetailerSuccess",
            payload: data.allRetailers,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "getAllRetailerFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const verifyRetailer = (qrCode) => async (dispatch) => {
    try {
        dispatch({
            type: "verifyRetailerRequest",
        });

        const {
            data
        } = await axios.get(
            `/api/v1/verify/retailer/${qrCode}` 
        )

        dispatch({
            type: "verifyRetailerSuccess",
            payload: data.retailer,
        });
    } catch (error) {
        dispatch({
            type: "verifyRetailerFailure",
            payload: error.response.data.message,
        });
    }
}

export const deleteRetailer = (retailerId, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteRetailerRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/deleteRetailer", {
                retailerId
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        
        dispatch({
            type: "deleteRetailerSuccess",
            payload: data.message,
        });
        toast.success("Retailer deleted Successfully");
    } catch (error) {
        dispatch({
            type: "deleteRetailerFailure",
            payload: error.response.data.message,
        });
        toast.error("Retailer deletion Failed");
    }
}

export const clearRetailer = () => async (dispatch) => {
        dispatch({
            type: "clearRetailer",
        });
    }
