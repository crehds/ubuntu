# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_02_081057) do

  create_table "cotizacions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "estado_cotizacion_id"
    t.bigint "destinatario_id"
    t.text "condicion_pago"
    t.text "validez_oferta"
    t.text "tiempo_entrega"
    t.text "lugar_entrega"
    t.string "descuento"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["destinatario_id"], name: "index_cotizacions_on_destinatario_id"
    t.index ["estado_cotizacion_id"], name: "index_cotizacions_on_estado_cotizacion_id"
  end

  create_table "destinatarios", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "razon_social"
    t.string "R_U_T"
    t.text "contacto"
    t.text "encargado"
    t.text "email"
    t.text "direccion"
    t.text "ciudad"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "detalle_cotizacions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "cotizacions_id"
    t.text "producto"
    t.integer "cantidad"
    t.float "precio_unitario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cotizacions_id"], name: "index_detalle_cotizacions_on_cotizacions_id"
  end

  create_table "detalle_orden_de_compras", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "orden_de_compra_id"
    t.text "producto"
    t.integer "cantidad"
    t.float "precio_unitario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["orden_de_compra_id"], name: "index_detalle_orden_de_compras_on_orden_de_compra_id"
  end

  create_table "empresas", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "razon_social"
    t.text "direccion"
    t.text "R_U_T"
    t.text "contacto"
    t.text "email_empresa"
    t.string "ciudad"
    t.text "giro"
    t.text "cuenta_bancaria"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "estado_cotizacions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "id_estado_cotizacion"
    t.string "estado_cotizacion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "estado_orden_de_compras", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "id_estado_orden_de_compras"
    t.string "estado_orden_de_compra"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orden_de_compras", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "estado_orden_de_compra_id"
    t.text "condicion_pago"
    t.string "moneda_tc"
    t.text "lugar_entrega"
    t.text "plazo_entrega"
    t.text "referencia"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["estado_orden_de_compra_id"], name: "index_orden_de_compras_on_estado_orden_de_compra_id"
  end

  create_table "usuarios", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "empresa_id"
    t.string "cuenta"
    t.string "password"
    t.text "nombre"
    t.text "apellido"
    t.string "cargo"
    t.text "contacto"
    t.text "email_usuario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["empresa_id"], name: "index_usuarios_on_empresa_id"
  end

  add_foreign_key "cotizacions", "destinatarios"
  add_foreign_key "cotizacions", "estado_cotizacions"
  add_foreign_key "detalle_cotizacions", "cotizacions", column: "cotizacions_id"
  add_foreign_key "detalle_orden_de_compras", "orden_de_compras"
  add_foreign_key "orden_de_compras", "estado_orden_de_compras"
  add_foreign_key "usuarios", "empresas"
end
