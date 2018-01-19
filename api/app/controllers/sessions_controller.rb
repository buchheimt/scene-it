class SessionsController < ApplicationController

  def create
    user = User.find_by(email: auth_params[:email])
    if user && user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {
        jwt: jwt,
        username: user.username,
        email: user.email,
        id: user.id,
        movie_points: MoviePoint.find_by_user(user.id),
        post_points: PostPoint.find_by_user(user.id),
        comment_points: CommentPoint.find_by_user(user.id)
      }
    else
      render json: {
        errors: "invalid login credentials"
      }
    end
  end

  def show
    user = current_user
    if (!!user)
      render json: {
        username: user.username,
        email: user.email,
        id: user.id,
        movie_points: MoviePoint.find_by_user(user.id),
        post_points: PostPoint.find_by_user(user.id),
        comment_points: CommentPoint.find_by_user(user.id)
      }
    else
      render json: {}
    end
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :password)
  end

end
