class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :movie_id, :net_score, :percentage_score, :comment_count, :total_points
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
  has_many :comment_points, through: :comments
end
