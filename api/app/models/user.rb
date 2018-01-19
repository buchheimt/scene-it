class User < ApplicationRecord

  has_secure_password
  has_many :movie_points
  has_many :post_points
  has_many :comment_points

  validates :username, uniqueness: true, presence: true
  validates :username, format: {with: /\A[\w ]+\z/, message: "username can only contain letters, numbers, and underscores"}
  validates :email, uniqueness: true, presence: true
  validates :email, format: {with: /.+@.+\..+/, message: "invalid email format"}
  validates :password, length: {minimum: 6}, presence: true

end
