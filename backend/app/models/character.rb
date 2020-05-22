class Character < ApplicationRecord
    validates :review, presence: true, allow_blank: true
    has_many :character_leaders, dependent: :destroy
    has_many :leaders, through: :character_leaders
end
