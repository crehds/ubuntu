class CreateOrdenDeCompras < ActiveRecord::Migration[5.2]
  def change
    create_table :orden_de_compras do |t|
      t.references :estado_orden_de_compra, foreign_key: true
      t.text :condicion_pago
      t.string :moneda_tc
      t.text :lugar_entrega
      t.text :plazo_entrega
      t.text :referencia

      t.timestamps
    end
  end
end
