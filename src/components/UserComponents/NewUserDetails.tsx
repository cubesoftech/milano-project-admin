import React, { memo, useState, useEffect, Dispatch, SetStateAction } from "react";
import {
    Box, Text, Stack, SimpleGrid, Divider, FormControl, FormLabel, Input, Button, Textarea, Heading, Spinner,
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,
    Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ModalOverlay, Menu,
    MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    useDisclosure
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useUserStore } from "@/utils/storage";
import UseToastHooks from "@/hooks/UseToastHooks";

import { api } from "@/utils/api";
import { CoinLog, RecoverCoinLog, Miners } from "@/utils/interface";
import { useRouter } from "next/router";

interface CoinLogsTableProps {
    isLoading: boolean;
    coinLog: CoinLog[];
    page: number;
    total: number;
    size: number;
    setPage: Dispatch<SetStateAction<number>>
}
interface RecoverCoinLogsTableProps {
    isLoading: boolean;
    recoverCoinLog: RecoverCoinLog[];
    page: number;
    total: number;
    size: number;
    setPage: Dispatch<SetStateAction<number>>
}
interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const UpdatePasswordModal = ({ isOpen, onClose }: BaseModalProps) => {
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
const RecoverCoinModal = ({ isOpen, onClose }: BaseModalProps) => {
    const { user } = useUserStore()
    if (!user) return null

    const toast = UseToastHooks()
    const [payload, setPayload] = useState({
        amount: 0,
        note: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSetNewPassword = async () => {
        if (payload.amount <= 0) {
            toast.warning("Invalid amount")
            return;
        };
        setIsLoading(true)
        try {
            const { message } = await api.recoverCoin({
                phoneNumber: user.phoneNumber,
                ...payload
            })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setPayload({
                amount: 0,
                note: ""
            })
            setIsLoading(false)
            onClose()
        }
    }
    const handleOnClose = () => {
        setPayload({
            amount: 0,
            note: ""
        })
        onClose()
    }

    return (
        <Modal size={"sm"} isOpen={isOpen} onClose={handleOnClose} motionPreset="slideInTop">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>코인 회수</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack w={"100%"}>
                        <FormControl>
                            <FormLabel mb={1}>금액</FormLabel>
                            <Input type="number" value={payload.amount} onChange={(e) => setPayload({ ...payload, amount: Number(e.target.value) })} />
                        </FormControl>
                        <FormControl>
                            <FormLabel mb={1}>메모</FormLabel>
                            <Input value={payload.note} onChange={(e) => setPayload({ ...payload, note: e.target.value })} />
                        </FormControl>
                    </Stack>
                </ModalBody>

                <ModalFooter gap={3}>
                    <Button size={"sm"} colorScheme="green" onClick={handleSetNewPassword} isLoading={isLoading}>
                        적용
                    </Button>
                    <Button size={"sm"} variant={"ghost"} colorScheme="red" onClick={handleOnClose} isLoading={isLoading}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
const ConfirmDeleteUserModal = ({ isOpen, onClose }: BaseModalProps) => {
    const { user, setUser } = useUserStore()
    if (!user) return null

    const toast = UseToastHooks()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false);
    const handleAccept = async () => {
        setIsLoading(true)
        try {
            await api.deleteMiner({ phoneNumber: user.phoneNumber })
            toast.success(`Miner ${user.name} deleted`)
            setUser(null)
            router.push("/users")
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong."
            toast.error(message)
        } finally {
            setIsLoading(false)
            onClose()
        }
    }
    return (
        <Modal size={"md"} isOpen={isOpen} onClose={onClose} motionPreset="slideInTop">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>채굴기 {user.name}를 정말 삭제하시겠습니까?</ModalHeader>
                <ModalFooter gap={3}>
                    <Button colorScheme="green" onClick={handleAccept} isLoading={isLoading}>
                        적용
                    </Button>
                    <Button variant={"ghost"} colorScheme="red" onClick={onClose} isLoading={isLoading}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
const MessageUserModal = ({ isOpen, onClose }: BaseModalProps) => {
    const { user } = useUserStore()
    if (!user) return null

    const { warning, success, error } = UseToastHooks()
    const [payload, setPayload] = useState({
        title: "",
        content: ""
    });

    const handleSendMessage = async () => {
        if (payload.title.trim() === "" || payload.content.trim() === "") {
            warning("제목과 내용을 입력해주세요")
            return;
        }
        try {
            const { message } = await api.createInquiry({ phoneNumber: user.phoneNumber, ...payload })
            success(message)
            handleOnClose()
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            error(message)
        } finally {
            handleOnClose()
        }
    }

    const handleOnClose = () => {
        setPayload({
            title: "",
            content: ""
        })
        onClose()
    }
    return (
        <Modal isOpen={isOpen} onClose={handleOnClose} scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{user.name}</ModalHeader>
                <ModalBody>
                    <Stack w={"100%"}>
                        <FormControl>
                            <FormLabel>제목</FormLabel>
                            <Input value={payload.title} onChange={(e) => setPayload({ ...payload, title: e.target.value })} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>내용</FormLabel>
                            <Textarea value={payload.content} onChange={(e) => setPayload({ ...payload, content: e.target.value })} />
                        </FormControl>
                    </Stack>
                </ModalBody>

                <ModalFooter gap={3}>
                    <Button colorScheme="green" onClick={handleSendMessage}>
                        보내기
                    </Button>
                    <Button variant={"ghost"} colorScheme="red" onClick={handleOnClose}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

const CoinLogsTable = ({ coinLog, isLoading, page, size, total, setPage }: CoinLogsTableProps) => {
    if (isLoading) {
        return (
            <Stack w={"100%"} h={"full"} justify={"center"} align={"center"}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Stack>
        );
    }
    if (coinLog.length <= 0) {
        return (
            <Stack w={"100%"} rounded={"xl"} justify={"center"} align={"center"}>
                <Heading size={"lg"}>데이터가 없습니다</Heading>
            </Stack>
        );
    }

    return (
        <>
            <Table size="sm">
                <Thead >
                    <Tr bg="oklch(92.76% 0.0058 264.53)">
                        <Th py={3}>회원 ID</Th>
                        <Th py={3}>코인</Th>
                        {/* <Th>처리 유형</Th> */}
                        <Th py={3}>수량</Th>
                        <Th py={3}>메모</Th>
                        <Th py={3}>처리일</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        coinLog.map(log => {
                            const createdUTC = new Date(log.createdAt)
                            const seoulOffset = 9 * 60 * 60 * 1000; // +9 hours in ms
                            const seoulTime = new Date(createdUTC.getTime() + seoulOffset);

                            if (seoulTime.getHours() < 5) {
                                seoulTime.setDate(seoulTime.getDate() - 1);
                            }

                            const displayDate = seoulTime.toLocaleDateString('ko-KR', {
                                timeZone: 'UTC',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            });

                            const displayTime = seoulTime.toLocaleTimeString('ko-KR', {
                                timeZone: 'UTC',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            });

                            const display = seoulTime.toLocaleString('ko-KR', {
                                timeZone: 'UTC',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                                // hour: 'numeric',
                                // minute: 'numeric',
                                // hour12: true,
                            });

                            const split = log.createdAt.split('T')

                            return (
                                <Tr key={log.id}>
                                    <Td>{log.id}</Td>
                                    <Td>{log.coin}</Td>
                                    <Td>{log.balance.toLocaleString()}</Td>
                                    <Td>{log.note}</Td>
                                    <Td>{createdUTC.toDateString()} {createdUTC.toLocaleTimeString('ko-KR', { hour12: true })}</Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                <Button colorScheme="blue" isDisabled={page === 1} isLoading={isLoading} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                <Text>{page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
            </Stack>
        </>
    );
}
const RecoverCoinLogsTable = ({ recoverCoinLog, isLoading, page, size, total, setPage }: RecoverCoinLogsTableProps) => {
    if (isLoading) {
        return (
            <Stack w={"100%"} h={"full"} justify={"center"} align={"center"}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Stack>
        );
    }
    if (recoverCoinLog.length <= 0) {
        return (
            <Stack w={"100%"} rounded={"xl"} justify={"center"} align={"center"}>
                <Heading size={"lg"}>데이터가 없습니다</Heading>
            </Stack>
        );
    }

    return (
        <>
            <Table size="sm">
                <Thead >
                    <Tr bg="oklch(92.76% 0.0058 264.53)">
                        <Th py={3}>회원 ID</Th>
                        {/* <Th>처리 유형</Th> */}
                        <Th py={3}>수량</Th>
                        <Th py={3}>메모</Th>
                        <Th py={3}>처리일</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        recoverCoinLog.map(log => {
                            const createdUTC = new Date(log.createdAt)
                            const seoulOffset = 9 * 60 * 60 * 1000; // +9 hours in ms
                            const seoulTime = new Date(createdUTC.getTime() + seoulOffset);

                            if (seoulTime.getHours() < 5) {
                                seoulTime.setDate(seoulTime.getDate() - 1);
                            }

                            const displayDate = seoulTime.toLocaleDateString('ko-KR', {
                                timeZone: 'UTC',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            });

                            const displayTime = seoulTime.toLocaleTimeString('ko-KR', {
                                timeZone: 'UTC',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            });

                            const display = seoulTime.toLocaleString('ko-KR', {
                                timeZone: 'UTC',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                                // hour: 'numeric',
                                // minute: 'numeric',
                                // hour12: true,
                            });

                            const split = log.createdAt.split('T')
                            return (
                                <Tr key={log.id}>
                                    <Td>{log.id}</Td>
                                    {/* <Td color={log.type === "지급" ? "green.600" : "red.500"}>{log.type}</Td> */}
                                    <Td>{log.balance.toLocaleString()}</Td>
                                    <Td>{log.note}</Td>
                                    <Td>{createdUTC.toDateString()} {createdUTC.toLocaleTimeString('ko-KR', { hour12: true })}</Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                <Button colorScheme="blue" isDisabled={page === 1} isLoading={isLoading} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                <Text>{page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
            </Stack>
        </>
    );
}

function NewUserDetails() {
    const { user } = useUserStore()
    if (!user) return null

    const size = 25;

    const toast = UseToastHooks()
    const modal = useDisclosure()
    const recover = useDisclosure()
    const deleteModal = useDisclosure()
    const message = useDisclosure()

    const [tab, setTab] = useState(0);
    const [hashrate, setHashrate] = useState(0);
    const [hashrate2, setHashrate2] = useState(0);
    const [note, setNote] = useState(user.note);
    const [coinLog, setCoinLog] = useState<CoinLog[]>([]);
    const [total, setTotal] = useState(1);
    const [page, setPage] = useState(1);
    const [recoverCoinLog, setRecoverCoinLog] = useState<RecoverCoinLog[]>([]);
    const [total2, setTotal2] = useState(1);
    const [page2, setPage2] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isLoading3, setIsLoading3] = useState(false);
    const [isLoading5, setIsLoading5] = useState(false);

    useEffect(() => {
        setPage(1)
        setPage2(1)

        const fetchCoinLog = async () => {
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
        const fetchRecoverCoinLog = async () => {
            setIsLoading5(true)
            try {
                const { data, message, pagination } = await api.getUserRecoverCoinLog({ search: user.phoneNumber, page: page2.toString() })
                const { total } = pagination
                setRecoverCoinLog(data)
                setTotal2(total)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading5(false)
            }
        }

        if (tab === 0) {
            fetchCoinLog()
        }
        if (tab === 1) {
            fetchRecoverCoinLog()
        }
    }, [tab]);
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
    useEffect(() => {
        const fetchLogs = async () => {
            setIsLoading5(true)
            try {
                const { data } = await api.getUserRecoverCoinLog({ search: user.phoneNumber, page: page2.toString() })
                setRecoverCoinLog(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading5(false)
            }
        }
        fetchLogs()
    }, [page2]);

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
            setIsLoading3(false)
        }
    }
    const handleDeleteNote = async () => {
        setIsLoading3(true)
        try {
            const { message } = await api.deleteNote({ phoneNumber: user.phoneNumber })
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
                <Menu>
                    <MenuButton as={Button} colorScheme="blue" rightIcon={<ChevronDownIcon />}>
                        작업 선택
                    </MenuButton>
                    <MenuList w={"fit-content"}>
                        <MenuItem onClick={modal.onOpen}>비밀번호 변경</MenuItem>
                        <MenuItem onClick={deleteModal.onOpen}>사용자 삭제</MenuItem>
                        <MenuItem onClick={message.onOpen}>1:1 문의</MenuItem>
                    </MenuList>
                </Menu>
                <UpdatePasswordModal {...modal} />
                <ConfirmDeleteUserModal {...deleteModal} />
                <MessageUserModal {...message} />
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
                    <Text><strong>보유자산:</strong> ₩{(user.balance).toLocaleString()} USDT</Text>
                    <Text><strong>누적 수익:</strong> ₩{user.earnings.toLocaleString()} USDT</Text>
                    <Text><strong>금일 예상 수익:</strong> ₩{((user.balance / 24) * (user.hashRate / 100)).toFixed(3)} USDT</Text>
                    <Divider my={2} />
                    <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"}>
                        <Text><strong>보유자산:</strong> ₩{(user.usdt_balance ? user.usdt_balance.balance : 0).toLocaleString()} USDT</Text>
                        <Button size={"sm"} colorScheme="blue" onClick={recover.onOpen}>코인 회수</Button>
                        <RecoverCoinModal {...recover} />
                    </Stack>
                    <Text><strong>누적 수익:</strong> ₩{(user.usdt_balance ? user.usdt_balance.totalEarnings : 0).toLocaleString()} USDT</Text>
                    <Text><strong>금일 예상 수익:</strong> ₩{(user.usdt_balance ? user.usdt_balance.earnings : 0).toLocaleString()} USDT</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm" h={"fit-content"}>
                    <Text fontWeight="semibold" mb={2}>참고</Text>
                    <Textarea value={note} onChange={(e) => setNote(e.target.value)} />
                    <Stack w={"100%"} py={2} direction={"row"} justify={"flex-end"} align={"center"} >
                        <Button colorScheme="green" isLoading={isLoading3} onClick={handleUpdateNote}>업데이트</Button>
                        <Button colorScheme="red" isLoading={isLoading3} onClick={handleDeleteNote}>삭제</Button>
                    </Stack>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Tabs index={tab} onChange={(index) => setTab(index)}>
                        <TabList>
                            <Tab>코인 지급/회수</Tab> {/**coin logs */}
                            <Tab>락업코인회수로그</Tab> {/**recover coin logs */}
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <CoinLogsTable
                                    isLoading={isLoading}
                                    coinLog={coinLog}
                                    page={page}
                                    size={size}
                                    total={total}
                                    setPage={setPage}
                                />
                            </TabPanel>
                            <TabPanel>
                                <RecoverCoinLogsTable
                                    isLoading={isLoading5}
                                    recoverCoinLog={recoverCoinLog}
                                    page={page2}
                                    size={size}
                                    total={total2}
                                    setPage={setPage2}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </SimpleGrid>
        </Stack>
    );
}
export default memo(NewUserDetails)