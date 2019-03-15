class DetalleDocumento < ApplicationRecord
  belongs_to :documento
  belongs_to :tipo_documento
end
