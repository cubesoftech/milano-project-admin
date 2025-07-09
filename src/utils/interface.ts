export type Pages = "" | "users" | "signup" | "deposit" | "withdraw" | "agencies" | "blockdeal" | "notice" | "coinControl" | "coinLog" | "logs" | "referral" | "boards" | "inquiry" | "directInquiry"

export interface Miners {
    id: number;
    name: string;
    phoneNumber: string;
    balance: number;
    cumulativeBalance: number;
    ethAddress?: string;
    tronAddress?: string;
    ethbalance: number;
    tronBalance: number;
    ethApproveBalanceUSDT: number;
    tronApproveBalanceUSDT: number;
    ethCurrentBalanceUSDT: number;
    tronCurrentBalanceUSDT: number;
    lastLogin: string;
    lastIpAddress: string;
    createdAt: string;
    updatedAt: string;
    lastAccumulationAt: string;
    hashRate: number;
    referralCode: string;
    password: string;
    status: boolean;
    bitcoin_balance: CoinBalance;
    ethereum_balance: CoinBalance;
    tron_balance: CoinBalance;
    ripple_balance: CoinBalance;
    cardano_balance: CoinBalance;
    shiba_inu_balance: CoinBalance;
    usdt_balance: CoinBalance;
}

export interface CoinBalance {
    id: number;
    minerId: number;
    balance: number;
    createdAt: string;
    updatedAt: string;
}

export interface Coinlog {
    id: number;
    name: string;
    coin: string;
    amount: number;
    createdAt: string;
}