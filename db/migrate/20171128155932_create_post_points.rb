class CreatePostPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :post_points do |t|
      t.integer :user_id
      t.integer :post_id
      t.integer :value

      t.timestamps
    end
  end
end
