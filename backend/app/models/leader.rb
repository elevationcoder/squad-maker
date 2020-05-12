class Leader < ApplicationRecord
    has_many :character_leaders
    has_many :characters, through: :character_leaders
end
