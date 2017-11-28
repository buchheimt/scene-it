class CommentPointsController < ApplicationController

  def create
    authenticate
    comment_point = CommentPoint.new(comment_point_params)
    comment_point.user = current_user
    if comment_point.save
      render json: comment_point
    else
      binding.pry
    end
  end

  def update
    authenticate
    comment_point = CommentPoint.find_by_id(params[:id])
    if comment_point.user == current_user
      if comment_point.update(comment_point_params)
        render json: comment_point
      else
        binding.pry
      end
    else
      binding.pry
    end

  end

  def destroy
    authenticate
  end

  private

  def comment_point_params
    params.require(:comment_point).permit(:comment_id, :value)
  end

end
