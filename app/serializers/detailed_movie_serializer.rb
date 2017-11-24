class DetailedMovieSerializer < ActiveModel::Serializer
  attributes :title, :description, :release_year, :id
  has_many :posts
end
