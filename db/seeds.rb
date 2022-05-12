# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




u1 = User.create(username: "ABC", password: "123")
u2 = User.create(username: "DEF", password: "123")

c1 = Client.create(first_name: "Joe", last_name: "Jackson", phone_number: "111-111-1111", email_address: "jjackson23@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u1.id)
c2 = Client.create(first_name: "Dan", last_name: "Rowes", phone_number: "222-222-2222", email_address: "drowes@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u1.id)
c3 = Client.create(first_name: "Stuart", last_name: "Smith", phone_number: "333-333-3333", email_address: "stuarts@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u1.id)
c4 = Client.create(first_name: "Bev", last_name: "Mason", phone_number: "444-444-4444", email_address: "bmason@gmail.com", total_invoiced: 0.00, total_collected: 0.00, user_id: u1.id)

p1 = Property.create(street_address: "111 S One St", city: "Springfield", state: "MO", zip_code: 65807, quoted_amount: 50.00, client_id: c1.id)
# p2 = Property.create(street_address: "111 S One.5 St", city: "Springfield", state: "MO", zip_code: 11111, quoted_amount: 10.00, client_id: c1.id)
p3 = Property.create(street_address: "222 S Two St", city: "Springfield", state: "MO", zip_code: 65803, quoted_amount: 45.00, client_id: c2.id)
# p4 = Property.create(street_address: "222 S Two.5 St", city: "Springfield", state: "MO", zip_code: 22222, quoted_amount: 20.00, client_id: c2.id)
p5 = Property.create(street_address: "333 S Three St", city: "Springfield", state: "MO", zip_code: 65804, quoted_amount: 60.00, client_id: c3.id)
# p6 = Property.create(street_address: "333 S Three.5 St", city: "Springfield", state: "MO", zip_code: 33333, quoted_amount: 30.00, client_id: c3.id)
p7 = Property.create(street_address: "444 S Four St", city: "Springfield", state: "MO", zip_code: 65807, quoted_amount: 40.00, client_id: c4.id)
# p8 = Property.create(street_address: "444 S Four.5 St", city: "Springfield", state: "MO", zip_code: 44444, quoted_amount: 40.00, client_id: c4.id)

# i1 = Invoice.create(invoice_date: "01/01/2021", invoice_amount: 101.00, client_id: c1.id, property_id: p1.id, collected: false, invoiced: true)
# i2 = Invoice.create(invoice_date: "02/02/2022", invoice_amount: 102.00, client_id: c2.id, property_id: p2.id, collected: false, invoiced: true)
# i3 = Invoice.create(invoice_date: "03/03/2023", invoice_amount: 103.00, client_id: c3.id, property_id: p3.id, collected: true, invoiced: true)
# i4 = Invoice.create(invoice_date: "04/04/2024", invoice_amount: 104.00, client_id: c4.id, property_id: p3.id, collected: true, invoiced: true)


puts "done seeding"