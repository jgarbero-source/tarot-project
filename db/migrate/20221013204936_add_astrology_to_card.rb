class AddAstrologyToCard < ActiveRecord::Migration[7.0]
  def change
    add_column :cards, :astrology, :string
  end
end
