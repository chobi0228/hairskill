Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        member do
         get :login, :sign_up, :follows, :followers
        end
      end
      resources :relationships, only: [:create, :destroy]
      resources :contacts, only: [:create] do
        collection do
          get :new
        end
      end
      resources :posts do
        collection do
          get :new
        end
      end
      resources :nices, only: [:create, :destroy]
      resources :calendars do
        collection do
          get :new
        end
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
