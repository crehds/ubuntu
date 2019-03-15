class Api::V1::DocumentosController < ApplicationController
  def index
    render json: Documento.all
  end

  def create
    tipo_documentos = TipoDocumento.find(params[:tipo_documento_id])
    estado_documentos = EstadoDocumento.find(params[:estado_documento_id])
    usuarios = Usuario.find(params[:usuario_id])
    destinatarios= Destinatario.find(params[:destinatario_id])


    documentos = Documento.new(tipo_documento_id: tipo_documentos.id, usuario_id: usuarios.id, destinatario_id: destinatarios.id, estado_documento_id: estado_documentos.id)
    documentos.update_attributes(documentos_params)

    documentos.save
    render json: documentos
  end

  def destroy
    Documento.destroy(params:id)
  end

  def update
    documentos = Documento.find(params[:id])
    documentos.update_attributes(documentos_params)
    render json: documentos
  end

  private
    def documentos_params
      params.require(:documentos).permit(:fecha_envio, :observaciones)
    end
end
