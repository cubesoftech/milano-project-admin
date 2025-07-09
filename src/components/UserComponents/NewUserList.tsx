import React, { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import {
    Box, Flex, Input, Button, Checkbox, Select, useColorModeValue, Stack, Spinner, Heading, TableContainer, Text, Link,
    Table, Thead, Tbody, Tr, Th, Td,
    Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import { useUserStore, useAgencyStore, } from "@/utils/storage";
import { useRouter } from "next/router";
import axios from "axios";
import { Miners } from "@/utils/interface";
import { api } from "@/utils/api";

interface UsersTableRowProps {
    user: Miners,
    selectedUsers: string[],
    toggleSelect: (id: string) => void,
    handleStatusChange: (id: string, status: string) => void,
}
interface UserTableProp {
    headerBg: "gray.100" | "gray.600";
    selectedUsers: string[];
    data: Miners[];
    toggleAll: () => void;
    paginated: Miners[];
    toggleSelect: (id: string) => void;
    handleStatusChange: (id: string, status: string) => void;
}

function UsersTableRow({ user, selectedUsers, toggleSelect, handleStatusChange }: UsersTableRowProps) {

    const joined = new Date(user.createdAt).toLocaleString()

    const { push } = useRouter()
    const { setUser } = useUserStore()
    const { selectAgency } = useAgencyStore()

    const handleSelectAgency = (arg: string) => {
        selectAgency(arg);
        push("/agencies")
    }
    return (
        <Tr _hover={{ bg: "gray.50" }}>
            <Td>
                <Checkbox
                    isChecked={selectedUsers.includes(user.id.toString())}
                    onChange={() => toggleSelect(user.id.toString())}
                />
            </Td>
            <Td>
                <Button
                    variant={"ghost"} size={"sm"} color="blue.600"
                    _hover={{
                        bgColor: "transparent"
                    }}
                    onClick={() => setUser(user)}
                >
                    {`${user.id}`}
                </Button>
            </Td>
            <Td>{user.name}</Td>
            <Td>준비중입니다</Td>
            {/* below is the real data and above is just a placeholder */}
            {/* <Td>{user.email}</Td> */}
            <Td>
                <Select
                    size="sm"
                    onChange={(e) => handleStatusChange(user.id.toString(), e.target.value)}
                >
                    <option value="정상">정상</option>
                    <option value="정지">정지</option>
                </Select>
            </Td>
            <Td>준비중입니다</Td>
            {/* below is the real data and above is just a placeholder */}
            {/* <Td>{user.role}</Td> */}
            <Td>
                <Button
                    variant={"ghost"} size={"sm"} color="blue.600"
                    _hover={{
                        bgColor: "transparent"
                    }}
                    onClick={() => handleSelectAgency(user.name)} >
                    준비중입니다
                </Button>
            </Td>
            <Td>{joined}</Td>
            <Td>
                <Button
                    size="xs"
                    variant="link"
                    colorScheme="blue"
                    mr={2}
                    onClick={() => alert(`DM to ${user.name}`)}
                >
                    메시지
                </Button>
                <Button size="xs" variant="link" colorScheme="gray">
                    수정
                </Button>
            </Td>
        </Tr>
    );
}
function UserTable({ headerBg, selectedUsers, data, toggleAll, paginated, toggleSelect, handleStatusChange }: UserTableProp) {
    return (
        <Table size="sm">
            <Thead bg={headerBg}>
                <Tr>
                    <Th>
                        <Checkbox
                            isChecked={selectedUsers.length === data.length}
                            onChange={toggleAll}
                        />
                    </Th>
                    <Th>회원 ID</Th>
                    <Th>이름</Th>
                    <Th>이메일</Th>
                    <Th>상태</Th>
                    <Th>소속</Th>
                    <Th>상위</Th>
                    <Th>가입일</Th>
                    <Th>관리</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    paginated.map(user =>
                        <UsersTableRow
                            key={user.id}
                            user={user}
                            selectedUsers={selectedUsers}
                            toggleSelect={toggleSelect}
                            handleStatusChange={handleStatusChange}
                        />
                    )
                }
            </Tbody>
        </Table>
    );
}
function NewUserList() {
    const cardBg = useColorModeValue("white", "gray.700");
    const headerBg = useColorModeValue("gray.100", "gray.600");

    const { setUser } = useUserStore()

    // ---------- new states ----------//
    const [payload, setPayload] = useState({
        search: "",
        page: 1
    });
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Miners[]>([]);
    const [total, setTotal] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const size = 25

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

    return (
        <Box w="full" h={"full"} px={2} py={4}>
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
                    colorScheme="red"
                    isDisabled={selectedUsers.length === 0}
                    onClick={() => alert("삭제 기능 실행 (예시)")}
                >
                    선택 회원 삭제
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
                    <TableContainer w={"100%"} bg={cardBg} p={4} rounded="xl" shadow="md">
                        <Table size="sm" bgColor={"white"}>
                            <Thead bg={headerBg}>
                                <Tr>
                                    <Th>
                                        <Checkbox
                                            isChecked={selectedUsers.length === data.length}
                                            onChange={toggleAll}
                                        />
                                    </Th>
                                    <Th>회원 ID</Th>
                                    <Th>이름</Th>
                                    <Th>이메일</Th>
                                    <Th>상태</Th>
                                    <Th>소속</Th>
                                    <Th>ETH 주소</Th>
                                    <Th>TRON 주소</Th>
                                    <Th>erc20 잔액</Th>
                                    <Th>trc20 잔액</Th>
                                    <Th>출금 가능 잔액</Th>
                                    <Th>상위</Th>
                                    <Th>가입일</Th>
                                    <Th>관리</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.map(miner =>
                                        <Tr key={miner.id} _hover={{ bg: "gray.50" }}>
                                            <Td>
                                                <Checkbox
                                                    isChecked={selectedUsers.includes(miner.id.toString())}
                                                    onChange={() => toggleSelect(miner.id.toString())}
                                                />
                                            </Td>
                                            <Td>
                                                <Button
                                                    variant={"ghost"} size={"sm"} color="blue.600"
                                                    _hover={{
                                                        bgColor: "transparent"
                                                    }}
                                                    onClick={() => setUser(miner)}
                                                >
                                                    {`${miner.id}`}
                                                </Button>
                                            </Td>
                                            <Td>{miner.name}</Td>
                                            <Td>준비중입니다</Td>
                                            {/* below is the real data and above is just a placeholder */}
                                            {/* <Td>{miner.email}</Td> */}
                                            <Td>
                                                <Select
                                                    size="sm"
                                                    onChange={(e) => handleStatusChange(miner.id.toString(), e.target.value)}
                                                >
                                                    <option value="정상">정상</option> {/* normal  */}
                                                    <option value="정지">정지</option> {/* stop  */}
                                                </Select>
                                            </Td>
                                            <Td>준비중입니다</Td>
                                            <Td>
                                                {
                                                    miner.ethAddress && (
                                                        <Button size={"sm"} colorScheme="blue" variant={"ghost"} onClick={() => alert(miner.ethAddress)}>{miner.ethAddress?.slice(0, 4)}...</Button>
                                                    )
                                                }
                                            </Td>
                                            <Td>
                                                {
                                                    miner.tronAddress && (
                                                        <Button size={"sm"} colorScheme="red" variant={"ghost"} onClick={() => alert(miner.tronAddress)}>{miner.tronAddress?.slice(0, 4)}...</Button>
                                                    )
                                                }
                                            </Td>
                                            {/* <Td>{miner.ethAddress}</Td> */}
                                            {/* <Td>{miner.tronAddress}</Td> */}
                                            <Td>{miner.ethbalance.toLocaleString()}</Td>
                                            <Td>{miner.tronBalance.toLocaleString()}</Td>
                                            <Td>{miner.cumulativeBalance.toLocaleString()}</Td>
                                            {/* below is the real data and above is just a placeholder */}
                                            {/* <Td>{miner.role}</Td> */}
                                            <Td>
                                                <Button
                                                    variant={"ghost"} size={"sm"} color="blue.600"
                                                    _hover={{
                                                        bgColor: "transparent"
                                                    }}
                                                // onClick={() => handleSelectAgency(miner.name)}
                                                >
                                                    준비중입니다
                                                </Button>
                                            </Td>
                                            <Td>{new Date(miner.createdAt).toDateString()}</Td>
                                            <Td>
                                                {/* <Button
                                                    size="xs"
                                                    variant="link"
                                                    colorScheme="blue"
                                                    mr={2}
                                                    onClick={() => alert(`DM to ${miner.name}`)}
                                                >
                                                    메시지
                                                </Button> */}
                                                {
                                                    miner.ethAddress && (
                                                        <Button as={Link} href="https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#writeContract" target="_blank" size={"sm"} variant={"ghost"} colorScheme="blue">erc 회수</Button>
                                                    )
                                                }
                                                {
                                                    miner.tronAddress && (
                                                        <Button as={Link} href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/code" target="_blank" size={"sm"} variant={"ghost"} colorScheme="red">trc 회수</Button>
                                                    )
                                                }
                                                {/* <Button size="xs" variant="link" colorScheme="gray">
                                                    수정
                                                </Button> */}
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
                <Button colorScheme="blue" isDisabled={payload.page === 1} onClick={() => setPayload(prev => ({ ...prev, page: prev.page - 1 }))}>Prev</Button>
                <Text>{payload.page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={payload.page === Math.ceil(total / size)} onClick={() => setPayload(prev => ({ ...prev, page: prev.page + 1 }))}>Next</Button>
            </Stack>
        </Box>
    );

}

export default memo(NewUserList)