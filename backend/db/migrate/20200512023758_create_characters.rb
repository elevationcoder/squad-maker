class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :age
      t.float :weight
      t.string :height
      t.string :sex
      t.string :race
      t.string :klass

      t.timestamps
    end
  end
end
