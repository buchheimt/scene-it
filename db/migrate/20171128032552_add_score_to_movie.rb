class AddScoreToMovie < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :score, :integer, default: 0
  end
end
