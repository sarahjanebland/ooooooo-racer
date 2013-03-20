class Player < ActiveRecord::Base
  has_many :games
  validates :name, :uniqueness => true 
  validates :name, :length => { :minimum => 1 }
end
