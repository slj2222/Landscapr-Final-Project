class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.float :quoted_amount
      t.integer :client_id

      t.timestamps
    end
  end
end
