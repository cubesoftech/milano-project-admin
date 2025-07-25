import React, { useState, useEffect, useRef } from "react";
import {
    useDisclosure,
    Stack, HStack, Flex, Box,
    Text, Button, Input,
    Table, Tbody, Td, Th, Thead, Tr,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Spinner,
} from "@chakra-ui/react";
import { useTitleStore } from "@/utils/storage";
import { Miners } from "@/utils/interface";
import { api } from "@/utils/api";
import Tree from "react-d3-tree"

interface ReferrerTreeModalProps {
    isOpen: boolean;
    onClose: () => void;
    miner: Miners
}

const ReferrerTreeModal = ({ isOpen, onClose, miner }: ReferrerTreeModalProps) => {
    if (!miner.referredUsers || miner.referredUsers.length <= 0) {
        return;
    }

    const treeContainer = useRef<HTMLDivElement>(null);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (treeContainer.current) {
            const dimensions = treeContainer.current.getBoundingClientRect();
            setTranslate({
                x: dimensions.width / 2,
                y: 100 // you can adjust vertical spacing
            });
        }
    }, [isOpen]); // update when modal opens


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
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
            <ModalOverlay />
            <ModalContent h={"90vh"}>
                <ModalBody>
                    <Tree
                        data={data}
                        orientation="vertical"
                        pathFunc={"step"}
                        nodeSize={{ x: 200, y: 200 }}
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