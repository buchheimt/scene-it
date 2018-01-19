class AddScoreToComment < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :score, :integer, default: 0
  end
end
