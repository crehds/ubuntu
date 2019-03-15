class Api::V1::EstadoDocumentosController < ApplicationController
  def index
    render json: EstadoDocumento.all
  end

  def create
    estado_documentos = EstadoDocumento.create(estado_documentos_params)
    render json: estado_documentos
  end

  def destroy
    EstadoDocumento.destroy(params[:id])
  end

  def update
    estado_documentos = EstadoDocumento.find(params[:id])
    estado_documentos.update_attributes(documentos_params)
    render json: estado_documentos
  end

  private
    def estado_documentos_params
      params.require(:estado_documentos).permit(:id_estado_documento, :estado_documento)
    end
end
