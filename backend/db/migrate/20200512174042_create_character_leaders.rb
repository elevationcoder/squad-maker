class CreateCharacterLeaders < ActiveRecord::Migration[6.0]
  def change
    create_table :character_leaders do |t|
      t.references :character, null: false, foreign_key: true
      t.references :leader, null: false, foreign_key: true

      t.timestamps
    end
  end
end
