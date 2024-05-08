import { urls } from "../../../constants/general";
import { getSaveData } from "../../../constants/local_storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function UserEdit() {
  const current_user_id = getSaveData("CURRENT_USER_ID")

  const [profile, setProfile] = useState({}); // 初期状態を空のオブジェクトに設定

  useEffect(() => {
    const fetchUser = async () => {
      const _url = globalThis.location.href;
      const parts = _url.split('/');  
      const show_user_id = parts[parts.length - 1];
      if (show_user_id) {
        try {
          const response = await axios.post(urls.profile, { id: show_user_id });
          setProfile(response.data.profile);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUser();
 }, []);
 if(current_user_id){

    if (!profile) {
      return <div>Loading...</div>;
    } else{
      return (
          <>
            <h1>aaaa</h1>
          </>
      );
    }
  } else {
    return (
      <>
        <Link href={"/"} className="">ログインしてください</Link><br/>
      </>
  );

  }
}