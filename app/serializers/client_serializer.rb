class ClientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email_address, :total_invoiced, :total_collected, :user_id

  has_many :invoices
  has_many :properties
end
