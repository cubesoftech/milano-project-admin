'use client'
import React, { useEffect, useState, createContext, useContext, memo, useMemo } from "react";
import {
    useColorModeValue,
    VStack, HStack, Stack, Flex, Grid, GridItem, SimpleGrid,
    Box, Link, Text, Heading,
} from "@chakra-ui/react";
import { useTitleStore, usePageStore, useUserStore, useAgencyStore } from "@/utils/storage";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, } from 'chart.js';
import { useRouter } from "next/router";

import { Pages } from "@/utils/interface";
import axios from "axios";
import { api } from "@/utils/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DashboardContext = createContext<{ cardBg: string, hoverBg: string }>({
    cardBg: "white",
    hoverBg: "gray.50"
})

const blue500 = 'oklch(62.54% 0.18 262)';
const green500 = 'oklch(65% 0.16 162)';
const red500 = 'oklch(60% 0.20 29)';

function OldAdminStats() {
    const { cardBg, hoverBg } = useContext(DashboardContext)

    const [data, setData] = useState<any | null>(null);

    const stats: { label: string, value: any }[] = [
        { label: "총 에이전트", value: data?.totalAgents ?? 0 },
        { label: "총 회원", value: data?.totalMiners ?? 0 },
        { label: "회수할 총액", value: (data?.totalTokens ?? 0) + " USD" },
        { label: "로열티 지급 후 회수할 총액", value: ((data?.totalPayout._sum.amount ?? 0) / 10 ** 6) + " USD" },
        { label: "분배된 총 로열티", value: ((data?.totalPayout._sum.royalty ?? 0) / 10 ** 6) + " USD" },
        { label: "보류 중인 총 지급", value: (data?.payoutPending._sum.amount ?? 0) + " USD" },
        { label: "완료된 총 지급", value: (data?.payoutApproved._sum.amount ?? 0) + " USD" },
    ]

    return (
        <SimpleGrid w={"100%"} columns={{ base: 1, md: 4 }} spacing={3} px={6} pt={3}>
            {
                stats.map((stat, index) => (
                    <Stack
                        key={index} bgColor={"white"} p={5} shadow={"md"} rounded={"xl"}
                        justify={"space-between"} align={"flex-start"}
                        _hover={{ bg: hoverBg }}
                    >
                        <Text color="gray.500" fontSize="sm">{stat.label}</Text>
                        <Text fontSize="xl" fontWeight="bold">{stat.value}</Text>
                    </Stack>
                ))
            }
        </SimpleGrid>
    );
}

