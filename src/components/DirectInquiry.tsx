import React, { useEffect, useState, Dispatch, SetStateAction, useRef } from "react";
import {
    useDisclosure, TextProps,
    Stack, Flex, Box,
    Text, Button, IconButton, Spinner,
    Input, Textarea,
    Table, Tbody, Td, Th, Thead, Tr,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import UseToastHooks from "@/hooks/UseToastHooks";
import { IoIosSend } from "react-icons/io";

import { Inquiries, Message } from "@/utils/interface";
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
        <Modal size={"sm"} isOpen={isOpen} onClose={handleOnClose} motionPreset="slideInTop">
            <ModalOverlay />
            <ModalContent maxH={"50vh"}>
                <ModalHeader>{inquiry.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                    <Stack w={"100%"} h={"full"} >
                        <Stack w={"100%"} maxH={"30vh"} overflow={"auto"}>
                            {
                                page < Math.ceil(messages.total / size) && (
                                    <Button variant={"ghost"} onClick={handleAddMore} isLoading={isLoading}>더보기...</Button>
                                )
                            }
                            {
                                messages.message.map(message => {
                                    const isFromUser = message.senderId === inquiry.minerId;
                                    const borderRadius: TextProps["borderRadius"] = "xl";
                                    const p: TextProps["p"] = 2
                                    return (
                                        <Stack
                                            w={"100%"} direction={"row"} align={"center"}
                                            justify={isFromUser ? "flex-start" : "flex-end"}
                                        >
                                            <Text
                                                maxW={"50%"} borderRadius={borderRadius} p={p}
                                                bgColor={isFromUser ? "gray.400" : "blue.400"}
                                                borderBottomLeftRadius={isFromUser ? 0 : borderRadius}
                                                borderBottomRightRadius={isFromUser ? borderRadius : 0}
                                                pr={isFromUser ? 5 : p}
                                                pl={isFromUser ? p : 5}
                                            >
                                                {message.content}
                                            </Text>
                                        </Stack>
                                    );
                                })
                            }
                        </Stack>
                        <Stack w={"100%"} direction={"row"} justify={"center"} align={"center"}>
                            <Textarea resize={"none"} value={payload} onChange={(e) => setPayload(e.target.value)} />
                            <IconButton icon={<IoIosSend />} aria-label="Send" colorScheme="blue" isLoading={isLoading} onClick={handleSendMessage} />
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
                            <Table >
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
                                                    <Td>{inquiry.id}</Td>
                                                    <Td>{inquiry.miners.id}</Td>
                                                    <Td>{inquiry.miners.name}</Td>
                                                    <Td>{inquiry.title}</Td>
                                                    <Td>{created.toDateString()}</Td>
                                                    <Td>
                                                        <Stack w={"100%"} h={"full"} direction={"row"} align={"center"} justify={"flex-start"}>
                                                            <Button colorScheme="blue" onClick={() => handleGetMessages("reply", inquiry)}>답장</Button>
                                                            <Button colorScheme="red" onClick={() => handleGetMessages("delete", inquiry)}>삭제</Button>
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