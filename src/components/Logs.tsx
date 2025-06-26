import React, { useState, useEffect } from "react";
import {
    Box, Button, Checkbox, Flex, HStack, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr,
} from "@chakra-ui/react";
import * as XLSX from "xlsx";
import { useTitleStore } from "@/utils/storage";

interface Log {
    id: string;
    ip: string;
    location: string;
    device: string;
    login: string;
    logout: string;
    anomaly: boolean;
}

export default function Logs() {
    const { setTItle } = useTitleStore();

    const [tab, setTab] = useState("user");
    const [search, setSearch] = useState("");
    const [memo, setMemo] = useState<any>({});
    const [selected, setSelected] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [savedMemo, setSavedMemo] = useState({});
    const logsPerPage = 10;

    const logs: Record<string, Log[]> = {
        user: [
            { id: "U00123", ip: "192.168.0.12", location: "서울", device: "Chrome / Windows", login: "2025-06-20 08:22", logout: "2025-06-20 09:01", anomaly: false },
            { id: "U00127", ip: "221.153.18.75", location: "일본", device: "Safari / iPhone", login: "2025-06-21 12:41", logout: "2025-06-21 12:59", anomaly: true },
        ],
        admin: [
            { id: "admin1", ip: "127.0.0.1", location: "내부망", device: "Edge / Windows", login: "2025-06-21 10:00", logout: "2025-06-21 11:12", anomaly: false },
            { id: "admin2", ip: "172.33.25.88", location: "독일", device: "Firefox / Linux", login: "2025-06-21 14:00", logout: "2025-06-21 15:30", anomaly: false },
        ]
    };

    const filtered = logs[tab].filter(log =>
        log.id.includes(search) || log.ip.includes(search) || log.device.includes(search)
    );

    const indexOfLast = currentPage * logsPerPage;
    const indexOfFirst = indexOfLast - logsPerPage;
    const currentLogs = filtered.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filtered.length / logsPerPage);

    useEffect(() => {
        setTItle("로그 기록")
    }, []);

    const handleMemoChange = (id: any, text: any) => {
        setMemo((prev: any) => ({ ...prev, [id]: text }));
    };
    const handleMemoSave = (id: any) => {
        setSavedMemo(prev => ({ ...prev, [id]: memo[id] }));
        alert("메모가 저장되었습니다.");
    };
    const toggleSelect = (id: string) => {
        setSelected(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };
    const handleDeleteSelected = () => {
        if (!window.confirm("선택한 로그를 삭제하시겠습니까?")) return;
        alert(`삭제 요청됨: ${selected.join(", ")}`);
        setSelected([]);
    };
    const exportToExcel = () => {
        const exportData = filtered.map(log => ({ ...log, memo: memo[log.id] || "" }));
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, `${tab}_logs`);
        XLSX.writeFile(wb, `${tab}_logs.xlsx`);
    };

    return (
        <Stack w="full" p={6} spacing={6} >
            <Flex justify="space-between" align="center">
                <Text fontSize="2xl" fontWeight="bold">🧾 접속 로그</Text>
                <HStack spacing={2}>
                    <Button bg="red.600" color="white" _hover={{ bg: "red.700" }} onClick={handleDeleteSelected}>선택 삭제</Button>
                    <Button bg="oklch(54.6% 0.245 262.881)" color="white" _hover={{ bg: "oklch(48% 0.233 262)" }} onClick={exportToExcel}>엑셀 다운로드</Button>
                </HStack>
            </Flex>

            <HStack spacing={2} flexWrap="wrap">
                <Button
                    onClick={() => { setTab("user"); setCurrentPage(1); }}
                    bg={tab === "user" ? "blue.600" : "gray.200"}
                    color={tab === "user" ? "white" : "black"}
                >회원 로그인</Button>
                <Button
                    onClick={() => { setTab("admin"); setCurrentPage(1); }}
                    bg={tab === "admin" ? "blue.600" : "gray.200"}
                    color={tab === "admin" ? "white" : "black"}
                >관리자 로그인</Button>
                <Input
                    placeholder="ID, IP, 디바이스 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </HStack>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th><Checkbox isChecked={selected.length === currentLogs.length} onChange={(e) => setSelected(e.target.checked ? currentLogs.map(l => l.id) : [])} /></Th>
                            <Th>ID</Th>
                            <Th>IP 주소</Th>
                            <Th>위치</Th>
                            <Th>디바이스</Th>
                            <Th>로그인 시간</Th>
                            <Th>로그아웃 시간</Th>
                            <Th>이상 여부</Th>
                            <Th>메모</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentLogs.map((log, idx) => (
                            <Tr key={idx} bg={log.anomaly ? "red.100" : undefined}>
                                <Td><Checkbox isChecked={selected.includes(log.id)} onChange={() => toggleSelect(log.id)} /></Td>
                                <Td>{log.id}</Td>
                                <Td>{log.ip}</Td>
                                <Td>{log.location}</Td>
                                <Td>{log.device}</Td>
                                <Td>{log.login}</Td>
                                <Td>{log.logout}</Td>
                                <Td>{log.anomaly ? "❗" : "-"}</Td>
                                <Td>
                                    <HStack spacing={1}>
                                        <Input
                                            size="sm"
                                            value={memo[log.id] || ""}
                                            onChange={(e) => handleMemoChange(log.id, e.target.value)}
                                            placeholder="이상 접속 메모"
                                        />
                                        <Button
                                            size="xs"
                                            colorScheme="green"
                                            onClick={() => handleMemoSave(log.id)}
                                        >저장</Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <HStack justify="center" spacing={2}>
                {Array.from({ length: totalPages }, (_, i) => (
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
                ))}
            </HStack>
        </Stack>
    );
};