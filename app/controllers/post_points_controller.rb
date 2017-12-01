class PostPointsController < ApplicationController

  def index
    post_points = PostPoint.find_by_user(params[:user_id])
    render json: post_points, each_serializer: PostPointDetailedSerializer
  end

  def create
    authenticate
    post_point = PostPoint.new(post_point_params)
    post_point.user = current_user
    if post_point.save
      render json: post_point, serializer: PostPointDetailedSerializer
    end
  end

  def update
    authenticate
    post_point = PostPoint.find_by_id(params[:id])
    if post_point.user == current_user && post_point.update(post_point_params)
      render json: post_point, serializer: PostPointDetailedSerializer
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
