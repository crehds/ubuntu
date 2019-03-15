class Destinatario < ApplicationRecord
  belongs_to :tipo_destinatario
  has_many :documentos
  accepts_nested_attributes_for :documentos
  # self.primary_key = 'id_destinatario'
  # validates_uniqueness_of :id_destinatario
end
