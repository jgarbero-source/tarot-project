class AddImgToCard < ActiveRecord::Migration[7.0]
  def change
    add_column :cards, :backImg, :string
  end
end
