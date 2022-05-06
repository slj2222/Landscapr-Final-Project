class ClientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email_address, :total_invoiced, :total_collected, :company_id
end
