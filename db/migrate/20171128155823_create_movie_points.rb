class CreateMoviePoints < ActiveRecord::Migration[5.1]
  def change
    create_table :movie_points do |t|
      t.integer :user_id
      t.integer :movie_id
      t.integer :value

      t.timestamps
    end
  end
end
