class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :arcana, :suit, :img, :fortune_telling, :keywords, :light_meanings, :shadow_meanings, :archetype, :hebrew, :numerology, :elemental, :mythical, :questions
end
