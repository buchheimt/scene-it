class PostPoint < ApplicationRecord

  belongs_to :user
  belongs_to :post

  validate :unique_join, on: :create

  def unique_join
    unless PostPoint.find_on_join(self.user_id, self.post_id).empty?
      errors.add(:post_point, "already exists for this user and post")
    end
  end

  def self.find_on_join(user_id, post_id)
    where('user_id = ? AND post_id = ?', user_id, post_id)
  end

end
