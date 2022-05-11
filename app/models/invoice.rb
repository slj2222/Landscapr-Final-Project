class Invoice < ApplicationRecord
    belongs_to :client
    belongs_to :property

    validates :invoice_date, presence: true
    validates :invoice_date, length: {minimum: 10, maximum:10}
    validates :invoice_amount, presence: true
    


    # def self.total_invoiced
    #     sum{|invoice| invoice.invoice_amount}
    # end

    # def self.total_collected
    #     collected = where(collected: true)
    #     collected.sum{|i| i.invoice_amount}
    # end

    # def self.total_outstanding
    #     notCollected = where(collected: false)
    #     notCollected.sum{|i| i.invoice_amount}
    # end



end
