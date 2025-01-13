import type { AppProps } from 'next/app';
import Header from '../../src/pages/layout/Header';
import Footer from '../../src/pages/layout/Footer';
import '../app/globals.css';
// import '../public/assets/css/style.css'; // Import your global CSS
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/fontawesome.min.css';
import '../../public/assets/css/magnific-popup.min.css';
import '../../public/assets/css/swiper-bundle.min.css';
import '../../public/assets/css/style.css';
import EnableRightClick from '../pages/components/EnableRightClick';
import Script from 'next/script';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <title>Work Cleverly</title>
                <meta name="author" content="Themeholy" />
                <meta name="description" content="Work Cleverly" />
                <meta name="keywords" content="Work Cleverly" />
                <meta name="robots" content="INDEX,FOLLOW" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,shrink-to-fit=no"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/assets/img/favicons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/assets/img/favicons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/assets/img/favicons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/assets/img/favicons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/assets/img/favicons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/assets/img/favicons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/assets/img/favicons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/assets/img/favicons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/img/favicons/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/assets/img/favicons/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/img/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/assets/img/favicons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/img/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="assets/img/favicons/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="assets/img/favicons/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />

                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&amp;family=Roboto:wght@300;400;500;700;900&amp;display=swap"
                    rel="stylesheet"
                /> */}

                {/* Import global CSS */}
                {/* <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
                <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" /> */}

            </Head>
            <Header />
            {/* <div id="preloader" className="preloader">
                <button className="th-btn th-radius preloaderCls">Cancel Preloader</button>
                <div id="loader" className="th-preloader">
                    <div className="animation-preloader">
                        <div className="txt-loading">
                            <span preloader-text="W" className="characters">W</span>
                            <span preloader-text="E" className="characters">E</span>
                            <span preloader-text="B" className="characters">B</span>
                            <span preloader-text="T" className="characters">T</span>
                            <span preloader-text="E" className="characters">E</span>
                            <span preloader-text="C" className="characters">C</span>
                            <span preloader-text="K" className="characters">K</span>
                        </div>
                    </div>
                </div>
            </div> */}
            <Component {...pageProps} />
            <Footer />

            <div className="scroll-top">
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: 'stroke-dashoffset 10ms linear 0s',
                            strokeDasharray: '307.919, 307.919',
                            strokeDashoffset: '307.919'
                        }}
                    >
                    </path>
                </svg>
            </div>

            <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/jquery.counterup.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/circle-progress.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/jquery-ui.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/isotope.pkgd.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/tilt.jquery.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/smooth-scroll.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/particles.min.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/particles-config.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/main.js" strategy="lazyOnload"></Script>
            <Script src="/assets/js/gsap.min.js"></Script>

            <EnableRightClick />
        </>

    );

}

export default MyApp;