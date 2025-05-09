import React, { useState, useEffect } from "react";
import { Stack, Button, Input, Textarea, Heading, Text } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Wallets } from "./About";

import axios from "axios"
import Toast from "./toast";

export default function Support() {
    return (
        <Stack w={"100%"} justifyContent={"flex-start"} alignItems={"center"} gap={10}>
            <Inquire />
            <ContantInfo />
            <FAQ />
            <Wallets />
        </Stack>
    );
}

function Inquire() {

    const toast = Toast()

    const [payload, setPayload] = useState({
        name: "",
        email: "",
        details: "",
    });

    const handleCreateInquiry = async () => {

        if (!payload.name || !payload.email || !payload.details) {
            toast.warning("Please provide complete information.")
        }

        try {
            const url = "/api/createInquiry"

            const res = await axios.post(url, {
                name: payload.name,
                email: payload.email,
                content: payload.details
            })

            if (res.status === 200) {
                toast.success("Success!")
            }

        } catch (e) {
            console.log("Error on creating inquiry: ", e)
        }
    }

    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} justifyContent={"center"} alignItems={"center"} gap={5}>
            <Heading size={{ base: "lg", md: "xl" }}>📨 고객 문의</Heading>
            <Stack w={{ base: "95%", md: "70%" }} borderRadius={"xl"} shadow={"xl"} bgColor={"white"} gap={5} overflow={"hidden"} p={{ base: 5, md: 10 }}>
                <Input
                    placeholder="이름" borderColor={"gray.400"}
                    _hover={{
                        borderColor: "gray.400"
                    }}
                    onChange={(e) => setPayload({ ...payload, name: e.target.value })}
                />
                <Input
                    placeholder="이메일" borderColor={"gray.400"}
                    _hover={{
                        borderColor: "gray.400"
                    }}
                    onChange={(e) => setPayload({ ...payload, email: e.target.value })}
                />
                <Textarea
                    placeholder="문의 내용" h={"15vh"} resize={"none"} borderColor={"gray.400"}
                    _hover={{
                        borderColor: "gray.400"
                    }}
                    onChange={(e) => setPayload({ ...payload, details: e.target.value })}
                />
                <Stack justifyContent={"center"} alignItems={"center"}>
                    <Button
                        size={{ base: "md", md: "lg" }} colorScheme="blue"
                        bgGradient={"linear(135deg, #007bff, #6610f2)"}
                        _hover={{
                            bgGradient: "linear(135deg, #007bff, #6610f2)"
                        }}
                        onClick={handleCreateInquiry}
                    >
                        보내기
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

function ContantInfo() {
    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} justifyContent={"center"} alignItems={"center"} gap={5}>
            <Heading size={{ base: "lg", md: "xl" }}>📞 대표번호: 010-1234-5678</Heading>
            <Text textAlign={"center"} fontSize={{ base: "small", md: "medium" }}>궁금하신 점이 있다면 언제든지 연락주시거나 아래 채널을 통해 문의해주세요.</Text>
        </Stack>
    );
}

function FAQ() {
    const faqs: { question: string, answer: string }[] = [
        { question: "Monster Lab의 스테이킹 수익률은 어떻게 계산되나요?", answer: "스마트컨트랙트를 통해 평균 보유량 기준으로 자동 계산됩니다." },
        { question: "스테이킹 중 입출금이 가능한가요?", answer: "네, 락업 기간 없이 자유롭게 입출금 가능합니다." },
        { question: "지갑은 어떤 것을 사용해야 하나요?", answer: "Trust Wallet, MetaMask 등 ERC20 호환 지갑 사용을 권장합니다." },
        { question: "스테이킹 수익은 언제 지급되나요?", answer: "24시간 주기로 자동 정산되어 지갑에 반영됩니다." },
        { question: "고객센터 운영 시간은 언제인가요?", answer: "평일 오전 9시부터 오후 6시까지 운영됩니다." },
    ]

    return (
        <Stack w={{ base: "100%", md: "60%" }} p={{ base: 2, md: 5 }} justifyContent={"center"} alignItems={"center"} gap={5}>
            <Heading size={{ base: "lg", md: "xl" }}>❓ 자주 묻는 질문</Heading>
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
    )
}