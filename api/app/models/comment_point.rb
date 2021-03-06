class CommentPoint < ApplicationRecord

  belongs_to :user
  belongs_to :comment

  validate :unique_join, on: :create
  validates_inclusion_of :value, in: -1..1

  def unique_join
    unless CommentPoint.find_on_join(self.user_id, self.comment_id).empty?
      errors.add(:comment_point, "already exists for this user and comment")
    end
  end

  def self.find_by_user(id)
    where('user_id = ?', id)
  end

  def self.find_on_join(user_id, comment_id)
    where('user_id = ? AND comment_id = ?', user_id, comment_id)
  end

end
