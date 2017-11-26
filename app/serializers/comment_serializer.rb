class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :score
  belongs_to :user
end
