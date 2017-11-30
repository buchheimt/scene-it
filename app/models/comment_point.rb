class CommentPoint < ApplicationRecord

  belongs_to :user
  belongs_to :comment

  validate :unique_join, on: :create

  def unique_join
    unless CommentPoint.find_on_join(self.user_id, self.comment_id).empty?
      errors.add(:comment_point, "already exists for this user and comment")
    end
  end

  def self.find_on_join(user_id, comment_id)
    where('user_id = ? AND comment_id = ?', user_id, comment_id)
  end

  def self.find_on_join(user_id, comment_id)
    where('user_id = ? AND comment_id = ?', user_id, comment_id)
  end

end
