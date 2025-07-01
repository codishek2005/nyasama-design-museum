import GalleryPage from '@/components/GalleryPage';
import Header from '@/components/Header';
import { Gallery, getGallery, listGallery } from '@/lib/gallery';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

interface Props {
    gallery: Gallery
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = listGallery().map(gallery => {
        return { params: { slug: gallery.slug } }
    })


    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const gallery = getGallery(slug)


    if (!gallery) {
        return { notFound: true }
    }

    return {
        props: {
            gallery
        },
    };
};

const Page: FC<Props> = ({ gallery }) => {
    return (
        <>
            <Head>
                <title>{gallery.title}</title>
                <meta property="og:title" content={gallery.title} />
            </Head>
            <Header />
            <GalleryPage
                title={gallery.title}
                description={gallery.description}
                images={gallery.images}
            />
        </>
    )
}

export default Page;