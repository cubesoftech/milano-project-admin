import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Miners, Pages } from "./interface";

interface Page {
    page: Pages;
    setPage: (page: Pages) => void
}
export const usePageStore = create<Page>()(
    persist<Page>(
        (set) => ({
            page: "",
            setPage: (page: Pages) => set({ page })
        }),
        {
            name: "page-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

interface Title {
    title: string,
    setTItle: (title: string) => void
}
export const useTitleStore = create<Title>()(
    persist(
        (set) => ({
            title: "대시보드",
            setTItle: (title: string) => set({ title })
        }),
        {
            name: "title-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

interface Agency {
    agency: string | null;
    selectAgency: (agency: string | null) => void
}
export const useAgencyStore = create<Agency>(
    (set) => ({
        agency: null,
        selectAgency: (agency: string | null) => set({ agency })
    })
)

interface User {
    user: Miners | null;
    setUser: (user: Miners | null) => void
}
export const useUserStore = create<User>(
    (set) => ({
        user: null,
        setUser: (user: Miners | null) => set({ user })
    })
)

interface Token {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
}

export const useTokenStore = create<Token>()(
    persist<Token>(
        (set) => ({
            accessToken: "",
            setAccessToken: (token: string | null) => set({ accessToken: token }),
        }),
        {
            name: "token-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);