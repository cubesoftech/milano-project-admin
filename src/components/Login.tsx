'use client'
import React, { useState, ChangeEvent } from "react";
import { Stack, Image, FormControl, Input, Button, useColorModeValue, } from "@chakra-ui/react";

import logo from "@/assets/milano_logo-nobg.png"

import UseToastHooks from "@/hooks/UseToastHooks";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { usePageStore, useTokenStore } from "@/utils/storage";

import { api } from "@/utils/api";

const primary = 'oklch(62.54% 0.18 220)';
const primaryHover = 'oklch(71.71% 0.123 221)';

export default function Login() {
    const toast = UseToastHooks()
    const router = useRouter()
    const { setPage } = usePageStore()
    const { accessToken, setAccessToken } = useTokenStore()

    const [payload, setPayload] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPayload({ ...payload, [e.target.name]: e.target.value });
    };
    const handleLogin = async () => {
        // await signIn("credentials", {
        //     ...payload,
        // })
        //     .then(res => {
        //         if (res && res.error) {
        //             toast.error("잘못된 자격 증명");
        //         } else {
        //             toast.success("로그인 성공");
        //             setPage("");
        //         }
        //     })
        try {
            const { data, message } = await api.login({ phone_number: payload.email, password: payload.password })
            setAccessToken(data)
            toast.success(message)
        } catch (e: any) {
            const message = e?.response?.data?.message || "Something went wrong"
            toast.error(message)
        }
    };

    return (
        <Stack w={"100%"} h={"100vh"} justify={"center"} align={"center"} bgColor={"blue.900"}>
            <Stack
                as="section"
                w="full"
                maxW="sm"
                p={8}
                spacing={6}
                rounded="lg"
                shadow="2xl"
                bg={useColorModeValue('blue.800', 'gray.700')}
                align="center"
            >
                <Image src={logo.src} alt="Logo" w="auto" h="20" />

                <Stack as="form" w="full" spacing={4}>
                    <FormControl>
                        <Input
                            color={"white"}
                            variant="outline"
                            placeholder="Username"
                            name="email"
                            value={payload.email}
                            onChange={handleChange}
                            _focus={{ borderColor: primary }}
                        />
                    </FormControl>

                    <FormControl>
                        <Input
                            color={"white"}
                            variant="outline"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={payload.password}
                            onChange={handleChange}
                            _focus={{ borderColor: primary }}
                        />
                    </FormControl>

                    <Button
                        w="full"
                        bg={primary}
                        _hover={{ bg: primaryHover }}
                        color="white"
                        fontWeight="semibold"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}