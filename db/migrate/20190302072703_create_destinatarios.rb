class CreateDestinatarios < ActiveRecord::Migration[5.2]
  def change
    create_table :destinatarios do |t|
      t.text :razon_social
      t.string :R_U_T
      t.text :contacto
      t.text :encargado
      t.text :email
      t.text :direccion
      t.text :ciudad

      t.timestamps
    end
  end
end
