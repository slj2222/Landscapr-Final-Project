class Client < ApplicationRecord
    belongs_to :user
    has_many :invoices
    has_many :properties

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :phone_number, presence: true
    validates :email_address, presence: true 
end
