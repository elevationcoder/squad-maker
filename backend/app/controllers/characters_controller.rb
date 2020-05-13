class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]

  
  def index
    @characters = Character.all

    render json: @characters, include: :leaders
  end

  
  def show
    render json: @character, include: :leaders
  end

  
  def create
    @character = Character.new(character_params)

    if @character.save
      render json: @character, status: :created, location: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    binding.pry
    @character.destroy
  end

  private
    def set_character
      @character = Character.find(params[:id])
    end

    def character_params
      params.require(:character).permit(:name, :age, :weight, :height, :sex, :race, :klass, leader_ids: [])
    end
end
