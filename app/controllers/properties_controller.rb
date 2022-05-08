class PropertiesController < ApplicationController

    def create
        newProperty = Property.create(newPropertyParams)
        render json: newProperty
    end

    private
    
    def newPropertyParams
        params.permit(:street_address, :city, :state, :zip_code, :client_id, :quoted_amount)
    end

end
