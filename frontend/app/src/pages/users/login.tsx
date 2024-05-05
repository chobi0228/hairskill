import {urls, general_word_setting} from "../../constants/general";
import React, { useState } from "react";

// import { getAuthJSON} from "../../services/api"
import axios from "axios";

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const postLoginJSON = async (e: any) => {
    const loginParamsData : LoginParams = {
      name: name,
      password: password,
    }
    try {
      if(loginParamsData.name === "" || loginParamsData.password === ""){
        alert("名前、パスワードの入力は必須です。正しく入力されているか確認してください")
      } else{
        const response = await axios.post(urls.login, loginParamsData);
        console.log(response)
        if(response.data.current_user){
          globalThis.localStorage.setItem('CURRENT_USER_ID', response.data.current_user.id);
          globalThis.document.location.replace(`/users/show/${response.data.current_user.id}`)
        } else {
          alert("アカウントが見つかりませんでした。")
        }
      }
    } catch (err) {
      let message;
      if (axios.isAxiosError(err) && err.response) {
        console.error(err.response.data.message);
      } else {
        message = String(err);
        console.error(message);
      }
    }
  }
  return (
    <>
      <form className="auth_form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="input_name">名前</label>
        <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="input_passeord">パスワード</label>
        <input type="text"value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="新規登録" onClick={postLoginJSON}/>

      </form>
    </>
  );
}
