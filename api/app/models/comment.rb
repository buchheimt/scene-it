include ActionView::Helpers::DateHelper
include ActionView::Helpers::NumberHelper

class Comment < ApplicationRecord

  belongs_to :post
  belongs_to :user
  delegate :movie, to: :post
  has_many :comment_points

  def username
    self.user.username
  end

  def net_score
    self.comment_points.inject(0) {|sum, cp| sum += cp.value}
  end

  def percentage_score
    decimal_score = self.comment_points.count {|cp| cp.value == 1} / self.comment_points.size.to_f * 100
    self.comment_points.size != 0 ? number_to_percentage(decimal_score, precision: 0) : ''
  end

  def total_points
    self.comment_points.size
  end

  def timestamp
    "#{time_ago_in_words(self.created_at)} ago"
  end

  def post_short
    "#{self.post.movie_short} - #{self.post.title}"
  end

  def self.find_by_post(post_id)
    where(post_id: post_id.to_i)
  end

  def self.find_by_user(user_id)
    where(user_id: user_id.to_i)
  end

end
