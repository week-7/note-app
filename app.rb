require 'sinatra'
require './models/note'
require 'json'

class KiwiNotes < Sinatra::Base

  get '/note' do
    "Hello World"
  end

  post '/note' do
    # response['Access-Control-Allow-Origin'] = '*'
    note = Note.create(content: params[:content])
    note.to_json(:only => [:content])
    redirect '/note'
  end

  run! if app_file == $0

end
