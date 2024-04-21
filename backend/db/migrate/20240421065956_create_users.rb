class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name, comment: "ニックネーム"
      t.string :password, comment: "パスワード"
      t.string :email, comment: "メアド"
      t.string :profile_img_id, comment: "プロフ画像"
      t.integer :authority, comment: "権限(0:一般,1:管理者)",default: 0
      t.integer :role, comment: "役割(0:その他,1:アシスタント,2:スタイリスト,マネージャー)",default: 0
      t.integer :gender, comment: "役割(0:未設定,1:男性,2:女性)",default: 0
      t.string :special_skill, comment: "特技"
      t.text :detail, comment: "詳細"
      t.datetime :deleted_at, comment: "退会日時",default: nil

      t.timestamps
    end
  end
end
