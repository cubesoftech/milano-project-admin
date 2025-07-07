import React, { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import {
    Box, Flex, Input, Button, Checkbox, Select, useColorModeValue, Stack, Spinner, Heading,
    Table, Thead, Tbody, Tr, Th, Td,
    Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import { useUserStore, useAgencyStore, } from "@/utils/storage";
import { useRouter } from "next/router";
import axios from "axios";
import { Miners } from "@/utils/interface";

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

    const [search, setSearch] = useState("");
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [tab, setTab] = useState(0);
    const [miners, setMiners] = useState<Miners[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const pageSize = 10;
    const filtered = miners.filter(
        (u) => u.id.toString().toLowerCase().includes(search.toLowerCase()) || u.name.includes(search)
    );
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
    const totalPages = Math.ceil(filtered.length / pageSize);

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            const url = "/api/getMiners"

            try {
                const { data } = await axios.get(url)
                setMiners(data.miners)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong."
                console.log(message)
            } finally {
                setIsLoading(false)
            }
        }
        fetch();
    }, []);


    const toggleSelect = (id: string) => {
        setSelectedUsers(prev =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        );
    };
    const toggleAll = () => {
        setSelectedUsers(selectedUsers.length === miners.length ? [] : miners.map((u) => u.id.toString()));
    };
    const handleStatusChange = (id: string, status: string) => {
        setMiners((prev) => prev.map((user) => (user.id.toString() === id ? { ...user, status } : user)));
    };

    const tableProps: any = {
        headerBg,
        selectedUsers,
        toggleAll,
        paginated,
        toggleSelect,
        handleStatusChange,
    }

    return (
        <Box w="full" h={"full"} px={2} py={4}>
            <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                mb={4}
            >
                <Input
                    placeholder="아이디 또는 이름 검색"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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

            <Box bg={cardBg} p={4} rounded="xl" shadow="md" overflowX="auto">
                {
                    isLoading
                        ? (
                            <Stack w={"100%"} h={"full"} justify={"center"} align={"center"}>
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            </Stack>
                        )
                        :
                        miners.length <= 0
                            ? (
                                <Stack w={"100%"} h={"full"} rounded={"xl"} justify={"center"} align={"center"}>
                                    <Heading size={"lg"}>데이터가 없습니다</Heading>
                                </Stack>
                            )
                            : (
                                <UserTable
                                    data={miners}
                                    {...tableProps}
                                />
                            )
                }
            </Box>

            <Flex justify="center" mt={4} gap={2}>
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
            </Flex>
        </Box>
    );

}

export default memo(NewUserList)