class CommentsController < ApplicationController

  def create
    authenticate
    binding.pry
    comment = Comment.new(params)
  end

end
