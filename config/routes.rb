Rails.application.routes.draw do

  resources :users, only: [] do
    resources :movie_points, only: [:index]
    resources :post_points, only: [:index]
    resources :comment_points, only: [:index]
  end

  resources :movies, only: [:index, :show, :update]
  resources :posts, only: [:show, :create, :update]
  resources :comments, only: [:create, :update, :destroy]

  resources :movie_points, only: [:create, :update]
  resources :post_points, only: [:create, :update]
  resources :comment_points, only: [:create, :update]

  get '/authenticate', to: 'sessions#show'
  post '/login', to: 'sessions#create'

end
