class PostPointsController < ApplicationController

  def create
    authenticate
    post_point = PostPoint.new(post_point_params)
    post_point.user = current_user
    if post_point.save
      render json: post_point
    else
      binding.pry
    end
  end

  def update
    authenticate
    post_point = PostPoint.find_by_id(params[:id])
    if post_point.user == current_user
      if post_point.update(post_point_params)
        render json: post_point
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

  def post_point_params
    params.require(:post_point).permit(:post_id, :value)
  end

end
