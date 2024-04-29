import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
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
