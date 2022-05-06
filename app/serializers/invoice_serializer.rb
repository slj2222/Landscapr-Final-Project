class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :invoice_date, :invoice_amount, :client_id, :property_id, :collected, :invoiced
end
