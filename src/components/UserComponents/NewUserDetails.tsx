import React, { memo, useState } from "react";
import {
    Box, Text, Stack, SimpleGrid, Divider, FormControl, FormLabel, Input, Button
} from "@chakra-ui/react";
import { useUserStore } from "@/utils/storage";
import UseToastHooks from "@/hooks/UseToastHooks";

import { api } from "@/utils/api";

function NewUserDetails() {
    const { user } = useUserStore()
    if (!user) return null

    const toast = UseToastHooks()

    const [earnings, setEarnings] = useState(0);
    const [earnings2, setEarnings2] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    const handleUpdateEarnings = async () => {
        if (earnings <= 0) return;
        setIsLoading(true)
        try {
            const { message } = await api.updateEarning({ phoneNumber: user.phoneNumber, earnings })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setIsLoading(false)
        }
    }
    const handleUpdateEarnings2 = async () => {
        if (earnings2 <= 0) return;
        setIsLoading2(true)
        try {
            const { message } = await api.updateEarning2({ phoneNumber: user.phoneNumber, earnings2 })
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message
            toast.error(message)
        } finally {
            setIsLoading2(false)
        }
    }


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
                    <Text fontWeight="semibold" mb={2}>자산 요약</Text>
                    <Stack align={"flex-end"} gap={1}>
                        <Stack w={"100%"} direction={"row"} justify={"flex-start"} align={"center"}>
                            <Text as={"strong"} whiteSpace={"nowrap"}>자유형 자산 요약: </Text> {/* tunay */}
                            <Input onChange={(e) => setEarnings(Number(e.target.value))} />
                        </Stack>
                        <Button w={"fit-content"} colorScheme="green" onClick={handleUpdateEarnings} isLoading={isLoading} isDisabled={!(user.tronAddress || user.ethAddress)}>업데이트</Button>
                    </Stack>
                    <Stack align={"flex-end"} gap={1} mt={2}>
                        <Stack w={"100%"} direction={"row"} justify={"flex-start"} align={"center"}>
                            <Text as={"strong"} whiteSpace={"nowrap"}>고정형 자산 요약: </Text> {/* fake */}
                            <Input onChange={(e) => setEarnings2(Number(e.target.value))} />
                        </Stack>
                        <Button w={"fit-content"} colorScheme="green" onClick={handleUpdateEarnings2} isLoading={isLoading2} isDisabled={!(user.tronAddress || user.ethAddress)}>업데이트</Button>
                    </Stack>
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