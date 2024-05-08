class Api::V1::UsersController < Api::V1::ApplicationController
  extend ManualProcess
  def sign_up
    # byebug

    user = User
    if current_user = user.find_by(name: params[:name], password: params[:password], email: params[:email])
      response =  {
                    "result" => 1,
                    "current_user"=>current_user,
                    "params" => params,
                    "message" => "アカウントは存在しています。"
                  }
    elsif current_user = user.create(name: params[:name], password: params[:password], email: params[:email])
      response =  {
                    "result" => 2,
                    "current_user"=>current_user,
                    "params" => params,
                    "message" => "アカウントの新規登録に成功しました"
                  }
    else
      response =  {
                    "result" => 3,
                    "params" => params,
                    "message" => "アカウントの新規登録に失敗しました。"
                  }
    end

    render json: response
  end

  def login
    user = User
    if current_user = user.find_by(name: params[:name], password: params[:password])
      response =  {
                    "result" => 1,
                    "current_user"=>current_user,
                    "params" => params,
                    "message" => "ログインしました。"
                  }
    else
      response =  {
                    "result" => 1,
                    "current_user"=>current_user,
                    "params" => params,
                    "message" => "ログインに失敗しました。"
                  }
    end
      render json: response
  end

  def profile
    response = {
      "profile" => User.find(params[:id])
    }
    render json: response
  end

  def setting
    response = {
      "profile" => User.find(params[:id])
    }
    render json: response
  end
  
  def followers
    manual_process(6,  User)
  end
  
  def follow
    manual_process(7,  User)
  end
end
