class Documento < ApplicationRecord
  belongs_to :tipo_documento
  belongs_to :usuario
  belongs_to :destinatario
  belongs_to :estado_documento
  # self.primary_key = 'id_documento'
  has_many :detalle_documentos
  has_one :cotizacion
  has_one :orden_de_compra
  # validates_uniqueness_of :id_documento
end
