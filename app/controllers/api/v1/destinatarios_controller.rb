class Api::V1::DestinatariosController < ApplicationController
  def index
    render json: Destinatario.all
  end

  def create
    tipo_destinatarios = TipoDestinatario.find(params[:id])
    destinatario = tipo_destinatarios.create_destinatario(destinatarios_params)
    render json: destinatario
  end

  def destroy
    Destinatario.destroy(params:id)
  end

  def update
    destinatarios = Destinatario.find(params[:id])
    destinatarios.update_attributes(destinatarios_params)
    render json: destinatarios
  end

  private
    def destinatarios_params
      params.require(:destinatarios).permit(:nombre_destinatario, :contacto_destinatario, :email, :R_U_T)
    end
end
