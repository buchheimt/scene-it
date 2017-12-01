class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :net_score, :percentage_score, :parent_id, :status, :timestamp, :total_points, :username, :post_short
end
