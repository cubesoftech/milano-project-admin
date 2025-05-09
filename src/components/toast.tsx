import { useToast, UseToastOptions } from "@chakra-ui/react";

export default function Toast() {
    const toast = useToast()

    const options: UseToastOptions = {
        isClosable: true,
        duration: 9000,
        position: "bottom"
    }

    const success = (description: string) => {
        toast({
            title: "Success",
            description,
            status: "success",
            ...options
        })
    }

    const error = (description: string, title?: string,) => {
        toast({
            title: title ? title : "Error",
            description,
            status: "error",
            ...options
        })
    }

    const warning = (description: string) => {
        toast({
            title: "Warning",
            description,
            status: "warning",
            ...options
        })
    }

    const info = (description: string, title?: string,) => {
        toast({
            title: title ? title : "Info.",
            description,
            status: "info",
            ...options
        })
    }

    return { success, error, warning, info }

}