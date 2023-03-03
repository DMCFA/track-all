import Head from 'next/head';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Track All</title>
        <meta
          name='description'
          content='Track all your movies and tv shows in one place'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
