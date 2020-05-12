class CharacterLeader < ApplicationRecord
  belongs_to :character
  belongs_to :leader
end
