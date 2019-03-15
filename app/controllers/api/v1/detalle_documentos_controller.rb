class Api::V1::DetalleDocumentosController < ApplicationController
  def index
    render json: DetalleDocumento.all
  end

  def create
    tipo_documentos = TipoDocumento.find(params[:tipo_documento_id])
    documentos = Documento.find(params[:documento_id])

    template = []
    params[:detalle_documentos].each do |id,attrs|
      template = attrs.map { |x| x}.each_slice(3).to_a
    end

    template.each { |sub_a|
      detalle_documentos = DetalleDocumento.new(tipo_documento_id: tipo_documentos.id, documento_id: documentos.id)
      detalle_documentos.update_attributes(:producto => sub_a[0], :cantidad => sub_a[1], :precio_unitario => sub_a[2])
    }

    render json: documentos
  end

  def destroy
    DetalleDocumento.destroy(params:id)
  end

  def update
    detalle_documentos = DetalleDocumento.find(params[:id])
    detalle_documentos.update_attributes(detalle_documentos_params)
    render json: detalle_documentos
  end

  private
    def detalle_documentos_params(array)
      params.require(:detalle_documentos).permit(:producto, :cantidad, :precio_unitario)
    end
end
