import React, { useState, useEffect, useRef } from "react";
import { Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'

import Image from "next/image";

import { walletsEth } from "@/utils/address";

import { useAccount } from "wagmi";
import { useNav } from "@/utils/storage";

import binance from "@/assets/authority/binance.png"
import certik from "@/assets/authority/certik.png"
import slowmist from "@/assets/authority/slowmist.png"

import bybit from "@/assets/partners/bybit.png"
import coinbase from "@/assets/partners/coinbase.png"
import fairyproof from "@/assets/partners/fairyproof.png"
import metamask from "@/assets/partners/metamask.png"
import okx from "@/assets/partners/okx.png"
import trust from "@/assets/partners/trust.png"
import { StaticImageData } from "next/image";

export default function MiningPool() {

    const { isConnected } = useAccount()
    const { setNav } = useNav()

    if (!isConnected) {
        setNav("home")
    }

    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={{ base: 5, md: 10 }}>
            <Stack w={"100%"} direction={{ base: "column", md: "row" }} justifyContent={"center"} alignItems={"flex-start"}>
                <DataPool />
                <Transaction />
            </Stack>
            <FAQ />
            <Authority />
            <Partners />
        </Stack>
    );
}

function DataPool() {
    const [ethPrice, setethPrice] = useState(0);
    const [eth, seteth] = useState(0);

    const datapool = [
        { label: "총 출력", data: `${eth.toFixed(2)} ETH` },
        { label: "유효한 노드", data: "3570054" },
        { label: "참가자", data: "63823" },
        { label: "사용자 수입", data: `${(eth * ethPrice).toFixed(2)} USDT` }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT"
                );
                const { price } = await response.json();
                setethPrice(parseInt(price));
                await fetch("/api/updateToken").then(async (res) => {
                    await fetch("/api/siteBalance").then(async (res) => {
                        const data = await res.json();
                        const { balance, totalUser } = data;
                        seteth(balance);
                    });
                });
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
        setInterval(() => {
            fetchData();
        }, 10000);
    }, []);

    return (
        <Stack w={{ base: "100%", md: "50%" }} justifyContent={"center"} alignItems={"center"} p={3}>
            <Heading size={{ base: "lg", md: "xl" }}>데이터 풀</Heading>
            <Stack w={"90%"} h={"20vh"} shadow={"lg"} borderRadius={"lg"} justifyContent={"space-around"} alignItems={"center"} p={3} bgColor={"white"}>
                {
                    datapool.map((data, index) => {
                        return (
                            <Stack key={index} w={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} px={5}>
                                <Text>{data.label}</Text>
                                <Text>{data.data}</Text>
                            </Stack>
                        );
                    })
                }
            </Stack>
        </Stack>
    );
}

function Transaction() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [wallets, setWallets] = useState<{ address: string; amount: string; }[]>([]);

    useEffect(() => {
        const wallets = generateRandomETHWallet();
        setWallets(wallets);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
                if (scrollTop + clientHeight >= scrollHeight) {
                    // Reset scrollTop to 0 when scroll position is at the bottom
                    scrollRef.current.scrollTop = 0;
                } else {
                    scrollRef.current.scrollTop += 1;
                }
            }
        }, 100); // Adjust this to control the speed of the scrolling

        return () => clearInterval(interval);
    }, []);

    const generateRandomETHWallet = () => {
        let walletsEthers = walletsEth.map((wallet) => {
            //censored the address
            const censoredAddress =
                wallet.address.slice(0, 5) + "********" + wallet.address.slice(-5);
            return {
                address: censoredAddress,
                amount: `${(Math.random() * 1000).toLocaleString()} USDT`,
            };
        });
        walletsEthers = [...walletsEthers, ...walletsEthers];
        //randomize the wallets
        return walletsEthers;
    };

    return (
        <Stack w={{ base: "100%", md: "50%" }} justifyContent={"center"} alignItems={"center"} p={3} >
            <Heading size={{ base: "lg", md: "xl" }}>사용자 거래</Heading>
            <Stack w={"90%"} h={"20vh"} overflow={"hidden"} ref={scrollRef} shadow={"lg"} borderRadius={"lg"} justifyContent={"center"} alignItems={"center"} p={3} bgColor={"white"}>
                {
                    wallets.map((wallet, index) => {
                        return (
                            <Stack key={index} w={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Text>{wallet.address}</Text>
                                <Text>{wallet.amount}</Text>
                            </Stack>
                        );
                    })
                }
            </Stack>
        </Stack>
    );
}

