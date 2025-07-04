import { JSX, useEffect, useState } from "react";
import Main from "@/components/Main";
import { useWallet } from "@solana/wallet-adapter-react";
import { mtsAxios } from "@/utils/axios_instance";
import Login from "@/components/Login";
import { usePrincipalWallet } from "@/utils/storage";

export default function Home() {
  const { connected, publicKey } = useWallet();
  const { principal, setPrincipal } = usePrincipalWallet();

  useEffect(() => {
    if (!connected) return
    mtsAxios.get_principal()
      .then((res) => {
        setPrincipal(res.data);
      })
  }, [connected]);

  if (!connected || !publicKey || !principal || principal !== publicKey.toBase58()) {
    return (
      <Login />
    );
  }

  return <Main />
}
