'use client'
import React, { useState, useEffect, memo } from "react";
import { Stack, Button, Heading, Divider, Link, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Pages } from "@/utils/interface";
import { useTitleStore, usePageStore, useUserStore, useAgencyStore, useTokenStore } from "@/utils/storage";
import { useSession, signOut } from "next-auth/react";

import Login from "./Login";

function Sidebar() {
    const menus: { name: string, path: Pages }[] = [
        { name: "📊 대시보드", path: "" },
        { name: "👥 회원 관리", path: "users" },
        { name: "📝 회원가입 관리", path: "signup" },
        // removed for jblock
        // { name: "💰 입금신청", path: "deposit" },
        { name: "💸 입금/출금 요청", path: "transactionRequest" },
        { name: "🏢 에이전시 관리", path: "agencies" },
        { name: "📦 블록딜 설정", path: "blockdeal" },
        { name: "📢 공지사항", path: "notice" },
        { name: "🪙 코인 지급/회수", path: "coinControl" },
        { name: "🧾 지급 로그 조회", path: "coinLog" },
        { name: "🧾 로그 관리", path: "logs" },
        { name: "🔗 추천인 관리", path: "referral" },
        { name: "💬 게시판/보드 관리", path: "boards" },
        { name: "📮 문의 관리", path: "inquiry" },
        { name: "📩 1:1 문의", path: "directInquiry" },
    ];

    const router = useRouter()
    const { setPage, page } = usePageStore()
    const { setUser } = useUserStore()
    const { selectAgency } = useAgencyStore()
    const { setAccessToken } = useTokenStore()

    const handleSignout = () => {
        setAccessToken(null)
        setPage("")
        router.push("/")
    }

    return (
        <Stack w={"auto%"} h={"full"} color={"white"} bgColor={"oklch(21% 0.034 264.665)"} align={"center"} justify={"flex-start"} p={5}>
            <Heading color={"oklch(78.9% 0.154 211.53)"}>J BLOCK</Heading>
            <Divider />
            <Stack w={"100%"} align={"flex-start"}>
                {
                    menus.map(({ name, path }) => {
                        if (path === "users") {
                            return (
                                <Button
                                    key={path} color={"white"} pr={10}
                                    bgColor={page === path ? "oklch(45% 0.085 224.283)" : "transparent"}
                                    _hover={{
                                        bgColor: "oklch(52% 0.105 223.128)",
                                    }}
                                    onClick={() => {
                                        setUser(null)
                                        setPage(path)
                                        router.push(`/${path}`);
                                    }}
                                >
                                    {name}
                                </Button>
                            );
                        }
                        if (path === "agencies") {
                            return (
                                <Button
                                    key={path} color={"white"} pr={10}
                                    bgColor={page === path ? "oklch(45% 0.085 224.283)" : "transparent"}
                                    _hover={{
                                        bgColor: "oklch(52% 0.105 223.128)",
                                    }}
                                    onClick={() => {
                                        selectAgency(null)
                                        setPage(path)
                                        router.push(`/${path}`);
                                    }}
                                >
                                    {name}
                                </Button>
                            );
                        }
                        return (
                            <Button
                                key={path} color={"white"} pr={10}
                                bgColor={page === path ? "oklch(45% 0.085 224.283)" : "transparent"}
                                _hover={{
                                    bgColor: "oklch(52% 0.105 223.128)",
                                }}
                                onClick={() => {
                                    setPage(path)
                                    router.push(`/${path}`);
                                }}
                            >
                                {name}
                            </Button>
                        )
                    })
                }
            </Stack>
            <Divider mt={"auto"} />
            <Stack w={"100%"} align={"flex-start"} color={"oklch(70.7% 0.022 261.325)"} gap={1}>
                <Text fontSize={"small"}>
                    관리자: <Box as="span" color={"white"}>admin001</Box>
                </Text>
                <Text fontSize={"small"}>
                    버전: <Box as="span" color={"white"}>M-soft v1.3.2</Box>
                </Text>
                <Text fontSize={"small"}>
                    서버: <Box as="span" color={"white"}>정상</Box>
                </Text>
                <Button
                    size={"sm"} bgColor={"transparent"} color={"white"} mx={"auto"}
                    _hover={{
                        bgColor: "transparent",
                        color: "oklch(70.4% 0.191 22.216)"
                    }}
                    onClick={handleSignout}
                >
                    로그아웃
                </Button>
            </Stack>
        </Stack>
    );
}
function Topbar() {
    const { title } = useTitleStore()
    const { setPage } = usePageStore()
    const { setAccessToken } = useTokenStore()

    const router = useRouter()

    const handleSignout = () => {
        setAccessToken(null);
        setPage("");
        router.push("/")
    }
    return (
        <Stack w={"100%"} shadow={"lg"} bgColor={"white"} direction={"row"} justify={"space-between"} align={"center"} px={5} py={3}>
            <Heading size={"md"}>{title}</Heading>
            <Button
                bgColor={"oklch(27.8% 0.033 256.848)"} color={"white"}
                _hover={{
                    bgColor: "oklch(37.3% 0.034 259.733)"
                }}
                onClick={handleSignout}
            >
                로그아웃
            </Button>
        </Stack>
    );
}

export default function Layout({ children }: any) {
    const { accessToken } = useTokenStore()

    if (!accessToken) {
        return <Login />
    }

    return (
        <Stack w={"100%"} h={"100vh"} bgColor={"white"} direction={"row"} gap={0}>
            <Sidebar />
            <Stack w={"100%"} h={"100vh"} overflow={"hidden"} justify={"flex-start"} align={"flex-start"} p={0} gap={0}>
                <Topbar />
                <Stack w={"100%"} h={"full"} p={2} overflowY={"auto"} bgColor={"oklch(96.7% 0.0029 264.54)"}>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    );
}