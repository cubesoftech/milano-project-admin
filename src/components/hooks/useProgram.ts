import { useEffect, useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    getAssociatedTokenAddress,
    createApproveInstruction,
    TOKEN_PROGRAM_ID,
    getAccount,
    TokenAccountNotFoundError,
    TokenInvalidAccountOwnerError,
    createAssociatedTokenAccountInstruction,
    createTransferInstruction
} from "@solana/spl-token";
import { useToast } from "@chakra-ui/react";
import { mtsAxios } from "@/utils/axios_instance";

interface UseProgramReturn {
    approveAllowance: (delegate: string, amount: number) => Promise<void>;
    ensureAccount: () => Promise<void>;
    ata: PublicKey | null;
    creatingAta: boolean;
    transferFrom: (from: string, amount: number) => Promise<void>;
}

export function useProgram(): UseProgramReturn {
    const { publicKey, connected, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const [ata, setAta] = useState<PublicKey | null>(null);
    const [creatingAta, setCreatingAta] = useState<boolean>(false);
    const toast = useToast();

    const ensureAccount = async () => {
        if (!publicKey || !connection) {
            console.error("Wallet not connected");
            return;
        }

        if (creatingAta) {
            console.log("Already creating ATA, skipping...");
            return;
        }

        setCreatingAta(true);
        // USDT Mint Address
        const usdtMintAddress = new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");

        const ataAddress = await getAssociatedTokenAddress(
            usdtMintAddress,
            publicKey,
            false,
            TOKEN_PROGRAM_ID
        );

        try {
            await getAccount(connection, ataAddress);
            console.log("Associated token account exists:", ataAddress.toBase58());
        } catch (error: unknown) {
            if (error instanceof TokenAccountNotFoundError || error instanceof TokenInvalidAccountOwnerError) {
                try {
                    const transaction = new anchor.web3.Transaction().add(
                        createAssociatedTokenAccountInstruction(
                            publicKey,
                            ataAddress,
                            publicKey,
                            usdtMintAddress,
                            TOKEN_PROGRAM_ID
                        )
                    );

                    console.log("Creating associated token account:", ataAddress.toBase58());
                    await sendTransaction(transaction, connection);
                } catch (error: any) {
                    // Handle transaction errors
                    let message = error.message

                    console.error("Error creating associated token account:", message);
                    if (message === 'User disapproved requested methods') {
                        toast({
                            title: "Transaction Cancelled",
                            description: "You cancelled the transaction.",
                            status: "warning",
                            duration: 5000,
                            isClosable: true,
                        });
                        return;
                    }

                    toast({
                        title: "Transaction Error",
                        description: "Failed to create associated token account. Please ensure you have enough SOL to pay for the transaction.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                    return;
                }
            } else {
                console.error("Error checking associated token account:", error);
                return;
            }
        } finally {
            setCreatingAta(false);
        }

        setAta(ataAddress);
    };

    const approveAllowance = async (delegate: string, amount: number) => {
        if (!publicKey || !connection || !ata) {
            console.error("Wallet not connected or ATA not available");
            return;
        }

        const delegateAmount = amount * Math.pow(10, 6); // USDT has 6 decimals
        const delegatedAccount = new PublicKey(delegate);

        // Create approve instruction like in ERC20
        const transaction = new anchor.web3.Transaction().add(
            createApproveInstruction(
                ata,
                delegatedAccount,
                publicKey,
                delegateAmount,
                [],
                TOKEN_PROGRAM_ID
            )
        );

        console.log("Approving allowance for:", delegatedAccount.toBase58());
        await sendTransaction(transaction, connection);
    };

    const transferFrom = async (from: string, amount: number) => {
        if (!publicKey || !connection || !ata) {
            console.error("Wallet not connected or ATA not available");
            return;
        }

        const fromAccount = new PublicKey(from); // Owner's account\
        const usdtMintAddress = new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");
        const ataFromAccount = await getAssociatedTokenAddress(
            usdtMintAddress,
            fromAccount,
            false,
            TOKEN_PROGRAM_ID
        );
        const delegateAccount = publicKey; // Delegated account (current wallet)
        const transferAmount = amount * Math.pow(10, 6); // USDT has 6 decimals
        if (!ataFromAccount || !delegateAccount) {
            console.error("Invalid ATA or delegate account");
            return;
        }

        try {
            const transaction = new anchor.web3.Transaction().add(
                createTransferInstruction(
                    ataFromAccount,
                    ata,
                    delegateAccount,
                    amount * Math.pow(10, 6), // Convert to smallest unit
                )
            );

            console.log(`Transferring ${amount} tokens from ${from} to ${ata.toBase58()}`);
            await sendTransaction(transaction, connection);
        } catch (error) {
            console.error("Error during transfer:", error);
        }
    };

    return {
        approveAllowance,
        ensureAccount,
        ata,
        creatingAta,
        transferFrom,
    };
}