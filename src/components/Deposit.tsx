"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
    Box, Button, Checkbox, Flex, Select, Stack, useColorModeValue, Input,
    Table, Tbody, Td, Th, Thead, Tr,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";

interface Deposit {
    id: string;
    name: string;
    amount: string;
    bank: string;
    account: string;
    holder: string;
    status: string;
    requestedAt: string;
    route: string;
    userMemo: string;
    adminMemo: string;
    handler: string;
    handledAt: string;
}
interface DepositTableRowProps {
    r: Deposit;
    selected: string[];
    toggleSelect: (id: string) => void;
    setRequests: Dispatch<SetStateAction<Deposit[]>>;
    updateStatus: (id: string, status: string) => void;
}

function DepositTableRow({ r, selected, toggleSelect, setRequests, updateStatus }: DepositTableRowProps) {
    return (
        <Tr key={r.id} _hover={{ bg: "gray.50" }}>
            <Td>
                <Checkbox isChecked={selected.includes(r.id)} onChange={() => toggleSelect(r.id)} />
            </Td>
            <Td>{r.id}</Td>
            <Td>{r.name}</Td>
            <Td>{r.amount}</Td>
            <Td>
                {r.bank} {r.account} ({r.holder})
            </Td>
            <Td whiteSpace="nowrap">{r.requestedAt}</Td>
            <Td>{r.route}</Td>
            <Td>{r.userMemo}</Td>
            <Td>
                {
                    r.adminMemo || (
                        <Button
                            size="xs"
                            variant="link"
                            colorScheme="gray"
                            onClick={() => {
                                const memo = prompt("관리자 메모 입력", r.adminMemo || "");
                                if (memo !== null) {
                                    setRequests((prev) =>
                                        prev.map((req) => (req.id === r.id ? { ...req, adminMemo: memo } : req))
                                    );
                                }
                            }}
                        >
                            메모 입력
                        </Button>
                    )
                }
            </Td>
            <Td>
                {r.status}
                {
                    r.handler && (
                        <Box as="span" fontSize="xs" color="gray.500">
                            {' '} (by {r.handler} @ {r.handledAt})
                        </Box>
                    )
                }
                <Select
                    size="xs"
                    mt={1}
                    value={r.status}
                    onChange={(e) => updateStatus(r.id, e.target.value)}
                >
                    <option value="대기">대기</option>
                    <option value="완료">완료</option>
                    <option value="보류">보류</option>
                    <option value="취소">취소</option>
                </Select>
            </Td>
            <Td>
                {
                    r.status === "대기" && (
                        <Stack direction="row" spacing={1}>
                            <Button size="xs" colorScheme="blue" variant="link" onClick={() => updateStatus(r.id, "완료")}>입금완료</Button>
                            <Button size="xs" colorScheme="yellow" variant="link" onClick={() => updateStatus(r.id, "보류")}>보류</Button>
                            <Button size="xs" colorScheme="red" variant="link" onClick={() => updateStatus(r.id, "취소")}>취소</Button>
                        </Stack>
                    )
                }
            </Td>
        </Tr>
    );
}

export default function Deposit({ type }: { type: "deposit" | "withdraw" }) {
    const cardBg = useColorModeValue("white", "gray.700");
    const headerBg = useColorModeValue("gray.100", "gray.600");

    const dummyDeposits = Array.from({ length: 22 }, (_, i): Deposit => ({
        id: `D${(i + 1).toString().padStart(3, "0")}`,
        name: `회원${i + 1}`,
        amount: (100000 * (i + 1)).toLocaleString() + "원",
        bank: i % 2 === 0 ? "국민은행" : "신한은행",
        account: `110-${(100000000 + i).toString().slice(-8)}`,
        holder: `회원${i + 1}`,
        status: "대기",
        requestedAt: `2024-06-${(10 + (i % 20)).toString().padStart(2, "0")} 12:${(i % 60)
            .toString()
            .padStart(2, "0")}`,
        route: ["가상계좌", "토스", "무통장"][i % 3],
        userMemo: `입금 관련 메모${i + 1}`,
        adminMemo: "",
        handler: "",
        handledAt: "",
    }));

    const { setTItle } = useTitleStore()

    const [requests, setRequests] = useState(dummyDeposits);
    const [selected, setSelected] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const pageSize = 10; // match Signup page size

    useEffect(() => {
        setTItle(type === "deposit" ? "입금신청 관리" : "출금신청 관리")
    }, []);

    const updateStatus = (id: string, status: string) => {
        const memo = prompt(`${status} 처리 메모를 입력해주세요`) || "";
        setRequests((prev) =>
            prev.map((r) =>
                r.id === id
                    ? {
                        ...r,
                        status,
                        adminMemo: memo,
                        handler: "관리자1",
                        handledAt: new Date().toLocaleString(),
                    }
                    : r
            )
        );
    };
    const toggleSelect = (id: string) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };

    const filtered = requests.filter(
        (r) => r.id.includes(search) || r.name.includes(search)
    );

    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
    const totalPages = Math.ceil(filtered.length / pageSize);

    const toggleAll = () => {
        const ids = paginated.map((r) => r.id);
        setSelected((prev) => (prev.length === ids.length ? [] : ids));
    };


    return (
        <Box w="full" px={2} py={4}>
            {/* Table */}
            <Box bg={cardBg} p={4} rounded="xl" shadow="md" overflowX="auto">
                <Table size="sm">
                    <Thead bg={headerBg}>
                        <Tr>
                            <Th>
                                <Checkbox isChecked={selected.length === paginated.length} onChange={toggleAll} />
                            </Th>
                            <Th>ID</Th>
                            <Th>회원명</Th>
                            <Th>금액</Th>
                            <Th>계좌정보</Th>
                            <Th>신청일</Th>
                            <Th>입금경로</Th>
                            <Th>요청메모</Th>
                            <Th>관리자메모</Th>
                            <Th>상태</Th>
                            <Th>처리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            paginated.map((r) =>
                                <DepositTableRow
                                    key={r.id}
                                    r={r}
                                    selected={selected}
                                    toggleSelect={toggleSelect}
                                    setRequests={setRequests}
                                    updateStatus={updateStatus}
                                />
                            )
                        }
                    </Tbody>
                </Table>
            </Box>

            {/* Footer */}
            <Flex justify="space-between" align="center" mt={4} wrap="wrap" gap={2}>
                <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => {
                        if (window.confirm("선택한 입금 요청을 삭제하시겠습니까?")) {
                            setRequests((prev) => prev.filter((r) => !selected.includes(r.id)));
                            setSelected([]);
                        }
                    }}
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
