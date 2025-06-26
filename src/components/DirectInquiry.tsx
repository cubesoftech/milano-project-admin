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

const DirectInquiry = () => {
    const { setTItle } = useTitleStore();

    useEffect(() => {
        setTItle("1:1 문의 관리")
    }, []);
    return (
        <Stack w="full" p={6} spacing={8}>
            <Text fontSize="2xl" fontWeight="bold">📩 1:1 문의 목록</Text>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th>문의 ID</Th>
                            <Th>회원 ID</Th>
                            <Th>제목</Th>
                            <Th>내용</Th>
                            <Th>작성일</Th>
                            <Th>상태</Th>
                            <Th>관리</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>DM101</Td>
                            <Td>U00145</Td>
                            <Td>출금 문의</Td>
                            <Td>출금 신청했는데 안돼요</Td>
                            <Td>2025-06-21</Td>
                            <Td color="yellow.600">대기중</Td>
                            <Td>
                                <Button size="xs" bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>답변</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>DM102</Td>
                            <Td>U00146</Td>
                            <Td>지갑 오류</Td>
                            <Td>지갑 잔액이 이상해요</Td>
                            <Td>2025-06-20</Td>
                            <Td color="green.600">답변완료</Td>
                            <Td>
                                <Button size="xs" bg="gray.600" color="white" _hover={{ bg: "gray.700" }}>보기</Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Stack w={"100%"}>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>답변 등록</Text>
                <Stack spacing={3} >
                    <Input placeholder="문의 ID 입력" bgColor={"white"} />
                    <Textarea rows={4} placeholder="답변 내용 입력" bgColor={"white"} />
                    <Button w="fit-content" bg="green.600" color="white" _hover={{ bg: "green.700" }}>
                        답변 저장
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default DirectInquiry;
