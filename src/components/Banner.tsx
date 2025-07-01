import Image from 'next/image';
import styles from './Banner.module.css';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.backgroundImage}>
                <Image
                    src="/banner.webp"
                    alt="Banner image"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={80}
                    priority
                />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>{publicRuntimeConfig.title}</h1>
                    <h2 className={styles.subtitle}>{publicRuntimeConfig.description}</h2>
                </div>
            </div>
        </div>
    );
}