class PropertiesController < ApplicationController

    def create
        newProperty = Property.create(newPropertyParams)
        render json: newProperty
    end

    def update
        editProperty = Property.find(params[:id])
        render json: editProperty.update(editPropertyParams)
    end

    def destroy
        deletProperty = Property.find(params[:id])
        deletProperty.destroy
    end

    private
    
    def newPropertyParams
        params.permit(:street_address, :city, :state, :zip_code, :client_id, :quoted_amount)
    end

    def editPropertyParams
        params.permit(:street_address, :city, :state, :zip_code, :quoted_amount)
    end

end
