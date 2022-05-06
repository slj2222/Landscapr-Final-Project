class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.string :invoice_date
      t.float :invoice_amount
      t.integer :client_id
      t.integer :property_id
      t.boolean :collected
      t.boolean :invoiced

      t.timestamps
    end
  end
end
