class SpreadsController < ApplicationController

    def index
        render json: Spread.all
    end

    def show 
        spread = find_spread
        render json: spread
    end

    def create
        spread = Spread.create!(spread_params)
        render json: spread, status: :created
    end

    private

    def find_spread
        Spread.find(params[:id])
    end

    def spread_params
        params.permit(:number, :user_id, :card_id, :created_at, :updated_at, card_id: [])
    end

end
