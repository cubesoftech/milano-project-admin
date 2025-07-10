"use client";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
    useToast, useColorModeValue,
    Box, Button, Flex, Stack, Spinner, Link, Text,
    Input, Select, Checkbox,
    TableContainer, Table, Tbody, Td, Th, Thead, Tr,
} from "@chakra-ui/react";
import { Miners } from "@/utils/interface";
import { useTitleStore, useTokenStore, } from "@/utils/storage";
import { api } from "@/utils/api";
import UseToastHooks from "@/hooks/UseToastHooks";
import useSWR, { KeyedMutator } from "swr";

type LogStatus = "PENDING" | "COMPLETED" | "DENIED";

export interface Log {
    id: number;
    phoneNumberMiner: string;
    amount: number;
    coin: string;
    status: LogStatus;
    createdAt: string;
    updatedAt: string;
    miners: Miners
}

function TableRow({ miner, mutate }: { miner: Log, mutate: KeyedMutator<any> }) {

    const { error, success } = UseToastHooks()
    const [status, setStatus] = useState<LogStatus>(miner.status);
    const [isLoading, setIsLoading] = useState(false);

    const status_: Record<LogStatus, string> = {
        COMPLETED: "승인됨",
        PENDING: "대기 중",
        DENIED: "거절됨",
    }

    const handleUpdateStatus = async () => {
        if (status === "PENDING") return;
        setIsLoading(true)
        try {
            await api.approveDeposit({ depositId: miner.id, status })
            mutate()
            success("Status updated")
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            error(message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Tr _hover={{ bg: "gray.50" }}>
            <Td>{miner.phoneNumberMiner}</Td>
            <Td>{miner.miners.name}</Td>
            <Td>{miner.coin}</Td>
            <Td>{miner.amount}</Td>
            <Td>
                <Select defaultValue={miner.status} onChange={(e) => setStatus(e.target.value as LogStatus)} isDisabled={miner.status !== "PENDING"}>
                    <option value="COMPLETED">{status_["COMPLETED"]}</option>
                    <option value="PENDING">{status_["PENDING"]}</option>
                    <option value="DENIED">{status_["DENIED"]}</option>
                </Select>
            </Td>
            <Td>{new Date(miner.createdAt).toLocaleString()}</Td>
            <Td>
                <Button colorScheme="green" onClick={handleUpdateStatus} isLoading={isLoading} isDisabled={miner.status !== "PENDING"}>상태 업데이트</Button>
            </Td>
        </Tr>
    );
}

export default function Deposit({ type }: { type: "deposit" | "withdraw" }) {
    const cardBg = useColorModeValue("white", "gray.700");
    const headerBg = useColorModeValue("gray.100", "gray.600");

    const { accessToken } = useTokenStore()
    const { setTItle } = useTitleStore()

    // ---------- new states ----------//
    const [payload, setPayload] = useState({
        search: "",
        page: 1
    });
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Log[]>([]);
    const [total, setTotal] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [refetch, setRefetch] = useState(false);
    const size = 25

    const { mutate } = useSWR(
        accessToken ? 'miners' : null,
        () => api.depositLog({ page: payload.page.toString() }),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
            onSuccess(data) {
                const { data: minerData, pagination } = data
                const { total } = pagination
                setData(minerData)
                setTotal(total)
            },
            onError(err) {
                console.error("Error fetching miners: ", err)
            }
        }
    )

    useEffect(() => {
        setTItle("입금 / 출금 요청")
    }, []);

    useEffect(() => {
        if (refetch) {
            const fetchUser = async () => {
                setIsLoading(true)
                try {
                    const { data, message, pagination } = await api.depositLog({})
                    const { total } = pagination
                    setData(data)
                    setTotal(total)
                } catch (e: any) {
                    const message = e?.response?.data?.message || "Something went wrong"
                    console.error("Error fetching user lists: ", message)
                } finally {
                    setIsLoading(false)
                    setRefetch(false)
                }
            }
            fetchUser();
        }
    }, [refetch]);
    // get users on reload
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const { data, message, pagination } = await api.depositLog({})
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUsers()
    }, []);
    // get user's next page
    useEffect(() => {
        const debouncedUserFetch = setTimeout(async () => {
            setIsLoading(true)
            try {
                const { data } = await api.depositLog({ page: payload.page.toString() })
                setData(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }, 1000 * 3)
        return () => clearTimeout(debouncedUserFetch)
    }, [payload.page]);
    // get filtered users
    useEffect(() => {
        const debouncedUserFetch = setTimeout(async () => {
            if (!payload.search || payload.search.trim() === "") return


            setPayload(prev => ({ ...prev, page: 1 }))
            setIsLoading(true)
            try {
                const { data } = await api.depositLog({ search: payload.search })
                setData(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }, 1000 * 3)
        return () => clearTimeout(debouncedUserFetch)
    }, [payload.search]);
    // get next page of filtered users
    useEffect(() => {
        const debouncedUserFetch = setTimeout(async () => {
            const { page, search } = payload
            if (search.trim() === "") return

            setIsLoading(true)
            try {
                const { data } = await api.depositLog({ page: page.toString(), search })
                setData(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }, 1000 * 3)
        return () => clearTimeout(debouncedUserFetch)
    }, [payload]);

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <Stack w="100%" h={"full"} px={2} py={4}>
            <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                mb={4}
            >
                <Input
                    placeholder="아이디 또는 이름 검색"
                    value={payload.search}
                    onChange={(e) => setPayload(prev => ({ ...prev, search: e.target.value }))}
                    maxW="sm"
                    bgColor={"white"}
                />
                <Button
                    colorScheme="green"
                    onClick={() => setRefetch(true)}
                    isLoading={isLoading}
                >
                    새로고침
                </Button>
            </Stack>
            {/* Table */}
            {
                isLoading ? (
                    <Stack w={"100%"} p={10} justify={"center"} align={"center"} bgColor={"white"} rounded={"xl"}>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Stack>
                ) : (
                    <TableContainer w={"100%"} maxH={"full"} overflowY={"auto"} bg={cardBg} p={4} rounded="xl" shadow="md">
                        <Table size="sm" bgColor={"white"}>
                            <Thead >
                                <Tr bg={headerBg}>
                                    <Th py={3}>전화번호</Th>
                                    <Th py={3}>소속</Th>
                                    <Th py={3}>코인</Th>
                                    <Th py={3}>수량</Th>
                                    <Th py={3}>상태</Th>
                                    <Th py={3}>생성일</Th>
                                    <Th py={3}>관리</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.map(miner =>
                                        <TableRow key={miner.id} miner={miner} mutate={mutate} />
                                    )
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                )
            }

            {/* Footer */}
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                <Button colorScheme="blue" isDisabled={payload.page === 1} isLoading={isLoading} onClick={() => setPayload(prev => ({ ...prev, page: prev.page - 1 }))}>Prev</Button>
                <Text>{payload.page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={payload.page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPayload(prev => ({ ...prev, page: prev.page + 1 }))}>Next</Button>
            </Stack>
        </Stack>
    );
}
