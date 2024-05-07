import {urls, general_word_setting} from "../../../constants/general";
import React, { useState, useEffect } from "react";
import {getSaveData} from "../../../constants/local_storage"
import Link from "next/link";
export default function Footer() {
  
  const current_user_id = getSaveData("CURRENT_USER_ID")
  const isLogOutLink = async (e: any) => {
    globalThis.localStorage.removeItem('CURRENT_USER_ID');
    globalThis.document.location.replace("/")
  }
  if(current_user_id){
    return (
      <>
        <footer>
            <Link href={"/"} className="">Top</Link>
            <Link href={`/users/show/${current_user_id}`} className="">MyPage</Link>
            <Link href={"/posts/"} className="">Post</Link>
            <Link href={"/contacts/new"} className="">Contact</Link>
            <Link href={"/"} className="" onClick={isLogOutLink}>LogOut</Link>
        </footer>
      </>
    );
  }
}