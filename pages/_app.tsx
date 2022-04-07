import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Footer from '../src/components/Footer';
import Head from '../src/components/Head';
import Navbar from '../src/components/Navbar';
import GlobalStyle from '../src/styles';
import theme from '../src/styles/theme';
import pt from '../src/utils/i18n/pt-br';
import en from '../src/utils/i18n/en';
import './_app.css';
import Whatsapp from '../src/components/Whatsapp';
import { GTM_ID, pageview } from '../src/utils/gtm';

type Cookie = 'enabled' | 'disabled' | null;

const CookieModal = dynamic(import('../src/components/CookieModal'), {
  ssr: false,
});

interface IProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<IProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pt-BR' ? pt : en;

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  const [answeredTheCookies, setAnsweredTheCookies] = useState(() => {
    if (process.browser) {
      const cookies = localStorage.getItem('@envivame:cookies') as Cookie;
      return cookies === null ? null : cookies;
    }
    return null;
  });

  function handleAcceptCookies(): void {
    localStorage.setItem('@envivame:cookies', 'enabled');
    setAnsweredTheCookies('enabled');
  }

  function handleRejectCookies(): void {
    localStorage.setItem('@envivame:cookies', 'disabled');
    setAnsweredTheCookies('disabled');
  }

  return (
    <>
      {answeredTheCookies !== 'disabled' && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
          }}
        />
      )}
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar t={t} />
        <CookieModal
          isOpen={answeredTheCookies === null}
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
        />
        <Component {...pageProps} t={t} />
        <Whatsapp />
        <Footer t={t} />
      </ThemeProvider>
    </>
  );
};

export default App;
