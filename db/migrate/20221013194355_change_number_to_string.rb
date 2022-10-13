class ChangeNumberToString < ActiveRecord::Migration[7.0]
  def change
    change_column :cards, :number, :string
  end
end
