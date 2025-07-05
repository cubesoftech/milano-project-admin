import React from 'react';
import { Alert, AlertIcon, Stack, chakra, Heading, Text } from '@chakra-ui/react';
import { WalletButton } from './WalletButton';
import { usePrincipalWallet } from '@/utils/storage';
import { useWallet } from '@solana/wallet-adapter-react';

import Image from 'next/image';
import logo from "@/assets/milano_logo-nobg.png"

// Utility to shorten a Solana address
function shortenAddress(address: string) {
    if (!address) return '';
    return address.slice(0, 5) + '...' + address.slice(-4);
}

export default function Login() {
    const { principal } = usePrincipalWallet()
    const { publicKey } = useWallet();

    const isNotPrincipal = (publicKey && principal && publicKey.toBase58() !== principal)

    return (
        <Stack w={"100%"} h={"100vh"} justify={"center"} align={"center"} bgColor={"blue.900"} gap={5}>
            <Image src={logo} alt='Logo' height={100} />
            <WalletButton />
            {
                isNotPrincipal && (
                    <Alert
                        w={'fit-content'}
                        status="warning"
                        textAlign="center"
                        position={"absolute"} bottom={10}
                        flexDirection={"column"} justifyContent={"center"} alignContent={"center"} gap={2}
                    >
                        <AlertIcon boxSize={10} />
                        <Stack justify={"center"} align={"center"} gap={0}>
                            <Heading size={"md"}>Please connect the correct wallet.</Heading>
                            <Text>
                                Wallet address ({shortenAddress(publicKey.toBase58())}) doesn't match the principal address ({shortenAddress(principal)}).
                            </Text>
                        </Stack>
                    </Alert>
                )
            }
        </Stack>
    );
};