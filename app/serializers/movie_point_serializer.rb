class MoviePointSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :value
end
