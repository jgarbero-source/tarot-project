class CardsController < ApplicationController
    
    def index
        render json: Card.all
    end

    def show
        card = find_card
        render json: card
    end

    private

    def find_card
        Card.find(params[:id])
    end

end
