import axios from "axios";
import { useTokenStore } from "./storage";
import { Miners } from "./interface";
import { Log } from "@/components/Deposit";
const apiUrl = 'https://server.j-block.io/admin'

let axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 10000
})

axiosInstance.interceptors.request.use(
    config => {
        const accessToken = useTokenStore.getState().accessToken;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status === 403) {
            useTokenStore.getState().setAccessToken(null);
            window.location.href = "/";
        }
        return Promise.reject(error)
    }
)

class API {
    login = async (payload: { phone_number: string, password: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: string, message: string }>("/login", payload)
            return data
        } catch (err) {
            throw err;
        }
    };
    miners = async (params: { page?: string, search?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Miners[], pagination: { total: number, page: number, limit: number }, message: string }>('/miners', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    addBalance = async (payload: { coin: string, amount: number, phoneNumber: string, name: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>("/add-balance", payload)
            return data
        } catch (err) {
            throw err
        }
    }
    changeStatus = async (payload: { phoneNumber: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>("/change-status", { ...payload, status: true })
            return data
        } catch (err) {
            throw err
        }
    }
    minersSignup = async (params: { page?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Miners[], pagination: { total: number, page: number, limit: number }, message: string }>('/miners-signup', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    }
    refreshUser = async (payload: { phone_number?: string }) => {
        try {
            const { data } = await axiosInstance.post('/refresh', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    siteStatistics = async () => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: { deposit: number, user: number, withdrawableTRON: number, withdrawableETH: number }, message: string }>('/site-statistics')
            return data
        } catch (err) {
            throw err
        }
    }
    depositLog = async (params: { page?: string, search?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Log[], pagination: { total: number, page: number, limit: number }, message: string }>('/deposit-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    approveDeposit = async (payload: { depositId: number, status: Log["status"] }) => {
        try {
            const { data } = await axiosInstance.post('/approve-deposit', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    updateEarning = async (payload: { phoneNumber: string, earnings: number }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/update-earnings', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    updateEarning2 = async (payload: { phoneNumber: string, earnings2: number }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/update-earnings2', payload)
            return data
        } catch (err) {
            throw err
        }
    }
}

export const api = new API()