class CommentPolicy < ApplicationPolicy

  def update?
    record.user_id == user.id
  end

  def destroy?
    update?
  end

end
