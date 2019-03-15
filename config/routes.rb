Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      post "/empresas/:id/usuarios", :to => 'usuarios#create'
      get "empresas/:id/usuarios", :to => 'usuarios#show'

      get "/empresas/:id/empresas", :to => 'empresas#show'

      resource :empresas, only: [:index, :show, :create, :destroy , :update] do
        resources :usuarios, only: [:index, :new,:show,:create, :destroy, :update]
      end

      post "/tipo_destinatarios/:id/destinatarios", :to => 'destinatarios#create'

      resources :tipo_destinatarios, only: [:index, :create, :destroy, :update] do
        resources :destinatarios, only: [:index, :create, :destroy, :update]
      end

      resources :tipo_documentos, only: [:index, :create] do
        resources :estado_documentos, only: [:index, :create] do
          resources :usuarios, only: [:index, :create] do
            resources :destinatarios, only: [:index, :create] do
              resources :documentos, only: [:index, :create]
            end
          end
        end
      end

      resources :tipo_documentos, only: [:index, :create] do
        resources :documentos, only: [:index, :create] do
          resources :detalle_documentos, only: [:index, :create, :destroy, :update]
        end
      end

      resources :documentos, only: [:index, :create] do
        resources :cotizacions, only: [:index, :create, :show, :destroy, :update]
        resources :orden_de_compras, only: [:index, :create, :show, :destroy, :update]
      end

      # resources :tipo_documentos, only: [:index, :create, :destroy, :update]
      # resources :estado_documentos, only: [:index, :create, :destroy, :update]
      # resources :cotizacion, only: [:index, :create, :destroy, :update]
      # resources :orden_de_compras, only: [:index, :create, :destroy, :update]

    end
  end

  root to: 'pages#home'
end
