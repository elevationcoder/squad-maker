class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]

  
  def index
    # binding.pry
    @characters = Character.all

    render json: @characters, include: :leaders
  end

  
  def show
    # binding.pry
    render json: @character, include: :leaders
  end

  
  def create
    # binding.pry
    @character = Character.new(character_params)
    # binding.pry
    if @character.save
      render json: @character, include: :leaders, status: :created, location: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  
  def update
    # binding.pry
    if @character.review = params[:character][:review]
      @character.save
      render json: @character, include: :leaders
    else
      render json: @character.errors, include: :leaders, status: :unprocessable_entity
    end
  end

  
  def destroy
    @character.destroy
    if Character.all.find_by(id: @character.id).nil?
      render json: {
        message: "Succes"
      }
    else
      render json: {
        message: "Error"
      }
    end
  end

  private
    def set_character
      @character = Character.find(params[:id])
    end

    def character_params
      params.require(:character).permit(:name, :age, :weight, :height, :sex, :race, :klass, leader_ids: [])
    end
end


# function scopey(){
#   var a = "first Value"
#   let b = "first Value"
#   const c = "first Value"
#   d = "first Value"

#   if (true) {
#     var a = "second Value"
#     let b = "second Value"
#     const c = "second Value"
#     d = "second Value"
#   }

#   console.log(a)
#   console.log(b)
#   console.log(c)
#   console.log(d)
# }

# function sayName(){
#   console.log("my name is", theName)

#   var theName = "Jane Doe"
# }
# sayName()



# function sayName(){
#   console.log("my name is", theName)

#   let theName = "Jane Doe"
# }
# sayName()




# function sayName(){
#   console.log("my name is", theName())

#   function theName() {
#     return "Jane Doe"
#   }
# }
# sayName()
