class RemoveScoreFromComment < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :score, :integer
  end
end
