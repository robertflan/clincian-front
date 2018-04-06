Rails.application.routes.draw do
  get 'doctor/index'
  get 'doctor/profile'
  get 'doctor/license'
  get 'doctor/final'
  get 'doctor/address'

  get 'patient/index'
  get 'patient/personinfo'
  get 'patient/address'
  get 'patient/profile'
  get 'patient/final'

  get 'home/index'
  root :to=> 'home#index'
  get 'home/personal'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
