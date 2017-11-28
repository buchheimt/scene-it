class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :score, :parent_id, :timestamp
  belongs_to :user
end
