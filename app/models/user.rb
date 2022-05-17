class User < ApplicationRecord
    has_many :clients
    has_secure_password

    validates :username, uniqueness: true
    validates :username, presence: true
    validates :password, presence: true

    def ordered_invoices
        # self.clients.first.invoices
        # clientsArr = []
        # invoices = []
        # byebug
        # self.clients.map{|c| clientsArr.push(c)}
        # self.clients.map{|c| invoices.push(c.invoices)}
        # invoices.sort_by(&:created_at)
        self.clients.map{|c| c.invoices}.map{|i| i.sort_by(&:created_at)}.flatten!.reverse   
     end

    def total_invoiced
        self.clients.map{|c| c.invoices.sum{|i| i.invoice_amount}}.sum{|t| t}
    end

    def total_collected
        self.clients.map{|c| c.invoices.where(collected: true).sum{|i| i.invoice_amount}}.sum{|t| t}
    end

    def total_outstanding
        self.clients.map{|c| c.invoices.where(collected: false).sum{|i| i.invoice_amount}}.sum{|t| t}
    end
end
