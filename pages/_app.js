import '../styles/globals.css'
// import '../styles/docs.css'
import 'nextra-theme-docs/style.css'
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
