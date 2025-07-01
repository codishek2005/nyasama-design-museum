import Link from 'next/link';
import styles from './GalleryPage.module.css';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
    title: string,
    description: string,
    images: string[],
}

const GalleryPage: FC<Props> = (props) => {
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>{props.description}</p>
            {
                props.images.map((image) => (
                    <Link key={image} href={image}>
                        <Image
                            className={styles.image}
                            alt=""
                            src={image}
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                ))
            }
        </article>
    );
}

export default GalleryPage