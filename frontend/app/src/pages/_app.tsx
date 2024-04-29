import "@/styles/globals.scss";
import "@/styles/home/top.scss";
import type { AppProps } from "next/app";
import {urls, generalWordSettings} from "../constants/general";
import Header from "./all/components/header.component";
import Footer from "./all/components/footer.component";
import React, { useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  );
}
