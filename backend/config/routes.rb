Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        member do
         get :follows, :followers
        end
      end
      resources :relationships, only: [:create, :destroy]
      resources :contacts
      resources :posts
      resources :nices, only: [:create, :destroy]
      resources :calendars
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
