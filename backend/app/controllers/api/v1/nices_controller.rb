class Api::V1::NicesController < ApplicationController
  def create
    nice = Nice.create(user_id: params[:user_id], post_id: params[:post_id])
    render json: nice
  end

  def destroy
    nice = Nice.find_by(user_id: params[:user_id], post_id: params[:post_id])
    nice.destroy
  end
end
