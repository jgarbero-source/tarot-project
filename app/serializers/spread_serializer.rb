class SpreadSerializer < ActiveModel::Serializer
  attributes :id, :number, :user_id, :card_id
end
