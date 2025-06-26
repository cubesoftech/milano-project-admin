import React, { memo, useEffect } from "react"

import { useUserStore, useTitleStore } from "@/utils/storage"
import NewUserDetails from "./UserComponents/NewUserDetails"
import NewUserList from "./UserComponents/NewUserList"
import OldUserList from "./UserComponents/OldUserList"

function Users() {
    const { user } = useUserStore()
    const { setTItle } = useTitleStore()

    useEffect(() => {
        setTItle("회원 관리")
    }, []);

    if (user) {
        return <NewUserDetails />
    } else {
        // return <OldUserList />
        return <NewUserList />
    }
}
export default memo(Users)