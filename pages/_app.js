import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

import * as gtag from "../lib/gtag";

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        <meta name="theme-color" content="#ffffff" />
       
        <meta
          name="naver-site-verification"
          content="5ed7bbda1a77dce3422e4b3dc95b6d6b492f4be9"
        />

        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
        <title>메시지 웹</title>
      </Head>
      <ChakraProvider resetCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
