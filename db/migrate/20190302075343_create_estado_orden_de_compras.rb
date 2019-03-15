class CreateEstadoOrdenDeCompras < ActiveRecord::Migration[5.2]
  def change
    create_table :estado_orden_de_compras do |t|
      t.string :id_estado_orden_de_compras
      t.string :estado_orden_de_compra

      t.timestamps
    end
  end
end
