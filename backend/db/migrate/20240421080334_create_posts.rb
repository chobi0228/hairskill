class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.bigint :user_id, comment: "ユーザID"
      t.integer :genre, comment: "ジャンル"
      t.string :title, comment: "題名"
      t.string :post_img_id, comment: "投稿画像"
      t.text :detail, comment: "詳細"
      t.text :biko, comment: "備考"

      t.timestamps
    end
  end
end
