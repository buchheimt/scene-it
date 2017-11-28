class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :net_score, :percentage_score, :parent_id, :timestamp
  belongs_to :user
  has_many :comment_points
end
