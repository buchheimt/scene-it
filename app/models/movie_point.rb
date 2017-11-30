class MoviePoint < ApplicationRecord

  belongs_to :user
  belongs_to :movie

  validate :unique_join, on: :create

  def unique_join
    unless MoviePoint.find_on_join(self.user_id, self.movie_id).empty?
      errors.add(:movie_point, "already exists for this user and movie")
    end
  end

  def self.find_by_user(id)
    where('user_id = ?', id)
  end

  def self.find_on_join(user_id, movie_id)
    where('user_id = ? AND movie_id = ?', user_id, movie_id)
  end

end
