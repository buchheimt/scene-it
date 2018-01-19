class MoviePointDetailedSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :value
  belongs_to :movie
end
