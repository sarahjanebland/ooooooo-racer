class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string  :time
      t.integer :winner
      t.string :url
      t.integer :player1_id
      t.integer :player2_id
    end
  end
end
