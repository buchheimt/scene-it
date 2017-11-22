class Post < ApplicationRecord

  belongs_to :movie

  def self.find_by_movie(movie_id)
    where(movie_id: movie_id.to_i)
  end

end
