class CreateLeaders < ActiveRecord::Migration[6.0]
  def change
    create_table :leaders do |t|
      t.string :name
      t.integer :age
      t.string :sex
      t.string :race
      t.string :rank

      t.timestamps
    end
  end
end
