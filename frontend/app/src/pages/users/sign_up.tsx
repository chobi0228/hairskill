import {urls, generalWordSettings} from "../../constants/general";
import axios from "axios";import React, { useState } from "react";
import { cookies } from 'next/headers'
export default function SignUP() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [one_more_password, setOneMorePassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');

    const postSignUpJSON = async (e: any) => {
        const inputSignUPData = {
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
              console.log("結果",response.data);
            }
          }
          // redirect("/simple/thanks");
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
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text"value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="text"value={one_more_password} onChange={(e) => setOneMorePassword(e.target.value)}/>
          <input type="text"value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text"value={role} onChange={(e) => setRole(e.target.value)}/>
          <input type="text"value={gender} onChange={(e) => setGender(e.target.value)}/>
          <input type="submit" value="新規登録" onClick={postSignUpJSON}/>
        </form>
        <p>{name}</p>
      </>
    );
}
