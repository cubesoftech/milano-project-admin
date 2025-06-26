import React, { memo } from "react";
import {
    Box, Button, Stack, Link, Text, SimpleGrid,
    UnorderedList, ListItem,

    Table, Thead, Tbody, Tr, Th, Td,
} from "@chakra-ui/react";
import { useAgencyStore } from "@/utils/storage";

function NewSelectedAgency() {
    const { agency, selectAgency } = useAgencyStore();

    return (
        <Stack w="full" p={6} spacing={6} bg="oklch(96.7% 0.0029 264.54)">
            <Text fontSize="2xl" fontWeight="bold">에이전시 상세 ({agency})</Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box bg="white" p={5} rounded="xl" shadow="md">
                    <Text fontWeight="bold" fontSize="lg" mb={2}>에이전시 기본 정보</Text>
                    <Text fontSize="sm">명칭: <strong>{agency}</strong></Text>
                    <Text fontSize="sm">생성일: 2024-01-01</Text>
                    <Text fontSize="sm">하위 회원 수: 15명</Text>
                    <Text fontSize="sm">총 커미션 지급: <strong>₩1,240,000</strong></Text>
                    <Text fontSize="sm">현재 누적 커미션: <strong>₩1,445,000</strong></Text>
                    <Text fontSize="sm">예정 커미션(미정산): <strong>₩205,000</strong></Text>
                    <Text fontSize="sm">커미션 요율: <strong>5%</strong></Text>
                    <Text fontSize="sm">정산 주기: <strong>매주 월요일</strong></Text>
                </Box>

                <Box bg="white" p={5} rounded="xl" shadow="md">
                    <Text fontWeight="bold" fontSize="lg" mb={2}>📊 조직도</Text>
                    <Box fontSize="sm" bg="gray.50" p={4} rounded="md" overflowX="auto">
                        <Stack align="center" spacing={2}>
                            <Box bg="blue.500" color="white" px={4} py={2} rounded="full">운영사</Box>
                            <Box w="1px" h={6} bg="gray.400" />
                            <Box bg="purple.600" color="white" px={4} py={2} rounded="md">{agency} (총판)</Box>
                            <Box w="1px" h={6} bg="gray.400" />
                            <Stack direction="row" spacing={3} mt={4} wrap="wrap">
                                {[
                                    { id: "U003", name: "박지후" },
                                    { id: "U005", name: "장예린" },
                                    { id: "U013", name: "조은별" },
                                ].map(u => (
                                    <Stack key={u.id} spacing={1} align="center">
                                        <Box as={Button} size={"sm"} bg="green.500" color="white" px={3} py={1} rounded="md" _hover={{ bg: "green.600" }} onClick={() => selectAgency(u.name)}>{`${u.id} - ${u.name}`}</Box>
                                        <Text fontSize="xs" color="gray.600">에이전트</Text>
                                    </Stack>
                                ))}
                            </Stack>
                            <Box w="1px" h={6} bg="gray.300" />
                            <Stack direction="row" spacing={3} mt={4} wrap="wrap">
                                {["U012 - 홍길동", "U014 - 김하늘", "U016 - 정우성"].map(u => (
                                    <Text key={u} fontSize="sm" color="gray.700">{u}</Text>
                                ))}
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </SimpleGrid>

            <Box bg="white" p={5} rounded="xl" shadow="md">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Box>
                        <Text fontSize="lg" fontWeight="bold" mb={2}>🔗 다이렉트 유저</Text>
                        <UnorderedList spacing={1} fontSize="sm">
                            <ListItem>U012 - 홍길동</ListItem>
                            <ListItem>U014 - 김하늘</ListItem>
                            <ListItem>U016 - 정우성</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Text fontSize="lg" fontWeight="bold" mb={2}>🧭 하위 에이전트</Text>
                        <UnorderedList spacing={1} fontSize="sm">
                            <ListItem><Link href="/agency/U003" color="blue.600">U003 - 박지후 (에이전트)</Link></ListItem>
                            <ListItem><Link href="/agency/U005" color="blue.600">U005 - 장예린 (에이전트)</Link></ListItem>
                            <ListItem><Link href="/agency/U013" color="blue.600">U013 - 조은별 (에이전트)</Link></ListItem>
                        </UnorderedList>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box bg="white" p={5} rounded="xl" shadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={2}>💰 실시간 커미션 지급 내역</Text>
                <Box overflowX="auto">
                    <Table size="sm">
                        <Thead bg="gray.100">
                            <Tr>
                                <Th>일자</Th>
                                <Th>지급 대상</Th>
                                <Th>금액</Th>
                                <Th>메모</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr><Td>2024-06-20</Td><Td>U003 - 박지후</Td><Td>₩120,000</Td><Td>BTC 딜 수익</Td></Tr>
                            <Tr><Td>2024-06-21</Td><Td>U005 - 장예린</Td><Td>₩80,000</Td><Td>ETH 딜 수익</Td></Tr>
                            <Tr><Td>2024-06-21</Td><Td>U013 - 조은별</Td><Td>₩45,000</Td><Td>추천 보너스</Td></Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Stack>
    );
}
export default memo(NewSelectedAgency)