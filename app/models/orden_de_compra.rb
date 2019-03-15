class OrdenDeCompra < ApplicationRecord
  belongs_to :documento
  # self.primary_key = 'id_orden_de_compra'
  # validates_uniqueness_of :id_orden_de_compra, :id_documento
end
