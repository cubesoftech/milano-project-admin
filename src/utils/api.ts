import axios from "axios";
import { useTokenStore } from "./storage";
import { CoinLog, Inquiries, Message, Miners, RecoverCoinLog, ActivityLog } from "./interface";
import { Log as TransactionLog } from "@/components/Deposit";
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
    miners = async (params: { page?: string, search?: string, limit?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Miners[], pagination: { total: number, page: number, limit: number }, message: string }>('/miners', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    coinLog = async (params: { page?: string, search?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: CoinLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/coin-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    addBalance = async (payload: { coin: string, amount: number, phoneNumber: string, note: string }) => {
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
    depositLog = async (params: { page?: string, search?: string, limit?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: TransactionLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/deposit-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    approveDeposit = async (payload: { depositId: number, status: TransactionLog["status"] }) => {
        try {
            const { data } = await axiosInstance.post('/approve-deposit', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    withdrawalLog = async (params: { page?: string, search?: string, limit?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: TransactionLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/withdrawal-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    walletWithdrawalLog = async (params: { page?: string, search?: string, limit?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: TransactionLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/wallet-withdrawal-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    approveWithdrawal = async (payload: { withdrawalId: number, status: TransactionLog["status"] }) => {
        try {
            const { data } = await axiosInstance.post('/approve-withdrawal', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    approveWalletWithdrawal = async (payload: { withdrawalId: number, status: TransactionLog["status"] }) => {
        try {
            const { data } = await axiosInstance.post('/approve-wallet-withdrawal', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    updateHashrate = async (payload: { phoneNumber: string, hashrate: number }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/update-hashrate', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    updateHashrate2 = async (payload: { phoneNumber: string, hashRate2: number }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/update-hashrate2', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    updateNote = async (payload: { phoneNumber: string, note: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/update-note', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    updatePassword = async (payload: { phoneNumber: string, password: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/update-password', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    deleteMiner = async (payload: { phoneNumber: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, data: Miners, message: string }>('/delete-miner', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    getUserCoinLog = async (params: { page?: string, search?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: CoinLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/coin-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    recoverCoin = async (payload: { phoneNumber: string, amount: number, note: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>('/recover-coin', payload)
            return data
        } catch (err) {
            throw err
        }
    }
    getUserRecoverCoinLog = async (params: { page?: string, search?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: RecoverCoinLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/recover-coin-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    deleteNote = async (payload: { phoneNumber: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>('/delete-note', payload)
            return data
        } catch (err) {
            throw err
        }
    };
    inquiries = async (params: { page?: string, limit?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Inquiries[], pagination: { total: number, page: number, limit: number }, message: string }>('/inquiries', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    inquiry = async (params: { page?: string, limit?: string, search: number }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Message[], pagination: { total: number, page: number, limit: number }, message: string }>('/inquiry', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    replyInquiry = async (payload: { inquiryId: number, receiverId: number, content: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>('/reply-inquiry', payload)
            return data
        } catch (err) {
            throw err
        }
    };
    deleteInquiry = async (payload: { inquiryId: number }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>('/delete-inquiry', payload)
            return data
        } catch (err) {
            throw err
        }
    };
    createInquiry = async (payload: { title: string, content: string, phoneNumber: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>('/create-inquiry', payload)
            return data
        } catch (err) {
            throw err
        }
    };
    referrer = async (params: { page?: string, limit?: string, search?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: Miners[], pagination: { total: number, page: number, limit: number }, message: string }>('/referrer', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
    createBulkMessage = async (payload: { phoneNumbers: string[], title: string, content: string }) => {
        try {
            const { data } = await axiosInstance.post<{ success: boolean, message: string }>('/create-bulk-message', payload)
            return data
        } catch (err) {
            throw err
        }
    };
    activityLog = async (params: { page?: string, search?: string, limit?: string }) => {
        try {
            const { data } = await axiosInstance.get<{ success: boolean, data: ActivityLog[], pagination: { total: number, page: number, limit: number }, message: string }>('/activity-log', {
                params
            })
            return data
        } catch (err) {
            throw err
        }
    };
}

export const api = new API()