import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {urls, general_word_setting} from "../constants/general";
import {getSaveData} from "../constants/local_storage"


export default function Home() {
  const current_user_id = getSaveData("CURRENT_USER_ID")


  
  if(current_user_id){
    const timer = setTimeout(() => {
      globalThis.document.location.replace(`/users/show/${current_user_id}`)
    }, 0)
  } else {

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

  }
}
