# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# empresa = 'Mirage'

Empresa.create(identificador_empresa: 'MIG', nombre: 'Mirage', contacto: '960265942', direccion: 'San martin de porres', R_U_T: 'k-12457892', email_empresa: 'yunqui@gmail.com', cuenta_bancaria: '4125-478598')

empresa = Empresa.find(1);

empresa.usuarios.create(cuenta_usuario: 'carlos15', password: 'vaguin', nombre: 'carlos', apellido: 'rodriguez', contacto_usuario: '960265942', cargo: 'administrador', email_usuario: 'carlos15erh@gmail.com');


TipoDocumento.create(id_tipo_documento: 'C', tipo_documento: 'Cotizacion')
TipoDocumento.create(id_tipo_documento: 'OC', tipo_documento: 'Orden de compra')

EstadoDocumento.create(id_estado_documento: 'E', estado_documento: 'Enviado')
EstadoDocumento.create(id_estado_documento: 'A', estado_documento: 'Aceptado')
EstadoDocumento.create(id_estado_documento: 'R', estado_documento: 'Rechazado')
EstadoDocumento.create(id_estado_documento: 'G', estado_documento: 'Generado')

TipoDestinatario.create(id_tipo_destinatario: 'PR', tipo_destinatario: 'Proveedor')
TipoDestinatario.create(id_tipo_destinatario: 'CL', tipo_destinatario: 'Cliente')
