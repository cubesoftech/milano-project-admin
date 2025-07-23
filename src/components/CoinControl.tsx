import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
    useToast,
    Box, Button, Flex, HStack, Input, Select, Stack, useDisclosure, SimpleGrid, Heading, Spinner,
    Table, Tbody, Td, Text, Th, Thead, Tr,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
    FormControl, FormLabel,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import { CoinLog } from "@/utils/interface";
import { api } from "@/utils/api";
import UseToastHooks from "@/hooks/UseToastHooks";


interface Payload {
    phoneNumber: string;
    name: string;
    coin: string;
    amount: number;
    note: string;
}
interface CoinFormProps {
    isLoading: boolean;
    payload: Payload;
    setPayload: Dispatch<SetStateAction<Payload>>;
    handleSubmit: () => Promise<any>;
}
interface LogTableProps {
    logLoading: boolean;
    logs: CoinLog[];
    total: number;
    page: number;
    size: number;
    setPage: Dispatch<SetStateAction<number>>
}

function CoinControlModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>코인 추가</ModalHeader>
                <ModalBody>
                    <Stack spacing={3}>
                        <Input placeholder="심볼 (예: BTC)" />
                        <Input placeholder="이름 (예: Bitcoin)" />
                        <Input placeholder="로고 (이모지 또는 이미지 주소)" />
                    </Stack>
                </ModalBody>
                <ModalFooter justifyContent="space-between">
                    <Button onClick={onClose} variant="ghost">
                        취소
                    </Button>
                    <Button bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>
                        등록
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
function LogTable({ logLoading, logs, total, page, setPage, size }: LogTableProps) {
    return (
        <Stack w={"100%"} h={"full"} >
            <Text fontSize="lg" fontWeight="semibold" mb={2}>최근 코인 지급/회수 내역</Text>
            <Box overflowX="auto" bg="white" rounded="lg" shadow="md">
                {
                    logLoading ? (
                        <Stack w={"100%"} h={"full"} justify={"center"} align={"center"}>
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Stack>
                    ) :
                        logs.length <= 0
                            ? (
                                <Stack w={"100%"} h={"full"} rounded={"xl"} justify={"center"} align={"center"}>
                                    <Heading size={"lg"}>데이터가 없습니다</Heading>
                                </Stack>
                            )
                            : (
                                <Table size="sm">
                                    <Thead >
                                        <Tr bg="oklch(92.76% 0.0058 264.53)">
                                            <Th py={3}>회원 ID</Th>
                                            <Th py={3}>이름</Th>
                                            <Th py={3}>코인</Th>
                                            <Th py={3}>수량</Th>
                                            <Th py={3}>메모</Th>
                                            <Th py={3}>처리일</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {
                                            logs.map(log => (
                                                <Tr key={log.id}>
                                                    <Td>{log.id}</Td>
                                                    <Td>{log.miners.name}</Td>
                                                    <Td>{log.coin}</Td>
                                                    {/* <Td color={log.type === "지급" ? "green.600" : "red.500"}>{log.type}</Td> */}
                                                    <Td>{log.balance.toLocaleString()}</Td>
                                                    <Td>{log.note}</Td>
                                                    <Td>{new Date(log.createdAt).toLocaleString('en-US', { timeZone: 'UTC' })}</Td>
                                                </Tr>
                                            ))
                                        }
                                    </Tbody>
                                </Table>
                            )
                }
            </Box>
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                <Button colorScheme="blue" isDisabled={page === 1} isLoading={logLoading} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                <Text>{page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={logLoading} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
            </Stack>
        </Stack>
    );
}
function CoinForm({ isLoading, payload, setPayload, handleSubmit }: CoinFormProps) {
    const coins = [
        { symbol: "BTC", name: "Bitcoin", logo: "₿" },
        { symbol: "ETH", name: "Ethereum", logo: "Ξ" },
        { symbol: "XRP", name: "Ripple", logo: "✕" },
        { symbol: "TRX", name: "Tron", logo: "TRX" },
        { symbol: "ADA", name: "Cardano", logo: "₳" },
        { symbol: "SHIB", name: "Shiba Inu", logo: "🐶" },
        { symbol: "USDT", name: "Theter", logo: "₮" },
    ];

    return (
        <Box bg="white" p={6} rounded="lg" shadow="md">
            <SimpleGrid w={"100%"} columns={{ base: 1, md: 2 }} spacingX={4} spacingY={2}>
                <FormControl>
                    <FormLabel>전화번호</FormLabel>
                    <Input placeholder="예: 000-0000-0000" value={payload.phoneNumber} onChange={(e) => setPayload({ ...payload, phoneNumber: e.target.value })} />
                </FormControl>
                <FormControl>
                    <FormLabel>회원 이름</FormLabel>
                    <Input placeholder="예: 김철수" value={payload.name} onChange={(e) => setPayload({ ...payload, name: e.target.value })} />
                </FormControl>
                <FormControl flex={1} minW="220px">
                    <FormLabel>코인 선택</FormLabel>
                    <Select value={payload.coin} onChange={(e) => {
                        setPayload({ ...payload, coin: e.target.value })
                    }}>
                        {
                            coins.map((coin) => (
                                <option key={coin.symbol} value={coin.symbol}>
                                    {coin.logo} {coin.name} ({coin.symbol})
                                </option>
                            ))
                        }
                    </Select>
                    {/* <Button variant="link" size="sm" mt={1} color="blue.600" onClick={modal.onOpen}>
                            + 코인 추가
                        </Button> */}
                </FormControl>
                <FormControl>
                    <FormLabel>코인 수량</FormLabel>
                    <Input type="number" placeholder="예: 0" onChange={(e) => setPayload({ ...payload, amount: Number(e.target.value) })} />
                </FormControl>
                <FormControl>
                    <FormLabel>메모</FormLabel>
                    <Input onChange={(e) => setPayload({ ...payload, note: e.target.value })} />
                </FormControl>
            </SimpleGrid>
            <Flex mt={6} justify="flex-start">
                <Button bg="green.600" color="white" _hover={{ bg: "green.700" }} isLoading={isLoading} onClick={handleSubmit}>
                    처리 실행
                </Button>
            </Flex>
        </Box>
    );
}

export default function CoinControl() {
    const { success, error } = UseToastHooks()
    const modal = useDisclosure()
    const { setTItle } = useTitleStore();

    // new states 
    const size = 25
    const [refetch, setRefetch] = useState(false);
    const [data, setData] = useState<CoinLog[]>([]);
    const [total, setTotal] = useState(1);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [logLoading, setLogLoading] = useState(false);

    const [payload, setPayload] = useState<Payload>({
        phoneNumber: "",
        name: "",
        coin: "USDT",
        note: "",
        amount: 0
    });

    useEffect(() => {
        if (refetch) {
            const fetchUser = async () => {
                setLogLoading(true)
                try {
                    const { data, pagination, message } = await api.coinLog({})
                    const { total } = pagination
                    setData(data)
                    setTotal(total)
                } catch (e: any) {
                    const message = e?.response?.data?.message || "Something went wrong"
                    console.error("Error fetching user lists: ", message)
                } finally {
                    setLogLoading(false)
                    setRefetch(false)
                }
            }
            fetchUser();
        }
    }, [refetch]);
    // get users on reload
    useEffect(() => {
        const fetchUsers = async () => {
            setLogLoading(true)
            try {
                const { data, pagination, message } = await api.coinLog({})
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setLogLoading(false)
            }
        }
        fetchUsers()
        setTItle("코인 지급/회수")
    }, []);
    // get user's next page
    useEffect(() => {
        const fetchUsers = async () => {
            setLogLoading(true)
            try {
                const { data, pagination, message } = await api.coinLog({ page: page.toString() })
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setLogLoading(false)
            }
        }
        fetchUsers()
    }, [page]);

    const handleSubmit = async () => {
        if (payload.phoneNumber.trim() === "" || payload.name.trim() === "" || payload.amount <= 0) {
            error("Invalid fields")
            return;
        }
        setIsLoading(true)
        try {
            const { message } = await api.addBalance({ ...payload })
            success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            error(message)
        } finally {
            setPayload({
                amount: 0,
                coin: "uSDT",
                name: "",
                note: "",
                phoneNumber: ""
            })
            setRefetch(true)
            setIsLoading(false)
        }
    }

    return (
        <Stack w="full" h={"full"} p={6} spacing={8}>
            <Text fontSize="2xl" fontWeight="bold">🪙 코인 지급/회수</Text>

            <CoinForm
                isLoading={isLoading}
                payload={payload}
                setPayload={setPayload}
                handleSubmit={handleSubmit}
            />

            <LogTable
                logLoading={logLoading}
                logs={data}
                page={page}
                size={size}
                total={total}
                setPage={setPage}
            />

            <CoinControlModal {...modal} />
        </Stack>
    );
};