class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email_address
      t.float :total_invoiced
      t.float :total_collected
      t.integer :user_id

      t.timestamps
    end
  end
end
