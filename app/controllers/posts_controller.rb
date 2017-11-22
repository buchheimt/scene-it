class PostsController < ApplicationController

  def index
    render json: Post.find_by_movie(params[:movie_id])
  end

end
