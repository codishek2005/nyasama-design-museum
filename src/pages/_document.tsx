import getConfig from "next/config";
import { Html, Head, Main, NextScript } from "next/document";

const { publicRuntimeConfig } = getConfig()

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#222222" />
                <meta property="og:site_name" content={publicRuntimeConfig.title} />
                <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
                <meta property="og:description" content={publicRuntimeConfig.description} />
                <meta name="description" content={publicRuntimeConfig.description} />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}