import {
    Box, Button, Flex, HStack, Stack, VStack, Input, Image, Text, Select, useDisclosure,
    FormControl, FormLabel,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
    Table, Thead, Tbody, Tr, Th, Td,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useTitleStore } from "@/utils/storage";

const COLORS = {
    gray100: "oklch(96.7% 0.0029 264.54)",
    gray200: "oklch(92.76% 0.0058 264.53)",
    blue600: "oklch(54.6% 0.245 262.881)",
    blue700: "oklch(48.0% 0.233 262)",
};

interface DealOption {
    period: string;
    rate: string;
}

interface Deal {
    id: string;
    title: string;
    image: string;
    description: string;
    created: string;
    status: string;
    deadline: string;
    invested: number;
    payout: number;
    investors: number;
    endingSoon: number;
    endingSoonAmount: number;
    options: DealOption[];
}

const dummyDeals: Deal[] = [
    {
        id: "D001",
        title: "A 상품",
        image: "https://via.placeholder.com/80x50",
        description: "이 상품은 다양한 배당 조건을 제공합니다.",
        created: "2024-06-20",
        status: "진행중",
        deadline: "2024-08-31",
        invested: 24000000,
        payout: 3200000,
        investors: 128,
        endingSoon: 6,
        endingSoonAmount: 4300000,
        options: [
            { period: "15일", rate: "5%" },
            { period: "1개월", rate: "6%" },
            { period: "분기별", rate: "7%" },
        ],
    },
    {
        id: "D002",
        title: "B 상품",
        image: "https://via.placeholder.com/80x50",
        description: "다른 구성의 배당 상품입니다.",
        created: "2024-06-10",
        status: "대기중",
        deadline: "2024-09-15",
        invested: 8000000,
        payout: 1600000,
        investors: 42,
        endingSoon: 2,
        endingSoonAmount: 500000,
        options: [
            { period: "15일", rate: "4.5%" },
            { period: "1개월", rate: "5.5%" },
            { period: "분기별", rate: "6.5%" },
        ],
    },
];

