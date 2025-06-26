import React, { memo, useState, ChangeEvent } from "react";
import {
    useDisclosure,
    Stack, Button, Flex, VStack, HStack, Input, Checkbox, Text,
    FormControl, FormLabel,
    TableContainer, Table, Thead, Tbody, Tr, Th, Td,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
} from "@chakra-ui/react";
import UseToastHooks from "@/hooks/UseToastHooks";

import axios from "axios";
import useSWR, { KeyedMutator, useSWRConfig } from "swr";
import { create } from "zustand";
import { admin } from "@/generated/prisma";

const fetcher = (url: string) => axios.get<any[]>(url).then((res) => res.data);

type CheckboxStateAgent = {
    selectedAgent: string[];
    isAllSelectedAgent: boolean;
    setAllSelectedAgent: (value: boolean) => void;
    setSelectedAgent: (value: string[]) => void;
};
export const useSelectedCheckboxAgent = create<CheckboxStateAgent>((set) => ({
    selectedAgent: [],
    isAllSelectedAgent: false,
    setAllSelectedAgent: (value: boolean) => set({ isAllSelectedAgent: value }),
    setSelectedAgent: (value: string[]) => set({ selectedAgent: value }),
}));

function ModalAddAgent({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const url = "/api/createAgent";


    const toast = UseToastHooks();
    const { mutate } = useSWRConfig();

    const [user, setUser] = useState({
        userId: "",
        password: "",
        domain: "",
    });

    const handleSave = async () => {
        if (user.userId.trim() === "" || user.password.trim() === "" || user.domain.trim() === "") {
            toast.error("Please fill in all fields.")
            return;
        }
        const domain = user.domain;
        if (!domain.includes(".")) {
            toast.error("Invalid domain.")
            return;
        }
        try {
            const response = await axios.post(url, data);
            mutate("/api/getAllAgent");
            onClose();
            toast.success(response.data.message)
            setUser({ password: "", domain: "", userId: "" });
        } catch (error) {
            toast.error("Failed to update user.")
        }
    };

    const data = {
        email: user.userId,
        password: user.password,
        domain: user.domain,
    };

    const handleUserIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, userId: event.target.value });
    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: event.target.value });
    };
    const handleDomainChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUser({ ...user, domain: value });
    };

    return (
        <Modal isOpen={isOpen} size={"lg"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add New Agent</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <FormControl id="userId">
                            <FormLabel>Email</FormLabel>
                            <Input
                                onChange={handleUserIdChange}
                                value={user.userId}
                                type="email"
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                onChange={handlePasswordChange}
                                value={user.password}
                                type="text"
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Website</FormLabel>
                            <Input
                                onChange={handleDomainChange}
                                value={user.domain}
                                type="text"
                            />
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSave} colorScheme="purple" mr={3}>
                        Save New Agent
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
const MinerRow = ({
    miner,
    mutate,
}: {
    miner: any;
    mutate: KeyedMutator<any[]>;
}) => {
    let {
        handle,
        balances,
        commision,
        id,
        isSuper,
        totalMiners,
        commissionReceived: comReceived,
    } = miner;

    const [isEditingCommission, setIsEditingCommission] = useState(false);
    const [commission, setCommission] = useState(miner.commision);
    const [email, setEmail] = useState(miner.email);
    const [password, setPassword] = useState(miner.password);
    const [commissionReceived, setCommissionReceived] = useState(
        comReceived ? comReceived : 0
    );
    const {
        isAllSelectedAgent,
        selectedAgent,
        setSelectedAgent,
    } = useSelectedCheckboxAgent();

    const handleEditCommission = () => {
        setIsEditingCommission(true);
    };

    const handleSaveCommission = async () => {

        const url = "/api/editAdmin";
        try {
            await axios.post(url, {});
            mutate();
        } catch (error) { }

        setIsEditingCommission(false);
    };

    const handleCheckbox = (e: boolean) => {
        if (e) {
            selectedAgent.push(email);
        } else {
            const index = selectedAgent.indexOf(email);
            selectedAgent.splice(index, 1);
        }
        setSelectedAgent(selectedAgent);
    };

    return (
        <Tr>
            <Td>
                <Checkbox
                    isChecked={
                        isAllSelectedAgent
                            ? true
                            : selectedAgent.includes(email)
                                ? true
                                : false
                    }
                    onChange={(e) => handleCheckbox(e.target.checked)}
                    size={"sm"}
                />
            </Td>
            <Td fontSize={"sm"}>
                {
                    isEditingCommission ? (
                        <Input
                            size="sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    ) : (
                        miner.email
                    )
                }
            </Td>
            <Td fontSize={"sm"}>
                {
                    isEditingCommission ? (
                        <Input
                            size="sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    ) : (
                        miner.password
                    )
                }
            </Td>
            <Td fontSize={"sm"}>{handle}</Td>
            <Td fontSize={"sm"}>{miner.totalMiners}</Td>
            <Td fontSize={"sm"}>
                {
                    isEditingCommission ? (
                        <Input
                            size="sm"
                            type="number"
                            value={commission}
                            onChange={(e) => setCommission(parseFloat(e.target.value))}
                        />
                    ) : (
                        `${commission} %`
                    )
                }
            </Td>
            <Td fontSize={"sm"}>
                <VStack>
                    {
                        balances.map((bal: any) => {
                            return <Text>{`${bal.referencebalance} ${bal.symbol}`}</Text>;
                        })
                    }
                </VStack>
            </Td>
            <Td fontSize={"sm"}>
                <VStack>
                    {
                        balances.map((bal: any) => {
                            console.log(bal, "bal");
                            return <Text>{`${bal.convertedBalance} ${bal.symbol}`}</Text>;
                        })
                    }
                </VStack>
            </Td>
            <Td fontSize={"sm"}>
                {
                    isEditingCommission ? (
                        <Input
                            size="sm"
                            type="number"
                            value={commissionReceived}
                            onChange={(e) => setCommissionReceived(parseFloat(e.target.value))}
                        />
                    ) : (
                        `${commissionReceived}`
                    )
                }
                <VStack>
                    {
                        balances.map((bal: any) => {
                            console.log(bal, "bal");
                            return <Text>{`${bal.convertedBalance} ${bal.symbol}`}</Text>;
                        })
                    }
                </VStack>
            </Td>
            <Td fontSize={"sm"}>
                <HStack>
                    <Button
                        minW={100}
                        colorScheme={isEditingCommission ? "blue" : "green"}
                        variant={"outline"}
                        onClick={
                            isEditingCommission ? handleSaveCommission : handleEditCommission
                        }
                    >
                        {
                            isEditingCommission ? (
                                "저장"
                            ) : (
                                "편집"
                            )
                        }
                    </Button>
                </HStack>
            </Td>
        </Tr>
    );
};

function OldAgentList() {
    const url = "/api/getAllAgent";
    const tableHeaders = ["이메일", "암호", "총판 도메인", "총 회원", "수수료율", "회원 보유금", "에이전트 수수료", "수수료 수입", "수정",]

    const { data, error, mutate } = useSWR(url, fetcher);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { selectedAgent, setSelectedAgent } = useSelectedCheckboxAgent();
    const toast = UseToastHooks();

    const handleDeleteCheckBox = async () => {
        const url = "/api/deleteAllAgents";
        const payload = {
            agents: selectedAgent,
        };
        await axios.post(url, payload);
        toast.success("Deleted")
        setSelectedAgent([]);
        mutate();
    };

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <Stack
            height="full"
            w={"100%"}
            rounded={"lg"}
            p={3}
        >
            <ModalAddAgent isOpen={isOpen} onClose={onClose} />
            <HStack w={"100%"} justify={"flex-end"} spacing={4}>
                <Button colorScheme="green" onClick={onOpen}>
                    에이전트 추가
                </Button>
                <Button
                    isDisabled={selectedAgent.length === 0}
                    colorScheme="red"
                    onClick={handleDeleteCheckBox}
                >
                    선택한 에이전트 삭제
                </Button>
            </HStack>
            <TableContainer w={"100%"} h={"full"} rounded={"md"} shadow={"md"} bgColor={"white"}>
                <Table variant="simple" size={"md"}>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            {
                                tableHeaders.map(header => (
                                    <Th>{header}</Th>
                                ))
                            }
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map((miner, key) => (
                                <MinerRow key={key} miner={miner} mutate={mutate} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
}
export default memo(OldAgentList)