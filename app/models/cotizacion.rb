class Cotizacion < ApplicationRecord
  belongs_to :documento
  # self.primary_key = 'id_cotizacion'
  # validates_uniqueness_of :
end
