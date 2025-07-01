import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PagesTopLoader } from "nextjs-toploader/pages";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PagesTopLoader showSpinner={false} height={5} />
            <Component {...pageProps} />
        </>
    );
}