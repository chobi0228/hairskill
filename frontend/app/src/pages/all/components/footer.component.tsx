import {urls, general_word_setting} from "../../../constants/general";
import React, { useState, useEffect } from "react";
import {getSaveData} from "../../../constants/local_storage"

export default function Footer() {
  
  const current_user_id = getSaveData("CURRENT_USER_ID")  
  if(current_user_id){
    return (
      <>
        <footer></footer>
      </>
    );
  }
}