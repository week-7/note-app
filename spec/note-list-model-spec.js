var explore = kiwi.explore;
var test = kiwi.test;



explore('List', function(){
  test('Initially is empty', function() {
    localStorage.removeItem('TestList'); //Deletes list every time
    var list = List.ListContent();
    kiwi.isEqual(list.length === 0);
  });
  test('creates a note and stores in listContent', function() {
    List.createNote("Hey");
    var list = List.ListContent();
    kiwi.isEqual(list.pop() === "Hey");
  });
});
