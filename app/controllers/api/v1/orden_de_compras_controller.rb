class Api::V1::OrdenDeComprasController < ApplicationController
  def index
    if params[:documento_id]
    cotizacion = Documento.find(params[:id]).includes(:documentos).cotizacion
    else
      cotizacion = Cotizacion.all
      render json:cotizacion
    end
  end

  def new
    cotizacion = Cotizacion.find(params[:id])
    render json: cotizacion
  end

  def create
    documentos = Documento.find(params[:id])
    cotizacion = documentos.create_cotizacion(usuarios_params)

    render json: cotizacion
  end

  def show
    cotizacion = Documento.find(params[:id]).cotizacion
    render json: cotizacion
  end

  def destroy
    Cotizacion.destroy(params[:id])
  end

  def update
    cotizacion = Cotizacion.find(params[:id])
    cotizacion.update_attributes(usuarios_params)
    render json: cotizacion
  end

  private
    def usuarios_params
      params.require(:cotizacions).permit(:cuenta_usuario, :password, :nombre, :apellido, :contacto_usuario, :cargo, :email_usuario)
    end
end
