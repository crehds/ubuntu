class Api::V1::EmpresasController < ApplicationController
  def index
    render json: Empresa.all
  end

  def show
    empresas = Empresa.find(params[:id])
    render json: empresas
  end

  def create
    empresas = Empresa.create(empresas_params)
    render json: empresas
  end

  def destroy
    Empresa.destroy(params[:id])
  end

  def update
    empresas = Empresa.find(params[:id])
    empresas.update_attributes(empresas_params)
    render json: empresas
  end

  private
    def empresas_params
      params.require(:empresas).permit(:identificador_empresa, :nombre, :contacto, :direccion, :R_U_T, :email_empresa, :cuenta_bancaria)
    end
end
