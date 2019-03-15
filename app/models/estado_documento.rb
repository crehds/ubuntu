class EstadoDocumento < ApplicationRecord
  # self.primary_key = 'id_estado_documento'
  has_one :documento
  accepts_nested_attributes_for :documento
  # has_one :destinatario, through: :documento
  validates_uniqueness_of :id_estado_documento
end
