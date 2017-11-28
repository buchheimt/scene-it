class MovieSerializer < ActiveModel::Serializer
  attributes :title, :description, :release_year, :score, :id
end
