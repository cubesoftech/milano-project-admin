import React from "react";
import { useToast, UseToastOptions } from "@chakra-ui/react";

export default function UseToastHooks() {
    const toast = useToast();

    const toastOptions: UseToastOptions = {
        position: "bottom",
        isClosable: true,
        duration: 5000,
    }

    const success = (description: string, title?: string) => (
        toast({
            title: title ?? "Success",
            description,
            status: "success",
            ...toastOptions
        })
    )
    const warning = (description: string, title?: string) => (
        toast({
            title: title ?? "Warning",
            description,
            status: "warning",
            ...toastOptions
        })
    )
    const info = (description: string, title?: string) => (
        toast({
            title: title ?? "Info",
            description,
            status: "info",
            ...toastOptions
        })
    )
    const error = (description: string, title?: string) => (
        toast({
            title: title ?? "Error",
            description,
            status: "error",
            ...toastOptions
        })
    )

    return { success, warning, info, error }
}