import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    HStack,
    Input,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    UnorderedList,
    ListItem,
    VStack
} from "@chakra-ui/react";
import * as XLSX from "xlsx";
import { useTitleStore } from "@/utils/storage";

export default function Referral() {
    const { setTItle } = useTitleStore();

    const [search, setSearch] = useState("");
    const [showTree, setShowTree] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [minCount, setMinCount] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [bonusLogs, setBonusLogs] = useState<any[]>([]);

    const referrals = [
        { id: "U001", name: "김민수", referred: 12, bonus: 800000, tree: ["U011", "U012"] },
        { id: "U002", name: "이서연", referred: 5, bonus: 320000, tree: ["U013"] },
        { id: "U003", name: "박지후", referred: 0, bonus: 0, tree: [] },
    ];

    const filtered = referrals.filter(r =>
        (r.id.includes(search) || r.name.includes(search)) &&
        r.referred >= minCount
    );

    useEffect(() => {
        setTItle("추천인 관리")
    }, []);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filtered);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Referrals");
        XLSX.writeFile(wb, "referrals.xlsx");
    };

    return (
        <Stack w="full" p={6} spacing={6} >
            <Text fontSize="2xl" fontWeight="bold">🔗 추천인 관리</Text>

            <Stack direction={"row"} justify={"flex-start"} align={"center"}>
                <Input
                    w={"fit-content"}
                    placeholder="ID 또는 이름 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Input
                    w={"fit-content"}
                    type="number"
                    placeholder="최소 추천 수"
                    bgColor={"white"}
                    value={minCount}
                    onChange={(e) => setMinCount(Number(e.target.value))}
                />
                <Input
                    w={"fit-content"}
                    type="date"
                    bgColor={"white"}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                    w={"fit-content"}
                    type="date"
                    bgColor={"white"}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <Button
                    bg="green.600"
                    color="white"
                    _hover={{ bg: "green.700" }}
                    onClick={exportToExcel}
                >
                    엑셀 다운로드
                </Button>
            </Stack>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th>회원 ID</Th>
                            <Th>이름</Th>
                            <Th>추천 수</Th>
                            <Th>누적 보너스</Th>
                            <Th>추천 트리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filtered.map(user => (
                            <Tr key={user.id}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.referred}</Td>
                                <Td>₩{user.bonus.toLocaleString()}</Td>
                                <Td>
                                    <Button
                                        size="xs"
                                        bg="blue.600"
                                        color="white"
                                        _hover={{ bg: "blue.700" }}
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setBonusLogs([
                                                { date: "2025-06-01", amount: 200000 },
                                                { date: "2025-06-12", amount: 600000 },
                                            ]);
                                            setShowTree(true);
                                        }}
                                    >
                                        보기
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Modal isOpen={showTree} onClose={() => setShowTree(false)} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>추천 트리 - {selectedUser?.name}</ModalHeader>
                    <ModalBody>
                        {selectedUser?.tree?.length > 0 ? (
                            <UnorderedList pl={4} spacing={1} fontSize="sm">
                                {selectedUser.tree.map((id: any, i: any) => (
                                    <ListItem key={i}>
                                        <Button variant="link" color="blue.600" onClick={() => alert(`${id} 상세보기 연결`)}>
                                            {id}
                                        </Button>
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        ) : (
                            <Text fontSize="sm" color="gray.500">추천인이 없습니다.</Text>
                        )}

                        <Box bg="gray.100" mt={4} p={4} rounded="md">
                            <Text fontWeight="semibold" mb={2}>보너스 지급 이력</Text>
                            <UnorderedList pl={4} fontSize="sm">
                                {bonusLogs.map((b, i) => (
                                    <ListItem key={i}>{b.date} - ₩{b.amount.toLocaleString()}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setShowTree(false)} bg="gray.400" color="white" _hover={{ bg: "gray.600" }}>
                            닫기
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    );
};