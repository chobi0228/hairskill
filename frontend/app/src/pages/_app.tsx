import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import {urls, generalWordSettings} from "../constants/general";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <header>{generalWordSettings.aplicaton_title}</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}
