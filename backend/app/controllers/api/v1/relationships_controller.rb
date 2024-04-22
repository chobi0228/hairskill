class Api::V1::RelationshipsController < ApplicationController
  def create
    relationship = Relationship.create(follow_id: params[:follow_user_id], follower_id: params[:follower_user_id])
    render json: relationship
  end

  def destroy
    nice = Relationship.find_by(follow_id: params[:follow_user_id], follower_id: params[:follower_user_id])
    nice.destroy
  end
end
