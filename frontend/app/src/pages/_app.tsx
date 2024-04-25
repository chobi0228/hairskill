import "@/styles/globals.scss";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <header className="header">HairSkill</header>
        <Component {...pageProps} />
        <footer className="footer"></footer>
      </div>
    </>
  );
}
