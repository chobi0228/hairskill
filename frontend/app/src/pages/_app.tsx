import "@/styles/globals.scss";
import "@/styles/home/top.scss";
import "@/styles/users/form.scss";
import type { AppProps } from "next/app";
import Header from "./all/components/header.component";
import Footer from "./all/components/footer.component";
import React, { useState, useEffect } from "react";
import {getSaveData} from "../constants/local_storage"



export default function App({ Component, pageProps }: AppProps) {
  const current_user_id = getSaveData("CURRENT_USER_ID")
    return (
      <div className="container">
        <Header/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </div>
    );
  // } else {
  //   console.log("ログイン済");  }
}
