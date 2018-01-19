class CreateMovie < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.integer :release_year
    end
  end
end