const FILTER_TAGS = ["전체", "15일", "1개월", "분기별"] as const;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
interface NewDealModalProps extends ModalProps {
    newDeal: Deal;
    setNewDeal: Dispatch<SetStateAction<Deal>>
}
function BlockdealTableRow({ d }: { d: Deal }) {
    return (
        <Tr key={d.id} _hover={{ bg: COLORS.gray100 }}>
            <Td p={2}>
                <Image src={d.image} alt="preview" w="64px" h="40px" objectFit="cover" rounded="md" />
            </Td>
            <Td p={2}>{d.id}</Td>
            <Td p={2}>{d.title}</Td>
            <Td p={2} maxW="200px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                {d.description}
            </Td>
            <Td p={2}>
                <VStack align="flex-start" spacing={1} fontSize="xs">
                    {d.options.map((opt, i) => (
                        <Text key={i}>{`${opt.period}: ${opt.rate}`}</Text>
                    ))}
                </VStack>
            </Td>
            <Td p={2}>
                <Select size="xs" defaultValue={d.status} onChange={(e) => alert(`상태 변경됨: ${e.target.value}`)}>
                    <option value="진행중">진행중</option>
                    <option value="종료">종료</option>
                    <option value="대기중">대기중</option>
                </Select>
            </Td>
            <Td p={2}>{d.deadline}</Td>
            <Td p={2}>{d.created}</Td>
            <Td p={2}>
                <HStack spacing={2}>
                    <Button
                        variant="link"
                        size="xs"
                        color={COLORS.blue600}
                        onClick={() => alert(`수정 모달 열기 - ${d.id}`)}
                    >
                        수정
                    </Button>
                    <Button
                        variant="link"
                        size="xs"
                        color="red.500"
                        onClick={() => window.confirm("삭제하시겠습니까?") && alert(`삭제됨: ${d.id}`)}
                    >
                        삭제
                    </Button>
                </HStack>
            </Td>
        </Tr>
    );
}
function StatsModal({ isOpen, onClose }: ModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>📊 간략 요약 정보</ModalHeader>
                <ModalBody>
                    <Stack spacing={3} fontSize="sm">
                        {
                            dummyDeals.map((d) => (
                                <Box key={d.id} borderBottom="1px" borderColor={COLORS.gray200} pb={2}>
                                    <Text fontWeight="bold">{d.title}</Text>
                                    <Text>
                                        총 투자금액: ₩{d.invested.toLocaleString()} / 배당금: ₩{d.payout.toLocaleString()}
                                    </Text>
                                    <Text>
                                        투자자 수: {d.investors}명 / 곧 마감: {d.endingSoon}명 (₩
                                        {d.endingSoonAmount.toLocaleString()})
                                    </Text>
                                </Box>
                            ))
                        }
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button bg={COLORS.gray200} _hover={{ bg: COLORS.gray100 }} onClick={onClose}>
                        닫기
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
function NewDealModal({ isOpen, onClose, newDeal, setNewDeal }: NewDealModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>블록딜 상품 등록</ModalHeader>
                <ModalBody>
                    <Stack spacing={2} fontSize="sm">
                        <FormControl>
                            <Input
                                placeholder="제목"
                                value={newDeal.title}
                                onChange={(e) => setNewDeal({ ...newDeal, title: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                placeholder="이미지 URL"
                                value={newDeal.image}
                                onChange={(e) => setNewDeal({ ...newDeal, image: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                placeholder="상세 설명"
                                value={newDeal.description}
                                onChange={(e) => setNewDeal({ ...newDeal, description: e.target.value })}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                type="date"
                                value={newDeal.deadline}
                                onChange={(e) => setNewDeal({ ...newDeal, deadline: e.target.value })}
                            />
                        </FormControl>
                        {
                            newDeal.options.map((opt, i) => (
                                <HStack key={i} spacing={2}>
                                    <Input
                                        flex={1}
                                        placeholder="배당 주기"
                                        value={opt.period}
                                        onChange={(e) => {
                                            const updated = [...newDeal.options];
                                            updated[i].period = e.target.value;
                                            setNewDeal({ ...newDeal, options: updated });
                                        }}
                                    />
                                    <Input
                                        flex={1}
                                        placeholder="수익률"
                                        value={opt.rate}
                                        onChange={(e) => {
                                            const updated = [...newDeal.options];
                                            updated[i].rate = e.target.value;
                                            setNewDeal({ ...newDeal, options: updated });
                                        }}
                                    />
                                </HStack>
                            ))
                        }
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <HStack spacing={2}>
                        <Button variant="ghost" onClick={onClose}>
                            닫기
                        </Button>
                        <Button bg={COLORS.blue600} color="white" _hover={{ bg: COLORS.blue700 }} onClick={() => alert("등록완료")}>등록</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default function Blockdeal() {
    const statsModal = useDisclosure();
    const newDealModal = useDisclosure();
    const { setTItle } = useTitleStore()

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<typeof FILTER_TAGS[number]>("전체");
    const [newDeal, setNewDeal] = useState<Deal>(
        {
            id: "NEW",
            title: "",
            image: "",
            description: "",
            created: new Date().toISOString().slice(0, 10),
            status: "대기중",
            deadline: "",
            invested: 0,
            payout: 0,
            investors: 0,
            endingSoon: 0,
            endingSoonAmount: 0,
            options: [
                { period: "15일", rate: "" },
                { period: "1개월", rate: "" },
                { period: "분기별", rate: "" },
            ],
        }
    );

    const filtered = dummyDeals.filter(
        (d) =>
            (filter === "전체" || d.options.some((opt) => opt.period === filter)) &&
            (d.title.includes(search) || d.id.includes(search))
    );

    useEffect(() => {
        setTItle("블록딜 설정")
    }, []);
    return (
        <Stack w="full" spacing={6} p={4}>
            {/* Header */}
            <Flex justify="space-between" align="center">
                <Text fontSize="xl" fontWeight="bold">
                    블록딜 상품 목록
                </Text>
                <HStack spacing={2}>
                    <Button
                        size="sm"
                        variant="outline"
                        bg={COLORS.gray100}
                        _hover={{ bg: COLORS.gray200 }}
                        onClick={statsModal.onOpen}
                    >
                        📊 간략 보기
                    </Button>
                    <Button
                        size="sm"
                        bg={COLORS.blue600}
                        _hover={{ bg: COLORS.blue700 }}
                        color="white"
                        onClick={newDealModal.onOpen}
                    >
                        + 상품 추가
                    </Button>
                </HStack>
            </Flex>

            {/* Filter + Search */}
            <Flex justify="space-between" flexWrap="wrap" gap={4}>
                <HStack spacing={2}>
                    {
                        FILTER_TAGS.map((tag) => (
                            <Button
                                key={tag}
                                size="sm"
                                px={3}
                                py={1}
                                bg={filter === tag ? COLORS.blue600 : COLORS.gray200}
                                color={filter === tag ? "white" : "black"}
                                _hover={{ bg: filter === tag ? COLORS.blue600 : COLORS.gray100 }}
                                onClick={() => setFilter(tag)}
                            >
                                {tag}
                            </Button>
                        ))
                    }
                </HStack>
                <Input
                    maxW="200px"
                    size="sm"
                    placeholder="ID 또는 제목 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Flex>

            {/* Deals Table */}
            <Box overflowX="auto" bg="white" rounded="xl" boxShadow="md">
                <Table fontSize="sm" w="full">
                    <Thead bg={COLORS.gray100}>
                        <Tr>
                            <Th p={2}>이미지</Th>
                            <Th p={2}>ID</Th>
                            <Th p={2}>제목</Th>
                            <Th p={2}>설명</Th>
                            <Th p={2}>배당 조건</Th>
                            <Th p={2}>상태</Th>
                            <Th p={2}>마감일</Th>
                            <Th p={2}>생성일</Th>
                            <Th p={2}>관리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filtered.map((d) =>
                                <BlockdealTableRow key={d.id} d={d} />
                            )
                        }
                    </Tbody>
                </Table>
            </Box>

            {/* Stats modal */}
            <StatsModal {...statsModal} />

            {/* New deal modal */}
            <NewDealModal {...newDealModal} newDeal={newDeal} setNewDeal={setNewDeal} />
        </Stack>
    );
};