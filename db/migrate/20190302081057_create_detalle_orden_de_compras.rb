class CreateDetalleOrdenDeCompras < ActiveRecord::Migration[5.2]
  def change
    create_table :detalle_orden_de_compras do |t|
      t.references :orden_de_compra, foreign_key: true
      t.text :producto
      t.integer :cantidad
      t.float :precio_unitario

      t.timestamps
    end
  end
end
