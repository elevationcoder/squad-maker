class Leader < ApplicationRecord
    has_many :character_leaders, dependent: :destroy
    has_many :characters, through: :character_leaders
end
