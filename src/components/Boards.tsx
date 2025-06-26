import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    HStack,
    Input,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Textarea,
    Th,
    Thead,
    Tr,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Image,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";

export default function Boards() {
    const { setTItle } = useTitleStore();

    const [tab, setTab] = useState("전체방");
    const [search, setSearch] = useState("");
    const [preview, setPreview] = useState<any | null>(null);
    const [showEditor, setShowEditor] = useState(false);
    const [newPost, setNewPost] = useState<{ title: string, content: string, image: File | null }>({ title: "", content: "", image: null });

    const [posts, setPosts] = useState([
        { id: 1, category: "전체방", title: "첫 게시글입니다", author: "U001", content: "본문 내용입니다", date: "2025-06-22", status: "대기", pinned: false, reports: 0, views: 12 },
        { id: 2, category: "공지방", title: "공지사항 등록안내", author: "admin", content: "공지 본문입니다", date: "2025-06-21", status: "노출", pinned: true, reports: 0, views: 45 },
        { id: 3, category: "1기방", title: "1기 수익 인증", author: "U005", content: "1기 내용", date: "2025-06-20", status: "대기", pinned: false, reports: 6, views: 30 },
    ]);

    const filtered = posts.filter(
        (b) => b.category === tab && (b.title.includes(search) || b.author.includes(search))
    );

    useEffect(() => {
        setTItle("게시판 관리")
    }, []);

    const handleApprove = (id: number) => {
        if (confirm("해당 게시글을 승인하시겠습니까?")) {
            setPosts(prev => prev.map(p => p.id === id ? { ...p, status: "노출" } : p));
        }
    };
    const handleDelete = (id: number) => {
        if (confirm("해당 게시글을 삭제하시겠습니까?")) {
            setPosts(prev => prev.filter(p => p.id !== id));
        }
    };
    const handleEditContent = (id: number) => {
        const text = prompt("수정할 게시글 내용을 입력하세요:", posts.find(p => p.id === id)?.content || "");
        if (text !== null) {
            setPosts(prev => prev.map(p => p.id === id ? { ...p, content: text } : p));
            alert("내용이 수정되었습니다.");
        }
    };
    const handleAddDummy = () => {
        const newId = posts.length + 1;
        const newEntry = {
            id: newId,
            category: tab,
            title: newPost.title,
            content: newPost.content,
            image: newPost.image,
            author: "admin",
            date: new Date().toISOString().slice(0, 10),
            status: "노출",
            pinned: false,
            reports: 0,
            views: 0,
        };
        setPosts(prev => [newEntry, ...prev]);
        setNewPost({ title: "", content: "", image: null });
        setShowEditor(false);
    };

    return (
        <Stack w="full" p={6} spacing={6} >
            <Flex justify="space-between" align="center" flexWrap="wrap">
                <Text fontSize="2xl" fontWeight="bold">📋 게시판 관리</Text>
                <Button bg="blue.600" color="white" _hover={{ bg: "blue.700" }} size="sm" onClick={() => setShowEditor(true)}>
                    + 더미 게시글 등록
                </Button>
            </Flex>

            <HStack spacing={2} flexWrap="wrap">
                {["전체방", "공지방", "수익인증방", "1기방", "2기방", "3기방"].map((t) => (
                    <Button
                        key={t}
                        size="sm"
                        bg={tab === t ? "blue.600" : "gray.200"}
                        color={tab === t ? "white" : "black"}
                        onClick={() => setTab(t)}
                    >
                        {t}
                    </Button>
                ))}
            </HStack>

            <Input
                placeholder="제목 또는 작성자 검색"
                bgColor={"white"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th>제목</Th>
                            <Th>작성자</Th>
                            <Th>작성일</Th>
                            <Th>상태</Th>
                            <Th>신고수</Th>
                            <Th>조회수</Th>
                            <Th>고정</Th>
                            <Th>관리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filtered.map((b) => (
                            <Tr key={b.id}>
                                <Td>{b.title}</Td>
                                <Td>{b.author}</Td>
                                <Td>{b.date}</Td>
                                <Td>{b.status}</Td>
                                <Td>{b.reports}</Td>
                                <Td>{b.views}</Td>
                                <Td>{b.pinned ? "📌" : ""}</Td>
                                <Td>
                                    <HStack spacing={1}>
                                        {b.status === "대기" && (
                                            <Button size="xs" colorScheme="green" onClick={() => handleApprove(b.id)}>승인</Button>
                                        )}
                                        <Button size="xs" bg="gray.500" color="white" onClick={() => setPreview(b)}>미리보기</Button>
                                        <Button size="xs" bg="yellow.500" color="white" onClick={() => handleEditContent(b.id)}>수정</Button>
                                        <Button size="xs" colorScheme="red" onClick={() => handleDelete(b.id)}>삭제</Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Modal isOpen={preview !== null} onClose={() => setPreview(null)} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{preview?.title}</ModalHeader>
                    <ModalBody>
                        <Text fontSize="sm" color="gray.600" mb={2}>작성자: {preview?.author} / {preview?.date}</Text>
                        <Text fontSize="sm" whiteSpace="pre-wrap" mb={4}>{preview?.content}</Text>
                        {preview?.image && (
                            <Image src={URL.createObjectURL(preview.image)} alt="preview" rounded="md" mb={4} />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setPreview(null)} bg="gray.600" color="white" _hover={{ bg: "gray.700" }}>닫기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={showEditor} onClose={() => setShowEditor(false)} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>더미 게시글 등록</ModalHeader>
                    <ModalBody>
                        <Stack spacing={3}>
                            <Input
                                placeholder="제목 입력"
                                value={newPost.title}
                                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                            />
                            <Textarea
                                rows={6}
                                placeholder="내용 입력"
                                value={newPost.content}
                                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                            />
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setNewPost({ ...newPost, image: e.target.files?.[0] || null })}
                            />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={2}>
                            <Button onClick={() => setShowEditor(false)} variant="ghost">취소</Button>
                            <Button onClick={handleAddDummy} bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>등록</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    );
};