class InvoicesController < ApplicationController

    def create 
        newInvoice = Invoice.create(newInvoiceParams)
        render json: newInvoice
    end

    def update
        updateInvoice = Invoice.find_by(id: params[:id])
        render json: updateInvoice.update(updateInvoiceParams)
    end

    def total_invoiced
        totalInvoiced = Invoice.total_invoiced
        render json: totalInvoiced
    end

    def total_collected
        totalCollected = Invoice.total_collected
        render json: totalCollected
    end

    def total_outstanding
        totalOutstanding = Invoice.total_outstanding
        render json: totalOutstanding
    end
    
    private

    def newInvoiceParams
        params.permit(:invoice_date, :invoice_amount, :client_id, :property_id, :collected, :invoiced)
    end

    def updateInvoiceParams
        params.permit(:collected)
    end

end
