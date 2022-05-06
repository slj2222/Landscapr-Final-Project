class PropertySerializer < ActiveModel::Serializer
  attributes :id, :street_address, :city, :state, :zip_code, :quoted_amount, :client_id
end
