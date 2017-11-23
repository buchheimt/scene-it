Rails.application.routes.draw do

  resources :movies, only: [:index]
  resources :posts, only: [:index]
  resources :comments, only: [:index]

end
