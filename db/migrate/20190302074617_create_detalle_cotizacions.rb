class CreateDetalleCotizacions < ActiveRecord::Migration[5.2]
  def change
    create_table :detalle_cotizacions do |t|
      t.references :cotizacions, foreign_key: true
      t.text :producto
      t.integer :cantidad
      t.float :precio_unitario

      t.timestamps
    end
  end
end
