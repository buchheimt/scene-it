class CommentsController < ApplicationController

  def create
    authenticate
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    if comment.save
      render json: comment
    end
    puts comment.errors.full_messages
  end

  def update
    authenticate
    comment = Comment.find_by_id(params[:id])
    case params[:updateAction]
    when 'addPoint'
      comment.score += 1
    when 'subtractPoint'
      comment.score -= 1
    end
    if comment.save
      render json: comment
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id)
  end

end
