class DetailedMovieSerializer < ActiveModel::Serializer
  attributes :title, :description, :release_year, :score, :post_count, :comment_count, :id
  has_many :posts
end
