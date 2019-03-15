class Empresa < ApplicationRecord
  # self.primary_key = 'id_empresa'
  has_many :usuarios
  validates_uniqueness_of :nombre
end
