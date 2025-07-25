import React, { useState, useEffect, useRef } from "react";
import {
    useDisclosure,
    Stack, HStack, Flex, Box, Icon,
    Text, Button, Input,
    Table, Tbody, Td, Th, Thead, Tr,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Spinner,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import { Miners } from "@/utils/interface";
import { api } from "@/utils/api";

import { FaUser, FaRegUser } from "react-icons/fa";

import Tree from "rc-tree";
import "rc-tree/assets/index.css";

interface ReferrerTreeModalProps {
    isOpen: boolean;
    onClose: () => void;
    miner: Miners
}

const ReferrerTreeModal = ({ isOpen, onClose, miner }: ReferrerTreeModalProps) => {
    if (!miner.referredUsers || miner.referredUsers.length <= 0) {
        return;
    }

    const data = {
        name: miner.name,
        children: [
            // level1
            ...miner.referredUsers.map(l1 => {
                // check if level1 has referred user/s
                if (!l1.referredUsers || l1.referredUsers.length <= 0) {
                    return {
                        name: l1.name
                    }
                }

                return {
                    name: l1.name,
                    children: [
                        // level2
                        ...(l1.referredUsers ?? []).map(l2 => {
                            // check if level2 has referred user/s
                            if (!l2.referredUsers || l2.referredUsers.length <= 0) {
                                return {
                                    name: l2.name
                                }
                            }

                            return {
                                name: l2.name,
                                children: [
                                    // level3
                                    ...(l2.referredUsers ?? []).map(l3 => {
                                        // check if level3 has referred user/s
                                        if (!l3.referredUsers || l3.referredUsers.length <= 0) {
                                            return {
                                                name: l3.name
                                            }
                                        }

                                        return {
                                            name: l3.name,
                                            children: [
                                                // level4
                                                ...(l3.referredUsers ?? []).map(l4 => {
                                                    return {
                                                        name: l4.name,
                                                    }
                                                })
                                            ]
                                        }
                                    })
                                ]
                            }
                        })
                    ]
                }
            })
        ]
    }

    const data1 = {
        key: miner.id.toString(),
        title: miner.name,
        children: miner.referredUsers.map(l1 => ({
            // level1
            key: l1.id.toString(),
            title: l1.name,
            children: l1.referredUsers?.map(l2 => ({
                // level2
                key: l2.id.toString(),
                title: l2.name,
                children: l2.referredUsers?.map(l3 => ({
                    // level3
                    key: l3.id.toString(),
                    title: l3.name,
                    children: l3.referredUsers?.map(l4 => ({
                        // level4
                        key: l4.id.toString(),
                        title: l4.name,
                    }))
                }))
            }))
        }))
    }

    const data3 = [
        {
            key: miner.id.toString(),
            title: miner.name,
            icon: <Icon as={FaUser} />,
            children: miner.referredUsers.map(l1 => ({
                // level1
                key: `${miner.id}-${l1.id}`,
                title: l1.name,
                icon: !l1.referredUsers || (l1.referredUsers?.length <= 0) ? <Icon as={FaRegUser} /> : <Icon as={FaUser} />,
                children: l1.referredUsers?.map(l2 => ({

                    // level2
                    key: `${l1.id}-${l2.id}`,
                    title: l2.name,
                    icon: !l2.referredUsers || (l2.referredUsers?.length <= 0) ? <Icon as={FaRegUser} /> : <Icon as={FaUser} />,
                    children: l2.referredUsers?.map(l3 => ({

                        // level3
                        key: `${l2.id}-${l3.id}`,
                        title: l3.name,
                        icon: !l3.referredUsers || (l3.referredUsers?.length <= 0) ? <Icon as={FaRegUser} /> : <Icon as={FaUser} />,
                        children: l3.referredUsers?.map(l4 => ({

                            // level4
                            key: `${l3.id}-${l4.id}`,
                            title: l4.name,
                            icon: <Icon as={FaRegUser} />,
                        }))
                    }))
                }))
            }))
        }
    ]
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Tree
                        treeData={data3}
                        defaultExpandAll
                        selectable={false}
                        icon={null}
                        height={400}
                        itemHeight={40}
                        switcherIcon={null}
                        showLine
                        style={{
                            border: "none"
                        }}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default function Referral() {
    const treeContainer = useRef<HTMLDivElement>(null);

    const modal = useDisclosure()
    const { setTItle } = useTitleStore();

    useEffect(() => {
        setTItle("추천인 관리")
    }, []);

    const size = 25


    const [data, setData] = useState<Miners[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectedMiner, setSelectedMiner] = useState<Miners | null>(null);

    const [refetch, setRefetch] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!refetch) return;

        const fetch = async () => {
            setIsLoading(true)
            try {
                const { data, pagination } = await api.referrer({ limit: size.toString(), page: page.toString() })
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
                const { data, pagination } = await api.referrer({ limit: size.toString(), page: page.toString() })
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
                    const { data, pagination } = await api.referrer({ limit: size.toString(), page: page.toString() })
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
                const { data, pagination } = await api.referrer({ limit: size.toString(), page: page.toString(), search })
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

    const handleSetSelectedMiner = (arg: Miners) => {
        setSelectedMiner(arg)
        modal.onOpen()
    }
    const handleCloseModal = () => {
        setSelectedMiner(null)
        setRefetch(true)
    }

    return (
        <Stack w="full" p={6} spacing={6} >
            <Text fontSize="2xl" fontWeight="bold">🔗 추천인 관리</Text>

            {
                selectedMiner && <ReferrerTreeModal isOpen={modal.isOpen} onClose={handleCloseModal} miner={selectedMiner} />
            }

            <Stack direction={"row"} justify={"flex-start"} align={"center"}>
                <Input
                    w={"fit-content"}
                    placeholder="아이디 또는 이름 검색"
                    bgColor={"white"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Stack>

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
                    <Box overflowX="auto" bg="white" rounded="xl" shadow="md">
                        <Table size="sm">
                            <Thead bg="oklch(92.76% 0.0058 264.53)">
                                <Tr>
                                    <Th>회원 ID</Th>
                                    <Th>이름</Th>
                                    <Th>추천 수</Th>
                                    {/* <Th>누적 보너스</Th> */}
                                    <Th>추천 트리</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data.map(miner => {

                                        if (!miner.referredUsers || miner.referredUsers.length <= 0) {
                                            return;
                                        }

                                        return (
                                            <Tr key={miner.id}>
                                                <Td>{miner.id}</Td>
                                                <Td>{miner.name}</Td>
                                                <Td>{miner.referredUsers.length}</Td>
                                                {/* <Td>₩{user.bonus.toLocaleString()}</Td> */}
                                                <Td>
                                                    <Button
                                                        size="xs"
                                                        bg="blue.600"
                                                        color="white"
                                                        _hover={{ bg: "blue.700" }}
                                                        onClick={() => handleSetSelectedMiner(miner)}
                                                    >
                                                        보기
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        )
                                    })
                                }
                            </Tbody>
                        </Table>
                    </Box>
                )
            }
            <Stack w={"100%"} direction={"row"} justify={"space-between"} align={"center"}>
                <Button colorScheme="blue" isDisabled={page === 1} isLoading={isLoading} onClick={() => setPage(prev => (prev - 1))}>Prev</Button>
                <Text>{page} / {Math.ceil(total / size)}</Text>
                <Button colorScheme="blue" isDisabled={page === Math.ceil(total / size)} isLoading={isLoading} onClick={() => setPage(prev => (prev + 1))}>Next</Button>
            </Stack>
        </Stack>
    );
};