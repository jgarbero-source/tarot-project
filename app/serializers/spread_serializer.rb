class SpreadSerializer < ActiveModel::Serializer
  attributes :id, :number, :user_id, :card_id, :created_at, :updated_at
end
