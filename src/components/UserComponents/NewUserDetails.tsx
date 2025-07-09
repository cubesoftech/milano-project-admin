import React, { memo } from "react";
import {
    Box, Text, Stack, SimpleGrid, Divider
} from "@chakra-ui/react";
import { useUserStore } from "@/utils/storage";

function NewUserDetails() {
    const { user } = useUserStore()

    if (!user) return null

    return (
        <Stack w="full" p={6} spacing={6} bg="oklch(96.7% 0.0029 264.54)">
            <Text fontSize="2xl" fontWeight="bold">🧍 회원 상세정보</Text>

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
                    <Text fontWeight="semibold" mb={2}>추천 정보</Text>
                    <Text><strong>추천인:</strong> 준비중입니다</Text>
                    <Text><strong>레퍼럴 수:</strong> 준비중입니다</Text>
                    <Text><strong>수익 요율:</strong> 준비중입니다</Text>
                </Box>

                <Box flex={1} minW="250px" bg="white" p={4} rounded="md" shadow="sm">
                    <Text fontWeight="semibold" mb={2}>투자 정보</Text>
                    <Text><strong>총 투자금:</strong> ₩{user.balance.toLocaleString()}</Text>
                    <Text><strong>총 배당금:</strong> ₩{user.balance.toLocaleString()}</Text>
                </Box>
            </SimpleGrid>
        </Stack>
    );
}
export default memo(NewUserDetails)