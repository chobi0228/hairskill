Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index'
      get 'posts/new'
      get 'posts/show'
      get 'posts/edit'
      get 'posts/create'
      get 'posts/update'
      get 'posts/destroy'
      get 'calendars/index'
      get 'calendars/new'
      get 'calendars/show'
      get 'calendars/edit'
      get 'calendars/create'
      get 'calendars/update'
      get 'calendars/destroy'
      get 'users/index'
      get 'users/new'
      get 'users/show'
      get 'users/edit'
      get 'users/create'
      get 'users/update'
      get 'users/destroy'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
