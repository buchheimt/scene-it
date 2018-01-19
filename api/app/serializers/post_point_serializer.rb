class PostPointSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :value
end
