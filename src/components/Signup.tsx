"use client";
import React, { useState, useEffect } from "react";
import {
    Box, Button, Checkbox, Flex, Input, Select, Stack, useColorModeValue, Text, Spinner,
    Table, Tbody, Td, Th, Thead, Tr,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import { Miners } from "@/utils/interface";
import { api } from "@/utils/api";
import UseToastHooks from "@/hooks/UseToastHooks";

interface Request {
    id: string;
    name: string;
    email: string;
    phone: string;
    account: string;
    bank: string;
    holder: string;
    date: string;
    status: string;
    parent: string;
    handler?: string;
    handledAt?: string;
    memo?: string;
}
const dummyRequests = Array.from({ length: 25 }, (_, i): Request => ({
    id: `R${(i + 1).toString().padStart(3, "0")}`,
    name: `회원${i + 1}`,
    email: `user${i + 1}@email.com`,
    phone: `010-1234-${(1000 + i).toString().slice(-4)}`,
    account: `110-${(100000000 + i).toString().slice(-8)}`,
    bank: i % 2 === 0 ? "국민은행" : "신한은행",
    holder: `회원${i + 1}`,
    date: `2024-06-${(10 + (i % 20)).toString().padStart(2, "0")}`,
    status: "대기",
    parent: `총판${String.fromCharCode(65 + (i % 3))}`,
}));

export default function Signup() {
    const bg = useColorModeValue("white", "gray.700");
    const headerBg = useColorModeValue("gray.100", "gray.600");
    const size = 25

    const { setTItle } = useTitleStore()
    const toast = UseToastHooks()

    const [selected, setSelected] = useState<string[]>([]);
    const [payload, setPayload] = useState({
        search: "",
        page: 1
    });
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Miners[]>([]);
    const [total, setTotal] = useState(1);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        setTItle("회원가입 관리")
    }, []);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const { data, message, pagination } = await api.minersSignup({})
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
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const { data, message, pagination } = await api.minersSignup({ page: payload.page.toString() })
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
    }, [payload.page]);
    useEffect(() => {
        if (refetch) {
            const fetchUsers = async () => {
                setIsLoading(true)
                try {
                    const { data, message, pagination } = await api.minersSignup({})
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
            fetchUsers()
        }
    }, [refetch]);

    const toggleSelect = (id: string) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };
    const toggleAll = () => {
        const ids = data.map((r) => r.id.toString());
        setSelected((prev) => (prev.length === ids.length ? [] : ids));
    };

    const handleApprove = async (phoneNumber: string) => {
        try {
            const { message, success } = await api.changeStatus({ phoneNumber })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            console.error("Error fetching user lists: ", message)
        } finally {
            setRefetch(true)
        }
    }

    return (
        <Box w="full" px={2} py={4}>
            {/* <Flex justify="space-between" mb={4} gap={2} wrap="wrap">
                <Stack direction="row" spacing={2}>
                    {
                        ["전체", "대기", "승인", "거절"].map((tab) => (
                            <Button
                                key={tab}
                                size="sm"
                                bg={filter === tab ? "blue.500" : "gray.200"}
                                color={filter === tab ? "white" : "gray.700"}
                                onClick={() => setFilter(tab)}
                                _hover={{ bg: filter === tab ? "blue.600" : "gray.300" }}
                            >
                                {tab}
                            </Button>
                        ))
                    }
                </Stack>
                <Input
                    size="sm"
                    placeholder="ID 또는 이름 검색"
                    w="sm"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Flex> */}
            <Stack w={"100%"} direction={"row"} justify={"flex-end"} align={"center"} mb={5}>
                <Button
                    colorScheme="green"
                    onClick={() => setRefetch(true)}
                    isLoading={isLoading}
                >
                    잔액 새로고침
                </Button>
            </Stack>

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
                    <Box bg={bg} p={4} rounded="xl" shadow="md" overflowX="auto">
                        <Table size="sm">
                            <Thead bg={headerBg}>
                                <Tr>
                                    <Th><Checkbox isChecked={selected.length === data.length} onChange={toggleAll} /></Th>
                                    <Th>ID</Th>
                                    <Th>이름</Th>
                                    <Th>이메일</Th>
                                    <Th>전화번호</Th>
                                    <Th>계좌정보</Th>
                                    <Th>신청일</Th>
                                    <Th>상태</Th>
                                    <Th>처리</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.map(miner => (
                                        <Tr key={miner.id} _hover={{ bg: "gray.50" }}>
                                            <Td><Checkbox isChecked={selected.includes(miner.id.toString())} onChange={() => toggleSelect(miner.id.toString())} /></Td>
                                            <Td>{miner.id}</Td>
                                            <Td>{miner.name}</Td>
                                            <Td>준비중입니다</Td>
                                            <Td>준비중입니다</Td>
                                            <Td>준비중입니다</Td>
                                            <Td>준비중입니다</Td>
                                            <Td>준비중입니다</Td>
                                            <Td>
                                                <Stack w={"100%"} direction={"row"} justify={"center"} align={"center"}>
                                                    <Button size={"sm"} colorScheme="green" variant={"ghost"} onClick={() => handleApprove(miner.phoneNumber)}>승인</Button>
                                                    <Button size={"sm"} colorScheme="red" variant={"ghost"}>거절</Button>
                                                </Stack>
                                            </Td>
                                            {/* <Td>{miner.email}</Td> */}
                                            {/* <Td>{miner.phone}</Td> */}
                                            {/* <Td>{miner.bank} {r.account} ({r.holder})</Td> */}
                                            {/* <Td>{miner.date}</Td> */}
                                            {/* <Td>
                                        {r.status}
                                        {
                                            r.handler && (
                                                <Box as="span" fontSize="xs" color="gray.500"> (by {r.handler} @ {r.handledAt})</Box>
                                            )
                                        }
                                        {
                                            r.memo && (
                                                <Box fontSize="xs" color="red.500">사유: {r.memo}</Box>
                                            )
                                        }
                                    </Td>
                                    <Td>
                                        {
                                            r.status === "대기" && (
                                                <Stack direction="row" spacing={1}>
                                                    <Button size="xs" colorScheme="green" variant="link" onClick={() => handleApprove(r.id)}>
                                                        승인
                                                    </Button>
                                                    <Button size="xs" colorScheme="red" variant="link" onClick={() => handleReject(r.id)}>
                                                        거절
                                                    </Button>
                                                </Stack>
                                            )
                                        }
                                    </Td> */}
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    </Box>
                )
            }


            {/* <Flex justify="space-between" align="center" mt={4} wrap="wrap" gap={2}>
                <Button
                    colorScheme="red"
                    size="sm"
                    onClick={handleDelete}
                    isDisabled={selected.length === 0}
                >
                    선택 삭제
                </Button>
                <Stack direction="row" spacing={1}>
                    {
                        Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                size="sm"
                                variant={page === i + 1 ? "solid" : "outline"}
                                colorScheme="blue"
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </Button>
                        ))
                    }
                </Stack>
            </Flex> */}
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                <Button colorScheme="blue" isDisabled={payload.page === 1} isLoading={isLoading} onClick={() => setPayload(prev => ({ ...prev, page: prev.page - 1 }))}>Prev</Button>
                <Text>{payload.page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={payload.page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPayload(prev => ({ ...prev, page: prev.page + 1 }))}>Next</Button>
            </Stack>
        </Box>
    );
}
