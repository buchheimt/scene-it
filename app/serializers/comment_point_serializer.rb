class CommentPointSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment_id, :value
  belongs_to :comment
end
