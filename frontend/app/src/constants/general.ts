// import {getSaveData} from "./local_storage"

export const base_url = {
    //エンドポイント
    end_point: "http://localhost:3000/api/v1/",

} as const;
// URL類
export const urls = {
    //エンドポイント
    signUp: base_url.end_point + "users/sign_up",

} as const;
// アプリケーションでよく使われる語句
export const generalWordSetting = {
    //アプリケーションタイトル
    aplicaton_title: "HairSkill"
} as const;
// アプリケーションでよく使われる定数
export const generalConstant = {
    // current_user_id:getSaveData("CURRENT_USER_ID")
    // current_user_id: global.localStorage.CURRENT_USER_ID ? global.localStorage.CURRENT_USER_ID : null
} as const;

