class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    wrap_parameters format: []
    
    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { errors: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def total_invoiced
        user = User.find_by(id: session[:user_id])
        totalInvoiced = user.total_invoiced
        render json: totalInvoiced
    end

    def total_collected
        user = User.find_by(id: session[:user_id])
        totalCollected = user.total_collected
        render json: totalCollected
    end

    def total_outstanding
        user = User.find_by(id: session[:user_id])
        totalOutstanding = user.total_outstanding
        render json: totalOutstanding
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end
