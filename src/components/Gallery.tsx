import Link from 'next/link';
import styles from './Gallery.module.css';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
    title: string,
    thumbnail: string,
    link: string,
}

const Gallery: FC<Props> = (props) => {
    return (
        <Link href={props.link} className={styles.gallery}>
            <figure>
                <Image
                    className={styles.image}
                    alt=""
                    src={props.thumbnail}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                />
                <figcaption className={styles.title}>{props.title}</figcaption>
            </figure>
        </Link>
    );
}

export default Gallery