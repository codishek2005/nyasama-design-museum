import GalleryPage from '@/components/GalleryPage';
import Header from '@/components/Header';
import galleryData from '@/data.json'
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(galleryData).map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const gallery = galleryData[slug];

    if (!gallery) {
        return { notFound: true }
    }

    return {
        props: {
            gallery,
        },
    };
};

const Page = ({ gallery }) => {
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