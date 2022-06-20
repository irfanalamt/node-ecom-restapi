import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RFN shop</title>
        <meta name='description' content='E-commerce app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${styles.main} display-6`}>Lets get it started!</main>
    </div>
  );
}
