import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";

//a003f0dfd5211d98466593cdb5bdc6dc

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
