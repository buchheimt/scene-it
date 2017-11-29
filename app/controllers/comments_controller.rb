class CommentsController < ApplicationController

  def create
    authenticate
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    if comment.save
      render json: comment
    end
  end

  def update
    authenticate
    comment = Comment.find_by_id(params[:id])
    authorize comment
    if comment.update(comment_params)
      render json: comment
    else
      binding.pry
    end
  end

  def destroy
    authenticate
    comment = Comment.find_by_id(params[:id])
    authorize comment
    if comment.update(content: '[removed]', status: 0)
      render json: comment
    else
      binding.pry
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, :parent_id)
  end

end
