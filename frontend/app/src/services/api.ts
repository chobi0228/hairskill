import axios from "axios";
import {urls, generalWordSettings} from "../constants/general";

export const getSignUpJSON = async (): Promise<any> => {

  const response = await axios.get(urls.signUp);
  console.log(response.data);
};

export const postSignUpJSON = async (): Promise<any> => {
  const data = {
    name: "sho",
    password: "dfghjkl",
    email: "aaaaaaaaaaaaaaaaaa@aaaaaaaaa",
    role: 0,
    gender: 0,
  };
  const response = await axios.post(urls.signUp, data);
  console.log(response.data);
};