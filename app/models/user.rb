class User < ApplicationRecord
    has_many :clients
    has_secure_password

    validates :username, uniqueness: true

    

    def total_invoiced
        self.clients.map{|client| client.invoices.sum{|i| i.invoice_amount}}.sum{|t| t}
    end

    def total_collected
        self.clients.map{|c| c.invoices.where(collected: true).sum{|i| i.invoice_amount}}.sum{|t| t}
    end

    def total_outstanding
        self.clients.map{|c| c.invoices.where(collected: false).sum{|i| i.invoice_amount}}.sum{|t| t}
    end
end
