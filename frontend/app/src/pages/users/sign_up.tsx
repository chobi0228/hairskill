import {urls, general_word_setting, generalConstant} from "../../constants/general";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

export default function SignUP() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [one_more_password, setOneMorePassword] = useState('');
    const [email, setEmail] = useState('');

    const postSignUpJSON = async (e: any) => {
      const inputSignUPData : signUpParams = {
        name: name,
        password: password,
        one_more_password: one_more_password,
        email: email,
      };
      try {
        if(!inputSignUPData.name || !inputSignUPData.password || !inputSignUPData.one_more_password || !inputSignUPData.email || !inputSignUPData.one_more_password){
          alert("名前、パスワード、確認用パスワード、メールアドレスは必須です。正しく入力されているか確認してください")
        }else {
          if (inputSignUPData.password !== inputSignUPData.one_more_password){
            alert("パスワードが一致しておりません。")
          } else{
            const response = await axios.post(urls.sign_up, inputSignUPData);

            //新規登録成功時
            if(response.data.result === 2){//localStorageでログイン情報を管理
              globalThis.localStorage.setItem('CURRENT_USER_ID', response.data.current_user.id);
              globalThis.document.location.replace(`/users/show/${response.data.current_user.id}`)
            } else {//新規登録に失敗（既存アカウント存在時/その他原因で保存できない場合）
              alert(response.data.message)
              console.log(response.data.params)
            }
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
    };


    return (
      <>
        <form className="auth_form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="input_name">名前</label>
          <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="input_passeord">パスワード</label>
          <input type="text"value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="input_one_more_password">確認用パスワード</label>
          <input type="text"value={one_more_password} onChange={(e) => setOneMorePassword(e.target.value)}/>
          <label htmlFor="input_email">メールアドレス</label>
          <input type="text"value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="submit" value="新規登録" onClick={postSignUpJSON}/>
        </form>
        <div>
          <Link href={"/users/login"} className="">ログイン画面へ</Link><br/>
          <Link href={"/"} className="">TOPページへ</Link>
        </div>

      </>
    );
}
