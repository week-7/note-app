require 'data_mapper'
require 'dm-postgres-adapter'


class Note
  include DataMapper::Resource

  property :id,     Serial
  property :content,   String

end

DataMapper.setup(:default, "postgres://localhost/note_test")
DataMapper.finalize
DataMapper.auto_upgrade!
