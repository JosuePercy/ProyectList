import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, ligthTheme } from "../themes";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={ligthTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
