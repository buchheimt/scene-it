Rails.application.routes.draw do

  resources :movies, only: [:index, :show, :update]
  resources :posts, only: [:show, :create, :update]
  resources :comments, only: [:create, :update]

  get '/authenticate', to: 'sessions#show'
  post '/login', to: 'sessions#create'

end
