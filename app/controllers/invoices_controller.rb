class InvoicesController < ApplicationController

    def create 
        newInvoice = Invoice.create(newInvoiceParams)
        render json: newInvoice
    end

    private

    def newInvoiceParams
        params.permit(:invoice_date, :invoice_amount, :client_id, :property_id, :collected, :invoiced)
    end

end
