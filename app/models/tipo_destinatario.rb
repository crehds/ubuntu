class TipoDestinatario < ApplicationRecord
  # self.primary_key = 'id_tipo_destinatario'
  has_one :destinatario
  validates_uniqueness_of :id_tipo_destinatario
end
