class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :movie_id, :score
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
end
