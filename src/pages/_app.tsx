import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

import Layout from "@/components/Layout";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider, } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter, SolflareWalletAdapter, WalletConnectWalletAdapter } from '@solana/wallet-adapter-wallets'
import "@solana/wallet-adapter-react-ui/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(true);

  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => 'https://rough-ancient-fire.solana-mainnet.quiknode.pro/09b86a076f1f99d5169fc64fa235d840ff3ec031', [network]);

  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new WalletConnectWalletAdapter({
      options: {
        projectId: "206f5f67af1ce530c19b23328dd325d9", // Replace with your WalletConnect project ID
        relayUrl: 'wss://relay.walletconnect.org', // Optional, defaults to WalletConnect relay
      },
      network: network,
    }),
  ];


  return (
    <ChakraProvider>
      <React.StrictMode>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Layout>
                <Head>
                  <title>Monster Lab - 탈중앙화 스테이킹 솔루션</title>
                  <meta name="description" content="Created by Cubesoft OPC" />
                </Head>
                {
                  isClient && <Component {...pageProps} />
                }
              </Layout>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
}