import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Ahtasham-ul-Haq | Portfolio</title>
        <link rel='icon' href='/favicon.ico' sizes='32x32' />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
