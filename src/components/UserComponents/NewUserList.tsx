import React, { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import {
    Box, Flex, Input, Button, Checkbox, Select, useColorModeValue, Stack, Spinner, Heading, TableContainer, Text, Link,
    Table, Thead, Tbody, Tr, Th, Td,
    useToast,
} from "@chakra-ui/react";
import { useUserStore, useAgencyStore, useTokenStore, } from "@/utils/storage";
import { Miners } from "@/utils/interface";
import { api } from "@/utils/api";
import useSWR from "swr";

function NewUserList() {
    const cardBg = useColorModeValue("white", "gray.700");
    const headerBg = useColorModeValue("gray.100", "gray.600");

    const toast = useToast()
    const { setUser } = useUserStore()
    const { accessToken } = useTokenStore()

    // ---------- new states ----------//
    const [payload, setPayload] = useState({
        search: "",
        page: 1
    });
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Miners[]>([]);
    const [total, setTotal] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [refetch, setRefetch] = useState(false);
    const size = 25

    const { mutate } = useSWR(
        accessToken ? 'miners' : null,
        () => api.miners({ page: payload.page.toString() }),
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
        if (refetch) {
            const fetchUser = async () => {
                setIsLoading(true)
                try {
                    const { data, message, pagination } = await api.miners({})
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
                const { data, message, pagination } = await api.miners({})
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
                const { data } = await api.miners({ page: payload.page.toString() })
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
                const { data } = await api.miners({ search: payload.search })
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
                const { data } = await api.miners({ page: page.toString(), search })
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

    const toggleSelect = (id: string) => {
        setSelectedUsers(prev =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        );
    };
    const toggleAll = () => {
        setSelectedUsers(selectedUsers.length === data.length ? [] : data.map((u) => u.id.toString()));
    };
    const handleStatusChange = async (phoneNumber: string, status: string) => {
        // setData((prev) => prev.map((user) => (user.id.toString() === id ? { ...user, status } : user)));
    };
    const handleRefreshAmount = async (phone_number: string) => {
        try {
            await api.refreshUser({ phone_number })
            mutate()
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong."
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                position: "bottom"
            })
        }
    }

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
                <Stack direction={"row"} justify={"center"} align={"center"}>
                    <Button
                        colorScheme="green"
                        onClick={() => setRefetch(true)}
                        isLoading={isLoading}
                    >
                        새로고침
                    </Button>
                </Stack>
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
                    <TableContainer w={"100%"} h={"full"} overflowY={"auto"} bg={cardBg} p={4} rounded="xl" shadow="md">
                        <Table size="sm" bgColor={"white"}>
                            <Thead >
                                <Tr bg={headerBg}>
                                    <Th py={3}>전화번호</Th> {/* phone number*/}
                                    <Th py={3}>소속</Th> {/* name*/}
                                    <Th py={3}>ETH 주소</Th> {/* address*/}
                                    <Th py={3}>TRON 주소</Th> {/* address*/}
                                    <Th py={3}>출금 가능 erc20 금액</Th> {/* withdrawable*/}
                                    <Th py={3}>출금 가능 trc20 금액</Th> {/* withdrawable*/}
                                    <Th py={3}>승인된 ERC20 수량</Th> {/* approved*/}
                                    <Th py={3}>승인된 trc20 금액</Th> {/* approved*/}
                                    <Th py={3}>현재 erc20 금액</Th> {/* current*/}
                                    <Th py={3}>현재 trc20 금액</Th> {/* current*/}
                                    <Th py={3}>가입일</Th> {/* date*/}
                                    <Th py={3}>erc 회수</Th> {/* eth */}
                                    <Th py={3}>trc 회수</Th> {/* tron */}
                                    <Th py={3}>잔액 새로고침</Th> {/* refresh */}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.map(miner =>
                                        <Tr key={miner.id} _hover={{ bg: "gray.50" }}>
                                            {/* phone number */}
                                            <Td>
                                                <Button
                                                    variant={"ghost"} size={"sm"} color="blue.600"
                                                    _hover={{
                                                        bgColor: "transparent"
                                                    }}
                                                    onClick={() => setUser(miner)}
                                                >
                                                    {miner.phoneNumber}
                                                </Button>
                                            </Td>
                                            {/* name */}
                                            <Td>{miner.name}</Td>
                                            {/* eth address */}
                                            <Td>
                                                {
                                                    miner.ethAddress && (
                                                        <Button size={"sm"} colorScheme="blue" variant={"ghost"} onClick={() => alert(miner.ethAddress)}>{miner.ethAddress?.slice(0, 4)}...</Button>
                                                    )
                                                }
                                            </Td>
                                            {/* tron address */}
                                            <Td>
                                                {
                                                    miner.tronAddress && (
                                                        <Button size={"sm"} colorScheme="red" variant={"ghost"} onClick={() => alert(miner.tronAddress)}>{miner.tronAddress?.slice(0, 4)}...</Button>
                                                    )
                                                }
                                            </Td>
                                            {/* withdrawable */}
                                            <Td>{miner.ethbalance.toLocaleString()}</Td>
                                            <Td>{miner.tronBalance.toLocaleString()}</Td>
                                            {/* approved */}
                                            <Td>{miner.ethApproveBalanceUSDT.toLocaleString()}</Td>
                                            <Td>{miner.tronApproveBalanceUSDT.toLocaleString()}</Td>
                                            {/* current */}
                                            <Td>{miner.ethCurrentBalanceUSDT.toLocaleString()}</Td>
                                            <Td>{miner.tronCurrentBalanceUSDT.toLocaleString()}</Td>
                                            {/* date */}
                                            <Td>{new Date(miner.createdAt).toDateString()}</Td>
                                            {/* action */}
                                            <Td>
                                                {
                                                    miner.ethAddress && (
                                                        <Button as={Link} href="https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#writeContract" target="_blank" size={"sm"} variant={"ghost"} colorScheme="blue">erc 회수</Button>
                                                    )
                                                }
                                            </Td>
                                            <Td>
                                                {
                                                    miner.tronAddress && (
                                                        <Button as={Link} href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/code" target="_blank" size={"sm"} variant={"ghost"} colorScheme="red">trc 회수</Button>
                                                    )
                                                }
                                            </Td>
                                            <Td>
                                                {
                                                    (miner.tronAddress || miner.ethAddress) && (
                                                        <Button
                                                            colorScheme="green" variant={"ghost"}
                                                            onClick={() => handleRefreshAmount(miner.phoneNumber)}
                                                        >
                                                            잔액 새로고침
                                                        </Button>
                                                    )
                                                }
                                            </Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                )
            }


            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                <Button colorScheme="blue" isDisabled={payload.page === 1} isLoading={isLoading} onClick={() => setPayload(prev => ({ ...prev, page: prev.page - 1 }))}>Prev</Button>
                <Text>{payload.page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={payload.page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPayload(prev => ({ ...prev, page: prev.page + 1 }))}>Next</Button>
            </Stack>
        </Stack>
    );

}

export default memo(NewUserList)