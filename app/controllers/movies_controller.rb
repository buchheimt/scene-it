class MoviesController < ApplicationController

  def index
    render json: Movie.all
  end

  def show
    render json: Movie.first, serializer: DetailedMovieSerializer, root: :person
  end

end
