export const baseUrl = {
    //エンドポイント
    end_point: "http://localhost:3000/api/v1/",

} as const;
// URL類
export const urls = {
    //エンドポイント
    signUp: baseUrl.end_point + "users/sign_up",

} as const;
// アプリケーションでよく使われる語句
export const generalWordSettings = {
    //アプリケーションタイトル
    aplicaton_title: "HairSkill"
} as const;
