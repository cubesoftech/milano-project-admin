import React, { useState, useEffect, JSX } from "react";
import { Stack, Button } from "@chakra-ui/react";

import MiningPool from "./MiningTabs/MiningPool";
import Account from "./MiningTabs/Accounts";
import Team from "./MiningTabs/Team";

type Tab = "pool" | "account" | "team"

export default function Mining() {

    const buttons: { label: string, value: Tab }[] = [
        { label: "마이닝 풀", value: "pool" },
        { label: "계정", value: "account" },
        { label: "팀", value: "team" },
    ]

    const [tab, setTab] = useState<Tab>("pool");

    const tabs: Record<Tab, JSX.Element> = {
        pool: <MiningPool />,
        account: <Account />,
        team: <Team />
    }

    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={10}>
            <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} gap={8} justifyContent={"center"} alignItems={"center"}>
                <Stack w={"100%"} direction={"row"} justifyContent={{ base: "center", md: "flex-start" }} alignItems={"center"}>
                    {
                        buttons.map((button, index) => (
                            <Button
                                key={index} colorScheme="blue"
                                variant={button.value === tab ? "solid" : "outline"}
                                onClick={() => setTab(button.value)}
                            >
                                {button.label}
                            </Button>
                        ))
                    }
                </Stack>
                <Stack w={"100%"} direction={"row"} justifyContent={"flex-start"} alignItems={"center"}>
                    {tabs[tab]}
                </Stack>
            </Stack>
        </Stack>
    );
}