class RemoveScoreFromMovie < ActiveRecord::Migration[5.1]
  def change
    remove_column :movies, :score, :integer
  end
end
