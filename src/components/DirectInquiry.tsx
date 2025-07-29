import React, { useEffect, useState, Dispatch, SetStateAction, useRef } from "react";
import {
    useDisclosure, TextProps,
    Stack, Flex, Box,
    Text, Button, IconButton, Spinner, Checkbox,
    Input, Textarea, FormControl, FormLabel,
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import UseToastHooks from "@/hooks/UseToastHooks";
import { IoIosSend } from "react-icons/io";

import { Inquiries, Message, Miners } from "@/utils/interface";
import { api } from "@/utils/api";

interface ModalBaseProps {
    isOpen: boolean;
    onClose: () => void
}

interface MessageModalProps extends ModalBaseProps {
    inquiry: Inquiries;
    messages: {
        total: number;
        message: Message[]
    };
    setMessage: Dispatch<SetStateAction<{
        total: number;
        message: Message[]
    }>>
}
interface DeleteModalProps extends ModalBaseProps {
    inquiry: Inquiries
}
interface UsersModalProps extends ModalBaseProps {
    setRefetch: Dispatch<SetStateAction<boolean>>;
    title: string;
    content: string;
    resetPayload: () => void;
}

const MessageModal = ({ isOpen, onClose, inquiry, messages, setMessage }: MessageModalProps) => {

    const size = 25;

    const toast = UseToastHooks()

    const [payload, setPayload] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const handleOnClose = () => {
        setPage(1);
        onClose()
    }

    const handleSendMessage = async () => {
        setIsLoading(true)
        try {
            const { message } = await api.replyInquiry({ inquiryId: inquiry.id, receiverId: inquiry.miners.id, content: payload })
            toast.success(message);
            handleOnClose()
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            toast.error(message);
        } finally {
            setIsLoading(false)
        }
    }

    const handleAddMore = async () => {
        const nextPage = page + 1;
        setPage(nextPage)

        setIsLoading(true)
        try {
            const { data, pagination } = await api.inquiry({ search: inquiry.id, page: nextPage.toString(), limit: size.toString() })
            const { total } = pagination
            setMessage(prev => ({
                total,
                message: [
                    ...prev.message,
                    ...data
                ]
            }))
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            toast.error(message);
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <Modal size={"md"} isOpen={isOpen} onClose={handleOnClose} motionPreset="slideInTop" isCentered>
            <ModalOverlay />
            <ModalContent maxH={"70vh"} bgColor={"blue.50"} overflow={"hidden"}>
                <ModalHeader>{inquiry.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Stack w={"100%"} h={"full"} gap={1}>
                        <Stack w={"95%"} h={"50vh"} mx={"auto"} overflow={"auto"} borderRadius={"xl"} bgColor={"white"} p={2}>
                            {
                                page < Math.ceil(messages.total / size) && (
                                    <Button variant={"ghost"} onClick={handleAddMore} isLoading={isLoading}>더보기...</Button>
                                )
                            }
                            {
                                messages.message.map(message => {
                                    const isFromUser = message.senderId === inquiry.minerId;
                                    const borderRadius: TextProps["borderRadius"] = "3xl";
                                    const p: TextProps["p"] = 2
                                    return (
                                        <Stack
                                            w={"100%"} direction={"row"} align={"center"}
                                            justify={isFromUser ? "flex-start" : "flex-end"}
                                        >
                                            <Stack maxW={"70%"} align={isFromUser ? "flex-start" : "flex-end"} gap={0}>
                                                <Text fontSize={"x-small"}>{new Date(message.createdAt).toLocaleDateString()} {new Date(message.createdAt).toLocaleTimeString()}</Text>
                                                <Text
                                                    maxW={"100%"} borderRadius={borderRadius} p={p} fontSize={"small"}
                                                    bgColor={isFromUser ? "gray.400" : "blue.400"}
                                                    borderBottomLeftRadius={isFromUser ? 0 : borderRadius}
                                                    borderBottomRightRadius={isFromUser ? borderRadius : 0}
                                                    pr={isFromUser ? 5 : p}
                                                    pl={isFromUser ? p : 5}
                                                >
                                                    {message.content}
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    );
                                })
                            }
                        </Stack>
                        <Stack w={"100%"} p={2} direction={"row"} justify={"center"} align={"center"}>
                            <Textarea resize={"none"} bgColor={"white"} value={payload} onChange={(e) => setPayload(e.target.value)} />
                            <IconButton fontSize={"x-large"} icon={<IoIosSend />} aria-label="Send" colorScheme="blue" isLoading={isLoading} onClick={handleSendMessage} />
                        </Stack>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
const DeleteModal = ({ isOpen, onClose, inquiry }: DeleteModalProps) => {
    const toast = UseToastHooks()
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteInquiry = async () => {
        setIsLoading(true)
        try {
            const { message } = await api.deleteInquiry({ inquiryId: inquiry.id })
            toast.success(message)
            onClose()
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            toast.error(message);
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Modal size={"sm"} isOpen={isOpen} onClose={onClose} motionPreset="slideInTop">
            <ModalOverlay />
            <ModalContent maxH={"50vh"}>
                <ModalHeader>문의{inquiry.id}을(를) 정말 삭제하시겠습니까?</ModalHeader>
                <ModalFooter gap={2} pt={0}>
                    <Button size={"sm"} colorScheme="green" isLoading={isLoading} onClick={handleDeleteInquiry}>적용</Button>
                    <Button size={"sm"} colorScheme="red" variant={"ghost"} isLoading={isLoading} onClick={onClose}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
const UsersModal = ({ isOpen, onClose, setRefetch, title, content, resetPayload }: UsersModalProps) => {
    const size = 10;
    const { success, error } = UseToastHooks()

    const [data, setData] = useState<Miners[]>([]);
    const [total, setTotal] = useState(1);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

    // get users on open
    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true)
            setSelectedUsers([]);
            try {
                const { data, message, pagination } = await api.miners({ limit: size.toString() })
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser();
    }, [isOpen]);
    // get users next page
    useEffect(() => {
        const fetchHistory = async () => {
            setSelectedUsers([]);
            setIsLoading(true)
            try {
                const { data } = await api.miners({ page: page.toString(), search: search, limit: size.toString() })
                setData(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchHistory()
    }, [page]);
    // get filtered user
    useEffect(() => {
        // reset the page to 1 when search is empty
        // get all users when search is empty
        if (!search || search.trim() === "") {
            setPage(1)
            setSelectedUsers([]);
            const fetchUser = async () => {
                setIsLoading(true)
                try {
                    const { data, message, pagination } = await api.miners({ limit: size.toString() })
                    const { total } = pagination
                    setData(data)
                    setTotal(total)
                } catch (e: any) {
                    const message = e?.response?.data?.message || "Something went wrong"
                    console.error("Error fetching user lists: ", message)
                } finally {
                    setIsLoading(false)
                }
            }
            fetchUser()
            return;
        }

        const debouncedUserFetch = setTimeout(async () => {
            setPage(1);
            setSelectedUsers([]);
            setIsLoading(true);
            try {
                const { data } = await api.miners({ search: search, limit: size.toString() })
                setData(data)
            } catch (e: any) {
                const message = e?.response?.data?.message || "Something went wrong"
                console.error("Error fetching user lists: ", message)
            } finally {
                setIsLoading(false)
            }
        }, 1000 * 2)
        return () => clearTimeout(debouncedUserFetch)
    }, [search]);

    const toggleSelect = (phoneNumber: string) => {
        setSelectedUsers(prev =>
            prev.includes(phoneNumber) ? prev.filter((uid) => uid !== phoneNumber) : [...prev, phoneNumber]
        );
    };
    const toggleAll = () => {
        setSelectedUsers(selectedUsers.length === data.length ? [] : data.map((u) => u.phoneNumber));
    };
    // reset data on close
    const handleOnClose = () => {
        setSelectedUsers([]);
        setPage(1);
        setSearch("");
        setRefetch(true);
        onClose();
    }
    const handleCreateInquiries = async () => {
        if (selectedUsers.length === 0) {
            error("No users selected");
            return;
        }
        if (title.trim() === "") {
            error("No title provided");
            return;
        }
        if (content.trim() === "") {
            error("No content provided");
            return;
        }

        setIsLoading(true)
        try {
            const { message } = await api.createBulkMessage({ phoneNumbers: selectedUsers, title, content })
            setRefetch(true)
            success(message);
            resetPayload()
            handleOnClose()
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            error(message);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={handleOnClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>👥 회원 관리</ModalHeader>
                <ModalBody>
                    <Input value={search} onChange={e => setSearch(e.target.value)} />
                    {
                        isLoading ? (
                            <Stack w={"100%"} p={10} justify={"center"} align={"center"} bgColor={"white"} rounded={"xl"}>
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            </Stack>
                        ) : (
                            <TableContainer pt={2}>
                                <Table size={"sm"} variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                <Checkbox
                                                    isChecked={selectedUsers.length === data.length}
                                                    onChange={toggleAll}
                                                />
                                            </Th>
                                            <Th>이름</Th>
                                            <Th>전화번호</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {
                                            data.map(user => (
                                                <Tr key={user.id}>
                                                    <Td>
                                                        <Checkbox
                                                            isChecked={selectedUsers.includes(user.phoneNumber)}
                                                            onChange={() => toggleSelect(user.phoneNumber)}
                                                        />
                                                    </Td>
                                                    <Td>{user.name}</Td>
                                                    <Td>{user.phoneNumber}</Td>
                                                </Tr>
                                            ))
                                        }
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        )
                    }
                    <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"} mt={5}>
                        <Button size={"sm"} colorScheme="blue" isDisabled={page === 1} isLoading={isLoading} onClick={() => setPage(prev => prev - 1)}>Prev</Button>
                        <Text>{page} / {Math.ceil(total / size)}</Text>
                        <Button size={"sm"} colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPage(prev => prev + 1)}>Next</Button>
                    </Stack>
                </ModalBody>
                <ModalFooter gap={2}>
                    <Button size={"sm"} colorScheme='blue' onClick={handleCreateInquiries} isLoading={isLoading} disabled={selectedUsers.length === 0}>
                        보내기
                    </Button>
                    <Button size={"sm"} variant='outline' colorScheme="red" onClick={handleOnClose}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

function CreateInquiry({ setRefetch }: { setRefetch: Dispatch<SetStateAction<boolean>> }) {
    const toast = UseToastHooks()
    const modal = useDisclosure()

    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({
        phoneNumber: "",
        title: "",
        content: "",
    });

    const handleCreateInquiry = async () => {
        if (payload.title.trim() === "" || payload.content.trim() === "" || payload.phoneNumber.trim() === "") {
            toast.warning("Invalid fields");
            return;
        }
        setIsLoading(true)
        try {
            const { message } = await api.createInquiry(payload)
            setRefetch(true)
            handleResetPayload()
            toast.success(message);
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            toast.error(message);
        } finally {
            setIsLoading(false)
        }
    }
    const handleResetPayload = () => {
        setPayload({
            phoneNumber: "",
            title: "",
            content: "",
        })
    }
    return (
        <Stack w={"100%"} bgColor={"white"} borderRadius={"lg"} shadow={"md"} p={5}>
            <FormControl>
                <FormLabel>전화번호</FormLabel>
                <Input value={payload.phoneNumber} onChange={(e) => setPayload({ ...payload, phoneNumber: e.target.value })} />
            </FormControl>
            <FormControl>
                <FormLabel>제목</FormLabel>
                <Input value={payload.title} onChange={(e) => setPayload({ ...payload, title: e.target.value })} />
            </FormControl>
            <FormControl>
                <FormLabel>내용</FormLabel>
                <Textarea value={payload.content} onChange={(e) => setPayload({ ...payload, content: e.target.value })} />
            </FormControl>
            <Stack w={"100%"} direction={"row"} justify={"flex-end"} align={"center"}>
                <UsersModal {...modal} setRefetch={setRefetch} resetPayload={handleResetPayload} {...payload} />
                <Button colorScheme="green" onClick={modal.onOpen} isLoading={isLoading}>
                    단체 메시지
                </Button>
                <Button colorScheme="blue" onClick={handleCreateInquiry} isLoading={isLoading}>
                    보내기
                </Button>
                <Button colorScheme="red" onClick={handleResetPayload} isLoading={isLoading}>
                    삭제
                </Button>
            </Stack>
        </Stack>
    );
}

export default function DirectInquiry() {
    const { setTItle } = useTitleStore();

    useEffect(() => {
        setTItle("1:1 문의 관리")
    }, []);

    const size = 25;

    const modal = useDisclosure()
    const toast = UseToastHooks();

    const [data, setData] = useState<Inquiries[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const typeRef = useRef<"reply" | "delete">("reply")
    const [refetch, setRefetch] = useState(true);

    const [messages, setMessages] = useState<{ total: number, message: Message[] }>({
        total: 0,
        message: []
    })
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiries | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    // get data on refresh
    useEffect(() => {
        if (!refetch) return;

        const fetch = async () => {
            setIsLoading(true)
            try {
                const { data, pagination } = await api.inquiries({ limit: size.toString(), page: page.toString() })
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                console.log("Error on fetching inquiry logs(refetch): ", e)
            } finally {
                setRefetch(false)
                setIsLoading(false)
            }
        }
        fetch()
    }, [refetch]);

    // get data on page change
    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            try {
                const { data, pagination } = await api.inquiries({ limit: size.toString(), page: page.toString() })
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                console.log("Error on fetching inquiry logs(refetch): ", e)
            } finally {
                setIsLoading(false)
            }
        }
        fetch()
    }, [page]);

    const handleGetMessages = async (type: "reply" | "delete", inquiry: Inquiries) => {
        setSelectedInquiry(inquiry)
        typeRef.current = type

        if (type === "delete") {
            modal.onOpen()
            return;
        }

        try {
            const { data, pagination } = await api.inquiry({ search: inquiry.id, limit: size.toString() })
            const { total } = pagination
            setMessages({
                total,
                message: data
            })
            modal.onOpen()
        } catch (e: any) {
            console.log("Error: ", e)
            const message = e?.response?.data?.message || "Something went wrong"
            toast.error(message);
        }
    }

    const handleCloseModal = () => {
        setSelectedInquiry(null)
        setMessages({ ...messages, message: [] });
        setRefetch(true);
        modal.onClose();
    }

    return (
        <Stack w="full" p={6} spacing={8}>
            <Text fontSize="2xl" fontWeight="bold">📩 1:1 문의 목록</Text>
            {
                (selectedInquiry && typeRef.current === "reply") && <MessageModal isOpen={modal.isOpen} onClose={handleCloseModal} inquiry={selectedInquiry} messages={messages} setMessage={setMessages} />
            }
            {
                (selectedInquiry && typeRef.current === "delete") && <DeleteModal isOpen={modal.isOpen} onClose={handleCloseModal} inquiry={selectedInquiry} />
            }
            <CreateInquiry setRefetch={setRefetch} />
            {
                isLoading ? (
                    <Stack w={"100%"} p={10} justify={"center"} align={"center"} bgColor={"white"} rounded={"xl"}>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Stack>
                ) : (
                    <>
                        <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                            <Table size={"sm"}>
                                <Thead bg="oklch(92.76% 0.0058 264.53)">
                                    <Tr>
                                        <Th py={2}>id</Th>
                                        <Th py={2}>유저아이디</Th>
                                        <Th py={2}>이름</Th>
                                        <Th py={2}>타이틀</Th>
                                        <Th py={2}>생성일</Th>
                                        <Th py={2}>작업</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        data.map(inquiry => {
                                            const created = new Date(inquiry.createdAt)
                                            return (
                                                <Tr key={inquiry.id} cursor={"pointer"}>
                                                    <Td py={2}>{inquiry.adminReplied ? "🟢" : "🔴"} {inquiry.id}</Td>
                                                    <Td py={2}>{inquiry.miners.id}</Td>
                                                    <Td py={2}>{inquiry.miners.name}</Td>
                                                    <Td py={2}>{inquiry.title}</Td>
                                                    <Td py={2}>{created.toDateString()}</Td>
                                                    <Td py={2}>
                                                        <Stack w={"100%"} h={"full"} direction={"row"} align={"center"} justify={"flex-start"}>
                                                            <Button size={"xs"} colorScheme="blue" onClick={() => handleGetMessages("reply", inquiry)}>답장</Button>
                                                            <Button size={"xs"} colorScheme="red" onClick={() => handleGetMessages("delete", inquiry)}>삭제</Button>
                                                        </Stack>
                                                    </Td>
                                                </Tr>
                                            );
                                        })
                                    }
                                </Tbody>
                            </Table>
                        </Box>
                        <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"}>
                            <Button colorScheme="blue" isDisabled={page === 1} isLoading={isLoading} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                            <Text>{page} / {Math.ceil(total / size)}</Text>
                            <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
                        </Stack>
                    </>
                )
            }
        </Stack>
    );
};