# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




u1 = User.create(username: "ABC", password: "123")
u2 = User.create(username: "DEF", password: "123")

c1 = Client.create(first_name: "client", last_name: "1", phone_number: "111-111-1111", email_address: "client1@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u1.id)
c2 = Client.create(first_name: "client", last_name: "2", phone_number: "222-222-2222", email_address: "client2@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u1.id)
c3 = Client.create(first_name: "client", last_name: "3", phone_number: "333-333-3333", email_address: "client3@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u2.id)
c4 = Client.create(first_name: "client", last_name: "4", phone_number: "444-444-4444", email_address: "client4@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u2.id)

p1 = Property.create(street_address: "111 S One St", city: "Springfield", state: "MO", zip_code: 11111, quoted_amount: 10.00, client_id: c1.id)
p2 = Property.create(street_address: "111 S One St", city: "Springfield", state: "MO", zip_code: 11111, quoted_amount: 10.00, client_id: c1.id)
p3 = Property.create(street_address: "222 S Two St", city: "Springfield", state: "MO", zip_code: 22222, quoted_amount: 20.00, client_id: c2.id)
p4 = Property.create(street_address: "222 S Two St", city: "Springfield", state: "MO", zip_code: 22222, quoted_amount: 20.00, client_id: c2.id)
p5 = Property.create(street_address: "333 S Three St", city: "Springfield", state: "MO", zip_code: 33333, quoted_amount: 30.00, client_id: c3.id)
p6 = Property.create(street_address: "333 S Three St", city: "Springfield", state: "MO", zip_code: 33333, quoted_amount: 30.00, client_id: c3.id)
p7 = Property.create(street_address: "444 S Four St", city: "Springfield", state: "MO", zip_code: 44444, quoted_amount: 40.00, client_id: c4.id)
p8 = Property.create(street_address: "444 S Four St", city: "Springfield", state: "MO", zip_code: 44444, quoted_amount: 40.00, client_id: c4.id)

i1 = Invoice.create(invoice_date: "1/1/2021", invoice_amount: 101.00, client_id: c1.id, property_id: p1.id, collected: false, invoiced: true)
i2 = Invoice.create(invoice_date: "2/2/2022", invoice_amount: 102.00, client_id: c2.id, property_id: p2.id, collected: false, invoiced: true)
i3 = Invoice.create(invoice_date: "3/3/2023", invoice_amount: 103.00, client_id: c3.id, property_id: p3.id, collected: true, invoiced: true)
i4 = Invoice.create(invoice_date: "4/4/2024", invoice_amount: 104.00, client_id: c4.id, property_id: p3.id, collected: true, invoiced: true)


puts "done seeding"