class MoviesController < ApplicationController

  def index
    render json: Movie.all
  end

  def show
    render json: Movie.find_by_id(params[:id])
  end

  def update
    authenticate
    movie = Movie.find_by_id(params[:id])
    case params[:updateAction]
    when 'addPoint'
      movie.score += 1
    when 'subtractPoint'
      movie.score -= 1
    end
    if movie.save
      render json: movie
    end
  end

end
