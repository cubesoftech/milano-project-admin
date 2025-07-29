import React, { useState, useEffect } from "react";
import {
    Box, Button, Checkbox, Flex, HStack, Input, Select, Stack, Table, Tbody, Td, Text, Th, Thead, Tr,
} from "@chakra-ui/react";
import * as XLSX from "xlsx";
import { useTitleStore } from "@/utils/storage";
import { ActivityLog } from "@/utils/interface";
import { api } from "@/utils/api";

interface Log {
    id: string;
    ip: string;
    location: string;
    device: string;
    login: string;
    logout: string;
    anomaly: boolean;
}

export default function Logs() {
    const { setTItle } = useTitleStore();

    useEffect(() => {
        setTItle("로그 기록")
    }, []);

    const size = 25

    const [data, setData] = useState<ActivityLog[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const [refetch, setRefetch] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!refetch) return;

        const fetch = async () => {
            setIsLoading(true)
            try {
                const { data, pagination } = await api.activityLog({ limit: size.toString(), page: page.toString() })
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                console.log("Error on fetching referrer logs(refetch): ", e)
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
                const { data, pagination } = await api.activityLog({ limit: size.toString(), page: page.toString() })
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

    // get data on search change
    useEffect(() => {
        // fetch default when search is empty
        if (search.trim() === "") {
            const fetch = async () => {
                setIsLoading(true)
                try {
                    const { data, pagination } = await api.activityLog({ limit: size.toString(), page: page.toString() })
                    const { total } = pagination
                    setData(data)
                    setTotal(total)
                } catch (e: any) {
                    console.log("Error on fetching inquiry logs(refetch): ", e)
                } finally {
                    setIsLoading(false)
                }
            }
            fetch();
            return;
        }

        const fetch = async () => {
            setIsLoading(true)
            try {
                const { data, pagination } = await api.activityLog({ limit: size.toString(), page: page.toString(), search })
                const { total } = pagination
                setData(data)
                setTotal(total)
            } catch (e: any) {
                console.log("Error on fetching inquiry logs(refetch): ", e)
            } finally {
                setIsLoading(false)
            }
        }
        const debouncedFetch = setTimeout(fetch, 1000 * 2)
        return () => clearInterval(debouncedFetch)
    }, [search]);

    return (
        <Stack w="full" p={6} spacing={6} >
            <Flex justify="space-between" align="center">
                <Text fontSize="2xl" fontWeight="bold">🧾 접속 로그</Text>
            </Flex>

            <HStack spacing={2} flexWrap="wrap">
                <Input
                    placeholder="이름 / 전화번호 / IP 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </HStack>

            <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                <Table size="sm">
                    <Thead bg="oklch(92.76% 0.0058 264.53)">
                        <Tr>
                            <Th>ID</Th>
                            <Th>전화번호</Th>
                            <Th>이름</Th>
                            <Th>로그인 시간</Th>
                            <Th>IP 주소</Th>
                            <Th>디바이스</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map(log => (
                            <Tr key={log.id}>
                                <Td>{log.miners.id}</Td>
                                <Td>{log.miners.phoneNumber}</Td>
                                <Td>{log.miners.name}</Td>
                                <Td>{new Date(log.createdAt).toLocaleDateString()}</Td>
                                <Td>{log.ipAddress}</Td>
                                <Td>{log.device}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"}>
                <Button colorScheme="blue" isDisabled={page === 1} isLoading={isLoading} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                <Text>{page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
            </Stack>
        </Stack>
    );
};