Rails.application.routes.draw do

  resources :movies, only: [:index, :show]
  resources :posts, only: [:show]
  resources :comments, only: [:create]

  get '/authenticate', to: 'sessions#show'
  post '/login', to: 'sessions#create'


end
