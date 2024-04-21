class CreateCalendars < ActiveRecord::Migration[7.0]
  def change
    create_table :calendars do |t|
      t.bigint :user_id, comment: "ユーザID"
      t.string :title, comment: "題名"
      t.text :detail, comment: "詳細"
      t.datetime :start_date, comment: "予定開始日時"

      t.timestamps
    end
  end
end
