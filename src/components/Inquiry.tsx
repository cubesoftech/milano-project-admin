import React, { useEffect } from "react";
import {
    Box,
    Button,
    Flex,
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
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";

export default function Inquiry() {
    const { setTItle } = useTitleStore();

    useEffect(() => {
        setTItle("문의 게시판 관리")
    }, []);
    return (
        <Stack w="100%" p={6} spacing={8}>
            <Text fontSize="2xl" fontWeight="bold">📮 문의 게시판</Text>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th>문의 ID</Th>
                            <Th>회원 ID</Th>
                            <Th>제목</Th>
                            <Th>작성일</Th>
                            <Th>상태</Th>
                            <Th>관리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Q1001</Td>
                            <Td>U00128</Td>
                            <Td>입금 관련 문의</Td>
                            <Td>2025-06-20</Td>
                            <Td color="yellow.600">대기중</Td>
                            <Td>
                                <Button size="xs" bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>
                                    답변하기
                                </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Q1002</Td>
                            <Td>U00129</Td>
                            <Td>출금 지연 문의</Td>
                            <Td>2025-06-19</Td>
                            <Td color="green.600">답변완료</Td>
                            <Td>
                                <Button size="xs" bg="gray.600" color="white" _hover={{ bg: "gray.700" }}>
                                    보기
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Stack w={"100%"}>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>답변 작성</Text>
                <Stack spacing={3} >
                    <Input placeholder="답변할 문의 ID 입력" bgColor={"white"} />
                    <Textarea rows={4} placeholder="답변 내용 입력" bgColor={"white"} />
                    <Button w="fit-content" bg="green.600" color="white" _hover={{ bg: "green.700" }}>
                        답변 등록
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};