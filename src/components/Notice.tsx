import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
    Box, Button, Checkbox, Flex, HStack, Input, Select, Stack, Textarea, Text, useDisclosure,
    Table, Tbody, Td, Th, Thead, Tr,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";

interface NoticeModalProp {
    isOpen: boolean;
    onClose: () => void;
    isEditMode: boolean;
    editingItem: any;
    isHtmlMode: boolean;
    setIsHtmlMode: Dispatch<SetStateAction<boolean>>
}
function NoticeModal({ isOpen, onClose, isEditMode, editingItem, isHtmlMode, setIsHtmlMode }: NoticeModalProp) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{isEditMode ? "공지사항 수정" : "공지사항 작성"}</ModalHeader>
                <ModalBody>
                    <Stack spacing={4} fontSize="sm">
                        <Input
                            defaultValue={isEditMode ? editingItem?.title : ""}
                            placeholder="공지 제목 입력"
                        />
                        <FormControl>
                            <FormLabel>고정 여부</FormLabel>
                            <Select defaultValue={isEditMode && editingItem?.fixed ? "Y" : "N"}>
                                <option value="Y">고정</option>
                                <option value="N">비고정</option>
                            </Select>
                        </FormControl>
                        <Input type="file" accept="image/*" p={1} border="1px solid" borderColor="gray.300" rounded="md" />
                        <FormControl>
                            <FormLabel>모드 선택</FormLabel>
                            <Select value={isHtmlMode ? "html" : "text"} onChange={(e) => setIsHtmlMode(e.target.value === "html")}>
                                <option value="text">일반 텍스트</option>
                                <option value="html">HTML</option>
                            </Select>
                        </FormControl>
                        {isHtmlMode ? (
                            <Textarea placeholder="<p>공지 내용 입력</p>" rows={6} fontFamily="mono" />
                        ) : (
                            <Textarea placeholder="공지 내용 입력" rows={6} />
                        )}
                        <Select defaultValue="visible">
                            <option value="visible">노출</option>
                            <option value="hidden">비노출</option>
                        </Select>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <HStack spacing={2}>
                        <Button variant="ghost" onClick={onClose}>취소</Button>
                        <Button bg="green.600" color="white" _hover={{ bg: "green.700" }}>
                            {isEditMode ? "수정" : "등록"}
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default function Notice() {
    const notices = [
        { id: 5, title: "시스템 점검 안내", fixed: true, date: "2025-06-18", status: "노출중" },
        { id: 4, title: "신규 블록딜 출시", fixed: false, date: "2025-06-15", status: "노출중" },
        { id: 3, title: "출금 시스템 변경 안내", fixed: true, date: "2025-06-10", status: "비노출" },
    ];

    const { setTItle } = useTitleStore();

    const [showModal, setShowModal] = useState(false);
    const [isHtmlMode, setIsHtmlMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);

    useEffect(() => {
        setTItle("공지사항 관리")
    }, []);

    const handleEditClick = (item: any) => {
        setIsEditMode(true);
        setEditingItem(item);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setIsEditMode(false);
        setEditingItem(null);
    };


    return (
        <Stack w="full" spacing={6} p={6} >
            <Text fontSize="2xl" fontWeight="bold">📢 공지사항 목록</Text>

            <HStack spacing={3} flexWrap="wrap">
                <Input placeholder="제목 검색" flex={1} maxW="300px" bgColor={"white"} />
                <Button bg="oklch(54.6% 0.245 262.881)" color="white" _hover={{ bg: "oklch(48% 0.233 262)" }}>검색</Button>
                <Button bg="oklch(60% 0.22 150)" color="white" _hover={{ bg: "oklch(55% 0.22 150)" }} onClick={() => setShowModal(true)}>+ 새 공지 작성</Button>
            </HStack>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th><Checkbox /></Th>
                            <Th>번호</Th>
                            <Th>제목</Th>
                            <Th>고정</Th>
                            <Th>등록일</Th>
                            <Th>상태</Th>
                            <Th>관리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {notices.map((notice) => (
                            <Tr key={notice.id}>
                                <Td><Checkbox /></Td>
                                <Td>{notice.id}</Td>
                                <Td>{notice.title}</Td>
                                <Td>{notice.fixed ? "✅" : ""}</Td>
                                <Td>{notice.date}</Td>
                                <Td>{notice.status}</Td>
                                <Td>
                                    <HStack spacing={2}>
                                        <Button size="xs" colorScheme="blue" onClick={() => handleEditClick(notice)}>수정</Button>
                                        <Button size="xs" colorScheme="red">삭제</Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Flex justify="flex-end">
                <Button bg="red.500" color="white" _hover={{ bg: "red.600" }}>선택 삭제</Button>
            </Flex>

            <NoticeModal
                isOpen={showModal}
                onClose={handleCloseModal}
                isEditMode={isEditMode}
                editingItem={editingItem}
                isHtmlMode={isHtmlMode}
                setIsHtmlMode={setIsHtmlMode}
            />
        </Stack>
    );
};