class Api::UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:id])
    render :show
  end

  def create
    # byebug;
    @user = User.new(user_params);
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
