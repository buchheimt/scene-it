class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :movie_id, :net_score, :percentage_score, :comment_count, :total_points, :username
end
