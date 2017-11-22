class DetailedMovieSerializer < ActiveModel::Serializer
  attributes :title, :description, :release_year, :id
  has_many :posts
  root: :movie
end
