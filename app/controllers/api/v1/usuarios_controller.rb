class Api::V1::UsuariosController < ApplicationController
  def index
    if params[:id_empresa]
    usuarios = Empresa.find(params[:id]).includes(:empresas).usuarios
    else
      usuarios = Usuarios.all
      render json:usuarios
    end
  end

  def new
    usuarios = Usuario.find(params[:id])
    render json: usuarios
  end

  def create
    empresas = Empresa.find(params[:id])
    usuarios = empresas.usuarios.create(usuarios_params)
    if usuarios.save
      render usuarios.errors.full_messages
    else
      render json: usuarios
    end
  end

  def show
    usuarios = Empresa.find(params[:id]).usuarios
    render json: usuarios
  end

  def destroy
    Usuario.destroy(params[:id])
  end

  def update
    usuarios = Usuario.find(params[:id])
    usuarios.update_attributes(usuarios_params)
    render json: usuarios
  end

  private
    def usuarios_params
      params.require(:usuarios).permit(:cuenta_usuario, :password, :nombre, :apellido, :contacto_usuario, :cargo, :email_usuario)
    end
end
