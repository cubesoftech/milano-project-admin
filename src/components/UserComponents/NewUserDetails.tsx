import React, { memo } from "react";
import {
    Box, Text, Stack, SimpleGrid
} from "@chakra-ui/react";

function NewUserDetails() {
    const user = {
        id: "U001",
        name: "김민수",
        email: "kim@email.com",
        phone: "010-1234-5678",
        bank: "우리은행",
        account: "1002-456-789012",
        owner: "김민수",
        status: "정상",
        joined: "2024-06-01",
        referrer: "U000 (총판A)",
        commissionRate: "3.5%",
        referrals: 12,
        investment: 42000000,
        dividend: 1080000,
    };

    return (
        <Stack w="full" p={6} spacing={6} bg="oklch(96.7% 0.0029 264.54)">
            <Text fontSize="2xl" fontWeight="bold">🧍 회원 상세정보</Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>기본 정보</Text>
                    <Text><strong>회원 ID:</strong> {user.id}</Text>
                    <Text><strong>이름:</strong> {user.name}</Text>
                    <Text><strong>이메일:</strong> {user.email}</Text>
                    <Text><strong>전화번호:</strong> {user.phone}</Text>
                    <Text><strong>상태:</strong> {user.status}</Text>
                    <Text><strong>가입일:</strong> {user.joined}</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>계좌 정보</Text>
                    <Text><strong>은행명:</strong> {user.bank}</Text>
                    <Text><strong>계좌번호:</strong> {user.account}</Text>
                    <Text><strong>예금주:</strong> {user.owner}</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>추천 정보</Text>
                    <Text><strong>추천인:</strong> {user.referrer}</Text>
                    <Text><strong>레퍼럴 수:</strong> {user.referrals}명</Text>
                    <Text><strong>수익 요율:</strong> {user.commissionRate}</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>투자 정보</Text>
                    <Text><strong>총 투자금:</strong> ₩{user.investment.toLocaleString()}</Text>
                    <Text><strong>총 배당금:</strong> ₩{user.dividend.toLocaleString()}</Text>
                </Box>
            </SimpleGrid>
        </Stack>
    );
}
export default memo(NewUserDetails)