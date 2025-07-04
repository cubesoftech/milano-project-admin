import { mtsAxios } from "@/utils/axios_instance";
import { Alert, AlertIcon, Button, HStack, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
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

const MinerRow: React.FC<MinerRowProps> = ({ miner, transferFrom, ata }) => {
    const { address, approvedBalance, createdAt, id, realBalance, referrenceBalance } = miner;
    const humanReadableDate =
        new Date(createdAt).toLocaleDateString() +
        " " +
        new Date(createdAt).toLocaleTimeString();

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

    const { mutate } = useSwr('miners', () => mtsAxios.get_miners(params), {
        onSuccess: (data) => {
            setMiners(data.data);
        }
    });

    const { transferFrom, ata, ensureAccount } = useProgram();

    useEffect(() => {
        mutate();
    }, [params]);

    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} spacing={5} p={10}>
            {
                ata === null &&
                <HStack
                    w={'90%'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    spacing={5}
                >
                    <Alert w={'50%'} status='warning'>
                        <AlertIcon />
                        No Associated Token Account found for your wallet. Please create one to proceed.
                    </Alert>
                    <Button
                        colorScheme='blue'
                        onClick={async () => {
                            await ensureAccount();
                            mutate();
                        }}
                        isLoading={transferFrom === null}
                    >
                        Create ATA
                    </Button>
                </HStack>
            }
            {
                ata !== null &&
                <Alert status='success' w={'90%'}>
                    <AlertIcon />
                    Associated Token Account found: {ata.toBase58()}
                </Alert>
            }
            <HStack w={'90%'} justifyContent={'space-between'}>
                <WalletButton />
            </HStack>
            <TableContainer borderWidth={1} w={'90%'} m={10}>
                <Table variant='striped'>
                    <Thead>
                        <Tr>
                            {headers.map((header, index) => (
                                <Th key={index} isNumeric={index === 2 || index === 3 || index === 4}>
                                    {header}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
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
            <HStack w={'90%'} justifyContent={'space-between'}>
                <Button
                    onClick={() => {
                        setParams({
                            ...params,
                            page: params.page - 1
                        });
                    }}
                    isDisabled={params.page <= 1}
                >
                    Previous
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
            </HStack>
        </Stack>
    );
}

