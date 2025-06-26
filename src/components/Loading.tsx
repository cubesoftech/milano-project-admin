import React from "react";
import { Stack, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Stack w={"100%"} h={"100vh"} bgColor={"white"} justify={"center"} align={"center"}>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Stack>
    );
}