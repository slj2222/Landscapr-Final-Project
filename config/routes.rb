Rails.application.routes.draw do
  
  resources :properties, only: [:create, :update, :destroy]
  resources :invoices, only: [:create, :update]
  resources :clients, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


  get "/total-invoiced", to: "users#total_invoiced"
  get "/total-collected", to: "users#total_collected"
  get "/total-outstanding", to: "users#total_outstanding"


  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"


  
  


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
