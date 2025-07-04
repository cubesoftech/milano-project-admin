import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Pages = "home" | "about" | "support" | "mining"

interface Nav {
    nav: Pages,
    setNav: (nav: Pages) => void
}

export const useNav = create<Nav>()(
    persist<Nav>(
        (set) => ({
            nav: "home",
            setNav: (nav: Pages) => set({ nav })
        }),
        {
            name: "nav-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export type AccountData = {
    lockDate: Date;
};

type AccountStore = {
    accountData: AccountData;
    setAccountData: (data: AccountData) => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
    accountData: {
        lockDate: new Date(),
    },
    setAccountData: (data) => set({ accountData: data }),
}));

type PrincipalWallet = {
    principal: string | null;
    setPrincipal: (principal: string | null) => void;
};

export const usePrincipalWallet = create<PrincipalWallet>()(
    persist<PrincipalWallet>(
        (set) => ({
            principal: null,
            setPrincipal: (principal: string | null) => set({ principal }),
        }),
        {
            name: "principal-wallet-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);