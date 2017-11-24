class PostsController < ApplicationController

  def show
    render json: Post.find_by_id(params[:id])
  end

end
