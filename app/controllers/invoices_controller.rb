class InvoicesController < ApplicationController

    def create 
        newInvoice = Invoice.create(newInvoiceParams)
        if newInvoice.id
            render json: newInvoice, status: 201
        else 
            render json: { errors: ["please choose a property"] }, status: 422
        end
    end

    def update
        updateInvoice = Invoice.find_by(id: params[:id])
        render json: updateInvoice.update(updateInvoiceParams)
    end
    
    private

    def newInvoiceParams
        params.permit(:invoice_date, :invoice_amount, :client_id, :property_id, :collected, :invoiced)
    end

    def updateInvoiceParams
        params.permit(:collected)
    end

end
