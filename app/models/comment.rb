class Comment < ApplicationRecord

  belongs_to :post
  belongs_to :user
  delegate :movie, to: :post

  def self.find_by_post(post_id)
    where(post_id: post_id.to_i)
  end

end
