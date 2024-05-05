import "@/styles/globals.scss";
import "@/styles/home/top.scss";
import "@/styles/users/form.scss";
import type { AppProps } from "next/app";
import Header from "./all/components/header.component";
import Footer from "./all/components/footer.component";
import React, { useState, useEffect } from "react";
import {generalFlag} from "../general_variable/general";


export default function App({ Component, pageProps }: AppProps) {
  // useEffect(()=>{
  //   if(globalThis.localStorage.CURRENT_USER_ID){
  //     generalFlag.loginFlag = true;
  //   }
  // },[])
  // if(!globalThis.localStorage.CURRENT_USER_ID){
    return (
      <div className="container">
        <Header/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer loginFlag={generalFlag.loginFlag}/>
      </div>
    );
  // } else {
  //   console.log("ログイン済");  }
}
