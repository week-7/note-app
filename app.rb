require 'sinatra'
require './models/note'
require 'json'

class KiwiNotes < Sinatra::Base

  before do
     headers 'Access-Control-Allow-Origin' => '*'
  end

  get '/note' do
    notes = Note.all
    return notes.to_json unless notes == nil
  end

  post '/note' do
    note = Note.create(content: request.body.read)
    redirect '/note'
  end

  run! if app_file == $0

end
