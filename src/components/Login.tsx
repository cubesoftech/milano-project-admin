import React from 'react';
import { Button, Box, Alert, AlertIcon, VStack } from '@chakra-ui/react';
import { WalletButton } from './WalletButton';
import { usePrincipalWallet } from '@/utils/storage';
import { useWallet } from '@solana/wallet-adapter-react';

const Login: React.FC = () => {
    const { principal } = usePrincipalWallet()
    const { publicKey } = useWallet();
    return (
        <VStack display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection={'column'}>
            <WalletButton />
            {(publicKey && principal && publicKey.toBase58() !== principal) && (
                <Alert w={'50%'} status="warning" mt={4} textAlign="center">
                    <AlertIcon />
                    Your wallet address ({publicKey.toBase58()}) does not match the registered principal address ({principal}). Please connect the correct wallet.
                </Alert>
            )}

        </VStack>
    );
};

export default Login;