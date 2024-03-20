import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps}){
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;