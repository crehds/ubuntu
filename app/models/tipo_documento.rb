class TipoDocumento < ApplicationRecord
  # self.primary_key = 'id_tipo_documento'
  has_one :documento
  has_one :detalle_documento, :through => :documento
  accepts_nested_attributes_for :documento
  validates_uniqueness_of :id_tipo_documento
end
