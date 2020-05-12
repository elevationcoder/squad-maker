class LeadersController < ApplicationController
  before_action :set_leader, only: [:show, :update, :destroy]

  # GET /leaders
  def index
    @leaders = Leader.all

    render json: @leaders
  end

  # GET /leaders/1
  def show
    render json: @leader
  end

  # POST /leaders
  def create
    @leader = Leader.new(leader_params)

    if @leader.save
      render json: @leader, status: :created, location: @leader
    else
      render json: @leader.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /leaders/1
  def update
    if @leader.update(leader_params)
      render json: @leader
    else
      render json: @leader.errors, status: :unprocessable_entity
    end
  end

  # DELETE /leaders/1
  def destroy
    @leader.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_leader
      @leader = Leader.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def leader_params
      params.require(:leader).permit(:name, :age, :sex, :race, :rank)
    end
end
