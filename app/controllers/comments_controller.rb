class CommentsController < ApplicationController

  def index
    render json: Comment.find_by_post(params[:post_id])
  end

end
