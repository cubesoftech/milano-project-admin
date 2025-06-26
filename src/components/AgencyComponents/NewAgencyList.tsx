import React, { useState, memo } from "react";
import {
    Box, Button, Flex, Input, Stack, useColorModeValue, Select, useDisclosure,

    FormControl, FormLabel,
    Table, Thead, Tbody, Tr, Th, Td,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
} from "@chakra-ui/react";
import { useAgencyStore } from "@/utils/storage";

interface Agency {
    id: string;
    name: string;
    role: string;
    commissionRate: string;
    subCommissionLimit: string;
    settlementCycle: string;
    totalCommission: string;
    pendingCommission: string;
    referralLink: string;
    subAgents: number;
    subUsers: number;
    lastLog: string;
    memo: string;
}

function AgenciesTableRow({ a, }: { a: Agency }) {
    const { selectAgency } = useAgencyStore()
    return (
        <Tr key={a.id} _hover={{ bg: "gray.50" }}>
            <Td>
                <Button
                    size={"sm"} variant={"ghost"} color={"blue.600"}
                    _hover={{
                        bgColor: "transparent"
                    }}
                    onClick={() => selectAgency(a.name)}
                >
                    {a.id}
                </Button>
            </Td>
            <Td>{a.name}</Td>
            <Td>{a.role}</Td>
            <Td>{a.commissionRate}</Td>
            <Td>{a.subCommissionLimit}</Td>
            <Td>{a.settlementCycle}</Td>
            <Td>{a.totalCommission}</Td>
            <Td>{a.pendingCommission}</Td>
            <Td>
                <Flex align="center" gap={2} maxW="160px">
                    <Box as="span" isTruncated>{a.referralLink}</Box>
                    <Button
                        size="xs"
                        variant="link"
                        colorScheme="blue"
                        onClick={() => navigator.clipboard.writeText(a.referralLink)}
                    >
                        복사
                    </Button>
                </Flex>
            </Td>
            <Td isNumeric>{a.subAgents}</Td>
            <Td isNumeric>{a.subUsers}</Td>
            <Td>{a.lastLog}</Td>
            <Td>
                <Select
                    size="xs"
                    defaultValue="정상"
                    onChange={(e) => alert(`상태 변경됨: ${e.target.value}`)}
                >
                    <option value="정상">정상</option>
                    <option value="정지">정지</option>
                    <option value="보류">보류</option>
                </Select>
            </Td>
            <Td>
                <Button
                    size="xs"
                    variant="link"
                    colorScheme="gray"
                    onClick={() => {
                        const memo = prompt("관리자 메모 입력", a.memo);
                        if (memo !== null) alert(`메모 저장: ${memo}`);
                    }}
                >
                    메모 입력
                </Button>
            </Td>
            <Td>
                <Button
                    size="xs"
                    variant="link"
                    colorScheme="red"
                    onClick={() => {
                        if (confirm("정말 삭제하시겠습니까?")) alert(`삭제됨: ${a.id}`);
                    }}
                >
                    삭제
                </Button>
            </Td>
        </Tr>
    );
}
function AgenciesModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent maxW="md">
                <ModalHeader>에이전시 생성</ModalHeader>
                <ModalBody>
                    <Stack spacing={4} fontSize="sm">
                        <FormControl>
                            <FormLabel>상위 에이전시 ID</FormLabel>
                            <Input placeholder="예: AG001" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>에이전시 명칭</FormLabel>
                            <Input placeholder="예: 부본사01" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>권한</FormLabel>
                            <Select>
                                <option>총판</option>
                                <option>부본사</option>
                                <option>운영사</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>커미션 요율 (%)</FormLabel>
                            <Input type="number" placeholder="예: 5" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>하위 요율 제한 (%)</FormLabel>
                            <Input type="number" placeholder="예: 3" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>정산 주기</FormLabel>
                            <Select>
                                <option>매주</option>
                                <option>매월</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>추천인 코드</FormLabel>
                            <Input placeholder="예: AG026" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>고유 링크</FormLabel>
                            <Input placeholder="https://site.com/signup?ref=AG026" />
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="blue"
                        size="sm"
                        mr={2}
                        onClick={() => {
                            onClose();
                            alert("에이전시가 등록되었습니다.");
                        }}
                    >
                        저장
                    </Button>
                    <Button size="sm" onClick={onClose}>
                        닫기
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
function NewAgencyList() {
    const cardBg = useColorModeValue("white", "gray.700");
    const headerBg = useColorModeValue("gray.100", "gray.600");
    const pageSize = 10;

    const dummyAgencies = Array.from({ length: 25 }, (_, i): Agency => ({
        id: `AG${(i + 1).toString().padStart(3, "0")}`,
        name: `에이전시${i + 1}`,
        role: ["운영사", "부본사", "총판"][i % 3],
        commissionRate: 5 + (i % 5) + "%",
        subCommissionLimit: 3 + (i % 3) + "%",
        settlementCycle: i % 2 === 0 ? "매주" : "매월",
        totalCommission: `${(1_000_000 + i * 250_000).toLocaleString()}원`,
        pendingCommission: `${(i * 150_000).toLocaleString()}원`,
        referralLink: `https://site.com/signup?ref=AG${(i + 1).toString().padStart(3, "0")}`,
        subAgents: 3 + i,
        subUsers: 15 + i * 2,
        lastLog: "2024-06-20 14:30",
        memo: "-",
    }));
    const roles = ["전체", "운영사", "부본사", "총판"]

    const modal = useDisclosure()

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("전체");
    const [page, setPage] = useState(1);


    const filtered = dummyAgencies.filter(
        (a) =>
            (filter === "전체" || a.role === filter) &&
            (a.name.includes(search) || a.id.includes(search))
    );

    const totalPages = Math.ceil(filtered.length / pageSize);
    const currentData = filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
        <Box w="full" px={2} py={4}>
            {/* Header + create button */}
            <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={2}>
                <Box as="h2" fontSize="xl" fontWeight="bold">
                    에이전시 목록
                </Box>
                <Button colorScheme="green" size="sm" onClick={modal.onOpen}>
                    + 에이전시 생성
                </Button>
            </Flex>

            {/* Role filter tabs + search */}
            <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={2}>
                <Stack direction="row" spacing={2}>
                    {
                        roles.map((role) => (
                            <Button
                                key={role}
                                size="sm"
                                bg={filter === role ? "blue.600" : "gray.200"}
                                color={filter === role ? "white" : "gray.700"}
                                _hover={{ bg: filter === role ? "blue.700" : "gray.300" }}
                                onClick={() => {
                                    setFilter(role);
                                    setPage(1);
                                }}
                            >
                                {role}
                            </Button>
                        ))
                    }
                </Stack>
                <Input
                    size="sm"
                    maxW="sm"
                    placeholder="ID 또는 명칭 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                />
            </Flex>

            {/* Table */}
            <Box bg={cardBg} rounded="xl" shadow="md" overflowX="auto" p={4}>
                <Table size="sm">
                    <Thead bg={headerBg}>
                        <Tr>
                            <Th>ID</Th>
                            <Th>명칭</Th>
                            <Th>권한</Th>
                            <Th>커미션 요율</Th>
                            <Th>하위 요율 제한</Th>
                            <Th>정산 주기</Th>
                            <Th>누적 커미션</Th>
                            <Th>미정산 커미션</Th>
                            <Th>추천 링크</Th>
                            <Th isNumeric>하위 에이전트</Th>
                            <Th isNumeric>하위 유저</Th>
                            <Th>최근 활동</Th>
                            <Th>상태</Th>
                            <Th>메모</Th>
                            <Th>관리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            currentData.map((a) =>
                                <AgenciesTableRow key={a.id} a={a} />
                            )
                        }
                    </Tbody>
                </Table>
            </Box>

            {/* Pagination */}
            <Flex justify="center" gap={2} mt={4} wrap="wrap">
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

            {/* Create Agency Modal */}
            <AgenciesModal {...modal} />
        </Box>
    );
}
export default memo(NewAgencyList)