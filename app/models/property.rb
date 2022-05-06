class Property < ApplicationRecord
    belongs_to :client
    has_many :invoices
end
