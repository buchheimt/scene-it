class CommentPointSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment_id, :value
end
