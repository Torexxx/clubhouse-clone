import "../styles/globals.css";
import Head from 'next/head'  

function MyApp({ Component, pageProps }) {

  return (
    <div className={"main-wrapper-of-the-app"}>
       <Head>
        <title>Clubhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
