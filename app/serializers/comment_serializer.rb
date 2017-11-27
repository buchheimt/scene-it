class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :score, :parent_id
  belongs_to :user
end
