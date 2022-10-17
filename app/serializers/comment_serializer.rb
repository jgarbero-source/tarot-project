class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :spread_id
end
