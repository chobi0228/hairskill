import {urls, generalWordSetting, generalConstant} from "../../constants/general";
import axios from "axios";
import React, { useState } from "react";

export default function SignUP() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [one_more_password, setOneMorePassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');


    const postSignUpJSON = async (e: any) => {
        const inputSignUPData : signUpParams = {
          name: name,
          password: password,
          one_more_password: one_more_password,
          email: email,
          role: role,
          gender: gender,
        };
        try {
          if(inputSignUPData.name === "" || inputSignUPData.password === "" || inputSignUPData.one_more_password === "" || inputSignUPData.email === ""){
            alert("名前、パスワード、確認用パスワード、メールアドレスは必須です。正しく入力されているか確認してください")
          } else {
            if (inputSignUPData.password !== inputSignUPData.one_more_password){
              alert("パスワードが一致しておりません。")
            } else{
              const response = await axios.post(urls.signUp, inputSignUPData);
              //localStorageでログイン情報を管理
              globalThis.localStorage.setItem('CURRENT_USER_ID', response.data.current_user.id);
              globalThis.document.location.replace(`/users/show/${response.data.current_user.id}`)
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
          <label htmlFor="input_role">役割</label>
          <input type="text"value={role} onChange={(e) => setRole(e.target.value)}/>
          <label htmlFor="input_gender">性別</label>
          <input type="text"value={gender} onChange={(e) => setGender(e.target.value)}/>
          <input type="submit" value="新規登録" onClick={postSignUpJSON}/>
        </form>
      </>
    );
}
