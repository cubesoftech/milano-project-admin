export type Pages = "" | "users" | "signup" | "deposit" | "withdraw" | "agencies" | "blockdeal" | "notice" | "coinControl" | "coinLog" | "logs" | "referral" | "boards" | "inquiry" | "directInquiry"

export interface Miners {
    id: number;
    name: string;
    phoneNumber: string;
    tronAddress?: string;
    ethAddress?: string;
    createdAt: string;
    updatedAt: string;
    lastAccumulationAt: string;
    hashRate: number;
    referralCode: string;
    ethApproveBalanceUSDT: number;
    ethCurrentBalanceUSDT: number;
    ethbalance: number;
    lastIpAddress: string;
    lastLogin: string;
    tronBalance: number;
    balance: number;
    cumulativeBalance: number;
    tronApproveBalanceUSDT: number;
    tronCurrentBalanceUSDT: number;
    bitcoin_balance: CoinBalance;
    cardano_balance: CoinBalance;
    ethereum_balance: CoinBalance;
    ripple_balance: CoinBalance;
    shiba_inu_balance: CoinBalance;
    tron_balance: CoinBalance;
}

interface CoinBalance {
    id: number;
    minerId: number;
    balance: number;
    createdAt: string;
    updatedAt: string;
}