import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Draw } from "@/components/drawer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Draw />
      <Component {...pageProps} />
    </>
  );
}
