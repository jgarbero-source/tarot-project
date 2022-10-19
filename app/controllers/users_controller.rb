class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def me
        render json: current_user
    end

    def show
        user = find_user
        render json: user, status: :ok
    end

    def index
        render json: User.all
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content, status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :email)
    end

    def find_user
        User.find(params[:id])
    end
end
