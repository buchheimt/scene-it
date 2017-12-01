class MoviePointsController < ApplicationController

  def index
    movie_points = MoviePoint.find_by_user(params[:user_id])
    render json: movie_points, each_serializer: MoviePointDetailedSerializer
  end

  def create
    authenticate
    movie_point = MoviePoint.new(movie_point_params)
    movie_point.user = current_user
    if movie_point.save
      render json: movie_point, serializer: MoviePointDetailedSerializer
    end
  end

  def update
    authenticate
    movie_point = MoviePoint.find_by_id(params[:id])
    if movie_point.user == current_user && movie_point.update(movie_point_params)
      render json: movie_point, serializer: MoviePointDetailedSerializer
    end

  end

  def destroy
    authenticate
  end

  private

  def movie_point_params
    params.require(:movie_point).permit(:movie_id, :value)
  end

end
