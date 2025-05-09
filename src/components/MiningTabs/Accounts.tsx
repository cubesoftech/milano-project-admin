import React, { useState, useEffect } from "react";
import { Stack, Text, Heading, InputGroup, InputRightAddon, Input, Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import Image from "next/image";
import Toast from "../toast";

import { useAccountStore } from "@/utils/storage";
import { AccountData } from "@/utils/storage";
import { useAccount, useContractRead, erc20ABI } from "wagmi";
import { environment } from "@/utils/address";
import { withdrawals } from "@prisma/client";

import tether from "@/assets/tether.png"

export default function Account() {
    const { setAccountData, accountData } = useAccountStore();
    const { address } = useAccount();
    const { data: symbol } = useContractRead({
        address: environment.token_address,
        abi: erc20ABI,
        functionName: "symbol",
    });

    const [approveBalance, setApproveBalance] = useState(0);
    const [hash, setHash] = useState(0);
    const [accumulatedIncome, setAccumulatedIncome] = useState(0);
    const [withdrawals, setWithdrawals] = useState<withdrawals[]>([]);

    const getAccountData = async () => {
        fetch("/api/getAccountData", {
            method: "POST",
            body: JSON.stringify({ address, symbol }),
        })
            .then(async (res) => {
                const data = await res.json();
                console.log(data, "data");
                setApproveBalance(parseFloat(data.balance));
                setAccumulatedIncome(parseFloat(data.accumulated));
                setHash(parseFloat(data.hash));
                setAccountData({ lockDate: data.lock });
            })
            .catch((err) => {
                console.log(err, "err");
                setAccumulatedIncome(0);
                setApproveBalance(0);
                setHash(0);
            });
    };

    useEffect(() => {
        setInterval(() => {
            getAccountData();
        }, 1000 * 10);
    }, []);
    useEffect(() => {
        const getWithdrawals = async () => {
            fetch("/api/getWithdrawals", {
                method: "POST",
                body: JSON.stringify({ address }),
            })
                .then(async (res) => {
                    const data = await res.json();
                    setWithdrawals(data.withdrawals);
                })
                .catch((err) => {
                    console.log(err, "err");
                });
        };
        getWithdrawals();
    }, []);

    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={{ base: 5, md: 10 }}>
            <Address address={address} hash={hash} />
            <Income address={address} accumulatedIncome={accumulatedIncome} approveBalance={approveBalance} />
            <Withdraw accountData={accountData} address={address} symbol={symbol} withdrawals={withdrawals} />
        </Stack>
    );
}

function Address({ address, hash }: { address: `0x${string}` | undefined, hash: number }) {
    return (
        <Stack w={"100%"} direction={{ base: "column", md: "row" }} justifyContent={"space-between"} alignItems={"center"}>
            <Stack w={{ base: "100%", md: "40%" }} bgColor={"white"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} borderRadius={"xl"} overflow={"hidden"} p={5} shadow={"lg"}>
                <Text whiteSpace={"nowrap"} fontSize={{ base: "small", md: "medium" }}>주소</Text>
                <Text whiteSpace={"nowrap"} fontSize={{ base: "small", md: "medium" }}>{address}</Text>
            </Stack>
            <Stack w={{ base: "100%", md: "40%" }} bgColor={"white"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} borderRadius={"xl"} overflow={"hidden"} p={5} shadow={"lg"}>
                <Text>Current Hash Rate :</Text>
                <Text>{hash} GH/s</Text>
            </Stack>
        </Stack>
    );
}

function Income({ address, accumulatedIncome, approveBalance }: { address: `0x${string}` | undefined, accumulatedIncome: number, approveBalance: number }) {
    return (
        <Stack w={{ base: "100%", md: "80%" }} p={3} gap={5} direction={"row"} justifyContent={"space-between"} alignItems={"center"} bgColor={"white"} borderRadius={"xl"} overflow={"hidden"} shadow={"lg"}>
            <Stack w={{ base: "100%", md: "40%" }} gap={3} justifyContent={"center"} alignItems={"center"}>
                <Text>누적 수입</Text>
                <Text>{address ? accumulatedIncome.toFixed(5) : 0} USDT</Text>
            </Stack>
            <Stack w={{ base: "100%", md: "40%" }} gap={3} justifyContent={"center"} alignItems={"center"}>
                <Text>잔액 승인</Text>
                <Text>{address ? approveBalance : 0} USDT</Text>
            </Stack>
        </Stack>
    );
}

