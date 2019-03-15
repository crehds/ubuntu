class CreateEmpresas < ActiveRecord::Migration[5.2]
  def change
    create_table :empresas do |t|
      t.text :razon_social
      t.text :direccion
      t.text :R_U_T
      t.text :contacto
      t.text :email_empresa
      t.string :ciudad
      t.text :giro
      t.text :cuenta_bancaria

      t.timestamps
    end
  end
end
