require 'securerandom'

class Game < ActiveRecord::Base
  belongs_to :player
  validates :player1_id, :presence => true
  validates :player2_id, :presence => true

  before_create :url_generator

  def url_generator
    url = SecureRandom.urlsafe_base64(10)
    self.url = url
  end

end
