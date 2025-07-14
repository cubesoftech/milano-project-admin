import React, { memo, useState, useEffect } from "react";
import {
    Box, Text, Stack, SimpleGrid, Divider, FormControl, FormLabel, Input, Button, Textarea, Heading, Spinner,
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,
    Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { useUserStore } from "@/utils/storage";
import UseToastHooks from "@/hooks/UseToastHooks";

import { api } from "@/utils/api";
import { CoinLog } from "@/utils/interface";

const UpdatePasswordModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const { user } = useUserStore()
    if (!user) return null

    const toast = UseToastHooks()
    const [newPassword, setNewPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSetNewPassword = async () => {
        if (newPassword.trim() === "") return;
        setIsLoading(true)
        try {
            const { message } = await api.updatePassword({ phoneNumber: user.phoneNumber, password: newPassword })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setIsLoading(false)
            setNewPassword("")
            onClose()
        }
    }
    const handleOnClose = () => {
        setNewPassword("")
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={handleOnClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>비밀번호 변경</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input onChange={(e) => setNewPassword(e.target.value)} />
                </ModalBody>

                <ModalFooter gap={3}>
                    <Button colorScheme="green" onClick={handleSetNewPassword}>
                        적용
                    </Button>
                    <Button variant={"ghost"} colorScheme="red" onClick={handleOnClose}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

function NewUserDetails() {
    const { user } = useUserStore()
    if (!user) return null

    const toast = UseToastHooks()
    const modal = useDisclosure()
    const size = 25;

    const [hashrate, setHashrate] = useState(0);
    const [hashrate2, setHashrate2] = useState(0);
    const [note, setNote] = useState("");
    const [coinLog, setCoinLog] = useState<CoinLog[]>([]);
    const [total, setTotal] = useState(1);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isLoading3, setIsLoading3] = useState(false);
    const [isLoading4, setIsLoading4] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const { data, message, pagination } = await api.getUserCoinLog({ search: user.phoneNumber, page: page.toString() })
                const { total } = pagination
                setCoinLog(data)
                setTotal(total)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUsers()
    }, []);
    // get user's next page
    useEffect(() => {
        const fetchLogs = async () => {
            setIsLoading(true)
            try {
                const { data } = await api.getUserCoinLog({ search: user.phoneNumber, page: page.toString() })
                setCoinLog(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchLogs()
    }, [page]);

    const handleUpdateHashrate = async () => {
        if (hashrate <= 0) return;
        setIsLoading(true)
        try {
            const { message } = await api.updateHashrate({ phoneNumber: user.phoneNumber, hashrate })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setIsLoading(false)
        }
    }
    const handleUpdateHashrate2 = async () => {
        if (hashrate2 <= 0) return;
        setIsLoading2(true)
        try {
            const { message } = await api.updateHashrate2({ phoneNumber: user.phoneNumber, hashRate2: hashrate2 })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setIsLoading2(false)
        }
    }
    const handleUpdateNote = async () => {
        if (note.trim() === "") return;
        setIsLoading3(true)
        try {
            const { message } = await api.updateNote({ phoneNumber: user.phoneNumber, note })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setNote("")
            setIsLoading3(false)
        }
    }

    return (
        <Stack w="full" p={6} spacing={6} bg="oklch(96.7% 0.0029 264.54)">
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"}>
                <Text fontSize="2xl" fontWeight="bold">🧍 회원 상세정보</Text>
                <Button colorScheme="blue" onClick={modal.onOpen}>비밀번호 변경</Button>
                <UpdatePasswordModal {...modal} />
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>기본 정보</Text>
                    <Text><strong>회원 ID:</strong> {user.id}</Text>
                    <Text><strong>이름:</strong> {user.name}</Text>
                    <Text><strong>이메일:</strong> 준비중입니다</Text>
                    <Text><strong>전화번호:</strong> {user.phoneNumber}</Text>
                    <Text><strong>상태:</strong> 준비중입니다</Text>
                    <Text><strong>가입일:</strong> {new Date(user.createdAt).toDateString()}</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>지갑 정보</Text>
                    <Text><strong>출금 가능 잔액:</strong> {user.cumulativeBalance}</Text>
                    <Divider my={2} />
                    <Text><strong>ETH 주소:</strong> {user.ethAddress}</Text>
                    <Text><strong>erc20 잔액:</strong> {user.ethbalance.toLocaleString()}</Text>
                    <Divider my={2} />
                    <Text><strong>TRON 주소:</strong> {user.tronAddress}</Text>
                    <Text><strong>trc20 잔액:</strong> {user.tronBalance.toLocaleString()}</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>수익률 설정</Text>
                    <Stack align={"flex-end"} gap={1}>
                        <Stack w={"100%"} direction={"row"} justify={"flex-start"} align={"center"}>
                            <Text as={"strong"} whiteSpace={"nowrap"}>자유형 설정: </Text> {/* tunay */}
                            <Input type="number" placeholder={user.hashRate + "%"} onChange={(e) => setHashrate(Number(e.target.value))} />
                        </Stack>
                        <Button w={"fit-content"} colorScheme="green" onClick={handleUpdateHashrate} isLoading={isLoading} isDisabled={!(user.tronAddress || user.ethAddress)}>업데이트</Button>
                    </Stack>
                    <Stack align={"flex-end"} gap={1} mt={2}>
                        <Stack w={"100%"} direction={"row"} justify={"flex-start"} align={"center"}>
                            <Text as={"strong"} whiteSpace={"nowrap"}>고정형 설정: </Text> {/* fake */}
                            <Input type="number" placeholder={user.hashRate2 + "%"} onChange={(e) => setHashrate2(Number(e.target.value))} />
                        </Stack>
                        <Button w={"fit-content"} colorScheme="green" onClick={handleUpdateHashrate2} isLoading={isLoading2} >업데이트</Button>
                    </Stack>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>투자 정보</Text>
                    <Text><strong>총 투자금:</strong> ₩{user.balance.toLocaleString()}</Text>
                    <Text><strong>총 배당금:</strong> ₩{user.balance.toLocaleString()}</Text>
                    <Divider my={2} />
                    <Text><strong>보유자산:</strong> ₩{user.balance.toLocaleString()} USDT</Text>
                    <Text><strong>누적 수익:</strong> ₩{user.earnings.toLocaleString()} USDT</Text>
                    <Text><strong>금일 예상 수익:</strong> ₩{((1 / 24) * (user.hashRate / 100) * (user.balance * user.earnings)).toLocaleString()} USDT</Text>
                    <Divider my={2} />
                    <Text><strong>보유자산:</strong> ₩{user.usdt_balance.balance.toLocaleString()} USDT</Text>
                    <Text><strong>누적 수익:</strong> ₩{user.usdt_balance.earnings.toLocaleString() || 0} USDT</Text>
                    <Text><strong>금일 예상 수익:</strong> ₩{((1 / 24) * (user.hashRate2 / 100) * (user.usdt_balance?.balance || 0)).toLocaleString()} USDT</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm" h={"fit-content"}>
                    <Text fontWeight="semibold" mb={2}>참고</Text>
                    <Textarea placeholder={user.note} onChange={(e) => setNote(e.target.value)}></Textarea>
                    <Stack w={"100%"} align={"flex-end"} py={2}>
                        <Button colorScheme="green" ml={"auto"} isLoading={isLoading3} onClick={handleUpdateNote}>업데이트</Button>
                    </Stack>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>코인 지급/회수</Text>
                    {
                        isLoading4 ? (
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
                            coinLog.length <= 0
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
                                                <Th py={3}>코인</Th>
                                                {/* <Th>처리 유형</Th> */}
                                                <Th py={3}>수량</Th>
                                                <Th py={3}>처리일</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                coinLog.map(log => (
                                                    <Tr key={log.id}>
                                                        <Td>{log.id}</Td>
                                                        <Td>{log.coin}</Td>
                                                        {/* <Td color={log.type === "지급" ? "green.600" : "red.500"}>{log.type}</Td> */}
                                                        <Td>{log.balance.toLocaleString()}</Td>
                                                        <Td>{new Date(log.createdAt).toLocaleString()}</Td>
                                                    </Tr>
                                                ))
                                            }
                                        </Tbody>
                                    </Table>
                                )
                    }
                    <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                        <Button colorScheme="blue" isDisabled={page === 1} isLoading={isLoading4} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                        <Text>{page} / {Math.ceil(total / size)}</Text>
                        <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading4} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
                    </Stack>
                </Box>
            </SimpleGrid>
        </Stack>
    );
}
export default memo(NewUserDetails)