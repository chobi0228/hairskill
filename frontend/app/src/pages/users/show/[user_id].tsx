import {urls, general_word_setting} from "../../../constants/general";
import {getSaveData} from "../../../constants/local_storage";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function UserShow() {
  const current_user_id = getSaveData("CURRENT_USER_ID")
  const [url, getUrl] = useState<string>("");
  useEffect(() => {
    const _url = globalThis.location.href;
    const parts = _url.split('/');  
    const show_user_id = parts[parts.length - 1];
    console.log(show_user_id);
    if (_url) {
      getUrl(_url);
    }
  }, [url]);

    return (
      <>
        <Link href={"/users/login"} className="">編集</Link><br/>
      </>
    );
}
