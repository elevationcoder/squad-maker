class LeadersController < ApplicationController
  before_action :set_leader, only: [:show, :update, :destroy]

  
  def index
    @leaders = Leader.all

    render json: @leaders, include: :characters
  end

  
  def show
    render json: @leader, include: :characters
  end

  
  def create
    @leader = Leader.new(leader_params)

    if @leader.save
      render json: @leader, status: :created, location: @leader
    else
      render json: @leader.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @leader.update(leader_params)
      render json: @leader
    else
      render json: @leader.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @leader.destroy
  end

  private
    
    def set_leader
      @leader = Leader.find(params[:id])
    end

    
    def leader_params
      params.require(:leader).permit(:name, :age, :sex, :race, :rank)
    end
end
