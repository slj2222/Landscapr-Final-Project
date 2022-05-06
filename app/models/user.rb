class User < ApplicationRecord
    has_many :clients
    has_secure_password

    validates :username, uniqueness: true
end
