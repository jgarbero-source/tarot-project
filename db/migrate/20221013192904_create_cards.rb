class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :number
      t.string :arcana
      t.string :suit
      t.string :img
      t.text :fortune_telling, default: [], array: true
      t.text :keywords, default: [], array: true
      t.text :light_meanings, default: [], array: true
      t.text :shadow_meanings, default: [], array: true
      t.string :archetype
      t.string :hebrew
      t.string :numerology
      t.string :elemental
      t.string :mythical
      t.text :questions, default: [], array: true

      t.timestamps
    end
  end
end
