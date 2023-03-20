import axios from "axios";

export const registerProduct = (name, price, description, category, retailerId, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterProductRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/registerProduct", {
                name, price, description, category, retailerId
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "RegisterProductSuccess",
            payload: data.product,
        });
        toast.success("Product Registered Successfully");
    } catch (error) {
        dispatch({
            type: "RegisterProductFailure",
            payload: error.response.data.message,
        });
        toast.error("Product Registeration Failed");
    }
}

export const verifyProduct = (qrCode) => async (dispatch) => {
    try {
        dispatch({
            type: "verifyProductRequest",
        });

        const {
            data
        } = await axios.get(
            `/api/v1/viewProductbyId/${qrCode}` 
        )

        dispatch({
            type: "verifyProductSuccess",
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: "verifyProductFailure",
            payload: error.response.data.message,
        });
    }
}

export const getProductById = (id, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "getProductRequest",
        });

        const {
            data
        } = await axios.get(
            `/api/v1/viewProduct/${id}`
        )

        dispatch({
            type: "getProductSuccess",
            payload: data.product,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "getProductFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const getAllProducts = (toast) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsRequest",
        });

        const {
            data
        } = await axios.get(
            `/api/v1/allProducts`
        )

        dispatch({
            type: "getAllProductsSuccess",
            payload: data.products,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "getAllProductsFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const getRetailer = (retailerId) => async (dispatch) => {
    try {
        dispatch({
            type: "getRetailerRequest",
        });
        console.log(retailerId);
        const {
            data
        } = await axios.post(
            "/api/v1/getretailerbyId", {
                retailerId
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "getRetailerSuccess",
            payload: data.retailer,
        });
        
    } catch (error) {
        dispatch({
            type: "getRetailerFailure",
            payload: error.response.data.message,
        });
        
    }
}

export const clearProduct = () => async (dispatch) => {
    dispatch({
        type: "clearProduct",
    });
}