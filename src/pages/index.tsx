import galleryData from '@/data.json'
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import getConfig from "next/config";
import Head from "next/head";
import Gallery from '@/components/Gallery';

const { publicRuntimeConfig } = getConfig()

export default function Home() {
    return (
        <>
            <Head>
                <title>{publicRuntimeConfig.title}</title>
                <meta property="og:title" content={publicRuntimeConfig.title} />
            </Head>
            <Header />
            <Banner />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                {
                    Object.entries(galleryData).map(([slug, gallery]) => (
                        <Gallery
                            key={slug}
                            title={gallery.title}
                            link={`/gallery/${slug}`}
                            thumbnail={`/asset/${slug}/thumb.avif`}
                        />
                    ))
                }
            </div>
        </>
    );
}

