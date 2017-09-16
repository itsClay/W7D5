class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :is_logged_in?

  def current_user
    @user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
    @user = user
    session[:session_token] = user.reset_session_token
  end

  def log_out
    current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def is_logged_in?
    !!current_user
  end


end