class ClientsController < ApplicationController

    def index
        userClients = Client.where(user_id: session[:user_id])
        render json: userClients
    end

    def show
        showClient = Client.find(params[:id])
        if showClient
            render json: showClient
        else
            render json: {error: "Client not found" }, status: 404
        end
    end

    def create
        newClient = Client.create(newClientParams)
        render json: newClient
    end

    def update
        editClient = Client.find(params[:id])
        render json: editClient.update(editClientParams)
    end

    def destroy
        deleteClient = Client.find(params[:id])
        if deleteClient
            deleteClient.destroy
        else
            render json: { error: "Client not found"}, status: 404
        end
    end


    private

    def newClientParams
        params.permit( :first_name, :last_name, :phone_number, :email_address, :total_invoiced, :total_collected, :user_id)
    end

    def editClientParams
        params.permit( :first_name, :last_name, :phone_number, :email_address)
    end

end
