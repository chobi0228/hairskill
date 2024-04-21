# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_04_21_081348) do
  create_table "calendars", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", comment: "ユーザID"
    t.string "title", comment: "題名"
    t.text "detail", comment: "詳細"
    t.datetime "start_date", comment: "予定開始日時"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", comment: "ユーザID"
    t.string "title", comment: "題名"
    t.text "detail", comment: "詳細"
    t.integer "status", default: 0, comment: "0:未回答,1:回答済"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nices", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", comment: "Niceを送った人のID"
    t.bigint "post_id", comment: "Niceを送った投稿のID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", comment: "ユーザID"
    t.integer "genre", comment: "ジャンル"
    t.string "title", comment: "題名"
    t.string "post_img_id", comment: "投稿画像"
    t.text "detail", comment: "詳細"
    t.text "biko", comment: "備考"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "relationships", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "follower_id"
    t.bigint "follow_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", comment: "ニックネーム"
    t.string "password", comment: "パスワード"
    t.string "email", comment: "メアド"
    t.string "profile_img_id", comment: "プロフ画像"
    t.integer "authority", default: 0, comment: "権限(0:一般,1:管理者)"
    t.integer "role", default: 0, comment: "役割(0:その他,1:アシスタント,2:スタイリスト,マネージャー)"
    t.integer "gender", default: 0, comment: "役割(0:未設定,1:男性,2:女性)"
    t.string "special_skill", comment: "特技"
    t.text "detail", comment: "詳細"
    t.datetime "deleted_at", comment: "退会日時"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
