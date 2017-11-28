class User < ApplicationRecord

  has_secure_password
  has_many :movie_points
  has_many :post_points
  has_many :comment_points

end
