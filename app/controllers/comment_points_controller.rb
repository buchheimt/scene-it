class CommentPointsController < ApplicationController

  def create
    authenticate
    comment_point = CommentPoint.new(comment_point_params)
    comment_point.user = current_user
    if comment_point.save
      render json: comment_point.comment
    else
      binding.pry
    end
  end

  def update
    authenticate
  end

  def destroy
    authenticate
  end

  private

  def comment_point_params
    params.require(:comment_point).permit(:comment_id, :value)
  end

end
