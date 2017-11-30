class PostsController < ApplicationController

  def show
    render json: Post.find_by_id(params[:id]), serializer: PostDetailedSerializer, include: 'comments'
  end

  def create
    post = Post.new(post_params)
    post.user = current_user
    if post.save
      render json: post
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :movie_id)
  end

end
