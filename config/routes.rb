Rails.application.routes.draw do

  resources :movies, only: [:index, :show]
  resources :posts, only: [:index]
  resources :comments, only: [:index]

end
