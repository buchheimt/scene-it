class SessionsController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      jwt = Auth.issue({user: user.id})
      render json: {
        jwt: jwt,
        username: user.username,
        email: user.email,
        id: user.id,
        movie_points: [],
        post_points: [],
        comment_points: []
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
