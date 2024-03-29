class Api::V1::GreetingsController < ApplicationController
  def index
    greeting = Message.order(Arel.sql('RANDOM()')).first
    render json: { greeting: greeting.greeting }
  end
end
