import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState, useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <title>BLOCK 관리자</title>
          <meta name="description" content="Created by Cubesoft OPC" />
        </Head>
        {
          isClient && <Component {...pageProps} />
        }
      </Layout>
    </ChakraProvider>
  );
}
