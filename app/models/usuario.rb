class Usuario < ApplicationRecord
  belongs_to :empresa
  has_many :documentos
  accepts_nested_attributes_for :documentos
  validates_uniqueness_of :cuenta_usuario
end
