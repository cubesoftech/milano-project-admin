import React, { useState, useEffect } from "react";
import { Stack, Text, Button, Heading, Icon } from "@chakra-ui/react";
import Toast from "../toast";
import { FaCopy } from "react-icons/fa";

import { useAccount } from "wagmi";

interface Data {
    rewards: number,
    totalInvites: number;
}

export default function Team() {
    const { address } = useAccount();
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        if (!address) return;
        fetchReferrals();
    }, [address]);


    const fetchReferrals = async () => {
        fetch("/api/referrals", {
            method: "POST",
            body: JSON.stringify({ address }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    };
    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={10}>
            <Stack w={"100%"} p={{ base: 2, md: 5 }} direction={{ base: "column", md: "row" }} justifyContent={"center"} alignItems={"center"} gap={5}>
                <Reward data={data} address={address} />
                <Invite address={address} />
            </Stack>
        </Stack>
    );
}

function Reward({ data, address }: { data: Data | null, address: `0x${string}` | undefined }) {
    const toast = Toast()
    const withdrawReferral = async () => {
        const balance = data?.rewards || 20;
        if (balance <= 0) {
            toast.error("No rewards to withdraw")
        }
        if (balance > 0) {
            fetch("/api/withdrawreferral", {
                method: "POST",
                body: JSON.stringify({ address, amount: balance }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    toast.success("Withdrawn to Accumulated Balance")
                });
        }
    };
    return (
        <Stack w={{ base: "100%", md: "40%" }} justifyContent={"center"} alignItems={"center"} bgColor={"white"} borderRadius={"2xl"} p={5} shadow={"2xl"}>
            <Stack w={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={{ base: "small", md: "medium" }}>총 프로모션 보상</Text>
                <Text fontSize={{ base: "small", md: "medium" }}>{`${data?.rewards ? data.rewards.toFixed(5) : 0} USDT`}</Text>
            </Stack>
            <Stack w={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={{ base: "small", md: "medium" }}>초대한 사람 수</Text>
                <Text fontSize={{ base: "small", md: "medium" }}>{`${data ? data.totalInvites : 0}`}</Text>
            </Stack>
            <Button colorScheme="red" onClick={withdrawReferral} size={{ base: "sm", md: "md" }}>
                출금
            </Button>
        </Stack>
    );
}

function Invite({ address }: { address: `0x${string}` | undefined }) {
    const shareLink = `${new URL(location.href).origin}?invite=${address?.slice(2, 30)}`
    const toast = Toast()
    return (
        <Stack w={{ base: "100%", md: "40%" }} justifyContent={"center"} alignItems={"center"} bgColor={"white"} borderRadius={"2xl"} p={5} shadow={"2xl"}>
            <Heading size={{ base: "lg", md: "xl" }}>내 공유 링크</Heading>
            <Text fontSize={{ base: "small", md: "medium" }} >{shareLink}</Text>
            <Button
                colorScheme="blue"
                onClick={() => {
                    navigator.clipboard.writeText(shareLink);
                    toast.success("Copied!")
                }}
            >
                복사
                <Icon as={FaCopy} />
            </Button>
        </Stack>
    );
}