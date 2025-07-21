export type Pages = "" | "users" | "signup" | "deposit" | "transactionRequest" | "agencies" | "blockdeal" | "notice" | "coinControl" | "coinLog" | "logs" | "referral" | "boards" | "inquiry" | "directInquiry"

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
    hashRate2: number;
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
    earnings: number;
    note: string;
}

export interface CoinBalance {
    id: number;
    minerId: number;
    balance: number;
    earnings: number;
    createdAt: string;
    updatedAt: string;
    totalEarnings: number;
}

export interface CoinLog {
    id: number;
    minerId: number;
    coin: string;
    balance: number;
    createdAt: string;
    updatedAt: string;
    earnings: number;
    miners: Miners
}

export interface RecoverCoinLog {
    id: number;
    minerId: number;
    coin: string;
    balance: number;
    createdAt: string;
    updatedAt: string;
    miners: Miners
}