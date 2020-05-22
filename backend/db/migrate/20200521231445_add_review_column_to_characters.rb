class AddReviewColumnToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :review, :integer
  end
end
