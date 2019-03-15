class Api::V1::TipoDestinatariosController < ApplicationController
  def index
    render json: TipoDestinatario.all
  end

  def create
    tipo_destinatarios = TipoDestinatario.create(tipo_destinatarios_params)
    render json: tipo_destinatarios
  end

  def destroy
    TipoDestinatario.destroy(params[:id])
  end

  def update
    tipo_destinatarios = TipoDestinatario.find(params[:id])
    tipo_destinatarios.update_attributes(tipo_destinatarios_params)
    render json: tipo_destinatarios
  end

  private
    def tipo_destinatarios_params
      params.require(:tipo_destinatarios).permit(:id_tipo_destinatario, :tipo_destinatario)
    end
end