function StatsCard() {
    const stats: { label: string, value: string, link?: Pages }[] = [
        { label: '총 회원 수', value: '1,245명', link: 'users' },
        { label: '총 입금액', value: '₩93,200,000', link: 'deposit' },
        { label: '총 출금액', value: '₩54,300,000', link: 'transactionRequest' },
        { label: '정산 수익', value: '₩12,400,000', link: 'coinControl' },
        { label: '회사 순이익', value: '₩6,200,000' },
        { label: '금일 가입', value: '12명', link: 'signup' },
    ];
    const alerts = [
        { type: '입금 요청', count: 3, link: '/deposit' },
        { type: '출금 요청', count: 1, link: '/transactionRequest' },
        { type: '회원가입 승인 대기', count: 2, link: '/signup' },
        { type: '신규 문의', count: 4, link: '/inquiry' },
    ];

    const { cardBg, hoverBg } = useContext(DashboardContext)
    const { push } = useRouter()
    const { setPage } = usePageStore()
    const { setUser } = useUserStore()
    const { selectAgency } = useAgencyStore()

    return (
        <Stack w={"100%"} align={"center"}>
            <SimpleGrid w={"100%"} columns={{ base: 2, md: 4 }} spacing={3}>
                {
                    stats.map((item, index) => {
                        if (item.link === "users") {
                            return (
                                <Stack
                                    w={"100%"} h={"full"}
                                    key={index}
                                    _hover={{ textDecoration: 'none' }}
                                    onClick={() => {
                                        setUser(null)
                                        setPage("users")
                                        push(`/${item.link}`);
                                    }}
                                >
                                    <Box
                                        w={"100%"} h={"full"}
                                        bg={cardBg}
                                        rounded="xl"
                                        shadow="md"
                                        p={5}
                                        display="flex"
                                        flexDir="column"
                                        gap={2}
                                        _hover={{ bg: hoverBg }}
                                    >
                                        <Text color="gray.500" fontSize="sm">
                                            {item.label}
                                        </Text>
                                        <Text fontSize="xl" fontWeight="bold">
                                            {item.value}
                                        </Text>
                                    </Box>
                                </Stack>
                            );
                        }
                        return (
                            <Stack
                                w={"100%"} h={"full"}
                                key={index}
                                _hover={{ textDecoration: 'none' }}
                                onClick={() => {
                                    if (item !== undefined) {
                                        setPage(item.link as Pages)
                                    }
                                    push(`/${item.link}`)
                                }}
                            >
                                <Box
                                    w={"100%"} h={"full"}
                                    bg={cardBg}
                                    rounded="xl"
                                    shadow="md"
                                    p={5}
                                    display="flex"
                                    flexDir="column"
                                    gap={2}
                                    _hover={{ bg: hoverBg }}
                                >
                                    <Text color="gray.500" fontSize="sm">
                                        {item.label}
                                    </Text>
                                    <Text fontSize="xl" fontWeight="bold">
                                        {item.value}
                                    </Text>
                                </Box>
                            </Stack>
                        )
                    })
                }
                {
                    alerts.slice(0, 2).map((alert, i) => (
                        <Stack
                            w={"100%"} h={"full"}
                            key={`alert-small-${i}`}
                            _hover={{ textDecoration: 'none' }}
                            onClick={() => push(`${alert.link}`)}
                        >
                            <Box
                                w={"100%"} h={"full"}
                                bg={cardBg}
                                rounded="xl"
                                shadow="md"
                                p={5}
                                display="flex"
                                justifyContent="space-between"
                                alignContent={"center"}
                                _hover={{ bg: hoverBg }}
                            >
                                <Text>{alert.type}</Text>
                                <Text color={red500} fontWeight="bold" fontSize="lg">
                                    {alert.count}건
                                </Text>
                            </Box>
                        </Stack>
                    ))
                }
            </SimpleGrid>
            <SimpleGrid w={"100%"} columns={{ base: 1, md: 2 }} spacing={3}>
                {
                    alerts.slice(2).map((alert, i) => (
                        <Stack
                            key={`alert-small-${i}`}
                            _hover={{ textDecoration: 'none' }}
                            onClick={() => push(`${alert.link}`)}
                        >
                            <Box
                                bg={cardBg}
                                rounded="xl"
                                shadow="md"
                                p={5}
                                display="flex"
                                justifyContent="space-between"
                                _hover={{ bg: hoverBg }}
                            >
                                <Text>{alert.type}</Text>
                                <Text color={red500} fontWeight="bold" fontSize="lg">
                                    {alert.count}건
                                </Text>
                            </Box>
                        </Stack>
                    ))
                }
            </SimpleGrid>
        </Stack>
    );
}
function Charts() {
    const barData = {
        labels: ['1월', '2월', '3월', '4월', '5월'],
        datasets: [
            {
                label: '월별 정산 수익',
                data: [1.2, 2.3, 1.8, 3.0, 2.1],
                backgroundColor: blue500,
            },
        ],
    };
    const doughnutData = {
        labels: ['입금', '출금'],
        datasets: [
            {
                data: [93.2, 54.3],
                backgroundColor: [green500, red500],
            },
        ],
    };

    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <>
            <Box bg={cardBg} rounded="xl" shadow="md" p={5}>
                <Text fontWeight="semibold" mb={2}>
                    📈 정산 수익
                </Text>
                <Box h="240px">
                    <Bar
                        data={barData}
                        options={{ responsive: true, maintainAspectRatio: false }}
                    />
                </Box>
            </Box>
            <Box bg={cardBg} rounded="xl" shadow="md" p={5}>
                <Text fontWeight="semibold" mb={2}>
                    💰 입출금 비율
                </Text>
                <Box h="240px">
                    <Doughnut
                        data={doughnutData}
                        options={{ responsive: true, maintainAspectRatio: false }}
                    />
                </Box>
            </Box>
        </>
    );
}
function NewPosts() {
    const newPosts = [
        { title: '1기 수익 인증', author: 'user001', time: '2분 전' },
        { title: '2기 공지사항', author: '관리자', time: '5분 전' },
        { title: '3기 참여자 후기', author: 'user002', time: '10분 전' },
        { title: '업데이트 공지', author: 'admin', time: '20분 전' },
        { title: '수익 배분 안내', author: 'user003', time: '30분 전' },
        { title: '긴급 점검 안내', author: 'admin', time: '40분 전' },
    ];

    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <Box bg={cardBg} rounded="xl" shadow="md" p={5} maxH="64" overflowY="auto">
            <Text fontWeight="semibold" mb={2}>
                📝 신규 게시글
            </Text>
            <VStack spacing={1} align="stretch" fontSize="sm">
                {
                    newPosts.map((post, i) => (
                        <HStack
                            key={i}
                            borderBottomWidth="1px"
                            py={1}
                            justifyContent="space-between"
                        >
                            <Text>{post.title}</Text>
                            <Text color="gray.400">{post.time}</Text>
                        </HStack>
                    ))
                }
            </VStack>
        </Box>
    );
}
function ExpiringDeals() {
    const expiringDeals = [
        { name: 'BTC 고정 수익딜', deadline: 'D-1', investors: 124, progress: 83 },
        { name: 'ETH 단기딜', deadline: 'D-2', investors: 87, progress: 61 },
    ];

    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <Box bg={cardBg} rounded="xl" shadow="md" p={5} maxH="64" overflowY="auto">
            <Text fontWeight="semibold" mb={2}>
                ⏱ 마감 임박 블록딜
            </Text>
            <VStack spacing={1} align="stretch" fontSize="sm">
                {
                    expiringDeals.map((deal, i) => (
                        <HStack
                            key={i}
                            borderBottomWidth="1px"
                            py={1}
                            justifyContent="space-between"
                        >
                            <Text>{deal.name}</Text>
                            <Text color={blue500} fontWeight="medium">
                                {deal.progress}%
                            </Text>
                        </HStack>
                    ))
                }
            </VStack>
        </Box>
    );
}
function Notices() {
    const notices = [
        { title: '시스템 점검 안내', date: '2024-06-03' },
        { title: '신규 블록딜 출시', date: '2024-06-01' },
    ];

    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <Box bg={cardBg} rounded="xl" shadow="md" p={5} maxH="64" overflowY="auto">
            <Text fontWeight="semibold" mb={2}>
                📌 공지사항
            </Text>
            <VStack spacing={1} align="stretch" fontSize="sm">
                {
                    notices.map((notice, i) => (
                        <HStack
                            key={i}
                            borderBottomWidth="1px"
                            py={1}
                            justifyContent="space-between"
                        >
                            <Text>{notice.title}</Text>
                            <Text color="gray.400">{notice.date}</Text>
                        </HStack>
                    ))
                }
            </VStack>
        </Box>
    );
}
function RecentActivity() {
    const recentActivity = [
        { text: 'user001님 입금 ₩2,000,000', time: '1분 전' },
        { text: 'user777님 출금 ₩500,000', time: '3분 전' },
        { text: 'newUser99님 신규 가입', time: '5분 전' },
    ];

    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <Box bg={cardBg} rounded="xl" shadow="md" p={5} maxH="64" overflowY="auto">
            <Text fontWeight="semibold" mb={2}>
                🕒 실시간 활동 로그
            </Text>
            <VStack spacing={1} align="stretch" fontSize="sm">
                {
                    recentActivity.map((log, i) => (
                        <HStack
                            key={i}
                            borderBottomWidth="1px"
                            py={1}
                            justifyContent="space-between"
                        >
                            <Text>{log.text}</Text>
                            <Text color="gray.400">{log.time}</Text>
                        </HStack>
                    ))
                }
            </VStack>
        </Box>
    );
}
function WeeklySummary() {
    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <Box bg={cardBg} rounded="xl" shadow="md" p={5}>
            <Text fontWeight="semibold" mb={2}>
                🗂️ 이번 주 운영 요약
            </Text>
            <VStack as="ul" spacing={1} pl={5} fontSize="sm" align="stretch" listStyleType="disc">
                <li>누적 입금액 ₩93,200,000, 누적 출금액 ₩54,300,000</li>
                <li>신규 가입자 12명, 승인 대기 2건</li>
                <li>진행 중인 블록딜 2건</li>
            </VStack>
        </Box>
    );
}
function AdminMemo() {
    const { cardBg, hoverBg } = useContext(DashboardContext)

    return (
        <Box bg={cardBg} rounded="xl" shadow="md" p={5}>
            <Text fontWeight="semibold" mb={2}>
                📝 관리자 메모
            </Text>
            <Text fontSize="sm" color="gray.700">
                블록딜 3차 배포 전 검토 완료 예정, 문의 처리 속도 점검 중
            </Text>
        </Box>
    );
}
function OldDashboard() {
    return (
        <>
            <StatsCard />
            {/* <OldAdminStats /> */}
            <SimpleGrid w={"100%"} columns={{ base: 1, md: 2 }} p={6} pt={3} spacingY={6} spacingX={3}>
                <Charts />
                <NewPosts />
                <ExpiringDeals />
                <Notices />
                <RecentActivity />
                <WeeklySummary />
                <AdminMemo />
            </SimpleGrid>
        </>
    );
}

