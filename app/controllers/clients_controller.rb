class ClientsController < ApplicationController

    def index
        userClients = Client.where(user_id: session[:user_id])
        render json: userClients
    end
end
