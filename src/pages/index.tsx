import Banner from "@/components/Banner";
import Header from "@/components/Header";
import getConfig from "next/config";
import Head from "next/head";
import GalleryComp from '@/components/Gallery';
import { Gallery, listGallery } from "@/lib/gallery";
import { FC } from "react";
import { GetStaticProps } from "next";

const { publicRuntimeConfig } = getConfig()

interface Props {
    galleries: Gallery[],
}

export const getStaticProps: GetStaticProps = async () => {


    return {
        props: {
            galleries: listGallery()
        },
    };
};

const Page: FC<Props> = ({ galleries }) => {
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
                gap: '40px',
                margin: '40px'
            }}>
                {
                    galleries.map(gallery => (
                        <GalleryComp
                            key={gallery.slug}
                            title={gallery.title}
                            link={`/gallery/${gallery.slug}`}
                            thumbnail={`/asset/${gallery.slug}/thumb.avif`}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default Page