function Withdraw({ accountData, address, symbol, withdrawals }: { accountData: AccountData, address: `0x${string}` | undefined, symbol: string | undefined, withdrawals: withdrawals[] }) {
    const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

    const toast = Toast();

    const [timeRemainingInSec, setTimeRemainingInSec] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);

    const seconds = Math.floor(timeRemainingInSec % 60);
    const minutes = Math.floor((timeRemainingInSec / 60) % 60);
    const hours = Math.floor((timeRemainingInSec / (60 * 60)) % 24);
    const days = Math.floor((timeRemainingInSec / (60 * 60 * 24)) % 30);
    const months = Math.floor(timeRemainingInSec / (60 * 60 * 24 * 30));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const lockDate = new Date(accountData.lockDate);
            const diff = lockDate.getTime() - now.getTime();
            const diffInSec = Math.floor(diff / 1000);
            if (diffInSec > 0) {
                setTimeRemainingInSec(diffInSec);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [accountData.lockDate]);

    const processWithdraw = async () => {
        const payload = { address, symbol, amount: withdrawAmount };
        const url = "/api/withdrawBalance";
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (data.status === "success") {
                const message = data?.message || "Withdrawal Successful"
                toast.success(message)
            } else {
                const message = data?.message || "Withdrawal Successful"
                toast.error(message)
            }
        } catch (error: any) {
            const message = error?.message || "Something went wrong"
            toast.error(message)
        }
    };

    function generateArray(length: number) {
        const array = []
        for (let i = 0; i <= length; i++) {
            array.push(`test${i}`)
        }

        return array
    }
    const dummy = generateArray(50)
    return (
        <Stack w={{ base: "100%", md: "80%" }} p={5} justifyContent={"center"} alignItems={"center"} bgColor={"white"} borderRadius={"xl"} overflow={"hidden"} shadow={"lg"}>
            <Heading size={{ base: "lg", md: "xl" }}>Withdraw</Heading>
            <Text textAlign={"center"}>Your withdrawal will be issued to the USDT wallet address within 24 hours</Text>
            <InputGroup w={{ base: "90%", md: "40%" }}>
                <Input
                    min={0}
                    isDisabled={timeRemainingInSec > 0}
                    type="number"
                    value={
                        timeRemainingInSec < 1
                            ? withdrawAmount
                            : `Lock Period : ${formatTime(months)}:${formatTime(
                                days
                            )}:${formatTime(hours)}:${formatTime(
                                minutes
                            )}:${formatTime(seconds)}`
                    }
                    placeholder={
                        timeRemainingInSec < 0
                            ? "Amount in USD"
                            : `Lock Period : ${formatTime(months)}:${formatTime(
                                days
                            )}:${formatTime(hours)}:${formatTime(
                                minutes
                            )}:${formatTime(seconds)}`
                    }
                    onChange={(e) => {
                        setWithdrawAmount(parseFloat(e.target.value));
                    }} />
                <InputRightAddon>
                    <Image src={tether} alt="Image" height={40} />
                </InputRightAddon>
            </InputGroup>
            <Stack>
                <Button
                    size={"md"}
                    isDisabled={timeRemainingInSec > 0}
                    w={"100%"}
                    onClick={processWithdraw}
                    colorScheme="blue"
                >
                    Confirm
                </Button>
            </Stack>
            <TableContainer w={{ base: "100%", md: "90%" }} borderRadius={"xl"} border={"1px solid"} borderColor={"gray.200"} maxH={"50vh"} overflowY={"auto"}>
                <Table variant='simple' size={{ base: "sm", md: "md" }}>
                    <Thead>
                        <Tr bgColor={"white"} position={"sticky"} top={0}>
                            <Th>수량</Th>
                            <Th>요청 날짜</Th>
                            <Th>상태</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            withdrawals.map((withdrawal, index) => {
                                const { address: withdrawalAddress } = withdrawal;
                                const date = new Date(withdrawal.date);
                                if (withdrawalAddress !== address) return null;
                                return (
                                    <Tr key={index}>
                                        <Td>{withdrawal.amount} USDT</Td>
                                        <Td>{date.toDateString() + " " + date.toLocaleTimeString()}</Td>
                                        <Td
                                            color={
                                                withdrawal.status === "Pending"
                                                    ? "orange"
                                                    : withdrawal.status === "Denied"
                                                        ? "red"
                                                        : "green"
                                            }
                                        >
                                            {withdrawal.status}
                                        </Td>
                                    </Tr>
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
}