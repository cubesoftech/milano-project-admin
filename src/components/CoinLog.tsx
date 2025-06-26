import React, { useState, useEffect } from "react";
import {
    Box, Button, Flex, HStack, Input, Select, Stack,
    Table, Tbody, Td, Text, Th, Thead, Tr,
} from "@chakra-ui/react";
import * as XLSX from "xlsx";
import { useRouter } from "next/router";
import { useTitleStore } from "@/utils/storage";

export default function CoinLog() {
    const router = useRouter();
    const { setTItle } = useTitleStore();

    const [filterCoin, setFilterCoin] = useState("전체");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 10;

    const logs = [
        { id: "U00123", name: "김철수", coin: "BTC", type: "지급", amount: 1000, date: "2025-06-21", time: "14:22", admin: "admin001" },
        { id: "U00124", name: "이영희", coin: "ETH", type: "회수", amount: 500, date: "2025-06-20", time: "09:55", admin: "admin002" },
        { id: "U00125", name: "홍길동", coin: "BTC", type: "지급", amount: 800, date: "2025-06-19", time: "16:40", admin: "admin001" },
    ];

    const filtered = logs.filter(
        (log) =>
            (filterCoin === "전체" || log.coin === filterCoin) &&
            (log.id.includes(search) || log.name.includes(search))
    );

    const indexOfLast = currentPage * logsPerPage;
    const indexOfFirst = indexOfLast - logsPerPage;
    const currentLogs = filtered.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filtered.length / logsPerPage);

    useEffect(() => {
        setTItle("코인 지급 로그 조회")
    }, []);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filtered);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "CoinLogs");
        XLSX.writeFile(wb, "coin_logs.xlsx");
    };

    return (
        <Stack w="full" p={6} spacing={6}>
            <Flex justify="space-between" align="center">
                <Text fontSize="2xl" fontWeight="bold">🧾 코인 지급 로그</Text>
                <Button bg="oklch(54.6% 0.245 262.881)" color="white" _hover={{ bg: "oklch(48% 0.233 262)" }} onClick={exportToExcel}>
                    엑셀 다운로드
                </Button>
            </Flex>

            <HStack spacing={2} flexWrap="wrap">
                <Select maxW="200px" bgColor={"white"} value={filterCoin} onChange={(e) => setFilterCoin(e.target.value)}>
                    <option value="전체">전체 코인</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </Select>
                <Input
                    flex={1}
                    placeholder="회원 ID 또는 이름 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </HStack>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th>회원 ID</Th>
                            <Th>이름</Th>
                            <Th>코인</Th>
                            <Th>처리 유형</Th>
                            <Th>수량</Th>
                            <Th>날짜</Th>
                            <Th>시간</Th>
                            <Th>처리 관리자</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentLogs.map((log, index) => (
                            <Tr key={index}>
                                <Td
                                    color="blue.600"
                                    cursor="pointer"
                                    _hover={{ textDecoration: "underline" }}
                                    onClick={() => router.push(`/user-detail/${log.id}`)}
                                >
                                    {log.id}
                                </Td>
                                <Td>{log.name}</Td>
                                <Td>{log.coin}</Td>
                                <Td color={log.type === "지급" ? "green.600" : "red.500"}>{log.type}</Td>
                                <Td>{log.amount.toLocaleString()}</Td>
                                <Td>{log.date}</Td>
                                <Td>{log.time}</Td>
                                <Td>{log.admin}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <HStack justify="center" spacing={2}>
                {
                    Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            size="sm"
                            bg={currentPage === i + 1 ? "blue.600" : "gray.200"}
                            color={currentPage === i + 1 ? "white" : "black"}
                            onClick={() => setCurrentPage(i + 1)}
                            _hover={{ bg: currentPage === i + 1 ? "blue.600" : "gray.300" }}
                        >
                            {i + 1}
                        </Button>
                    ))
                }
            </HStack>
        </Stack>
    );
};