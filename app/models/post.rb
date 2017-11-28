class Post < ApplicationRecord

  belongs_to :movie
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
  has_many :comment_points, through: :comments
  has_many :post_points

  def self.find_by_movie(movie_id)
    where(movie_id: movie_id.to_i)
  end

  def comment_count
    self.comments.size > 0 ? self.comments.size : 0
  end

end
