class Api::V1::TipoDocumentosController < ApplicationController
  def index
    render json: TipoDocumento.all
  end

  def create
    tipo_documentos = TipoDocumento.create(tipo_documentos_params)
    render json: tipo_documentos
  end

  def destroy
    TipoDocumento.destroy(params[:id])
  end

  def update
    tipo_documentos = TipoDocumento.find(params[:id])
    tipo_documentos.update_attributes(tipo_documentos_params)
    render json: tipo_documentos
  end

  private
    def tipo_documentos_params
      params.require(:tipo_documentos).permit(:id_tipo_documento, :tipo_documento)
    end
end
