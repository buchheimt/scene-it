class MovieSerializer < ActiveModel::Serializer
  attributes :title, :description, :release_year, :net_score, :percentage_score, :post_count, :comment_count, :id
  has_many :movie_points
end
