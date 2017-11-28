class Movie < ApplicationRecord

  has_many :posts
  has_many :comments, through: :posts
  has_many :movie_points

  def post_count
    self.posts.size > 0 ? self.posts.size : 0
  end

  def comment_count
    self.comments.size > 0 ? self.comments.size : 0
  end

end
