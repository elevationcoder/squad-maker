class Character < ApplicationRecord
    has_many :character_leaders
    has_many :leaders, through: :character_leaders
end
