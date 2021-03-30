function MyApp({ Component, pageProps }) {
  pageProps["my-prop"] = "findMe";
  return <Component {...pageProps} />;
}

export default MyApp;
