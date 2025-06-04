import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

import Layout from "@/components/Layout";

import { WagmiConfig, createClient, configureChains, sepolia, mainnet, Connector } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { InjectedConnector } from "wagmi/connectors/injected";

const chain = mainnet;

export const { chains, provider } = configureChains(
  [chain],
  [publicProvider()]
);

const metamask = new MetaMaskConnector({
  chains,
  options: {},
});

const walletConnect = new WalletConnectConnector({
  // chains,
  options: {
    projectId: '206f5f67af1ce530c19b23328dd325d9',
    showQrModal: true,
    qrModalOptions: {
      enableExplorer: true,
      explorerAllowList: [],
      explorerDenyList: [],
      explorerRecommendedWalletIds: [
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust
      ]
    },
  }
})

const injected = new InjectedConnector({
  chains,
  options: {
    name: (detectedName) =>
      `Injected (${typeof detectedName === 'string'
        ? detectedName
        : detectedName.join(', ')})`,
    shimDisconnect: true,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  const [connectors, setConnectors] = useState<Connector[]>([injected]);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true)

    const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  useEffect(() => {
    if (isMobile !== null) {
      setConnectors(
        isMobile
          ? [injected, metamask, walletConnect]
          : [walletConnect, metamask, injected]
      )
    }
  }, [isMobile]);

  const client = useMemo(() => {
    if (connectors.length === 0) return null

    return createClient({
      autoConnect: true,
      connectors,
      provider,
    });
  }, [connectors])

  // const client = createClient({
  //   autoConnect: true,
  //   connectors,
  //   provider,
  // });

  return (
    <ChakraProvider>
      <React.StrictMode>
        {
          client ? (
            <WagmiConfig client={client}>
              <Layout>
                <Head>
                  <title>Monster Lab - 탈중앙화 스테이킹 솔루션</title>
                  <meta name="description" content="Created by Cubesoft OPC" />
                </Head>
                {
                  isClient && <Component {...pageProps} />
                }
              </Layout>
            </WagmiConfig>
          )
            : null
        }
      </React.StrictMode>
    </ChakraProvider>
  );
}