class CreateEstadoCotizacions < ActiveRecord::Migration[5.2]
  def change
    create_table :estado_cotizacions do |t|
      t.string :id_estado_cotizacion
      t.string :estado_cotizacion

      t.timestamps
    end
  end
end
