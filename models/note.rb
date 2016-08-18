require 'data_mapper'
require 'dm-postgres-adapter'


class Note

  def initialize(note)
    @note = note
  end

  include DataMapper::Resource

  property :id,     Serial
  property :content,   String

  DataMapper.setup(:default, "postgres://localhost/note_test")
  DataMapper.finalize
  DataMapper.auto_upgrade!
end
