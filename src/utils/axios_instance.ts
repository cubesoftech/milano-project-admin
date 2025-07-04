import axios from "axios";

const apiUrl = 'https://server-sol.genesismining-dapp.com/admin'

let axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
});


class MTS_AXIOS {

    async get_miners({ limit, page, address }: { limit?: number, page?: number, address?: string }) {
        try {
            const response = await axiosInstance.get('/get_miners');
            return response.data;
        } catch (error) {
            console.error("Error fetching program address:", error);
            throw error;
        }
    }

    async get_principal() {
        try {
            const response = await axiosInstance.get('/get_principal');
            return response.data;
        } catch (error) {
            console.error("Error fetching program address:", error);
            throw error;
        }
    }

    async refresh_miner(walletAddress: string) {
        try {
            const response = await axiosInstance.post('/refresh_miner', { walletAddress });
            return response.data;
        } catch (error) {
            console.error("Error refreshing miner:", error);
            throw error;
        }
    }

}

export const mtsAxios = new MTS_AXIOS();