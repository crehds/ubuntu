class CreateUsuarios < ActiveRecord::Migration[5.2]
  def change
    create_table :usuarios do |t|
      t.references :empresa, foreign_key: true
      t.string :cuenta
      t.string :password
      t.text :nombre
      t.text :apellido
      t.string :cargo
      t.text :contacto
      t.text :email_usuario

      t.timestamps
    end
  end
end
