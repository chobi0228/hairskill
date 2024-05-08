Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        collection do
         get :follows, :followers
         post :sign_up, :login, :profile, :setting
        end

      end
      resources :relationships, only: [:create, :destroy]
      resources :contacts, only: [:create] do
        collection do
          get :new, :index
        end
      end
      resources :posts do
        collection do
          get :new, :index, :shousai, :setting
        end
      end
      resources :nices, only: [:create, :destroy]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
