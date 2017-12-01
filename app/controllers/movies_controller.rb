class MoviesController < ApplicationController

  def index
    render json: Movie.all
  end

  def show
    render json: Movie.find_by_id(params[:id]), serializer: MovieDetailedSerializer, include: 'posts'
  end

  def create
    authenticate
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      binding.pry
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :release_year, :description)
  end

end
