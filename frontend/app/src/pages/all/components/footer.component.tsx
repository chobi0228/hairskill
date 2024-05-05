import {urls, generalWordSetting} from "../../../constants/general";
import {generalFlag} from "../../../general_variable/general";
import React, { useState, useEffect } from "react";

export default function Footer(loginFlag:any) {


  if(loginFlag == true){
    return (
      <>
        <footer></footer>
      </>
    );
  }
}