class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :movie_id
  has_many :comments
end