function NewDashboard() {
    const defaultStats: { path: Pages, title: string, value: number }[] = [
        { path: "users", title: "총 사용자 수", value: 0 },
        { path: "users", title: "총 입금액", value: 0 },
        { path: "users", title: "총 출금 가능 ERC20 수량", value: 0 },
        { path: "transactionRequest", title: "총 출금 가능 TRC20 수량", value: 0 },
    ]

    const { hoverBg } = useContext(DashboardContext)
    const { setPage } = usePageStore()
    const { push } = useRouter()

    const [stats, setStats] = useState(defaultStats);
    const [statsData, setStatsData] = useState({
        user: 0,
        deposit: 0,
        withdrawableETH: 0,
        withdrawableTRON: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.siteStatistics()
                const { user, deposit, withdrawableETH, withdrawableTRON } = data
                setStatsData({
                    user,
                    deposit,
                    withdrawableETH,
                    withdrawableTRON
                })
            } catch (e) {
                console.error("Error fetching statistics: ", e)
            }
        }
        fetchStats()
    }, []);
    useEffect(() => {
        setStats([
            { path: "users", title: "총 사용자 수", value: statsData.user ?? 0 },
            { path: "transactionRequest", title: "총 입금액", value: statsData.deposit ?? 0 },
            { path: "users", title: "총 출금 가능 ERC20 수량", value: statsData.withdrawableETH ?? 0 },
            { path: "users", title: "총 출금 가능 TRC20 수량", value: statsData.withdrawableTRON ?? 0 },
        ])
    }, [statsData]);

    const handleRedirect = (path: Pages) => {
        setPage(path);
        push(`/${path}`)
    }

    const MemoizedStats = useMemo(() => {
        return stats.map(({ path, title, value }) => (
            <Stack
                key={title} w={"100%"} h={"full"} p={5} bgColor={"white"}
                rounded={"xl"} shadow={"lg"} cursor={"pointer"}
                transition={"all ease-in-out 0.3s"}
                _hover={{
                    bgColor: hoverBg,
                    transform: "scale(1.02) translateY(-5px)",
                    shadow: "2xl"
                }}
                onClick={() => handleRedirect(path)}
            >
                <Heading size={"md"}>{title}</Heading>
                <Stack direction={"row"} justify={"flex-start"} align={"flex-end"} px={5} gap={0}>
                    <Heading size={"2xl"} color={"blue.900"}>{value}</Heading>
                    <Heading size={"lg"} color={"blue.900"}>{title === "총 입금액" && " USDT"}</Heading>
                </Stack>
            </Stack>
        ))
    }, [stats])

    return (
        <SimpleGrid w={"100%"} columns={2} p={5} spacing={10}>
            {MemoizedStats}
        </SimpleGrid>
    );
}

function Dashboard() {
    const cardBg = useColorModeValue('white', 'gray.700');
    const hoverBg = useColorModeValue('gray.50', 'gray.600');

    const { setTItle } = useTitleStore()

    useEffect(() => {
        setTItle("대시보드")
    }, []);
    return (
        <DashboardContext value={{ cardBg, hoverBg }}>
            <NewDashboard />
        </DashboardContext>
    );
}
export default memo(Dashboard)