class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    wrap_parameters format: []
    
    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
