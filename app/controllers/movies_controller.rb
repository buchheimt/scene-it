class MoviesController < ApplicationController

  def index
    render json: Movie.all
  end

  def show
    render json: Movie.find_by_id(params[:id]), serializer: DetailedMovieSerializer, root: :person
  end

end
