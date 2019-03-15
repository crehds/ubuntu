class CreateCotizacions < ActiveRecord::Migration[5.2]
  def change
    create_table :cotizacions do |t|
      t.references :estado_cotizacion, foreign_key: true
      t.references :destinatario, foreign_key: true
      t.text :condicion_pago
      t.text :validez_oferta
      t.text :tiempo_entrega
      t.text :lugar_entrega
      t.string :descuento

      t.timestamps
    end
  end
end
