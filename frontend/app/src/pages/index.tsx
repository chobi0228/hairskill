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
        <div className="top__navigation}">
          <Link href={"/users/login"}>アカウントをお持ちの方はこちら</Link>
          <Link href={"/users/sign_up"}>アカウントをお持ちでない方はこちら</Link>
        </div>
      </section>
    </>
  );
}
