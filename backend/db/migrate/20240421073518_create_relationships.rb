class CreateRelationships < ActiveRecord::Migration[7.0]
  def change
    create_table :relationships do |t|
      t.bigint :follower_id, comment: "フォローされているユーザID"
      t.bigint :follow_id, comment: "フォローしているユーザID"

      t.timestamps
    end
  end
end
