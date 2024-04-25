import "@/styles/globals.scss";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <header>HairSkill</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}
