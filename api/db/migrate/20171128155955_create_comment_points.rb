class CreateCommentPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :comment_points do |t|
      t.integer :user_id
      t.integer :comment_id
      t.integer :value

      t.timestamps
    end
  end
end