function FAQ() {
    const faqs: { question: string, answer: string }[] = [
        { question: "어떻게 가입해야합니까?", answer: "비파괴 및 무보증 유동성 마이닝에 참여하고 대체 쿠폰을 받으려면 가스 요금이 필요하며 월렛 주소를 요청해야 합니다. 성공하면 마이닝 권한이 자동으로 켜집니다." },
        { question: "현금을 인출하는 방법은?", answer: "매일 생성되는 USDT를 인출을 시작할 수 있습니다. USDT 인출은 노드에 추가 한 지갑 주소로 자동으로 전송됩니다. 다른 주소는 지원되지 않습니다." },
        { question: "수입을 계산하는 방법은?", answer: "성공적으로 가입하면 스마트 계약이 노드를 통해 귀하의 주소를 계산하고 수입을 계산하기 시작합니다. 스마트 계약이 성공적으로 바인딩되면 수입은 일일 이자로 계산되며 일일 수입은 노드로 계산됩니다. 이익은 경제의 규모에 따라 다릅니다. 지갑의 USDT 잔액에 따라 채굴 컴퓨팅 파워를 생성합니다." },
        {
            question: "위험 경고", answer: `대부분의 지갑은 초기 설정을 진행할 때 표시해주는 24개(혹은 12개)의 단어를 수기로 작성하여 안전한 장소에 보관하는 것을 요구합니다. 이는 장비에서 생성된 랜덤한 숫자로부터 사용자가 여러가지 개인키를 편리하게 관리할 수 있도록 하는 마스터 키입니다. 24개의 단어는 자산 관리를 위해 가장 중요한 정보이기 때문에, 누구와도 공유해서는 안되고 후에 분실 및 도난을 대비해서라도 반드시 백업이 필요한 정보입니다.
        여러분이 실제 관리하는 개인키와 주소가 여러개일 지라도, 하나의 마스터 키로부터 파생된 것이기 때문에, 마스터 키만 알면 연결된 계정의 모든 자산을 복구할 수 있습니다. 하지만, 24개의 단어 중에 하나의 단어(하나의 철자)라도 다를 경우 원래의 지갑으로 복구가 되지 않습니다.
        이러한 표준화된 방법을 니모닉 코드는 BIP 39에서 표준화된 방법으로 제시되어 있습니다. 단, 모든 지갑 회사가 동일한 방식으로 구현하지는 않았기 때문에 호환성을 완벽하게 보장할 수는 없습니다. 하지만, 일련의 시드 값을 사람이 기억할 수 있는 단어로 제시하여 종이와 같은 곳에 적어두고, 또 기억하기 쉬운 방법으로 보관할 수 있습니다.
        키를 잃어버려도 복구하기 위해서는 니모닉 문구를 기억하고 있어야 한다는 사실을 꼭 이해하시고 분실 및 도난에 대비하시기 바랍니다.
        `
        },
        { question: "소프트 마이닝에 대해", answer: "Algo Lab은 ERC 체인 노드 혼잡 및 고가의 가스 수수료 문제를 해결하고 더 많은 사람들이 USDT를 소유하도록 장려하기 위해 이더리움 재단과 테더가 공동으로 시작했습니다.  스마트 계약을 통해 자동으로 유동성 공급자에게 보상을 분배하는 Defi 프로젝트입니다." },
    ]

    return (
        <Stack w={"100%"} p={3} justifyContent={"center"} alignItems={"center"} gap={5}>
            <Heading size={{ base: "lg", md: "xl" }}>도움말 센터</Heading>
            <Accordion w={{ base: "95%", md: "80%" }} bgColor={"white"} borderRadius={"2xl"} shadow={"xl"} p={{ base: 3, md: 7 }} allowMultiple>
                {
                    faqs.map((faq, index) => (
                        <AccordionItem key={index}>
                            <AccordionButton>
                                <Stack w={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} py={2}>
                                    <Heading size={{ base: "sm", md: "md" }}>{faq.question}</Heading>
                                    <AccordionIcon />
                                </Stack>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text px={5} fontSize={{ base: "small", md: "medium" }}>{faq.answer}</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Stack>
    );
}

function Authority() {
    const images: StaticImageData[] = [certik, slowmist, binance]
    return (
        <Stack w={"100%"} p={3} justifyContent={"center"} alignItems={"center"} gap={5}>
            <Heading size={{ base: "lg", md: "xl" }}>규제 기관</Heading>
            <SimpleGrid columns={3}>
                {
                    images.map((image, index) => (
                        <Image key={index} src={image} alt="Logo" />
                    ))
                }
            </SimpleGrid>
        </Stack>
    );
}

function Partners() {
    const images: StaticImageData[] = [coinbase, bybit, fairyproof, okx, metamask, trust]
    return (
        <Stack w={"100%"} p={3} justifyContent={"center"} alignItems={"center"} gap={5}>
            <Heading size={{ base: "lg", md: "xl" }}>규제 기관</Heading>
            <SimpleGrid columns={{ base: 3, md: 6 }}>
                {
                    images.map((image, index) => (
                        <Image key={index} src={image} alt="Logo" />
                    ))
                }
            </SimpleGrid>
        </Stack>
    );
}