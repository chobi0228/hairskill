class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.bigint :user_id, comment: "ユーザID"
      t.string :title, comment: "題名"
      t.text :detail, comment: "詳細"
      t.integer :status, comment: "0:未回答,1:回答済", default: 0
      t.timestamps
    end
  end
end
