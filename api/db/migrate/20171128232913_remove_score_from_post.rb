class RemoveScoreFromPost < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :score, :integer
  end
end
