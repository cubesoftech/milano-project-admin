import React, { memo, useEffect } from "react";

import { useAgencyStore, useTitleStore } from "@/utils/storage";

import NewSelectedAgency from "./AgencyComponents/NewSelectedAgency";
import NewAgencyList from "./AgencyComponents/NewAgencyList";
import OldAgentList from "./AgencyComponents/OldAgentList";

function Agencies() {
    const { agency } = useAgencyStore()
    const { setTItle } = useTitleStore()

    useEffect(() => {
        setTItle("에이전시 관리")
    }, []);

    if (agency) {
        return <NewSelectedAgency />
    } else {
        // return <OldAgentList />
        return <NewAgencyList />
    }
}
export default memo(Agencies)