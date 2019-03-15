class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  # config.token_secret_signature_key = -> { Rails.application.credentials.secret_key_base }
end
