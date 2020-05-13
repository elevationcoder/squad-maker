class Character < ApplicationRecord
    has_many :character_leaders, dependent: :destroy
    has_many :leaders, through: :character_leaders
end
