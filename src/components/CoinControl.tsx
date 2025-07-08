import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
    useToast,
    Box, Button, Flex, HStack, Input, Select, Stack, useDisclosure, SimpleGrid, Heading, Spinner,
    Table, Tbody, Td, Text, Th, Thead, Tr,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
    FormControl, FormLabel,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import { CoinBalance, Coinlog } from "@/utils/interface";
import axios from "axios";


interface Payload {
    phoneNumber: string;
    name: string;
    coin: string;
    amount: number;
}
interface CoinFormProps {
    isLoading: boolean;
    payload: Payload;
    setPayload: Dispatch<SetStateAction<Payload>>;
    handleSubmit: () => Promise<any>;
}
interface LogTableProps {
    logLoading: boolean;
    logs: Coinlog[];
    currentLogs: Coinlog[];
    totalPages: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>
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
function LogTable({ logLoading, logs, totalPages, currentLogs, currentPage, setCurrentPage }: LogTableProps) {
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
                                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                                        <Tr>
                                            <Th>회원 ID</Th>
                                            <Th>이름</Th>
                                            <Th>코인</Th>
                                            {/* <Th>처리 유형</Th> */}
                                            <Th>수량</Th>
                                            <Th>처리일</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {
                                            currentLogs.map(log => (
                                                <Tr key={log.id}>
                                                    <Td>{log.id}</Td>
                                                    <Td>{log.name}</Td>
                                                    <Td>{log.coin}</Td>
                                                    {/* <Td color={log.type === "지급" ? "green.600" : "red.500"}>{log.type}</Td> */}
                                                    <Td>{log.amount.toLocaleString()}</Td>
                                                    <Td>{new Date(log.createdAt).toLocaleString()}</Td>
                                                </Tr>
                                            ))
                                        }
                                    </Tbody>
                                </Table>
                            )
                }
            </Box>
            <HStack mt={4} justify="center">
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
                {/* <FormControl>
                        <FormLabel>처리 유형</FormLabel>
                        <Select>
                            <option value="give">지급</option>
                            <option value="revoke">회수</option>
                        </Select>
                    </FormControl> */}
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
    const logsPerPage = 10;

    const toast = useToast()
    const modal = useDisclosure()
    const { setTItle } = useTitleStore();

    const sampleLogs = [
        { id: "U00123", name: "김철수", coin: "BTC", type: "지급", amount: 1000, date: "2025-06-21" },
        { id: "U00124", name: "이영희", coin: "ETH", type: "회수", amount: 500, date: "2025-06-20" },
        { id: "U00125", name: "홍길동", coin: "BTC", type: "지급", amount: 700, date: "2025-06-20" },
        { id: "U00126", name: "박영수", coin: "ETH", type: "회수", amount: 400, date: "2025-06-19" },
        { id: "U00127", name: "최지우", coin: "BTC", type: "지급", amount: 800, date: "2025-06-18" },
        { id: "U00128", name: "장예린", coin: "ETH", type: "회수", amount: 200, date: "2025-06-18" },
        { id: "U00129", name: "신동엽", coin: "BTC", type: "지급", amount: 600, date: "2025-06-17" },
        { id: "U00130", name: "윤하눨", coin: "ETH", type: "회수", amount: 300, date: "2025-06-16" },
        { id: "U00131", name: "정태우", coin: "BTC", type: "지급", amount: 900, date: "2025-06-15" },
        { id: "U00132", name: "나은지", coin: "ETH", type: "회수", amount: 100, date: "2025-06-15" },
        { id: "U00133", name: "고은솔", coin: "BTC", type: "지급", amount: 750, date: "2025-06-14" }
    ]
    const [logs, setLogs] = useState<Coinlog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [logLoading, setLogLoading] = useState(false);

    const [payload, setPayload] = useState<Payload>({
        phoneNumber: "",
        name: "",
        coin: "BTC",
        amount: 0
    });

    useEffect(() => {
        const getHistory = async () => {
            const url = "/api/getCoinHistory"
            try {
                const { data } = await axios.get(url)
                console.log("result history: ", data.history)
            } catch (e) {
                console.log("Error fetching history: ", e)
            }
        }
        getHistory()
    }, []);
    useEffect(() => {
        fetchLogs()
    }, []);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
                );
                const data = await res.json();
                // setPrices({
                //     BTC: data.bitcoin.usd,
                //     ETH: data.ethereum.usd,
                // });
            } catch (error) {
                console.error("가격 정보를 불러올 수 없습니다.", error);
            }
        };
        setTItle("코인 지급/회수")
        fetchPrices();
    }, []);

    const indexOfLast = currentPage * logsPerPage;
    const indexOfFirst = indexOfLast - logsPerPage;
    const currentLogs = logs.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(logs.length / logsPerPage);

    const fetchLogs = async () => {
        const url = "/api/getCoinLogs"
        setLogLoading(true)
        try {
            const { data } = await axios.get<{ history: Coinlog[] }>(url)
            setLogs(data.history)
        } catch (e: any) {
            const message = e?.response?.data?.message || "Somthing went wrong"
            console.error("Error fetching coin logs: ", message)
        } finally {
            setLogLoading(false)
        }
    }
    const handleSubmit = async () => {
        if (payload.phoneNumber.trim() === "" || payload.name.trim() === "" || payload.amount <= 0) {
            return toast({
                title: "Error",
                description: "Invalid fields.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
        }

        setIsLoading(true)
        const url = "/api/giveCoin"
        try {
            await axios.post(url, payload)
            return toast({
                title: "Success",
                description: "Coin updated",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            return toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
        }
        finally {
            fetchLogs()
            setPayload({
                phoneNumber: "",
                amount: 0,
                name: "",
                coin: "BTC"
            })
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
                logs={logs}
                currentLogs={currentLogs}
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <CoinControlModal {...modal} />
        </Stack>
    );
};