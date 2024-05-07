import {urls, general_word_setting} from "../../../constants/general";
import {getSaveData} from "../../../constants/local_storage";
import {getUrlInId} from "../../../constants/get_url_in_id";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function UserShow() {
  const current_user_id = getSaveData("CURRENT_USER_ID")


    return (
      <>
        <Link href={"/users/login"} className="">編集</Link><br/>
      </>
    );
}
