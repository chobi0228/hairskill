import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {urls, generalWordSetting} from "../constants/general";
import {generalFlag} from "../general_variable/general";


export default function Home() {

  useEffect(()=>{
    if(globalThis.localStorage.CURRENT_USER_ID){
      generalFlag.loginFlag = true;
    }
  },[])
  if(generalFlag.loginFlag == true){
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Hairskill APlication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <section className="top">
          <div className="top__navigation">
            <Link href={"/users/login"} className="top__navigation__login">ログイン</Link>
            <Link href={"/users/sign_up"} className="top__navigation__sign_up">サインアップ</Link>
            <Link href={"/users/sign_up"} className="top__navigation__contact">お問い合わせ</Link>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Hairskill APlication" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>TOP</h1>
      </>
    );
  }
}
