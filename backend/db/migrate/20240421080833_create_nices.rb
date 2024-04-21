class CreateNices < ActiveRecord::Migration[7.0]
  def change
    create_table :nices do |t|
      t.bigint :user_id, comment: "Niceを送った人のID"
      t.bigint :post_id, comment: "Niceを送った投稿のID"

      t.timestamps
    end
  end
end
