class Post < ApplicationRecord

  belongs_to :movie
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments

  def self.find_by_movie(movie_id)
    where(movie_id: movie_id.to_i)
  end

  def comment_count
    self.comments.size
  end

end
