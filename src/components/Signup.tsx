"use client";
import React, { useState, useEffect } from "react";
import {
    Box, Button, Checkbox, Flex, Input, Select, Stack, useColorModeValue,
    Table, Tbody, Td, Th, Thead, Tr,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";

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

    const pageSize = 10;

    const { setTItle } = useTitleStore()

    const [requests, setRequests] = useState(dummyRequests);
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState<string[]>([]);
    const [filter, setFilter] = useState("전체");
    const [search, setSearch] = useState("");

    useEffect(() => {
        setTItle("회원가입 관리")
    }, []);

    const handleApprove = (id: string) => {
        setRequests((prev) =>
            prev.map((r) =>
                r.id === id
                    ? {
                        ...r,
                        status: "승인",
                        handler: "관리자1",
                        handledAt: new Date().toLocaleString(),
                    }
                    : r
            )
        );
    };
    const handleReject = (id: string) => {
        const memo = prompt("거절 사유를 입력하세요:", "중복 신청");
        if (!memo) return;
        setRequests((prev) =>
            prev.map((r) =>
                r.id === id
                    ? {
                        ...r,
                        status: "거절",
                        handler: "관리자1",
                        handledAt: new Date().toLocaleString(),
                        memo,
                    }
                    : r
            )
        );
    };

    const toggleSelect = (id: string) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };
    const toggleAll = () => {
        const ids = paginated.map((r) => r.id);
        setSelected((prev) => (prev.length === ids.length ? [] : ids));
    };
    const handleDelete = () => {
        if (!window.confirm("선택한 요청을 삭제하시겠습니까?")) return;
        setRequests((prev) => prev.filter((r) => !selected.includes(r.id)));
        setSelected([]);
    };

    const filtered = requests.filter(
        (r) =>
            (filter === "전체" || r.status === filter) &&
            (r.id.includes(search) || r.name.includes(search))
    );
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
    const totalPages = Math.ceil(filtered.length / pageSize);


    return (
        <Box w="full" px={2} py={4}>
            <Flex justify="space-between" mb={4} gap={2} wrap="wrap">
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
            </Flex>

            <Box bg={bg} p={4} rounded="xl" shadow="md" overflowX="auto">
                <Table size="sm">
                    <Thead bg={headerBg}>
                        <Tr>
                            <Th><Checkbox isChecked={selected.length === paginated.length} onChange={toggleAll} /></Th>
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
                            paginated.map((r) => (
                                <Tr key={r.id} _hover={{ bg: "gray.50" }}>
                                    <Td><Checkbox isChecked={selected.includes(r.id)} onChange={() => toggleSelect(r.id)} /></Td>
                                    <Td>{r.id}</Td>
                                    <Td>{r.name}</Td>
                                    <Td>{r.email}</Td>
                                    <Td>{r.phone}</Td>
                                    <Td>{r.bank} {r.account} ({r.holder})</Td>
                                    <Td>{r.date}</Td>
                                    <Td>
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
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>

            <Flex justify="space-between" align="center" mt={4} wrap="wrap" gap={2}>
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
            </Flex>
        </Box>
    );
}
