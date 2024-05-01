class Api::V1::UsersController < Api::V1::ApplicationController
  def sign_up
    # byebug
    # if User.find_or_create_by(name: params[:name], password: params[:password], email: params[:email],  role: params[:role], gender: params[:gender], authority: 0)
    #   response =  {
    #                 "params" => params,
    #                 "result" => "1"
    #               }
    # else
    #   response =  {
    #                 "params" => params,
    #                 "result" => "2"
    #               }
    # end
    user = User
    if current_user = user.find_by(name: params[:name], password: params[:password], email: params[:email],  role: params[:role], gender: params[:gender], authority: 0)
      response =  {
                    "current_user"=>current_user,
                    "params" => params,
                    "result" => "アカウントは存在しています。"
                  }
    elsif current_user = user.create(name: params[:name], password: params[:password], email: params[:email],  role: params[:role], gender: params[:gender], authority: 0)
      response =  {
                    "current_user"=>current_user,
                    "params" => params,
                    "result" => "アカウントの新規登録に成功しました"
                  }
    else
      response =  {
                    "params" => params,
                    "result" => "アカウントの新規登録に失敗しました。"#
                  }
    end

    render json: response
  end

  def login
    render json: "hello"
  end
  
  def index
  end

  def new
  end

  def show
  end

  def edit
  end

  def create
    # byebug
    # 引数の条件に該当するデータがあればそれを返す。なければ新規作成する
    # user = User.find_or_create_by(id: params[:id], name: params[:name], email: params[:email], authority: 0, role: params[:role], gender: params[:gender], password: params[:password])                      
    # if user
    #   head :ok
    # else
    #   render json: { error: "ログインに失敗しました" }, status: :unprocessable_entity
    # end
    # rescue StandardError => e
    #   render json: { error: e.message }, status: :internal_server_error
    # end

  end

  def update
  end

  def destroy
  end

  def followers
  end

  def follow
  end
end
