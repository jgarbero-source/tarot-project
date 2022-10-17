class CreateSpreads < ActiveRecord::Migration[7.0]
  def change
    create_table :spreads do |t|
      t.integer :number
      t.integer :user_id
      t.integer :card_id, default: [], array: true

      t.timestamps
    end
  end
end
