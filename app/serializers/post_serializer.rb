class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :movie_id, :score
  has_many :comments
  has_many :users, through: :comments
end
