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

  def net_score
    self.movie_points.inject(0) {|sum, mp| sum += mp.value}
  end

  def percentage_score
    decimal_score = self.movie_points.count {|mp| mp.value == 1} / self.movie_points.size.to_f * 100
    self.movie_points.size != 0 ? number_to_percentage(decimal_score, precision: 0) : ''
  end

end
