class SessionsController < ApplicationController

  def create
    user = User.find_by(email: auth_params[:email])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {
        jwt: jwt,
        username: user.username,
        email: user.email
      }
    end
  end

  def show
    user = current_user
    if (!!user)
      render json: {
        username: user.username,
        email: user.email
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
