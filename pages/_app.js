import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/commons/Layout";
import { SSRProvider } from "react-bootstrap";

//a003f0dfd5211d98466593cdb5bdc6dc

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
