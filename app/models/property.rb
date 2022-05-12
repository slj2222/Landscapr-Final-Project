class Property < ApplicationRecord
    belongs_to :client
    has_many :invoices

    validates :street_address, presence: true
    validates :street_address, uniqueness: true
    validates :city, presence: true
    validates :state, presence: true
    validates :state, length: {minimum:2, maximum:2}
    validates :zip_code, presence: true
    validates :zip_code, length: {minimum:5, maximum:5}
    validates :quoted_amount, presence: true


end
