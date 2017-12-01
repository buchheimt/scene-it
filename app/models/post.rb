include ActionView::Helpers::DateHelper
include ActionView::Helpers::NumberHelper

class Post < ApplicationRecord

  belongs_to :movie
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
  has_many :comment_points, through: :comments
  has_many :post_points

  def username
    self.user.username
  end

  def comment_count
    self.comments.size > 0 ? self.comments.size : 0
  end

  def net_score
    self.post_points.inject(0) {|sum, pp| sum += pp.value}
  end

  def percentage_score
    decimal_score = self.post_points.count {|pp| pp.value == 1} / self.post_points.size.to_f * 100
    self.post_points.size != 0 ? number_to_percentage(decimal_score, precision: 0) : ''
  end

  def total_points
    self.post_points.size
  end

  def timestamp
    "#{time_ago_in_words(self.created_at)} ago"
  end

  def self.find_by_movie(movie_id)
    where(movie_id: movie_id.to_i)
  end

end
