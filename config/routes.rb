Rails.application.routes.draw do
  resources :comments
  resources :spreads
  resources :users
  resources :cards
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
