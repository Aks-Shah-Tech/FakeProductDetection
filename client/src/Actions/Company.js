import axios from "axios";

export const registerCompany = (CIN, name, email, password, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterCompanyRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/register/company", {
                CIN,
                name,
                email,
                password
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
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "RegisterCompanyFailure",
            payload: error.response.data.message,
        });
        toast.error("Company Registeration Failed");
    }
}

export const loginCompany = (email, password, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginCompanyRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/login/company", {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "LoginCompanySuccess",
            payload: data.company,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "LoginCompanyFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const logoutCompany = (toast) => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutCompanyRequest",
        });

        await axios.get("/api/v1/logout/company");

        dispatch({
            type: "LogoutCompanySuccess",
        });
        toast.success("Logged out Successfully");
    } catch (error) {
        dispatch({
            type: "LogoutCompanyFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const verifyCompanyApprove = (companyId, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "verifyCompanyRequest",
        });

        const {
            data
        } = await axios.put(
            "/api/v1/admin/approveRequest", {
                companyId
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "verifyCompanySuccess",
            payload: data.message,
        });
        toast.success("Company successfully verified.");
    } catch (error) {
        dispatch({
            type: "verifyCompanyFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const verifyCompanyReject = (companyId, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "verifyCompanyRequest",
        });
        console.log(companyId + "actions")
        const {
            data
        } = await axios.post(
            "/api/v1/admin/rejectRequest", {
                companyId: companyId
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "verifyCompanySuccess",
            payload: data.message,
        });
        toast.error("Company successfully rejected.");
    } catch (error) {
        dispatch({
            type: "verifyCompanyFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const reportProduct = (companyId, productId, productName, name, email, query, toast) => async (dispatch) => {
    try {
        dispatch({
            type: "reportProductRequest",
        });

        const {
            data
        } = await axios.post(
            "/api/v1/admin/report", {
                companyId, productId, productName, name, email, query
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "reportProductSuccess",
            payload: data.message,
        });
        toast.success("Successfully reported the product.");
    } catch (error) {
        dispatch({
            type: "reportProductFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const getAllCompanies = (toast) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllCompaniesRequest",
        });

        const {
            data
        } = await axios.get(
            `/api/v1/allCompanies`
        )

        dispatch({
            type: "getAllCompaniesSuccess",
            payload: data.companies,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "getAllCompaniesFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const loadCompany = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadingRequest",
        });

        const {
            data
        } = await axios.get("/api/v1/fetchCompanyDetails");

        dispatch({
            type: "LoadingSuccess",
            payload: data.company
        });
    } catch (error) {
        dispatch({
            type: "LoadingFailure",
            payload: error.response.data.message,
        });
    }
}