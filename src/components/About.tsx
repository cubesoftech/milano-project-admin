import React from "react";
import { Stack, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

import cubes from "@/assets/cubes.png"
import trust from "@/assets/trustwallet.png"
import binance from "@/assets/binance.png"

export default function About() {
    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={10}>
            <Intro1 />
            <Wallets />
            <Intro2 />
        </Stack>
    );
}

function Intro1() {
    return (
        <Stack
            w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} py={{ base: 8, md: 16 }} justifyContent={"center"} alignItems={"center"} gap={{ base: 3, md: 5 }}
            bgImage={`url(${cubes.src})`}
        >
            <Heading size={{ base: "lg", md: "xl" }}>Monster Lab 기업 소개</Heading>
            <Text w={{ base: "90%", md: "70%" }} textAlign={"center"} fontSize={{ base: "medium", md: "large" }} fontWeight={"medium"} letterSpacing={0.5}>Monster Lab은 블록체인 기술을 기반으로 한 탈중앙화 금융 서비스를 통해 더 많은 사용자에게 자유롭고 안전한 자산 관리 환경을 제공합니다. 아래에서 저희 회사의 비전과 연혁, 주요 인물 및 성장 전략을 확인해보세요.</Text>
        </Stack>
    );
}

export function Wallets() {
    const size = useBreakpointValue(
        {
            base: 35,
            md: 70
        }
    )
    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} gap={8} justifyContent={"center"} alignItems={"center"}>
            <Stack direction={{ base: "column", md: "row" }} justifyContent={"center"} alignItems={"center"} gap={{ base: 1, md: 10 }}>
                <Image src={trust} alt="Trust Wallet" height={size} />
                <Image src={binance} alt="Binance" height={size} />
            </Stack>
        </Stack>
    );
}

function Intro2() {

    const datas: { title: string, content: string[] }[] = [
        {
            title: "📌 Monster Lab의 비전",
            content: [
                "Monster Lab은 글로벌 블록체인 기반 자산관리 시장을 선도하는 것을 목표로, 사용자에게 완전한 자산 통제권과 탈중앙화된 수익 인프라를 제공합니다."
            ]
        },
        {
            title: "👤 주요 임원진",
            content: [
                "이정훈 대표이사: 전 글로벌 핀테크 CTO, 15년 이상 금융공학 경력",
                "김소연 CFO: 前 대형 VC 심사역 출신, 암호화폐 재무 전문가",
                "장민석 CPO: 블록체인 UX 디자이너, UI 전략 총괄",
            ]
        },
        {
            title: "📆 회사 연혁",
            content: [
                "2021.03: Monster Lab 설립",
                "2022.01: 자체 지갑 기반 스테이킹 시스템 론칭",
                "2023.07: 스마트 노드 알고리즘 도입",
                "2024.05: 누적 사용자 20만명 돌파",
            ]
        },
        {
            title: "🚀 지향하는 성장 전략",
            content: [
                "Monster Lab은 기술 중심의 확장성과 글로벌 파트너십을 통해 탈중앙화 금융 생태계 구축에 기여합니다. AI와 블록체인 융합을 통해 더 정교한 투자 전략을 제공할 것입니다.",
            ]
        },
        {
            title: "📰 미디어 소개",
            content: [
                '“가장 주목받는 Web3 스타트업” - 블록미디어',
                '“탈중앙화 지갑 기반 수익화 시스템, 업계 최초 구현” - 코인서울',
                '“차세대 스테이킹 플랫폼, Monster Lab” - 디센터',
            ]
        },
    ]

    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} gap={8} justifyContent={"center"} alignItems={"center"}>
            <Heading size={{ base: "lg", md: "xl" }}>🏢 회사소개</Heading>
            <Stack w={"90%"} p={10} gap={8} borderRadius={"lg"} overflow={"hidden"} bgColor={"white"} justifyContent={"center"} alignItems={"center"}>
                {
                    datas.map((data, index) => (
                        <Stack key={index} w={{ base: "100%", md: "95%" }} justifyContent={"center"} alignItems={"center"} gap={5}>
                            <Heading size={{ base: "md", md: "xl" }}>{data.title}</Heading>
                            <Stack justifyContent={"center"} alignItems={"center"} gap={0}>
                                {
                                    data.content.map((content, idx) => (
                                        <Text key={idx} textAlign={"center"} fontWeight={"medium"} fontSize={{ base: "small", md: "large" }}>{content}</Text>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    );
}